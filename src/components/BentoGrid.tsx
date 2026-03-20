'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.99 }}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'row-span-1 rounded-3xl group/bento transition duration-500 p-6 bg-zinc-950 border border-white/[0.05] hover:border-white/[0.15] flex flex-col space-y-4 overflow-hidden relative',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover/bento:opacity-100 transition duration-700" />
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-500 relative z-10">
        {icon}
        <div className="font-playfair font-bold text-zinc-100 tracking-tight mb-2 mt-4 text-2xl">
          {title}
        </div>
        <div className="font-sans font-normal text-zinc-400 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
