# guillaumegustin.com

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fguillaumegustin.com&label=guillaumegustin.com)](https://guillaumegustin.com/)
![Performance](https://img.shields.io/badge/Performance-96-4c1?logo=lighthouse&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-100-4c1?logo=lighthouse&logoColor=white)
![Best Practices](https://img.shields.io/badge/Best%20Practices-100-4c1?logo=lighthouse&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-100-4c1?logo=lighthouse&logoColor=white)
[![Hugo](https://img.shields.io/badge/Hugo-0.157-ff4088?logo=hugo&logoColor=white)](https://gohugo.io/)
[![Firebase](https://img.shields.io/badge/Hosting-Firebase-dd2c00?logo=firebase&logoColor=white)](https://firebase.google.com/)
![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20FR-blueviolet)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Personal portfolio for **Guillaume Gustin** — Full-Stack Developer & Biomedical Engineer based in Brussels.

## Stack

| Layer | Technology |
|-------|-----------|
| Generator | [Hugo](https://gohugo.io/) |
| Hosting | Firebase |
| Styling | Custom CSS (no framework) |
| Images | AVIF / WebP with fallbacks |
| Languages | English, French |

## Highlights

- **Performance-first** — optimized assets, minimal dependencies, high Lighthouse scores
- **Responsive** — mobile-through-desktop fluid layout
- **Accessible** — semantic HTML, WCAG considerations
- **Lightweight** — no JavaScript frameworks, no CSS frameworks

## Performance & Écoconception

| Lighthouse | Score | How |
|------------|-------|-----|
| Performance | **96** | Critical CSS inlined, async non-blocking stylesheets, hero images eager-loaded with `fetchpriority="high"`, optimized AVIF/WebP images (resized to display dimensions), fast animation fallbacks (0.8s), FCP 1.0s, LCP 2.8s, CLS 0 |
| Accessibility | **100** | Semantic HTML, skip links, WCAG AA contrast ratios, `aria-hidden` on decorative elements, underlined in-text links, 44px touch targets, focus outlines |
| Best Practices | **100** | HTTPS, no deprecated APIs, no console errors, self-hosted fonts and analytics, no mixed content |
| SEO | **100** | Canonical URLs, hreflang (EN/FR), OpenGraph + Twitter Card meta, JSON-LD structured data (Person + WebSite), sitemap.xml, descriptive alt attributes |

**Asset reduction** — removed Bootstrap JS, jQuery, icon CSS libraries, and 22 legacy PNG/JPEG (~2.9 MB). Total JS payload cut by ~115 KB.

**Image pipeline** — 3-tier `<picture>` fallback: AVIF (quality 80) → WebP (quality 85) → PNG. 60+ images converted. Hero images loaded eagerly with `fetchpriority="high"`; everything else lazy-loaded via lozad.js.

**Zero frameworks** — all critical JS minified and inlined (~12 KB). No Bootstrap, no jQuery, no Tailwind. CSS is custom, with critical styles inlined in `<head>`.

**Fonts** — self-hosted Inter (WOFF2 only), preloaded critical weights, FontFaceObserver for FOIT prevention.

**Caching** — Firebase serves static assets with 30-day immutable cache; HTML always revalidates.

**Analytics** — Umami (13 KB, privacy-focused) instead of Google Analytics.

**Écoconception** — static-first architecture, minimal HTTP requests, lazy loading, no unnecessary dependencies. Designed to minimize energy consumption per visit.

## Development

```bash
# Serve locally
hugo server -D

# Build for production
hugo --minify
```

## Credits

Based on [Raditian Free Hugo Theme](https://github.com/radity/raditian-free-hugo-theme) (MIT License) with extensive customizations.
