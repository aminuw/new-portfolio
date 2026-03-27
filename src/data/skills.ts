export interface SkillItem {
  name: string;
  level: string;
  keywords: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: SkillItem[];
}

const skillsData: Record<'fr' | 'en', SkillCategory[]> = {
  fr: [
    {
      category: 'Frontend & Web',
      description: "Création d'interfaces dynamiques et engageantes avec un grand souci du détail.",
      items: [
        { name: 'React.js', level: 'Apprentissage', keywords: 'Hooks, Context, Performance' },
        { name: 'TypeScript', level: 'Apprentissage', keywords: 'Typage strict, Interfaces' },
        { name: 'Tailwind CSS', level: 'Note 10/10', keywords: 'Design System, Responsive' },
        { name: 'Framer Motion', level: 'Passionné', keywords: 'Micro-interactions, Animations' },
        { name: 'API REST', level: 'Quotidien', keywords: 'Requêtes, Réponses, JSON' },
      ]
    },
    {
      category: 'Software & Mobile',
      description: 'Conception de solutions applicatives pérennes, sur mobile et desktop.',
      items: [
        { name: 'Kotlin', level: 'Scolaire', keywords: 'Android Studio, Jetpack Compose' },
        { name: 'Java', level: 'Intermédiaire', keywords: 'POO, Swing' },
        { name: 'PHP', level: 'Avancé', keywords: 'MVC, Bases Backend, POO' },
      ]
    },
    {
      category: 'Opération & Data',
      description: "Mise en place d'architectures de données fiables et optimisées.",
      items: [
        { name: 'SQL / MySQL', level: 'Solide', keywords: 'Relations, Indexing, Requêtes complexes' },
        { name: 'Architecture', level: 'Quotidien', keywords: 'MCD, MLD, Vues' },
        { name: 'Supabase', level: 'Apprentissage', keywords: 'BaaS, Edge Functions' },
      ]
    },
    {
      category: 'Systeme & Réseaux',
      description: 'Système et réseaux',
      items: [
        { name: 'Windows Server', level: 'Intermédiaire', keywords: 'Active Directory, GPO, DNS, DHCP' },
        { name: 'Linux', level: 'Notions', keywords: 'Ubuntu, Debian, CentOS' },
        { name: 'Réseaux', level: 'Intermédiaire', keywords: 'TCP/IP, DNS, DHCP, VPN' },
        { name: 'Azure/AWS', level: 'Notions', keywords: 'Cloud, Virtualisation, Sécurité' },
      ]
    },
    {
      category: 'Outils &+',
      description: "Maîtrise d'outils professionnels pour assurer un cycle de développement fluide.",
      items: [
        { name: 'VS Code', level: 'IDE', keywords: 'Extensions, Debugging' },
        { name: 'Git / GitHub', level: 'Quotidien', keywords: 'Versioning, Actions, CI/CD' },
        { name: 'Agile / Scrum', level: 'Quotidien', keywords: 'Sprints, Dailies, Kanban' },
        { name: 'DevTools', level: 'Quotidien', keywords: 'Console, Debugging, Performance' },
        { name: 'Curiosité', level: 'Infini', keywords: 'Veille techno permanente' },
      ]
    }
  ],
  en: [
    {
      category: 'Frontend & Web',
      description: 'Creating dynamic and engaging interfaces with great attention to detail.',
      items: [
        { name: 'React.js', level: 'Learning', keywords: 'Hooks, Context, Performance' },
        { name: 'TypeScript', level: 'Learning', keywords: 'Strict Typing, Interfaces' },
        { name: 'Tailwind CSS', level: '10/10', keywords: 'Design System, Responsive' },
        { name: 'Framer Motion', level: 'Passionate', keywords: 'Micro-interactions, Animations' },
        { name: 'REST API', level: 'Daily', keywords: 'Requests, Responses, JSON' },
      ]
    },
    {
      category: 'Software & Mobile',
      description: 'Designing sustainable application solutions for mobile and desktop.',
      items: [
        { name: 'Kotlin', level: 'Academic', keywords: 'Android Studio, Jetpack Compose' },
        { name: 'Java', level: 'Intermediate', keywords: 'OOP, Swing' },
        { name: 'PHP', level: 'Advanced', keywords: 'MVC, Backend Basics, OOP' },
      ]
    },
    {
      category: 'Operations & Data',
      description: 'Building reliable and optimized data architectures.',
      items: [
        { name: 'SQL / MySQL', level: 'Strong', keywords: 'Relations, Indexing, Complex Queries' },
        { name: 'Architecture', level: 'Daily', keywords: 'CDM, LDM, Views' },
        { name: 'Supabase', level: 'Learning', keywords: 'BaaS, Edge Functions' },
      ]
    },
    {
      category: 'Systems & Networks',
      description: 'Systems and network administration.',
      items: [
        { name: 'Windows Server', level: 'Intermediate', keywords: 'Active Directory, GPO, DNS, DHCP' },
        { name: 'Linux', level: 'Basics', keywords: 'Ubuntu, Debian, CentOS' },
        { name: 'Networking', level: 'Intermediate', keywords: 'TCP/IP, DNS, DHCP, VPN' },
        { name: 'Azure/AWS', level: 'Basics', keywords: 'Cloud, Virtualization, Security' },
      ]
    },
    {
      category: 'Tools &+',
      description: 'Mastery of professional tools to ensure a smooth development cycle.',
      items: [
        { name: 'VS Code', level: 'IDE', keywords: 'Extensions, Debugging' },
        { name: 'Git / GitHub', level: 'Daily', keywords: 'Versioning, Actions, CI/CD' },
        { name: 'Agile / Scrum', level: 'Daily', keywords: 'Sprints, Dailies, Kanban' },
        { name: 'DevTools', level: 'Daily', keywords: 'Console, Debugging, Performance' },
        { name: 'Curiosity', level: 'Infinite', keywords: 'Continuous tech watch' },
      ]
    }
  ]
};

export const skills = skillsData.fr;
export const getSkills = (lang: 'fr' | 'en') => skillsData[lang];
