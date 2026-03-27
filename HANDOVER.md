# 🚀 Passation de Projet : Portfolio Amine Agnaou

Ce document est destiné au prochain développeur (ou IA) pour reprendre le projet dans les meilleures conditions.

## 🛠️ Stack Technique
- **Framework** : Next.js 15 (App Router / Turbopack)
- **Styling** : Tailwind CSS v4 (Alpha/Beta - `@import "tailwindcss"`)
- **Animation** : Framer Motion (Animations complexes, Carrousels, Magnetic Buttons)
- **Gestion d'état** : React Context (`ThemeProvider`, `LanguageProvider`)

## ✨ Fonctionnalités Implémentées
### 1. Mode Sombre (Nacré Orange)
- Système de thème stocké en `localStorage` avec détection des préférences système.
- Bordures lumineuses via la classe `.nacre-border` dans `globals.css`.
- Script anti-flash dans `layout.tsx` pour une transition parfaite.

### 2. Internationalisation (FR / EN)
- Les textes sont centralisés dans `src/data/fr.ts` et `src/data/en.ts`.
- Les données complexes (Projets, Parcours, Veille) sont gérées par des "getters" dynamiques types `getProjects(lang)`.
- **Méthode d'ajout** : Pour ajouter un texte, modifier `src/data/fr.ts` et `src/data/en.ts`, puis utiliser le hook `useLanguage()`.

### 3. Expérience Mobile "App-Like"
- **Navigation** : `MobileTabBar.tsx` fixe en bas (Bottom Navigation). Le menu hamburger a été supprimé.
- **Interactions** : Carrousels horizontaux avec `snap-scroll` sur les pages Projets et Veille.
- **Performance** : Les filtres lourds (`blur`, `mix-blend-difference`, SVG noise) sont désactivés sur mobile via `hidden md:block` pour rester à 60 FPS.

## 🏗️ Structure des Fichiers Clés
- `src/components/ThemeProvider.tsx` : Logique de switch Dark/Light.
- `src/components/LanguageProvider.tsx` : Logique de switch FR/EN.
- `src/components/MobileTabBar.tsx` : Barre de navigation mobile.
- `src/app/globals.css` : Définition des styles nacrés et de la grille.
- `src/data/` : Contient toute la "base de données" textuelle du site.

## ✅ État du Build
Le projet a été validé par `npx next build`. Toutes les erreurs TypeScript et JSX ont été corrigées. 
**IMPORTANT** : Ne pas modifier les types de `MagneticButton.tsx` (il utilise `HTMLMotionProps<"div">`).

## ⏳ Prochaines Étapes (Backlog)
- [ ] **Ajustements Marges Mobile** : Peaufiner le rendu sur les très petits écrans (iPhone SE).
- [ ] **Transitions de page** : Améliorer les micro-animations entre les pages via `TransitionLink`.
- [ ] **Vercel** : Envoyer sur Vercel et configurer la variable d'environnement `NEXT_PUBLIC_SITE_URL` pour le sitemap.

---
*Dernière mise à jour : 27 mars 2026 par Gemini AI*
