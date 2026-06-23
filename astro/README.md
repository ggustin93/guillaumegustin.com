# guillaumegustin.be — Astro 5

Réimplémentation moderne du site Hugo (racine du repo) en **Astro 5 + Tailwind CSS 4**.
Portfolio one-page bilingue : EN à `/`, FR à `/fr`.

## Commandes

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # sert dist/ en local
npx astro check    # type-checking (données EN/FR validées par l'interface partagée)
```

## Architecture

- `src/data/{en,fr}.ts` — tout le contenu, typé par `src/data/types.ts` (`satisfies HomepageData` : une clé manquante en FR casse le build)
- `src/data/images.ts` — registre central des images (`src/assets/img/`, optimisées AVIF/WebP au build par sharp)
- `src/components/` — un composant par section ; styles scopés par composant
- `src/styles/global.css` — tokens Tailwind 4 (`@theme`), fonts Inter auto-hébergées, animations reveal
- `src/scripts/main.ts` — unique script client (~2 KB) : sticky header, menu mobile, scroll-reveal, lightbox
- SEO : head complet dans `src/layouts/BaseLayout.astro` (canonical, hreflang, OG, Twitter, JSON-LD Person + WebSite), sitemap via `@astrojs/sitemap`

## Bascule Firebase (étape finale, à faire après validation)

1. `firebase.json` : `"public": "astro/dist"`
2. Headers : ajouter `/_astro/**` → `Cache-Control: public, max-age=31536000, immutable` (assets hashés) ; garder no-cache pour HTML
3. Garder `cleanUrls: true` et `trailingSlash: false` (aligné avec `trailingSlash: 'never'` d'Astro)
4. Tester d'abord sur un preview channel : `firebase hosting:channel:deploy astro-preview`
5. Lighthouse sur l'URL du channel (le Lighthouse local est peu fiable)
6. Une fois en prod : supprimer les fichiers Hugo dans un commit de cleanup séparé
