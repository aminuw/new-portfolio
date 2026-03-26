export default function Contact() {
  return (
    <div className="w-full min-h-screen pt-32 pb-16 px-4 flex flex-col items-center justify-center selection:bg-zinc-950 selection:text-white bg-zinc-50/50">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-center">
        
        {/* Left Side: Editorial Typography */}
        <div className="flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0">
          <h1 className="text-[14vw] lg:text-[9vw] leading-[0.85] font-playfair font-bold text-zinc-950 tracking-tighter mb-12">
            On en<br />
            <span className="italic font-light text-zinc-500">discute ?</span>
          </h1>
          <p className="font-mono text-sm md:text-base text-zinc-600 max-w-md uppercase tracking-widest mb-16 leading-relaxed border-l-[3px] border-zinc-950 pl-8 py-2">
            Envie de donner vie à votre prochain projet ? Laissez-moi un message pour en discuter.
          </p>

          <div className="flex flex-col sm:flex-row gap-12 font-mono text-xs uppercase tracking-widest pt-12 border-t border-zinc-200">
            <div>
              <span className="text-zinc-400 block mb-3 text-[10px] font-bold">Email direct</span>
              <a href="mailto:agnaouamine17@gmail.com" className="text-zinc-950 hover:text-orange-600 transition-colors border-b border-zinc-950 pb-1">
                agnaouamine17@gmail.com
              </a>
            </div>
            <div>
              <span className="text-zinc-400 block mb-3 text-[10px] font-bold">Disponibilité</span>
              <span className="text-zinc-950">Ouvert aux opportunités</span>
            </div>
          </div>
        </div>

        {/* Right Side: Redesigned Minimalist Form */}
        <div className="w-full bg-white p-8 md:p-14 lg:p-12 rounded-[3rem] border border-zinc-200 relative overflow-hidden shadow-2xl shadow-zinc-950/5 order-1 lg:order-2">
          <form className="flex flex-col gap-10 relative z-10" action="https://formspree.io/f/xaqpkkee" method="POST">
            
            <div className="flex flex-col gap-2 group">
              <label htmlFor="fullname" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] transition-colors group-focus-within:text-zinc-950">Nom complet *</label>
              <input type="text" name="fullname" id="fullname" required className="w-full bg-transparent border-b border-zinc-200 py-3 text-lg font-playfair text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors placeholder:text-zinc-300 placeholder:font-mono placeholder:text-sm placeholder:italic" placeholder="Jean Dupont" />
            </div>

            <div className="flex flex-col gap-2 group">
              <label htmlFor="email" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] transition-colors group-focus-within:text-zinc-950">Adresse email *</label>
              <input type="email" name="email" id="email" required className="w-full bg-transparent border-b border-zinc-200 py-3 text-lg font-playfair text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors placeholder:text-zinc-300 placeholder:font-mono placeholder:text-sm placeholder:italic" placeholder="jean.dupont@exemple.fr" />
            </div>

            <div className="flex flex-col gap-2 group">
              <label htmlFor="subject" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] transition-colors group-focus-within:text-zinc-950">Sujet</label>
              <input type="text" name="subject" id="subject" className="w-full bg-transparent border-b border-zinc-200 py-3 text-lg font-playfair text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors placeholder:text-zinc-300 placeholder:font-mono placeholder:text-sm placeholder:italic" placeholder="Lancement d'une plateforme web" />
            </div>

            <div className="flex flex-col gap-2 group mt-4">
              <label htmlFor="message" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] transition-colors group-focus-within:text-zinc-950">Message *</label>
              <textarea name="message" id="message" rows={4} required className="w-full bg-transparent border-b border-zinc-200 py-3 text-lg font-playfair text-zinc-950 resize-none focus:outline-none focus:border-zinc-950 transition-colors leading-relaxed placeholder:text-zinc-300 placeholder:font-mono placeholder:text-sm placeholder:italic" placeholder="Bonjour, je souhaite vous parler d'un projet..."></textarea>
            </div>

            <button type="submit" className="w-full group py-6 bg-zinc-950 text-white rounded-2xl font-mono text-xs uppercase tracking-[0.2em] hover:bg-orange-600 transition-all duration-500 mt-6 overflow-hidden relative shadow-md">
              <span className="relative z-10 flex items-center justify-center gap-4">
                Envoyer ma demande <span className="text-lg leading-none transform group-hover:translate-x-3 transition-transform duration-300">→</span>
              </span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
