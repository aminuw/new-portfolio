import { experience } from '@/data/experience';

export default function Parcours() {
  return (
    <div className="w-full pt-32 pb-16 px-4 selection:bg-zinc-950 selection:text-white min-h-screen">
      <div className="max-w-7xl mx-auto mb-24 md:px-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-6">
          Mon <span className="italic font-light">Parcours.</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-xl">
          Expériences professionnelles, formations et évolution dans l&apos;écosystème du développement logiciel.
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:px-12 flex flex-col border-t border-zinc-200">
        {experience.map((exp, index) => (
          <div key={index} className="group flex flex-col md:flex-row py-12 border-b border-zinc-200 hover:bg-zinc-100/50 transition-colors px-4 md:px-8 cursor-default gap-8">
            <div className="w-full md:w-1/3 flex flex-col justify-start">
              <span className="font-mono text-zinc-400 text-sm mb-4 block">{exp.period}</span>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-zinc-950 group-hover:italic transition-all duration-300">
                {exp.role}
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 mt-4 block">
                @ {exp.company}
              </span>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <p className="font-mono text-sm md:text-base text-zinc-600 max-w-xl leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
