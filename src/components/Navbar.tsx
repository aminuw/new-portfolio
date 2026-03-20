'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/projets', label: 'Projets' },
    { href: '/competences', label: 'Expertise' },
    { href: '/parcours', label: 'Parcours' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <nav className="bg-white/70 backdrop-blur-md border border-zinc-200/50 shadow-sm rounded-full p-2 flex items-center gap-1 pointer-events-auto relative">
        <Link href="/" className="mr-4 ml-2 font-playfair text-xl font-bold tracking-tighter text-zinc-950 hover:text-zinc-600 transition-colors">
          Amine.
        </Link>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
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
            </Link>
          );
        })}
        
        {/* CV Link */}
        <div className="w-[1px] h-6 bg-zinc-200 mx-2" />
        <a
          href="/fichiers/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-5 py-2.5 text-[14px] font-semibold tracking-wide text-zinc-950 hover:bg-zinc-100 transition-colors duration-300 rounded-full z-10 flex items-center gap-2"
        >
          CV ↗
        </a>
      </nav>
    </header>
  );
}
