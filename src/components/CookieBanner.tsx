'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Afficher légèrement après le chargement
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: 50 }}
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="fixed bottom-6 right-6 z-[60] max-w-sm w-[calc(100%-3rem)] md:w-full bg-white border border-zinc-200 p-6 rounded-3xl shadow-2xl shadow-zinc-950/10"
        >
          <div className="flex items-start justify-between mb-4">
             <span className="font-playfair font-bold text-xl text-zinc-950 italic">Cookies.</span>
             <button onClick={() => setIsVisible(false)} className="text-zinc-400 hover:text-zinc-950 transition-colors">
               ✕
             </button>
          </div>
          <p className="font-mono text-xs text-zinc-500 leading-relaxed mb-6">
            Ce site utilise des cookies uniquement pour garantir une excellente expérience utilisateur. Aucune donnée n'est revendue.
            {' '}<Link href="/mentions-legales" className="underline underline-offset-2 hover:text-orange-600 transition-colors text-zinc-950">Mentions légales</Link>.
          </p>
          <div className="flex gap-4">
            <button onClick={acceptCookies} className="flex-1 bg-zinc-950 text-white font-mono text-[10px] uppercase tracking-widest py-3 rounded-xl hover:bg-orange-600 transition-colors">
              Accepter
            </button>
            <button onClick={() => setIsVisible(false)} className="flex-1 bg-zinc-50 text-zinc-600 font-mono text-[10px] uppercase tracking-widest py-3 rounded-xl border border-zinc-200 hover:bg-zinc-100 transition-colors">
              Refuser
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
