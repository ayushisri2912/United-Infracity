import React, { useEffect, useRef } from 'react';
import { 
  Sun, 
  Users, 
  Waves, 
  ShieldCheck, 
  Trees, 
  CarFront, 
  Cctv, 
  Zap 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* Custom Luxury Amenity Icons specifically crafted to match brand design */
function GrandClubhouseIcon({ className = "w-8 h-8", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.6" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      {/* Tall main pavilion */}
      <path d="M5 21V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      {/* Right attached pavilion */}
      <path d="M13 21v-9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14" />
      {/* Center pillar/door line */}
      <path d="M9 21v-3" />
      {/* Ground base line */}
      <path d="M3 21h18" />
    </svg>
  );
}

function GymnasiumIcon({ className = "w-8 h-8", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.6" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="8" width="3" height="8" rx="1" />
      <rect x="5" y="6" width="3" height="12" rx="1" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <rect x="16" y="6" width="3" height="12" rx="1" />
      <rect x="19" y="8" width="3" height="8" rx="1" />
    </svg>
  );
}

function EVChargingIcon({ className = "w-8 h-8", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.6" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      {/* Left bracket */}
      <path d="M6 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
      {/* Lightning bolt */}
      <path d="M13 5l-3 7h4l-2 7" />
      {/* Right bracket */}
      <path d="M18 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1" />
      {/* Status dot indicator */}
      <circle cx="22" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BanquetHallIcon({ className = "w-8 h-8", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.6" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      {/* Suspension cord */}
      <line x1="12" y1="2" x2="12" y2="7" />
      {/* Top cap */}
      <line x1="9" y1="7" x2="15" y2="7" />
      {/* Bell / canopy lampshade */}
      <path d="M9 7L5 17h14l-4-10" />
      {/* Bottom rim */}
      <line x1="4" y1="17" x2="20" y2="17" />
      {/* Bottom glowing bowl/pendant */}
      <path d="M10 17a2 2 0 0 0 4 0" />
    </svg>
  );
}

export default function AboutSection() {
  const amenitiesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (amenitiesRef.current) {
        const cards = amenitiesRef.current.querySelectorAll('.amenity-card');
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: amenitiesRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, amenitiesRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      number: '01',
      icon: Sun,
      title: 'Space & Natural Light',
      desc: 'Cross-ventilated 3 BHK layouts with wide panoramic balconies designed to welcome maximum daylight and fresh air.',
      tag: '3 BHK & 3 BHK+S'
    },
    {
      number: '02',
      icon: Users,
      title: 'Shared Moments & Gatherings',
      desc: 'An inviting setting for community celebrations and cherished everyday moments at the grand banquet hall and landscaped lawns.',
      tag: 'Clubhouse & Banquet'
    },
    {
      number: '03',
      icon: Waves,
      title: 'Active Living & Wellness',
      desc: 'World-class swimming pool, fully equipped modern gymnasium, and a vibrant kids\' play park to recharge and unwind.',
      tag: 'Pool, Gym & Sports'
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: 'Gated Security & Smart Living',
      desc: '24x7 smart CCTV surveillance, gated entrance with boom barriers, EV charging stations, and full DG power backup.',
      tag: 'Peace of Mind'
    }
  ];

  const premiumAmenitiesRow1 = [
    { name: "Kids' Park", icon: Trees },
    { name: 'Grand Clubhouse', icon: GrandClubhouseIcon },
    { name: 'Swimming Pool', icon: Waves },
    { name: 'Car Parking', icon: CarFront },
    { name: 'CCTV', icon: Cctv }
  ];

  const premiumAmenitiesRow2 = [
    { name: 'Modern Gymnasium', icon: GymnasiumIcon },
    { name: 'EV Charging', icon: EVChargingIcon },
    { name: 'DG Power Backup', icon: Zap },
    { name: 'Banquet Hall', icon: BanquetHallIcon }
  ];

  return (
    <section id="about" className="pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 lg:pb-10 bg-[#F6F0E6] relative border-t border-b border-[#B99A59]/20 overflow-hidden">
      {/* Subtle Background Glow & Orchid Accents matching luxury theme */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#B99A59]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#EDE2D1]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container - Exactly matches Navbar max-w-[1550px] and horizontal padding */}
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* 1. Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          {/* Top Badge / Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B99A59]/10 border border-[#B99A59]/25 text-[#A68A4E]">
            <svg className="w-3.5 h-3.5 text-[#B99A59]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C12 2 8 6 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 6 12 2 12 2Z" fill="#B99A59" fillOpacity="0.2" />
              <path d="M12 15V22" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-semibold tracking-widest uppercase">
              LIFESTYLE & LIVING
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#29221F] leading-tight tracking-tight">
            Designed Around the Way You Live
          </h2>

          {/* Subheading Highlight */}
          <p className="font-serif italic text-2xl sm:text-3xl text-[#96743B] font-normal mt-1 block">
            Space • Light • Comfort
          </p>

          {/* Subtitle Paragraph */}
          <p className="text-[#665A49] text-sm sm:text-base font-light leading-relaxed max-w-[680px] mx-auto pt-1">
            Spaces that welcome natural light, encourage effortless movement and give every member of the family room to feel at home.
          </p>
        </div>

        {/* 2. 4-Pillar Interactive Cards Grid - Styled in luxury theme matching lower sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="relative bg-[#FAF7F2] hover:bg-white rounded-2xl border border-[#DFD1B7] hover:border-[#B99A59] p-6 sm:p-7 shadow-2xs hover:shadow-[0_15px_35px_-10px_rgba(185,154,89,0.22)] hover:-translate-y-1.5 transition-all duration-300 ease-out group flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative Soft Corner Accent on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#B99A59]/15 via-transparent to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Content */}
                <div className="space-y-4 relative z-10">
                  {/* Minimal Gold Outline Icon Inside 44x44 Badge */}
                  <div className="w-11 h-11 rounded-xl bg-[#B99A59]/10 border border-[#B99A59]/25 text-[#B99A59] flex items-center justify-center group-hover:bg-[#B99A59] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-xl text-[#29221F] group-hover:text-[#A68A4E] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#665A49] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Row: Chip/Tag + Watermark Number */}
                <div className="pt-6 mt-6 border-t border-[#B99A59]/20 flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-[#B99A59]/10 text-[#A68A4E] border border-[#B99A59]/25">
                    {pillar.tag}
                  </span>

                  {/* Watermark Number */}
                  <span className="font-serif text-3xl font-bold text-[#B99A59]/25 group-hover:text-[#B99A59]/45 select-none transition-colors">
                    {pillar.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Premium Amenities (Curated For Your Comfort) - Compact Spacing with Double-Layer Liquid Wave Hover Animation */}
        <div ref={amenitiesRef} className="mt-8 sm:mt-10 lg:mt-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#A68A4E] block">
              CURATED FOR YOUR COMFORT
            </span>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#96743B] tracking-tight">
              Premium Amenities
            </h3>
            <p className="text-[#665A49] text-sm sm:text-base font-normal pt-0.5">
              Everyday Comfort. Elevated Living.
            </p>
          </div>

          {/* 2-Line Amenities Grid - Perfectly matching Navbar full width */}
          <div className="w-full space-y-2.5 sm:space-y-3">
            {/* Line 1: 5 Boxes spanning full width */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 w-full">
              {premiumAmenitiesRow1.map((amenity, idx) => {
                const AmenityIcon = amenity.icon;
                return (
                  <div
                    key={idx}
                    tabIndex={0}
                    role="button"
                    aria-label={amenity.name}
                    className="amenity-card group relative flex flex-col items-center justify-center text-center py-6 px-3 sm:py-7 sm:px-4 min-h-[104px] sm:min-h-[112px] bg-[#FAF7F2] border border-[#DFD1B7] hover:border-[#98713F] transition-colors duration-300 shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#98713F] cursor-pointer select-none"
                    style={{ isolation: 'isolate' }}
                  >
                    {/* Layer 1: Champagne Gold Liquid Wave (#C3A371) */}
                    <div className="wave-layer-1 absolute inset-x-0 bottom-0 h-[190%] w-full pointer-events-none z-0">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 1200 400"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <path
                          d="M 0,110 C 200,60 400,160 600,100 C 800,40 1000,140 1200,90 L 1200,400 L 0,400 Z"
                          fill="#C3A371"
                        />
                      </svg>
                    </div>

                    {/* Layer 2: Golden-Brown Liquid Wave (#9D7749) */}
                    <div className="wave-layer-2 absolute inset-x-0 bottom-0 h-[190%] w-full pointer-events-none z-0">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 1200 400"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <path
                          d="M 0,120 C 250,170 450,70 700,130 C 950,190 1080,80 1200,110 L 1200,400 L 0,400 Z"
                          fill="#9D7749"
                        />
                      </svg>
                    </div>

                    {/* Icon - Above animated wave layers */}
                    <div className="relative z-10 text-[#B99A59] group-hover:text-[#FFF4DC] group-focus-visible:text-[#FFF4DC] group-hover:-translate-y-[5px] group-focus-visible:-translate-y-[5px] group-hover:scale-[1.05] group-focus-visible:scale-[1.05] transition-all duration-700 ease-out flex items-center justify-center">
                      <AmenityIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.6]" />
                    </div>

                    {/* Title - Above animated wave layers */}
                    <span className="relative z-10 mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-[14px] font-medium text-[#665A49] group-hover:text-[#FFF4DC] group-focus-visible:text-[#FFF4DC] tracking-normal transition-colors duration-700 ease-out text-center">
                      {amenity.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Line 2: 4 Boxes spanning full width */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full">
              {premiumAmenitiesRow2.map((amenity, idx) => {
                const AmenityIcon = amenity.icon;
                return (
                  <div
                    key={idx}
                    tabIndex={0}
                    role="button"
                    aria-label={amenity.name}
                    className="amenity-card group relative flex flex-col items-center justify-center text-center py-6 px-3 sm:py-7 sm:px-4 min-h-[104px] sm:min-h-[112px] bg-[#FAF7F2] border border-[#DFD1B7] hover:border-[#98713F] transition-colors duration-300 shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#98713F] cursor-pointer select-none"
                    style={{ isolation: 'isolate' }}
                  >
                    {/* Layer 1: Champagne Gold Liquid Wave (#C3A371) */}
                    <div className="wave-layer-1 absolute inset-x-0 bottom-0 h-[190%] w-full pointer-events-none z-0">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 1200 400"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <path
                          d="M 0,110 C 200,60 400,160 600,100 C 800,40 1000,140 1200,90 L 1200,400 L 0,400 Z"
                          fill="#C3A371"
                        />
                      </svg>
                    </div>

                    {/* Layer 2: Golden-Brown Liquid Wave (#9D7749) */}
                    <div className="wave-layer-2 absolute inset-x-0 bottom-0 h-[190%] w-full pointer-events-none z-0">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 1200 400"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <path
                          d="M 0,120 C 250,170 450,70 700,130 C 950,190 1080,80 1200,110 L 1200,400 L 0,400 Z"
                          fill="#9D7749"
                        />
                      </svg>
                    </div>

                    {/* Icon - Above animated wave layers */}
                    <div className="relative z-10 text-[#B99A59] group-hover:text-[#FFF4DC] group-focus-visible:text-[#FFF4DC] group-hover:-translate-y-[5px] group-focus-visible:-translate-y-[5px] group-hover:scale-[1.05] group-focus-visible:scale-[1.05] transition-all duration-700 ease-out flex items-center justify-center">
                      <AmenityIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.6]" />
                    </div>

                    {/* Title - Above animated wave layers */}
                    <span className="relative z-10 mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-[14px] font-medium text-[#665A49] group-hover:text-[#FFF4DC] group-focus-visible:text-[#FFF4DC] tracking-normal transition-colors duration-700 ease-out text-center">
                      {amenity.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scoped CSS for Luxury Double-Layer Liquid Wave Hover Animation */}
        <style>{`
          .amenity-card {
            position: relative;
            overflow: hidden;
            isolation: isolate;
          }
          .amenity-card .wave-layer-1 {
            transform: translateY(102%);
            transition: transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
            will-change: transform;
          }
          .amenity-card .wave-layer-2 {
            transform: translateY(102%);
            transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
            will-change: transform;
          }
          .amenity-card:hover .wave-layer-1,
          .amenity-card:focus-visible .wave-layer-1,
          .amenity-card:active .wave-layer-1 {
            transform: translateY(0%);
            transition: transform 1250ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .amenity-card:hover .wave-layer-2,
          .amenity-card:focus-visible .wave-layer-2,
          .amenity-card:active .wave-layer-2 {
            transform: translateY(0%);
            transition: transform 1050ms cubic-bezier(0.22, 1, 0.36, 1) 120ms;
          }
          @media (prefers-reduced-motion: reduce) {
            .amenity-card .wave-layer-1,
            .amenity-card .wave-layer-2 {
              transition: none !important;
              transform: none !important;
            }
          }
        `}</style>

      </div>
    </section>
  );
}
