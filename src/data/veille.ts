export interface VeilleItem {
  id: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

export const veilles: VeilleItem[] = [
  {
    id: '6',
    date: 'Octobre 2024',
    title: "Next.js 15 : React Compiler et améliorations majeures",
    description: "Vercel a annoncé Next.js 15 avec un support natif de React 19, une flexibilité accrue du caching, et Hydration Error improvements.",
    link: 'https://nextjs.org/blog/next-15',
  },
  {
    id: '5',
    date: 'Avril 2024',
    title: 'React 19 : Le nouveau paradigme avec le React Compiler',
    description: "L'équipe React a officialisé React 19. Fini les useMemo et useCallback manuels grâce au React Compiler qui optimise automatiquement les rendus sous le capot.",
    link: 'https://react.dev/blog/2024/04/25/react-19',
  },
  {
    id: '4',
    date: 'Mars 2024',
    title: 'Claude 3 : Anthropic dévoile sa nouvelle famille d\'IA',
    description: "Anthropic dévoile sa nouvelle famille de modèles IA Claude 3 (Haiku, Sonnet, Opus). La version Opus démontre des capacités de raisonnement et de code impressionnantes.",
    link: 'https://www.anthropic.com/news/claude-3-family',
  },
  {
    id: '3',
    date: 'Février 2024',
    title: 'Sora par OpenAI : La génération vidéo franchit un cap historique',
    description: "OpenAI présente Sora, un modèle capable de générer des vidéos réalistes de 60 secondes à partir de texte, avec une compréhension poussée de la physique et des environnements.",
    link: 'https://openai.com/index/sora/',
  },
  {
    id: '2',
    date: 'Février 2024',
    title: 'GitHub Copilot Enterprise disponible au grand public',
    description: "GitHub déploie la version Enterprise de Copilot. L'assistant peut désormais se baser sur toute la base de code privée d'une entreprise pour fournir des suggestions ultra-contextualisées.",
    link: 'https://github.blog/2024-02-27-github-copilot-enterprise-is-now-generally-available/',
  },
  {
    id: '1',
    date: 'Avril 2024',
    title: "Bun 1.1 : Le runtime JavaScript devient natif Windows",
    description: "L'alternative ultra-rapide à Node.js, Bun, annonce sa version 1.1. L'innovation majeure est le support complet et natif sous Windows, marquant un tournant pour son adoption.",
    link: 'https://bun.sh/blog/bun-v1.1',
  },
];
