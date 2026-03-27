'use client';

import { getExperience } from '@/data/experience';
import { getCertifications } from '@/data/certifications';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';

export default function Parcours() {
  const { lang, t } = useLanguage();
  const experienceList = getExperience(lang);
  const certificationsList = getCertifications(lang);
  return (
    <div className="w-full pt-32 pb-32 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto mb-24 md:px-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tighter mb-8">
          <span className="italic font-light text-zinc-600 dark:text-zinc-400">{t.parcours.titleItalic}</span> &<br className="md:hidden" /> {t.parcours.title}
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 dark:text-zinc-400 uppercase tracking-widest max-w-2xl leading-relaxed">
          {t.parcours.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:px-12 flex flex-col border-t-[3px] border-zinc-950 dark:border-orange-500/30 pt-2">
        {experienceList.map((exp, index) => (
          <div key={index} className="group flex flex-col md:flex-row py-16 border-b border-zinc-200/80 nacre-border hover:bg-white dark:hover:bg-zinc-900 transition-all duration-500 px-4 md:px-12 cursor-default gap-8 md:gap-24">
            <div className="w-full md:w-1/3 flex flex-col justify-start">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-300 group-hover:bg-orange-600 group-hover:w-16 transition-all duration-500"></span>
                {exp.period}
              </span>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-zinc-950 dark:text-zinc-100 group-hover:italic transition-all duration-500 leading-tight">
                {exp.role}
              </h2>
              <span className="font-mono text-xs text-orange-600 font-bold mt-6 uppercase tracking-widest block">
                {exp.company}
              </span>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <p className="font-mono text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto md:px-12 mt-40">
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tighter mb-16">
          {t.parcours.certTitle} <span className="italic font-light text-zinc-500 dark:text-zinc-400">{t.parcours.certTitleItalic}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {certificationsList.map((cert, index) => (
            <div key={index} className="group bg-white dark:bg-zinc-900 border border-zinc-200 nacre-border hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors duration-500 flex flex-col cursor-default">
              <div className="w-full h-80 bg-zinc-50 dark:bg-zinc-800 relative overflow-hidden flex items-center justify-center p-8">
                {cert.image ? (
                  <div className="w-full h-full relative bg-white dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700 shadow-sm flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-700 ease-in-out p-6">
                    <Image src={cert.image} alt={cert.title} fill className="object-contain p-8" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-white dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700 flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-700">
                    <span className="font-mono text-xs text-zinc-400">Image placeholder</span>
                  </div>
                )}
              </div>
              
              <div className="p-10 flex flex-col flex-grow border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1 rounded-full">{cert.date}</span>
                  <span className="font-mono text-[10px] text-zinc-950 dark:text-zinc-100 font-bold uppercase tracking-[0.2em]">{cert.issuer}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-zinc-950 dark:text-zinc-100 mb-6 group-hover:italic transition-all duration-300">
                  {cert.title}
                </h3>
                
                <p className="font-mono text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">
                  {cert.description}
                </p>
                
                {cert.skills && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.skills.map((skill, imgIdx) => (
                      <span key={imgIdx} className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 px-3 py-1.5 border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
