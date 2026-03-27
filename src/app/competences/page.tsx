'use client';

import { getSkills } from '@/data/skills';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function Skills() {
  const { lang, t } = useLanguage();
  const skillsList = getSkills(lang);

  return (
    <div className="w-full pt-32 pb-32 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto mb-32 md:px-12 text-center md:mt-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tighter mb-8">
          <span className="italic font-light text-zinc-600 dark:text-zinc-400">{t.competences.titleItalic}</span> {t.competences.title}
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 dark:text-zinc-400 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed relative inline-block">
          <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-orange-600/50 hidden md:block"></span>
          {t.competences.subtitle}
          <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-orange-600/50 hidden md:block"></span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto md:px-12 flex flex-col gap-32">
        {skillsList.map((skillGroup, groupIdx) => (
          <div key={skillGroup.category} className="flex flex-col">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-zinc-950 dark:border-zinc-300 pb-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tight">
                {skillGroup.category}<span className="text-orange-600">.</span>
              </h2>
              <p className="font-mono text-xs md:text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-4 md:mt-0 max-w-sm text-left md:text-right leading-relaxed">
                {skillGroup.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-4">
              {skillGroup.items.map((item, idx) => (
                <div key={item.name} className="flex flex-col justify-center py-8 border-b border-zinc-200/80 nacre-border group hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-default">
                  <div className="flex justify-between items-end mb-4">
                    <span className="font-playfair font-bold text-2xl md:text-3xl text-zinc-950 dark:text-zinc-100 group-hover:italic transition-all duration-300">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-300 dark:text-zinc-600 group-hover:text-orange-600 transition-colors font-bold pb-1">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase leading-relaxed">
                    {item.keywords}
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto md:px-12 mt-32 text-center border-t border-zinc-200 dark:border-zinc-800 pt-24">
        <h3 className="text-3xl font-playfair font-bold text-zinc-950 dark:text-zinc-100 mb-6 tracking-tight">{t.competences.ctaTitle}<span className="text-orange-600">.</span></h3>
        <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 mb-8 max-w-lg mx-auto leading-relaxed">
          {t.competences.ctaText}
        </p>
        <Link href="/parcours" className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-950 dark:border-zinc-300 text-zinc-950 dark:text-zinc-100 rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-zinc-950 dark:hover:bg-orange-600 hover:text-white dark:hover:border-orange-600 transition-colors duration-300">
          {t.competences.ctaButton}
        </Link>
      </div>
    </div>
  );
}
