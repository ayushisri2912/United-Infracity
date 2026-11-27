import React from 'react';
import {
  Building2,
  MapPin,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Award,
  Download,
  Zap,
  Shield,
  Car,
  Layers,
  ArrowRight,
  TrendingUp,
  Briefcase
} from 'lucide-react';

export default function OngoingCommercialPage({ onOpenEnquire, onNavigateHome }) {
  const commercialProjects = [
    {
      id: 201,
      title: 'Aura Tower Corporate Center',
      location: 'Central Financial Business District, Lucknow',
      price: 'Investment from ₹1.25 Cr*',
      category: 'Grade-A Corporate Offices',
      floorPlate: '3,500 - 18,500 Sq. Ft.',
      investmentType: 'Pre-Leased & Institutional Grade',
      image: '/images/united_commercial.webp',
      badge: 'LEED Gold Certified',
      description:
        'Iconic corporate tower engineered with double-glazed acoustic glass facades, high-speed elevator banks, advanced HVAC filtration, and rooftop executive helipad.'
    },
    {
      id: 202,
      title: 'United Commercial Square',
      location: 'Metropolitan Tech Corridor Sector 62, Lucknow',
      price: 'Investment from ₹85 Lakhs*',
      category: 'High-Street Retail & F&B Promenade',
      floorPlate: '850 - 4,200 Sq. Ft.',
      investmentType: 'High Footfall Retail & Self-Use',
      image: '/images/aura_tower_facade.webp',
      badge: 'High Footfall Boulevard',
      description:
        'Open-air pedestrian luxury retail boulevard featuring double-height retail frontages, landscaped al-fresco dining terraces, and dedicated multi-tier parking.'
    },
    {
      id: 203,
      title: 'Capital Tech & Innovation Park',
      location: 'Expressway Cyber Hub Belt, Lucknow',
      price: 'Investment from ₹2.10 Cr*',
      category: 'IT/ITeS Special Economic Zone',
      floorPlate: '5,000 - 25,000 Sq. Ft.',
      investmentType: 'Long-Term Corporate Lease',
      image: '/images/hero_luxury_tower.webp',
      badge: '24/7 Smart Campus',
      description:
        'Next-generation integrated technology campus with 100% DG power redundancy, smart campus automation, EV charging infrastructure, and zero-water-discharge systems.'
    }
  ];

  const commercialHighlights = [
    {
      icon: ShieldCheck,
      title: 'LEED Certified Green Architecture',
      desc: 'Double-glazed energy-efficient facades reducing thermal load & optimizing natural light.'
    },
    {
      icon: Zap,
      title: '100% DG Power Redundancy',
      desc: 'Dual-grid power feeds with automatic transfer switches for continuous uninterrupted business operations.'
    },
    {
      icon: Shield,
      title: 'Multi-Tier Security & BMS',
      desc: 'Intelligent building management systems with biometric turnstiles & comprehensive CCTV monitoring.'
    },
    {
      icon: Car,
      title: 'Ample Multi-Level Parking',
      desc: 'Dedicated multi-tier basement and stilt parking bays with seamless wide vehicular ramps.'
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414] font-montserrat antialiased selection:bg-[#C49D55] selection:text-white">
      {/* ───────────────────────────────────────────────────────────────────
          HERO BANNER HEADER
          - Matches Brand Page & Residential: reduced overlay darkness so the
            commercial tower architectural facade is visible & bright.
         ─────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#C49D55]/30">
        <img
          src="/images/united_commercial.webp"
          alt="Ongoing Commercial Projects Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* Soft, balanced overlays identical to Brand Page */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C49D55] uppercase block">
            COMMERCIAL INFRASTRUCTURE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl">
            ONGOING COMMERCIAL
          </h1>
          <p className="text-[#C49D55] text-xs sm:text-sm font-medium tracking-widest uppercase mt-1">
            Corporate Towers & Luxury Retail Centers
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          MAIN SECTION
          - Width matching Navbar: max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14
          - Theme: Ivory (#F8F6F1), Champagne Gold (#C49D55), Sharp Corners
         ─────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F8F6F1]">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-12 sm:space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
              COMMERCIAL EXCELLENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141414]">
              Grade-A Corporate Towers & <span className="text-[#C49D55] italic font-serif">Retail Parks</span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto my-2" />
            <p className="text-sm sm:text-base text-[#65605A] font-light leading-relaxed pt-1">
              Engineered for leading corporations, IT/ITeS enterprises, and luxury retail brands seeking institutional-grade commercial assets with maximum footfall and sustained capital appreciation.
            </p>
          </div>

          {/* Project Cards (Sharp Corners & Thin Gold Borders) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commercialProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#C49D55]/30 hover:border-[#C49D55] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#141414]/90 text-[#C49D55] font-semibold text-[10px] uppercase tracking-wider border border-[#C49D55]/30">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-stone-300 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C49D55]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif font-normal text-xl sm:text-2xl text-white group-hover:text-[#C49D55] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    <p className="text-xs sm:text-sm text-[#65605A] leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Specifications Specs Block */}
                    <div className="space-y-2.5 bg-[#F8F6F1] p-4 border border-[#C49D55]/20 text-xs">
                      <div className="flex justify-between items-center border-b border-[#C49D55]/15 pb-2">
                        <span className="text-[#65605A] text-[10px] uppercase tracking-wider font-semibold">Category</span>
                        <span className="font-semibold text-[#141414]">{project.category}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-[#C49D55]/15 pb-2">
                        <span className="text-[#65605A] text-[10px] uppercase tracking-wider font-semibold">Floor Plate Scale</span>
                        <span className="font-semibold text-[#141414]">{project.floorPlate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#65605A] text-[10px] uppercase tracking-wider font-semibold">Investment Model</span>
                        <span className="font-semibold text-[#C49D55]">{project.investmentType}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-200 mt-2">
                  <div>
                    <span className="text-[10px] text-[#65605A] uppercase tracking-wider block">Pricing</span>
                    <span className="font-serif font-bold text-base sm:text-lg text-[#141414]">
                      {project.price}
                    </span>
                  </div>

                  <button
                    onClick={onOpenEnquire}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141414] hover:bg-[#C49D55] text-white hover:text-[#141414] font-semibold text-xs uppercase tracking-wider border border-[#C49D55]/40 transition-all cursor-pointer"
                  >
                    <span>Enquire Pitch Deck</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ───────────────────────────────────────────────────────────────────
              COMMERCIAL INFRASTRUCTURE SPECIFICATIONS STRIP
             ─────────────────────────────────────────────────────────────────── */}
          <div className="bg-white border border-[#C49D55]/30 p-6 sm:p-8 lg:p-10">
            <div className="text-center max-w-2xl mx-auto space-y-1 mb-8">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                INSTITUTIONAL BENCHMARKS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414]">
                Enterprise-Grade Infrastructure Standards
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commercialHighlights.map((hl, idx) => {
                const IconComp = hl.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-[#F8F6F1] border border-[#C49D55]/20 hover:border-[#C49D55] transition-all space-y-2.5"
                  >
                    <div className="w-10 h-10 bg-[#141414] text-[#C49D55] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#141414]">
                      {hl.title}
                    </h4>
                    <p className="text-xs text-[#65605A] font-light leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────────────
              CORPORATE ADVISORY CTA STRIP
             ─────────────────────────────────────────────────────────────────── */}
          <div className="bg-[#141414] text-white p-6 sm:p-8 lg:p-10 border border-[#C49D55]/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                COMMERCIAL LEASING & INVESTMENTS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Looking for Corporate Office Suites or Retail Spaces?
              </h3>
              <p className="text-xs sm:text-sm text-[#B5B5B5] max-w-2xl font-light">
                Connect with our institutional leasing division for customized floor plate options, pre-leased ROI models, and site inspection schedules.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={onOpenEnquire}
                className="px-7 py-3.5 bg-[#C49D55] hover:bg-[#b08b46] text-[#141414] font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Request Commercial Deck</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
