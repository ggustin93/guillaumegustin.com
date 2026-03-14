# guillaumegustin.com — Project Instructions

## Stack

- **Generator**: Hugo (v0.157+) with Raditian Free Hugo Theme (submodule in `themes/`)
- **Hosting**: Firebase Hosting (`firebase.json`)
- **Styling**: Custom CSS — no frameworks (no Bootstrap JS, no jQuery, no Tailwind)
- **Images**: AVIF → WebP → PNG fallback via `layouts/partials/responsive-image.html`
- **Languages**: EN (default) + FR (`data/en/`, `data/fr/`)
- **Analytics**: Umami (privacy-focused, 13 KB)
- **Fonts**: Self-hosted Inter (WOFF2 only), preloaded

## Key Files

| File | Purpose |
|------|---------|
| `layouts/partials/head.html` | Critical inline CSS + animation fallbacks + async CSS loading |
| `layouts/partials/header.html` | Navbar with logo, nav links, language switcher |
| `layouts/partials/showcase.html` | Hero section (LCP element) |
| `static/css/main.css` | Main stylesheet (minified, includes Bootstrap grid + custom styles) |
| `static/css/custom.css` | Custom overrides (loaded with `?v=md5hash` cache busting) |
| `deploy-firebase.sh` | Build (`hugo --minify`) + deploy to Firebase |
| `config.toml` | Hugo config, plugin CSS/JS registration |

## Caching — Critical Knowledge

### Firebase caching rules (`firebase.json`)
- **Static assets** (CSS, JS, images, fonts): `max-age=2592000` (30 days), `immutable`
- **HTML/JSON**: `no-cache, no-store, must-revalidate` (always fresh)

### Cache busting
- `custom.css` has cache busting: `?v={{ md5hash }}` — changes to the file produce a new URL
- `main.css` has **NO cache busting** — URL stays `/css/main.css` across deploys
- **Consequence**: after modifying `main.css`, returning visitors may see the old cached version for up to 30 days
- **Workaround**: hard refresh (Cmd+Shift+R) or private browsing clears browser cache. Firebase CDN serves fresh files after each deploy, but browser-side cache persists.

### After deploying CSS changes
1. Firebase CDN always serves the latest deployed version
2. But browsers with cached CSS will keep the old version until cache expires
3. To verify a deploy, always test in **private/incognito browsing** or **hard refresh**
4. Consider adding cache busting to `main.css` (like `custom.css` has) if CSS changes frequently

## CSS Architecture

### Critical inline CSS (in `head.html`)
- Bootstrap grid essentials, navbar layout, showcase section, header styles
- Includes `.collapse:not(.show){display:none}` AND the desktop override `.navbar-expand-lg .navbar-collapse{display:flex!important}`
- Both rules must stay in sync — if collapse is hidden, desktop override must be present

### Async CSS loading
- `main.css` and plugin CSS loaded with `media="print" onload="this.media='all'"` pattern
- This prevents render-blocking but means styles apply after initial paint
- The critical inline CSS must contain everything needed for above-the-fold content

### Animation system
- Classes: `rad-fade-in`, `rad-fade-in-long`, `rad-fade-down`, `rad-scale-down`
- Fallback animations play immediately (0.8s–1.2s duration)
- When `fonts-loaded` class is on `<body>` (via FontFaceObserver JS), `rad-waiting` → `rad-animate` sequence triggers
- **Never set fallback animation duration > 1.5s** — it blocks LCP and makes content invisible

### Print media query in main.css
- Contains `.navbar{display:none}` — this is correct (hide navbar when printing)
- This rule is inside `@media print{}` — if it ever leaks out, the navbar disappears entirely

## Image Pipeline

- Source images in `static/img/`
- Use `<picture>` with AVIF source + WebP fallback via `responsive-image.html` partial
- Hero images: eager loading with `fetchpriority="high"` (no lozad lazy loading)
- All other images: lazy-loaded via lozad.js (IntersectionObserver)
- Resize images to display dimensions (not oversized originals)
- Pipeline: `dwebp` → `ffmpeg -vf scale=WIDTHx-1` → `cwebp`/`avifenc`

## Build & Deploy

```bash
# Local dev
hugo server -D

# Production build + deploy
./deploy-firebase.sh    # runs: hugo --minify && firebase deploy --only hosting
```

## Lighthouse Targets

| Category | Target | Current |
|----------|--------|---------|
| Performance | 90+ | 96 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

## Common Pitfalls

1. **Navbar invisible**: Usually caused by CSS animation fallbacks keeping `opacity: 0` too long, or `main.css` cache serving old broken version
2. **LCP not detected**: Hero section must not have `rad-fade-down` class (keeps content at opacity 0). Hero images must be eager-loaded, not lozad lazy
3. **CSS changes not visible in prod**: Browser cache (30-day immutable). Test in private browsing.
4. **main.css rollback**: `static/css/main.css` overrides `themes/.../static/css/main.css`. Always edit the project root version.
