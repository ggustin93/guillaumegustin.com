# Conventions

- This checkout is an Astro 5 site deployed to Cloudflare Pages, despite older Hugo/Firebase notes in inherited instructions.
- Static public discovery files live under `public/` and are copied to `dist/` by Astro.
- Cloudflare Pages Functions live under `functions/`; `_middleware.js` can add request-time headers and content negotiation.
- Keep agent discovery truthful: document missing auth services instead of advertising fake OAuth endpoints.
