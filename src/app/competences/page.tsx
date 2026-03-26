import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <div className="w-full pt-32 pb-32 px-4 selection:bg-zinc-950 selection:text-white min-h-screen bg-zinc-50/30">
      <div className="max-w-4xl mx-auto mb-32 md:px-12 text-center md:mt-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-8">
          <span className="italic font-light text-zinc-600">Expertise</span> technique.
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed relative inline-block">
          <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-orange-600/50 hidden md:block"></span>
          Une maîtrise des technologies essentielle au service de la performance et du design.
          <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-orange-600/50 hidden md:block"></span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto md:px-12 flex flex-col gap-32">
        {skills.map((skillGroup, groupIdx) => (
          <div key={skillGroup.category} className="flex flex-col">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-zinc-950 pb-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-zinc-950 tracking-tight">
                {skillGroup.category}<span className="text-orange-600">.</span>
              </h2>
              <p className="font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest mt-4 md:mt-0 max-w-sm text-left md:text-right leading-relaxed">
                {skillGroup.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-4">
              {skillGroup.items.map((item, idx) => (
                <div key={item.name} className="flex flex-col justify-center py-8 border-b border-zinc-200/80 group hover:border-zinc-400 transition-colors cursor-default">
                  <div className="flex justify-between items-end mb-4">
                    <span className="font-playfair font-bold text-2xl md:text-3xl text-zinc-950 group-hover:italic transition-all duration-300">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-300 group-hover:text-orange-600 transition-colors font-bold pb-1">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase leading-relaxed">
                    {item.keywords}
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
