# Roadmap d'Implémentation - Optimisations Site Web

**Site**: guillaumegustin.com
**Date**: 7 novembre 2024
**Durée estimée**: 3-4 semaines
**Effort total**: 25-35 heures

---

## Vue d'ensemble

### Objectifs

| Domaine | Score actuel | Score cible | Gain attendu |
|---------|--------------|-------------|--------------|
| **SEO** | 45/100 | 85+/100 | +40 points |
| **Accessibilité** | 60/100 | 95+/100 | +35 points |
| **Écoconception** | 35/100 | 85+/100 | +50 points |
| **Performance** | 70/100 | 95+/100 | +25 points |

### Impact global

**Avant optimisations**:
- Poids page: 5.5 MB
- CO₂/visite: 3.3 g
- Requêtes HTTP: ~68
- Temps chargement: ~3-4s

**Après optimisations**:
- Poids page: 1.2 MB (-78%)
- CO₂/visite: 0.7 g (-79%)
- Requêtes HTTP: ~13 (-81%)
- Temps chargement: <1s (-75%)

**Économie annuelle** (1000 visites/mois):
- **31 kg CO₂ évités** 🌱
- **52 GB de bande passante économisés**
- **~3000 secondes de temps utilisateur économisées**

---

## Calendrier global

```
Semaine 1 (8-10h)   🔴 CRITIQUE
├─ Polices variables        ███████░░░ 3h
├─ Formulaire accessible    ████████░░ 2h
├─ Métadonnées SEO          ████░░░░░░ 2h
└─ JavaScript minimal       ████░░░░░░ 2h

Semaine 2 (8-10h)   🟡 IMPORTANT
├─ CSS optimisé (PurgeCSS)  █████░░░░░ 3h
├─ Alt texts & focus        ███░░░░░░░ 2h
├─ Structured Data          ████░░░░░░ 2h
└─ Skip links & ARIA        ███░░░░░░░ 2h

Semaine 3 (6-8h)    🟢 AMÉLIORATION
├─ Performance tuning       ████░░░░░░ 3h
├─ Tests utilisateurs       ███░░░░░░░ 2h
└─ Pages projets (optionnel)████████░░ 3h

Semaine 4 (3-4h)    🔵 VALIDATION
├─ Tests complets           ████░░░░░░ 2h
├─ Documentation            ██░░░░░░░░ 1h
└─ Monitoring               ██░░░░░░░░ 1h
```

---

## Phase 1 - Quick Wins (Semaine 1)

**Durée**: 8-10 heures
**Impact**: +65% score global
**Priorité**: 🔴 CRITIQUE

### Lundi - Polices variables (3h)

#### Matin (1.5h) - Préparation
- [ ] Backup dossier `static/fonts/` complet
- [ ] Vérifier que `Inter.var.woff2` existe (384 KB)
- [ ] Créer `static/fonts/inter/inter-optimized.css`
  ```css
  @font-face {
    font-family: 'Inter';
    font-weight: 100 900;
    font-style: oblique 0deg 10deg;
    src: url('Inter.var.woff2') format('woff2-variations');
    font-display: swap;
  }
  ```
- [ ] Créer `static/css/accessibility.css` (nouveau fichier)
  ```css
  /* Classe visually-hidden */
  /* Focus styles */
  /* Error states */
  ```

#### Après-midi (1.5h) - Intégration & nettoyage
- [ ] Créer ou modifier `layouts/_default/baseof.html`
- [ ] Inclure `inter-optimized.css` au lieu de `inter.css`
- [ ] Inclure `accessibility.css`
- [ ] Tester affichage (tous les poids 300-700)
- [ ] Si OK: Supprimer 41 anciens fichiers Inter
- [ ] Optimiser AutumnMoon (garder .woff2 seulement)
- [ ] Optimiser rad-icons (garder .woff2 seulement)

**Résultat**: 4.5 MB → 400 KB (-91%)
**Commit**: `feat: optimize fonts with variable font (-91% size)`

---

### Mardi - Formulaire accessible (2h)

#### Actions

- [ ] **2.1** Supprimer dans `static/css/custom.css:45-47`
  ```css
  /* SUPPRIMER ces lignes:
  #full_name_label{display: none;}
  #message_label{display: none;}
  #email_label{display: none;}
  */
  ```

- [ ] **2.2** Modifier `layouts/partials/contact.html`
  - Ajouter classe `.visually-hidden` aux labels (ou les rendre visibles)
  - Ajouter `name="name"` au champ full_name
  - Ajouter `aria-required="true"` sur tous les champs requis
  - Ajouter `autocomplete` appropriés
  - Créer zone `<div role="alert" aria-live="polite">` pour erreurs

- [ ] **2.3** Créer `static/js/form-validation.js`
  - Validation accessible
  - États `aria-invalid`
  - Messages d'erreur

- [ ] **2.4** Ajouter styles erreurs dans `accessibility.css`
  ```css
  input[aria-invalid="true"] { border: 2px solid #d32f2f; }
  #form-errors { background: #ffebee; }
  ```

- [ ] **2.5** Tester avec NVDA/lecteur d'écran

**Résultat**: Formulaire 100% accessible (WCAG AA)
**Commit**: `feat(a11y): make contact form accessible`

---

### Mercredi - Métadonnées SEO (2h)

#### Matin (1h) - Head complet

- [ ] **3.1** Ajouter dans `data/homepage.yml`
  ```yaml
  head:
    title: "Guillaume Gustin - Full-Stack Developer | Digital Health Expert"
    description: "Software Engineer specialized in digital health and sustainable web solutions. Helping mission-driven organizations with full-stack development, PWA, and digital transformation."
    keywords: "full-stack developer, digital health, biomedical engineering, sustainable web design"
  ```

- [ ] **3.2** Modifier `layouts/_default/baseof.html` - Ajouter:
  - Meta description
  - Open Graph tags (FB, LinkedIn)
  - Twitter Cards
  - Canonical tag

- [ ] **3.3** Créer image OG `static/img/og-image.jpg` (1200×630px)

#### Après-midi (1h) - Structured Data

- [ ] **3.4** Créer `layouts/partials/schema-person.html`
  - JSON-LD Person schema
  - Inclure dans baseof.html

- [ ] **3.5** Créer `layouts/partials/schema-website.html`
  - JSON-LD WebSite schema
  - Inclure dans baseof.html

- [ ] **3.6** Validation
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - [Schema.org Validator](https://validator.schema.org/)

**Résultat**: SEO 45 → 70 (+25 points)
**Commit**: `feat(seo): add complete meta tags and structured data`

---

### Jeudi - JavaScript minimal (2h)

#### Actions

- [ ] **4.1** Audit usage jQuery
  ```bash
  grep -r "\$(" static/js/
  grep -r "jQuery" static/js/
  ```

- [ ] **4.2** Si jQuery non utilisé:
  - Supprimer `jquery-3.3.1.slim.min.js`
  - Supprimer référence dans HTML

- [ ] **4.3** Supprimer doublon Bootstrap
  - Garder `bootstrap.bundle.min.js` OU `bootstrap.min.js`
  - Pas les deux!

- [ ] **4.4** Remplacer Lozad par loading natif
  - Modifier toutes les images: `loading="lazy"`
  - Supprimer `lozad.min.js`
  - Supprimer script d'initialisation

- [ ] **4.5** Test toutes fonctionnalités
  - Smooth scroll OK?
  - Sticky header OK?
  - Formulaire OK?
  - Animations OK?

**Résultat**: 220 KB → 80 KB (-64%)
**Commit**: `perf: remove jQuery and optimize JavaScript (-64%)`

---

### Vendredi - Tests & validation Phase 1 (1h)

- [ ] **5.1** Build complet
  ```bash
  ./deploy.sh # (sans firebase deploy)
  ```

- [ ] **5.2** Tests locaux
  - Lighthouse audit
  - WAVE accessibility scan
  - Vérifier toutes les pages/sections
  - Test mobile

- [ ] **5.3** Mesures
  - Website Carbon Calculator
  - Poids page (DevTools Network)
  - Nombre requêtes

- [ ] **5.4** Si tout OK: Deploy
  ```bash
  firebase deploy
  ```

**Commit**: `chore: deploy phase 1 optimizations`

---

## Phase 2 - Optimisations CSS/JS/A11y (Semaine 2)

**Durée**: 8-10 heures
**Impact**: +20% score global
**Priorité**: 🟡 IMPORTANT

### Lundi - PurgeCSS (3h)

#### Matin (1.5h) - Setup

- [ ] **1.1** Installation
  ```bash
  npm install -D @fullhuman/postcss-purgecss autoprefixer cssnano
  ```

- [ ] **1.2** Créer `postcss.config.js`
  ```javascript
  module.exports = {
    plugins: [
      require('@fullhuman/postcss-purgecss')({
        content: ['./layouts/**/*.html', './data/**/*.yml'],
        safelist: [
          'show', 'active', 'fade',
          /^rad-/, /^col-/, /^badge-/, /^btn-/
        ],
        keyframes: true,
        fontFace: true
      }),
      require('cssnano')(),
      require('autoprefixer')
    ]
  };
  ```

- [ ] **1.3** Créer script build
  ```json
  // package.json
  {
    "scripts": {
      "css:build": "postcss static/css/main.css -o static/css/main.min.css"
    }
  }
  ```

#### Après-midi (1.5h) - Build & test

- [ ] **1.4** Run build
  ```bash
  npm run css:build
  ```

- [ ] **1.5** Mettre à jour HTML pour utiliser `main.min.css`
- [ ] **1.6** Test complet apparence
  - Toutes sections OK?
  - Responsive OK?
  - Animations OK?
- [ ] **1.7** Ajuster safelist si nécessaire

**Résultat**: 176 KB → 50 KB (-72%)
**Commit**: `perf: purge unused CSS (-72%)`

---

### Mardi - Alt texts & Focus (2h)

#### Matin (1h) - Alt texts

- [ ] **2.1** Mettre à jour `data/homepage.yml` avec alt descriptifs:
  - Showcase images (desktop + mobile)
  - About profile picture
  - 6 logos clients (avec nom entreprise)
  - 6 mockups projets (description interface)

- [ ] **2.2** Vérifier partials utilisent `.alt` du YAML
  - `layouts/partials/about.html`
  - `layouts/partials/client-and-work.html`
  - `layouts/partials/responsive-image.html`

#### Après-midi (1h) - Focus styles

- [ ] **2.3** Ajouter dans `accessibility.css`:
  ```css
  *:focus-visible {
    outline: 3px solid #e05d44;
    outline-offset: 3px;
  }
  /* + styles spécifiques liens, boutons, inputs */
  ```

- [ ] **2.4** Test navigation clavier complète (Tab du début à la fin)

**Résultat**: Accessibilité 60 → 85 (+25 points)
**Commit**: `feat(a11y): improve alt texts and focus styles`

---

### Mercredi - Structured Data avancé (2h)

- [ ] **3.1** Créer `layouts/partials/breadcrumb-schema.html`
  - Pour pages projets futures

- [ ] **3.2** Enrichir schema Person
  - Ajouter hasCredential (diplômes)
  - Ajouter knowsAbout (compétences)
  - Ajouter alumniOf détaillé

- [ ] **3.3** Validation complète
  - Google Rich Results Test
  - Schema.org Validator
  - Search Console (après deploy)

**Résultat**: SEO 70 → 80 (+10 points)
**Commit**: `feat(seo): add advanced structured data schemas`

---

### Jeudi - Skip links & ARIA (2h)

#### Actions

- [ ] **4.1** Ajouter skip links dans `baseof.html`
  ```html
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ```

- [ ] **4.2** Ajouter landmarks ARIA
  - `role="banner"` sur header
  - `role="navigation"` sur nav avec `aria-label`
  - `role="main"` sur main
  - `role="contentinfo"` sur footer
  - `aria-labelledby` pour sections avec headings

- [ ] **4.3** Liens externes
  - Ajouter indication "(opens in new tab)"
  - `rel="noopener noreferrer"`
  - Icône visuelle ↗

- [ ] **4.4** Test avec lecteur d'écran (navigation landmarks)

**Résultat**: Accessibilité 85 → 95 (+10 points)
**Commit**: `feat(a11y): add skip links and ARIA landmarks`

---

### Vendredi - Tests & validation Phase 2 (1h)

- [ ] **5.1** Lighthouse audit complet
- [ ] **5.2** WAVE scan
- [ ] **5.3** axe DevTools scan
- [ ] **5.4** Test navigation clavier complète
- [ ] **5.5** Vérifier Core Web Vitals
- [ ] **5.6** Deploy si OK

**Commit**: `chore: deploy phase 2 optimizations`

---

## Phase 3 - Performance & Pages projets (Semaine 3)

**Durée**: 6-8 heures
**Impact**: +10% score global
**Priorité**: 🟢 AMÉLIORATION

### Lundi - Performance tuning (3h)

#### Matin (1.5h) - Resource hints

- [ ] **1.1** Ajouter dans `<head>`:
  ```html
  <link rel="preconnect" href="https://cdn.simpleicons.org">
  <link rel="preconnect" href="https://formspree.io">
  <link rel="preload" href="/fonts/Inter.var.woff2" as="font" type="font/woff2" crossorigin>
  ```

- [ ] **1.2** Mettre à jour `firebase.json` - cache headers
  ```json
  {
    "headers": [
      {"source": "**/*.@(js|css)", "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]},
      {"source": "**/*.@(woff|woff2)", "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]}
    ]
  }
  ```

#### Après-midi (1.5h) - Critical CSS (optionnel)

- [ ] **1.3** Générer critical CSS
  ```bash
  npm install -g critical
  critical index.html --inline > critical.css
  ```

- [ ] **1.4** Inline critical CSS dans `<head>`
- [ ] **1.5** Charger reste du CSS en async

**Résultat**: Lighthouse 85 → 95 (+10 points)
**Commit**: `perf: add resource hints and optimize loading`

---

### Mardi - Tests utilisateurs (2h)

#### Tests manuels

- [ ] **2.1** Test lecteur d'écran complet (NVDA)
  - Parcourir toutes les sections
  - Tester formulaire
  - Navigation par landmarks
  - Noter problèmes

- [ ] **2.2** Test navigation clavier (sans souris!)
  - Tab du début à la fin
  - Activer tous les boutons
  - Remplir formulaire
  - Vérifier focus toujours visible

- [ ] **2.3** Test zoom 200%
  - Chrome zoom 200%
  - Vérifier lisibilité
  - Pas de scroll horizontal
  - Tous boutons accessibles

- [ ] **2.4** Test contrastes
  - WebAIM Contrast Checker
  - Tous les textes gris
  - Texte rouge sur blanc
  - Ajuster si ratio < 4.5:1

**Résultat**: Liste ajustements nécessaires
**Commit**: `fix(a11y): address user testing issues`

---

### Mercredi - Pages projets (3h - OPTIONNEL)

**Note**: Optionnel selon vos besoins

#### Si vous voulez des pages détaillées:

- [ ] **3.1** Créer structure
  ```bash
  mkdir -p content/projects/epro-platform
  mkdir -p content/projects/patient-decision-aids
  ```

- [ ] **3.2** Créer layout `layouts/projects/single.html`
  - Template avec breadcrumbs
  - Schema CreativeWork
  - Navigation prev/next

- [ ] **3.3** Migrer 1-2 projets prioritaires en Markdown
  - Front matter complet
  - Métadonnées SEO uniques
  - Galerie images

- [ ] **3.4** Mettre à jour liens depuis homepage

**OU si vous préférez garder one-page**:
- [ ] Enrichir descriptions projets existants dans `homepage.yml`
- [ ] Ajouter plus de détails techniques
- [ ] Améliorer alt texts images

**Résultat**: Contenu enrichi
**Commit**: `feat: add detailed project pages` ou `content: enrich project descriptions`

---

## Phase 4 - Validation & Monitoring (Semaine 4)

**Durée**: 3-4 heures
**Priorité**: 🔵 VALIDATION

### Lundi - Tests complets (2h)

#### Tests automatisés

- [ ] **1.1** Lighthouse audit
  - Performance: viser 95+
  - Accessibility: viser 95+
  - Best Practices: viser 95+
  - SEO: viser 95+

- [ ] **1.2** Website Carbon Calculator
  - https://www.websitecarbon.com/
  - Noter score et grade
  - Capturer résultat

- [ ] **1.3** Ecograder
  - https://ecograder.com/
  - Score global

- [ ] **1.4** Google Rich Results Test
  - https://search.google.com/test/rich-results
  - Vérifier structured data

- [ ] **1.5** WAVE final scan
  - 0 erreurs
  - Alerts justifiées seulement

#### Tests navigateurs

- [ ] **1.6** Chrome (desktop + mobile)
- [ ] **1.7** Firefox
- [ ] **1.8** Safari
- [ ] **1.9** Edge

**Résultat**: Tous tests verts ✅

---

### Mardi - Documentation (1h)

- [ ] **2.1** Mettre à jour README.md
  - Mention optimisations
  - Scores obtenus
  - Instructions build

- [ ] **2.2** Créer `/eco-report.md` (public)
  - Métriques écoconception
  - Certifications/badges
  - Lien depuis footer

- [ ] **2.3** Documenter process de build
  - Scripts npm
  - Workflow Hugo + PostCSS
  - Deploy Firebase

**Commit**: `docs: add optimization documentation and eco-report`

---

### Mercredi - Monitoring (1h)

#### Setup outils

- [ ] **3.1** Google Analytics 4
  - Créer propriété
  - Ajouter GTM code
  - Configurer événements de base

- [ ] **3.2** Google Search Console
  - Vérifier propriété
  - Soumettre sitemap
  - Configurer alertes

- [ ] **3.3** Uptime monitoring (optionnel)
  - UptimeRobot ou similaire
  - Alertes si down

#### Dashboard

- [ ] **3.4** Créer checklist monitoring mensuel
  ```markdown
  ## Monthly SEO/Performance Checklist
  - [ ] Lighthouse audit
  - [ ] Search Console review
  - [ ] Website Carbon check
  - [ ] GA4 traffic analysis
  - [ ] Update eco-report if needed
  ```

**Commit**: `feat: setup monitoring and analytics`

---

## Checklist finale

### Avant déploiement final

- [ ] **Backup complet**
  - Code actuel
  - Base de données (si applicable)
  - Assets

- [ ] **Tests finaux**
  - [ ] Lighthouse: Performance 95+, A11y 95+, SEO 95+
  - [ ] WAVE: 0 erreurs
  - [ ] Tous liens fonctionnent
  - [ ] Formulaire envoie emails
  - [ ] Images s'affichent correctement
  - [ ] Responsive sur tous devices
  - [ ] Navigation clavier complète fonctionne

- [ ] **SEO**
  - [ ] Meta description présente et optimisée
  - [ ] Open Graph tags OK
  - [ ] Twitter Cards OK
  - [ ] Structured Data validé
  - [ ] Sitemap généré
  - [ ] Robots.txt OK
  - [ ] Canonical tags

- [ ] **Accessibilité**
  - [ ] Formulaire accessible (labels OK)
  - [ ] Alt texts descriptifs partout
  - [ ] Focus styles visibles
  - [ ] Skip links fonctionnent
  - [ ] Landmarks ARIA présents
  - [ ] Navigation clavier complète
  - [ ] Test lecteur d'écran OK

- [ ] **Écoconception**
  - [ ] Polices optimisées (variable font)
  - [ ] CSS purgé
  - [ ] JS minimal
  - [ ] Images optimisées
  - [ ] Lazy loading natif
  - [ ] Cache headers configurés
  - [ ] Poids total < 1.5 MB

- [ ] **Performance**
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
  - [ ] Resource hints configurés
  - [ ] Critical CSS inlined (optionnel)

---

## Après déploiement

### Semaine 1 post-déploiement

- [ ] **Jour 1**: Monitoring actif
  - Vérifier site live
  - Tester toutes fonctionnalités
  - Vérifier Analytics tracking

- [ ] **Jour 3**: First insights
  - Search Console: pages indexées?
  - GA4: trafic normal?
  - Erreurs 404 ou 500?

- [ ] **Jour 7**: First review
  - Core Web Vitals dans Search Console
  - Feedback utilisateurs?
  - Ajustements nécessaires?

### Suivi mensuel

**Routine mensuelle** (30 min):
1. Lighthouse audit
2. Website Carbon check
3. Search Console review
4. GA4 traffic analysis
5. Update eco-report si changements

---

## Budget temps détaillé

| Phase | Tâche | Temps | Priorité |
|-------|-------|-------|----------|
| **Phase 1** | | **8-10h** | 🔴 |
| | Polices variables | 3h | Critique |
| | Formulaire accessible | 2h | Critique |
| | Métadonnées SEO | 2h | Critique |
| | JavaScript minimal | 2h | Haute |
| | Tests Phase 1 | 1h | Haute |
| **Phase 2** | | **8-10h** | 🟡 |
| | PurgeCSS | 3h | Haute |
| | Alt texts & Focus | 2h | Haute |
| | Structured Data | 2h | Moyenne |
| | Skip links & ARIA | 2h | Moyenne |
| | Tests Phase 2 | 1h | Haute |
| **Phase 3** | | **6-8h** | 🟢 |
| | Performance tuning | 3h | Moyenne |
| | Tests utilisateurs | 2h | Haute |
| | Pages projets | 3h | Basse (optionnel) |
| **Phase 4** | | **3-4h** | 🔵 |
| | Tests complets | 2h | Haute |
| | Documentation | 1h | Moyenne |
| | Monitoring setup | 1h | Moyenne |
| **TOTAL** | | **25-32h** | |

---

## Résultats attendus

### Métriques finales

| Métrique | Avant | Après | Amélioration |
|----------|-------|-------|--------------|
| **Poids page** | 5.5 MB | 1.2 MB | -78% 🎉 |
| **Polices** | 4.5 MB | 0.4 MB | -91% |
| **CSS** | 220 KB | 70 KB | -68% |
| **JavaScript** | 220 KB | 15 KB | -93% |
| **Requêtes HTTP** | 68 | 13 | -81% |
| **CO₂/visite** | 3.3 g | 0.7 g | -79% 🌱 |
| **CO₂/an** | 39.6 kg | 8.4 kg | -79% |
| **Temps chargement** | 3-4s | <1s | -75% |
| **Score Lighthouse** | 70 | 95+ | +25 pts |
| **Score SEO** | 45 | 85+ | +40 pts |
| **Score A11y** | 60 | 95+ | +35 pts |
| **Score Éco** | 35 | 85+ | +50 pts |

### Impact business

**Avantages SEO**:
- ✅ +30-50% impressions Google (3 mois)
- ✅ +15-25% CTR (rich snippets)
- ✅ Meilleure visibilité social media
- ✅ Trust & autorité renforcés

**Avantages accessibilité**:
- ✅ +5-10% utilisateurs (malvoyants, mobile)
- ✅ Conformité légale (EU Web Accessibility Directive)
- ✅ Meilleure UX pour tous

**Avantages écoconception**:
- ✅ **Cohérence avec Pwablo** (agency sustainable web)
- ✅ Argument commercial fort
- ✅ 31 kg CO₂/an économisés
- ✅ Badge éco-friendly
- ✅ Temps chargement -75% (meilleur UX)

**ROI estimé**:
- Investissement: 25-35h temps dev
- Gain trafic: +30-40% (SEO + performance)
- Gain conversion: +10-15% (UX + accessibilité)
- Gain crédibilité: Inestimable (green + accessible)

---

## Contacts & support

**Développeur**: Guillaume Gustin
**Email**: guillaume.gustin.9@gmail.com
**Agency**: Pwablo - Sustainable Web Design

### Ressources

**Audits détaillés**:
- `docs/audits/SEO-AUDIT.md`
- `docs/audits/ACCESSIBILITY-AUDIT.md`
- `docs/audits/ECOCONCEPTION-AUDIT.md`

**Outils**:
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/extension/)
- [Website Carbon](https://www.websitecarbon.com/)
- [Schema Validator](https://validator.schema.org/)

**Support**:
- Hugo documentation: https://gohugo.io/documentation/
- Firebase documentation: https://firebase.google.com/docs/hosting
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/

---

**Version**: 1.0
**Dernière mise à jour**: 7 novembre 2024
**Prochaine révision**: Après Phase 1 (dans 1 semaine)
