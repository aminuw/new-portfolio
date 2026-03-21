import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-white pt-24 pb-12 px-6 mt-32 rounded-t-[3rem] shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-[12vw] leading-none font-playfair font-bold tracking-tighter mb-12 text-center text-zinc-100 italic transition-transform hover:scale-105 duration-700">
          Discutons.
        </h2>

        <div className="w-full h-[1px] bg-white/10 mb-12" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 font-mono text-sm text-zinc-400">
            <a href="https://www.linkedin.com/in/amineagnaou/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/aminuw" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
          </div>
          <p className="text-zinc-500 font-mono text-xs text-center md:text-right">
            © {new Date().getFullYear()} Amine AGNAOU. <br className="md:hidden" />
            Basé à Orléans, France.

          </p>
          <p className="text-zinc-500 font-mono text-xs text-center md:text-right">
            Siret : 988 376 836 00017
          </p>
        </div>
      </div>
    </footer>
  );
}
