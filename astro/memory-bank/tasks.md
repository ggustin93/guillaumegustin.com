# Tasks

## Current Goal

- Improve the agent-readiness scan for `https://guillaumegustin.be/` without misrepresenting unavailable services.

## Completed

- Added `functions/_middleware.js` for `Accept: text/markdown` homepage negotiation and discovery `Link` headers.
- Added `.well-known` discovery documents for API catalog, MCP server card, and agent skills.
- Added `public/openapi.json` for the existing `POST /api/contact` endpoint.
- Added `public/auth.md` documenting that no OAuth/account authentication is available.
- Added WebMCP tool registration in `src/scripts/main.ts`.

## Acceptance

- `npm run check` passes.
- `npm run build` passes.
- Middleware mock returns `text/markdown` for homepage Markdown requests and `Link` headers for normal homepage requests.
