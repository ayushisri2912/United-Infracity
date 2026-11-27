import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Compass,
  Sun,
  ShieldCheck,
  Waves,
  Trees,
  Download,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Zap,
  Shield,
  Droplets,
  Recycle,
  Car,
  Layers,
  Award,
  Phone,
  Clock,
  Route,
  Trophy,
  Train,
  Plane,
  Navigation
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function UnitedTownshipPage({ onOpenEnquire, onNavigateHome }) {
  const [activeZone, setActiveZone] = useState('residential');
  const pageRef = useRef(null);
  const section1Ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Section 1 image scale reveal
      gsap.fromTo(
        '.gsap-township-img',
        { scale: 1.15, filter: 'brightness(0.85)' },
        {
          scale: 1,
          filter: 'brightness(1)',
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-township-img-wrap',
            start: 'top 85%',
            once: true
          }
        }
      );

      // 2. Pillars cards staggered entrance
      gsap.fromTo(
        '.gsap-pillar-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-pillars-grid',
            start: 'top 85%',
            once: true
          }
        }
      );

      // 3. Transit proximity cards staggered entrance
      gsap.fromTo(
        '.gsap-transit-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-transit-grid',
            start: 'top 85%',
            once: true
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const townshipMetrics = [
    { label: 'Total Land Parcel', value: '150+ Acres', sub: 'Integrated Master Layout' },
    { label: 'Green & Open Space', value: '70%+', sub: 'Biophilic Parks & Lakes' },
    { label: 'Planned Residences', value: '10,000+', sub: 'Villas & Sky Apartments' },
    { label: 'Eco-Sustainability', value: 'Zero Carbon', sub: 'Solar & Water Neutral Goal' }
  ];

  const townshipZones = [
    {
      id: 'residential',
      title: 'Residential Sanctuaries',
      tag: 'ZONE 01',
      icon: Building2,
      subtitle: 'Luxury High-Rise Condos & Private Estate Villas',
      description:
        'Low-density residential clusters nestled amid manicured green boulevards. Featuring 2, 3 & 4 BHK luxury residences and signature custom villas with private plunge pools, expansive decks, and direct clubhouse access.',
      highlights: [
        'Low-density residential towers with panoramic green views',
        'Independent duplex villas with personal gardens & parking',
        'Pedestrian-first internal roads with vehicle-free podiums',
        'Private security checkpoints for every residential cluster'
      ],
      image: '/images/herosec-full.webp'
    },
    {
      id: 'commercial',
      title: 'Central Business & Retail Boulevard',
      tag: 'ZONE 02',
      icon: ShoppingBag,
      subtitle: 'Grade-A Offices, High-Street Boutiques & Dining',
      description:
        'A vibrant open-air pedestrian retail promenade, corporate office suites, banking pavilions, multiplex theaters, and gourmet al-fresco dining terraces providing everything at your doorstep.',
      highlights: [
        'Double-height retail frontages for leading global brands',
        'Corporate Grade-A co-working & enterprise suites',
        'Fine-dining plazas, open cafés & central event amphitheater',
        'Dedicated multi-level parking with EV charging infrastructure'
      ],
      image: '/images/united_commercial.webp'
    },
    {
      id: 'education',
      title: 'Institutional & Education Campus',
      tag: 'ZONE 03',
      icon: GraduationCap,
      subtitle: 'Premier K-12 Academies & Early Learning Centers',
      description:
        'Anchored by world-class educational institutions such as Seth M. R. Jaipuria School, offering complete CBSE K-12 academic infrastructure, modern sports arenas, robotics laboratories, and safe walk-to-school zones.',
      highlights: [
        'Accredited CBSE K-12 curriculum on an expansive 7+ acre campus',
        'Olympic-standard athletic tracks, cricket academy & tennis courts',
        'Early childhood daycare & Montessori enrichment centers',
        'Secure zero-traffic pedestrian school transit corridors'
      ],
      image: '/images/jaipuria-school.webp'
    },
    {
      id: 'wellness',
      title: 'Healthcare, Wellness & Nature Reserve',
      tag: 'ZONE 04',
      icon: HeartPulse,
      subtitle: 'Multispeciality Care, Forest Trails & Central Lake',
      description:
        'Dedicated health and holistic living zones equipped with 24/7 multispeciality clinics, emergency trauma response, Ayurvedic wellness retreats, organic farming patches, and a massive 15-acre central natural lake.',
      highlights: [
        '24/7 multispeciality medical clinic with emergency pharmacy',
        '15-acre central rainwater harvesting lake with boardwalks',
        '10+ km dedicated rubberized jogging and cycling tracks',
        'Ayurvedic wellness spas, yoga pavilions & meditation gazebos'
      ],
      image: '/images/peace-img.webp'
    }
  ];

  const smartPillars = [
    {
      icon: Sun,
      title: 'Solar Micro-Grid Power',
      description: 'Clean renewable solar power generation powering common area lighting, street lamps, and water pumping networks.'
    },
    {
      icon: ShieldCheck,
      title: '5-Tier AI Perimeter Security',
      description: 'Integrated smart security with RFID vehicle boom barriers, facial-recognition entry gates, and 24/7 CCTV patrolling.'
    },
    {
      icon: Waves,
      title: '50,000+ Sq. Ft. Mega Clubhouses',
      description: 'Grand resort clubhouses featuring Olympic-size heated swimming pools, indoor squash & badminton courts, and banqueting.'
    },
    {
      icon: Trees,
      title: '70%+ Biophilic Green Acres',
      description: 'Over 25,000 planted indigenous trees, aromatic herbal parks, Miyawaki micro-forests, and natural ecological buffer zones.'
    },
    {
      icon: Droplets,
      title: 'Zero-Discharge Water Treatment',
      description: 'On-site advanced sewage treatment plants (STP), automated rainwater harvesting pits, and 100% recycled landscape irrigation.'
    },
    {
      icon: Recycle,
      title: 'Automated Waste Recycling',
      description: 'Segregated waste collection with mechanized organic composting units transforming township waste into nutrient soil.'
    },
    {
      icon: Car,
      title: 'EV Mobility & Smart Transit',
      description: 'Dedicated electric golf-cart transit for residents, comprehensive EV charging stations, and bicycle sharing docks.'
    },
    {
      icon: Layers,
      title: 'Underground Utility Ducts',
      description: 'All optical fiber, gas piping, power cables, and drainage routed through subterranean utility ducts with zero overhead wires.'
    }
  ];

  const connectivityPoints = [
    { destination: 'Amar Shaheed Path Corridor', time: '5 Mins', distance: '3 Km', icon: Route, tag: 'Expressway' },
    { destination: 'SGPGI Super Speciality Hospital', time: '7 Mins', distance: '4 Km', icon: HeartPulse, tag: 'Healthcare' },
    { destination: 'Ekana International Cricket Stadium', time: '12 Mins', distance: '7 Km', icon: Trophy, tag: 'Sports Arena' },
    { destination: 'Charbagh Central Railway Station', time: '20 Mins', distance: '9 Km', icon: Train, tag: 'Rail Transit' },
    { destination: 'CCS Lucknow International Airport', time: '15 Mins', distance: '10 Km', icon: Plane, tag: 'Air Gateway' }
  ];

  return (
    <div
      ref={pageRef}
      className="bg-[#FFFFFF] text-[#141414] font-montserrat antialiased selection:bg-[#C49D55] selection:text-white"
    >
      {/* ───────────────────────────────────────────────────────────────────
          HERO BANNER HEADER
          - Matches Brand Page & Residential: reduced overlay darkness so the
            architectural background is visible & bright.
         ─────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#C49D55]/30">
        <img
          src="/images/herosec-full.webp"
          alt="United Township Projects Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* Soft, balanced overlays identical to Brand Page */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C49D55] uppercase block">
            MASTER-PLANNED COMMUNITIES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl">
            UNITED TOWNSHIP
          </h1>
          <p className="text-[#C49D55] text-xs sm:text-sm font-medium tracking-widest uppercase mt-1">
            Integrated 150+ Acre Smart Eco-Townships
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
          
          {/* SECTION 1: MASTER OVERVIEW */}
          <div ref={section1Ref} className="bg-white border border-[#C49D55]/30 p-6 sm:p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                  150+ ACRE SUSTAINABLE ENCLAVE
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141414] leading-tight">
                  United Smart Eco-Township: <br />
                  <span className="text-[#C49D55] italic font-serif">A City Within A City</span>
                </h2>

                <p className="text-sm sm:text-base text-[#65605A] leading-relaxed font-light">
                  United Township represents the pinnacle of visionary master-planning by United Infracity Private Limited (Awasthi Group). Spanning over 150 sprawling acres of serene landscape, this integrated eco-township harmoniously unites high-rise residential towers, private villas, international educational institutions, Grade-A retail boulevards, multispeciality healthcare, and lush nature reserves behind a guarded, multi-tier security perimeter.
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {townshipMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#F8F6F1] border border-[#C49D55]/20 text-center space-y-1"
                    >
                      <span className="font-serif font-bold text-lg sm:text-xl text-[#141414] block">
                        {metric.value}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#C49D55] tracking-wider block">
                        {metric.label}
                      </span>
                      <span className="text-[9px] text-[#65605A] block">
                        {metric.sub}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-stone-200">
                  <button
                    onClick={onOpenEnquire}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#C49D55] hover:bg-[#b08b46] text-[#141414] font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
                  >
                    <span>Book Township Tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Enlarged Animated Visual Frame */}
              <div className="lg:col-span-6">
                <div className="gsap-township-img-wrap relative border border-[#C49D55]/40 overflow-hidden bg-stone-900 group h-[460px] sm:h-[520px] lg:h-[580px] shadow-xl hover:border-[#C49D55] hover:shadow-[0_0_35px_rgba(196,157,85,0.25)] transition-all duration-700">
                  
                  {/* Luxury Animated Architectural Corner Brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C49D55] pointer-events-none z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-[#E8C782]" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C49D55] pointer-events-none z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-[#E8C782]" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C49D55] pointer-events-none z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-[#E8C782]" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C49D55] pointer-events-none z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-[#E8C782]" />

                  {/* Diagonal Light Shimmer Sweep on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform ease-in-out pointer-events-none z-10" />

                  {/* High-Resolution Master Architecture Image */}
                  <img
                    src="/images/united_residences.webp"
                    alt="United Township Master Architecture"
                    className="gsap-township-img w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Information Glass Card */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 bg-[#141414]/90 backdrop-blur-md border border-[#C49D55]/40 text-white transform transition-transform duration-500 group-hover:-translate-y-1.5 z-20">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C49D55] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C49D55]"></span>
                      </span>
                      <span className="text-[10px] font-semibold tracking-widest text-[#C49D55] uppercase block">
                        MASTER-PLANNED ECO-ENCLAVE
                      </span>
                    </div>
                    <h4 className="font-serif text-base sm:text-xl text-white font-normal mt-0.5">
                      United Imperial Smart Enclave, Lucknow
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#B5B5B5] mt-1 font-light leading-relaxed">
                      Sustainable Urban Planning • 150+ Acres • Zero Overhead Utilities • 70% Open Biophilic Green
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 2: FOUR MASTER-PLANNED ZONES */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                ZONAL ARCHITECTURE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141414]">
                Four Thoughtfully Curated <span className="text-[#C49D55] italic font-serif">Township Sectors</span>
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto my-2" />
              <p className="text-sm sm:text-base text-[#65605A] font-light">
                Every sector is planned with dedicated arterial corridors ensuring optimal privacy, pedestrian safety, and immediate access to all conveniences.
              </p>
            </div>

            {/* Zone Selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {townshipZones.map((zone) => {
                const IconComp = zone.icon;
                const isActive = activeZone === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone.id)}
                    className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                      isActive
                        ? 'bg-[#141414] text-white border-[#C49D55]'
                        : 'bg-white text-[#141414] border-[#C49D55]/30 hover:border-[#C49D55]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-[#C49D55]' : 'text-[#65605A]'}`}>
                        {zone.tag}
                      </span>
                      <IconComp className={`w-4 h-4 ${isActive ? 'text-[#C49D55]' : 'text-[#141414]'}`} />
                    </div>
                    <span className="font-serif font-normal text-sm sm:text-base leading-tight">
                      {zone.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Zone Display Card */}
            {townshipZones
              .filter((z) => z.id === activeZone)
              .map((zone) => (
                <div
                  key={zone.id}
                  className="bg-white border border-[#C49D55]/30 p-6 sm:p-8 lg:p-10 animate-in fade-in duration-300 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                            {zone.tag} — SECTOR BLUEPRINT
                          </span>
                          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414]">
                            {zone.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-[#C49D55]">
                            {zone.subtitle}
                          </p>
                        </div>

                        <p className="text-sm sm:text-base text-[#65605A] leading-relaxed font-light">
                          {zone.description}
                        </p>

                        <div className="space-y-2.5 pt-2 border-t border-[#C49D55]/20">
                          {zone.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141414]">
                              <CheckCircle2 className="w-4 h-4 text-[#C49D55] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={onOpenEnquire}
                          className="px-6 py-3.5 bg-[#141414] hover:bg-[#C49D55] text-white hover:text-[#141414] font-semibold text-xs uppercase tracking-widest border border-[#C49D55]/40 transition-all cursor-pointer inline-flex items-center gap-2 shadow-sm"
                        >
                          <span>Enquire About {zone.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-6 flex items-stretch">
                      <div className="relative w-full border border-[#C49D55]/40 overflow-hidden bg-stone-900 group h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] shadow-lg hover:border-[#C49D55] hover:shadow-[0_0_35px_rgba(196,157,85,0.22)] transition-all duration-700">
                        {/* Luxury Corner Brackets */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C49D55] pointer-events-none z-20 transition-all duration-500 group-hover:w-10 group-hover:h-10 group-hover:border-[#E8C782]" />
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C49D55] pointer-events-none z-20 transition-all duration-500 group-hover:w-10 group-hover:h-10 group-hover:border-[#E8C782]" />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C49D55] pointer-events-none z-20 transition-all duration-500 group-hover:w-10 group-hover:h-10 group-hover:border-[#E8C782]" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C49D55] pointer-events-none z-20 transition-all duration-500 group-hover:w-10 group-hover:h-10 group-hover:border-[#E8C782]" />

                        {/* Light shimmer sweep on hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform ease-in-out pointer-events-none z-10" />

                        {/* Architectural Image */}
                        <img
                          src={zone.image}
                          alt={zone.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                        {/* Floating bottom badge */}
                        <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#141414]/90 backdrop-blur-sm border border-[#C49D55]/40 text-white transform transition-transform duration-500 group-hover:-translate-y-1 z-20">
                          <span className="text-[10px] font-semibold text-[#C49D55] uppercase tracking-wider block">
                            {zone.tag} ARCHITECTURAL VISUALIZATION
                          </span>
                          <span className="text-xs sm:text-sm font-serif text-white block mt-0.5">
                            {zone.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* SECTION 3: 8 PILLARS OF SUSTAINABLE INFRASTRUCTURE */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                INTELLIGENT INFRASTRUCTURE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141414]">
                The Eight Pillars of <span className="text-[#C49D55] italic font-serif">Smart Eco-Living</span>
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto my-2" />
              <p className="text-sm sm:text-base text-[#65605A] font-light">
                Every engineering detail has been designed to reduce carbon footprint while providing uncompromised five-star living comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gsap-pillars-grid">
              {smartPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="gsap-pillar-card relative p-6 bg-white border border-[#C49D55]/30 hover:border-[#C49D55] transition-all duration-400 ease-out space-y-4 group shadow-sm hover:shadow-[0_14px_32px_rgba(196,157,85,0.16)] hover:-translate-y-1.5 overflow-hidden"
                  >
                    {/* Top Golden Animated Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#EAEAEA] group-hover:bg-gradient-to-r group-hover:from-[#C49D55] group-hover:via-[#E8C782] group-hover:to-[#C49D55] transition-all duration-500" />

                    {/* Watermark Pillar Number */}
                    <span className="absolute top-3 right-4 font-serif text-3xl font-bold text-stone-200/60 group-hover:text-[#C49D55]/20 transition-colors select-none pointer-events-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Icon Badge */}
                    <div className="w-12 h-12 bg-[#141414] text-[#C49D55] group-hover:bg-[#C49D55] group-hover:text-[#141414] transition-all duration-300 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 relative z-10">
                      <h4 className="font-serif font-bold text-base text-[#141414] group-hover:text-[#C49D55] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#65605A] font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 4: STRATEGIC PROXIMITY & TRANSIT CORRIDORS */}
          <div className="bg-white border border-[#C49D55]/30 p-6 sm:p-8 lg:p-12 space-y-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C49D55]/20 pb-5">
              <div className="space-y-1">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                  STRATEGIC LOCATION ARTERIES
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414]">
                  Seamless Proximity & <span className="text-[#C49D55] italic font-serif">Transit Corridors</span>
                </h3>
                <div className="w-14 h-[2px] bg-[#C49D55] mt-1.5" />
              </div>
              <p className="text-xs sm:text-sm text-[#65605A] max-w-md font-light leading-relaxed">
                Direct signal-free connectivity to international transit corridors, medical institutes, and expressways from Vrindavan Yojana, Lucknow.
              </p>
            </div>

            {/* 5 Distance Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 gsap-transit-grid">
              {connectivityPoints.map((cp, idx) => {
                const IconComp = cp.icon;
                return (
                  <div
                    key={idx}
                    className="gsap-transit-card group relative p-6 bg-white border border-[#C49D55]/30 hover:border-[#C49D55] transition-all duration-400 ease-out flex flex-col justify-between space-y-5 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(196,157,85,0.18)] overflow-hidden"
                  >
                    {/* Top Golden Slide Accent */}
                    <div className="absolute top-0 left-0 w-full h-[2.5px] bg-[#F0EAE1] group-hover:bg-[#C49D55] transition-colors duration-400" />

                    {/* Top row: Icon Badge + Category Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-[#F8F6F1] border border-[#C49D55]/30 group-hover:bg-[#141414] text-[#C49D55] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#C49D55] bg-[#C49D55]/10 px-2 py-0.5 border border-[#C49D55]/20">
                        {cp.tag}
                      </span>
                    </div>

                    {/* Distance & Destination */}
                    <div className="space-y-1">
                      <span className="font-serif font-bold text-3xl sm:text-4xl text-[#141414] group-hover:text-[#C49D55] transition-colors block">
                        {cp.distance}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-[#141414] leading-snug">
                        {cp.destination}
                      </h4>
                    </div>

                    {/* Drive Time Pill */}
                    <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#65605A] font-medium group-hover:text-[#141414] transition-colors">
                        <Clock className="w-3.5 h-3.5 text-[#C49D55]" />
                        <span>Drive Time</span>
                      </span>
                      <span className="text-xs font-semibold text-[#141414] bg-[#F8F6F1] px-2 py-0.5 border border-stone-200">
                        {cp.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 5: MASTER-PLAN BOOKING CTA */}
          <div className="bg-[#141414] text-white p-6 sm:p-8 lg:p-12 border border-[#C49D55]/30 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                EXPERIENCE THE FUTURE OF LIVING
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                Book a Guided Tour of United Smart Township
              </h3>
              <p className="text-xs sm:text-sm text-[#B5B5B5] font-light leading-relaxed">
                Connect with our senior master-planning architects to view spatial scale models, zone layouts, and explore residential plot & villa booking opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={onOpenEnquire}
                className="px-8 py-4 bg-[#C49D55] hover:bg-[#b08b46] text-[#141414] font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg flex items-center gap-2"
              >
                <span>Schedule Private Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
