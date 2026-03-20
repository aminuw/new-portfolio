import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <div className="w-full pt-32 pb-16 px-4 selection:bg-zinc-950 selection:text-white min-h-screen">
      <div className="max-w-7xl mx-auto mb-24 md:px-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-6">
          Mon <span className="italic font-light">Expertise.</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-xl">
          Développement d&apos;applications web et mobiles avec une approche centrée sur la performance et le design.
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:px-12 flex flex-col border-t border-zinc-200">
        {skills.map((skillGroup, index) => (
          <div key={skillGroup.category} className="group flex flex-col md:flex-row py-12 border-b border-zinc-200 hover:bg-zinc-100/50 transition-colors px-4 md:px-8 cursor-default gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex flex-col">
              <span className="font-mono text-zinc-400 text-sm mb-4">0{index + 1}</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-zinc-950 group-hover:italic transition-all duration-300">
                {skillGroup.category}
              </h2>
            </div>
            <div className="w-full md:w-2/3 flex flex-wrap gap-3 items-center">
              {skillGroup.items.map((item) => (
                <span key={item} className="font-mono text-xs md:text-sm text-zinc-600 bg-white border border-zinc-200 px-4 py-2 rounded-full uppercase tracking-wider group-hover:border-zinc-300 group-hover:text-zinc-950 transition-colors shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
