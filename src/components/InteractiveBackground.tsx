'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Use framer motion values for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring physics for that "smooth" delay effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  // Use a motion template to create a CSS mask dynamically
  const maskImage = useMotionTemplate`radial-gradient(${isClicked ? 500 : 350}px circle at ${smoothX}px ${smoothY}px, black, transparent)`;

  useEffect(() => {
    setIsMounted(true);
    
    // Set initial position to center of screen before mouse moves
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Handle touch events for mobile
    window.addEventListener('touchmove', (e) => {
      if (e.touches[0]) {
        mouseX.set(e.touches[0].clientX);
        mouseY.set(e.touches[0].clientY);
      }
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return <div className="fixed inset-0 z-[-1] bg-zinc-50 dark:bg-zinc-950 pointer-events-none" />;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      
      {/* Base static grid (very faint) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Reactive glowing grid - fully opaque but masked to only show in a circle around the mouse */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-100"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />
      
      {/* Colored Blur Orb — nacré orange in dark mode (Hidden on mobile for performance) */}
      <motion.div
        className="hidden md:block absolute rounded-full blur-[80px] bg-zinc-400/30 dark:bg-orange-500/20"
        style={{
          width: 500,
          height: 500,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 1.2 : 1,
          opacity: isClicked ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Vignet overlay to keep the edges slightly blended (Hidden on mobile to save GPU) */}
      <div className="hidden md:block absolute inset-0 shadow-[inset_0_0_100px_rgba(250,250,250,1)] dark:shadow-[inset_0_0_100px_rgba(10,10,10,1)] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
