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
      title: 'Système ERP / CRM',
      description: "Conception et développement d'une solution complète de gestion de la relation client, incluant l'architecture de base de données.",
      context: "Développement d'une application de gestion client modernisée suite à la migration d'une ancienne base PHP vers une stack moderne.",
      goal: "Mettre en place un CRUD complet avec authentification sécurisée et un tableau de bord analytique.",
      link: 'https://projet-crm-theta.vercel.app/',
      githubLink: 'https://github.com/aminuw',
      image: '/fichiers/crm.png',
      screens: ['/fichiers/crm.png', '/fichiers/crm.png'],
      techs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    },
    {
      id: 'Candi-Pilot',
      title: 'Candi-Pilot',
      description: 'Plateforme de mise en relation entre les étudiants et les entreprises pour des stages et alternances.',
      context: "Besoin de centraliser et de simplifier les démarches de recherche de stage et d'alternance pour les étudiants.",
      goal: "Faciliter le recrutement en intégrant une API d'Intelligence Artificielle pour optimiser les correspondances entre les profils.",
      link: 'https://candi-pilot.vercel.app/',
      githubLink: 'https://github.com/aminuw',
      image: '/fichiers/candipilot.png',
      screens: ['/fichiers/candipilot.png', '/fichiers/candipilot.png'],
      techs: ['TypeScript', 'JavaScript', 'HTML/CSS', 'SQL', 'API AI (GROK)'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Portfolio personnel au design minimaliste et animations ultra-fluides, optimisé pour la performance.',
      context: "Refonte de mon identité numérique pour mettre en valeur mes compétences et mon évolution technique.",
      goal: "Concevoir une expérience utilisateur immersive, performante et esthétiquement raffinée.",
      link: 'https://github.com/aminuw/new-portfolio',
      githubLink: 'https://github.com/aminuw/new-portfolio',
      image: '/fichiers/portfolio.png',
      screens: ['/fichiers/portfolio.png', '/fichiers/portfolio.png'],
      techs: ['TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'],
    },
    {
      id: 'gestion-mvc',
      title: 'Gestionnaire de Catalogue MVC',
      description: 'Application web de gestion de catalogue, panier et commandes avec espace admin.',
      context: "Création d'une plateforme de type e-commerce robuste pour la gestion de produits avec une architecture Modèle-Vue-Contrôleur.",
      goal: "Assurer la sécurité des transactions, l'authentification des administrateurs et la couverture par tests unitaires.",
      link: 'https://github.com/aminuw/GsbParam',
      githubLink: 'https://github.com/aminuw/GsbParam',
      image: '',
      screens: [],
      techs: ['PHP', 'MySQL', 'PDO', 'GitHub', 'CI/CD'],
    }
  ],
  en: [
    {
      id: 'crm',
      title: 'ERP / CRM System',
      description: 'Design and development of a complete client relationship management solution, including database architecture.',
      context: "Development of a modernized client management application following the migration from an old PHP database to a modern stack.",
      goal: "Implement a complete CRUD with secure authentication and an analytical dashboard.",
      link: 'https://projet-crm-theta.vercel.app/',
      githubLink: 'https://github.com/aminuw',
      image: '/fichiers/crm.png',
      screens: ['/fichiers/crm.png', '/fichiers/crm.png'],
      techs: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    },
    {
      id: 'Candi-Pilot',
      title: 'Candi-Pilot',
      description: 'Platform connecting students and companies for internships and work-study positions.',
      context: "Need to centralize and simplify the search process for internships and work-study programs for students.",
      goal: "Facilitate recruitment by integrating an Artificial Intelligence API to optimize matching between profiles.",
      link: 'https://candi-pilot.vercel.app/',
      githubLink: 'https://github.com/aminuw',
      image: '/fichiers/candipilot.png',
      screens: ['/fichiers/candipilot.png', '/fichiers/candipilot.png'],
      techs: ['TypeScript', 'JavaScript', 'HTML/CSS', 'SQL', 'AI API (GROK)'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Personal portfolio with minimalist design and ultra-smooth animations, optimized for performance.',
      context: "Redesign of my digital identity to highlight my skills and technical evolution.",
      goal: "Design an immersive, performant, and aesthetically refined user experience.",
      link: 'https://github.com/aminuw/new-portfolio',
      githubLink: 'https://github.com/aminuw/new-portfolio',
      image: '/fichiers/portfolio.png',
      screens: ['/fichiers/portfolio.png', '/fichiers/portfolio.png'],
      techs: ['TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'],
    },
    {
      id: 'gestion-mvc',
      title: 'MVC Catalog Manager',
      description: 'Web application for catalog management, shopping cart, and orders with admin space.',
      context: "Creation of a robust e-commerce type platform for product management using a Model-View-Controller architecture.",
      goal: "Ensure transaction security, administrator authentication, and unit test coverage.",
      link: 'https://github.com/aminuw/GsbParam',
      githubLink: 'https://github.com/aminuw/GsbParam',
      image: '',
      screens: [],
      techs: ['PHP', 'MySQL', 'PDO', 'GitHub', 'CI/CD'],
    }
  ]
};

export const projects = projectsData.fr;
export const getProjects = (lang: 'fr' | 'en') => projectsData[lang];
