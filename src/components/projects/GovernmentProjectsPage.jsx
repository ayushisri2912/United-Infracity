import React from 'react';
import { ShieldCheck, Building2, CheckCircle2, Award, ArrowUpRight, Sparkles, Lock } from 'lucide-react';

export default function GovernmentProjectsPage({ onOpenEnquire, onNavigateHome }) {
  const govtProjects = [
    {
      id: 501,
      title: 'State Administrative Secretariat Complex',
      agency: 'State Public Works & Urban Infrastructure Dept.',
      tags: ['Seismic Zone 5 Resistant', 'IGBC Platinum Green Rated', 'High Security Zone'],
      scale: '450,000 Sq. Ft. Built-up Area',
      completion: 'Completed 2024',
      image: '/images/united_commercial.jpg',
      description: 'State-of-the-art administrative office complex built with high-tensile earthquake-resistant steel structures, central automated climate control, and renewable solar power grid integration.'
    },
    {
      id: 502,
      title: 'Capital Transit & Civic Hub',
      agency: 'Metropolitan Development Authority',
      tags: ['Civic Infrastructure', 'Zero Carbon Footprint', '100% On-Time Delivery'],
      scale: '120-Acre Transit Terminal Complex',
      completion: 'Under Execution 2026',
      image: '/images/aura_tower_facade.jpg',
      description: 'Integrated multimodal passenger terminal and civic administrative complex engineered for high-density daily transit with solar-powered overhead canopies and automated traffic management.'
    },
    {
      id: 503,
      title: 'Judicial & District Officers Complex',
      agency: 'Department of Justice & Infrastructure',
      tags: ['Seismic Zone 5 Safety', 'Biometric Access Security', 'LEED Gold Certified'],
      scale: '320,000 Sq. Ft.',
      completion: 'Completed 2023',
      image: '/images/hero_luxury_tower.jpg',
      description: 'Ultra-secure judicial and administrative officer court complex featuring acoustic courtrooms, digital archiving infrastructure, and eco-friendly rainwater harvesting basins.'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Hero Header Banner */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        <img
          src="/images/united_commercial.jpg"
          alt="Government Projects Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            GOVERNMENT PROJECTS
          </h1>
          <p className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            State Civic Infrastructure & High-Security Administrative Contracts
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Civic Engineering Excellence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              State Administrative & <span className="text-[#D4AF37] italic font-serif">Civic Infrastructure</span>
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-light">
              Trusted by public sector departments to construct seismic-resistant, IGBC green-certified administrative and civic complexes.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {govtProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#1A1A1A]/90 text-[#D4AF37] font-bold text-[10px] uppercase rounded-full border border-[#D4AF37]/30 flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        Govt Contract
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] text-[#D4AF37] font-bold uppercase block tracking-wider">
                        {project.agency}
                      </span>
                      <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 bg-[#FDFBF7] text-[#997B20] text-[10px] font-bold uppercase rounded-md border border-[#D4AF37]/30">
                          ✦ {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 mt-4 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-bold">{project.scale}</span>
                  <button
                    onClick={onOpenEnquire}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all"
                  >
                    <span>Govt Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
