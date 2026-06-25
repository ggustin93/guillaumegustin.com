# Archive — Legacy Hugo / Firebase site

**Archived on:** 2026-06-25

## What's here

This folder contains the original **Hugo + Firebase Hosting** version of
[guillaumegustin.be](https://guillaumegustin.be) as it existed before the
migration to Astro + Cloudflare Pages.

| Path | Description |
|------|-------------|
| `config.toml` | Hugo site configuration (Raditian Free Hugo Theme) |
| `layouts/` | Hugo HTML templates (index, partials, shortcodes) |
| `data/en/` `data/fr/` | Hugo data files powering EN + FR content |
| `static/` | Static assets served verbatim by Hugo (CSS, images, fonts, plugins) |
| `deploy.sh` / `deploy-firebase.sh` | Hugo build + Firebase deploy scripts |
| `firebase.json` | Firebase Hosting caching rules |
| `optimize-*.sh` / `replace-images.js` | Hugo-era image optimisation pipeline |
| `package.json` | Root Node project for `replace-images.js` (cheerio + firebase deps) |
| `index.html` / `404.html` | Stale Hugo-generated HTML output |
| `memory-bank/` | Hugo-era memory bank (project docs from before migration) |
| `lighthouse-report/` | Lighthouse audit snapshots from the Firebase site |
| `CHANGELOG.md` | Hugo/Firebase change log |
| `WEBP_AVIF_SUPPORT.md` | Hugo image pipeline documentation |

## Why archived, not deleted

Full history is always in `git log`. Keeping these files as a committed folder
lets you browse, diff, or reference the old implementation without checking out
old commits. The theme (`themes/raditian-free-hugo-theme`) was removed
entirely — it's recoverable from its upstream MIT repo.

## Current site

The live site is in **[`../astro/`](../astro/)** — an Astro 5 app deployed to
Cloudflare Pages. See [`astro/README.md`](../astro/README.md) for details.
