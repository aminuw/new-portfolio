'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] md:text-[9vw] leading-[0.85] font-playfair font-bold text-zinc-950 tracking-tighter mb-8"
          >
            Amine <br />
            <span className="italic font-light">Agnaou.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-mono text-sm md:text-base text-zinc-600 max-w-lg mx-auto uppercase tracking-wider mb-12"
          >
            Je transforme vos concepts en applications web et mobiles fluides et premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-950 text-white rounded-full text-sm font-medium tracking-wide hover:scale-105 transition-transform duration-300">
              Démarrer un projet
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}


      {/* About Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-16">À propos.</h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24">
          <div>
            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-zinc-950 tracking-tight leading-tight">
              L'esthétique <br className="hidden md:block" />
              <span className="italic font-light text-zinc-500">au service</span><br className="hidden md:block" /> de l'utilité.
            </h3>
          </div>
          <div className="flex flex-col gap-6 font-mono text-sm md:text-base text-zinc-600 leading-relaxed justify-center">
            <p>
              Je m'appelle Amine, j'ai 19 ans et je suis actuellement en formation BTS SIO (option SLAM) à Orléans. Passionné par l'ingénierie logicielle et le web, je conçois des applications et des interfaces où la technique rencontre l'esthétisme.
            </p>
            <p>
              Mon ambition est de bâtir des projets utiles, avec une véritable identité visuelle. Qu'il s'agisse du développement d'une plateforme web, d'une application mobile ou de l'architecture d'une base de données, mon exigence reste la même : livrer un résultat propre, clair et singulièrement agréable à utiliser.
            </p>
            <p>
              Pragmatique et en quête continue d'apprentissage, j'aime me confronter à des défis concrets, itérer, et observer l'évolution de chaque produit au fil du temps.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-zinc-200">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-16">Expertise.</h2>
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-zinc-950 tracking-tight mb-6">
            Je construis des écosystèmes digitaux remarquables.
          </h2>
          <p className="font-mono text-sm md:text-base text-zinc-600 max-w-2xl leading-relaxed">
            Au-delà du code et du design, je conçois des interfaces immersives. Mon approche fusionne rigueur technique et sensibilité esthétique pour créer des plateformes modernes.
          </p>
        </div>

        <div className="flex flex-col border-t border-zinc-200">
          {[
            { id: '01', title: 'Stratégie', desc: 'Audit UX/UI, Architecture Front-end, Scalabilité' },
            { id: '02', title: 'Design', desc: 'Design System, UI/UX Mobile, Micro-interactions' },
            { id: '03', title: 'Engineering', desc: 'React & Next.js, React Native, Systèmes Temps Réel' },
            { id: '04', title: 'Performances', desc: 'SEO Technique, Web Core Vitals, Accessibilité' },
          ].map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center py-8 border-b border-zinc-200 hover:bg-zinc-100/50 transition-colors px-4 cursor-default"
            >
              <span className="font-mono text-zinc-400 w-16 text-sm">{service.id}</span>
              <h3 className="font-playfair text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 flex-1 group-hover:italic transition-all duration-500">{service.title}</h3>
              <p className="font-mono text-sm text-zinc-600 mt-4 md:mt-0 max-w-sm">{service.desc}</p>
            </motion.div>
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
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 items-center cursor-pointer"
            >
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
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
