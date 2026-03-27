'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getProjects } from '@/data/projects';
import MagneticButton from '@/components/MagneticButton';
import { useLanguage } from '@/components/LanguageProvider';

export default function Home() {
  const { lang, t } = useLanguage();
  const projectsList = getProjects(lang);

  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col px-4 md:px-12 relative pt-32 pb-8">
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-[12vw] md:text-[8vw] leading-[0.9] font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tighter mb-8 max-w-5xl"
          >
            {t.hero.name}<span className="text-orange-600">.</span> <br />
            <span className="italic font-light text-zinc-500 dark:text-zinc-400 text-[8vw] md:text-[5vw] block mt-4 md:mt-2">{t.hero.tagline}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-12 max-w-2xl"
          >
            <MagneticButton>
              <Link href="/contact" className="shrink-0 inline-flex items-center justify-center px-8 py-4 bg-zinc-950 dark:bg-orange-600 text-white rounded-full text-sm font-medium tracking-wide hover:bg-orange-600 dark:hover:bg-orange-500 transition-colors duration-300">
                {t.hero.cta}
              </Link>
            </MagneticButton>
            <p className="font-mono text-xs md:text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-widest leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>
        </div>

        {/* Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800 mt-auto pt-6 pb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest"
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </div>
            {t.hero.available}
          </div>
          <div>{t.hero.location}</div>
          <div className="hidden md:block">{t.hero.scroll}</div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start relative">
          <div className="md:w-1/3 md:sticky md:top-32">
            <h2 className="text-sm font-mono text-zinc-600 dark:text-zinc-400 font-medium uppercase tracking-widest mb-8">{t.about.label}<span className="text-orange-600">.</span></h2>
            <h3 className="text-4xl md:text-6xl font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tight leading-[1.1] mb-6">
              {t.about.title1} <br className="hidden md:block" />
              <span className="italic font-light text-zinc-500 dark:text-zinc-400">{t.about.title2}</span><br className="hidden md:block" /> {t.about.title3}
            </h3>
          </div>
          <div className="md:w-2/3 flex flex-col font-mono text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-12 border-t border-zinc-200 dark:border-zinc-800"
            >
              <p>{t.about.p1}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-12 border-t border-zinc-200 dark:border-zinc-800"
            >
              <p>{t.about.p2}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-12 border-t border-zinc-200 dark:border-zinc-800"
            >
              <p>{t.about.p3}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-sm font-mono text-zinc-600 dark:text-zinc-400 font-medium uppercase tracking-widest mb-16 text-center md:text-left">{t.expertise.label}<span className="text-orange-600">.</span></h2>
        <div className="mb-24 md:w-2/3 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tight mb-8">
            {t.expertise.title}
          </h2>
          <p className="font-mono text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mx-auto md:mx-0">
            {t.expertise.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm">
          {t.expertise.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-10 md:p-14 flex flex-col justify-between h-72 md:h-80 group hover:bg-zinc-50/80 dark:hover:bg-zinc-800 transition-all duration-500 cursor-default hover:scale-[1.03]"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-full border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-300 dark:text-zinc-600 font-mono text-xl group-hover:scale-125 group-hover:text-orange-500 group-hover:border-orange-200 dark:group-hover:border-orange-800 group-hover:bg-orange-50 dark:group-hover:bg-orange-950 transition-all duration-500">✧</div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 rounded-full px-3 py-1 bg-white dark:bg-zinc-800 shadow-sm group-hover:text-orange-600 group-hover:border-orange-300 dark:group-hover:border-orange-700 group-hover:bg-orange-50 dark:group-hover:bg-orange-950 transition-all duration-500">{service.id}</span>
              </div>
              <div className="mt-auto">
                <p className="font-mono text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mb-4">{service.desc}</p>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 group-hover:italic transition-all duration-300">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-sm font-mono text-zinc-600 dark:text-zinc-400 font-medium uppercase tracking-widest">{t.projects.label}<span className="text-orange-600">.</span></h2>
          <Link href="/projets" className="text-sm font-mono text-zinc-950 dark:text-zinc-100 uppercase tracking-widest border-b border-zinc-950 dark:border-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 hover:border-zinc-500 transition-colors pb-1">
            {t.projects.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-32">
          {projectsList.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
              className={`group flex flex-col cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="w-full aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden relative mb-8 shadow-sm">
                {project.image ? (
                  <div className="w-full h-full relative bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-700 ease-in-out">
                    <span className="font-mono text-sm text-zinc-400 absolute z-10 text-center px-4 bg-white/80 dark:bg-zinc-900/80 py-2 rounded-full backdrop-blur-sm">Image : {project.title}</span>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-700 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                    <span className="font-mono text-sm text-zinc-400">Image placeholder</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 group-hover:italic transition-all duration-300">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="before:absolute before:inset-0">
                      {project.title}
                    </a>
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-600 text-xl">↗</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techs.slice(0, 3).map(tag => (
                    <span key={tag} className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 px-3 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
