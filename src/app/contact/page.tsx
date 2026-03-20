export default function Contact() {
  return (
    <div className="w-full pt-28 pb-16 px-4 flex flex-col items-center">
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <h1 className="text-[10vw] md:text-[6vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-6">
          Contactez-<span className="italic font-light">moi.</span>
        </h1>
        <p className="font-mono text-sm text-zinc-600 max-w-md mx-auto uppercase tracking-wider">
          Un projet, une question ou une opportunité ? N&apos;hésitez pas à m&apos;écrire.
        </p>
      </div>
      
      <div className="w-full max-w-xl bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm mx-auto">
        <form className="flex flex-col gap-6" action="#" method="POST">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest">Nom complet</label>
            <input type="text" id="name" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors" placeholder="Jean Dupont" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest">Email</label>
            <input type="email" id="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors" placeholder="jean@exemple.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest">Message</label>
            <textarea id="message" rows={5} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 resize-none focus:outline-none focus:border-zinc-950 transition-colors" placeholder="Comment puis-je vous aider ?"></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-zinc-950 text-white rounded-xl font-medium tracking-wide hover:scale-[1.02] transition-transform mt-4 shadow-xl shadow-zinc-950/20">
            Envoyer le message
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <a href="mailto:agnaouamine17@gmail.com" className="font-mono text-xs text-zinc-500 hover:text-zinc-950 transition-colors underline underline-offset-4">
            agnaouamine17@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
