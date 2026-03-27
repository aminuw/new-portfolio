const experienceData = {
  fr: [
    {
      role: "Stagiaire Support IT & Développement (DSI)",
      company: "GROUPE SATEC (Levallois-Perret)",
      period: "Janv 2026 - Fev 2026",
      description: "Développement outil interne d'automatisation (API REST PHP/SQL) : gain de 3h/semaine sur traitement données. Accompagnement des utilisateurs pour la migrations vers nouvelle environnement Microsoft + Windows 11 + Office 365"
    },
    {
      role: 'Stagiaire Développeur PHP',
      company: 'SmartUp (Orléans)',
      period: 'Mai 2025 - Juil 2025',
      description: 'Analyse des besoins, conception de la BDD MySQL et développement CRUD en PHP. Sensibilisation au RGPD et méthodes Agiles (Scrum).',
    },
  ],
  en: [
    {
      role: "IT Support & Development Intern (IT Dept)",
      company: "GROUPE SATEC (Levallois-Perret)",
      period: "Jan 2026 - Feb 2026",
      description: "Developed an internal automation tool (PHP/SQL REST API): saved 3h/week on data processing. Supported users during migration to new Microsoft environment + Windows 11 + Office 365."
    },
    {
      role: 'PHP Developer Intern',
      company: 'SmartUp (Orléans)',
      period: 'May 2025 - Jul 2025',
      description: 'Requirements analysis, MySQL database design and PHP CRUD development. Introduction to GDPR compliance and Agile methodologies (Scrum).',
    },
  ]
};

export const experience = experienceData.fr;
export const getExperience = (lang: 'fr' | 'en') => experienceData[lang];
