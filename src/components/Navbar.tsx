'use client';

import Link from 'next/link'; // Corrected import for Link
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { TransitionLink } from '@/components/TransitionLink';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close the mobile menu automatically when the pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/projets', label: 'Projets' },
    { href: '/competences', label: 'Expertise' },
    { href: '/parcours', label: 'Parcours & Certifications' },
    { href: '/veille', label: 'Veille' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 md:px-0 pointer-events-none">
        <nav className="bg-white/70 backdrop-blur-md border border-zinc-200/50 shadow-sm rounded-full p-2 flex items-center justify-between pointer-events-auto relative w-full max-w-[90vw] md:max-w-max md:justify-center">
          
          {/* Logo */}
          <TransitionLink href="/" className="mr-auto md:mr-4 ml-4 md:ml-2 font-playfair text-xl font-bold tracking-tighter text-zinc-950 hover:text-zinc-600 transition-colors">
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
                  className={cn(
                    'relative px-5 py-2.5 text-[14px] font-semibold tracking-wide transition-colors duration-300 rounded-full z-10',
                    isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-950'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-zinc-950 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </TransitionLink>
              );
            })}
            
            {/* CV Link */}
            <div className="w-[1px] h-6 bg-zinc-200 mx-2" />
            <a
              href="/fichiers/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2.5 text-[14px] font-semibold tracking-wide text-zinc-500 hover:text-zinc-950 transition-colors duration-300 rounded-full z-10"
            >
              CV
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden p-2 mr-2 text-zinc-950 hover:bg-zinc-100 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-zinc-50/95 backdrop-blur-xl flex flex-col justify-center items-center pointer-events-auto"
          >
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 p-3 bg-zinc-100 rounded-full text-zinc-950 hover:bg-zinc-200 transition-colors outline-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-8 w-full px-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-4xl md:text-5xl font-playfair font-bold tracking-tighter transition-colors',
                      isActive ? 'text-zinc-950 italic' : 'text-zinc-400 hover:text-zinc-600'
                    )}
                  >
                    {link.label}
                  </TransitionLink>
                );
              })}
              
              <div className="w-12 h-[1px] bg-zinc-300 my-4" />
              
              <a
                href="/fichiers/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-mono tracking-widest uppercase text-zinc-500 hover:text-zinc-950 transition-colors"
              >
                Télécharger le CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
