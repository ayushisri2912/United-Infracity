import React from 'react';
import { Building2, MapPin, ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2, Award, Download } from 'lucide-react';

export default function OngoingCommercialPage({ onOpenEnquire, onNavigateHome }) {
  const commercialProjects = [
    {
      id: 201,
      title: 'Aura Tower Corporate Center',
      location: 'Central Financial Business District',
      price: 'Investment from ₹1.25 Cr*',
      category: 'Grade-A Corporate Offices',
      floorPlate: '3,500 - 18,500 Sq. Ft.',
      investmentType: 'Pre-Leased & Institutional Grade',
      image: '/images/united_commercial.jpg',
      badge: 'LEED Gold Certified',
      description: 'Iconic 32-story corporate tower engineered with double-glazed glass facades, high-speed elevator banks, and rooftop helipad.'
    },
    {
      id: 202,
      title: 'United Commercial Square',
      location: 'Metropolitan Tech Corridor Sector 62',
      price: 'Investment from ₹85 Lakhs*',
      category: 'High-Street Retail & F&B Hub',
      floorPlate: '850 - 4,200 Sq. Ft.',
      investmentType: 'High Footfall Retail & Self-Use',
      image: '/images/aura_tower_facade.jpg',
      badge: 'High Footfall Zone',
      description: 'Open-air pedestrian luxury retail boulevard featuring multi-cuisine dining terraces, anchor retail spaces, and 3-level basement parking.'
    },
    {
      id: 203,
      title: 'Capital Tech & Innovation Park',
      location: 'Expressway Cyber Hub Belt',
      price: 'Investment from ₹2.10 Cr*',
      category: 'IT/ITeS Special Economic Zone',
      floorPlate: '5,000 - 25,000 Sq. Ft.',
      investmentType: 'Long-Term Corporate Lease',
      image: '/images/hero_luxury_tower.jpg',
      badge: '24/7 Power & HVAC',
      description: 'Next-generation tech park with 100% power backup, zero-water-discharge systems, and smart campus security integrations.'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Hero Header Banner */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        <img
          src="/images/united_commercial.jpg"
          alt="Ongoing Commercial Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            ONGOING COMMERCIAL
          </h1>
          <p className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Grade-A Corporate Office Hubs & High-Street Luxury Retail Centers
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* Main Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Commercial Infrastructure</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Grade-A Corporate Towers & <span className="text-[#D4AF37] italic font-serif">Retail Parks</span>
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-light">
              Designed for Fortune 500 corporations, tech behemoths, and luxury retail brands seeking high-ROI commercial assets.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commercialProjects.map((project) => (
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
                      <span className="px-3 py-1 bg-[#1A1A1A]/90 text-[#D4AF37] font-bold text-[10px] uppercase rounded-full border border-[#D4AF37]/30">
                        {project.badge}
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
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Detailed Specs Block */}
                    <div className="space-y-2 bg-[#FDFBF7] p-3.5 rounded-xl border border-stone-200 text-xs">
                      <div className="flex justify-between border-b border-stone-200 pb-1.5">
                        <span className="text-stone-500 text-[10px] uppercase">Category</span>
                        <span className="font-bold text-stone-900">{project.category}</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-200 pb-1.5">
                        <span className="text-stone-500 text-[10px] uppercase">Floor Plate Scale</span>
                        <span className="font-bold text-stone-900">{project.floorPlate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500 text-[10px] uppercase">Investment Model</span>
                        <span className="font-bold text-[#D4AF37]">{project.investmentType}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
                  <span className="font-serif font-bold text-base text-[#1A1A1A]">
                    {project.price}
                  </span>

                  <button
                    onClick={onOpenEnquire}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all"
                  >
                    <span>Enquire Pitch Deck</span>
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
