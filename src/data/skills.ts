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
      { name: 'React.js', level: 'Avancé', keywords: 'Hooks, Context, Performance' },
      { name: 'Next.js', level: 'Avancé', keywords: 'App Router, Créativité, SSR' },
      { name: 'TypeScript', level: 'Intermédiaire', keywords: 'Typage strict, Interfaces' },
      { name: 'Tailwind CSS', level: 'Note 10/10', keywords: 'Design System, Responsive' },
      { name: 'Framer Motion', level: 'Passionné', keywords: 'Micro-interactions, Animations' },
    ] 
  },
  { 
    category: 'Software & Mobile', 
    description: 'Développement d\'applications natives et logicielles robustes.',
    items: [
      { name: 'Kotlin', level: 'Intermédiaire', keywords: 'Android Studio, Jetpack Compose' },
      { name: 'Java', level: 'Scolaire', keywords: 'POO, Swing, JDBC' },
      { name: 'PHP', level: 'Standard', keywords: 'MVC, Bases Backend' },
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
    category: 'Outils &+', 
    description: 'Un workflow optimisé de la conception au déploiement.',
    items: [
      { name: 'Figma', level: 'Créatif', keywords: 'Maquettage, Prototypage, UI/UX' },
      { name: 'VS Code', level: 'IDE', keywords: 'Extensions, Debugging' },
      { name: 'Git / GitHub', level: 'Quotidien', keywords: 'Versioning, Actions, CI/CD' },
      { name: 'Agile / Scrum', level: 'Vécu', keywords: 'Sprints, Dailies, Kanban' },
      { name: 'Curiosité', level: 'Infini', keywords: 'Veille techno permanente' },
    ] 
  },
];
