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
    date: '21 mars 2026',
    title: "Higgsfield - Le Netflix de l'IA où 4 personnes remplacent tout un studio",
    description: "100 millions de dollars, c'est ce que coûterait normalement la production d'un pilote de qualité ciné, d'après Higgsfield, une boite basée à San...",
    link: 'https://higgsfield.ai/',
  },
  {
    id: '5',
    date: '15 février 2026',
    title: "Le Geek Code - L'ancêtre des bios Instagram (en ASCII)",
    description: "Imaginez un monde où votre identité entière tient sur trois lignes de caractères ASCII. Pas de selfie de votre gros nez, pas de bio Instagram mielleu...",
    link: 'https://fr.wikipedia.org/wiki/Geek_code',
  },
  {
    id: '4',
    date: '10 janvier 2026',
    title: 'Strava trahit la position du porte-avions Charles-de-Gaulle en pleine mer',
    description: "Le Monde a réussi à localiser le porte-avions nucléaire français Charles-de-Gaulle grâce à l'application de sport Strava. Un officier a enregistr...",
    link: 'https://www.lemonde.fr/international/article/2024/01/29/l-application-de-sport-strava-trahit-la-position-du-porte-avions-charles-de-gaulle_6213600_3210.html',
  },
  {
    id: '3',
    date: '05 décembre 2025',
    title: 'Claude Octopus - Faites débattre 3 IA sur votre code',
    description: "Claude Octopus, c'est un plugin Claude Code qui fait bosser trois IA ensemble sur le même problème. Codex pour l'implémentation, Gemini pour la rec...",
    link: 'https://github.com/vincelwt/claude-octopus',
  },
  {
    id: '2',
    date: '18 novembre 2025',
    title: 'Voicebox - Clonez des voix en local sans passer par le cloud',
    description: "Si vous cherchez un moyen de faire du clonage vocal en local sans filer vos fichiers audio à un service cloud, Voicebox devrait vous plaire. C'est un...",
    link: 'https://github.com/metademolab/voicebox',
  },
  {
    id: '1',
    date: '22 octobre 2025',
    title: "Des cafards cyborg pour inspecter les canalisations, bienvenue en 2025",
    description: "Des chercheurs de Singapour ont mis au point des cafards cyborg capables de tirer un petit chariot équipé d'une caméra dans des canalisations pour y...",
    link: 'https://www.science-et-vie.com/technos-et-futur/des-cafards-cyborgs-pour-inspecter-des-zones-dangereuses-67017.html',
  },
];
