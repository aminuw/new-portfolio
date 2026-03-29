'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="w-full bg-zinc-950 dark:bg-zinc-900 text-white pt-24 pb-12 px-6 mt-32 rounded-t-[3rem] shadow-2xl dark:border-t dark:border-orange-500/20 dark:shadow-[0_-20px_60px_rgba(251,146,60,0.05)]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-[clamp(40px,12vw,120px)] leading-none font-playfair font-bold tracking-tighter mb-12 text-center text-zinc-100 italic transition-transform hover:scale-105 duration-700">
          {lang === 'fr' ? 'Discutons.' : "Let's talk."}
        </h2>

        <div className="w-full h-[1px] bg-white/10 mb-12" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 font-mono text-sm text-zinc-400">
            <a href="https://www.linkedin.com/in/amineagnaou/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/aminuw" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
          </div>
          <p className="text-zinc-500 font-mono text-xs text-center md:text-right">
            © {new Date().getFullYear()} Amine AGNAOU. <br className="md:hidden" />
            Basé à Orléans, France.

          </p>
          <p className="text-zinc-500 font-mono text-xs text-center md:text-right">
            Siret : 988 376 836 00017
          </p>
        </div>
      </div>
    </footer>
  );
}
