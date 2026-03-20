export default function Veille() {
  return (
    <div className="w-full pt-32 pb-16 px-4 selection:bg-zinc-950 selection:text-white min-h-screen">
      <div className="max-w-7xl mx-auto mb-24 md:px-12 text-center md:text-left flex flex-col md:items-center">
        <h1 className="text-[10vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-8">
          Veille <span className="italic font-light">Informationnelle.</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-2xl leading-relaxed text-center">
          Restez informé des dernières actualités technologiques, tendances de développement et innovations numériques.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-12 flex flex-col items-center justify-center py-24 border-t border-zinc-200">
        <div className="w-24 h-24 rounded-full border border-zinc-200 flex items-center justify-center mb-8 relative group overflow-hidden">
          <div className="absolute inset-0 bg-zinc-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <svg className="w-8 h-8 text-zinc-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0012.586 3H12" />
          </svg>
        </div>
        <h2 className="text-2xl font-playfair font-bold text-zinc-950 mb-4">La section des articles est en cours de création.</h2>
        <p className="font-mono text-sm text-zinc-500 text-center max-w-md">
          Revenez prochainement pour découvrir mes analyses sur l&apos;écosystème React, Next.js et l&apos;UI/UX Engineering.
        </p>
      </div>
    </div>
  );
}
