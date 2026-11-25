export type Project = {
  id: string;
  title: string;
  description: string;
  context: string;
  goal: string;
  link: string;
  githubLink: string;
  image: string;
  screens: string[];
  techs: string[];
};

const projectsData: Record<'fr' | 'en', Project[]> = {
  fr: [
    {
      id: 'crm',
      title: 'CRM — gestion de clients',
      description: 'Application de gestion de clients avec connexion utilisateur, fiches clients et tableau de bord.',
      context: 'Reprise d’une première version PHP dans une application Next.js et TypeScript avec Supabase.',
      goal: 'Permettre la connexion, la création et la modification de fiches clients, et consulter un tableau de bord.',
      link: 'https://projet-crm-theta.vercel.app/',
      githubLink: 'https://github.com/aminuw/projetCRM',
      image: '/fichiers/crm.png',
      screens: ['/fichiers/crm.png'],
      techs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    },
    {
      id: 'Candi-Pilot',
      title: 'Candi-Pilot — recherche d’alternance',
      description: 'Outil Python pour collecter et filtrer des offres, analyser leur pertinence et préparer mes candidatures.',
      context: 'J’ai créé un outil personnel pour organiser ma recherche d’alternance et éviter de traiter plusieurs fois la même offre.',
      goal: 'Rassembler des offres, les comparer à mon profil avec Groq et préparer des lettres et brouillons Gmail relus avant envoi.',
      link: '',
      githubLink: 'https://github.com/aminuw/Candi-Pilot',
      image: '',
      screens: [],
      techs: ['Python', 'Streamlit', 'Groq', 'API REST'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Portfolio personnel en Next.js présentant mes projets, compétences et expériences.',
      context: "Refonte de mon identité numérique pour mettre en valeur mes compétences et mon évolution technique.",
      goal: 'Présenter des réalisations vérifiables et permettre à un recruteur de me contacter facilement.',
      link: 'https://amine-agnaou.vercel.app',
      githubLink: 'https://github.com/aminuw/new-portfolio',
      image: '/fichiers/portfolio.png',
      screens: ['/fichiers/portfolio.png'],
      techs: ['TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'],
    },
    {
      id: 'gestion-mvc',
      title: 'Gestionnaire de Catalogue MVC',
      description: 'Application web de gestion de catalogue, panier et commandes avec espace admin.',
      context: "Création d'une plateforme de type e-commerce robuste pour la gestion de produits avec une architecture Modèle-Vue-Contrôleur.",
      goal: 'Gérer le catalogue, le panier et les commandes avec une architecture MVC et une base MySQL.',
      link: '',
      githubLink: 'https://github.com/aminuw/GsbParam',
      image: '',
      screens: [],
      techs: ['PHP', 'MySQL', 'PDO', 'MVC'],
    }
  ],
  en: [
    {
      id: 'crm',
      title: 'CRM — client management',
      description: 'Client management application with sign-in, client records and a dashboard.',
      context: 'Rebuilt an earlier PHP version with Next.js, TypeScript and Supabase.',
      goal: 'Support sign-in, creation and editing of client records, and a dashboard.',
      link: 'https://projet-crm-theta.vercel.app/',
      githubLink: 'https://github.com/aminuw/projetCRM',
      image: '/fichiers/crm.png',
      screens: ['/fichiers/crm.png'],
      techs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    },
    {
      id: 'Candi-Pilot',
      title: 'Candi-Pilot — apprenticeship search',
      description: 'Python tool to collect and filter job postings, assess their relevance and prepare applications.',
      context: 'I built a personal tool to organize my apprenticeship search and avoid processing the same posting twice.',
      goal: 'Gather postings, compare them with my profile using Groq and prepare letters and Gmail drafts for review before sending.',
      link: '',
      githubLink: 'https://github.com/aminuw/Candi-Pilot',
      image: '',
      screens: [],
      techs: ['Python', 'Streamlit', 'Groq', 'REST APIs'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Personal Next.js portfolio presenting my projects, skills and experience.',
      context: "Redesign of my digital identity to highlight my skills and technical evolution.",
      goal: 'Show verifiable work and make it easy for recruiters to get in touch.',
      link: 'https://amine-agnaou.vercel.app',
      githubLink: 'https://github.com/aminuw/new-portfolio',
      image: '/fichiers/portfolio.png',
      screens: ['/fichiers/portfolio.png'],
      techs: ['TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'],
    },
    {
      id: 'gestion-mvc',
      title: 'MVC Catalog Manager',
      description: 'Web application for catalog management, shopping cart, and orders with admin space.',
      context: "Creation of a robust e-commerce type platform for product management using a Model-View-Controller architecture.",
      goal: 'Handle the catalog, cart and orders with an MVC architecture and a MySQL database.',
      link: '',
      githubLink: 'https://github.com/aminuw/GsbParam',
      image: '',
      screens: [],
      techs: ['PHP', 'MySQL', 'PDO', 'MVC'],
    }
  ]
};

export const projects = projectsData.fr;
export const getProjects = (lang: 'fr' | 'en') => projectsData[lang];
