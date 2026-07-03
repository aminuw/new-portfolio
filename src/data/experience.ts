export const experienceData = {
  fr: [
    {
      role: "Développeur & Support IT",
      company: "Groupe SATEC (Levallois-Perret)",
      period: "Janv 2026 - Fév 2026",
      description: "• Automatisation & Dev : Réflexion sur un outil d'aide au traitement des tickets via API REST.\n• Support & Infra : Résolution d'incidents (N1/N2) et accompagnement de +300 utilisateurs lors de migrations.\n• Méthodologie : Gestion Agile des tickets (RGPD, +350 postes)."
    },
    {
      role: "Développeur Web Full-Stack",
      company: "SmartUp (Orléans)",
      period: "Mai 2025 - Juil 2025",
      description: "• Conception & BDD : Modélisation MySQL et développement d'une application métier PHP CRUD.\n• Intégration : Centralisation de flux hétérogènes (fichiers, APIs) sécurisés (RGPD).\n• UX/UI : Automatisation de formulaires réduisant de 40% le temps de saisie.\n• Gestion de projet : Méthode Agile avec livraisons en sprints."
    }
  ],
  en: [
    {
      role: "IT Support & Developer",
      company: "Groupe SATEC (Levallois-Perret)",
      period: "Jan 2026 - Feb 2026",
      description: "• Automation & Dev: Designed a ticket processing tool using REST API.\n• Support & Infra: Critical incident resolution (L1/L2) and technical support for 300+ users during migrations.\n• Methodology: Agile ticket lifecycle management with strict GDPR compliance (350+ workstations)."
    },
    {
      role: "Full-Stack Web Developer",
      company: "SmartUp (Orléans)",
      period: "May 2025 - Jul 2025",
      description: "• Database & Design: MySQL modeling and full PHP CRUD application development.\n• Integration: Secure centralization of heterogeneous data flows (files, 3rd party APIs).\n• UX/UI Optimization: Form automation reducing manual data entry time by 40%.\n• Project Management: Agile methodology with regular sprint deliveries."
    }
  ]
};

export const educationData = {
  fr: [
    {
      role: "Bachelor Concepteur Développeur d'Applications",
      company: "CESI",
      period: "2026 - 2027",
      description: "Formation en alternance visant à approfondir l'architecture logicielle, le développement full-stack et la gestion de projet Agile."
    },
    {
      role: "BTS SIO (Option SLAM)",
      company: "Lycée Benjamin Franklin (Orléans)",
      period: "2024 - 2026",
      description: "Services Informatiques aux Organisations (Solutions Logicielles et Applications Métier). Apprentissage du développement web, POO (Java, PHP), bases de données (SQL) et gestion de projets informatiques."
    },
    {
      role: "Baccalauréat STI2D (Option SIN)",
      company: "Lycée Benjamin Franklin (Orléans)",
      period: "2023 - 2024",
      description: "Sciences et Technologies de l'Industrie et du Développement Durable (Systèmes d'Information et Numérique). Initiation à la programmation et aux systèmes embarqués."
    }
  ],
  en: [
    {
      role: "Bachelor's in Application Design & Development",
      company: "CESI",
      period: "2026 - 2027",
      description: "Work-study program focusing on software architecture, full-stack development, and Agile project management."
    },
    {
      role: "Two-year Degree in IT Services (SLAM)",
      company: "Lycée Benjamin Franklin (Orléans)",
      period: "2024 - 2026",
      description: "Focus on Software Solutions and Business Applications. Learned web development, OOP (Java, PHP), databases (SQL), and IT project management."
    },
    {
      role: "High School Diploma in Technology (STI2D)",
      company: "Lycée Benjamin Franklin (Orléans)",
      period: "2023 - 2024",
      description: "Information Systems and Digital Technology. Introduction to programming and embedded systems."
    }
  ]
};

export const getExperience = (lang: 'fr' | 'en') => experienceData[lang];
export const getEducation = (lang: 'fr' | 'en') => educationData[lang];
