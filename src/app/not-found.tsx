'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="text-center flex flex-col items-center"
      >
        <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-6">{t.notFound.label}</span>
        <h1 className="text-[15vw] md:text-[10vw] leading-none font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tighter mb-4">
          {t.notFound.title} <span className="italic font-light text-zinc-400 dark:text-zinc-500">{t.notFound.titleItalic}</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 dark:text-zinc-400 mt-6 mb-12 max-w-md mx-auto leading-relaxed">
          {t.notFound.description}
        </p>
        
        <Link href="/" className="group relative inline-flex items-center justify-center px-8 py-4 bg-zinc-950 dark:bg-orange-600 text-white rounded-full text-sm font-medium tracking-wide hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-xl shadow-zinc-950/10 dark:shadow-orange-600/20">
          <span className="relative z-10 flex items-center gap-3">
            {t.notFound.cta}
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </span>
          <div className="absolute inset-0 bg-orange-600 dark:bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
        </Link>
      </motion.div>
    </div>
  );
}
