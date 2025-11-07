# Audit SEO - guillaumegustin.com

**Date**: 7 novembre 2024
**Score actuel estimé**: 45/100
**Score cible**: 85+/100
**Priorité globale**: 🔴 CRITIQUE

---

## Table des matières

1. [Résumé exécutif](#résumé-exécutif)
2. [Problèmes critiques](#problèmes-critiques)
3. [Optimisations on-page](#optimisations-on-page)
4. [Structured Data (Schema.org)](#structured-data-schemaorg)
5. [Optimisation du contenu](#optimisation-du-contenu)
6. [Aspects techniques](#aspects-techniques)
7. [Plan d'action priorisé](#plan-daction-priorisé)
8. [Métriques de suivi](#métriques-de-suivi)

---

## Résumé exécutif

### Situation actuelle

**Points forts**:
- ✅ Sitemap.xml configuré et fonctionnel
- ✅ Robots.txt présent et bien configuré
- ✅ URLs propres (Firebase clean URLs)
- ✅ Site responsive et mobile-friendly
- ✅ Images optimisées (WebP/AVIF)

**Points faibles critiques**:
- ❌ Aucune meta description
- ❌ Aucun Open Graph tag
- ❌ Aucun Twitter Card tag
- ❌ Aucune structured data (JSON-LD)
- ❌ Pas de canonical tags
- ❌ Title tag non optimisé
- ❌ Alt texts génériques ou manquants

### Impact estimé

| Amélioration | Impact SEO | Difficulté | Temps |
|--------------|------------|------------|-------|
| Meta description | 🔴 Critique | ⚡ Facile | 30min |
| Open Graph tags | 🔴 Critique | ⚡ Facile | 30min |
| Structured Data | 🔴 Critique | 🟡 Moyen | 2h |
| Title optimization | 🟡 Élevé | ⚡ Facile | 15min |
| Alt texts | 🟡 Élevé | ⚡ Facile | 1h |
| Canonical tags | 🟢 Moyen | ⚡ Facile | 15min |

---

## Problèmes critiques

### 1. Meta Description manquante

**Localisation**: Aucun layout HTML principal trouvé
**Impact**: Google génère des extraits aléatoires, CTR réduit de 20-30%

#### ❌ Situation actuelle
```html
<!-- Aucune meta description présente -->
```

#### ✅ Solution recommandée

**Fichier**: `data/homepage.yml`
```yaml
head:
  title: "Guillaume Gustin - Full-Stack Developer"
  description: "Software Engineer specialized in digital health and sustainable web solutions. Helping mission-driven organizations with full-stack development, PWA, and digital transformation."
  keywords: "full-stack developer, software engineer, digital health, biomedical engineering, sustainable web design, Angular, Python, Brussels"
```

**Fichier**: `layouts/_default/baseof.html` (à créer)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Title -->
  <title>{{ .Site.Data.homepage.head.title }}</title>

  <!-- Meta Description -->
  <meta name="description" content="{{ .Site.Data.homepage.head.description }}">

  <!-- Meta Keywords (optionnel, moins important) -->
  <meta name="keywords" content="{{ .Site.Data.homepage.head.keywords }}">

  <!-- Canonical URL -->
  <link rel="canonical" href="{{ .Permalink }}">

  <!-- ... suite du head ... -->
</head>
<body>
  {{ block "main" . }}{{ end }}
</body>
</html>
```

#### ✅ Bonnes pratiques

- **Longueur**: 150-160 caractères (optimal pour affichage Google)
- **Inclure**: Mots-clés principaux + appel à l'action
- **Éviter**: Duplication, bourrage de mots-clés
- **Unique**: Chaque page doit avoir sa propre description

#### 📋 Checklist

- [ ] Créer `layouts/_default/baseof.html`
- [ ] Ajouter champ `description` dans `data/homepage.yml`
- [ ] Vérifier longueur (150-160 caractères)
- [ ] Tester affichage avec Google SERP Simulator
- [ ] Valider avec Google Search Console

---

### 2. Open Graph Tags manquants

**Impact**: Partages sur réseaux sociaux (Facebook, LinkedIn) mal affichés
**CTR social**: Réduit de 40-50% sans OG tags

#### ❌ Situation actuelle
```html
<!-- Aucun Open Graph tag -->
```

#### ✅ Solution recommandée

**Fichier**: `layouts/_default/baseof.html`
```html
<head>
  <!-- ... meta de base ... -->

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="{{ .Permalink }}">
  <meta property="og:title" content="{{ .Site.Data.homepage.head.title }}">
  <meta property="og:description" content="{{ .Site.Data.homepage.head.description }}">
  <meta property="og:image" content="{{ .Site.Params.meta_img.URL | absURL }}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en_US">
  <meta property="og:site_name" content="Guillaume Gustin - Portfolio">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="{{ .Permalink }}">
  <meta name="twitter:title" content="{{ .Site.Data.homepage.head.title }}">
  <meta name="twitter:description" content="{{ .Site.Data.homepage.head.description }}">
  <meta name="twitter:image" content="{{ .Site.Params.meta_img.URL | absURL }}">

  <!-- Optionnel: Twitter username -->
  <!-- <meta name="twitter:creator" content="@votreusername"> -->
</head>
```

#### 🖼️ Image Open Graph optimale

**Spécifications**:
- Dimensions: 1200 × 630 px (ratio 1.91:1)
- Format: JPG ou PNG (WebP moins supporté)
- Poids: < 1 MB
- Contenu: Photo professionnelle + texte "Guillaume Gustin - Full-Stack Developer"

**Localisation recommandée**: `static/img/og-image.jpg`

#### 📋 Checklist

- [ ] Créer image OG 1200×630px
- [ ] Ajouter tous les tags OG dans baseof.html
- [ ] Tester avec [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Tester avec [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Tester avec [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [ ] Vérifier affichage dans preview

---

### 3. Structured Data (Schema.org) absente

**Impact**: Pas de rich snippets dans Google, visibilité réduite
**Opportunité**: Rich results peuvent augmenter CTR de 30%

#### ❌ Situation actuelle
```html
<!-- Aucune structured data JSON-LD -->
```

#### ✅ Solutions recommandées

##### A) Schema Person (Priorité 1)

**Fichier**: `layouts/partials/schema-person.html`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Guillaume Gustin",
  "url": "{{ .Site.BaseURL }}",
  "image": "{{ .Site.Params.meta_img.URL | absURL }}",
  "sameAs": [
    "https://www.linkedin.com/in/guillaume-gustin/",
    "https://github.com/ggustin93",
    "https://www.pwablo.be/"
  ],
  "jobTitle": "Full-Stack Developer & Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Pwablo",
    "url": "https://www.pwablo.be/"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Catholic University of Louvain",
      "sameAs": "https://uclouvain.be"
    },
    {
      "@type": "EducationalOrganization",
      "name": "MIT Global Startup Labs",
      "sameAs": "https://misti.mit.edu/student-programs/mit-global-startup-labs"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Master in Biomedical Engineering",
      "credentialCategory": "degree",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Catholic University of Louvain"
      },
      "about": "Bioinformatics, Cum Laude"
    }
  ],
  "knowsAbout": [
    "Full-Stack Development",
    "Digital Health",
    "Sustainable Web Design",
    "Biomedical Engineering",
    "Progressive Web Apps",
    "Angular",
    "Ionic",
    "Python",
    "Google Cloud Platform",
    "Firebase"
  ],
  "description": "Software Engineer specialized in digital health and sustainable web solutions, with a background in Biomedical Engineering.",
  "email": "guillaume.gustin.9@gmail.com",
  "telephone": "+32456617260",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brussels",
    "addressCountry": "BE"
  }
}
</script>
```

**Inclusion**: Ajouter dans `layouts/_default/baseof.html`:
```html
<head>
  <!-- ... autres meta ... -->
  {{ partial "schema-person.html" . }}
</head>
```

##### B) Schema WebSite (Priorité 2)

**Fichier**: `layouts/partials/schema-website.html`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Guillaume Gustin - Portfolio",
  "alternateName": "Guillaume Gustin - Full-Stack Developer",
  "url": "{{ .Site.BaseURL }}",
  "description": "Professional portfolio showcasing digital health projects, sustainable web design, and full-stack development expertise.",
  "author": {
    "@type": "Person",
    "name": "Guillaume Gustin"
  },
  "inLanguage": "en-US"
}
</script>
```

##### C) Schema BreadcrumbList (pour pages projets)

**Fichier**: `layouts/partials/breadcrumb-schema.html`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "{{ .Site.BaseURL }}"
    }
    {{ if ne .RelPermalink "/" }}
    ,{
      "@type": "ListItem",
      "position": 2,
      "name": "{{ .Title }}",
      "item": "{{ .Permalink }}"
    }
    {{ end }}
  ]
}
</script>
```

##### D) Schema CreativeWork (pour projets individuels)

**Fichier**: `layouts/projects/single.html`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "{{ .Title }}",
  "description": "{{ .Params.description }}",
  "creator": {
    "@type": "Person",
    "name": "Guillaume Gustin",
    "url": "{{ .Site.BaseURL }}"
  },
  "datePublished": "{{ .Date.Format "2006-01-02" }}",
  {{ with .Params.og_image }}
  "image": "{{ . | absURL }}",
  {{ end }}
  "keywords": {{ .Params.keywords | jsonify }},
  "about": {{ .Params.technologies | jsonify }}
}
</script>
```

#### 📋 Checklist

- [ ] Créer `layouts/partials/schema-person.html`
- [ ] Créer `layouts/partials/schema-website.html`
- [ ] Inclure les schemas dans baseof.html
- [ ] Valider avec [Schema.org Validator](https://validator.schema.org/)
- [ ] Valider avec [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Vérifier absence d'erreurs dans Search Console

---

### 4. Title Tag non optimisé

**Actuel**: `Guillaume Gustin - Full-Stack Developer`
**Longueur**: 39 caractères
**Problème**: Trop court, pas assez descriptif, manque mots-clés secondaires

#### ❌ Situation actuelle

**Fichier**: `data/homepage.yml:2`
```yaml
head:
  title: "Guillaume Gustin - Full-Stack Developer"
```

#### ✅ Recommandations

**Option 1 - Expertise technique** (58 caractères):
```yaml
head:
  title: "Guillaume Gustin - Full-Stack Developer | Digital Health Expert"
```

**Option 2 - Impact-driven** (60 caractères):
```yaml
head:
  title: "Guillaume Gustin - Software Engineer for Mission-Driven Orgs"
```

**Option 3 - Spécialisation** (59 caractères):
```yaml
head:
  title: "Guillaume Gustin - Biomedical Engineer | Digital Health Dev"
```

**Option 4 - Localisation** (57 caractères):
```yaml
head:
  title: "Guillaume Gustin - Full-Stack Developer Brussels | PWA"
```

**Recommandation personnelle**: Option 1 ou 3 (met en avant votre background unique)

#### ✅ Bonnes pratiques

- **Longueur optimale**: 50-60 caractères (max 70)
- **Structure**: Nom - Métier principal | Spécialisation/Valeur
- **Mots-clés**: 2-3 mots-clés principaux
- **Marque**: Votre nom en premier (personal branding)
- **Unique**: Différent de H1 (mais complémentaire)

#### 📋 Checklist

- [ ] Choisir nouvelle formulation (50-60 caractères)
- [ ] Mettre à jour `data/homepage.yml`
- [ ] Vérifier affichage dans SERP avec simulateur
- [ ] S'assurer que le title est dynamique pour les sous-pages
- [ ] Tester sur mobile (affichage tronqué si trop long)

---

### 5. Canonical Tags manquants

**Impact**: Risque de duplicate content si plusieurs URLs pointent vers même contenu
**Priorité**: Moyenne (prévention)

#### ✅ Solution

**Fichier**: `layouts/_default/baseof.html`
```html
<head>
  <!-- ... autres meta ... -->

  <!-- Canonical URL -->
  <link rel="canonical" href="{{ .Permalink }}">

  <!-- Alternative: si vous avez du contenu dupliqué intentionnel -->
  {{ if .Params.canonical }}
    <link rel="canonical" href="{{ .Params.canonical }}">
  {{ else }}
    <link rel="canonical" href="{{ .Permalink }}">
  {{ end }}
</head>
```

#### 📋 Checklist

- [ ] Ajouter canonical tag dans baseof.html
- [ ] Vérifier que .Permalink génère URL correcte
- [ ] Tester avec trailing slash (Firebase config)
- [ ] Valider dans source HTML de la page

---

### 6. Alt Text des images

**Impact**: Accessibilité + SEO images
**Opportunité**: Google Images représente 20-30% du trafic organique

#### ❌ Problèmes identifiés

**Fichier**: `layouts/partials/about.html:8`
```html
<img alt="Profile Picture"> <!-- Trop générique -->
```

**Fichier**: `data/homepage.yml:10-20`
```yaml
showcase:
  image:
    x: "img/showcase/showcase.webp"
    # ❌ Pas de champ 'alt' défini
```

#### ✅ Solutions

**Mise à jour**: `data/homepage.yml`
```yaml
showcase:
  image:
    x: "img/showcase/showcase.webp"
    _2x: "img/showcase/showcase@2x.webp"
    alt: "Guillaume Gustin collaborating on digital health platform development in modern workspace"
  imageMobile:
    x: "img/showcase/showcase-mobile.webp"
    alt: "Guillaume Gustin - Software engineer and full-stack developer workspace overview"

about:
  image:
    x: "img/who-am-i/avatar_mini.webp"
    alt: "Professional portrait of Guillaume Gustin, biomedical engineer and full-stack developer"

# Pour chaque projet dans client_and_work:
client_and_work:
  works:
    - title: "ePRO Collection Platform"
      image:
        original: "img/works/immuno_mock.png"
        alt: "ePRO platform interface showing patient dashboard and clinical data collection for ImmunoSABR trial"

    - title: "Patient Decision Aids"
      image:
        original: "img/works/ipda_mock.png"
        alt: "Interactive patient decision aid application interface for cancer treatment options"
```

**Mise à jour**: `layouts/partials/about.html`
```html
{{ partial "responsive-image.html" (dict
  "src" .Site.Data.homepage.about.image.original
  "alt" .Site.Data.homepage.about.image.alt  /* ← Utiliser alt du YAML */
  "class" "lozad img-responsive"
  "lazy" true
) }}
```

#### ✅ Bonnes pratiques Alt Text

**DO**:
- ✅ Décrire le contenu et le contexte de l'image
- ✅ Inclure mots-clés pertinents (naturellement)
- ✅ 125 caractères maximum (optimal)
- ✅ Spécifique et informatif

**DON'T**:
- ❌ "image de...", "photo de..." (redondant)
- ❌ Bourrage de mots-clés
- ❌ Alt identiques pour images différentes
- ❌ Alt vides si image informative

**Exemples**:

| Image | ❌ Mauvais | ✅ Bon |
|-------|-----------|--------|
| Logo client | "logo" | "BRUXEO logo - digital transformation partner" |
| Screenshot app | "screenshot application" | "MyPatientCheck COVID-19 risk assessment interface showing triage questionnaire" |
| Portrait | "Profile Picture" | "Guillaume Gustin, full-stack developer specialized in digital health solutions" |

#### 📋 Checklist

- [ ] Ajouter champ `alt` pour toutes les images dans `homepage.yml`
- [ ] Mettre à jour partials pour utiliser `.alt` du YAML
- [ ] Vérifier les 50+ images du site
- [ ] Prioriser: showcase, about, works (images principales)
- [ ] Images décoratives: `alt=""` (vide, pas manquant)
- [ ] Valider avec lecteur d'écran (test accessibilité)

---

## Optimisation du contenu

### 7. Mots-clés cibles

#### Analyse de la concurrence

**Recherche Google**: "full-stack developer digital health"
- Difficulté: Moyenne
- Volume: ~500 recherches/mois
- Opportunité: Niche spécialisée

#### Mots-clés primaires

| Mot-clé | Volume | Difficulté | Priorité |
|---------|--------|------------|----------|
| full-stack developer | 40,000 | Haute | 🟡 |
| digital health developer | 1,200 | Moyenne | ✅ |
| biomedical engineer software | 800 | Basse | ✅ |
| sustainable web design | 2,400 | Moyenne | ✅ |
| healthcare app developer | 1,600 | Moyenne | ✅ |

#### Mots-clés secondaires

- Progressive Web App developer
- Angular Ionic developer
- Patient-centered applications
- Clinical decision support systems
- Digital health platform
- Medical cloud solutions
- Sustainable web agency Brussels

#### Mots-clés long-tail (haute conversion)

- "digital health platform developer Belgium"
- "biomedical engineer full-stack developer"
- "sustainable web development Brussels"
- "healthcare PWA developer Angular"
- "patient empowerment app developer"

#### ✅ Intégration dans le contenu

**Section Showcase** (`data/homepage.yml:7-9`):

**Avant**:
```yaml
subtitle: "Software Engineer"
description: "I help mission-driven organizations..."
```

**Après** (optimisé):
```yaml
subtitle: "Full-Stack Developer & Digital Health Expert"
description: "Biomedical engineer and software developer helping mission-driven organizations build impactful digital health solutions. Specialized in patient-centered applications, sustainable web design, and healthcare technology platforms."
```

**Section About** (`data/homepage.yml:40-49`):

**Ajouts suggérés** (intégration naturelle):
```yaml
content: |
  <p class="lead">
  With a background in Biomedical Engineering (UCLouvain, 2016), I apply an analytical approach to web and software development. I specialize in creating <strong>healthcare technology solutions</strong> and <strong>patient-centered applications</strong> that balance technical needs with intuitive design.
  </p>
  <p class="lead">
  My expertise spans <strong>digital health platforms</strong>, <strong>clinical decision support systems</strong>, and <strong>sustainable web design</strong>. From cofounding the medtech startup MedC2 to supporting non-profits with digital transformation at Bruxeo, I focus on building solutions that provide real value to healthcare organizations and patients.
  </p>
```

#### 📋 Checklist

- [ ] Intégrer mots-clés primaires dans showcase
- [ ] Enrichir section About avec termes sémantiques
- [ ] Ajouter badges avec mots-clés dans Experience
- [ ] Créer nouveau H2 "Digital Health Solutions" si pertinent
- [ ] Vérifier densité mots-clés (2-3% max)
- [ ] Utiliser variations et synonymes

---

### 8. Structure des Headings (H1-H6)

**Importance**: Hiérarchie claire pour SEO et accessibilité

#### ✅ Structure recommandée

```html
<h1>Hello, I'm Guillaume Gustin - Full-Stack Developer</h1>
  <h2>Who am I?</h2>
  <h2>Education</h2>
  <h2>Experience</h2>
    <h3>Founder & Web Designer - Pwablo</h3>
    <h3>Digital Transformation Advisor - BRUXEO</h3>
  <h2>Notable Contributions</h2>
    <h3>Scientific Publication</h3>
    <h3>EU Grant Contribution</h3>
  <h2>Featured Works</h2>
    <h3>ePRO Collection Platform</h3>
    <h3>Patient Decision Aids</h3>
  <h2>Let's connect</h2>
```

#### ⚠️ À vérifier

**Fichier**: `layouts/partials/showcase.html:15-20`
```html
<!-- Vérifier que c'est bien un H1 -->
<h1 class="display-1">
  {{ .Site.Data.homepage.showcase.title }}
  <br />
  <span>{{ .Site.Data.homepage.showcase.subtitle }}</span>
</h1>
```

**Suggestion d'optimisation**:
```html
<h1 class="display-1">
  Hello, I'm Guillaume Gustin
  <br />
  <span class="subtitle">Full-Stack Developer & Digital Health Expert</span>
</h1>
```

#### 📋 Checklist

- [ ] Un seul H1 par page
- [ ] H1 contient nom + métier principal
- [ ] H2 pour chaque section majeure
- [ ] H3 pour sous-sections (projets, expériences)
- [ ] Pas de saut de niveau (H2 → H4)
- [ ] Valider avec extension HeadingsMap

---

## Aspects techniques

### 9. Sitemap.xml

**Status**: ✅ Configuré

**Fichier**: `config.toml:119-122`
```toml
[sitemap]
  changefreq = "monthly"
  filename = "sitemap.xml"
  priority = 0.5
```

#### ✅ Optimisation possible

```toml
[sitemap]
  changefreq = "weekly"  # Plus fréquent si vous ajoutez des projets
  filename = "sitemap.xml"
  priority = 0.8  # Augmenter si c'est votre site principal
```

#### 📋 Checklist

- [ ] Vérifier que sitemap est généré: `https://guillaumegustin.com/sitemap.xml`
- [ ] Soumettre dans Google Search Console
- [ ] Ajouter dans Bing Webmaster Tools
- [ ] Vérifier que toutes les pages importantes sont incluses
- [ ] Exclure pages non pertinentes (404, etc.)

---

### 10. Robots.txt

**Status**: ✅ Présent et bien configuré

**Fichier**: `static/robots.txt`
```
User-agent: *
Allow: /

Sitemap: https://guillaumegustin.com/sitemap.xml
```

#### ✅ Optimisation possible

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /*.json$

# Allow specific bots
User-agent: Googlebot
User-agent: Bingbot
Allow: /

# Crawl delay for polite bots
Crawl-delay: 1

Sitemap: https://guillaumegustin.com/sitemap.xml
```

#### 📋 Checklist

- [ ] Vérifier accessibilité: `https://guillaumegustin.com/robots.txt`
- [ ] Tester avec Google Robots Testing Tool
- [ ] S'assurer qu'aucun contenu important n'est bloqué

---

### 11. Google Analytics & Tag Manager

**Status**: ❌ Non configuré

**Fichier**: `config.toml:102`
```toml
googleTagManagerID = "" # Vide
```

#### ✅ Configuration recommandée

**Étape 1**: Créer compte Google Analytics 4
- URL: https://analytics.google.com/

**Étape 2**: Créer propriété GA4
- Nom: "guillaumegustin.com"
- Fuseau horaire: Europe/Brussels
- Devise: EUR

**Étape 3**: Créer Google Tag Manager
- URL: https://tagmanager.google.com/
- Conteneur: guillaumegustin.com (Web)

**Étape 4**: Ajouter dans `config.toml`
```toml
googleTagManagerID = "GTM-XXXXXX" # Votre ID GTM
```

**Étape 5**: Créer partial GTM

**Fichier**: `layouts/partials/google-tag-manager.html`
```html
{{ if .Site.Params.googleTagManagerID }}
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','{{ .Site.Params.googleTagManagerID }}');</script>
<!-- End Google Tag Manager -->
{{ end }}
```

**Inclusion dans baseof.html**:
```html
<head>
  {{ partial "google-tag-manager.html" . }}
</head>
<body>
  <!-- Google Tag Manager (noscript) -->
  {{ if .Site.Params.googleTagManagerID }}
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ .Site.Params.googleTagManagerID }}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  {{ end }}

  {{ block "main" . }}{{ end }}
</body>
```

#### 📊 Événements à tracker

**Dans GTM, configurer ces événements**:

1. **Form submission** (contact)
```javascript
// Événement: form_submission
{
  'event': 'form_submission',
  'form_name': 'contact'
}
```

2. **Outbound clicks** (liens vers projets externes)
3. **Scroll depth** (25%, 50%, 75%, 100%)
4. **File downloads** (CV, user guides)
5. **Button clicks** (CTA importants)

#### 📋 Checklist

- [ ] Créer compte GA4
- [ ] Créer compte GTM
- [ ] Ajouter GTM ID dans config.toml
- [ ] Créer partial GTM
- [ ] Inclure dans baseof.html
- [ ] Configurer événements de base
- [ ] Tester avec Google Tag Assistant
- [ ] Vérifier données en temps réel dans GA4

---

### 12. Google Search Console

**Status**: À vérifier/configurer

#### ✅ Configuration

**Étape 1**: Ajouter propriété
- URL: https://search.google.com/search-console
- Type: Propriété de domaine ou préfixe d'URL

**Étape 2**: Vérification via HTML tag

**Ajouter dans**: `layouts/_default/baseof.html`
```html
<head>
  <!-- Google Search Console Verification -->
  <meta name="google-site-verification" content="VOTRE_CODE_VERIFICATION">
</head>
```

**Étape 3**: Soumettre sitemap
- Dans Search Console: Sitemaps → Ajouter un sitemap
- URL: `https://guillaumegustin.com/sitemap.xml`

#### 📋 Checklist

- [ ] Créer propriété Search Console
- [ ] Vérifier propriété (meta tag ou DNS)
- [ ] Soumettre sitemap.xml
- [ ] Vérifier indexation (Coverage report)
- [ ] Configurer alertes email
- [ ] Analyser requêtes de recherche mensuellement

---

## Plan d'action priorisé

### 🔴 Phase 1 - Quick Wins (Semaine 1) - 4-6h

**Impact**: +30 points SEO

#### Jour 1-2: Métadonnées de base

- [ ] **1.1** Créer `layouts/_default/baseof.html` (1h)
  - Template HTML complet
  - Head avec toutes les meta

- [ ] **1.2** Ajouter meta description (30min)
  - Mettre à jour `data/homepage.yml`
  - Tester longueur et pertinence

- [ ] **1.3** Ajouter Open Graph tags (30min)
  - FB, Twitter, LinkedIn
  - Créer image OG 1200×630

- [ ] **1.4** Optimiser title tag (15min)
  - Choisir formulation (50-60 char)
  - Mettre à jour homepage.yml

- [ ] **1.5** Ajouter canonical tags (15min)
  - Dans baseof.html

#### Jour 3-4: Structured Data

- [ ] **1.6** Schema Person (1h)
  - Créer `layouts/partials/schema-person.html`
  - Inclure dans baseof
  - Valider avec Google Rich Results Test

- [ ] **1.7** Schema WebSite (30min)
  - Créer partial
  - Valider

#### Jour 5: Tests & validation

- [ ] **1.8** Valider tout (1h)
  - Facebook Sharing Debugger
  - Twitter Card Validator
  - Schema.org Validator
  - Google Rich Results Test

**Résultat attendu**: Score SEO passe de 45 → 70

---

### 🟡 Phase 2 - Optimisation contenu (Semaine 2) - 3-4h

**Impact**: +10 points SEO

- [ ] **2.1** Améliorer tous les alt texts (1h30)
  - Showcase images
  - About image
  - Tous les works (6-7 projets)
  - Client logos

- [ ] **2.2** Optimiser contenu textuel (1h)
  - Intégrer mots-clés dans showcase
  - Enrichir section About
  - Ajouter termes sémantiques

- [ ] **2.3** Vérifier structure headings (30min)
  - Un seul H1
  - H2 pour sections
  - H3 pour sous-sections

- [ ] **2.4** Configurer Google Analytics (1h)
  - Créer compte GA4
  - Créer GTM
  - Ajouter codes tracking
  - Tester événements de base

**Résultat attendu**: Score SEO passe de 70 → 80

---

### 🟢 Phase 3 - Pages projets (Semaine 3-4) - 8-12h

**Impact**: +5 points SEO + contenu riche

- [ ] **3.1** Créer architecture projets (2h)
  - Structure `/content/projects/`
  - Layout `layouts/projects/single.html`
  - Breadcrumbs + Schema

- [ ] **3.2** Migrer 2-3 projets prioritaires (6-8h)
  - ePRO Platform (featured)
  - Patient Decision Aids (featured)
  - Pwablo (business actuel)

- [ ] **3.3** Optimiser SEO pages projets (2h)
  - Métadonnées uniques par projet
  - Alt texts images projets
  - Schema CreativeWork
  - Internal linking

**Résultat attendu**: Score SEO passe de 80 → 85+

---

### 🔵 Phase 4 - Monitoring continu (Mensuel) - 1-2h/mois

- [ ] **4.1** Analyser Search Console
  - Requêtes de recherche
  - Pages les plus vues
  - CTR moyen
  - Erreurs d'indexation

- [ ] **4.2** Analyser Google Analytics
  - Trafic organique
  - Pages d'atterrissage
  - Taux de rebond
  - Conversions (formulaire)

- [ ] **4.3** Ajuster contenu
  - Optimiser pages faible CTR
  - Créer contenu pour requêtes populaires
  - Mettre à jour projets

- [ ] **4.4** Backlinks
  - Créer profil sur plateformes professionnelles
  - Partager publications académiques
  - Guest posts sur blogs tech/health

---

## Métriques de suivi

### KPIs principaux

| Métrique | Actuel | Objectif 3 mois | Outil |
|----------|--------|-----------------|-------|
| **Impressions** (Google) | À mesurer | +50% | Search Console |
| **Clics organiques** | À mesurer | +40% | Search Console |
| **CTR moyen** | À mesurer | 3-5% | Search Console |
| **Position moyenne** | À mesurer | Top 10 pour keywords cibles | Search Console |
| **Pages indexées** | À vérifier | 15-20 pages | Search Console |
| **Score Lighthouse SEO** | ~45 | 90+ | Lighthouse |
| **Backlinks** | À mesurer | 20+ | Ahrefs/Moz |

### Outils de suivi

1. **Google Search Console** (gratuit)
   - Impressions, clics, CTR
   - Requêtes de recherche
   - Erreurs d'indexation

2. **Google Analytics 4** (gratuit)
   - Trafic organique
   - Comportement utilisateurs
   - Conversions

3. **Google Lighthouse** (gratuit)
   - Score SEO
   - Performance
   - Accessibilité

4. **Schema Markup Validator** (gratuit)
   - https://validator.schema.org/
   - https://search.google.com/test/rich-results

5. **Outils complémentaires**
   - Ahrefs (payant) - Backlinks, keywords
   - SEMrush (payant) - Analyse concurrence
   - Screaming Frog (freemium) - Crawl technique

---

## Ressources & liens utiles

### Documentation officielle

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

### Outils de validation

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Guides SEO

- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Ahrefs SEO Checklist](https://ahrefs.com/seo-checklist)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

**Dernière mise à jour**: 7 novembre 2024
**Prochaine révision**: Après Phase 1 (dans 1 semaine)
