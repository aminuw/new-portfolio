'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Si la session possède déjà l'information, on coupe directement le rendu sans animer
    if (sessionStorage.getItem('hasSeenPreloader')) {
      setIsLoading(false);
      return;
    }

    // Empêcher le scroll du body pendant le chargement
    document.body.style.overflow = 'hidden';

    // Compteur artificiel dynamique de 0 à 100
    let current = 0;
    const interval = setInterval(() => {
      // Ralentissement de la vitesse : incrément plus faible, tick plus long
      current += Math.floor(Math.random() * 6) + 2; // de +2 à +7 par tick
      
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        
        // Pause majestueuse une fois arrivé à 100% avant de lever le rideau
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('hasSeenPreloader', 'true');
          // Restaurer le scroll
          document.body.style.overflow = '';
        }, 800); 
      }
      setPercentage(current);
    }, 80); // 80ms par tick au lieu de 60ms

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
           key="preloader"
           className="preloader-container fixed inset-0 z-[99999] bg-zinc-950 flex flex-col items-center justify-center pointer-events-auto"
           initial={{ y: "0%" }}
           // Effet slide-up (rideau qui se lève) extrêmement fluide avec courbe de Bézier personnalisée
           exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Ligne très fine de progression */}
          <motion.div 
            className="absolute top-0 left-0 h-1 bg-white dark:bg-orange-600"
            style={{ width: `${percentage}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />

          <div className="relative overflow-hidden flex flex-col items-center">
            {/* Chiffre Luxe */}
            <motion.h1 
               className="font-playfair text-[25vw] md:text-[18rem] leading-none text-zinc-100 font-medium tracking-tighter"
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {percentage}
            </motion.h1>
          </div>
          
          {/* Signature de marque */}
          <motion.div 
             className="absolute bottom-12 uppercase tracking-[0.4em] text-xs font-mono text-zinc-500"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
          >
            Amine Agnaou
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
