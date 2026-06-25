# guillaumegustin.be

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fguillaumegustin.be&label=guillaumegustin.be)](https://guillaumegustin.be/)
[![Astro](https://img.shields.io/badge/Astro-5-ff5d01?logo=astro&logoColor=white)](https://astro.build/)
[![Cloudflare Pages](https://img.shields.io/badge/Hosting-Cloudflare%20Pages-f38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20FR-blueviolet)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Personal portfolio for **Guillaume Gustin** — Full-Stack Developer & Biomedical Engineer based in Brussels.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build/) (static output) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Hosting | Cloudflare Pages |
| Images | AVIF / WebP optimised at build via `sharp` |
| Languages | English (`/`), French (`/fr`) |
| Serverless | Cloudflare Pages Functions (contact form → Mailjet) |

## App

The live site lives in **[`astro/`](astro/)** — see [`astro/README.md`](astro/README.md) for dev commands, architecture details, and deploy instructions.

```bash
cd astro
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run deploy   # build + wrangler pages deploy
```

## Archive

[`archive/`](archive/) contains the legacy **Hugo + Firebase** version of the site, kept for reference. See [`archive/README.md`](archive/README.md) for details. Full history is also in git.

## Highlights

- **Performance-first** — optimised assets, minimal JS (~2 KB client script), Lighthouse 90+
- **Data-driven** — all content in `src/data/{en,fr}.ts`, typed via `HomepageData` interface
- **Accessible** — semantic HTML, WCAG AA, 0 axe violations (EN + FR)
- **Écoconception** — static-first, minimal HTTP requests, lazy loading, no unnecessary deps
