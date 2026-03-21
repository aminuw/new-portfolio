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

export const skills: SkillCategory[] = [
  {
    category: 'Frontend & Web',
    description: 'Interfaces réactives et animations fluides pixel-perfect.',
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
    description: 'Développement d\'applications natives et logicielles robustes.',
    items: [
      { name: 'Kotlin', level: 'Scolaire', keywords: 'Android Studio, Jetpack Compose' },
      { name: 'Java', level: 'Intermédiaire', keywords: 'POO, Swing' },
      { name: 'PHP', level: 'Avancé', keywords: 'MVC, Bases Backend, POO' },
    ]
  },
  {
    category: 'Opération & Data',
    description: 'Des fondations solides et structurées pour gérer les données.',
    items: [
      { name: 'SQL / MySQL', level: 'Solide', keywords: 'Relations, Indexing, Requêtes complexes' },
      { name: 'Architecture', level: 'Quotidien', keywords: 'MCD, MLD, Vues' },
      { name: 'Supabase', level: 'Apprentissage', keywords: 'BaaS, Edge Functions' },
    ]
  },
  {
    category: 'Systeme & Réseaux',
    description: 'Système et réseaux ',
    items: [
      { name: 'Windows Server', level: 'Intermédiaire', keywords: 'Active Directory, GPO, DNS, DHCP' },
      { name: 'Linux', level: 'Notions', keywords: 'Ubuntu, Debian, CentOS' },
      { name: 'Réseaux', level: 'Intermédiaire', keywords: 'TCP/IP, DNS, DHCP, VPN' },
      { name: 'Azure/AWS', level: 'Notions', keywords: 'Cloud, Virtualisation, Sécurité' },
    ]
  },
  {
    category: 'Outils &+',
    description: 'Un workflow optimisé de la conception au déploiement.',
    items: [
      { name: 'VS Code', level: 'IDE', keywords: 'Extensions, Debugging' },
      { name: 'Git / GitHub', level: 'Quotidien', keywords: 'Versioning, Actions, CI/CD' },
      { name: 'Agile / Scrum', level: 'Quotidien', keywords: 'Sprints, Dailies, Kanban' },
      { name: 'DevTools', level: 'Quotidien', keywords: 'Console, Debugging, Performance' },
      { name: 'Curiosité', level: 'Infini', keywords: 'Veille techno permanente' },

    ]
  }
];
