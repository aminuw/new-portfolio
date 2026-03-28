'use client';

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

type SoundContextType = {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
  playTransition: () => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Hook personnalisé pour consommer le contexte facilement
export const useSoundDesign = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundDesign must be used within a SoundProvider');
  }
  return context;
};

export function SoundProvider({ children }: { children: React.ReactNode }) {
  // Toujours démarrer sur 'mute' pour respecter les règles d'UX modernes sur le web.
  const [isMuted, setIsMuted] = useState(true);
  
  // Audio Refs
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);
  const transitionAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialisation des objets Audio uniquement côté client (hydration safe)
    // IMPORTANT: Ces fichiers n'existent pas encore, ils devront être ajoutés par l'utilisateur
    try {
      hoverAudioRef.current = new Audio('/sounds/hover.mp3');
      hoverAudioRef.current.volume = 0.2; // Très discret
      
      clickAudioRef.current = new Audio('/sounds/click.mp3');
      clickAudioRef.current.volume = 0.4;
      
      transitionAudioRef.current = new Audio('/sounds/woosh.mp3');
      transitionAudioRef.current.volume = 0.5;
    } catch (error) {
      console.warn("Sound system initialization failed", error);
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  const playHover = useCallback(() => {
    if (isMuted || !hoverAudioRef.current) return;
    hoverAudioRef.current.currentTime = 0;
    hoverAudioRef.current.play().catch(e => console.log('Audio play blocked:', e));
  }, [isMuted]);

  const playClick = useCallback(() => {
    if (isMuted || !clickAudioRef.current) return;
    clickAudioRef.current.currentTime = 0;
    clickAudioRef.current.play().catch(e => console.log('Audio play blocked:', e));
  }, [isMuted]);

  const playTransition = useCallback(() => {
    if (isMuted || !transitionAudioRef.current) return;
    transitionAudioRef.current.currentTime = 0;
    transitionAudioRef.current.play().catch(e => console.log('Audio play blocked:', e));
  }, [isMuted]);

  // Écouter l'événement global de changement de page pour jouer le son
  useEffect(() => {
    const handleTransitionStart = () => playTransition();
    window.addEventListener('page-transition-start', handleTransitionStart);
    return () => window.removeEventListener('page-transition-start', handleTransitionStart);
  }, [playTransition]);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick, playTransition }}>
      {children}
    </SoundContext.Provider>
  );
}
