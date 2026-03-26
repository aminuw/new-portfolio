export interface VeilleItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

export const veilles: VeilleItem[] = [
  {
    id: '6',
    date: 'Mars 2026',
    category: 'Intelligence Artificielle',
    title: "Claude 3 : L'évolution par Anthropic",
    description: "Une avancée majeure dans la compréhension, la rapidité et la génération de code avec la nouvelle famille de modèles Claude 3 (Opus, Sonnet, Haiku).",
    link: 'https://www.anthropic.com/news/claude-3-family',
  },
  {
    id: '5',
    date: 'Février 2026',
    category: 'Productivité Dev',
    title: 'GitHub Copilot Enterprise',
    description: "Déploiement général de l'assistant IA capable de se brancher sur toute la base de code privée d'une entreprise pour fournir des suggestions ultra-contextualisées.",
    link: 'https://github.blog/2024-02-27-github-copilot-enterprise-is-now-generally-available/',
  },
  {
    id: '4',
    date: 'Janvier 2026',
    category: 'Génération Vidéo',
    title: 'Sora par OpenAI',
    description: "Présentation d'un modèle IA historique capable de générer des vidéos ultra-réalistes de 60 secondes avec une physique extrêmement cohérente.",
    link: 'https://openai.com/sora',
  },
  {
    id: '3',
    date: 'Décembre 2025',
    category: 'Runtime JS',
    title: 'Bun 1.1 sous Windows',
    description: "Le runtime JavaScript ultra-rapide devient enfin 100% natif sous Windows, marquant un tournant révolutionnaire pour son adoption globale.",
    link: 'https://bun.sh/blog/bun-v1.1',
  },
  {
    id: '2',
    date: 'Novembre 2025',
    category: 'Framework',
    title: 'Next.js 15',
    description: "Support natif de React 19, refonte majeure du caching et du routing dynamique pour une expérience développeur et des performances inégalées.",
    link: 'https://nextjs.org/blog/next-15',
  },
  {
    id: '1',
    date: 'Octobre 2025',
    category: 'Librairie UI',
    title: 'React 19 & Compiler',
    description: "Officialisation de React 19. Fin de l'optimisation manuelle (useMemo, useCallback) grâce au déploiement du React Compiler automatique.",
    link: 'https://react.dev/blog/2024/04/25/react-19',
  },
];
