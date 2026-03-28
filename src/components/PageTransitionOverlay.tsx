'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export function PageTransitionOverlay() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;

    const handleStart = (e: CustomEvent) => {
      // Prevent multiple clicks restarting the animation
      if (document.getElementById('transition-overlay-active')) return;
      
      setIsActive(true);
      const targetHref = e.detail;
      timeout1 = setTimeout(() => {
        window.scrollTo(0, 0);
        router.push(targetHref);
      }, 800);

      // Trigger the exit animation after Next.js has started painting the new page
      timeout2 = setTimeout(() => {
        setIsActive(false);
      }, 1200);
    };

    const listener = handleStart as EventListener;
    window.addEventListener('page-transition-start', listener);
    return () => {
      window.removeEventListener('page-transition-start', listener);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [router]);

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div 
          id="transition-overlay-active"
          key="transition-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center w-screen h-screen"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none text-zinc-950 dark:text-zinc-950" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                fill="currentColor"
                initial={{ d: "M0 100 Q50 100 100 100 L100 100 L0 100 Z" }}
                animate={{ d: [
                   "M0 100 Q50 100 100 100 L100 100 L0 100 Z",
                   "M0 50 Q50 0 100 50 L100 100 L0 100 Z",
                   "M0 0 Q50 0 100 0 L100 100 L0 100 Z"
                ] }}
                exit={{ d: [
                   "M0 0 Q50 0 100 0 L100 100 L0 100 Z",
                   "M0 -100 Q50 0 100 -100 L100 0 L0 0 Z",
                   "M0 -100 Q50 -100 100 -100 L100 -100 L0 -100 Z"
                ] }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], times: [0, 0.5, 1] }}
              />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
