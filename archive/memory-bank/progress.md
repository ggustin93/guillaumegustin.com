# Progress

## Done
- 2026-06-23 — Pwablo portfolio : screenshot **live de pwablo.be** (nouveau design vert « Studio numérique responsable ») → `works/pwablo_live.webp` (1400px, 48KB), remplace le vieux mockup Webflow ; tag « Webflow » → **« Astro »** (EN+FR). + **Cartes de grille expandables** : bouton « Lire plus / Réduire » (i18n `readMore`/`readLess`), n'apparaît que si le texte `line-clamp:3` déborde (détection JS dans `main.ts`), toggle `.is-expanded` retire le clamp. `astro check` 0 err, build OK, vérifié.
- 2026-06-23 — Logo header : **revenu à l'image script d'origine** (`logoImage` = `assets/img/general/logo_ggustin.webp` — « Guillaume » rouge + « Gustin » script manuscrit) via `<Image height={56}>`. (Tentative intermédiaire « trait rouge SVG » rejetée par l'utilisateur — « moche ».) Tailles responsives + réduction sur scroll. Vérifié desktop/scrollé/mobile. NB : « laptop/stock » du thème Hugo (`showcase.webp`) écarté volontairement (stock générique Raditian, fond rouge concurrent, anti Swiss-minimal).
- 2026-06-23 — Portfolio refondu en 2 niveaux (décision design déléguée) : **3 cas phares** (GHOSTLY+, ePRO, Patient Decision Aids — flag `featured: true` sur `WorkItem`) en lignes éditoriales numérotées 01/02/03, images **encadrées** (panneau `--color-card-bg` + hairline, `object-fit: contain`) — **clip-paths en biais supprimés** (alignement Swiss-minimal / dé-ornementation). Les 4 autres (DEC!DE, Pwablo, MyPatientCheck, Wadaff) en **grille compacte** 2 col desktop / 1 col mobile : vignette sur panneau teinté, desc `line-clamp:3`, tags plafonnés à 3 + compteur, hover lift. Lightbox réutilise `.img-zoom-wrapper` (0 changement JS). Fix : image DEC!DE `decide-logo` → `decide` (vrai mockup 3-écrans). Label i18n `moreWorksLabel` (EN « More projects » / FR « Autres projets »). `astro check` 0 err, build OK, screenshots desktop+grille+mobile validés. Reste : trim acté à 3 featured — possibilité future de réduire encore la grille.
- 2026-06-23 — Portfolio rajeuni : **GHOSTLY+ Rehabilitation Dashboard** ajouté en tête des Featured Works (EN+FR). Source légitime = repo public perso `ggustin93/emg-c3d-analyzer` (open-source) ; visuel = `screenshot-v3-2.png` (données démo, 0 donnée patient) → `src/assets/img/works/ghostly_dashboard.webp` (1400px). Copy citée : essai = JMIR Serious Games 2025 (doi 10.2196/69400, 15 patients gériatriques 84.5 ans, EMG+BFR). Lien démo Vimeo (vimeo.com/1119476263) en inline — choix volontaire de NE PAS embed l'iframe (poids/cookies tiers vs positionnement écoresponsable/privacy). Expérience corrigée : Gate-16 (Functional Analyst & SE · Bxl-Mobilité · Oct 2025) + Ghostly+ (VUB · 2025-2026). Alternance `isEven` rééquilibrée (7 works). `astro check` 0 err, build OK, screenshot validé. Légal : Bruxelles-Mobilité écarté du portfolio (IP/confidentialité marché public) — textuel uniquement ; Ghostly+ OK car déjà public.
- 2026-06-23 — Contenu source CV consolidé depuis pwablo.be → `source-content-pwablo-cv.md` (référence canonique pour réécrire bio/expérience/projets/stack). Décision de positionnement : site perso = CV augmenté + vitrine ; services vendus via Pwablo (lien sortant, **pas** d'onglet Services).
- 2026-06-14 — Refonte éditoriale « Swiss minimal » + hero link-hub (Astro), branche `redesign/editorial-link-hub`.
  - Design tokens (`global.css`) : accent unique `#d6452c` (fin des 2 rouges) + `--color-accent-strong #b5371f` (texte sur blanc, AA) + `--color-accent-tint` ; échelle typo fluide (`--text-display/h2/label`), `--font-mono` système, hairlines `#e6e6e6`, `.section-label`, `.container-narrow`
  - Hero = link-hub éditorial (`Showcase.astro`) : portrait LCP (eager + fetchpriority, alt descriptif), nom display léger, 7 liens numérotés en rangées hairline (modèle `HeroLink[]` dans `types.ts`, données consolidées dans `en/fr.ts`) ; icônes `github`/`scholar`/`arrow-up-right` ajoutées
  - Sections : `SectionLabel.astro` (« 01 / ABOUT »), IA réordonnée (About→Experience→Works→Publications→Education→Stack→Contact) dans `Homepage.astro` ; dé-ornementation (suppr. brutalist cards Publications, skew Education, hard-shadows About/Contact, pills rouges Experience) ; TechStack dark panel → bande logos claire
  - SEO éditorial : `ProfilePage` + Person enrichie (sameAs GitHub/Pwablo, address, knowsAbout GEO, hasOccupation) + `ScholarlyArticle` SIPAIM dans `JsonLd.astro` ; `public/llms.txt` créé ; mask-icon → accent
  - Vérifié : `astro check` 0 erreur, build OK, **0 violation axe (EN+FR)** via `tests/a11y.mjs` (`npm run test:a11y`), screenshots desktop/mobile OK. Contraste : accent-as-text passé en `accent-strong` (#d6452c seul = 4.42:1 < AA)
  - Reste : asset OG 1200×630 à générer (réf. avatar conservée en attendant) ; confirmer URL GitHub (`ggustin93` déduit du repo)
- 2026-06-12 — Migration Hugo → Astro 5 implémentée dans `astro/` (Hugo intact à la racine).
  - Astro 5.18 + Tailwind 4 (@theme tokens) + @astrojs/sitemap + sharp
  - 3 pages : `/` (EN), `/fr`, `404` ; contenu typé `src/data/{en,fr}.ts` (parité forcée par interface TS)
  - SEO parité avec Hugo : canonical, hreflang trio, OG (fr_BE/en_US), Twitter, JSON-LD Person+WebSite, sitemap i18n, robots.txt
  - Images : Astro `<Picture>` AVIF + fallback WebP (sources webp/avif legacy lues par sharp ; `fallbackFormat="webp"` obligatoire sinon PNG énormes)
  - JS client unique ~2 KB (sticky header, menu mobile, scroll-reveal IO, lightbox `<dialog>`) ; lozad + FontFaceObserver supprimés
  - Vérifié : `astro check` 0 erreur, build OK, 0 violation axe (EN+FR), CLS 0, comparaison visuelle Playwright vs prod section par section, no-JS et reduced-motion OK

## Next
- Déployer sur un Firebase preview channel (`firebase hosting:channel:deploy astro-preview`) et run Lighthouse sur le CDN
- Test réel de soumission Formspree depuis le channel
- Bascule prod : `firebase.json` public → `astro/dist` + header `/_astro/**` immutable 1 an
- Cleanup Hugo (commit séparé après bascule)

## Blockers
- Lighthouse local impossible dans la sandbox (NO_FCP systématique) — à exécuter sur le preview channel

## Decisions
- 2026-06-23 — Format du site (positionnement) :
  - Home = éditoriale (refonte `redesign/editorial-link-hub` conservée), PAS un CV brut — alimentée par le contenu de `source-content-pwablo-cv.md`.
  - CV complet exhaustif = lien sortant vers pwablo.be/partners/guillaume-gustin (statu quo, bouton « Résumé / CV »). Pas de page `/cv`, pas de PDF.
  - Services = via Pwablo (encart + lien), pas d'onglet Services.
  - À intégrer au site (absents aujourd'hui) : Gate-16 × Bxl-Mobilité (rôle actuel), Ghostly+/VUB, Charte IA Responsable pour ASBL.
- Sous-dossier `astro/` (coexistence avec Hugo jusqu'à validation) — choix utilisateur
- Tailwind CSS 4 — choix utilisateur (remplace le CSS Bootstrap résiduel)
- Données en modules TS plutôt que Content Collections (2 fichiers, parité EN/FR vérifiée à la compilation)
- Umami sans SRI (script cloud auto-mis à jour, hash figé casserait l'analytics)
- URLs sans trailing slash (`/fr`) — aligné sur Firebase `trailingSlash:false`
