import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <div className="w-full pt-32 pb-16 px-4 selection:bg-zinc-950 selection:text-white min-h-screen">
      <div className="max-w-7xl mx-auto mb-24 md:px-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-6">
          <span className="italic font-light">Expertise.</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-2xl leading-relaxed">
          Une approche pragmatique du développement moderne. Pas de pourcentages arbitraires, juste une maîtrise des technologies qui comptent.
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:px-12 flex flex-col border-t border-zinc-200">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="group flex flex-col md:flex-row py-16 border-b border-zinc-200 hover:bg-zinc-100/50 transition-colors px-4 md:px-8 gap-8 md:gap-12 cursor-default">
            <div className="w-full md:w-1/3 flex flex-col">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-zinc-950 group-hover:italic transition-all duration-500 mb-4">
                {skillGroup.category}
              </h2>
            </div>
            <div className="w-full md:w-2/3 flex flex-col">
              <p className="font-mono text-sm mb-12 text-zinc-500 max-w-md leading-relaxed">
                {skillGroup.description}
              </p>
              
              <div className="flex flex-col gap-2">
                {skillGroup.items.map((item) => (
                  <div key={item.name} className="flex flex-col md:flex-row md:items-center py-5 border-b border-zinc-200/50 last:border-0 hover:bg-white/50 transition-colors group/item rounded-xl px-4 -mx-4">
                    <div className="md:w-1/3 flex items-center mb-3 md:mb-0">
                      <span className="font-playfair font-bold text-xl md:text-2xl text-zinc-950 group-hover/item:italic transition-all duration-300">
                        {item.name}
                      </span>
                    </div>
                    <div className="md:w-1/3 mb-2 md:mb-0">
                      <span className="font-mono text-[10px] md:text-xs text-zinc-600 bg-white border border-zinc-200 px-3 py-1.5 rounded-full uppercase tracking-wider font-semibold shadow-sm inline-block">
                        {item.level}
                      </span>
                    </div>
                    <div className="md:w-1/3 font-mono text-xs text-zinc-500 leading-relaxed md:text-right">
                      {item.keywords}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
