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
      date: 'Juin 2026',
      category: 'Intelligence Artificielle',
      title: 'De l\'Assistant à l\'Agent Autonome (Claude Code, Cursor)',
      description: 'Lecture sur les outils d’assistance au développement, avec vérification humaine du code.',
      link: 'https://www.anthropic.com/research',
    },
    {
      id: '5',
      date: 'Mai 2026',
      category: 'Framework / Architecture',
      title: 'React 19 & La standardisation Server-First',
      description: 'Lecture de la documentation React sur les composants serveur et les choix de rendu.',
      link: 'https://react.dev/blog',
    },
    {
      id: '4',
      date: 'Avril 2026',
      category: 'Productivité Dev',
      title: 'L\'avènement du "Vibe Coding" & App Builders',
      description: 'Exploration des générateurs d’interfaces et revue du code produit.',
      link: 'https://v0.dev/',
    },
    {
      id: '3',
      date: 'Mars 2026',
      category: 'Ingénierie Web',
      title: 'Next.js & L\'optimisation Edge Computing',
      description: 'Lecture des options de rendu et de déploiement Next.js.',
      link: 'https://nextjs.org/docs',
    },
    {
      id: '2',
      date: 'Février 2026',
      category: 'Ingénierie Backend',
      title: 'L\'orchestration d\'IA avec LangGraph',
      description: 'Découverte des workflows à états et de leurs usages côté serveur.',
      link: 'https://www.langchain.com/langgraph',
    },
    {
      id: '1',
      date: 'Janvier 2026',
      category: 'Open Source',
      title: 'L\'écosystème Open Source et l\'Agnosticisme LLM',
      description: 'Comparaison des moyens d’appeler plusieurs modèles via API.',
      link: 'https://openrouter.ai/',
    },
  ],
  en: [
    {
      id: '6',
      date: 'June 2026',
      category: 'Artificial Intelligence',
      title: 'From Assistant to Autonomous Agent (Claude Code, Cursor)',
      description: 'Reading about developer assistants: use cases, human review and limits of automation.',
      link: 'https://www.anthropic.com/research',
    },
    {
      id: '5',
      date: 'May 2026',
      category: 'Framework / Architecture',
      title: 'React 19 & The Server-First Standardization',
      description: 'Reading React documentation on server components and choosing rendering approaches for specific needs.',
      link: 'https://react.dev/blog',
    },
    {
      id: '4',
      date: 'April 2026',
      category: 'Dev Productivity',
      title: 'The Rise of "Vibe Coding" & App Builders',
      description: 'Exploring interface generators and reviewing generated code before integrating it.',
      link: 'https://v0.dev/',
    },
    {
      id: '3',
      date: 'March 2026',
      category: 'Web Engineering',
      title: 'Next.js & Edge Computing Optimization',
      description: 'Reading about rendering and deployment options documented for Next.js.',
      link: 'https://nextjs.org/docs',
    },
    {
      id: '2',
      date: 'February 2026',
      category: 'Backend Engineering',
      title: 'AI Orchestration with LangGraph',
      description: 'Learning how state-based workflows work and where they may be useful in server applications.',
      link: 'https://www.langchain.com/langgraph',
    },
    {
      id: '1',
      date: 'January 2026',
      category: 'Open Source',
      title: 'The Open Source Ecosystem and LLM Agnosticism',
      description: 'Comparing ways to call different models through APIs, without claiming production experience.',
      link: 'https://openrouter.ai/',
    },
  ]
};

export const veilles = veilleData.fr;
export const getVeilles = (lang: 'fr' | 'en') => veilleData[lang];
