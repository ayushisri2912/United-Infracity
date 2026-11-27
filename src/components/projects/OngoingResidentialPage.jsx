import React, { useState } from 'react';
import {
  MapPin,
  ArrowUpRight,
  BedDouble,
  Maximize2,
  ShieldCheck,
  Sparkles,
  Building2,
  ChevronRight,
  Download,
  Calendar,
  CheckCircle2,
  Car,
  Dumbbell,
  Waves,
  Users,
  ShoppingBag,
  Shield,
  Zap,
  Flame,
  Trees,
  Layers,
  Compass,
  HardHat,
  Award,
  Phone,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function OngoingResidentialPage({ onOpenEnquire, onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('overview');

  const orchidHeightsDetails = {
    id: 100,
    title: 'United Orchid Heights',
    subtitle: 'The Finest Expression of Modern Living',
    developer: 'M/s United Infracity Private Limited (UIPL - Awasthi Group)',
    reraNumber: 'UPRERAPRJ593231/11/2026',
    cin: 'U70102UP2012PTC050901',
    location: 'Plot No. 6C/GH-2, Vrindavan Yojana Phase-1, Lucknow',
    tag: 'Flagship Residential Development',
    scale: '180 Premium Apartments',
    storeys: '15 Storeys (1st to 15th Floor)',
    configs: '2 BHK, 3 BHK & 3 BHK + Study',
    possession: 'Projected FY 2031-32 (June 31)',
    price: 'On Request / RERA Registered',
    image: '/images/herosec-full.webp',
    showcaseImage: '/images/cta.webp',
    architect: 'The Architect Studio - ABHIKARM',
    structural: 'M/s SBC Structures',
    compliance: '100% RERA & UP Awas Evam Vikas Parishad Compliant',
    overview:
      'United Orchid Heights is an exclusive residential development unveiled by M/s United Infracity Private Limited (Awasthi Group). Thoughtfully conceived across 180 premium apartments, each residence is designed with expansive master bedrooms, extra-large panoramic windows for abundant natural daylight, superior cross-ventilation, modern attached bathrooms, and scenic private balconies for an elevated urban lifestyle.',
    landmarks: [
      { name: 'Delhi Public School (DPS)', distance: '1 Km', time: '3 Mins' },
      { name: 'Shaheed Path Corridor', distance: '3 Km', time: '5 Mins' },
      { name: 'SGPGI Hospital', distance: '4 Km', time: '7 Mins' },
      { name: 'Charbagh Railway Station', distance: '9 Km', time: '20 Mins' },
      { name: 'CCS Lucknow Airport', distance: '10 Km', time: '15 Mins' }
    ],
    amenities: [
      {
        icon: Waves,
        title: 'Swimming Pool & Sun Deck',
        desc: 'Temperature-controlled lap pool with sun loungers for wellness & leisure.'
      },
      {
        icon: Users,
        title: 'Community Club & Banquet Hall',
        desc: 'Spacious air-conditioned venue curated for private family functions & gatherings.'
      },
      {
        icon: Dumbbell,
        title: 'Fully Equipped Gymnasium',
        desc: 'Modern fitness suite with advanced cardio and strength-training equipment.'
      },
      {
        icon: Sparkles,
        title: "Kids' Play Zone",
        desc: 'Dedicated safe indoor and outdoor activity area with child-friendly flooring.'
      },
      {
        icon: ShoppingBag,
        title: 'Stilt Daily-Needs Retail',
        desc: 'Convenient on-campus retail outlets catering to daily grocery essentials.'
      },
      {
        icon: Shield,
        title: '24/7 Security & CCTV',
        desc: 'Multi-tier manned security perimeter with complete high-definition CCTV coverage.'
      },
      {
        icon: ChevronRight,
        title: 'High-Speed Branded Lifts',
        desc: 'High-speed passenger and dedicated stretcher elevators with power backup.'
      },
      {
        icon: Zap,
        title: '100% Power Backup',
        desc: 'Uninterrupted power backup for all apartments, elevators, and common utilities.'
      },
      {
        icon: Flame,
        title: 'NBC-Compliant Fire Safety',
        desc: 'Comprehensive fire-fighting infrastructure strictly adhering to National Building Code.'
      },
      {
        icon: Car,
        title: 'Stilt & Stack Parking',
        desc: 'Ample resident and guest parking bays designed per UP Awas Vikas norms.'
      },
      {
        icon: Trees,
        title: 'Landscaped Greens & CC Roads',
        desc: 'Lush tree-lined green belts, wide internal concrete roads, and grand entrance arch.'
      },
      {
        icon: ShieldCheck,
        title: 'Rainwater Harvesting',
        desc: 'Sustainable ground-water recharging systems and eco-friendly rainwater catchment.'
      }
    ],
    specifications: [
      {
        area: 'Living / Dining / Corridors / Bedrooms / Study',
        spec: 'Premium Vitrified Tiles of reputed national brand'
      },
      {
        area: 'Master & Additional Toilets',
        spec: 'Quality Anti-Skid Ceramic Floor & Designer Ceramic Wall Tiles'
      },
      {
        area: 'Kitchen Finishes',
        spec: 'Granite Countertop with Stainless Steel Sink & Ceramic Wall Tiles up to 2 ft'
      },
      {
        area: 'Wall & Ceiling Finishes',
        spec: 'Oil-Bound Distemper / Acrylic Emulsion Paint in elegant neutral tones'
      },
      {
        area: 'Balconies & Open Sit-Outs',
        spec: 'Durable Anti-Skid Ceramic Flooring with safety architectural railings'
      },
      {
        area: 'Lift Lobbies & Staircase',
        spec: 'Polished Stone / Vitrified Tile Architraves & AEP wall finishes'
      },
      {
        area: 'Electrical Systems',
        spec: 'Concealed copper wiring with modular switches & television/phone points'
      },
      {
        area: 'External Façade',
        spec: 'All-weather architectural exterior cement-based paint treatment'
      }
    ]
  };

  const otherResidentialProjects = [
    {
      id: 101,
      title: 'Aura Grande Residency',
      location: 'Golf Course Extension, Prime Sector 65',
      price: 'Starting ₹1.95 Cr*',
      statusBadge: 'Under Construction',
      specs: '3 & 4 BHK Ultra-Luxury Condos',
      area: '2,450 - 3,900 Sq. Ft.',
      image: '/images/united_residences.webp',
      tag: 'Upcoming Landmark',
      description:
        'Ultra-luxurious high-rise residences featuring private elevator foyers, temperature-controlled rooftop infinity pool, and panoramic golf course views.'
    },
    {
      id: 102,
      title: 'The Celestial Villas',
      location: 'Expressway Golf Enclave Sector 128',
      price: 'Starting ₹3.50 Cr*',
      statusBadge: 'Planning & Design',
      specs: '4 & 5 BHK Independent Luxury Villas',
      area: '4,200 - 6,500 Sq. Ft.',
      image: '/images/hero_luxury_tower.webp',
      tag: 'Bespoke Enclave',
      description:
        'Private estate villas featuring private plunge pools, home automation systems, manicured rooftop sun decks, and dedicated basement parking.'
    },
    {
      id: 103,
      title: 'United Grand Sky Condos',
      location: 'Central Metro Tech Corridor',
      price: 'Starting ₹1.45 Cr*',
      statusBadge: 'Upcoming',
      specs: '2 & 3 BHK Smart Residences',
      area: '1,350 - 2,100 Sq. Ft.',
      image: '/images/aura_tower_facade.webp',
      tag: 'Smart Urban Living',
      description:
        'Next-generation smart apartments equipped with voice-activated climate control, biometric security access, and 5-tier concierge services.'
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414] font-montserrat antialiased selection:bg-[#C49D55] selection:text-white">
      {/* ───────────────────────────────────────────────────────────────────
          HERO BANNER HEADER
          - Exactly matching Brand Page: reduced overlay darkness so the architectural
            tower is clearly visible, refined golden eyebrow and serif typography.
         ─────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#C49D55]/30">
        <img
          src="/images/herosec-full.webp"
          alt="Ongoing Residential Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* Soft, balanced overlays identical to Brand Page */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C49D55] uppercase block">
            OFFICIAL PROJECT PORTFOLIO
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl">
            ONGOING RESIDENTIAL
          </h1>
          <p className="text-[#C49D55] text-xs sm:text-sm font-medium tracking-widest uppercase mt-1">
            United Orchid Heights & Luxury Living
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          MAIN SECTION
          - Width matching Navbar: max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14
          - Sharp corners, luxury champagne gold (#C49D55), ivory (#F8F6F1)
         ─────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F8F6F1]">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-12 sm:space-y-16">

          {/* FLAGSHIP SHOWCASE: UNITED ORCHID HEIGHTS */}
          <div className="bg-white border border-[#C49D55]/30 shadow-sm">
            
            {/* Editorial Header Banner */}
            <div className="bg-[#141414] text-white p-6 sm:p-8 lg:p-10 border-b border-[#C49D55]/30">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase">
                      ✦ FLAGSHIP RESIDENTIAL DEVELOPMENT
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-[#C49D55]/30 text-[#C49D55] text-[11px] font-semibold tracking-wider uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C49D55]" />
                      RERA: {orchidHeightsDetails.reraNumber}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
                    United Orchid Heights
                  </h2>

                  <p className="text-sm text-[#B5B5B5] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C49D55] shrink-0" />
                    <span>{orchidHeightsDetails.location}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={onOpenEnquire}
                    className="px-7 py-3.5 bg-[#C49D55] hover:bg-[#b08b46] text-[#141414] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
                  >
                    <span>Enquire Project Desk</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sub-navigation Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-8 mt-6 border-t border-[#C49D55]/20">
                {[
                  { id: 'overview', label: '01 — Overview' },
                  { id: 'amenities', label: '02 — Amenities' },
                  { id: 'connectivity', label: '03 — Connectivity' },
                  { id: 'specifications', label: '04 — Specifications' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-4 text-xs font-semibold uppercase tracking-widest text-center transition-all cursor-pointer border ${
                      activeTab === tab.id
                        ? 'bg-[#C49D55] text-[#141414] border-[#C49D55]'
                        : 'bg-white/5 text-[#E5E5E5] border-white/10 hover:border-[#C49D55]/50 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB CONTENT AREA */}
            <div className="p-6 sm:p-8 lg:p-10">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-10 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Image */}
                    <div className="lg:col-span-6">
                      <div className="relative border border-[#C49D55]/30 overflow-hidden bg-stone-900 group h-[340px] sm:h-[400px]">
                        <img
                          src={orchidHeightsDetails.showcaseImage}
                          alt="United Orchid Heights Architectural Elevation"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#141414]/90 backdrop-blur-sm border border-[#C49D55]/40 flex items-center justify-between text-white">
                          <div>
                            <span className="text-[10px] font-semibold text-[#C49D55] uppercase tracking-widest block">
                              STATUTORY APPROVAL
                            </span>
                            <span className="text-xs font-medium text-stone-200">
                              UP Awas Evam Vikas Parishad & RERA Approved
                            </span>
                          </div>
                          <ShieldCheck className="w-5 h-5 text-[#C49D55] shrink-0" />
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Key Details */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                          DESIGNED FOR ELEVATED LIVING
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414]">
                          A Vision for Modern Urban Living
                        </h3>
                        <p className="text-sm sm:text-base text-[#65605A] font-light leading-relaxed pt-1">
                          {orchidHeightsDetails.overview}
                        </p>
                      </div>

                      {/* Metric Strips */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 bg-[#F8F6F1] border border-[#C49D55]/20 text-center">
                          <span className="text-[10px] uppercase font-bold text-[#65605A] tracking-wider block">Scale</span>
                          <span className="font-serif font-bold text-lg text-[#141414] block mt-0.5">
                            {orchidHeightsDetails.scale}
                          </span>
                        </div>
                        <div className="p-4 bg-[#F8F6F1] border border-[#C49D55]/20 text-center">
                          <span className="text-[10px] uppercase font-bold text-[#65605A] tracking-wider block">Typology</span>
                          <span className="font-serif font-bold text-sm text-[#141414] block mt-1">
                            {orchidHeightsDetails.configs}
                          </span>
                        </div>
                        <div className="p-4 bg-[#F8F6F1] border border-[#C49D55]/20 text-center">
                          <span className="text-[10px] uppercase font-bold text-[#65605A] tracking-wider block">Possession</span>
                          <span className="font-serif font-bold text-sm text-[#C49D55] block mt-1">
                            {orchidHeightsDetails.possession}
                          </span>
                        </div>
                      </div>

                      {/* Technical Partners */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 bg-white border border-[#C49D55]/30 flex items-start gap-3">
                          <div className="w-9 h-9 bg-[#141414] text-[#C49D55] flex items-center justify-center shrink-0">
                            <Compass className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-semibold text-[#C49D55] tracking-wider block">
                              Architectural Partner
                            </span>
                            <p className="text-xs font-semibold text-[#141414] mt-0.5">
                              {orchidHeightsDetails.architect}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-white border border-[#C49D55]/30 flex items-start gap-3">
                          <div className="w-9 h-9 bg-[#141414] text-[#C49D55] flex items-center justify-center shrink-0">
                            <HardHat className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-semibold text-[#C49D55] tracking-wider block">
                              Structural Consultant
                            </span>
                            <p className="text-xs font-semibold text-[#141414] mt-0.5">
                              {orchidHeightsDetails.structural}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              )}

              {/* TAB 2: AMENITIES */}
              {activeTab === 'amenities' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-[#C49D55]/20 pb-4">
                    <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                      WORLD-CLASS INFRASTRUCTURE
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] mt-1">
                      Amenities & Curated Lifestyle Experiences
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {orchidHeightsDetails.amenities.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <div
                          key={idx}
                          className="p-5 bg-[#F8F6F1] border border-[#C49D55]/25 hover:border-[#C49D55] transition-all duration-300 flex items-start gap-4 group"
                        >
                          <div className="w-10 h-10 bg-[#141414] text-[#C49D55] group-hover:bg-[#C49D55] group-hover:text-[#141414] transition-colors flex items-center justify-center shrink-0">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-serif font-bold text-sm text-[#141414]">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#65605A] font-light leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: LOCATION & CONNECTIVITY */}
              {activeTab === 'connectivity' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="border-b border-[#C49D55]/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                        PRIME SECTOR 6 VRINDAVAN YOJANA
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] mt-1">
                        Location Connectivity & Proximity
                      </h3>
                    </div>
                    <span className="text-xs font-medium text-[#65605A]">
                      Direct access from Amar Shaheed Path Corridor
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {orchidHeightsDetails.landmarks.map((lm, idx) => (
                      <div
                        key={idx}
                        className="p-5 bg-[#F8F6F1] border border-[#C49D55]/25 hover:border-[#C49D55] text-center space-y-1.5 transition-all"
                      >
                        <span className="font-serif font-bold text-2xl sm:text-3xl text-[#C49D55] block">
                          {lm.distance}
                        </span>
                        <span className="text-xs text-[#141414] font-semibold block">
                          {lm.name}
                        </span>
                        <span className="text-[10px] text-[#65605A] font-medium block">
                          Approx. {lm.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-[#141414] text-white border border-[#C49D55]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold tracking-wider text-[#C49D55] uppercase block">
                        SITE ADDRESS & COORDINATES
                      </span>
                      <p className="font-serif text-lg text-white">
                        {orchidHeightsDetails.location}
                      </p>
                      <p className="text-xs text-[#B5B5B5]">
                        Strategic connectivity to SGPGI, Airport, Ekana Stadium, Medanta Hospital & Lucknow City Centre.
                      </p>
                    </div>

                    <button
                      onClick={onOpenEnquire}
                      className="px-6 py-3 bg-[#C49D55] hover:bg-[#b08b46] text-[#141414] font-semibold text-xs uppercase tracking-widest transition-all shrink-0 cursor-pointer"
                    >
                      Request Location Brochure
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 4: SPECIFICATIONS */}
              {activeTab === 'specifications' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-[#C49D55]/20 pb-4">
                    <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                      ARCHITECTURAL FINISHES & MATERIALS
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] mt-1">
                      Official Project Specifications
                    </h3>
                  </div>

                  <div className="border border-[#C49D55]/30 divide-y divide-[#C49D55]/20 bg-[#F8F6F1]">
                    {orchidHeightsDetails.specifications.map((row, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center hover:bg-white transition-colors"
                      >
                        <div className="sm:col-span-5 font-serif font-bold text-sm text-[#141414] flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C49D55] shrink-0" />
                          <span>{row.area}</span>
                        </div>
                        <div className="sm:col-span-7 text-xs sm:text-sm text-[#65605A] font-medium pl-6 sm:pl-0">
                          {row.spec}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────────────
              OTHER ONGOING RESIDENTIAL SANCTUARIES (Clean Editorial Cards)
             ─────────────────────────────────────────────────────────────────── */}
          <div className="space-y-8 pt-4">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                ADDITIONAL DEVELOPMENTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141414]">
                Explore Other Residential Sanctuaries
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherResidentialProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white border border-[#C49D55]/30 hover:border-[#C49D55] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-64 overflow-hidden bg-stone-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#141414]/90 text-[#C49D55] font-semibold text-[10px] uppercase tracking-wider border border-[#C49D55]/30">
                        {project.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-stone-300 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C49D55]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif font-normal text-xl text-white group-hover:text-[#C49D55] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#65605A] border-b border-stone-100 pb-2">
                        <span>{project.specs}</span>
                        <span className="font-semibold text-[#141414]">{project.area}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#65605A] leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                      <div>
                        <span className="text-[10px] text-[#65605A] uppercase tracking-wider block">Price</span>
                        <span className="font-serif font-bold text-[#C49D55] text-base">{project.price}</span>
                      </div>
                      <button
                        onClick={onOpenEnquire}
                        className="px-4 py-2 bg-[#141414] hover:bg-[#C49D55] text-white hover:text-[#141414] font-semibold text-xs uppercase tracking-wider border border-[#C49D55]/40 transition-all cursor-pointer"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
