import { veilles } from '@/data/veille';

export default function Veille() {
  return (
    <div className="w-full pt-32 pb-24 px-4 min-h-screen selection:bg-zinc-950 selection:text-white bg-zinc-50">
      <div className="max-w-7xl mx-auto mb-20 md:px-12 text-center md:text-left flex flex-col md:items-center">
        <h1 className="text-[10vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-8">
          Veille <span className="italic font-light text-zinc-400">Tech.</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-2xl leading-relaxed text-center">
          D'octobre 2025 à mars 2026 : analyses et actualités de l'écosystème tech.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {veilles.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
              className="bg-white hover:bg-zinc-100/50 transition-all duration-300 rounded-[20px] p-8 border border-zinc-200 hover:border-zinc-300 hover:shadow-md flex flex-col h-full group cursor-pointer"
            >
              <div className="font-mono text-[11px] text-zinc-400 mb-5 tracking-wider uppercase">
                {item.date}
              </div>
              <h3 className="text-xl font-bold text-zinc-950 group-hover:text-black transition-colors mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              <div
                className="text-[11px] font-bold text-zinc-900 tracking-[0.15em] flex items-center gap-2 uppercase transition-opacity mt-auto w-fit"
              >
                LIRE L'ARTICLE
                <span className="transform group-hover:translate-x-1 transition-transform font-normal text-lg leading-none">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
