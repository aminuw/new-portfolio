# 🎵 Tutoriel : Ajouter du Sound Design à ton Portfolio

Ce portfolio intègre désormais un gestionnaire de son spatial pour améliorer l'UX globale avec des micro-interactions. Conformément aux meilleures pratiques, ce son est **désactivé par défaut** et un bouton de volume a été ajouté à la barre de navigation.

### 1. Activer le son (Où placer les fichiers)
Dans le code (`src/components/SoundProvider.tsx`), j'ai défini 3 pistes audios : `hover.mp3`, `click.mp3` et `woosh.mp3`.

Cependant, ces fichiers n'existent pas encore dans ton projet. Tu dois trouver ces petits bruits (idéalement courts et d'excellente qualité) et les placer aux endroits exacts suivants :
- `public/sounds/hover.mp3` (Joué au survol de la souris - durée idéale 0.2s)
- `public/sounds/click.mp3` (Joué au clic - durée idéale 0.2s)
- `public/sounds/woosh.mp3` (Joué pendant la vague noire de changement de page - durée idéale 0.8s)

### 2. Où trouver de bons sons gratuits ?
Pour l'aspect "Luxe" et "Clean" de ton portfolio, je te recommande d'éviter absolument les bruits agressifs (comme de gros "BIP"). Opte pour des sons de matières : papier, verre fin, bulles d'air.
- **Bruitages.eu** ou **Universal Soundbank** : Recherche *Bruits de page*, *Whoosh* ou *Click*.
- **Pixabay (Catégorie Audio)** : Cherche "UI sound" ou "UI hover". Tu trouveras des packs complets gratuits.

### 3. Ajouter l'effet sonore ailleurs que dans la Navbar
Tu veux ajouter un effet sonore quand on survole les projets ? C'est très simple !

Dans n'importe quel composant (par ex: `src/app/projets/page.tsx`), importe le Hook magique :
```tsx
import { useSoundDesign } from '@/components/SoundProvider';

export default function MonComposant() {
  const { playHover, playClick } = useSoundDesign();

  return (
    <div 
      onMouseEnter={playHover} 
      onClick={playClick}>
      Survole-moi !
    </div>
  );
}
```

> [!TIP]
> Si tu veux tester *immédiatement* que le bouton Mute/Unmute réagit bien, il te suffit de télécharger n'importe quel petit MP3 sur ton PC, de le renommer en `hover.mp3`, et de le glisser dans le dossier `public/sounds/` (il faudra créer le sous-dossier `sounds`). Recharge ta page, active le son en haut, et écoute le résultat.
