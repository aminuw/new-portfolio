const projectsData = {
  fr: [
    {
      id: 'crm',
      title: 'Système ERP / CRM',
      description: "Conception et développement d'une solution complète de gestion de la relation client, incluant l'architecture de base de données.",
      link: 'https://projet-crm-theta.vercel.app/',
      image: '/images/projects/crm.jpg',
      techs: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    },
    {
      id: 'factures',
      title: 'Gestionnaire de Factures',
      description: 'Application full-stack de gestion de facturation avec persistance des données et stockage local.',
      link: 'https://projet-facture.vercel.app/',
      image: '/images/projects/factures.jpg',
      techs: ['PHP', 'SQL', 'Interface Native'],
    },
    {
      id: 'Candi-Pilot',
      title: 'Candi-Pilot',
      description: 'Plateforme de mise en relation entre les étudiants et les entreprises pour des stages et alternances.',
      link: 'https://candi-pilot.vercel.app/',
      image: '/images/projects/candi-pilot.jpg',
      techs: ['TypeScript', 'JavaScript', 'HTML/CSS', 'SQL', 'API AI (GROK)'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Portfolio personnel au design minimaliste et animations ultra-fluides, optimisé pour la performance.',
      link: 'https://github.com/aminuw/new-portfolio',
      image: '/images/projects/portfolio.jpg',
      techs: ['TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Framer Motion'],
    }
  ],
  en: [
    {
      id: 'crm',
      title: 'ERP / CRM System',
      description: 'Design and development of a complete client relationship management solution, including database architecture.',
      link: 'https://projet-crm-theta.vercel.app/',
      image: '/images/projects/crm.jpg',
      techs: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    },
    {
      id: 'factures',
      title: 'Invoice Manager',
      description: 'Full-stack invoicing application with data persistence and local storage.',
      link: 'https://projet-facture.vercel.app/',
      image: '/images/projects/factures.jpg',
      techs: ['PHP', 'SQL', 'Native Interface'],
    },
    {
      id: 'Candi-Pilot',
      title: 'Candi-Pilot',
      description: 'Platform connecting students and companies for internships and work-study positions.',
      link: 'https://candi-pilot.vercel.app/',
      image: '/images/projects/candi-pilot.jpg',
      techs: ['TypeScript', 'JavaScript', 'HTML/CSS', 'SQL', 'AI API (GROK)'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Personal portfolio with minimalist design and ultra-smooth animations, optimized for performance.',
      link: 'https://github.com/aminuw/new-portfolio',
      image: '/images/projects/portfolio.jpg',
      techs: ['TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Framer Motion'],
    }
  ]
};

export const projects = projectsData.fr;
export const getProjects = (lang: 'fr' | 'en') => projectsData[lang];
