# Tasks

## Current Goal

- Keep the Astro portfolio tree clean while preserving active SEO, Cloudflare, and agent-readiness work.

## Completed

- Archived obsolete/local artifacts into `archive/2026-06-25-cleanup/`: session export, prod-check screenshots, misplaced parent memory-bank task note, and Serena tool state.
- Added `archive/` to `.gitignore` for local cleanup artifacts.
- Rewrote EN/FR metadata and on-page copy around responsible software for mission-driven organisations.
- Updated `public/llms.txt` and Person JSON-LD to align with eHealth, public sector, GIS, AI engineering, Responsible IT, and biomedical-engineering expertise.
- Added `functions/_middleware.js` for `Accept: text/markdown` homepage negotiation and discovery `Link` headers.
- Added `.well-known` discovery documents for API catalog, MCP server card, and agent skills.
- Added `public/openapi.json` for the existing `POST /api/contact` endpoint.
- Added `public/auth.md` documenting that no OAuth/account authentication is available.
- Added WebMCP tool registration in `src/scripts/main.ts`.

## Acceptance

- `npm run check` passes.
- `npm run build` passes.
- Obsolete artifacts are archived, not deleted.
- Parent Hugo assets remain untouched unless explicitly confirmed obsolete.
- EN/FR metadata remains concise and semantically aligned.
- Middleware mock returns `text/markdown` for homepage Markdown requests and `Link` headers for normal homepage requests.
