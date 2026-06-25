const DISCOVERY_LINKS = [
  '</llms.txt>; rel="alternate"; type="text/markdown"',
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/agent-skills/index.json>; rel="service-desc"; type="application/json"',
  '</.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json"',
];

const DISCOVERY_LINK_HEADER = DISCOVERY_LINKS.join(', ');
const MARKDOWN_PATHS = new Set(['/', '/fr']);

function wantsMarkdown(request) {
  const accept = request.headers.get('Accept') || '';
  return accept
    .split(',')
    .map((part) => part.trim().toLowerCase())
    .some((part) => part.startsWith('text/markdown'));
}

function markdownTokenEstimate(markdown) {
  return String(Math.ceil(markdown.split(/\s+/).filter(Boolean).length * 1.35));
}

async function markdownHomepageResponse(context) {
  const assetUrl = new URL('/llms.txt', context.request.url);
  const assetRequest = new Request(assetUrl.toString(), context.request);
  const assetResponse = context.env?.ASSETS
    ? await context.env.ASSETS.fetch(assetRequest)
    : await fetch(assetRequest);
  const markdown = await assetResponse.text();

  return new Response(context.request.method === 'HEAD' ? null : markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
      Vary: 'Accept',
      Link: DISCOVERY_LINK_HEADER,
      'X-Markdown-Tokens': markdownTokenEstimate(markdown),
    },
  });
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const isDiscoveryPage = MARKDOWN_PATHS.has(url.pathname);
  const canNegotiate = context.request.method === 'GET' || context.request.method === 'HEAD';

  if (isDiscoveryPage && canNegotiate && wantsMarkdown(context.request)) {
    return markdownHomepageResponse(context);
  }

  const response = await context.next();

  if (!isDiscoveryPage || !canNegotiate) return response;

  const headers = new Headers(response.headers);
  headers.append('Link', DISCOVERY_LINK_HEADER);
  headers.append('Vary', 'Accept');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
