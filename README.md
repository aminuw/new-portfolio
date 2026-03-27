# Portfolio - Amine Agnaou

Ce projet est le portfolio personnel d'Amine Agnaou, Développeur Front-end & Mobile.

## 🕰️ Historique du Projet & Direction Artistique

### Phase 1 : Initialisation ("Tech Dark Mode")
Le projet a initialement été généré via `create-next-app` avec une architecture App Router (Next.js 15), TypeScript et Tailwind CSS. 
La première itération utilisait un thème sombre profond (`zinc-950`), un design inspiré des interfaces Apple/Vercel basé sur une grille asymétrique (**BentoGrid**).

### Phase 2 : Refonte "Editorial Minimalist"
Une refonte majeure a été effectuée pour faire évoluer le design vers une esthétique de **Studio Créatif Premium** :
- **Thème :** Passage en mode clair (`Light Mode` sur fond `zinc-50`) avec une subtile grille de fond (`bg-grid-pattern`).
- **Typographie :** Utilisation massive et surdimensionnée de **Playfair Display** (Serif) pour les titres en contraste avec **Inter** et des polices **Monospace** pour les données et libellés techniques.
- **Micro-interactions :** Animations fluides avec Framer Motion (Transitions de pages de bas en haut, capsule de navigation active).

---

## 🛠️ Stack Technique

- **Framework :** [Next.js 15](https://nextjs.org/) (App Router, Server/Client components)
- **Langage :** [TypeScript](https://www.typescriptlang.org/)
- **Styling :** [Tailwind CSS](https://tailwindcss.com/) (système utilitaire, variables CSS)
- **Animations :** [Framer Motion](https://www.framer.com/motion/) (transitions de pages et hover effects)
- **Smooth Scrolling :** [Lenis](https://lenis.studiofreight.com/) (pour une expérience de défilement fluide "Butter smooth")
- **Icônes :** [Lucide React](https://lucide.dev/)

---

## 📂 Architecture des Fichiers

Voici une cartographie précise de l'architecture pour toute IA ou développeur reprenant le projet :

### `src/app/` (Next.js App Router)
- `layout.tsx` : Le layout de base. Il injecte les polices (Inter, Playfair), le thème global (`bg-zinc-50 text-zinc-950`), la `Navbar`, le `Footer` et englobe l'application dans le composant `SmoothScroll`.
- `page.tsx` : La **Page d'Accueil**. Textes géants, liste des services (Expertise) et derniers projets sélectionnés.
- `template.tsx` : Composant de **Transition de Page**. Utilise Framer Motion pour animer l'apparition du contenu (`y: 20` to `y: 0`, opacity fade) à chaque navigation.
- `globals.css` : Configuration globale CSS. Contient les modifications de la scrollbar, les variables de couleurs Tailwind, et génère dynamiquement la classe utilitaire `.bg-grid-pattern`.
- `/competences/page.tsx` : Page listant l'expertise technique avec de grandes listes épurées et des tags.
- `/projets/page.tsx` : Page listant tous les projets avec images ou grandes typos.
- `/parcours/page.tsx` : Timeline minimaliste des expériences professionnelles et études.
- `/contact/page.tsx` : Formulaire de contact et lien "mailto:".

### `src/components/` (Composants Réutilisables)
- `Navbar.tsx` : Menu de navigation sous forme de "Pilule flottante" translucide. Il détecte la route active pour afficher une capsule de fond noir derrière le lien cliqué via `layoutId` (Framer Motion). Contient le lien d'ouverture du CV.
- `Footer.tsx` : Faux Footer immense et noir (`bg-zinc-950`) typique de l'approche éditoriale "Discutons.", avec les liens réseaux (GitHub, LinkedIn).
- `SmoothScroll.tsx` : Wrapper initialisant l'instance `Lenis` via `requestAnimationFrame` pour assurer un scroll d'inertie qualitatif.

### `src/data/` (Sources de données isolées)
Les contenus textuels d'Amine ont été extraits des pages pour être gérés ici :
- `projects.ts` : Array des projets (ERP/CRM, Factures, Portfolio).
- `skills.ts` : Catégories de technologies (Web, Mobile, BDD, Design).
- `experience.ts` : Formations et emplois (SmartUp, BTS SIO).

### `public/` (Ressources statiques)
- `/fichiers/cv.pdf` : Le CV en version PDF appelé par le bouton de la Navbar.

---

## 🚀 Lancement & Commandes

```bash
# Lancer le serveur de développement (http://localhost:3000)
npm run dev

# Compiler l'application pour la production
npm run build

# Démarrer la version de production
npm start
```

## 📝 À l'attention de l'IA (Contexte lors des modifications)
- **Le Minimalisme est clé :** Lors de l'ajout d'une section, ne chargez pas le design. Utilisez beaucoup d'espace blanc (margins massives), des bordures fines (`border-zinc-200`) et jouez sur la taille de typo (jusqu'à `text-[12vw]` pour les héros) plutôt que sur des couleurs.
- **Composants "Client" :** Si vous ajoutez des animations complexes liées au scroll ou aux états interactifs, n'oubliez pas d'ajouter `'use client'` en haut des fichiers.
