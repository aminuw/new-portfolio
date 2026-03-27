const certificationsData = {
  fr: [
    {
      title: "Apprenez à créer votre site web avec HTML5 et CSS3",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification validant les compétences fondamentales en création de sites web : structuration en HTML et stylisation en CSS.",
      image: "/fichiers/HTML.png",
      link: "#",
      skills: ["HTML5", "CSS3", "Intégration Web"]
    },
    {
      title: "Apprenez à programmer en JavaScript",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification attestant de la maîtrise des bases de la programmation JavaScript et de l'interactivité côté client.",
      image: "/fichiers/JS.png",
      link: "#",
      skills: ["JavaScript", "DOM", "Logique de programmation"]
    },
    {
      title: "Concevez votre site web avec PHP et MySQL",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification sur la création de sites web dynamiques, la gestion de bases de données et la manipulation de données en PHP.",
      image: "/fichiers/PHP.png",
      link: "#",
      skills: ["PHP", "MySQL", "Back-end"]
    },
    {
      title: "Apprenez à programmer en Java",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification couvrant les concepts fondamentaux de la programmation orientée objet avec le langage Java.",
      image: "/fichiers/JAVA.png",
      link: "#",
      skills: ["Java", "POO", "Algorithmique"]
    },
    {
      title: "Simplifiez vos développements avec jQuery",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification sur l'utilisation de la bibliothèque jQuery pour simplifier la manipulation du DOM, les animations et les requêtes AJAX.",
      image: "/fichiers/JQUERY.png",
      link: "#",
      skills: ["jQuery", "JavaScript", "AJAX"]
    },
    {
      title: "Comprendre les réseaux TCP/IP",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification validant la compréhension des concepts clés des réseaux informatiques, du modèle OSI et des protocoles TCP/IP.",
      image: "/fichiers/TCPIP.png",
      link: "#",
      skills: ["Réseau", "TCP/IP", "Modèle OSI"]
    }
  ],
  en: [
    {
      title: "Learn to build your website with HTML5 and CSS3",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification validating core web creation skills: HTML structuring and CSS styling.",
      image: "/fichiers/HTML.png",
      link: "#",
      skills: ["HTML5", "CSS3", "Web Integration"]
    },
    {
      title: "Learn to program in JavaScript",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification attesting to mastery of JavaScript programming fundamentals and client-side interactivity.",
      image: "/fichiers/JS.png",
      link: "#",
      skills: ["JavaScript", "DOM", "Programming Logic"]
    },
    {
      title: "Build your website with PHP and MySQL",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification on creating dynamic websites, database management and PHP data manipulation.",
      image: "/fichiers/PHP.png",
      link: "#",
      skills: ["PHP", "MySQL", "Back-end"]
    },
    {
      title: "Learn to program in Java",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification covering core object-oriented programming concepts with the Java language.",
      image: "/fichiers/JAVA.png",
      link: "#",
      skills: ["Java", "OOP", "Algorithms"]
    },
    {
      title: "Simplify your development with jQuery",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification on using the jQuery library to simplify DOM manipulation, animations and AJAX requests.",
      image: "/fichiers/JQUERY.png",
      link: "#",
      skills: ["jQuery", "JavaScript", "AJAX"]
    },
    {
      title: "Understanding TCP/IP Networks",
      issuer: "OpenClassrooms",
      date: "2025",
      description: "Certification validating understanding of key network concepts, the OSI model and TCP/IP protocols.",
      image: "/fichiers/TCPIP.png",
      link: "#",
      skills: ["Networking", "TCP/IP", "OSI Model"]
    }
  ]
};

export const certifications = certificationsData.fr;
export const getCertifications = (lang: 'fr' | 'en') => certificationsData[lang];
