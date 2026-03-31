# Audit Écoconception Web - guillaumegustin.com

**Date**: 7 novembre 2024
**Score actuel estimé**: 35/100
**Score cible**: 85+/100 (Grade A)
**Priorité globale**: 🔴 CRITIQUE

**Note**: En tant que fondateur de Pwablo (agence web durable), votre site doit être exemplaire en écoconception!

---

## Table des matières

1. [Résumé exécutif](#résumé-exécutif)
2. [Impact environnemental](#impact-environnemental)
3. [Problèmes critiques](#problèmes-critiques)
4. [Optimisation des ressources](#optimisation-des-ressources)
5. [Hébergement et infrastructure](#hébergement-et-infrastructure)
6. [Performance et chargement](#performance-et-chargement)
7. [Plan d'action](#plan-daction)
8. [Mesure et monitoring](#mesure-et-monitoring)

---

## Résumé exécutif

### Poids actuel estimé

| Ressource | Poids | % du total |
|-----------|-------|------------|
| **Polices web** | ~4.5 MB | 82% |
| **CSS** | ~220 KB | 4% |
| **JavaScript** | ~220 KB | 4% |
| **Images** | ~400 KB | 7% |
| **HTML** | ~50 KB | 1% |
| **Autres** | ~100 KB | 2% |
| **TOTAL** | **~5.5 MB** | 100% |

### Impact environnemental

**Avant optimisations**:
- **Poids page**: 5.5 MB
- **CO₂ par visite**: ~3.3 g
- **1,000 visites/mois**: 39.6 kg CO₂/an
- **Équivalent**: 175 km en voiture/an

**Après optimisations** (objectif):
- **Poids page**: 1.2 MB (-78%)
- **CO₂ par visite**: ~0.7 g
- **1,000 visites/mois**: 8.4 kg CO₂/an
- **Équivalent**: 37 km en voiture/an

**Réduction**: **31 kg CO₂/an** 🌱

---

## Impact environnemental

### Méthodologie de calcul

**Formule Sustainable Web Design**:
```
CO₂ = Transfert de données (MB) × 0.6 g CO₂/MB
```

**Facteurs**:
- Production électricité (réseau)
- Consommation data centers
- Réseaux de transmission
- Appareils utilisateurs

### Benchmarks

| Type de site | Poids moyen | Grade |
|--------------|-------------|-------|
| Portfolio minimaliste | 500 KB | A+ |
| Portfolio standard | 1-2 MB | A |
| Portfolio riche | 2-4 MB | B |
| **Votre site actuel** | **5.5 MB** | **D** |
| Portfolio lourd | 8+ MB | F |

**Objectif**: Grade A (< 2 MB)

### Comparaison sectorielle

**Sites de portfolios de développeurs**:
- Site exemplaire éco-conçu: ~800 KB
- Site bien optimisé: 1.5 MB
- **Votre site**: 5.5 MB ⚠️
- Site moyen: 3 MB
- Site lourd: 8+ MB

---

## Problèmes critiques

### 1. 🔴 Polices Web - PROBLÈME MAJEUR

**Impact**: 82% du poids total de la page
**Poids**: ~4.5 MB
**Fichiers**: 42 fichiers de polices

#### Analyse détaillée

**Police Inter**:
```
21 fichiers .woff2 (Thin → Black, Regular + Italic) : ~2.0 MB
21 fichiers .woff (fallback)                        : ~2.6 MB
3 fichiers variable fonts                           : ~900 KB
─────────────────────────────────────────────────────────────
Total Inter                                         : ~5.5 MB
```

**Problème**: Vous chargez **TOUTES les variantes** alors que vous n'en utilisez probablement que 3-4.

**Police AutumnMoon**:
```
.ttf   : 461 KB
.otf   : 107 KB
.woff  : 155 KB
.woff2 :  79 KB
─────────────────
Total  : ~800 KB
```

**Problème**: 4 formats pour 1 police (seul woff2 nécessaire pour navigateurs modernes).

**Icônes Raditian**:
```
.eot   : 11 KB
.ttf   : 11 KB
.woff  :  7 KB
.woff2 :  6 KB
.svg   : 9.5 KB
─────────────────
Total  : ~45 KB
```

**Icônes embedded** (`rad-icons-embedded.css`): 26 KB en base64
- Problème: Pas de cache, inclus dans CSS

#### Solution 1: Utiliser Variable Font (RECOMMANDÉ)

**Bénéfice**: 42 fichiers → 1 fichier = **92% de réduction**

**Action**: Remplacer tous les fichiers Inter par variable font

**Créer**: `static/fonts/inter/inter-optimized.css`
```css
/* Police variable Inter - Supporte tous les poids (100-900) */
@font-face {
  font-family: 'Inter';
  font-weight: 100 900;
  font-style: oblique 0deg 10deg;
  src: url('Inter.var.woff2') format('woff2-variations');
  font-display: swap; /* Affiche police système pendant chargement */
}

/* Fallback pour navigateurs anciens */
@font-face {
  font-family: 'Inter Fallback';
  font-weight: 100 900;
  font-style: normal;
  src: local('Arial'), local('Helvetica');
  size-adjust: 107%; /* Ajustement pour métrique similaire */
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}

/* Utilisation */
body {
  font-family: 'Inter', 'Inter Fallback', system-ui, -apple-system, sans-serif;
}
```

**Supprimer**: `static/fonts/inter/inter.css` (ancien fichier)

**Résultat**:
- Avant: ~4.6 MB (Inter complet)
- Après: 384 KB (Inter.var.woff2)
- **Réduction: 92%** 🎉

#### Solution 2: Charger seulement les poids utilisés

**Si variable font non souhaité**, charger uniquement:
```css
/* Charger SEULEMENT les poids utilisés */
@font-face {
  font-family: 'Inter';
  font-weight: 400;
  font-style: normal;
  src: url('Inter-Regular.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  font-weight: 600;
  font-style: normal;
  src: url('Inter-SemiBold.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  font-weight: 700;
  font-style: normal;
  src: url('Inter-Bold.woff2') format('woff2');
  font-display: swap;
}
```

**Résultat**:
- 3 fichiers × ~93 KB = ~280 KB
- **Réduction: 94%**

#### Solution 3: Police système (ULTRA-ÉCO)

**Impact**: 0 MB, 0 requête HTTP, 0 g CO₂

```css
/* Stack de polices système natives */
body {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
}

/* Pour code/mono */
code, pre {
  font-family:
    ui-monospace,
    'Cascadia Code',
    'Source Code Pro',
    Menlo,
    Consolas,
    'DejaVu Sans Mono',
    monospace;
}
```

**Avantages**:
- ✅ 0 KB
- ✅ Chargement instantané
- ✅ Look natif par plateforme
- ✅ Excellent pour performance

**Inconvénient**:
- ❌ Perte de branding typographique

#### Optimisation AutumnMoon

**Si vraiment nécessaire**:
```css
/* Garder UNIQUEMENT woff2 */
@font-face {
  font-family: 'AutumnMoon';
  src: url('AutumnMoon.woff2') format('woff2');
  font-display: swap;
}
```

**Action**: Supprimer .ttf, .otf, .woff (garder seulement .woff2)

**Résultat**: 800 KB → 79 KB (-90%)

#### Optimisation icônes

**Option 1: Passer à SVG sprites** (recommandé)
```html
<!-- Un seul fichier SVG sprite (< 10 KB) -->
<svg class="icon icon-mail">
  <use xlink:href="/icons-sprite.svg#mail"></use>
</svg>
```

**Option 2: Garder icon font mais optimiser**
```css
/* Garder seulement woff2 */
@font-face {
  font-family: 'rad-icons';
  src: url('rad-icons.woff2') format('woff2');
  font-display: block; /* Évite FOIT pour icônes */
}
```

**Action**: Supprimer .eot, .ttf, .woff, .svg

**Résultat**: 45 KB → 6 KB (-87%)

#### 📋 Checklist Polices

**Option recommandée: Variable Font**
- [ ] Garder uniquement `Inter.var.woff2` (384 KB)
- [ ] Supprimer tous les autres fichiers Inter (42 fichiers)
- [ ] Créer `inter-optimized.css` avec variable font
- [ ] Mettre à jour référence dans config.toml ou baseof.html
- [ ] Ajouter `font-display: swap`
- [ ] Tester tous les poids (300, 400, 500, 600, 700)

**AutumnMoon**
- [ ] Déterminer si vraiment nécessaire
- [ ] Si oui: garder seulement .woff2
- [ ] Supprimer .ttf, .otf, .woff
- [ ] Si non: supprimer complètement

**Icônes**
- [ ] Évaluer migration vers SVG sprites
- [ ] Sinon: garder seulement .woff2
- [ ] Supprimer formats legacy

**Résultat attendu**: 4.5 MB → 400 KB (-91%) 🌱

---

### 2. 🟡 CSS non optimisé

**Impact**: 7% du poids
**Poids**: ~220 KB

#### Analyse

```
main.css              : 176 KB (Bootstrap complet?)
rad-icons-embedded.css:  26 KB (icons en base64)
custom.css            :  11 KB (OK)
rad-icons.css         :   3 KB
animation.css         :   2 KB
─────────────────────────────────
Total                 : ~220 KB
```

#### Problème 1: Bootstrap non optimisé

**Fichier**: `static/css/main.css` (176 KB)

Probablement:
- ❌ Bootstrap complet (alors que vous n'utilisez que grid + quelques composants)
- ❌ CSS inutilisé (règles jamais appliquées)
- ❌ Pas de minification ou compression

**Estimation**: 60-70% du CSS inutilisé

#### Solution 1: PurgeCSS (recommandé)

**Installation**:
```bash
npm install -D @fullhuman/postcss-purgecss autoprefixer cssnano
```

**Créer**: `postcss.config.js`
```javascript
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: [
        './layouts/**/*.html',
        './data/**/*.yml',
        './static/js/**/*.js'
      ],
      // Classes dynamiques à préserver
      safelist: [
        'show',
        'active',
        'fade',
        'lozad',
        'img-zoom',
        /^rad-/,        // Classes raditian
        /^col-/,        // Classes grille Bootstrap
        /^badge-/,
        /^btn-/
      ],
      // Whitelist par pattern
      whitelistPatterns: [
        /^is-/,
        /^has-/
      ],
      // Nettoyer les keyframes non utilisées
      keyframes: true,
      // Nettoyer les font-face non utilisées
      fontFace: true
    }),
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
        minifyFontValues: true
      }]
    }),
    require('autoprefixer')
  ]
};
```

**Intégration Hugo**:

**Option A**: Via Hugo Pipes (si Hugo installé)
```html
<!-- layouts/_default/baseof.html -->
{{ $css := resources.Get "css/main.css" }}
{{ $css = $css | resources.PostCSS }}
{{ $css = $css | resources.Minify }}
{{ $css = $css | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">
```

**Option B**: Via npm script
```json
// package.json
{
  "scripts": {
    "css:purge": "purgecss --css static/css/main.css --content 'layouts/**/*.html' 'data/**/*.yml' --output static/css/main.min.css",
    "css:build": "npm run css:purge && cssnano static/css/main.min.css static/css/main.min.css"
  }
}
```

**Résultat attendu**: 176 KB → 50 KB (-70%)

#### Solution 2: Bootstrap personnalisé

**Si vous contrôlez le build Bootstrap**, n'importer que ce dont vous avez besoin:

```scss
// custom-bootstrap.scss
// Imports seulement ce qui est utilisé

// Configuration
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

// Layout & components utilisés
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/forms";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/badge";
@import "bootstrap/scss/utilities";

// Exclure ce qui n'est PAS utilisé:
// - Modal
// - Carousel
// - Dropdown
// - Navbar
// - etc.
```

**Résultat**: 176 KB → 60 KB (-65%)

#### Problème 2: Icônes embedded

**Fichier**: `static/css/rad-icons-embedded.css` (26 KB)

Icons encodées en base64 dans CSS:
```css
@font-face {
  src: url(data:application/font-woff2;charset=utf-8;base64,d09GMgABA...)
}
```

**Problèmes**:
- ❌ Pas de cache (inclus dans CSS)
- ❌ Augmente taille CSS
- ❌ Pas de chargement parallèle

**Solution**: Utiliser fichier séparé
```css
@font-face {
  font-family: 'rad-icons';
  src: url('/fonts/rad-icons.woff2') format('woff2');
  font-display: block;
}
```

**Bénéfice**: Cache navigateur, chargement parallèle

#### Problème 3: Préfixes vendor obsolètes

**Fichier**: `static/css/custom.css:12-27`
```css
/* Préfixes inutiles pour navigateurs modernes */
-webkit-transition: all 1s ease; /* Safari 6 (2012) */
-moz-transition: all 1s ease;    /* Firefox 15 (2012) */
-ms-transition: all 1s ease;     /* IE 9 (2011) */
-o-transition: all 1s ease;      /* Opera 12 (2012) */
transition: all 1s ease;
```

**Support navigateur moderne** (2024):
- Chrome/Edge: 95%+
- Firefox: 90%+
- Safari: 95%+

**Solution**: Supprimer préfixes, garder seulement standard
```css
/* Suffisant pour 98%+ des navigateurs */
transition: all 1s ease;
transform: scale(1.25);
```

**Si vraiment besoin de support ancien**: Utiliser Autoprefixer (automatique)

#### 📋 Checklist CSS

- [ ] Installer PurgeCSS via npm
- [ ] Configurer `postcss.config.js`
- [ ] Créer script build CSS
- [ ] Intégrer dans workflow (deploy.sh)
- [ ] Supprimer rad-icons-embedded.css
- [ ] Utiliser rad-icons.woff2 séparé
- [ ] Supprimer préfixes vendor manuels
- [ ] Activer Autoprefixer
- [ ] Tester apparence après optimisation
- [ ] Vérifier responsive

**Résultat attendu**: 220 KB → 70 KB (-68%) 🌱

---

### 3. 🟡 JavaScript non optimisé

**Impact**: 7% du poids
**Poids**: ~220 KB

#### Analyse

```
jquery-3.3.1.slim.min.js  : 69 KB
bootstrap.bundle.min.js   : 76 KB
bootstrap.min.js          : 56 KB  ← DOUBLON!
smooth-scroll.polyfills.js:  6.5 KB
fontfaceobserver.js       :  4.5 KB
lozad.min.js              :  3 KB
rad-animations.js         :  1 KB
sticky-header.js          :  1 KB
subscription.js           :  1.5 KB
header.js                 :  1 KB
───────────────────────────────────
Total                     : ~220 KB
```

#### Problème 1: Doublon Bootstrap

Vous avez:
- `bootstrap.bundle.min.js` (76 KB) - Inclut Popper.js
- `bootstrap.min.js` (56 KB) - Sans Popper.js

**Solution**: Garder seulement `bootstrap.bundle.min.js` OU `bootstrap.min.js`

**Gain**: -56 KB

#### Problème 2: jQuery nécessaire?

**Question**: Est-ce que jQuery est vraiment utilisé?

**Vérifier**:
```bash
# Chercher usage jQuery dans vos scripts
grep -r "\$(" static/js/
grep -r "jQuery" static/js/
```

**Si jQuery n'est PAS utilisé**: Supprimer (-69 KB)

**Si jQuery est utilisé**: Considérer migration vanilla JS

**Exemple de migration**:
```javascript
// Avant (jQuery)
$('.class').on('click', function() {
  $(this).addClass('active');
});

// Après (Vanilla JS)
document.querySelectorAll('.class').forEach(el => {
  el.addEventListener('click', function() {
    this.classList.add('active');
  });
});
```

**Gain potentiel**: -69 KB

#### Problème 3: Bootstrap JS utilisé?

**Vérifier usage**:
- Modal? Non visible dans le code
- Dropdown? Non visible
- Collapse? Non visible
- Tooltip/Popover? Non visible

**Si Bootstrap JS non utilisé**: Supprimer (-76 KB)

**Résultat**: HTML/CSS Bootstrap seulement

#### Problème 4: Lazy loading natif

**Fichier actuel**: Lozad.js (3 KB) + initialization

**Alternative native** (0 KB):
```html
<!-- Lazy loading natif navigateur -->
<img src="image.webp" loading="lazy" alt="...">
```

**Support**: 94% des navigateurs (2024)

**Bénéfice**: -3 KB + -1 KB (init) = -4 KB

**Si besoin fallback**:
```javascript
// Fallback léger pour vieux navigateurs (< 1 KB)
if ('loading' in HTMLImageElement.prototype) {
  // Navigateur supporte loading="lazy"
  const images = document.querySelectorAll('img[loading="lazy"]');
} else {
  // Charger polyfill seulement si nécessaire
  import('./lozad.min.js').then(module => {
    const lozad = module.default;
    lozad().observe();
  });
}
```

#### Problème 5: Font Face Observer nécessaire?

**Utilité**: Détecter quand font est chargée

**Alternative CSS**: `font-display: swap`
```css
@font-face {
  font-family: 'Inter';
  src: url('Inter.var.woff2') format('woff2');
  font-display: swap; /* Affiche fallback immédiatement */
}
```

**Bénéfice**: -4.5 KB + meilleure UX

#### Solution: Bundle optimisé

**Créer**: `static/js/bundle.js` (avec seulement ce qui est utilisé)

```javascript
// Lazy loading natif
document.addEventListener('DOMContentLoaded', () => {
  // Sticky header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Smooth scroll pour anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animations au scroll (Intersection Observer - natif)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.rad-animation-group').forEach(el => {
    observer.observe(el);
  });
});
```

**Minifier** avec Terser:
```bash
npx terser static/js/bundle.js -o static/js/bundle.min.js -c -m
```

**Résultat**: ~220 KB → ~10 KB (-95%) 🎉

#### 📋 Checklist JavaScript

**Analyse**
- [ ] Vérifier si jQuery est utilisé (grep)
- [ ] Vérifier si Bootstrap JS est utilisé
- [ ] Lister fonctionnalités JS réellement nécessaires

**Nettoyage**
- [ ] Supprimer doublon bootstrap.min.js
- [ ] Supprimer jQuery si non utilisé (-69 KB)
- [ ] Supprimer Bootstrap JS si non utilisé (-76 KB)
- [ ] Remplacer Lozad par loading="lazy" natif (-3 KB)
- [ ] Supprimer Font Face Observer (-4.5 KB)
- [ ] Supprimer smooth-scroll polyfill (utiliser CSS) (-6.5 KB)

**Consolidation**
- [ ] Créer bundle.js avec fonctionnalités nécessaires
- [ ] Minifier avec Terser
- [ ] Tester toutes les fonctionnalités
- [ ] Defer ou async pour scripts non-critiques

**Résultat attendu**: 220 KB → 10-20 KB (-90%) 🌱

---

### 4. 🟢 Images - Déjà bien optimisées

**Impact**: 7% du poids
**Poids**: ~400 KB

#### Points positifs

- ✅ WebP/AVIF implémentés
- ✅ Responsive images (`<picture>`)
- ✅ Lazy loading
- ✅ Qualité raisonnable (85/80)

#### Améliorations possibles

**1. Lazy loading natif**
```html
<!-- Au lieu de Lozad.js -->
<img src="image.webp"
     loading="lazy"
     decoding="async"
     alt="...">
```

**2. Fetch priority pour hero image**
```html
<!-- Image showcase - prioritaire -->
<img src="showcase.webp"
     fetchpriority="high"
     alt="...">

<!-- Images below fold - lazy -->
<img src="project.webp"
     loading="lazy"
     fetchpriority="low"
     alt="...">
```

**3. Compression agressive**

Utiliser Squoosh ou Sharp pour recompresser:
```bash
# Avec sharp-cli
npm install -g sharp-cli
sharp -i input.png -o output.webp --webp-quality 75
```

**Objectif**: Quality 80 → 70 pour images non-critiques
**Gain**: 10-15% supplémentaire

**4. Dimensions exactes**

Vérifier que les images ne sont pas surdimensionnées:
```html
<!-- Si affiché à 400px max, ne pas servir 1200px -->
<img src="image-400w.webp"
     srcset="image-400w.webp 400w,
             image-800w.webp 800w"
     sizes="(max-width: 768px) 100vw, 400px"
     alt="...">
```

#### 📋 Checklist Images

- [ ] Remplacer Lozad par loading="lazy" natif
- [ ] Ajouter fetchpriority="high" sur showcase image
- [ ] Recompresser images à quality 70-75 (non-critiques)
- [ ] Vérifier dimensions (pas de oversizing)
- [ ] Ajouter `decoding="async"` sur toutes les images
- [ ] Tester avec Lighthouse (vérifier LCP)

**Résultat attendu**: 400 KB → 300 KB (-25%)

---

## Optimisation des ressources

### 5. HTTP/2 et compression

#### Compression Brotli

**Firebase Hosting**: Active automatiquement Gzip/Brotli

**Vérifier**:
```bash
curl -H "Accept-Encoding: br" -I https://guillaumegustin.com/
# Chercher: content-encoding: br
```

**Si non activé**, vérifier `firebase.json`:
```json
{
  "hosting": {
    "public": "public",
    "headers": [
      {
        "source": "**/*.@(js|css|html|json|xml|txt)",
        "headers": [{
          "key": "Content-Encoding",
          "value": "br"
        }]
      }
    ]
  }
}
```

#### HTTP/2 Server Push (optionnel)

**Pré-charger ressources critiques**:
```json
{
  "hosting": {
    "headers": [
      {
        "source": "/",
        "headers": [{
          "key": "Link",
          "value": "</css/main.css>; rel=preload; as=style, </js/bundle.js>; rel=preload; as=script"
        }]
      }
    ]
  }
}
```

**Attention**: Peut augmenter bytes initiaux si mal utilisé

#### Resource Hints

**Ajouter dans** `<head>`:
```html
<!-- Preconnect CDNs externes -->
<link rel="preconnect" href="https://cdn.simpleicons.org">
<link rel="preconnect" href="https://formspree.io">

<!-- DNS prefetch pour domaines tiers -->
<link rel="dns-prefetch" href="https://www.googletagmanager.com">

<!-- Preload ressources critiques -->
<link rel="preload" href="/fonts/Inter.var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/main.css" as="style">
```

**Règle**: Seulement 2-3 preloads (ressources vraiment critiques)

---

### 6. Réduire les requêtes HTTP

#### Audit actuel

**Estimation requêtes**:
```
HTML                : 1
CSS (3-5 fichiers)  : 5
JS (8-10 fichiers)  : 10
Fonts (42 fichiers) : 42  ← PROBLÈME!
Images (6-8)        : 8
Icônes externes     : 2
────────────────────────
Total               : ~68 requêtes
```

#### Objectif

**Bonne pratique**: < 30 requêtes

**Après optimisations**:
```
HTML                : 1
CSS (2 bundled)     : 2
JS (1 bundled)      : 1
Fonts (1 variable)  : 1  ✓
Images (6-8)        : 8
────────────────────────
Total               : ~13 requêtes (-80%)
```

#### Bundle CSS

**Au lieu de**:
```html
<link rel="stylesheet" href="/css/main.css">
<link rel="stylesheet" href="/css/rad-icons.css">
<link rel="stylesheet" href="/css/custom.css">
<link rel="stylesheet" href="/css/animation.css">
```

**Faire**:
```bash
# Concaténer et minifier
cat static/css/main.css \
    static/css/custom.css \
    static/css/animation.css > static/css/bundle.css

# Minifier
npx cssnano static/css/bundle.css static/css/bundle.min.css
```

**Résultat**: 4 requêtes → 1 requête

#### Bundle JavaScript

Idem, concaténer tous les scripts nécessaires.

#### Inline Critical CSS (optionnel)

**Pour optimiser LCP**:
```html
<head>
  <!-- Critical CSS inline (< 14 KB) -->
  <style>
    /* Styles above-the-fold seulement */
    body { font-family: Inter, sans-serif; }
    .showcase { ... }
  </style>

  <!-- Reste du CSS en async -->
  <link rel="preload" href="/css/bundle.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/bundle.css"></noscript>
</head>
```

**Outil**: Critical CSS Generator
```bash
npm install -g critical
critical index.html --inline > index-critical.html
```

---

### 7. Cache navigateur

#### Configuration actuelle

**Fichier**: `firebase.json`
```json
{
  "hosting": {
    "headers": [{
      "source": "**/*.@(jpg|jpeg|gif|png|webp|avif)",
      "headers": [{
        "key": "Cache-Control",
        "value": "public, max-age=31536000" // 1 an - EXCELLENT ✓
      }]
    }]
  }
}
```

#### Amélioration recommandée

```json
{
  "hosting": {
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|webp|avif|svg)",
        "headers": [{
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [{
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }]
      },
      {
        "source": "**/*.@(woff|woff2|ttf|otf|eot)",
        "headers": [{
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }]
      },
      {
        "source": "**/*.@(html|json|xml)",
        "headers": [{
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }]
      }
    ]
  }
}
```

**Note**: Utiliser cache busting (fingerprint) pour CSS/JS
```html
<!-- Hugo fingerprint automatique -->
<link rel="stylesheet" href="/css/bundle.a3f2bc.css">
```

---

## Hébergement et infrastructure

### 8. Firebase Hosting - Analyse

#### Points positifs

- ✅ CDN global (100+ locations)
- ✅ HTTP/2
- ✅ Compression automatique (Gzip/Brotli)
- ✅ SSL/TLS automatique
- ✅ Cache headers configurables

#### Points d'amélioration

**Impact carbone**:
- Google Cloud PUE (Power Usage Effectiveness): ~1.1
- Compensé carbone: Partiellement (Google carbon neutral depuis 2007)
- Énergie renouvelable: 67% (2023)

**Grade écologique**: B

#### Alternative green hosting

**Si migration souhaitée** (pour cohérence Pwablo):

| Hébergeur | Localisation | Renouvelable | PUE | Prix/mois |
|-----------|--------------|--------------|-----|-----------|
| **Infomaniak** | Suisse | 100% | 1.09 | 6 € |
| **PlanetHoster** | Canada/France | 100% | 1.2 | 6 € |
| **GreenGeeks** | USA/EU | 300% compensé | 1.15 | 3 $ |
| **Netlify** | Global | Partiellement | ~1.2 | Gratuit |
| **Vercel** | Global | Partiellement | ~1.2 | Gratuit |

**Recommandation**: Rester sur Firebase (performance) MAIS compenser carbone

---

### 9. Compensation carbone

#### Calcul émissions actuelles

**Avant optimisations**:
- 5.5 MB × 1000 visites × 12 mois = 66 GB/an
- 66 GB × 0.6 g CO₂/MB = **39.6 kg CO₂/an**

**Après optimisations**:
- 1.2 MB × 1000 visites × 12 mois = 14.4 GB/an
- 14.4 GB × 0.6 g CO₂/MB = **8.6 kg CO₂/an**

#### Options de compensation

**1. Ecologi**
- https://ecologi.com
- 8.6 kg CO₂ ≈ 1 arbre
- ~20 €/an

**2. Stripe Climate**
- https://stripe.com/climate
- 1% de revenus Pwablo

**3. Gold Standard**
- https://www.goldstandard.org
- Projets certifiés

#### Badge écologique

**Ajouter sur site**:
```html
<!-- Footer -->
<div class="eco-badge">
  <img src="/img/eco-friendly.svg" alt="Carbon neutral website">
  <p>
    This website generates ~9 kg CO₂/year,
    fully offset through <a href="...">Ecologi</a>.
  </p>
</div>
```

**Widget Website Carbon**:
```html
<!-- Inclure badge dynamique -->
<div id="wcb" class="carbonbadge"></div>
<script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
```

---

## Performance et chargement

### 10. Core Web Vitals

#### Métriques actuelles (estimation)

| Métrique | Actuel | Objectif | Status |
|----------|--------|----------|--------|
| **LCP** (Largest Contentful Paint) | ~3.5s | < 2.5s | ⚠️ |
| **FID** (First Input Delay) | ~100ms | < 100ms | ✅ |
| **CLS** (Cumulative Layout Shift) | ~0.1 | < 0.1 | ✅ |
| **FCP** (First Contentful Paint) | ~2s | < 1.8s | ⚠️ |
| **TTI** (Time to Interactive) | ~4s | < 3.5s | ⚠️ |

#### Optimisations LCP

**1. Optimiser image hero (showcase)**
```html
<!-- Prioriser image principale -->
<link rel="preload"
      as="image"
      href="/img/showcase/showcase.webp"
      type="image/webp">

<img src="/img/showcase/showcase.webp"
     fetchpriority="high"
     loading="eager"
     alt="...">
```

**2. Inline critical CSS**
- Voir section précédente

**3. Réduire render-blocking**
```html
<!-- Charger CSS de manière asynchrone -->
<link rel="stylesheet" href="/css/bundle.css" media="print" onload="this.media='all'">

<!-- Defer JavaScript non-critique -->
<script src="/js/bundle.js" defer></script>
```

#### Optimisations CLS

**Réserver espace images**:
```html
<!-- Éviter layout shifts -->
<img src="image.webp"
     width="800"
     height="600"
     alt="...">

<!-- Ou avec aspect-ratio CSS -->
<style>
.image-container {
  aspect-ratio: 16 / 9;
}
</style>
```

**Précharger fonts**:
```html
<link rel="preload"
      href="/fonts/Inter.var.woff2"
      as="font"
      type="font/woff2"
      crossorigin>
```

#### 📋 Checklist Performance

- [ ] Tester avec Lighthouse (mode navigation privée)
- [ ] Identifier LCP element (DevTools > Performance)
- [ ] Preload image LCP si < 1200px from top
- [ ] Ajouter width/height sur toutes les images
- [ ] Preload police principale
- [ ] Defer JavaScript non-critique
- [ ] Inline critical CSS (< 14 KB)
- [ ] Tester sur connexion 3G lente (DevTools throttling)

**Objectif**: Score Lighthouse 95+ 🎯

---

## Plan d'action

### 🔴 Phase 1 - Gains rapides (Semaine 1) - 3-4h

**Impact**: -4 MB (-73%)

#### Jour 1: Polices variables (2h)

- [ ] **1.1** Backup fichiers polices actuels
- [ ] **1.2** Créer `fonts/inter/inter-optimized.css`
  - Variable font uniquement
  - `font-display: swap`
- [ ] **1.3** Mettre à jour référence dans HTML
- [ ] **1.4** Tester tous les poids (300-700)
- [ ] **1.5** Supprimer anciens fichiers Inter
- [ ] **1.6** Optimiser AutumnMoon (garder woff2 seulement)
- [ ] **1.7** Optimiser rad-icons (garder woff2 seulement)

**Résultat**: 4.5 MB → 400 KB (-91%)

#### Jour 2: JavaScript minimal (1-2h)

- [ ] **1.8** Vérifier usage jQuery (grep)
- [ ] **1.9** Supprimer jQuery si non utilisé
- [ ] **1.10** Supprimer doublon Bootstrap
- [ ] **1.11** Remplacer Lozad par loading="lazy"
- [ ] **1.12** Test fonctionnalités

**Résultat**: 220 KB → 80 KB (-64%)

**Total Phase 1**: -4.2 MB 🎉

---

### 🟡 Phase 2 - Optimisation CSS/JS (Semaine 2) - 4-5h

**Impact**: -200 KB

#### Actions

- [ ] **2.1** Installer PurgeCSS + PostCSS (1h)
  - npm install
  - postcss.config.js
  - Script build
- [ ] **2.2** Purge CSS inutilisé (1h)
  - Configurer safelist
  - Build et test
- [ ] **2.3** Bundle JS personnalisé (2h)
  - Créer bundle.js vanilla
  - Smooth scroll natif
  - Intersection Observer
  - Minifier
- [ ] **2.4** Tests (1h)
  - Toutes fonctionnalités OK
  - Responsive OK
  - Navigation OK

**Résultat**: CSS 220 KB → 70 KB, JS 220 KB → 15 KB

---

### 🟢 Phase 3 - Performance & monitoring (Semaine 3) - 2-3h

**Impact**: Optimisation chargement

- [ ] **3.1** Resource hints (30min)
  - Preconnect
  - Preload font
  - DNS prefetch
- [ ] **3.2** Critical CSS (1h)
  - Générer avec Critical
  - Inline dans <head>
  - Async reste du CSS
- [ ] **3.3** Cache headers (30min)
  - Mettre à jour firebase.json
  - Tester cache
- [ ] **3.4** Tests performance (1h)
  - Lighthouse (viser 95+)
  - WebPageTest
  - Ajustements

---

### 🔵 Phase 4 - Mesure impact (Continu)

**Outils de monitoring**:

1. **Website Carbon Calculator**
   - https://www.websitecarbon.com/
   - Mesure mensuelle

2. **Ecograder**
   - https://ecograder.com/
   - Score global (performance + éco)

3. **Lighthouse**
   - Intégré Chrome DevTools
   - Score performance
   - Suivi dans le temps

4. **Google Analytics**
   - Page Load Time
   - Server Response Time
   - Comparer avant/après

#### Dashboard écoconception

**Créer** `/eco-report.md` (public):
```markdown
# Eco-Conception Report

**Last update**: November 2024

## Metrics

| Metric | Value | Grade |
|--------|-------|-------|
| Page weight | 1.2 MB | A |
| CO₂ per visit | 0.7 g | A |
| Carbon footprint | 8.4 kg/year | A |
| Lighthouse score | 96 | A+ |

## Hosting

- Provider: Firebase (Google Cloud)
- Renewable energy: 67%
- Offset: 100% (via Ecologi)

## Optimizations

- ✅ Variable fonts (-91% font weight)
- ✅ PurgeCSS (-68% CSS)
- ✅ Vanilla JS (-90% JS)
- ✅ Modern image formats (WebP/AVIF)
- ✅ Lazy loading native
```

**Lien depuis footer**:
```html
<footer>
  <a href="/eco-report">🌱 Eco-friendly website</a>
</footer>
```

---

## Mesure et monitoring

### Benchmark avant/après

| Métrique | Avant | Après | Réduction |
|----------|-------|-------|-----------|
| **Poids total** | 5.5 MB | 1.2 MB | -78% |
| **Fonts** | 4.5 MB | 0.4 MB | -91% |
| **CSS** | 220 KB | 70 KB | -68% |
| **JavaScript** | 220 KB | 15 KB | -93% |
| **Images** | 400 KB | 300 KB | -25% |
| **Requêtes HTTP** | 68 | 13 | -81% |
| **CO₂/visite** | 3.3 g | 0.7 g | -79% |
| **CO₂/an** | 39.6 kg | 8.4 kg | -79% |
| **Lighthouse** | 70 | 95+ | +25 pts |
| **Grade** | D | A | ⬆️⬆️⬆️ |

### Budget performance

**Établir budgets** (ne pas dépasser):
```json
{
  "budgets": {
    "total": "1500 KB",
    "fonts": "500 KB",
    "css": "100 KB",
    "js": "100 KB",
    "images": "500 KB"
  }
}
```

**Monitoring avec Lighthouse CI**:
```bash
npm install -g @lhci/cli

# lighthouserc.json
{
  "ci": {
    "assert": {
      "assertions": {
        "total-byte-weight": ["error", {"maxNumericValue": 1500000}],
        "font-size": ["error", {"maxNumericValue": 500000}]
      }
    }
  }
}
```

---

## Ressources

### Outils de mesure

- [Website Carbon Calculator](https://www.websitecarbon.com/)
- [Ecograder](https://ecograder.com/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

### Compression & optimisation

- [Squoosh](https://squoosh.app/) - Compression images
- [PurgeCSS](https://purgecss.com/)
- [Terser](https://terser.org/) - Minification JS
- [cssnano](https://cssnano.co/)

### Guides écoconception

- [GreenIT.fr](https://www.greenit.fr/)
- [EcoIndex](http://www.ecoindex.fr/)
- [Sustainable Web Design](https://sustainablewebdesign.org/)
- [Web.dev Performance](https://web.dev/performance/)

### Hébergeurs green

- [Infomaniak](https://www.infomaniak.com/)
- [PlanetHoster](https://www.planethoster.com/)
- [GreenGeeks](https://www.greengeeks.com/)

---

**Dernière mise à jour**: 7 novembre 2024
**Prochaine révision**: Après Phase 1 (dans 1 semaine)
**Contact**: Guillaume Gustin - Pwablo
