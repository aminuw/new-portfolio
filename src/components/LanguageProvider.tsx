'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fr } from '@/data/translations/fr';
import { en } from '@/data/translations/en';

type Lang = 'fr' | 'en';
type Translations = typeof fr;

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  t: fr,
  toggleLang: () => {},
});

const translations: Record<Lang, Translations> = { fr, en };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang;
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === 'fr' ? 'en' : 'fr';
    setLang(next);
    localStorage.setItem('lang', next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
