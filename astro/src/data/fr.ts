import type { HomepageData } from './types';

export const fr = {
  head: {
    title: 'Guillaume Gustin - Architecte de solutions & Ingénieur logiciel | Bruxelles',
    description:
      "Architecte de solutions et ingénieur logiciel basé à Bruxelles, de formation ingénieur biomédical. J'aide les organisations à impact à concevoir des solutions numériques efficaces et durables — de la santé aux plateformes du secteur public.",
  },

  nav: [
    { label: 'HOME', href: '/fr' },
    { label: 'À PROPOS', href: '#about' },
    { label: 'EXPÉRIENCE', href: '#experience' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ],

  showcase: {
    title: 'Architecte de solutions',
    subtitle: '& Ingénieur logiciel',
    description:
      "Ingénieur logiciel de formation biomédicale — je développe des applications web pour la santé, la mobilité urbaine et les organisations à impact. Actif à Bruxelles sur des plateformes GIS, de la R&D en IA et du design web durable.",
    location: 'Bruxelles, Belgique',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/guillaume-gustin/', icon: 'linkedin' as const, external: true },
      { label: 'GitHub', url: 'https://github.com/ggustin93', icon: 'github' as const, external: true },
      {
        label: 'CV',
        url: 'https://pwablo.be/partners/guillaume-gustin/',
        icon: 'download' as const,
        primary: true,
        external: true,
      },
      { label: 'Email', url: 'mailto:guillaume@pwablo.be', icon: 'mail' as const, primary: true },
    ],
  },

  about: {
    title: 'Qui suis-je ?',
    contentHtml: `
      <p class="lead">
      Ingénieur biomédical de formation (UCLouvain, 2016), je me suis progressivement tourné de la recherche en santé vers l'ingénierie logicielle. J'ai débuté par la recherche académique sur le suivi à distance des patients, cofondé la startup medtech MedC2, puis élargi vers la transformation numérique d'associations et, aujourd'hui, le secteur public chez Gate 16 — où je développe des plateformes GIS pour Bruxelles Mobilité et j'explore l'IA appliquée. En parallèle, je fais tourner Pwablo, une petite agence pour un web plus durable.
      </p>`,
    focusTitle: 'Mes domaines',
    focus: [
      'Plateformes de santé numérique et outils pour les patients',
      'Applications web GIS et secteur public',
      'R&D appliquée aux systèmes RAG et à l\'IA agentique',
      'Design web durable et sobre',
    ],
  },

  techStack: {
    description: 'Stack technique',
  },

  education: {
    title: 'Formation',
    items: [
      {
        school: 'MIT Global Startup Labs',
        year: '2018',
        degree: 'Certificat en Entrepreneuriat et Innovation',
      },
      {
        school: 'Catholic University of Louvain',
        year: '2017',
        degree: 'Développement de Projets Innovants et Transmédias',
      },
      {
        school: 'Louvain School of Engineering',
        year: '2014-2016',
        degree: 'Master en Ingénierie Biomédicale > Bio-informatique',
        badge: 'Cum Laude',
        noteHtml:
          'Mémoire de master : "<i>Gestion du diabète par intelligence artificielle et gamification : Modèles de prédiction de la glycémie et considérations de conception mHealth.</i>" <a href="https://dial.uclouvain.be/memoire/ucl/fr/object/thesis:8111" target="_blank" rel="noopener">(Lire le mémoire)</a>',
      },
      {
        school: 'Louvain School of Engineering',
        year: '2010-2014',
        degree: 'Bachelier en Ingénierie - Sciences Biomédicales et Informatiques',
      },
    ],
  },

  experience: {
    title: 'Expérience',
    description:
      "Un parcours entre santé numérique, services publics et web durable — d'assistant de recherche à ingénieur logiciel.",
    badges: [
      'Développement Full-stack',
      'Design Web Durable',
      'Santé Numérique',
      'Secteur Public & Associatif',
      'Ingénierie Biomédicale',
    ],
    linkedin: {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/guillaume-gustin/',
      icon: 'linkedin' as const,
    },
    resume: {
      text: 'CV',
      url: 'https://pwablo.be/partners/guillaume-gustin/',
      icon: 'download' as const,
    },
    items: [
      {
        title: 'Analyste Fonctionnel & Ingénieur Logiciel',
        company: 'Gate 16 · Bruxelles Mobilité',
        duration: 'Oct 2025 - Actuel',
        logo: 'gate16',
      },
      {
        title: 'Chargé de Recherche en Ingénierie Logicielle',
        company: 'Vrije Universiteit Brussel · Ghostly+',
        duration: '2025 - 2026',
        logo: 'vub',
      },
      {
        title: 'Fondateur & Web Designer',
        company: 'Pwablo | Sustainable Web Agency',
        duration: 'Jan 2022 - Actuel',
        logo: 'pwablo',
      },
      {
        title: 'Conseiller en Transformation Numérique',
        company: 'BRUXEO',
        duration: 'Nov 2022 - Oct 2024',
        logo: 'bruxeo',
      },
      {
        title: 'Cofondateur & Développeur Principal',
        company: 'The Medical Cloud Company',
        duration: 'Fév 2019 - Jan 2021',
        logo: 'medc2',
      },
      {
        title: "Assistant de Recherche & d'Enseignement",
        company: 'Catholic University of Louvain',
        duration: 'Jan 2017 - Jan 2019',
        logo: 'uclouvain',
      },
    ],
  },

  publications: {
    title: 'Recherche et contributions',
    items: [
      {
        title: 'Publication scientifique',
        organization: 'UCLouvain & SIPAIM Conference',
        year: '2017',
        descriptionHtml:
          'Premier auteur de <i>"Empowerment of diabetic patients through mHealth technologies and education: Development of a pilot self-management application"</i> présenté à la 13e Conférence Internationale sur le Traitement et l\'Analyse de l\'Information Médicale. A également contribué au développement de la plateforme de suivi du diabète décrite dans la recherche. (Cité 9 fois)',
        link: {
          url: 'https://dial.uclouvain.be/pr/boreal/object/boreal%3A192456/datastream/PDF_01/view',
          text: "Lire l'article",
        },
        link2: {
          url: 'https://scholar.google.fr/citations?view_op=view_citation&hl=fr&user=PaToxwcAAAAJ&citation_for_view=PaToxwcAAAAJ:u5HHmVD_uO8C',
          text: 'Google Scholar',
        },
      },
      {
        title: 'Contribution à un Financement Européen',
        organization: 'DRAGON Project Consortium',
        year: '2020',
        descriptionHtml:
          "En tant que cofondateur de MedC2 (acquise par la suite par <a href='https://www.comunicare.be' target='_blank' rel='noopener'>Comunicare</a>), a contribué à la rédaction de la demande de subvention européenne DRAGON axée sur les applications d'IA pour la COVID-19. La candidature a permis d'obtenir 860 000 € de financement de la Commission européenne pour MedC2.",
        link: {
          url: 'https://www.prnewswire.com/nl/persberichten/the-belgian-start-up-the-medical-cloud-company-medc2-supported-by-860-000-euros-from-the-european-commission-to-develop-tools-supporting-decision-making-for-citizens-and-doctors-in-the-covid-19-crisis-884780042.html',
          text: 'Communiqué de presse',
        },
      },
    ],
  },

  portfolio: {
    title: 'Travaux Sélectionnés',
    clients: [
      { image: 'bruxeo', alt: 'BRUXEO' },
      { image: 'decide', alt: 'DEC!DE' },
      { image: 'medc2', alt: 'MedC2' },
      { image: 'dlab', alt: 'Digital Lab' },
      { image: 'ucl', alt: 'UCL' },
      { image: 'cusl', alt: 'CUSL' },
    ],
    works: [
      {
        title: 'Tableau de bord GHOSTLY+',
        stack: ['React / TypeScript', 'FastAPI / Python', 'PostgreSQL / Supabase', 'NumPy / SciPy', 'Docker'],
        descriptionHtml:
          'Tableau de bord clinique de recherche pour le projet de rééducation par jeu sérieux <a href="https://rere.research.vub.be/ghostly-project" target="_blank" rel="noopener noreferrer">GHOSTLY+</a> de la Vrije Universiteit Brussel. Il transforme les données d\'électromyographie (EMG) issues de fichiers C3D en mesures d\'activité musculaire, scores d\'adhérence et analyses de séance pour les thérapeutes — avec accès par rôles, données pseudonymisées et journalisation d\'audit. L\'étude de faisabilité de l\'essai a été publiée dans <a href="https://doi.org/10.2196/69400" target="_blank" rel="noopener noreferrer">JMIR Serious Games (2025)</a>. <a href="https://vimeo.com/1119476263" target="_blank" rel="noopener noreferrer">Voir la démo (2 min)</a>.',
        image: 'ghostly',
        isEven: true,
        featured: true,
      },
      {
        title: 'Plateforme de Collecte ePRO',
        stack: [
          'Progressive Web App',
          'Ionic 4',
          'Angular 8',
          'GCP Authentication',
          'Firestore',
          'Cloud Functions',
          'Cloud Messaging',
          'Cloud Storage',
        ],
        descriptionHtml:
          "Plateforme de résultats rapportés par les patients (ePRO) développée pour l'essai clinique ImmunoSABR. Cette PWA mobile-first comprend une interface patient avec notifications push, un tableau de bord clinique et une génération sécurisée de rapports PDF — conçue pour répondre aux normes de conformité du secteur de la santé.",
        image: 'immuno',
        isEven: false,
        featured: true,
      },
      {
        title: 'Aides à la Décision Patient',
        stack: ['Progressive Web App', 'Ionic 4', 'Angular 8', 'Firestore', 'Cloud Functions', 'Cloud Storage'],
        descriptionHtml:
          "Une application d'aide à la décision qui accompagne les patients atteints de cancer dans leurs choix de traitement. Elle présente des informations médicales personnalisées via des modules interactifs et des questions de réflexion guidées, générant des rapports PDF pour soutenir les échanges médecin-patient. Développée dans le cadre d'un <a href=\"https://clinicaltrials.gov/ct2/show/NCT04375566\" target=\"_blank\" rel=\"noopener noreferrer\">essai clinique enregistré</a>.",
        image: 'ipda',
        isEven: true,
        featured: true,
      },
      {
        title: 'DEC!DE Design',
        stack: ['Figma'],
        descriptionHtml:
          "Contribution bénévole en UX/UI pour l'association DEC!DE (2021), menée en collaboration avec le mouvement EPBL (Ensemble Biodiversité). Le projet proposait des outils numériques et des formats d'engagement culturel pour rendre les concepts écologiques plus accessibles au grand public. Un <a href=\"https://docs.google.com/presentation/d/1Op95pkfVlUjElU0VGjlVz5bk4xikbmNrjFCbzP92Ce8/edit?usp=sharing\" target=\"_blank\" rel=\"noopener noreferrer\">dossier conceptuel</a> a été soumis à un appel à projets Innoviris, sans avoir été retenu.",
        image: 'decide',
        isEven: false,
      },
      {
        title: 'Pwablo',
        stack: ['Web Durable', 'Astro', 'Figma', 'Éco-conception', 'Jamstack'],
        descriptionHtml:
          "<a href=\"https://www.pwablo.be/\" target=\"_blank\" rel=\"noopener noreferrer\">Pwablo</a> est une petite agence web durable qui crée des expériences numériques légères et performantes pour des organisations à impact, en parallèle d'ateliers sur l'empreinte environnementale du web.",
        image: 'pwablo',
        isEven: true,
      },
      {
        title: 'MyPatientCheck',
        stack: ['Progressive Web App', 'Angular 9', 'Ionic 5', 'Ionic Storage', 'Cloud Functions'],
        descriptionHtml:
          "Premier prototype développé pendant la pandémie de COVID-19 pour accompagner les professionnels de santé dans le triage des patients symptomatiques. L'application fournit des outils d'évaluation des risques et des simulations de modèles prédictifs pour aider à la prise de décision clinique dans des contextes à ressources limitées.",
        image: 'mypc',
        isEven: false,
      },
      {
        title: 'Wadaff',
        stack: [
          'Google Maps API',
          'Angular 8',
          'Ionic 4',
          'Firestore',
          'Progressive Web App',
          'Gitlab CD/CI',
          'Facebook API',
        ],
        descriptionHtml:
          "Un prototype développé avec B. Vander Stappen qui aide les passionnés de musique à découvrir des événements locaux grâce à la cartographie, aux évaluations en temps réel et au filtrage. Le concept explorait les outils de promotion numérique pour les organisateurs d'événements et les lieux de spectacle.",
        image: 'wadaff',
        isEven: true,
      },
    ],
  },

  contact: {
    title: 'Me contacter',
    subtitle: "Que vous ayez un projet en tête ou simplement envie d'échanger, c'est toujours un plaisir d'avoir de vos nouvelles.",
    form: {
      action: '/api/contact',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Votre Email',
      messagePlaceholder: 'Parlez-moi de votre projet...',
      submitText: 'Envoyer le message',
    },
    scheduleCallText: 'Planifier un appel',
  },

  footer: {
    copyright: '© Guillaume Gustin.',
    carbonText: 'Site écoresponsable',
    nav: [
      { label: 'HOME', href: '/fr' },
      { label: 'À PROPOS', href: '#about' },
      { label: 'PORTFOLIO', href: '#portfolio' },
      { label: 'CONTACT', href: '#contact' },
    ],
  },
} satisfies HomepageData;
