import { experience } from '@/data/experience';
import { certifications } from '@/data/certifications';
import Image from 'next/image';

export default function Parcours() {
  return (
    <div className="w-full pt-32 pb-32 px-4 selection:bg-zinc-950 selection:text-white min-h-screen bg-zinc-50/30">
      <div className="max-w-7xl mx-auto mb-24 md:px-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-playfair font-bold text-zinc-950 tracking-tighter mb-8">
          <span className="italic font-light text-zinc-600">Parcours</span> &<br className="md:hidden" /> Certifications.
        </h1>
        <p className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-widest max-w-2xl leading-relaxed">
          Retrouvez ici mon cheminement académique, mes immersions professionnelles et les compétences validées tout au long de mon parcours.
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:px-12 flex flex-col border-t-[3px] border-zinc-950 pt-2">
        {experience.map((exp, index) => (
          <div key={index} className="group flex flex-col md:flex-row py-16 border-b border-zinc-200/80 hover:bg-white transition-all duration-500 px-4 md:px-12 cursor-default gap-8 md:gap-24">
            <div className="w-full md:w-1/3 flex flex-col justify-start">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-300 group-hover:bg-orange-600 group-hover:w-16 transition-all duration-500"></span>
                {exp.period}
              </span>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-zinc-950 group-hover:italic transition-all duration-500 leading-tight">
                {exp.role}
              </h2>
              <span className="font-mono text-xs text-orange-600 font-bold mt-6 uppercase tracking-widest block">
                {exp.company}
              </span>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <p className="font-mono text-sm md:text-base text-zinc-600 max-w-2xl leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto md:px-12 mt-40">
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-zinc-950 tracking-tighter mb-16">
          Licences & <span className="italic font-light text-zinc-500">Certifications.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="group bg-white border border-zinc-200 hover:border-zinc-400 transition-colors duration-500 flex flex-col cursor-default">
              <div className="w-full h-80 bg-zinc-50 relative overflow-hidden flex items-center justify-center p-8">
                {cert.image ? (
                  <div className="w-full h-full relative bg-white border border-zinc-200/50 shadow-sm flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-700 ease-in-out p-6">
                    <Image src={cert.image} alt={cert.title} fill className="object-contain p-8" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-white border border-zinc-200/50 flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-700">
                    <span className="font-mono text-xs text-zinc-400">Image placeholder</span>
                  </div>
                )}
              </div>
              
              <div className="p-10 flex flex-col flex-grow border-t border-zinc-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-full">{cert.date}</span>
                  <span className="font-mono text-[10px] text-zinc-950 font-bold uppercase tracking-[0.2em]">{cert.issuer}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-zinc-950 mb-6 group-hover:italic transition-all duration-300">
                  {cert.title}
                </h3>
                
                <p className="font-mono text-sm md:text-base text-zinc-600 mb-8 flex-grow leading-relaxed">
                  {cert.description}
                </p>
                
                {cert.skills && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.skills.map((skill, imgIdx) => (
                      <span key={imgIdx} className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 px-3 py-1.5 border border-zinc-200 bg-zinc-50">
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
