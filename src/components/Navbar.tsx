'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { TransitionLink } from '@/components/TransitionLink';
import { Sun, Moon, VolumeX, Volume2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';
import { useSoundDesign } from '@/components/SoundProvider';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLanguage();
  const { isMuted, toggleMute, playHover, playClick } = useSoundDesign();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/projets', label: t.nav.projects },
    { href: '/competences', label: t.nav.expertise },
    { href: '/parcours', label: t.nav.journey },
    { href: '/veille', label: t.nav.watch },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" }
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 md:px-0 pointer-events-none"
      >
        <nav className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm rounded-full p-2 flex items-center justify-between pointer-events-auto relative w-full max-w-[90vw] md:max-w-max md:justify-center">
          
          {/* Logo */}
          <TransitionLink 
            href="/" 
            onMouseEnter={playHover}
            onClick={playClick}
            className="mr-auto md:mr-4 ml-4 md:ml-2 font-playfair text-xl font-bold tracking-tighter text-zinc-950 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            Amine<span className="text-orange-600">.</span>
          </TransitionLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className={cn(
                    'relative px-5 py-2.5 text-[14px] font-semibold tracking-wide transition-colors duration-300 rounded-full z-10',
                    isActive ? 'text-white' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-zinc-950 dark:bg-orange-600 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </TransitionLink>
              );
            })}
            
            {/* Controls: CV, Lang, Theme */}
            <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-700 mx-2" />
            <a
              href="/fichiers/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2.5 text-[14px] font-semibold tracking-wide text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-300 rounded-full z-10"
            >
              {t.nav.cv}
            </a>
            {/* Mute Toggle */}
            <button
              onClick={() => { playClick(); toggleMute(); }}
              className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
              aria-label="Toggle Sound"
              title={isMuted ? 'Activer le son' : 'Couper le son'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-700 mx-2" />
            
            {/* Lang Toggle */}
            <button
              onClick={() => { playClick(); toggleLang(); }}
              className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
              aria-label="Toggle language"
              title={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
            >
              <span className="text-xs font-mono font-bold tracking-widest">{lang === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={() => { playClick(); toggleTheme(); }}
              className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* Mobile Menu Toggle Button - HIDDEN IN NEW MOBILE REFACTOR */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleLang}
              className="p-2 text-zinc-950 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle language"
            >
              <span className="text-[10px] font-mono font-bold">{lang === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-950 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            {/* The hamburger button has been removed in favor of the Bottom Tab Bar */}
          </div>
        </nav>
      </motion.header>

      {/* Mobile Full-Screen Menu Overlay - Disabled since we use Bottom Tab Bar */}
      {/* 
      <AnimatePresence>
        ... original mobile menu ...
      </AnimatePresence>
      */}


    </>
  );
}
