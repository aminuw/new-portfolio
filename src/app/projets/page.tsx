'use client';

import { useState } from 'react';
import { getProjects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { lang, t } = useLanguage();
  const allProjects = getProjects(lang);

  const filters = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'tsJs', label: t.projects.filters.tsJs },
    { key: 'phpSql', label: t.projects.filters.phpSql },
    { key: 'design', label: t.projects.filters.design },
  ];

  const filteredProjects = allProjects.filter(project => {
    if (activeFilter === 'all') return true;
    const techsLower = project.techs.map(t => t.toLowerCase());
    if (activeFilter === 'tsJs') {
      return techsLower.some(t => t.includes('typescript') || t.includes('javascript'));
    }
    if (activeFilter === 'phpSql') {
      return techsLower.some(t => t.includes('php') || t.includes('sql') || t.includes('mysql'));
    }
    if (activeFilter === 'design') {
      return techsLower.some(t => t.includes('html') || t.includes('css') || t.includes('tailwind') || t.includes('framer'));
    }
    return true;
  });

  return (
    <div className="w-full pt-32 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto mb-16 md:px-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tighter mb-6">
          {t.projects.pageTitle} <span className="italic font-light text-zinc-500 dark:text-zinc-400">{t.projects.pageTitleItalic}</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 dark:text-zinc-400 uppercase tracking-widest max-w-xl mb-16 leading-relaxed">
          {t.projects.subtitle}
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-16">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2.5 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-zinc-950 dark:bg-orange-600 text-white shadow-md'
                  : 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 hover:shadow-sm'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div 
        className="max-w-7xl mx-auto md:px-12 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-12 md:pb-0 gap-6 md:gap-0 px-6 md:px-0 md:border-t border-zinc-200 dark:border-zinc-800"
        style={{ scrollbarWidth: 'none' }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row py-8 md:py-12 border border-zinc-200/80 md:border-0 md:border-b md:border-zinc-200 nacre-border hover:bg-zinc-50 dark:hover:bg-zinc-900/80 transition-colors px-6 md:px-8 cursor-pointer gap-6 md:gap-8 items-center min-w-[85vw] md:min-w-0 snap-center md:snap-none bg-white dark:bg-zinc-900/50 md:bg-transparent dark:md:bg-transparent rounded-3xl md:rounded-none shadow-xl shadow-zinc-200/20 md:shadow-none dark:shadow-none"
            >
              <div className="w-full md:w-1/4 flex flex-col justify-between self-stretch">
                <div>
                  <span className="font-mono text-zinc-400 dark:text-zinc-600 text-sm mb-4 block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-zinc-950 dark:text-zinc-100 group-hover:italic transition-all duration-300 mb-4">
                    {project.title}
                  </h2>
                </div>
                <div className="hidden md:flex items-center gap-2 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-orange-500 transition-colors mt-8">
                  <span className="font-mono text-xs uppercase tracking-widest">{t.projects.viewProject}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              <div className="w-full md:w-1/3 aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden relative order-first md:order-none mb-6 md:mb-0">
                {project.image ? (
                  <div className="w-full h-full relative bg-zinc-200/50 dark:bg-zinc-700/50 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                    <span className="font-mono text-sm text-zinc-400 absolute z-10 text-center px-4 bg-white/80 dark:bg-zinc-900/80 py-2.5 rounded-full backdrop-blur-md shadow-sm">Miniature : {project.title}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full absolute inset-0 opacity-20 filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 group-hover:scale-105 transition-transform duration-700 ease-out">
                    <span className="font-mono text-sm text-zinc-400">Placeholder</span>
                  </div>
                )}
              </div>
              
              <div className="w-full md:w-5/12 flex flex-col justify-center self-stretch">
                <p className="font-mono text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 items-center mt-auto">
                  {project.techs.map((tech) => (
                    <span key={tech} className="font-mono text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-full uppercase tracking-wider group-hover:border-zinc-400 dark:group-hover:border-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-zinc-100 transition-colors bg-zinc-50 dark:bg-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest"
            >
              {t.projects.noResults}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
