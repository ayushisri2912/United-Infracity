import React, { useState } from 'react';
import { MapPin, ArrowUpRight, BedDouble, Maximize2, ShieldCheck, Sparkles, Building2, ChevronRight, Download } from 'lucide-react';

export default function OngoingResidentialPage({ onOpenEnquire, onNavigateHome }) {
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  const residentialProjects = [
    {
      id: 101,
      title: 'Aura Grande Residency',
      location: 'Golf Course Extension, Prime Sector 65',
      price: 'Starting ₹1.95 Cr*',
      statusBadge: 'Under Construction 2027',
      statusColor: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
      specs: '3 & 4 BHK Ultra-Luxury Condos',
      area: '2,450 - 3,900 Sq. Ft.',
      image: '/images/united_residences.jpg',
      tag: 'Flagship Sky Living',
      description: 'Ultra-luxurious high-rise residences featuring private elevator foyers, temperature-controlled rooftop infinity pool, and panoramic golf course views.'
    },
    {
      id: 102,
      title: 'The Celestial Villas',
      location: 'Expressway Golf Enclave Sector 128',
      price: 'Starting ₹3.50 Cr*',
      statusBadge: 'Under Construction 2026',
      statusColor: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
      specs: '4 & 5 BHK Independent Luxury Villas',
      area: '4,200 - 6,500 Sq. Ft.',
      image: '/images/hero_luxury_tower.jpg',
      tag: 'Bespoke Villas',
      description: 'Private estate villas featuring private plunge pools, home automation systems, manicured rooftop sun decks, and personal basement parking.'
    },
    {
      id: 103,
      title: 'United Grand Sky Condos',
      location: 'Central Metro Tech Corridor',
      price: 'Starting ₹1.45 Cr*',
      statusBadge: 'Possession Q3 2026',
      statusColor: 'bg-[#D4AF37]/20 text-[#997B20] border-[#D4AF37]/40',
      specs: '2 & 3 BHK Smart Residences',
      area: '1,350 - 2,100 Sq. Ft.',
      image: '/images/aura_tower_facade.jpg',
      tag: 'Smart Urban Living',
      description: 'Next-generation smart apartments equipped with voice-activated climate control, biometric security access, and 5-tier concierge services.'
    },
    {
      id: 104,
      title: 'Imperial Sky Suites',
      location: 'Metropolitan Horizon Belt',
      price: 'Starting ₹2.75 Cr*',
      statusBadge: 'Possession Q1 2027',
      statusColor: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
      specs: '3 & 4 BHK Duplex Penthouses',
      area: '3,100 - 4,800 Sq. Ft.',
      image: '/images/united_commercial.jpg',
      tag: 'Duplex Penthouse',
      description: 'Double-height sky suites with private jacuzzi decks, Italian marble flooring, and exclusive sky lounge access.'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Hero Header Banner */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        <img
          src="/images/united_residences.jpg"
          alt="Ongoing Residential Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            ONGOING RESIDENTIAL
          </h1>
          <p className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Luxury Residential Sanctuaries & Ultra-Luxury Sky Condos
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* Main Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Luxury Living Sanctuaries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Pioneering Sky Condos & <span className="text-[#D4AF37] italic font-serif">Bespoke Villas</span>
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm font-light">
              Explore our ongoing residential sanctuaries engineered with biophilic landscaping, smart automation, and world-class 5-star amenities.
            </p>
          </div>

          {/* Grid of Residential Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residentialProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-[#1A1A1A]/90 backdrop-blur-md text-[#D4AF37] font-bold text-[10px] uppercase tracking-wider rounded-full border border-[#D4AF37]/30">
                      {project.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 font-semibold text-[10px] uppercase tracking-wider rounded-full border backdrop-blur-md ${project.statusColor}`}>
                      {project.statusBadge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-stone-300 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-white group-hover:text-[#D4AF37] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Spec Table */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Specification Table */}
                  <div className="bg-[#FDFBF7] rounded-xl border border-stone-200 p-3.5 grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <span className="text-stone-400 block text-[9px] uppercase tracking-wider">Type</span>
                      <span className="font-bold text-stone-800 text-[11px] block mt-0.5">{project.specs}</span>
                    </div>
                    <div className="border-x border-stone-200 px-1">
                      <span className="text-stone-400 block text-[9px] uppercase tracking-wider">Carpet Area</span>
                      <span className="font-bold text-stone-800 text-[11px] block mt-0.5">{project.area}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[9px] uppercase tracking-wider">Investment</span>
                      <span className="font-bold text-[#D4AF37] text-[11px] block mt-0.5">{project.price}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={onOpenEnquire}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Brochure</span>
                    </button>

                    <button
                      onClick={() => setSelectedProjectModal(project)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-[#D4AF37] border border-[#D4AF37]/40 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#FDFBF7] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#D4AF37]/30 relative">
            <div className="relative h-64">
              <img
                src={selectedProjectModal.image}
                alt={selectedProjectModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black"
              >
                ✕
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
                  {selectedProjectModal.tag}
                </span>
                <h3 className="font-serif font-bold text-3xl text-[#1A1A1A] mt-1">
                  {selectedProjectModal.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {selectedProjectModal.location}
                </p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {selectedProjectModal.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-white rounded-xl border border-stone-200 text-xs">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Specifications</span>
                  <span className="font-bold text-stone-800">{selectedProjectModal.specs}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Carpet Area</span>
                  <span className="font-bold text-stone-800">{selectedProjectModal.area}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Status</span>
                  <span className="font-bold text-[#D4AF37]">{selectedProjectModal.statusBadge}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <span className="font-serif font-bold text-2xl text-[#1A1A1A]">
                  {selectedProjectModal.price}
                </span>
                <button
                  onClick={() => {
                    setSelectedProjectModal(null);
                    onOpenEnquire();
                  }}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#B38F24] text-white font-semibold text-xs uppercase tracking-widest rounded-xl shadow-lg"
                >
                  Schedule Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
