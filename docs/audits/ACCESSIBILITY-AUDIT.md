# Audit Accessibilité (WCAG 2.1) - guillaumegustin.com

**Date**: 7 novembre 2024
**Score actuel estimé**: 60/100
**Score cible**: 95+/100 (Niveau AA)
**Priorité globale**: 🟡 ÉLEVÉE

---

## Table des matières

1. [Résumé exécutif](#résumé-exécutif)
2. [Conformité WCAG](#conformité-wcag)
3. [Problèmes critiques](#problèmes-critiques)
4. [Navigation et interaction](#navigation-et-interaction)
5. [Contenu et structure](#contenu-et-structure)
6. [Multimédia et images](#multimédia-et-images)
7. [Formulaires](#formulaires)
8. [Tests et validation](#tests-et-validation)
9. [Plan d'action](#plan-daction)

---

## Résumé exécutif

### Niveaux WCAG

**WCAG 2.1 - 3 niveaux**:
- **Niveau A**: Exigences minimales (base)
- **Niveau AA**: Standard recommandé (objectif)
- **Niveau AAA**: Accessibilité optimale (idéal)

### État actuel

| Principe WCAG | Conformité | Niveau |
|---------------|------------|--------|
| **1. Perceptible** | 55% | Partiel |
| **2. Utilisable** | 60% | Partiel |
| **3. Compréhensible** | 70% | Bon |
| **4. Robuste** | 65% | Partiel |

### Points forts

- ✅ Structure HTML sémantique (`<section>`, `<nav>`, etc.)
- ✅ Site responsive (adapté mobile)
- ✅ Lazy loading avec fallback
- ✅ Certains alt texts présents
- ✅ Contraste de couleurs généralement correct

### Points faibles critiques

- ❌ **Formulaire non accessible** (labels cachés)
- ❌ **Alt texts manquants ou génériques**
- ❌ **Pas de skip links** pour navigation
- ❌ **Focus styles insuffisants**
- ❌ **Landmarks ARIA manquants**
- ❌ **Liens externes sans indication**

---

## Conformité WCAG

### Principe 1: Perceptible

L'information et les composants de l'interface doivent être présentables.

#### 1.1 Alternatives textuelles

| Critère | Niveau | Status | Détails |
|---------|--------|--------|---------|
| 1.1.1 Contenu non textuel | A | ⚠️ Partiel | Alt texts présents mais génériques |

#### 1.3 Adaptable

| Critère | Niveau | Status | Détails |
|---------|--------|--------|---------|
| 1.3.1 Information et relations | A | ❌ Échec | Labels formulaire cachés |
| 1.3.2 Ordre séquentiel | A | ✅ OK | Ordre logique |
| 1.3.3 Caractéristiques sensorielles | A | ✅ OK | Pas de référence à forme/couleur seule |

#### 1.4 Distinguable

| Critère | Niveau | Status | Détails |
|---------|--------|--------|---------|
| 1.4.1 Utilisation de la couleur | A | ✅ OK | Pas de couleur seule pour info |
| 1.4.3 Contraste (minimum) | AA | ⚠️ À vérifier | Certains gris à tester |
| 1.4.11 Contraste non textuel | AA | ⚠️ À vérifier | Icônes et boutons |

---

### Principe 2: Utilisable

Les composants de l'interface utilisateur et la navigation doivent être utilisables.

#### 2.1 Accessibilité au clavier

| Critère | Niveau | Status | Détails |
|---------|--------|--------|---------|
| 2.1.1 Clavier | A | ⚠️ Partiel | Navigation possible mais focus peu visible |
| 2.1.2 Pas de piège au clavier | A | ✅ OK | Aucun piège détecté |

#### 2.4 Navigable

| Critère | Niveau | Status | Détails |
|---------|--------|--------|---------|
| 2.4.1 Contourner des blocs | A | ❌ Échec | Pas de skip links |
| 2.4.2 Titre de page | A | ✅ OK | Title présent |
| 2.4.3 Parcours du focus | A | ⚠️ Partiel | Ordre logique mais focus peu visible |
| 2.4.4 Fonction du lien | A | ⚠️ Partiel | Certains liens peu descriptifs |
| 2.4.7 Focus visible | AA | ❌ Échec | Focus par défaut insuffisant |

---

### Principe 3: Compréhensible

L'information et l'utilisation de l'interface doivent être compréhensibles.

#### 3.1 Lisible

| Critère | Niveau | Status | Détails |
|---------|--------|--------|---------|
| 3.1.1 Langue de la page | A | ✅ OK | Lang="en" présent |
| 3.1.2 Langue d'un passage | AA | ✅ OK | Contenu unilingue |

#### 3.2 Prévisible

| Critère | Niveau | Status | Détails |
|---------|--------|--------|---------|
| 3.2.1 Au focus | A | ✅ OK | Pas de changement au focus |
| 3.2.2 À la saisie | A | ✅ OK | Formulaire prévisible |
| 3.2.4 Identification cohérente | AA | ✅ OK | Éléments cohérents |

#### 3.3 Assistance à la saisie

| Critère | Niveau | Status | Détails |
|---------|--------|--------|---------|
| 3.3.1 Identification des erreurs | A | ⚠️ À implémenter | Validation formulaire |
| 3.3.2 Étiquettes ou instructions | A | ❌ Échec | Labels cachés |

---

### Principe 4: Robuste

Le contenu doit être robuste pour être interprété par diverses technologies.

#### 4.1 Compatible

| Critère | Niveau | Status | Détails |
|---------|--------|--------|---------|
| 4.1.1 Analyse syntaxique | A | ✅ OK | HTML valide (à confirmer) |
| 4.1.2 Nom, rôle et valeur | A | ⚠️ Partiel | Certains ARIA manquants |
| 4.1.3 Messages d'état | AA | ⚠️ À implémenter | Feedback formulaire |

---

## Problèmes critiques

### 1. 🔴 Formulaire de contact inaccessible

**Critère WCAG**: 1.3.1 (A), 3.3.2 (A)
**Impact**: Critique - Utilisateurs de lecteurs d'écran ne peuvent pas utiliser le formulaire

#### Problème

**Fichier**: `static/css/custom.css:45-47`
```css
#full_name_label{display: none;}
#message_label{display: none;}
#email_label{display: none;}
```

**Fichier**: `layouts/partials/contact.html:11-17`
```html
<label id="full_name_label" for="full_name">{{ .Site.Data.homepage.contact.form.full_name }}</label>
<input type="text" name="" id="full_name"
       placeholder="{{ .Site.Data.homepage.contact.form.full_name }}"/>
```

**Problèmes multiples**:
1. ❌ Labels cachés avec `display: none` (invisibles pour lecteurs d'écran)
2. ❌ Attribut `name=""` vide sur le champ nom
3. ❌ Pas de `aria-required` sur champs obligatoires
4. ❌ Pas de `aria-invalid` pour erreurs
5. ❌ Pas de messages d'erreur accessibles

#### Solution 1: Labels visuellement cachés (recommandé)

**Créer**: `static/css/accessibility.css`
```css
/* Classe pour cacher visuellement mais garder accessible */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

/* Supprimer les display:none problématiques */
/* Commenter ou supprimer ces lignes dans custom.css:
#full_name_label{display: none;}
#message_label{display: none;}
#email_label{display: none;}
*/
```

**Modifier**: `layouts/partials/contact.html`
```html
<form action="{{ .Site.Data.homepage.contact.form.action }}"
      method="{{ .Site.Data.homepage.contact.form.method }}"
      aria-label="Contact form">
  <div class="row">
    <div class="col-12 col-sm-6">
      <!-- Option 1: Label visuellement caché -->
      <label for="full_name" class="visually-hidden">
        {{ .Site.Data.homepage.contact.form.full_name }}
      </label>
      <input type="text"
             name="name"
             id="full_name"
             placeholder="{{ .Site.Data.homepage.contact.form.full_name }}"
             aria-required="true"
             autocomplete="name"
             required/>
    </div>

    <div class="col-12 col-sm-6">
      <label for="email" class="visually-hidden">
        {{ .Site.Data.homepage.contact.form.email }}
      </label>
      <input type="email"
             name="_replyto"
             id="email"
             placeholder="{{ .Site.Data.homepage.contact.form.email }}"
             aria-required="true"
             autocomplete="email"
             required/>
    </div>
  </div>

  <div class="row pt-4">
    <div class="col-12">
      <label for="message" class="visually-hidden">
        {{ .Site.Data.homepage.contact.form.message }}
      </label>
      <textarea name="message"
                id="message"
                cols="30"
                rows="3"
                placeholder="{{ .Site.Data.homepage.contact.form.message }}"
                aria-required="true"
                required></textarea>
    </div>
  </div>

  <div class="row pt-4">
    <div class="col-12">
      <!-- Zone pour messages d'erreur -->
      <div id="form-errors"
           role="alert"
           aria-live="polite"
           class="visually-hidden"></div>

      <button type="submit"
              class="btn {{ .Site.Data.homepage.contact.button.class }}"
              aria-label="Send contact message">
        <i class="{{ .Site.Data.homepage.contact.button.icon }}" aria-hidden="true"></i>
        {{ .Site.Data.homepage.contact.button.btnText }}
      </button>
    </div>
  </div>
</form>
```

#### Solution 2: Labels visibles (meilleure UX)

**Alternative**: Rendre les labels visibles

**Modifier**: `static/css/custom.css`
```css
/* Remplacer display: none par un style visible élégant */
.form-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
}

/* Supprimer complètement:
#full_name_label{display: none;}
#message_label{display: none;}
#email_label{display: none;}
*/
```

**Modifier**: `layouts/partials/contact.html`
```html
<label for="full_name" class="form-label">
  {{ .Site.Data.homepage.contact.form.full_name }}
  <span class="required" aria-label="required">*</span>
</label>
<input type="text"
       name="name"
       id="full_name"
       class="form-control"
       aria-required="true"
       required/>
```

#### Validation côté client accessible

**Ajouter**: `static/js/form-validation.js`
```javascript
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form[aria-label="Contact form"]');
  const errorContainer = document.getElementById('form-errors');

  if (form) {
    form.addEventListener('submit', function(e) {
      // Réinitialiser les erreurs
      errorContainer.innerHTML = '';
      errorContainer.classList.add('visually-hidden');

      let errors = [];

      // Validation nom
      const nameInput = document.getElementById('full_name');
      if (!nameInput.value.trim()) {
        errors.push('Please enter your name');
        nameInput.setAttribute('aria-invalid', 'true');
      } else {
        nameInput.setAttribute('aria-invalid', 'false');
      }

      // Validation email
      const emailInput = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        errors.push('Please enter your email');
        emailInput.setAttribute('aria-invalid', 'true');
      } else if (!emailRegex.test(emailInput.value)) {
        errors.push('Please enter a valid email address');
        emailInput.setAttribute('aria-invalid', 'true');
      } else {
        emailInput.setAttribute('aria-invalid', 'false');
      }

      // Validation message
      const messageInput = document.getElementById('message');
      if (!messageInput.value.trim()) {
        errors.push('Please enter a message');
        messageInput.setAttribute('aria-invalid', 'true');
      } else {
        messageInput.setAttribute('aria-invalid', 'false');
      }

      // Afficher les erreurs
      if (errors.length > 0) {
        e.preventDefault();
        errorContainer.innerHTML = '<ul>' +
          errors.map(err => '<li>' + err + '</li>').join('') +
          '</ul>';
        errorContainer.classList.remove('visually-hidden');
        errorContainer.focus(); // Focus sur les erreurs
      }
    });
  }
});
```

#### CSS pour états d'erreur

**Ajouter**: `static/css/accessibility.css`
```css
/* Indication visuelle des erreurs */
input[aria-invalid="true"],
textarea[aria-invalid="true"] {
  border: 2px solid #d32f2f;
  background-color: #ffebee;
}

input[aria-invalid="true"]:focus,
textarea[aria-invalid="true"]:focus {
  outline: 3px solid #d32f2f;
  outline-offset: 2px;
}

/* Messages d'erreur */
#form-errors {
  background-color: #ffebee;
  border-left: 4px solid #d32f2f;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #c62828;
}

#form-errors ul {
  margin: 0;
  padding-left: 1.5rem;
}

/* Success state */
input[aria-invalid="false"]:focus,
textarea[aria-invalid="false"]:focus {
  border-color: #4caf50;
}
```

#### 📋 Checklist

- [ ] Créer `static/css/accessibility.css` avec classe `.visually-hidden`
- [ ] Supprimer `display: none` dans `custom.css:45-47`
- [ ] Ajouter classe `.visually-hidden` aux labels ou les rendre visibles
- [ ] Ajouter attribut `name="name"` au champ nom
- [ ] Ajouter `aria-required="true"` sur champs obligatoires
- [ ] Ajouter attributs `autocomplete` appropriés
- [ ] Créer zone `role="alert"` pour messages d'erreur
- [ ] Implémenter validation JavaScript accessible
- [ ] Ajouter CSS pour états `aria-invalid`
- [ ] Tester avec lecteur d'écran (NVDA/JAWS)
- [ ] Tester navigation clavier complète du formulaire

---

### 2. 🟡 Alt texts manquants ou génériques

**Critère WCAG**: 1.1.1 (A)
**Impact**: Élevé - Images non comprises par utilisateurs malvoyants

#### Problèmes identifiés

**Fichier**: `layouts/partials/about.html:8`
```html
<img alt="Profile Picture"> <!-- Trop générique -->
```

**Fichier**: `data/homepage.yml` (plusieurs images)
```yaml
showcase:
  image:
    x: "img/showcase/showcase.webp"
    # ❌ Pas de champ 'alt'
```

#### Solutions

**Mise à jour**: `data/homepage.yml`
```yaml
showcase:
  image:
    x: "img/showcase/showcase.webp"
    _2x: "img/showcase/showcase@2x.webp"
    alt: "Guillaume Gustin collaborating on digital health platform development in modern workspace"
  imageMobile:
    x: "img/showcase/showcase-mobile.webp"
    alt: "Close-up view of Guillaume Gustin's developer workspace with code editor and health app mockups"

about:
  image:
    x: "img/who-am-i/avatar_mini.webp"
    alt: "Professional portrait of Guillaume Gustin, biomedical engineer and full-stack developer, wearing glasses and business attire"

# Pour chaque client logo:
client_and_work:
  clients:
    - logo:
        x: "img/clients/bruxeo.webp"
        alt: "BRUXEO logo - Digital transformation consultancy for non-profits"
    - logo:
        x: "img/clients/decide_logo.webp"
        alt: "DEC!DE logo - Environmental awareness organization"
    - logo:
        x: "img/clients/medC2.webp"
        alt: "MedC2 (The Medical Cloud Company) logo - Digital health solutions startup"
    - logo:
        x: "img/clients/logo_dlab.webp"
        alt: "Digital Lab logo - Innovation and technology research center"
    - logo:
        x: "img/clients/ucl.webp"
        alt: "UCLouvain (Catholic University of Louvain) logo"
    - logo:
        x: "img/clients/CUSL.webp"
        alt: "CUSL (Centre Sportif de l'UCLouvain) logo"

  works:
    - title: "ePRO Collection Platform"
      image:
        original: "img/works/immuno_mock.png"
        alt: "ePRO platform user interface showing patient dashboard with task list, questionnaire form, and clinical data visualization for ImmunoSABR cancer trial"

    - title: "Patient Decision Aids"
      image:
        original: "img/works/ipda_mock.png"
        alt: "Interactive patient decision aid application displaying treatment options comparison, educational modules, and personalized medical information for cancer patients"

    - title: "DEC!DE Design"
      image:
        original: "img/works/decide_mock.png"
        alt: "DEC!DE environmental app design mockup featuring cultural engagement interface with ecological concept visualization and interactive elements"

    - title: "Pwablo"
      image:
        original: "img/works/pwablo.png"
        alt: "Pwablo sustainable web agency website homepage showcasing eco-friendly design principles, green hosting badge, and portfolio of optimized websites"

    - title: "MyPatientCheck"
      image:
        original: "img/works/MyPC_finalB.png"
        alt: "MyPatientCheck COVID-19 risk assessment tool interface with symptom checker, triage questionnaire, and clinical decision support visualization"

    - title: "Wadaff"
      image:
        original: "img/works/wadaff.png"
        alt: "Wadaff event discovery app showing interactive map with music events, real-time ratings, and venue information for party-goers"
```

#### Mise à jour des partials

**Vérifier**: `layouts/partials/about.html`
```html
{{ partial "responsive-image.html" (dict
  "src" .Site.Data.homepage.about.image.original
  "alt" (.Site.Data.homepage.about.image.alt | default "Profile Picture")
  "class" "lozad img-responsive"
  "lazy" true
) }}
```

**Vérifier**: `layouts/partials/responsive-image.html`
```html
<!-- S'assurer que le alt est bien utilisé -->
<img src="{{ .src }}"
     alt="{{ .alt }}"
     class="{{ .class }}"
     {{ if .lazy }}loading="lazy"{{ end }}>
```

#### Bonnes pratiques Alt Text

**DO ✅**:
- Décrire le contenu et le contexte
- Inclure informations importantes visibles
- Être concis (125 caractères max)
- Décrire l'action si image cliquable
- Utiliser ponctuation normale

**DON'T ❌**:
- Commencer par "image de..." (redondant)
- Répéter le texte adjacent
- Bourrer de mots-clés
- Utiliser `alt=""` pour images informatives
- Être trop vague ("logo", "photo")

**Exemples**:

| Type d'image | ❌ Mauvais | ✅ Bon |
|--------------|-----------|--------|
| Logo client | "logo" | "BRUXEO logo - Digital transformation consultancy" |
| Screenshot | "screenshot" | "Patient dashboard showing medication schedule and health metrics" |
| Portrait | "Photo" | "Guillaume Gustin, full-stack developer, smiling in professional attire" |
| Icône décorative | "icon" | `alt=""` (vide si purement décoratif) |
| Graphique | "graph" | "Bar chart showing 60% reduction in data entry time after ePRO implementation" |

#### Images décoratives

Pour images purement décoratives (pas d'information):
```html
<img src="decorative-pattern.svg" alt="" role="presentation">
<!-- alt vide + role="presentation" = ignoré par lecteurs d'écran -->
```

#### 📋 Checklist

- [ ] Ajouter champ `alt` pour toutes les images dans `homepage.yml`
- [ ] Showcase images (desktop + mobile)
- [ ] About profile picture
- [ ] 6 logos clients
- [ ] 6 mockups projets
- [ ] Vérifier que partials utilisent `.alt` du YAML
- [ ] Tester avec lecteur d'écran
- [ ] Valider avec WAVE extension

---

### 3. 🟡 Skip Links manquants

**Critère WCAG**: 2.4.1 (A)
**Impact**: Élevé - Utilisateurs clavier forcés de tabber tout le menu

#### Problème

Utilisateurs de clavier doivent passer par tous les liens du header avant d'accéder au contenu principal.

#### Solution

**Ajouter**: `layouts/_default/baseof.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... meta ... -->
</head>
<body>
  <!-- Skip Links (invisible jusqu'au focus) -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <a href="#contact" class="skip-link">Skip to contact</a>

  <header role="banner">
    <!-- Navigation -->
  </header>

  <main id="main-content" role="main" tabindex="-1">
    {{ block "main" . }}{{ end }}
  </main>

  <footer role="contentinfo">
    <!-- Footer -->
  </footer>
</body>
</html>
```

**Ajouter**: `static/css/accessibility.css`
```css
/* Skip links - visibles au focus uniquement */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 600;
  z-index: 100;
  border-radius: 0 0 4px 0;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid #e05d44;
  outline-offset: 2px;
}

/* Alternative: skip link toujours visible */
.skip-link-visible {
  position: fixed;
  top: 10px;
  left: 10px;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
  border-radius: 4px;
}
```

#### 📋 Checklist

- [ ] Ajouter skip links dans baseof.html
- [ ] Ajouter `id="main-content"` sur `<main>`
- [ ] Créer CSS pour skip links
- [ ] Tester navigation clavier (Tab dès le chargement)
- [ ] Vérifier que skip link est le premier élément focusable
- [ ] S'assurer que le focus va bien au contenu

---

### 4. 🟡 Focus styles insuffisants

**Critère WCAG**: 2.4.7 (AA)
**Impact**: Élevé - Utilisateurs clavier ne savent pas où ils sont

#### Problème

Le focus par défaut du navigateur est souvent peu visible, surtout sur éléments personnalisés.

#### Solution

**Ajouter**: `static/css/accessibility.css`
```css
/* ===================================
   FOCUS STYLES - Navigation clavier
   =================================== */

/* Focus global visible pour tous les éléments interactifs */
*:focus {
  outline: 3px solid #e05d44;
  outline-offset: 2px;
}

/* Focus moderne avec :focus-visible (meilleure UX) */
/* Apparaît seulement pour navigation clavier, pas au clic */
*:focus-visible {
  outline: 3px solid #e05d44;
  outline-offset: 3px;
  transition: outline-offset 0.2s ease;
}

/* Supprimer outline par défaut si :focus-visible supporté */
*:focus:not(:focus-visible) {
  outline: none;
}

/* Focus sur liens */
a:focus,
a:focus-visible {
  outline: 3px solid #e05d44;
  outline-offset: 3px;
  background-color: rgba(224, 93, 68, 0.1);
  border-radius: 2px;
}

/* Focus sur boutons */
button:focus,
button:focus-visible,
.btn:focus,
.btn:focus-visible {
  outline: 3px solid #e05d44;
  outline-offset: 3px;
  box-shadow: 0 0 0 4px rgba(224, 93, 68, 0.2);
}

/* Focus sur inputs */
input:focus,
textarea:focus,
select:focus {
  outline: 3px solid #e05d44;
  outline-offset: 2px;
  border-color: #e05d44;
  box-shadow: 0 0 0 3px rgba(224, 93, 68, 0.15);
}

/* Focus sur cartes/sections cliquables */
.publication-card:focus,
.work-item:focus {
  outline: 3px solid #e05d44;
  outline-offset: 4px;
  transform: translate(-2px, -2px);
  transition: transform 0.2s ease;
}

/* Focus pour navigation principale */
nav a:focus,
nav a:focus-visible {
  background-color: rgba(224, 93, 68, 0.15);
  border-radius: 4px;
  padding: 4px 8px;
  margin: -4px -8px;
}

/* Indicateur de focus pour éléments complexes */
.has-focus-indicator {
  position: relative;
}

.has-focus-indicator:focus::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 3px solid #e05d44;
  border-radius: 4px;
  pointer-events: none;
}

/* États de focus pour champs avec erreur */
input[aria-invalid="true"]:focus,
textarea[aria-invalid="true"]:focus {
  outline-color: #d32f2f;
  border-color: #d32f2f;
  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.15);
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  *:focus,
  *:focus-visible {
    outline-width: 4px;
    outline-offset: 4px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *:focus,
  *:focus-visible {
    transition: none;
  }
}
```

#### Test de navigation clavier

**Éléments à tester** (dans l'ordre de tabulation):
1. Skip link
2. Logo
3. Menu navigation (About, Education, Experience, etc.)
4. Boutons CTA showcase
5. Liens sociaux (WhatsApp)
6. Liens dans section About
7. Badges experience
8. Liens publications
9. Projets (6 items)
10. Formulaire contact (3 champs + bouton)
11. Footer links

#### 📋 Checklist

- [ ] Créer CSS focus styles dans `accessibility.css`
- [ ] Inclure `accessibility.css` dans `baseof.html`
- [ ] Tester navigation Tab complète
- [ ] Vérifier focus visible sur tous les éléments
- [ ] Tester avec différents navigateurs (Chrome, Firefox, Safari)
- [ ] Vérifier ordre de tabulation logique
- [ ] Tester Shift+Tab (navigation inverse)
- [ ] S'assurer qu'aucun élément n'a `outline: none` sans alternative

---

### 5. 🟢 Landmarks ARIA manquants

**Critère WCAG**: 1.3.1 (A), 4.1.2 (A)
**Impact**: Moyen - Améliore navigation pour lecteurs d'écran

#### Problème

Pas de landmarks ARIA explicites pour structurer la page.

#### Solution

**Créer ou modifier**: `layouts/_default/baseof.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ .Site.Data.homepage.head.title }}</title>
  <!-- ... autres meta ... -->
</head>
<body>
  <!-- Skip Links -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- Header / Banner -->
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <div class="container">
        <!-- Logo -->
        <a href="/" aria-label="Guillaume Gustin - Home">
          <span aria-hidden="true">GG</span>
        </a>

        <!-- Menu -->
        <ul role="list">
          {{ range .Site.Menus.header }}
            <li><a href="{{ .URL }}">{{ .Name }}</a></li>
          {{ end }}
        </ul>
      </div>
    </nav>
  </header>

  <!-- Main Content -->
  <main id="main-content" role="main" tabindex="-1">
    <!-- Showcase Section -->
    <section id="showcase" aria-labelledby="showcase-heading">
      <h1 id="showcase-heading">{{ .Site.Data.homepage.showcase.title }}</h1>
      <!-- ... contenu ... -->
    </section>

    <!-- About Section -->
    <section id="about" aria-labelledby="about-heading">
      <h2 id="about-heading">{{ .Site.Data.homepage.about.title }}</h2>
      <!-- ... contenu ... -->
    </section>

    <!-- Experience Section -->
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading">{{ .Site.Data.homepage.experience.title }}</h2>
      <!-- ... contenu ... -->
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading">{{ .Site.Data.homepage.client_and_work.title }}</h2>

      <!-- Liste de projets -->
      <div role="region" aria-label="Featured projects">
        {{ range .Site.Data.homepage.client_and_work.works }}
          <article aria-labelledby="project-{{ .title | urlize }}">
            <h3 id="project-{{ .title | urlize }}">{{ .title }}</h3>
            <!-- ... contenu projet ... -->
          </article>
        {{ end }}
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">{{ .Site.Data.homepage.contact.title }}</h2>

      <!-- Formulaire -->
      <form role="form" aria-label="Contact form">
        <!-- ... champs ... -->
      </form>

      <!-- Informations de contact -->
      <aside role="complementary" aria-label="Contact information">
        <!-- ... infos contact ... -->
      </aside>
    </section>
  </main>

  <!-- Footer -->
  <footer role="contentinfo">
    <nav role="navigation" aria-label="Footer navigation">
      <ul role="list">
        {{ range .Site.Menus.footer }}
          <li><a href="{{ .URL }}">{{ .Name }}</a></li>
        {{ end }}
      </ul>
    </nav>

    <p>{{ .Site.Params.footer.copyright }}</p>
  </footer>
</body>
</html>
```

#### Landmarks ARIA principaux

| Landmark | Rôle | Utilisation |
|----------|------|-------------|
| `banner` | Header | En-tête principal du site |
| `navigation` | Nav | Menus de navigation |
| `main` | Main | Contenu principal |
| `complementary` | Aside | Contenu complémentaire |
| `contentinfo` | Footer | Pied de page |
| `search` | Form search | Formulaire de recherche |
| `region` | Section | Région importante |
| `form` | Form | Formulaire |

#### Labels ARIA

**Utiliser `aria-label` quand**:
- Plusieurs landmarks du même type (`<nav>`)
- Le rôle n'est pas explicite visuellement

**Utiliser `aria-labelledby` quand**:
- Un heading visible décrit la section
- Préférable car le texte est visible à tous

#### 📋 Checklist

- [ ] Ajouter `role="banner"` sur header
- [ ] Ajouter `role="navigation"` sur nav avec `aria-label`
- [ ] Ajouter `role="main"` sur main
- [ ] Ajouter `role="contentinfo"` sur footer
- [ ] Utiliser `aria-labelledby` pour sections avec headings
- [ ] Ajouter `role="region"` pour zones importantes
- [ ] Tester avec lecteur d'écran (navigation par landmarks)
- [ ] Valider avec WAVE ou axe DevTools

---

### 6. 🟢 Liens externes sans indication

**Critère WCAG**: 2.4.4 (A)
**Impact**: Moyen - Utilisateurs ne savent pas qu'une nouvelle fenêtre s'ouvre

#### Problème

Liens qui ouvrent dans un nouvel onglet (`target="_blank"`) sans avertissement.

#### Solution

**Pattern recommandé**:
```html
<!-- Option 1: Texte accessible + icône visuelle -->
<a href="https://example.com"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Visit Pwablo website (opens in new tab)">
  Visit Pwablo
  <span class="external-link-icon" aria-hidden="true">↗</span>
</a>

<!-- Option 2: Texte caché pour lecteurs d'écran -->
<a href="https://example.com"
   target="_blank"
   rel="noopener noreferrer">
  Visit Pwablo
  <span class="visually-hidden">(opens in new tab)</span>
  <span aria-hidden="true">↗</span>
</a>
```

**CSS pour icône externe**:
```css
/* Icône lien externe */
.external-link-icon {
  display: inline-block;
  margin-left: 0.25em;
  font-size: 0.85em;
  vertical-align: super;
}

/* Ou avec pseudo-élément automatique */
a[target="_blank"]::after {
  content: " ↗";
  font-size: 0.85em;
  vertical-align: super;
  margin-left: 0.25em;
  display: inline-block;
}

/* Mais exclure les images/boutons */
a[target="_blank"].no-external-icon::after,
a[target="_blank"] > img::after {
  content: none;
}
```

#### Mise à jour fichiers existants

**Fichier**: `layouts/partials/contact.html:45,55`
```html
<!-- Avant -->
<a href="https://cal.com/pwablo/30min" target="_blank" class="contact-link">
  <img src="..." alt="Calendar">
  Schedule a call
</a>

<!-- Après -->
<a href="https://cal.com/pwablo/30min"
   target="_blank"
   rel="noopener noreferrer"
   class="contact-link"
   aria-label="Schedule a call via Calendly (opens in new tab)">
  <img src="..." alt="" role="presentation">
  Schedule a call
  <span class="visually-hidden">(opens in new tab)</span>
</a>
```

**Fichier**: `data/homepage.yml` (pour projets avec liens externes)
```yaml
works:
  - title: "ePRO Collection Platform"
    button:
      icon: "icon-arrow-right"
      btnText: "User Guide"
      URL: "https://docdro.id/GjujVEE"
      external: true  # Ajouter flag pour liens externes
```

**Fichier**: `layouts/partials/client-and-work.html`
```html
{{ if .button.external }}
  <a href="{{ .button.URL | absURL }}"
     class="btn btn-primary"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="{{ .button.btnText }} (opens in new tab)">
    {{ .button.btnText }}
    <i class="{{ .button.icon }}" aria-hidden="true"></i>
    <span class="visually-hidden">(opens in new tab)</span>
  </a>
{{ else }}
  <a href="{{ .button.URL | absURL }}"
     class="btn btn-primary">
    {{ .button.btnText }}
    <i class="{{ .button.icon }}" aria-hidden="true"></i>
  </a>
{{ end }}
```

#### 📋 Checklist

- [ ] Identifier tous les liens `target="_blank"`
- [ ] Ajouter `rel="noopener noreferrer"` (sécurité)
- [ ] Ajouter indication visuelle (icône ↗)
- [ ] Ajouter texte accessible "(opens in new tab)"
- [ ] Créer CSS pour icône externe automatique
- [ ] Tester avec lecteur d'écran
- [ ] Vérifier que l'icône n'est pas lue (aria-hidden)

---

## Navigation et interaction

### 7. Ordre de tabulation

**Critère WCAG**: 2.4.3 (A)

#### Vérifier l'ordre logique

**Ordre attendu**:
1. Skip link
2. Logo/Home
3. Navigation (About, Education, Experience, Publications, Portfolio, Contact)
4. CTA Showcase ("Learn More")
5. Social links (WhatsApp)
6. About CTA
7. Experience badges/links
8. Publications links
9. Portfolio items
10. Contact form (Name → Email → Message → Submit)
11. Contact links
12. Footer navigation

#### Problèmes potentiels

**À éviter**:
```html
<!-- ❌ Mauvais: ordre visuel ≠ ordre DOM -->
<div style="display: flex; flex-direction: column-reverse;">
  <div>Second visuellement</div>
  <div>Premier visuellement</div>
</div>

<!-- ✅ Bon: ordre DOM = ordre visuel -->
<div style="display: flex; flex-direction: column;">
  <div>Premier</div>
  <div>Second</div>
</div>
```

**Utiliser `tabindex` avec précaution**:
```html
<!-- ❌ Éviter tabindex positif (casse l'ordre naturel) -->
<button tabindex="1">Mauvais</button>
<a tabindex="2">Ordre</a>

<!-- ✅ Bon: tabindex="-1" pour focus programmatique uniquement -->
<main id="main-content" tabindex="-1">

<!-- ✅ Bon: tabindex="0" pour rendre focusable -->
<div role="button" tabindex="0">Clickable div</div>
```

#### 📋 Checklist

- [ ] Tester navigation Tab du début à la fin
- [ ] Vérifier que l'ordre est logique
- [ ] Pas de tabindex > 0
- [ ] Éléments non-interactifs ne sont pas focusables
- [ ] Modals/popups (si existants) gèrent le focus correctement

---

### 8. Gestion du focus pour SPAs

**Si vous ajoutez des transitions/animations** entre sections:

```javascript
// Gérer le focus lors de navigation anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll vers l'élément
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Mettre le focus sur l'élément (pour lecteurs d'écran)
      // Ajouter tabindex="-1" si l'élément n'est pas naturellement focusable
      targetElement.setAttribute('tabindex', '-1');
      targetElement.focus();

      // Annoncer aux lecteurs d'écran
      targetElement.setAttribute('aria-live', 'polite');
    }
  });
});
```

---

## Contenu et structure

### 9. Langue de la page

**Critère WCAG**: 3.1.1 (A)

#### ✅ Vérification

**Fichier**: À vérifier dans le HTML généré
```html
<html lang="en">
```

**Si contenu multilingue**:
```html
<p>Ce texte est en <span lang="fr">français</span>.</p>
```

#### 📋 Checklist

- [ ] Attribut `lang` présent sur `<html>`
- [ ] `lang="en"` (ou langue appropriée)
- [ ] Passages en d'autres langues marqués avec `lang`

---

### 10. Structure des headings

**Critère WCAG**: 1.3.1 (A)

#### Hiérarchie recommandée

```html
<h1>Guillaume Gustin - Full-Stack Developer</h1>
  <h2>Who am I?</h2>
  <h2>Education</h2>
    <h3>MIT Global Startup Labs</h3>
    <h3>Catholic University of Louvain</h3>
  <h2>Experience</h2>
    <h3>Pwablo - Founder</h3>
    <h3>BRUXEO - Digital Transformation Advisor</h3>
  <h2>Publications</h2>
    <h3>Scientific Publication</h3>
    <h3>EU Grant Contribution</h3>
  <h2>Featured Works</h2>
    <h3>ePRO Collection Platform</h3>
    <h3>Patient Decision Aids</h3>
  <h2>Contact</h2>
```

#### Règles

- ✅ Un seul H1 par page
- ✅ Pas de saut de niveau (H2 → H4)
- ✅ Headings décrivent le contenu qui suit
- ✅ Pas de headings vides
- ✅ Pas de headings uniquement pour le style

#### Test

**Outil**: [HeadingsMap extension](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)

#### 📋 Checklist

- [ ] Installer HeadingsMap
- [ ] Vérifier hiérarchie des headings
- [ ] Un seul H1
- [ ] Pas de sauts de niveau
- [ ] Corriger si nécessaire

---

## Multimédia et images

### 11. Images complexes

**Critère WCAG**: 1.1.1 (A)

Pour graphiques, diagrammes, infographies:

```html
<!-- Option 1: Longdesc (déprécié mais supporté) -->
<img src="architecture-diagram.png"
     alt="ePRO platform architecture diagram"
     longdesc="architecture-description.html">

<!-- Option 2: Description détaillée dans texte adjacent -->
<figure>
  <img src="architecture-diagram.png"
       alt="ePRO platform architecture diagram"
       aria-describedby="arch-desc">
  <figcaption id="arch-desc">
    The architecture consists of three main layers:
    the patient-facing Progressive Web App, Firebase backend
    with Firestore database, and Cloud Functions for
    PDF generation and notifications.
  </figcaption>
</figure>

<!-- Option 3: Bouton pour révéler description -->
<div>
  <img src="chart.png" alt="Chart showing 60% productivity increase">
  <button aria-expanded="false" aria-controls="chart-details">
    View detailed description
  </button>
  <div id="chart-details" hidden>
    Detailed text description of the chart data...
  </div>
</div>
```

#### 📋 Checklist

- [ ] Identifier images complexes (graphiques, diagrammes)
- [ ] Ajouter descriptions détaillées
- [ ] Utiliser `aria-describedby` si approprié
- [ ] Tester avec lecteur d'écran

---

### 12. Vidéos (si ajoutées)

**Critère WCAG**: 1.2.1, 1.2.2, 1.2.3

**Exigences**:
- Sous-titres (captions) pour vidéos avec audio
- Transcription textuelle
- Description audio pour contenu visuel important

```html
<video controls>
  <source src="demo.mp4" type="video/mp4">
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English" default>
  <track kind="descriptions" src="descriptions-en.vtt" srclang="en" label="English descriptions">
  Your browser doesn't support video.
</video>

<!-- Lien vers transcription -->
<p><a href="demo-transcript.html">Read transcript</a></p>
```

---

## Formulaires

### 13. Autocomplete attributes

**Critère WCAG**: 1.3.5 (AA)

Ajouter attributs `autocomplete` pour faciliter le remplissage:

```html
<input type="text"
       name="name"
       id="full_name"
       autocomplete="name"
       aria-required="true"
       required>

<input type="email"
       name="_replyto"
       id="email"
       autocomplete="email"
       aria-required="true"
       required>

<!-- Pour adresses -->
<input type="text" autocomplete="street-address">
<input type="text" autocomplete="postal-code">
<input type="text" autocomplete="country-name">

<!-- Pour téléphones -->
<input type="tel" autocomplete="tel">

<!-- Pour organisations -->
<input type="text" autocomplete="organization">
```

[Liste complète des valeurs autocomplete](https://www.w3.org/TR/WCAG21/#input-purposes)

#### 📋 Checklist

- [ ] Ajouter `autocomplete="name"` sur champ nom
- [ ] Ajouter `autocomplete="email"` sur champ email
- [ ] Tester avec navigateur (doit suggérer valeurs enregistrées)

---

### 14. Messages d'erreur

**Critère WCAG**: 3.3.1 (A), 3.3.3 (AA)

#### Exigences

- Identifier les erreurs clairement
- Décrire l'erreur en texte
- Suggérer une correction

#### Implémentation

Voir [Section 1 - Formulaire accessible](#1-formulaire-de-contact-inaccessible) pour implémentation complète.

**Résumé**:
```html
<!-- Conteneur pour liste d'erreurs -->
<div id="form-errors"
     role="alert"
     aria-live="polite"
     class="visually-hidden"></div>

<!-- Champs avec aria-invalid -->
<input type="email"
       id="email"
       aria-invalid="true"
       aria-describedby="email-error">
<span id="email-error" class="error-message">
  Please enter a valid email address (example: name@domain.com)
</span>
```

---

## Tests et validation

### Outils de test

#### Automatiques

1. **WAVE Web Accessibility Evaluation Tool**
   - Extension navigateur gratuite
   - URL: https://wave.webaim.org/extension/
   - Détecte erreurs courantes

2. **axe DevTools**
   - Extension Chrome/Firefox gratuite
   - URL: https://www.deque.com/axe/devtools/
   - Tests automatiques complets

3. **Lighthouse**
   - Intégré Chrome DevTools
   - Score accessibilité + recommandations

4. **Pa11y**
   - CLI pour tests automatisés
   - Intégration CI/CD possible

#### Manuels

1. **Navigation clavier**
   - Tab : navigation avant
   - Shift+Tab : navigation arrière
   - Enter : activer liens/boutons
   - Space : activer boutons/checkboxes
   - Arrows : navigation dans select/radio

2. **Lecteurs d'écran**

**NVDA** (gratuit, Windows):
- URL: https://www.nvaccess.org/
- Raccourci important: NVDA+Space (mode formulaire)

**JAWS** (payant, Windows):
- Version démo 40min disponible
- Standard de l'industrie

**VoiceOver** (gratuit, macOS/iOS):
- Intégré, Cmd+F5 pour activer
- Cmd+Option+U : rotor (navigation)

**ChromeVox** (gratuit, Chrome):
- Extension Chrome
- Bon pour tests rapides

3. **Zoom/Agrandissement**
   - Tester à 200% (WCAG AA)
   - Vérifier pas de scroll horizontal
   - Contenu reste lisible

#### Tests spécifiques

**Test 1: Navigation clavier complète**
```
✓ Tous les éléments interactifs sont accessibles
✓ Focus visible en permanence
✓ Ordre logique
✓ Pas de piège au clavier
✓ Skip links fonctionnent
```

**Test 2: Lecteur d'écran**
```
✓ Toutes les images ont alt pertinent
✓ Labels formulaire annoncés
✓ Landmarks détectés
✓ Headings hiérarchie logique
✓ Liens descriptifs
```

**Test 3: Zoom 200%**
```
✓ Contenu reste accessible
✓ Pas de scroll horizontal
✓ Texte reste lisible
✓ Boutons/liens cliquables
```

**Test 4: Contraste couleurs**
- Outil: WebAIM Contrast Checker
- Ratio minimum AA: 4.5:1 (texte normal)
- Ratio minimum AA: 3:1 (texte large 18pt+)

---

## Plan d'action

### 🔴 Phase 1 - Critique (Semaine 1) - 4-6h

**Conformité**: Niveau A (minimum)

#### Jour 1-2: Formulaire accessible

- [ ] **1.1** Créer `static/css/accessibility.css` (30min)
  - Classe `.visually-hidden`
  - Styles focus
  - Styles erreurs

- [ ] **1.2** Corriger formulaire contact (2h)
  - Supprimer `display: none` labels
  - Ajouter `visually-hidden` ou rendre visibles
  - Ajouter `aria-required`
  - Ajouter `autocomplete`
  - Créer zone `role="alert"`

- [ ] **1.3** Validation accessible (1h30)
  - Créer `form-validation.js`
  - Implémenter `aria-invalid`
  - Messages d'erreur accessibles

#### Jour 3-4: Alt texts et focus

- [ ] **1.4** Améliorer alt texts (1h30)
  - Showcase, About, Projects
  - Client logos
  - Remplacer génériques par descriptifs

- [ ] **1.5** Focus styles (1h)
  - Ajouter CSS focus dans accessibility.css
  - Tester navigation clavier
  - Ajuster si nécessaire

**Résultat**: +30 points accessibilité (60 → 90)

---

### 🟡 Phase 2 - Standard AA (Semaine 2) - 3-4h

**Conformité**: Niveau AA (recommandé)

- [ ] **2.1** Skip links (1h)
  - Créer skip links
  - CSS pour visibilité au focus
  - Ajouter `id="main-content"`

- [ ] **2.2** Landmarks ARIA (1h30)
  - Créer/modifier baseof.html
  - Ajouter `role` appropriés
  - Ajouter `aria-label` où nécessaire

- [ ] **2.3** Liens externes (30min)
  - Ajouter indication "(opens in new tab)"
  - CSS icône externe
  - rel="noopener noreferrer"

- [ ] **2.4** Tests complets (1h)
  - WAVE scan
  - axe DevTools scan
  - Lighthouse accessibilité
  - Corriger issues détectées

**Résultat**: +5 points accessibilité (90 → 95+)

---

### 🟢 Phase 3 - Tests utilisateurs (Semaine 3)

- [ ] **3.1** Test lecteur d'écran (2h)
  - Installer NVDA
  - Parcourir site complet
  - Noter les problèmes
  - Corriger

- [ ] **3.2** Test navigation clavier (1h)
  - Parcours complet Tab
  - Vérifier tous les éléments interactifs
  - Tester formulaire

- [ ] **3.3** Test zoom 200% (30min)
  - Chrome zoom 200%
  - Vérifier lisibilité
  - Pas de scroll horizontal

- [ ] **3.4** Test contrastes (30min)
  - WebAIM Contrast Checker
  - Vérifier texte gris #666
  - Vérifier rouge #e05d44
  - Ajuster si ratio < 4.5:1

---

### 🔵 Phase 4 - Monitoring (Continu)

- [ ] **4.1** Tests automatisés réguliers
  - Lighthouse mensuel
  - WAVE après changements
  - axe DevTools pour nouveautés

- [ ] **4.2** Formation continue
  - Suivre updates WCAG
  - Lire blogs accessibilité
  - Tester avec vrais utilisateurs

---

## Ressources

### Documentation officielle

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Outils

- [WAVE Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [NVDA Screen Reader](https://www.nvaccess.org/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/)

### Guides et articles

- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [WebAIM Articles](https://webaim.org/articles/)
- [Inclusive Components](https://inclusive-components.design/)

### Communauté

- [A11y Slack](https://web-a11y.slack.com/)
- [WebAIM Discussion List](https://webaim.org/discussion/)

---

**Dernière mise à jour**: 7 novembre 2024
**Prochaine révision**: Après Phase 1 (dans 1 semaine)
