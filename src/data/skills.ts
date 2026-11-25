export interface SkillItem { name: string; level: string; keywords: string; }
export interface SkillCategory { category: string; description: string; items: SkillItem[]; }

const skillsData: Record<'fr' | 'en', SkillCategory[]> = {
  fr: [
    { category: 'Développement logiciel et web', description: 'Applications métier et fonctionnalités web réalisées en stage et dans mes projets.', items: [
      { name: 'PHP', level: 'Stage et projet', keywords: 'PDO, CRUD, MVC' },
      { name: 'Java', level: 'Formation', keywords: 'POO, programmation avancée' },
      { name: 'TypeScript / JavaScript', level: 'Projets', keywords: 'Next.js, Node.js' },
      { name: 'React / Next.js', level: 'Projets', keywords: 'Interfaces, routes serveur' },
    ] },
    { category: 'Données et API', description: 'Modélisation de données et échanges entre services.', items: [
      { name: 'SQL / MySQL', level: 'Stage et formation', keywords: 'Modélisation, requêtes, relations' },
      { name: 'Supabase', level: 'Projet CRM', keywords: 'Authentification, données' },
      { name: 'API REST', level: 'Projets', keywords: 'Intégrations, JSON, Postman' },
    ] },
    { category: 'Automatisation et outils', description: 'Scripts et outils pour simplifier des tâches concrètes.', items: [
      { name: 'Python', level: 'Bases', keywords: 'Scripts' },
      { name: 'Bash / PowerShell', level: 'Notions', keywords: 'Commandes et scripts' },
      { name: 'Git / GitHub', level: 'Projets', keywords: 'Suivi de versions' },
      { name: 'IA via API', level: 'Projet personnel', keywords: 'Analyse d’offres, brouillons relus avant envoi' },
    ] },
    { category: 'Environnement IT', description: 'Expérience acquise en DSI lors du stage chez Groupe SATEC.', items: [
      { name: 'Windows / Microsoft 365', level: 'Stage', keywords: 'Support, migration, documentation' },
      { name: 'Active Directory', level: 'Notions', keywords: 'Comptes, environnement entreprise' },
    ] },
  ],
  en: [
    { category: 'Software and web development', description: 'Business applications and web features built in internships and personal projects.', items: [
      { name: 'PHP', level: 'Internship and project', keywords: 'PDO, CRUD, MVC' },
      { name: 'Java', level: 'Coursework', keywords: 'OOP, programming' },
      { name: 'TypeScript / JavaScript', level: 'Projects', keywords: 'Next.js, Node.js' },
      { name: 'React / Next.js', level: 'Projects', keywords: 'Interfaces, server routes' },
    ] },
    { category: 'Data and APIs', description: 'Data modeling and service integrations.', items: [
      { name: 'SQL / MySQL', level: 'Internship and coursework', keywords: 'Data modeling, queries, relations' },
      { name: 'Supabase', level: 'CRM project', keywords: 'Authentication, data' },
      { name: 'REST APIs', level: 'Projects', keywords: 'Integrations, JSON, Postman' },
    ] },
    { category: 'Automation and tools', description: 'Scripts and tools for practical tasks.', items: [
      { name: 'Python', level: 'Basics', keywords: 'Scripts' },
      { name: 'Bash / PowerShell', level: 'Basic knowledge', keywords: 'Commands and scripts' },
      { name: 'Git / GitHub', level: 'Projects', keywords: 'Version control' },
      { name: 'AI APIs', level: 'Personal project', keywords: 'Posting analysis, drafts reviewed before sending' },
    ] },
    { category: 'IT environment', description: 'Experience gained during an IT internship at Groupe SATEC.', items: [
      { name: 'Windows / Microsoft 365', level: 'Internship', keywords: 'Support, migration, documentation' },
      { name: 'Active Directory', level: 'Basic knowledge', keywords: 'Accounts, business environment' },
    ] },
  ],
};
export const skills = skillsData.fr;
export const getSkills = (lang: 'fr' | 'en') => skillsData[lang];
