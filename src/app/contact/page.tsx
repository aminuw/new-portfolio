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
        <form className="flex flex-col gap-6" action="https://formspree.io/f/xaqpkkee" method="POST">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="fullname" className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest">Nom complet *</label>
              <input type="text" name="fullname" id="fullname" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors" placeholder="Jean Dupont" />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="email" className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest">Adresse email *</label>
              <input type="email" name="email" id="email" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors" placeholder="jean.dupont@exemple.fr" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest">Sujet</label>
            <input type="text" name="subject" id="subject" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors" placeholder="Demande de collaboration" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest">Message *</label>
            <textarea name="message" id="message" rows={6} required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 resize-none focus:outline-none focus:border-zinc-950 transition-colors" placeholder="Bonjour, je souhaite discuter d'un projet avec vous..."></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-zinc-950 text-white rounded-xl font-medium tracking-wide hover:scale-[1.02] transition-transform mt-4 shadow-xl shadow-zinc-950/20 flex items-center justify-center gap-2">
            <span>Envoyer le message</span>
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
