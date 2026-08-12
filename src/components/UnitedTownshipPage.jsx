import React from 'react';
import { Compass, Sun, ShieldCheck, Waves, Trees, Download, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function UnitedTownshipPage({ onOpenEnquire, onNavigateHome }) {
  const townshipFeatures = [
    {
      icon: Sun,
      title: 'Solar Grid Infrastructure',
      description: '100% renewable solar power generation for all common area lighting, EV charging stations, and water pumps.'
    },
    {
      icon: ShieldCheck,
      title: '5-Tier Smart Security',
      description: 'AI-assisted perimeter surveillance, RFID entry gates, automated visitor validation, and 24/7 security patrols.'
    },
    {
      icon: Waves,
      title: 'Integrated 5-Star Clubhouses',
      description: '50,000 Sq. Ft. mega clubhouses featuring Olympic-size swimming pools, indoor squash courts, and wellness spas.'
    },
    {
      icon: Trees,
      title: '70%+ Biophilic Green Acres',
      description: 'Manicured botanical gardens, private jogging tracks, organic farming zones, and rainwater harvesting lakes.'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Hero Header Banner */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        <img
          src="/images/aura_tower_facade.jpg"
          alt="United Township Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            UNITED TOWNSHIP
          </h1>
          <p className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Integrated 150+ Acre Master-Planned Smart Eco-Townships
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
                <Compass className="w-3.5 h-3.5" />
                <span>150+ Acre Sustainable Enclave</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
                United Smart Eco-Township: <br />
                <span className="text-[#D4AF37] italic font-serif">A City Within A City</span>
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                United Township represents the pinnacle of modern master planning. Spanning over 150 acres of lush greenery, it integrates luxury villas, sky apartments, international schools, healthcare facilities, and high-street retail promenades within a single secure perimeter.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenEnquire}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Master Plan PDF</span>
                </button>

                <button
                  onClick={onOpenEnquire}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all"
                >
                  <span>Book Township Tour</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/30 group">
                <img
                  src="/images/united_residences.jpg"
                  alt="United Township Master Plan"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                    150+ ACRE MASTER PLAN
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    United Imperial Smart Enclave
                  </h4>
                </div>
              </div>
            </div>

          </div>

          {/* Township Features List */}
          <div className="space-y-6 pt-6">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Township Infrastructure & <span className="text-[#D4AF37] italic font-serif">Smart Amenities</span>
              </h3>
              <p className="text-xs text-stone-600 font-light">
                Engineered for self-sustaining luxury, security, and eco-friendly urban living.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {townshipFeatures.map((feature, idx) => {
                const IconComp = feature.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-sm space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-stone-900">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
