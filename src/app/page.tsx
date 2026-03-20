import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full relative selection:bg-zinc-950 selection:text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
        <div className="absolute top-1/4 left-10 md:left-24 text-xs font-mono text-zinc-400 rotate-[-90deg]">
          AVAILABLE FOR FREELANCE
        </div>
        <div className="absolute bottom-24 right-10 md:right-24 text-xs font-mono text-zinc-400">
          PARIS, FRANCE
        </div>

        <div className="text-center">
          <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] font-playfair font-bold text-zinc-950 tracking-tighter mb-8">
            Amine <br />
            <span className="italic font-light">Agnaou.</span>
          </h1>
          <p className="font-mono text-sm md:text-base text-zinc-600 max-w-lg mx-auto uppercase tracking-wider mb-12">
            Développeur Front-end & Mobile passionné par la création d&apos;expériences claires et performantes.
          </p>
          
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-950 text-white rounded-full text-sm font-medium tracking-wide hover:scale-105 transition-transform duration-300">
            Démarrer un projet
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-16">Expertise.</h2>
        
        <div className="flex flex-col border-t border-zinc-200">
          {[
            { id: '01', title: 'Développement Frontend', desc: 'React, Next.js, Animations complexes.' },
            { id: '02', title: 'Design d\'Interfaces', desc: 'UI/UX Design, Typographie, Minimalisme.' },
            { id: '03', title: 'Performances Web', desc: 'Optimisation SEO, Accessibilité.' },
          ].map((service) => (
            <div key={service.id} className="group flex flex-col md:flex-row md:items-center py-8 border-b border-zinc-200 hover:bg-zinc-100/50 transition-colors px-4 cursor-default">
              <span className="font-mono text-zinc-400 w-16 text-sm">{service.id}</span>
              <h3 className="font-playfair text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 flex-1 group-hover:italic transition-all duration-500">{service.title}</h3>
              <p className="font-mono text-sm text-zinc-600 mt-4 md:mt-0 max-w-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Travaux sélectionnés.</h2>
          <Link href="/projets" className="text-sm font-mono text-zinc-950 uppercase tracking-widest border-b border-zinc-950 hover:text-zinc-500 hover:border-zinc-500 transition-colors pb-1">
            Voir tout
          </Link>
        </div>

        <div className="flex flex-col gap-24">
          {[
            { title: 'E-commerce Premium', tags: ['NEXT.JS', 'STRIPE'] },
            { title: 'Dashboard Analytics', tags: ['REACT', 'TAILWIND'] },
          ].map((project, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row gap-8 items-center cursor-pointer">
              <div className="w-full md:w-3/5 aspect-video bg-zinc-200 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-zinc-300 group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className="flex gap-3 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] text-zinc-500 tracking-widest px-3 py-1 border border-zinc-200 rounded-full uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-playfair text-4xl md:text-5xl font-bold tracking-tighter text-zinc-950 group-hover:italic transition-all duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
