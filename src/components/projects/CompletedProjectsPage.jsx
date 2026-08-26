import React from 'react';
import { Award, CheckCircle2, MapPin, Users, Building2, Sparkles, ArrowUpRight } from 'lucide-react';

export default function CompletedProjectsPage({ onOpenEnquire, onNavigateHome }) {
  const completedProjects = [
    {
      id: 401,
      title: 'The Sovereign Estates',
      location: 'Prime Sector 48, Metropolitan Expressway',
      deliveredYear: 'Delivered 2024',
      statusBadge: 'Handed Over 100%',
      familiesCount: '850+ Happy Families',
      type: 'Ultra-Luxury Gated Residency',
      image: '/images/hero_luxury_tower.jpg',
      description: 'Fully delivered 3 & 4 BHK luxury residences with operational 30,000 Sq. Ft. clubhouse, Olympic pool, and 100% RERA possession completion.'
    },
    {
      id: 402,
      title: 'United Crown Heights',
      location: 'Corporate Boulevard Sector 50',
      deliveredYear: 'Delivered 2023',
      statusBadge: 'Handed Over 100%',
      familiesCount: '1,200+ Happy Families',
      type: 'Integrated High-Rise Towers',
      image: '/images/united_residences.jpg',
      description: 'Completed multi-tower residential complex featuring 80% open landscaped parks, jogging trails, and active resident welfare association.'
    },
    {
      id: 403,
      title: 'Aura Business Suites Phase I',
      location: 'Financial Tech Corridor',
      deliveredYear: 'Delivered 2022',
      statusBadge: '100% Occupied',
      familiesCount: '150+ Corporate Tenants',
      type: 'Grade-A Commercial Landmark',
      image: '/images/united_commercial.jpg',
      description: 'Fully leased commercial corporate tower housing MNC corporate headquarters, high-street banks, and rooftop fine-dining restaurants.'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Hero Header Banner */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        <img
          src="/images/hero_luxury_tower.jpg"
          alt="Completed Projects Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            COMPLETED PROJECTS
          </h1>
          <p className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Portfolio of Delivered Landmarks & Heritage of Trust
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="bg-[#1A1A1A] text-white py-8 border-b border-[#D4AF37]/30">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif text-3xl font-bold text-[#D4AF37]">6,000+</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mt-1">Happy Families Handed Over</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-white">5M+ Sq. Ft.</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mt-1">Delivered Construction</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-[#D4AF37]">100%</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mt-1">RERA & Title Compliance</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-white">15+ Yrs</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mt-1">Operational Distinction</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Delivered Landmarks</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              100% Handed Over & <span className="text-[#D4AF37] italic font-serif">Thriving Communities</span>
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-light">
              Discover our legacy of completed developments built with zero-compromise engineering and delivered on schedule.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-600/90 text-white font-bold text-[10px] uppercase rounded-full shadow-sm flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {project.statusBadge}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-stone-900/90 text-[#D4AF37] font-bold text-[10px] uppercase rounded-full border border-[#D4AF37]/30">
                        {project.deliveredYear}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-stone-300 mb-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="bg-[#FDFBF7] p-3 rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                      <span className="text-stone-500 font-medium">{project.type}</span>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 text-[10px]">
                        {project.familiesCount}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 mt-4">
                  <button
                    onClick={onOpenEnquire}
                    className="w-full py-2.5 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-stone-950 font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Handover Gallery</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
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
