'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "100%", scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-4 top-10 bottom-4 md:inset-x-auto md:w-[80vw] md:max-w-5xl md:left-1/2 md:-translate-x-1/2 z-[101] bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800"
          >
            {/* Header / Top bar */}
            <div className="flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 transition-colors"
                aria-label={t.projectModal.close}
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-6 md:p-10 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Left Column: Details */}
                <div className="flex flex-col gap-8">
                  {/* Context */}
                  <div>
                    <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
                      {t.projectModal.context}
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans text-sm md:text-base">
                      {project.context}
                    </p>
                  </div>

                  {/* Goal */}
                  <div>
                    <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
                      {t.projectModal.goal}
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans text-sm md:text-base">
                      {project.goal}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">
                      {t.projectModal.technologies}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span key={tech} className="font-mono text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-full uppercase tracking-wider bg-zinc-50 dark:bg-zinc-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-zinc-950 dark:bg-orange-600 text-white rounded-xl font-medium tracking-wide hover:bg-zinc-800 dark:hover:bg-orange-500 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                        {t.projectModal.viewLive}
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 rounded-xl font-medium tracking-wide hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-300"
                      >
                        <Github size={18} />
                        {t.projectModal.viewGithub}
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Screenshots */}
                <div className="flex flex-col gap-6">
                  {project.screens && project.screens.length > 0 ? (
                    project.screens.map((screen, idx) => (
                      <div key={idx} className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
                        {screen ? (
                          <Image src={screen} alt={`${project.title} screenshot ${idx + 1}`} fill className="object-cover" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-zinc-400">Placeholder {idx + 1}</div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
                      {project.image ? (
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-zinc-400">Placeholder</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
