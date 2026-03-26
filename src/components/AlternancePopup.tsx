'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function AlternancePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si le popup a déjà été vu pendant cette session
    const hasSeenPopup = sessionStorage.getItem('alternance-popup-seen');
    if (!hasSeenPopup) {
      setTimeout(() => setIsVisible(true), 2500);
    }
  }, []);

  const closePopup = () => {
    sessionStorage.setItem('alternance-popup-seen', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-[70] flex items-center justify-center bg-zinc-950/40 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="w-full max-w-xl bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative border border-zinc-200 overflow-hidden"
          >
            {/* Background minimal decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

            <button 
              onClick={closePopup}
              className="absolute top-6 right-8 text-zinc-400 hover:text-zinc-950 transition-colors z-20 text-xl"
            >
              ✕
            </button>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                 <div className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </div>
                 <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold border border-zinc-200 px-3 py-1 rounded-full bg-zinc-50">Disponibilité</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-zinc-950 tracking-tight leading-[1.1] mb-8">
                Je suis actuellement à la recherche d'une <span className="italic font-light text-orange-600">Alternance.</span>
              </h2>

              <p className="font-mono text-sm md:text-base text-zinc-600 leading-relaxed mb-10 border-l-[3px] border-zinc-950 pl-6 py-2">
                Si vous avez une opportunité au sein de votre entreprise, ou si mon profil vous intéresse pour rejoindre votre équipe, n'hésitez pas à me contacter !
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link onClick={closePopup} href="/contact" className="flex-1 text-center bg-zinc-950 text-white font-mono text-xs uppercase tracking-widest py-5 rounded-2xl hover:bg-orange-600 transition-colors shadow-lg shadow-zinc-950/20">
                  Me Contacter
                </Link>
                <button onClick={closePopup} className="flex-1 text-center bg-zinc-50 text-zinc-600 border border-zinc-200 font-mono text-xs uppercase tracking-widest py-5 rounded-2xl hover:bg-zinc-100 transition-colors">
                  Plus tard
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
