import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <div className="w-full pt-32 pb-16 px-4 selection:bg-zinc-950 selection:text-white min-h-screen">
      <div className="max-w-7xl mx-auto mb-24 md:px-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-6">
          Mes <span className="italic font-light">Projets.</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-xl">
          Une sélection de travaux alliant design épuré, performances techniques et expérience utilisateur fluide.
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:px-12 flex flex-col border-t border-zinc-200">
        {projects.map((project, index) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row py-12 border-b border-zinc-200 hover:bg-zinc-100/50 transition-colors px-4 md:px-8 cursor-pointer gap-8 block">
            <div className="w-full md:w-1/3 flex flex-col justify-between">
              <div>
                <span className="font-mono text-zinc-400 text-sm mb-4 block">0{index + 1}</span>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-zinc-950 group-hover:italic transition-all duration-300 mb-4">
                  {project.title}
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-2 text-zinc-400 group-hover:text-zinc-950 transition-colors">
                <span className="font-mono text-xs uppercase tracking-widest">Voir le projet</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <p className="font-mono text-sm md:text-base text-zinc-600 mb-8 max-w-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {project.techs.map((tech) => (
                  <span key={tech} className="font-mono text-[10px] md:text-xs text-zinc-500 border border-zinc-200 px-3 py-1.5 rounded-full uppercase tracking-wider group-hover:border-zinc-300 group-hover:text-zinc-950 transition-colors bg-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
