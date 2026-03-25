import { experience } from '@/data/experience';
import { certifications } from '@/data/certifications';
import Image from 'next/image';

export default function Parcours() {
  return (
    <div className="w-full pt-32 pb-16 px-4 selection:bg-zinc-950 selection:text-white min-h-screen">
      <div className="max-w-7xl mx-auto mb-24 md:px-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-6">
          <span className="italic font-light">Parcours</span> &<br className="md:hidden" /> Certifications.
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-xl">
          Expériences professionnelles, formations, certifications et évolution dans l&apos;écosystème du développement logiciel.
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:px-12 flex flex-col border-t border-zinc-200">
        {experience.map((exp, index) => (
          <div key={index} className="group flex flex-col md:flex-row py-12 border-b border-zinc-200 hover:bg-zinc-100/50 transition-colors px-4 md:px-8 cursor-default gap-8">
            <div className="w-full md:w-1/3 flex flex-col justify-start">
              <span className="font-mono text-zinc-400 text-sm mb-4 block">{exp.period}</span>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-zinc-950 group-hover:italic transition-all duration-300">
                {exp.role}
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 mt-4 block">
                @ {exp.company}
              </span>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <p className="font-mono text-sm md:text-base text-zinc-600 max-w-xl leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto md:px-12 mt-32 mb-12">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-zinc-950 tracking-tighter mb-16">
          Mes <span className="italic font-light">Certifications.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group border border-zinc-200 bg-white hover:bg-zinc-50 transition-all duration-300 overflow-hidden flex flex-col">
              {/* Image Placeholder */}
              <div className="w-full h-64 bg-zinc-100 relative overflow-hidden border-b border-zinc-200 flex items-center justify-center">
                {cert.image ? (
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <div className="w-full h-full relative relative bg-zinc-200/50 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                      {/* Uncomment when adding real image: */}
                      <Image 
                        src={cert.image} 
                        alt={`Certification ${cert.title}`} 
                        fill 
                        className="object-contain p-2" 
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-100">
                    <span className="font-mono text-zinc-400 text-sm">Image placeholder</span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-zinc-400 text-sm px-3 py-1 bg-zinc-100 rounded-full">{cert.date}</span>
                  <span className="font-mono text-zinc-950 text-sm font-bold uppercase tracking-widest">{cert.issuer}</span>
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-zinc-950 mb-4 group-hover:italic transition-all duration-300">
                  {cert.title}
                </h3>
                
                <p className="font-mono text-sm text-zinc-600 mb-6 flex-grow">
                  {cert.description}
                </p>
                
                {cert.skills && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.skills.map((skill, imgIdx) => (
                      <span key={imgIdx} className="font-mono text-xs text-zinc-500 px-2 py-1 border border-zinc-200 rounded-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
