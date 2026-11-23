import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Route, 
  Plane, 
  Train, 
  Hospital, 
  GraduationCap, 
  ShoppingBag, 
  Trophy, 
  Hotel, 
  MapPin, 
  ExternalLink, 
  Maximize2, 
  X,
  Clock
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  {
    id: 'connectivity',
    label: 'Connectivity',
    icon: Route,
    subtitle: 'Strategic Arteries & Corridors',
    landmarks: [
      { name: 'Shaheed Path', time: '5 min' },
      { name: 'Lucknow-Ayodhya Road', time: '15 min' }
    ]
  },
  {
    id: 'airport',
    label: 'Airport',
    icon: Plane,
    subtitle: 'International Travel Gateway',
    landmarks: [
      { name: 'Chaudhary Charan Singh International Airport', time: '15 min' }
    ]
  },
  {
    id: 'metro-railway',
    label: 'Metro & Railway',
    icon: Train,
    subtitle: 'City Transit & Main Terminals',
    landmarks: [
      { name: 'Transport Nagar Metro Station', time: '10 min' },
      { name: 'Charbagh Railway Station', time: '20 min' }
    ]
  },
  {
    id: 'hospitals',
    label: 'Hospitals',
    icon: Hospital,
    subtitle: 'World-Class Healthcare Institutions',
    landmarks: [
      { name: 'SGPGI (Sanjay Gandhi PGIMS)', time: '10 min' },
      { name: 'Wellsun Medicity', time: '10 min' },
      { name: 'Medanta Hospital', time: '10 min' }
    ]
  },
  {
    id: 'schools',
    label: 'Schools',
    icon: GraduationCap,
    subtitle: 'Premier Educational Institutions',
    landmarks: [
      { name: 'Seth M. R. Jaipuria School (Kanpur Road Campus)', time: '20 min' },
      { name: 'Lucknow Public School', time: '7 min' },
      { name: 'DPS Eldeco', time: '10 min' }
    ]
  },
  {
    id: 'shopping',
    label: 'Shopping',
    icon: ShoppingBag,
    subtitle: 'Premier Retail & Leisure Destinations',
    landmarks: [
      { name: 'Lulu Mall', time: '15 min' },
      { name: 'Phoenix Palassio Mall', time: '20 min' }
    ]
  },
  {
    id: 'sports',
    label: 'Sports',
    icon: Trophy,
    subtitle: 'State-of-the-Art Arenas',
    landmarks: [
      { name: 'Ekana Cricket Stadium', time: '15 min' }
    ]
  },
  {
    id: 'hotels',
    label: 'Hotels',
    icon: Hotel,
    subtitle: 'Luxury Hospitality & Suites',
    landmarks: [
      { name: 'Holiday Inn Lucknow Airport', time: '10 min' }
    ]
  }
];

export default function LocationConnectivity() {
  const [activeCategoryId, setActiveCategoryId] = useState('connectivity');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const mapWrapperRef = useRef(null);
  const mapImgRef = useRef(null);
  const outlineRef = useRef(null);

  const activeCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];

  // GSAP Entrance ScrollTrigger Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-loc-header', {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // Lodha-style map entrance reveal
      if (mapWrapperRef.current) {
        gsap.from(mapWrapperRef.current, {
          y: 45,
          opacity: 0,
          duration: 1.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapWrapperRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none'
          }
        });
      }

      // Lodha-style subtle map zoom-out reveal
      if (mapImgRef.current) {
        gsap.from(mapImgRef.current, {
          scale: 1.08,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapWrapperRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none'
          }
        });
      }

      // Subtle offset golden outline floating into place from alignment
      if (outlineRef.current) {
        gsap.from(outlineRef.current, {
          x: 14,
          y: -14,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: 0.25,
          scrollTrigger: {
            trigger: mapWrapperRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Subtle fade-up transition when changing category
  const handleCategoryChange = (id) => {
    if (id === activeCategoryId) return;
    if (listRef.current) {
      gsap.to(listRef.current, {
        opacity: 0.3,
        y: 6,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          setActiveCategoryId(id);
          gsap.to(listRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power3.out'
          });
        }
      });
    } else {
      setActiveCategoryId(id);
    }
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsZoomOpen(false);
    };
    if (isZoomOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isZoomOpen]);

  return (
    <section
      ref={sectionRef}
      id="location-connectivity"
      className="relative pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8 bg-[#F6F0E6] border-b border-[#B99A59]/20 overflow-hidden"
    >
      {/* Subtle Background Watermark Emblem */}
      <div 
        className="absolute right-[-30px] top-1/4 w-72 sm:w-80 h-72 sm:h-80 pointer-events-none select-none opacity-[0.04] z-0"
        aria-hidden="true"
      >
        <img
          src="/images/orchid-emblem.webp"
          alt=""
          className="w-full h-full object-contain filter contrast-125"
        />
      </div>

      {/* Main Container - Aligned exactly with Navbar max-w-[1550px] */}
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* 1. Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-2.5">
          {/* Subtitle / Eyebrow Pill Badge */}
          <div className="gsap-loc-header inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B99A59]/10 border border-[#B99A59]/25 text-[#A07828]">
            <svg className="w-3.5 h-3.5 text-[#B99A59]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C12 2 8 6 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 6 12 2 12 2Z" fill="#B99A59" fillOpacity="0.2" />
              <path d="M12 15V22" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A07828]">
              PERFECTLY POSITIONED
            </span>
          </div>

          {/* Main Heading: Regular weight serif, ~62px desktop */}
          <h2 className="gsap-loc-header font-serif font-medium text-3xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-tight text-[#29221F]">
            Closer to Everything That Matters
          </h2>

          {/* Description: Vrindavan Yojna, Lucknow */}
          <p className="gsap-loc-header font-serif italic text-lg sm:text-2xl text-[#A68A4E]">
            Vrindavan Yojna, Lucknow
          </p>

          {/* Thin Decorative Champagne Gold Line */}
          <div className="gsap-loc-header h-[1.5px] w-20 sm:w-28 bg-[#B99A59]/60 mx-auto my-2.5 sm:my-3.5" />
        </div>

        {/* 2. Asymmetric Two-Column Layout (40% Explorer, 60% Map) - Equal Height on Desktop */}
        <div className="flex flex-col lg:flex-row lg:items-stretch justify-between gap-8 lg:gap-10 xl:gap-14 w-full my-6 sm:my-8">
          
          {/* Left Side: Interactive Connectivity Explorer (40% desktop) - Stretches to equal height */}
          <div className="w-full lg:w-[40%] flex flex-col justify-between h-full space-y-4 sm:space-y-5">
            
            {/* Category Navigation Buttons (Bigger, spacious category boxes) */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 pb-1">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#A68A4E]">
                  Select Category
                </span>
                <div className="h-[1px] flex-1 bg-[#B99A59]/20" />
              </div>

              {/* 8 Category Boxes with larger dimensions & comfortable padding */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`flex items-center gap-3 px-3.5 py-3 sm:px-4 sm:py-3.5 min-h-[50px] sm:min-h-[54px] text-left transition-all duration-200 cursor-pointer border rounded-none ${
                        isActive
                          ? 'bg-[#B99A59]/15 border-[#B99A59] text-[#A68A4E] shadow-xs'
                          : 'bg-white/70 hover:bg-white border-[#DFD1B7]/80 text-[#665A49] hover:border-[#B99A59]/60'
                      }`}
                    >
                      <Icon className={`w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.6] shrink-0 ${isActive ? 'text-[#B99A59]' : 'text-[#A68A4E]/75'}`} />
                      <span className="text-xs sm:text-[14px] font-medium tracking-wide truncate">
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Landmark List Display (Flexes to fill remaining height perfectly) */}
            <div 
              ref={listRef}
              className="flex-1 flex flex-col justify-between bg-white/70 border border-[#DFD1B7]/80 p-5 sm:p-6 rounded-none shadow-2xs mt-3 sm:mt-4 min-h-[260px]"
            >
              <div>
                {/* Active Category Header */}
                <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-[#B99A59]/30 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-[#A68A4E]">
                      {activeCategory.label}
                    </span>
                    <span className="text-xs text-[#665A49]/50">•</span>
                    <span className="text-xs sm:text-[13px] text-[#665A49]/80 font-light italic">
                      {activeCategory.subtitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#A68A4E]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Drive Time</span>
                  </div>
                </div>

                {/* Landmark Items with Thin Golden Divider Lines */}
                <div className="space-y-1">
                  {activeCategory.landmarks.map((landmark, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-3 sm:py-3.5 border-b border-[#B99A59]/15 last:border-b-0 hover:bg-white/60 px-1.5 transition-colors"
                    >
                      <span className="text-sm sm:text-base font-medium text-[#29221F] leading-snug pr-4">
                        {landmark.name}
                      </span>
                      <span className="shrink-0 text-xs sm:text-sm font-semibold tracking-wide text-[#A68A4E] bg-[#B99A59]/10 px-3 py-1.5 border border-[#B99A59]/25 rounded-none whitespace-nowrap">
                        {landmark.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footnote */}
              <p className="text-[11px] text-[#665A49]/65 font-light italic pt-3 border-t border-[#DFD1B7]/50 mt-4">
                *All travel times are approximate and subject to traffic conditions as stated in the brochure.
              </p>
            </div>

          </div>

          {/* Right Side: Original Location Map (60% desktop) - Stretches to equal height */}
          <div className="w-full lg:w-[60%] flex flex-col justify-between h-full">
            <div ref={mapWrapperRef} className="relative w-full flex-1 flex flex-col group pb-3 pl-3 sm:pb-4 sm:pl-4">
              {/* Subtle Offset Golden Frame Outline (shifted down-left, bounded inside container) */}
              <div
                ref={outlineRef}
                className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#B99A59]/45 pointer-events-none z-0"
              />

              {/* Map Image Container (Square Corners, Full Height Expansion) */}
              <div className="relative z-10 w-full flex-1 flex items-center justify-center overflow-hidden rounded-none border border-[#DFD1B7]/70 bg-white/70 p-2 sm:p-3 shadow-xs">
                
                {/* Full-screen Lightbox Trigger Button */}
                <button
                  onClick={() => setIsZoomOpen(true)}
                  aria-label="Expand Map Fullscreen"
                  className="absolute top-5 right-5 z-20 p-2 bg-white/90 hover:bg-[#B99A59] text-[#A68A4E] hover:text-white border border-[#B99A59]/40 shadow-xs transition-colors duration-200 cursor-pointer"
                  title="Expand Map"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Illustrated Map Image (Page 7 Brochure) */}
                <div 
                  className="overflow-hidden w-full h-full flex items-center justify-center cursor-zoom-in"
                  onClick={() => setIsZoomOpen(true)}
                >
                  <img
                    ref={mapImgRef}
                    src="/images/orchid-location-map.webp"
                    alt="United Orchid Heights Location Map - Vrindavan Yojna, Lucknow"
                    className="w-full h-auto max-h-[620px] object-contain rounded-none block will-change-transform"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* View Location on Google Maps Button Below Map */}
            <div className="pt-3 sm:pt-4 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-[#665A49]/80 font-light italic">
                Sector 6, Vrindavan Yojna, Raebareli Road, Lucknow
              </span>

              <a
                href="https://www.google.com/maps/search/?api=1&query=United+Orchid+Heights+Vrindavan+Yojna+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#B99A59] bg-[#B99A59]/10 hover:bg-[#B99A59] text-[#A68A4E] hover:text-white transition-all duration-300 font-medium text-xs sm:text-[13px] tracking-[0.16em] uppercase rounded-none cursor-pointer shadow-2xs"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B99A59] group-hover:text-white" />
                <span>View Location on Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
              </a>
            </div>

          </div>

        </div>

        {/* 3. Original Floral Emblem at Bottom Center */}
        <div className="pt-3 sm:pt-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#B99A59]/30" />
            <img
              src="/images/orchid-emblem.webp"
              alt="United Orchid Heights"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain opacity-45 hover:opacity-80 transition-opacity duration-300"
            />
            <div className="h-[1px] flex-1 bg-[#B99A59]/30" />
          </div>
        </div>

      </div>

      {/* Full-screen Map Lightbox Modal */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setIsZoomOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full bg-[#F6F0E6] border border-[#B99A59]/50 shadow-2xl p-4 sm:p-6 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#B99A59]/30 mb-3">
              <div>
                <h4 className="font-serif font-medium text-lg sm:text-xl text-[#29221F]">
                  United Orchid Heights — Location & Connectivity Map
                </h4>
                <p className="text-xs text-[#A68A4E] font-medium">
                  Vrindavan Yojna, Lucknow • Page 7 Architectural Map
                </p>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 border border-[#B99A59]/40 hover:bg-[#B99A59] hover:text-white text-[#A68A4E] transition-colors cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Map Image */}
            <div className="w-full flex-1 overflow-auto flex items-center justify-center p-2 bg-white/50">
              <img
                src="/images/orchid-location-map.webp"
                alt="United Orchid Heights Location Map Fullscreen"
                className="w-auto h-auto max-h-[75vh] max-w-full object-contain block"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
