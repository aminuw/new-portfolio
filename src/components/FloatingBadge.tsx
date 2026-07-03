'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

export function FloatingBadge() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-6 left-6 z-40 hidden md:block"
    >
      <Link href="/contact">
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-full py-2 px-4 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-950 dark:text-zinc-100">
            {t.hero.available}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
