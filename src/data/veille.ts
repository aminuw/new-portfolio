export interface VeilleItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const veilleData: Record<'fr' | 'en', VeilleItem[]> = {
  fr: [
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
  ],
  en: [
    {
      id: '6',
      date: 'March 2026',
      category: 'Artificial Intelligence',
      title: "Claude 3: The Evolution by Anthropic",
      description: "A major breakthrough in understanding, speed and code generation with the new Claude 3 model family (Opus, Sonnet, Haiku).",
      link: 'https://www.anthropic.com/news/claude-3-family',
    },
    {
      id: '5',
      date: 'February 2026',
      category: 'Dev Productivity',
      title: 'GitHub Copilot Enterprise',
      description: "General deployment of the AI assistant that plugs into an entire company's private codebase to deliver ultra-contextual suggestions.",
      link: 'https://github.blog/2024-02-27-github-copilot-enterprise-is-now-generally-available/',
    },
    {
      id: '4',
      date: 'January 2026',
      category: 'Video Generation',
      title: 'Sora by OpenAI',
      description: "Introduction of a groundbreaking AI model capable of generating ultra-realistic 60-second videos with extremely coherent physics.",
      link: 'https://openai.com/sora',
    },
    {
      id: '3',
      date: 'December 2025',
      category: 'JS Runtime',
      title: 'Bun 1.1 on Windows',
      description: "The ultra-fast JavaScript runtime finally becomes 100% native on Windows, marking a revolutionary turning point for global adoption.",
      link: 'https://bun.sh/blog/bun-v1.1',
    },
    {
      id: '2',
      date: 'November 2025',
      category: 'Framework',
      title: 'Next.js 15',
      description: "Native React 19 support, major caching and dynamic routing overhaul for unmatched developer experience and performance.",
      link: 'https://nextjs.org/blog/next-15',
    },
    {
      id: '1',
      date: 'October 2025',
      category: 'UI Library',
      title: 'React 19 & Compiler',
      description: "Official React 19 release. End of manual optimization (useMemo, useCallback) thanks to the automatic React Compiler.",
      link: 'https://react.dev/blog/2024/04/25/react-19',
    },
  ]
};

export const veilles = veilleData.fr;
export const getVeilles = (lang: 'fr' | 'en') => veilleData[lang];
