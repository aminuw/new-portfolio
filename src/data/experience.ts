export const experienceData = {
  fr: [
    { role: 'Stagiaire DSI / support IT', company: 'Groupe SATEC (Levallois-Perret)', period: 'Janv. – fév. 2026', description: '• Assistance aux utilisateurs sur Windows, Outlook et Exchange.\n• Participation à la migration Microsoft 365 et à la gestion des boîtes partagées.\n• Suivi des tickets et rédaction de procédures pour les équipes et les utilisateurs.' },
    { role: 'Stagiaire développeur web full stack', company: 'SmartUp (Orléans)', period: 'Mai – juil. 2025', description: '• Conception d’une base MySQL et développement de fonctions de gestion de données en PHP.\n• Amélioration des écrans et des formulaires de saisie.' },
  ],
  en: [
    { role: 'IT support intern', company: 'Groupe SATEC (Levallois-Perret)', period: 'Jan – Feb 2026', description: '• Assisted users with Windows, Outlook and Exchange.\n• Helped with the Microsoft 365 migration and shared mailbox management.\n• Tracked tickets and wrote procedures for users and the IT team.' },
    { role: 'Full-stack web development intern', company: 'SmartUp (Orléans)', period: 'May – Jul 2025', description: '• Designed a MySQL database and developed PHP data management features.\n• Improved data entry forms and application screens.' },
  ],
};

export const educationData = {
  fr: [
    { role: 'Bachelor Architecture des Logiciels — entrée en 3e année visée', company: 'ESGI Paris · admission en cours', period: '2026–2027 (projet)', description: 'Projet de poursuite d’études en alternance ; entrée et calendrier soumis à la confirmation de l’école.' },
    { role: 'BTS SIO, option SLAM', company: 'Lycée Benjamin Franklin (Orléans)', period: '2024–2026 · obtenu', description: 'Développement d’applications, programmation orientée objet en Java et PHP, bases de données SQL.' },
    { role: 'Bac STI2D, option SIN', company: 'Lycée Benjamin Franklin (Orléans)', period: '2024', description: 'Systèmes d’information et numérique.' },
  ],
  en: [
    { role: 'Software Architecture Bachelor — aiming for year 3', company: 'ESGI Paris · admission pending', period: '2026–2027 (planned)', description: 'Planned apprenticeship program; admission and schedule subject to school confirmation.' },
    { role: 'BTS SIO, software development track', company: 'Lycée Benjamin Franklin (Orléans)', period: '2024–2026 · awarded', description: 'Application development, object-oriented programming in Java and PHP, SQL databases.' },
    { role: 'STI2D high school diploma, digital systems track', company: 'Lycée Benjamin Franklin (Orléans)', period: '2024', description: 'Information and digital systems.' },
  ],
};

export const getExperience = (lang: 'fr' | 'en') => experienceData[lang];
export const getEducation = (lang: 'fr' | 'en') => educationData[lang];
