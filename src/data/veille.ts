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
      description: 'Le passage des simples assistants à l\'ingénierie "agentique", où l\'IA gère de manière autonome le refactoring et l\'architecture complète d\'un projet.',
      link: 'https://www.anthropic.com/research',
    },
    {
      id: '5',
      date: 'Mai 2026',
      category: 'Framework / Architecture',
      title: 'React 19 & La standardisation Server-First',
      description: 'L\'adoption massive des React Server Components (RSC) comme standard, réduisant drastiquement le JavaScript côté client et améliorant les performances SEO.',
      link: 'https://react.dev/blog',
    },
    {
      id: '4',
      date: 'Avril 2026',
      category: 'Productivité Dev',
      title: 'L\'avènement du "Vibe Coding" & App Builders',
      description: 'L\'utilisation d\'outils comme v0.dev ou Bolt.new pour générer instantanément des interfaces complexes et prêtes pour la production via des invites en langage naturel.',
      link: 'https://v0.dev/',
    },
    {
      id: '3',
      date: 'Mars 2026',
      category: 'Ingénierie Web',
      title: 'Next.js & L\'optimisation Edge Computing',
      description: 'La maturité du rendu à la périphérie du réseau (Edge) avec Next.js, permettant des temps de réponse sous la milliseconde pour les applications à fort trafic.',
      link: 'https://nextjs.org/docs',
    },
    {
      id: '2',
      date: 'Février 2026',
      category: 'Ingénierie Backend',
      title: 'L\'orchestration d\'IA avec LangGraph',
      description: 'L\'intégration de frameworks de graphes d\'état pour créer des workflows backend complexes, orchestrant plusieurs agents IA dans des applications métier.',
      link: 'https://www.langchain.com/langgraph',
    },
    {
      id: '1',
      date: 'Janvier 2026',
      category: 'Open Source',
      title: 'L\'écosystème Open Source et l\'Agnosticisme LLM',
      description: 'La montée en puissance des plateformes comme OpenRouter, permettant de jongler entre différents modèles d\'IA sans dépendance à un seul fournisseur.',
      link: 'https://openrouter.ai/',
    },
  ],
  en: [
    {
      id: '6',
      date: 'June 2026',
      category: 'Artificial Intelligence',
      title: 'From Assistant to Autonomous Agent (Claude Code, Cursor)',
      description: 'The shift from simple assistants to "agentic" engineering, where AI autonomously manages the complete refactoring and architecture of a project.',
      link: 'https://www.anthropic.com/research',
    },
    {
      id: '5',
      date: 'May 2026',
      category: 'Framework / Architecture',
      title: 'React 19 & The Server-First Standardization',
      description: 'The massive adoption of React Server Components (RSC) as an industry standard, drastically reducing client-side JavaScript and improving SEO performance.',
      link: 'https://react.dev/blog',
    },
    {
      id: '4',
      date: 'April 2026',
      category: 'Dev Productivity',
      title: 'The Rise of "Vibe Coding" & App Builders',
      description: 'The use of tools like v0.dev or Bolt.new to instantly generate complex, production-ready interfaces via natural language prompts.',
      link: 'https://v0.dev/',
    },
    {
      id: '3',
      date: 'March 2026',
      category: 'Web Engineering',
      title: 'Next.js & Edge Computing Optimization',
      description: 'The maturity of edge rendering with Next.js, enabling sub-millisecond response times for high-traffic applications.',
      link: 'https://nextjs.org/docs',
    },
    {
      id: '2',
      date: 'February 2026',
      category: 'Backend Engineering',
      title: 'AI Orchestration with LangGraph',
      description: 'The integration of state graph frameworks to create complex backend workflows, orchestrating multiple AI agents in business applications.',
      link: 'https://www.langchain.com/langgraph',
    },
    {
      id: '1',
      date: 'January 2026',
      category: 'Open Source',
      title: 'The Open Source Ecosystem and LLM Agnosticism',
      description: 'The rise of platforms like OpenRouter, allowing developers to switch between different AI models without vendor lock-in.',
      link: 'https://openrouter.ai/',
    },
  ]
};

export const veilles = veilleData.fr;
export const getVeilles = (lang: 'fr' | 'en') => veilleData[lang];
