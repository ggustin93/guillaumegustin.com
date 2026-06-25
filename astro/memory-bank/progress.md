# Progress

## Done

- 2026-06-25: Added agent-readiness discovery support for Cloudflare Pages/Astro site: homepage `Link` headers, Markdown negotiation for `/` and `/fr`, API catalog, OpenAPI contact endpoint description, Auth.md, MCP server card, and agent skills index.
- 2026-06-25: Added guarded WebMCP registration for profile summary and contact-message preparation tools.

## Next

- Deploy to Cloudflare Pages and rescan `https://guillaumegustin.be/`.
- Add DNS-AID records in Cloudflare DNS if the agent-readiness score should cover DNS discovery.

## Blockers

- DNS-AID cannot be fixed from the repo; it requires DNS records.

## Decisions

- Do not publish fake OAuth/OIDC metadata: the site has no OAuth service or protected agent API.
