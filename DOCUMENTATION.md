# 📁 Documentation du Projet — Portfolio Amine Agnaou

> **Stack** : Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion  
> **Dernière mise à jour** : 26 mars 2026

---

## 1. Architecture du Projet

```
portfolio/
├── public/
│   ├── fichiers/              # Assets statiques (CV PDF + logos PNG certifications)
│   │   ├── cv.pdf
│   │   ├── HTML.png
│   │   ├── JAVA.png
│   │   ├── JQUERY.png
│   │   ├── JS.png
│   │   ├── PHP.png
│   │   └── TCPIP.png
│   └── *.svg                  # Icônes par défaut de Next.js (non utilisées)
│
├── src/
│   ├── app/                   # Pages (App Router Next.js)
│   │   ├── layout.tsx         # Layout racine (polices, metadata, providers)
│   │   ├── template.tsx       # Animations de transition entre pages
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── globals.css        # Styles globaux + variables Tailwind
│   │   ├── icon.svg           # Favicon SVG (logo AA. noir/orange)
│   │   ├── favicon.ico        # Favicon classique (fallback)
│   │   ├── competences/       # Page "Expertise technique"
│   │   ├── parcours/          # Page "Parcours & Certifications"
│   │   ├── projets/           # Page "Galerie de projets"
│   │   ├── veille/            # Page "Veille Tech" (Roadmap)
│   │   ├── contact/           # Page "Contact" (Split screen + formulaire)
│   │   └── mentions-legales/  # Page "Mentions Légales"
│   │
│   ├── components/            # Composants réutilisables
│   │   ├── Navbar.tsx         # Barre de navigation flottante (glassmorphism)
│   │   ├── Footer.tsx         # Pied de page avec CTA "Discutons."
│   │   ├── BentoGrid.tsx      # Grille Bento pour la section Expertise
│   │   ├── TransitionLink.tsx # Liens avec animation de transition (page exit)
│   │   ├── SmoothScroll.tsx   # Provider Lenis pour le défilement fluide
│   │   ├── InteractiveBackground.tsx # Grille de fond interactive
│   │   ├── CookieBanner.tsx   # Bannière cookies (bas-droite, localStorage)
│   │   ├── AlternancePopup.tsx # Popup de recherche d'alternance (sessionStorage)
│   │   └── ui/
│   │       └── Badge.tsx      # Badge réutilisable (tags de technos)
│   │
│   ├── data/                  # Sources de données statiques
│   │   ├── skills.ts          # Compétences classées par catégorie
│   │   ├── experience.ts      # Expériences professionnelles (2 entrées)
│   │   ├── certifications.ts  # 6 certifications OpenClassrooms
│   │   ├── projects.ts        # 4 projets (CRM, Factures, Candi-Pilot, Portfolio)
│   │   └── veille.ts          # 6 articles de veille (Oct 2025 → Mars 2026)
│   │
│   └── lib/
│       └── utils.ts           # Utilitaire `cn()` pour fusionner des classes CSS
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

---

## 2. Pages du Site

| Route | Fichier | Description |
|---|---|---|
| `/` | `app/page.tsx` | Hero asymétrique + À propos sticky + Bento Expertise + Sélection de projets |
| `/competences` | `app/competences/page.tsx` | Grille éditoriale de compétences (sans jauges) |
| `/parcours` | `app/parcours/page.tsx` | Timeline d'expériences + grille de certifications avec images |
| `/projets` | `app/projets/page.tsx` | Galerie de projets (grille de cartes) |
| `/veille` | `app/veille/page.tsx` | Roadmap sinueuse (S-Curve orange) Oct 2025 → Mars 2026 |
| `/contact` | `app/contact/page.tsx` | Split screen : grande typographie + formulaire minimaliste |
| `/mentions-legales` | `app/mentions-legales/page.tsx` | Éditeur, hébergement, RGPD, cookies |

---

## 3. Dépendances Clés

| Package | Version | Rôle |
|---|---|---|
| `next` | 16.2.0 | Framework React SSR / SSG |
| `react` | 19.2.4 | Librairie UI |
| `tailwindcss` | 4.x | Styles utilitaires |
| `framer-motion` | 12.38.0 | Animations et transitions de pages |
| `lenis` | 1.3.19 | Défilement fluide (smooth scroll) |
| `lucide-react` | 0.577.0 | Icônes SVG (Menu, X, etc.) |
| `clsx` + `tailwind-merge` | — | Fusion condtionnelle de classes CSS |

---

## 4. 🔴 Éléments Manquants (À ajouter impérativement)

### 4.1 Images des Projets
Les 4 projets affichent actuellement des **placeholders gris**. Il faut créer le dossier et y ajouter des screenshots :
```
public/images/projects/
├── crm.jpg          ← Screenshot de l'app ERP/CRM
├── factures.jpg     ← Screenshot du gestionnaire de factures
├── candi-pilot.jpg  ← Screenshot de Candi-Pilot
└── portfolio.jpg    ← Screenshot de ce portfolio
```

> **Astuce** : Prenez des screenshots en 16:9 (1920×1080) depuis votre navigateur. Pour un rendu premium, ajoutez un léger fond dégradé derrière la fenêtre du navigateur.

### 4.2 Liens des Certifications
Les liens des 6 certifications pointent tous vers `"#"`. Il faut les remplacer par les vrais liens OpenClassrooms de vos certificats.

Fichier : `src/data/certifications.ts`

### 4.3 CV à jour
Vérifiez que le fichier `public/fichiers/cv.pdf` est bien votre CV actuel et à jour.

### 4.4 Formulaire de Contact non fonctionnel
Le formulaire sur `/contact` est **purement visuel** actuellement. Il n'envoie rien. Options :
- **EmailJS** (gratuit) : envoi d'emails directement depuis le client
- **Next.js Server Actions** : route API côté serveur pour recevoir les messages
- **Formspree** : service tiers plug-and-play

### 4.5 Page 404
Il n'y a **aucune page 404 personnalisée**. Si un utilisateur tape une mauvaise URL, Next.js affiche une page par défaut très laide.

Créer : `src/app/not-found.tsx`

---

## 5. 🟡 Suggestions d'Amélioration

### 5.1 SEO & Métadonnées par page
Actuellement, toutes les pages partagent le **même titre d'onglet** ("Amine Agnaou — Portfolio"). Il faut ajouter des métadonnées spécifiques par page :

```typescript
// Exemple dans src/app/competences/page.tsx
export const metadata = {
  title: 'Expertise — Amine Agnaou',
  description: 'Mes compétences techniques...',
};
```

Pages à mettre à jour :
- `/competences` → "Expertise — Amine Agnaou"
- `/parcours` → "Parcours — Amine Agnaou"
- `/veille` → "Veille Tech — Amine Agnaou"
- `/contact` → "Contact — Amine Agnaou"
- `/projets` → "Projets — Amine Agnaou"

### 5.2 Responsive Mobile
Le site a été conçu pour desktop en priorité. Quelques zones à revoir :
- **Roadmap Veille** : Les courbes S ne sont pas visibles sur mobile, vérifier le rendu
- **Hero** : La taille du texte `[12vw]` peut être trop grande sur petit écran
- **Navbar mobile** : Fonctionne mais pourrait bénéficier de micro-animations

### 5.3 Performances & Optimisation
- Remplacer les images `.jpg` par du format **WebP** (30-50% plus léger)
- Ajouter l'attribut `sizes` sur les composants `<Image>` de Next.js
- Implémenter du **lazy loading** sur les sections basses de la home page

### 5.4 Accessibilité (A11y)
- Ajouter des `aria-label` sur les liens iconiques (réseaux sociaux dans le footer)
- Vérifier les contrastes de couleur sur les textes gris clairs (`text-zinc-400`)
- Ajouter un `<h1>` unique par page (actuellement OK)

### 5.5 Analytics
Intégrer un outil de suivi pour mesurer le trafic :
- **Vercel Analytics** (gratuit avec Vercel) : `npm install @vercel/analytics`
- **Google Analytics 4** via Google Tag Manager

### 5.6 Open Graph & Partage Social
Ajouter une image OG (`og:image`) pour améliorer l'apparence du lien lors du partage sur LinkedIn, Twitter, Discord, etc. :
- Créer une image 1200×630px avec votre nom + logo AA
- L'ajouter dans `public/og-image.jpg`
- La référencer dans `layout.tsx` > `metadata.openGraph`

---

## 6. 🟢 Suggestions d'Ajouts (Pour aller plus loin)

| Fonctionnalité | Difficulté | Impact |
|---|---|---|
| **Mode sombre (Dark Mode)** | ⭐⭐⭐ | Très attendu, valorise le design |
| **Animations au scroll (GSAP/Framer)** | ⭐⭐ | Les textes apparaîtraient en glissant |
| **Blog technique** | ⭐⭐⭐ | Montre votre expertise, booste le SEO |
| **Témoignages / Recommandations** | ⭐ | Section avec citations de collègues/profs |
| **Compteur de visites** | ⭐ | Badge discret en footer |
| **Multilangue (FR/EN)** | ⭐⭐⭐⭐ | Ouvre à l'international |
| **Page projet détaillée** | ⭐⭐ | Route dynamique `/projets/[id]` avec galerie |
| **Sitemap.xml** | ⭐ | Améliore l'indexation Google |
| **robots.txt** | ⭐ | Contrôle le crawling des moteurs de recherche |
| **PWA (Progressive Web App)** | ⭐⭐⭐ | Installable sur mobile, icône sur l'écran d'accueil |

---

## 7. Commandes Utiles

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Démarrer en production
npm run start

# Linter
npm run lint
```

---

## 8. Déploiement

Le site est configuré pour **Vercel** (hébergeur mentionné dans les mentions légales).

```bash
# Déployer via Vercel CLI
npx vercel --prod
```

Ou connectez votre dépôt GitHub `aminuw/new-portfolio` directement sur [vercel.com](https://vercel.com).
