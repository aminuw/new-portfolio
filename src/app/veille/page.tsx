import { veilles } from '@/data/veille';

export default function Veille() {
  return (
    <div className="w-full pt-32 pb-32 px-4 min-h-screen selection:bg-zinc-950 selection:text-white bg-zinc-50 overflow-hidden relative">
      <div className="max-w-4xl mx-auto mb-32 text-center md:mt-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-8">
          Veille <span className="italic font-light text-zinc-400">Tech.</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed relative inline-block">
          <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-orange-600/50 hidden md:block"></span>
          Roadmap des innovations de l'écosystème
          <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-orange-600/50 hidden md:block"></span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col pt-12 relative">
        {veilles.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === veilles.length - 1;

          return (
            <div key={item.id} className="relative w-full flex items-center md:min-h-[400px] py-16 group">
              
              {/* THE NODE (Dots on the timeline) */}
              <div className="absolute left-8 md:left-[50%] top-[50%] w-5 h-5 rounded-full border-[4px] border-white bg-orange-500 -translate-x-1/2 -translate-y-1/2 shadow-lg z-20 group-hover:scale-[1.5] transition-transform duration-500"></div>

              {/* S-CURVE WINDING PATH FOR DESKTOP */}
              {/* This draws the curved snake path connecting the dots */}
              {!isLast && (
                <div className={`hidden md:block absolute top-[50%] h-[100%] w-[50%] border-orange-500/30 group-hover:border-orange-500 transition-colors duration-700 z-0 pointer-events-none
                  ${isEven 
                    ? 'left-[50%] border-t-[3px] border-r-[3px] border-b-[3px] rounded-r-[6rem]' 
                    : 'right-[50%] border-t-[3px] border-l-[3px] border-b-[3px] rounded-l-[6rem]'}
                `}></div>
              )}

              {/* STRAIGHT VERTICAL PATH FOR MOBILE */}
              {!isLast && (
                <div className="md:hidden absolute left-8 top-[50%] h-[100%] w-[3px] bg-orange-500/30 -translate-x-1/2 z-0"></div>
              )}

              {/* THE CARD CONTENT */}
              {/* If isEven is true (0, 2, 4), the path curves RIGHT. So we place the card on the RIGHT inside the curve */}
              <div className={`w-full md:w-5/12 pl-24 md:pl-0 relative z-30 
                ${isEven ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'}`}>
                
                <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} items-start relative`}>
                  
                  {/* Background Month Text (Watermark mode) */}
                  <span className={`font-playfair text-6xl md:text-8xl font-bold text-zinc-900/[0.03] mb-2 tracking-tighter absolute -top-16 select-none group-hover:text-zinc-900/[0.08] transition-colors duration-500 whitespace-nowrap z-[-1]
                    ${isEven ? 'left-0' : 'right-0'}`}>
                    {item.date.split(' ')[0]} {/* Affiche seulement le mois en gros */}
                  </span>
                  
                  {/* Precise Month Badge */}
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm mb-8 flex items-center gap-2 group-hover:-translate-y-1 transition-transform z-10 relative">
                    <span className="w-2 h-2 rounded-full bg-orange-200 group-hover:bg-orange-600 transition-colors"></span>
                    {item.date}
                  </span>

                  {/* Glassmorphism Article Card */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 shadow-xl shadow-zinc-950/5 hover:shadow-2xl hover:shadow-orange-950/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <span className="font-mono text-[10px] text-orange-600 font-bold uppercase tracking-widest block mb-4">
                      {item.category}
                    </span>
                    
                    <h3 className={`text-2xl md:text-3xl font-playfair font-bold text-zinc-950 mb-4 leading-snug transition-all duration-300 ${isEven ? 'group-hover:italic' : 'group-hover:-skew-x-6'}`}>
                      {item.title}
                    </h3>
                    
                    <p className={`font-mono text-sm leading-relaxed text-zinc-600 mb-8 ${isEven ? 'text-left' : 'md:text-right text-left'}`}>
                      {item.description}
                    </p>
                    
                    <div className={`flex items-center gap-3 text-xs font-mono font-bold text-zinc-900 uppercase tracking-[0.15em] ${isEven ? '' : 'md:flex-row-reverse'}`}>
                      <span className="w-8 h-[2px] bg-zinc-900 group-hover:w-16 group-hover:bg-orange-600 transition-all duration-500"></span>
                      <span className="group-hover:text-orange-600 transition-colors">Découvrir</span>
                    </div>
                  </a>

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
