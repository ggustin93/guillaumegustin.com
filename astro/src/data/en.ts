import type { HomepageData } from './types';

export const en = {
  head: {
    title: 'Guillaume Gustin - Solutions Architect & Software Engineer | Brussels',
    description:
      'Solutions architect and software engineer based in Brussels, with a background in biomedical engineering. I work with impact-driven organisations on healthcare platforms, public-sector web applications, and sustainable web design.',
  },

  nav: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ],

  showcase: {
    title: 'Solutions Architect',
    subtitle: '& Software Engineer',
    description:
      'Software engineer with roots in biomedical research, I build web applications for healthcare, the public sector, and impact-driven organisations. My current focus is GIS platforms and applied AI for urban mobility, alongside a commitment to sustainable digital practices through Pwablo.',
    location: 'Brussels, Belgium',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/guillaume-gustin/', icon: 'linkedin' as const, external: true },
      { label: 'GitHub', url: 'https://github.com/ggustin93', icon: 'github' as const, external: true },
      {
        label: 'Résumé / CV',
        url: 'https://pwablo.be/partners/guillaume-gustin/',
        icon: 'download' as const,
        primary: true,
        external: true,
      },
      { label: 'Contact', url: '#contact', icon: 'mail' as const, primary: true },
    ],
  },

  about: {
    title: 'Who am I?',
    contentHtml: `
      <p class="lead">
      A biomedical engineer by training (UCLouvain, 2016), I gradually moved from health research into software engineering. I began with academic research on remote patient monitoring, co-founded the medtech startup MedC2, then widened into digital transformation for non-profits and, today, public-sector work at Gate 16, building GIS platforms for Brussels Mobility and exploring applied AI. On the side, I run Pwablo, a sustainable digital studio.
      </p>`,
    focusTitle: 'Where I focus',
    focus: [
      { icon: 'cpu' as const, label: 'Responsible AI' },
      { icon: 'code' as const, label: 'Software Engineering' },
      { icon: 'bar-chart' as const, label: 'Functional Analysis' },
      { icon: 'leaf' as const, label: 'Web Eco-design' },
    ],
  },

  techStack: {
    description: 'Tech Stack',
  },

  education: {
    title: 'Education',
    items: [
      {
        school: 'MIT Global Startup Labs',
        year: '2018',
        degree: 'Entrepreneurship & Innovation Certificate',
      },
      {
        school: 'Catholic University of Louvain',
        year: '2017',
        degree: 'Innovation and Transmedia Project Development',
      },
      {
        school: 'Louvain School of Engineering',
        year: '2014-2016',
        degree: 'Master in Biomedical Engineering > Bioinformatics',
        badge: 'Cum Laude',
        noteHtml:
          'Master thesis: "<i>Diabetes management through artificial intelligence and gamification: Blood glucose prediction models and mHealth design considerations.</i>" <a href="https://dial.uclouvain.be/memoire/ucl/fr/object/thesis:8111" target="_blank" rel="noopener">(Read thesis)</a>',
      },
      {
        school: 'Louvain School of Engineering',
        year: '2010-2014',
        degree: 'Bachelor of Engineering - Biomedical and Computer Sciences',
      },
    ],
  },

  experience: {
    title: 'Experience',
    description:
      'A path across digital health, public services, and sustainable web, from research assistant to software engineer.',
    badges: [
      'Full-stack Software Engineering',
      'Sustainable Web Design',
      'Digital Health',
      'Public & Non-profit Sector',
      'Biomedical Engineering',
    ],
    linkedin: {
      text: 'Connect on LinkedIn',
      url: 'https://www.linkedin.com/in/guillaume-gustin/',
      icon: 'linkedin' as const,
    },
    resume: {
      text: 'Download Resume',
      url: 'https://pwablo.be/partners/guillaume-gustin/',
      icon: 'download' as const,
    },
    items: [
      {
        title: 'Functional Analyst & Software Engineer',
        company: 'Gate 16 · Brussels Mobility',
        duration: 'Oct 2025 - Current',
        logo: 'bm',
      },
      {
        title: 'Research Software Engineer',
        company: 'Vrije Universiteit Brussel · Ghostly+',
        duration: '2025 - 2026',
        logo: 'vub',
      },
      {
        title: 'Founder & Web Designer',
        company: 'Pwablo | Sustainable Web Agency',
        duration: 'Jan 2022 - Current',
        logo: 'pwablo',
      },
      {
        title: 'Digital Transformation Advisor',
        company: 'BRUXEO',
        duration: 'Nov 2022 - Oct 2024',
        logo: 'bruxeo',
      },
      {
        title: 'Co-founder & Lead developer',
        company: 'The Medical Cloud Company',
        duration: 'Feb 2019 - Jan 2021',
        logo: 'medc2',
      },
      {
        title: 'Research & Teaching Assistant',
        company: 'Catholic University of Louvain',
        duration: 'Jan 2017 - Jan 2019',
        logo: 'uclouvain',
      },
    ],
  },

  publications: {
    title: 'Research & contributions',
    items: [
      {
        title: 'Scientific Publication',
        organization: 'UCLouvain & SIPAIM Conference',
        year: '2017',
        descriptionHtml:
          'First author of <i>"Empowerment of diabetic patients through mHealth technologies and education: Development of a pilot self-management application"</i> presented at the 13th International Conference on Medical Information Processing and Analysis. Also contributed to developing the diabetes monitoring platform described in the research. (Cited 9 times)',
        link: {
          url: 'https://dial.uclouvain.be/pr/boreal/object/boreal%3A192456/datastream/PDF_01/view',
          text: 'Read paper',
        },
        link2: {
          url: 'https://scholar.google.fr/citations?view_op=view_citation&hl=fr&user=PaToxwcAAAAJ&citation_for_view=PaToxwcAAAAJ:u5HHmVD_uO8C',
          text: 'Google Scholar',
        },
      },
      {
        title: 'EU Grant Contribution',
        organization: 'DRAGON Project Consortium',
        year: '2020',
        descriptionHtml:
          "As co-founder of MedC2 (later acquired by <a href='https://www.comunicare.be' target='_blank' rel='noopener'>Comunicare</a>), contributed to writing the DRAGON European grant application focused on AI applications for COVID-19. The application successfully secured €860,000 in funding from the European Commission for MedC2.",
        link: {
          url: 'https://www.prnewswire.com/nl/persberichten/the-belgian-start-up-the-medical-cloud-company-medc2-supported-by-860-000-euros-from-the-european-commission-to-develop-tools-supporting-decision-making-for-citizens-and-doctors-in-the-covid-19-crisis-884780042.html',
          text: 'Press release',
        },
      },
    ],
  },

  portfolio: {
    title: 'Featured Works',
    clients: [
      { image: 'bruxeo', alt: 'BRUXEO' },
      { image: 'medc2', alt: 'MedC2' },
      { image: 'ucl', alt: 'UCLouvain' },
      { image: 'cusl', alt: 'Cliniques Saint-Luc' },
      { image: 'vub', alt: 'VUB' },
      { image: 'bm', alt: 'Brussels Mobility', noInvert: true },
    ],
    works: [
      {
        title: 'GHOSTLY+ Rehabilitation Dashboard',
        stack: ['React / TypeScript', 'FastAPI / Python', 'PostgreSQL / Supabase', 'NumPy / SciPy', 'Docker'],
        descriptionHtml:
          'A clinical-research dashboard for the <a href="https://rere.research.vub.be/ghostly-project" target="_blank" rel="noopener noreferrer">GHOSTLY+</a> serious-game rehabilitation project at the Vrije Universiteit Brussel. It turns electromyography (EMG) data from C3D motion-capture files into muscle-activity metrics, adherence scores and session analytics for therapists, with role-based access, pseudonymised data and audit logging. The trial\'s feasibility study was published in <a href="https://doi.org/10.2196/69400" target="_blank" rel="noopener noreferrer">JMIR Serious Games (2025)</a>. <a href="https://vimeo.com/1119476263" target="_blank" rel="noopener noreferrer">Watch the 2-min demo</a>.',
        image: 'ghostlyPerf',
        gallery: [
          { image: 'ghostlyEmg', alt: 'EMG signal analysis with contraction detection and MVC thresholds' },
          { image: 'ghostlySessions', alt: 'Session history: C3D file browser with advanced filters' },
        ],
        isEven: true,
        featured: true,
      },
      {
        title: 'ePRO Collection Platform',
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
          'Electronic patient-reported outcomes (ePRO) platform developed for the ImmunoSABR clinical trial. The mobile-first PWA includes a patient interface with push notifications, a clinical dashboard, and secure PDF report generation, designed to meet healthcare compliance standards.',
        image: 'immuno',
        isEven: false,
        featured: true,
      },
      {
        title: 'Patient Decision Aids',
        stack: ['Progressive Web App', 'Ionic 4', 'Angular 8', 'Firestore', 'Cloud Functions', 'Cloud Storage'],
        descriptionHtml:
          'A decision-aid application that helps cancer patients make informed treatment choices. It presents personalised medical information through interactive modules and guided reflection questions, generating PDF reports to support doctor-patient discussions. Developed as part of a <a href="https://clinicaltrials.gov/ct2/show/NCT04375566" target="_blank" rel="noopener noreferrer">registered clinical trial</a>.',
        image: 'ipda',
        isEven: true,
        featured: true,
      },
      {
        title: 'DEC!DE Design',
        stack: ['Figma'],
        descriptionHtml:
          'Volunteer UX/UI design contribution for the non-profit DEC!DE (2021), developed in collaboration with EPBL (Ensemble Biodiversité). The project proposed digital tools and cultural engagement formats to make ecological concepts more accessible to a broad public. A concept brief was submitted to an Innoviris call for projects, though the application was not selected for funding.',
        image: 'decide',
        isEven: false,
      },
      {
        title: 'Pwablo',
        stack: ['Sustainable Web Design', 'Astro', 'Figma', 'Eco-design', 'Jamstack'],
        descriptionHtml:
          '<a href="https://www.pwablo.be/" target="_blank" rel="noopener noreferrer">Pwablo</a> is a small sustainable web agency building lightweight, fast websites for impact-driven organisations, alongside workshops on the environmental footprint of the web.',
        image: 'pwablo',
        isEven: true,
      },
      {
        title: 'MyPatientCheck',
        stack: ['Progressive Web App', 'Angular 9', 'Ionic 5', 'Ionic Storage', 'Cloud Functions'],
        descriptionHtml:
          'First prototype developed during the COVID-19 pandemic to support healthcare professionals in triaging symptomatic patients. The application provides risk assessment tools and predictive model simulations to assist clinical decision-making in resource-constrained settings.',
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
          'A prototype built with B. Vander Stappen that helps music enthusiasts discover local events through mapping, real-time ratings, and filtering. The concept explored digital promotion tools for event organisers and venues.',
        image: 'wadaff',
        isEven: true,
      },
    ],
  },

  contact: {
    title: 'Get in touch',
    subtitle: 'Whether you have a project in mind or simply want to exchange ideas, I am always glad to hear from you.',
    form: {
      action: '/api/contact',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Tell me about your project...',
      submitText: 'Send Message',
    },
    scheduleCallText: 'Schedule a call',
  },

  footer: {
    copyright: '© Guillaume Gustin.',
    carbonText: 'Site écoresponsable',
    nav: [
      { label: 'HOME', href: '/' },
      { label: 'ABOUT', href: '#about' },
      { label: 'PORTFOLIO', href: '#portfolio' },
      { label: 'CONTACT', href: '#contact' },
    ],
  },
} satisfies HomepageData;
