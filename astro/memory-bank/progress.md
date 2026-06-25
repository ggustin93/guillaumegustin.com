# Progress

## Done

- 2026-06-25: Cleanup/archive pass. Added ignored `archive/`, moved session export, temporary prod screenshots, misplaced parent memory-bank task note, local Serena state, ignored Astro generated folders, and root local Firebase/Playwright caches into `archive/2026-06-25-cleanup/`. Kept active Astro/Cloudflare source in place. Left parent Hugo Ghostly images and legacy YAML untouched because dirty legacy files still reference them.
- 2026-06-25: Continued exported SEO session and improved Astro portfolio copy. Rewrote EN/FR meta descriptions, hero/about/contact copy, selected project descriptions, `public/llms.txt`, and Person JSON-LD topics around responsible software, eHealth, public sector, GIS, AI engineering, Responsible IT, and Guillaume's biomedical background. Verified `npm run check` and `npm run build`.
- 2026-06-25: Added agent-readiness discovery support for Cloudflare Pages/Astro site: homepage `Link` headers, Markdown negotiation for `/` and `/fr`, API catalog, OpenAPI contact endpoint description, Auth.md, MCP server card, and agent skills index.
- 2026-06-25: Added guarded WebMCP registration for profile summary and contact-message preparation tools.

## Next

- Review `/` and `/fr` visually after deploy; request Search Console recrawl once production copy is live.
- Deploy to Cloudflare Pages and rescan `https://guillaumegustin.be/`.
- Review Cloudflare “AI Scrapers and Crawlers” policy if AI-search discoverability is desired.
- Add DNS-AID records in Cloudflare DNS if the agent-readiness score should cover DNS discovery.

## Blockers

- DNS-AID cannot be fixed from the repo; it requires DNS records.

## Decisions

- Do not publish fake OAuth/OIDC metadata: the site has no OAuth service or protected agent API.
