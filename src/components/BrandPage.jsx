import React from 'react';
import { ShieldCheck, Building2, Sparkles, Heart, Award, ArrowRight, CheckCircle2, ChevronRight, Compass, Users } from 'lucide-react';

export default function BrandPage({ onOpenEnquire, onSelectSection, onNavigateHome }) {
  const coreValues = [
    {
      icon: Building2,
      title: 'Architectural Distinction',
      description: 'Crafting landmark skylines with world-class engineering, seismic safety, and timeless aesthetics.'
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromising Integrity',
      description: '100% RERA compliant operations, transparent pricing, and zero-compromise construction timelines.'
    },
    {
      icon: Sparkles,
      title: 'Sustainable Urbanism',
      description: 'Integrating solar grids, rainwater harvesting, biophilic landscaping, and green building certifications.'
    },
    {
      icon: Users,
      title: 'Customer-Centric Heritage',
      description: 'Empowering 6,000+ families and business owners with addresses of prestige, safety, and high ROI.'
    },
    {
      icon: Award,
      title: 'Future-Ready Innovation',
      description: 'Pioneering IoT-enabled smart homes, rooftop sky-lounges, and LEED-certified commercial complexes.'
    }
  ];

  const brandJourney = [
    {
      year: '2011',
      title: 'Foundational Vision',
      detail: 'United Infracity Private Limited was founded with a singular commitment to elevate urban infrastructure.'
    },
    {
      year: '2016',
      title: 'Commercial Landmarks',
      detail: 'Pioneered Grade-A corporate towers and luxury high-street retail spaces in premier tech corridors.'
    },
    {
      year: '2020',
      title: 'Integrated Township Era',
      detail: 'Launched 150-acre master-planned green township featuring private clubhouses, sports parks, and villas.'
    },
    {
      year: '2024 - 2026',
      title: 'Metropolitan Legacy',
      detail: 'Surpassed 5 Million Sq. Ft. delivered with 25+ ongoing and completed landmark developments.'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Top Hero Banner Header with Full-Width Background Image & Dark Overlay (Matching Shalimar reference design) */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        {/* Background Image */}
        <img
          src="/images/aura_tower_facade.jpg"
          alt="United Infracity About Us Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        
        {/* Dark Overlay for high legibility */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        {/* Centered Overlay Content: ABOUT US ONLY */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            ABOUT US
          </h1>

          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* MAIN TWO-COLUMN GRID LAYOUT (The Spirit of UNITED INFRACITY) */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: The Spirit of UNITED INFRACITY (High-Quality Inspiring Visuals & Badges) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Corporate Essence</span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15]">
                  The Spirit of <br />
                  <span className="text-[#D4AF37] italic font-serif">UNITED INFRACITY</span>
                </h2>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed font-light">
                More than constructing buildings, our spirit lies in creating ecosystems where families create lifelong memories, businesses thrive, and cities establish iconic architectural landmarks.
              </p>

              {/* Main Inspiring Image Card 1: Modern Architectural Facade */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white group">
                <img
                  src="/images/hero_luxury_tower.jpg"
                  alt="The Spirit of United Infracity Architecture"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                    ARCHITECTURAL PARAGON
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A] mt-0.5">
                    Flagship Skyline Developments
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Combining structural mastery with timeless biophilic luxury.
                  </p>
                </div>
              </div>

              {/* Secondary Inspiring Image Card 2: Happy Family & Fine Interiors */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="relative rounded-xl overflow-hidden shadow-md border border-[#D4AF37]/20 group h-44">
                  <img
                    src="/images/united_residences.jpg"
                    alt="Luxury Living & Happy Families"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-[11px] font-serif font-bold">
                    6,000+ Happy Patrons
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-md border border-[#D4AF37]/20 group h-44">
                  <img
                    src="/images/aura_tower_facade.jpg"
                    alt="Corporate Heritage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-[11px] font-serif font-bold">
                    15+ Years Distinction
                  </span>
                </div>
              </div>

              {/* Quick Brand Quote Callout Box */}
              <div className="p-5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-md">
                <p className="text-stone-700 text-xs italic font-serif leading-relaxed">
                  "Our signature is defined not by how high we build, but by the enduring trust and legacy we cultivate within every square foot."
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-stone-900">— Leadership Desk</span>
                  <span className="text-[#D4AF37] font-semibold">United Infracity Pvt. Ltd.</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Text Sections for Our Philosophy, Core Values & Brand Journey */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* SECTION 1: OUR PHILOSOPHY */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 shadow-sm space-y-4 relative">
                <div className="absolute top-0 left-8 w-16 h-[3px] bg-[#D4AF37]" />
                
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Foundational Ethics</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  Our <span className="text-[#D4AF37] italic font-serif">Brand Philosophy</span>
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                  At <strong>United Infracity Private Limited</strong>, our philosophy is anchored in the belief that luxury real estate should synthesize structural safety, urban convenience, and human well-being.
                </p>

                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  Inspired by world-leading smart cities and sustainable master plans, every project is engineered with 100% RERA compliance, advanced seismic safety, and environment-first biophilic designs. We strive to create habitats that appreciate in emotional value for generations and deliver solid financial security for our patrons.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Seismic-Resistant Structures</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Transparent Title Deed Guarantees</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>70%+ Open Green Landscapes</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>On-Time Milestone Deliveries</span>
                  </div>
                </div>
              </div>

              {/* SECTION 2: CORE VALUES (With Custom Gold Icons) */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Guiding Pillars</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    Our <span className="text-[#D4AF37] italic font-serif">Core Values</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coreValues.map((value, idx) => {
                    const IconComponent = value.icon;
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center mb-3 group-hover:bg-[#D4AF37] transition-colors">
                          <IconComponent className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" />
                        </div>

                        <h4 className="font-serif font-bold text-base text-stone-900 group-hover:text-[#D4AF37] transition-colors mb-1.5">
                          {value.title}
                        </h4>

                        <p className="text-xs text-stone-600 leading-relaxed font-light">
                          {value.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: BRAND JOURNEY (Timeline) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 shadow-sm space-y-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    <span>Milestones of Excellence</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    The <span className="text-[#D4AF37] italic font-serif">Brand Journey</span>
                  </h3>
                </div>

                {/* Vertical Timeline Stream */}
                <div className="relative pl-6 sm:pl-8 space-y-6 border-l-2 border-[#D4AF37]/30">
                  {brandJourney.map((step, idx) => (
                    <div key={idx} className="relative group">
                      {/* Gold Bullet Point */}
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#FDFBF7] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors" />
                      
                      <div className="inline-block px-3 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold font-serif mb-1">
                        {step.year}
                      </div>

                      <h4 className="font-serif font-bold text-base text-stone-900 group-hover:text-[#D4AF37] transition-colors">
                        {step.title}
                      </h4>

                      <p className="text-xs text-stone-600 font-light mt-1 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Banner inside Brand Page */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-stone-900 to-stone-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block">
                      BECOME A PART OF OUR LEGACY
                    </span>
                    <h4 className="font-serif font-bold text-lg text-white mt-0.5">
                      Explore United Infracity Flagship Portfolios
                    </h4>
                  </div>
                  
                  <button
                    onClick={onNavigateHome}
                    className="whitespace-nowrap px-5 py-2.5 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all"
                  >
                    View All Projects
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
