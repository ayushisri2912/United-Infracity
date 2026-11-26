import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useImageReveal from '../../hooks/useImageReveal';
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
  Clock,
  ChevronRight
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

  // Cinematic Left-to-Right Map Reveal (Scaling disabled to keep map labels & landmarks razor-sharp)
  useImageReveal({
    direction: 'left',
    duration: 1.3,
    scaleEnabled: false,
    start: 'top 85%',
    borderDelay: 0.1,
    containerRef: mapWrapperRef,
    imageRef: mapImgRef,
    borderRef: outlineRef,
  });

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
      className="relative pt-10 sm:pt-12 lg:pt-14 pb-4 sm:pb-5 lg:pb-6 bg-white border-b border-[#E5E5E5] overflow-hidden"
    >
      {/* Subtle Background Watermark Emblem */}
      <div 
        className="absolute right-[-30px] top-1/4 w-72 sm:w-80 h-72 sm:h-80 pointer-events-none select-none opacity-[0.025] z-0"
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
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
          {/* Eyebrow Label with Thin Golden Lines */}
          <div className="gsap-loc-header inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-1">
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
              PERFECTLY POSITIONED
            </span>
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
          </div>

          {/* Main Heading: Matching About Section Heading Font Size & Style */}
          <h2 className="gsap-loc-header font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#111111] leading-[1.15] tracking-tight">
            Closer to Everything That Matters
          </h2>

          {/* Subtitle: Vrindavan Yojna, Lucknow */}
          <p className="gsap-loc-header font-serif italic text-lg sm:text-xl text-[#C5A059] font-normal mt-1">
            Vrindavan Yojna, Lucknow
          </p>

          {/* Thin Decorative Champagne Gold Line */}
          <div className="gsap-loc-header h-[1.5px] w-14 sm:w-18 bg-[#C5A059] mx-auto mt-2 sm:mt-2.5" />
        </div>

        {/* 2. Asymmetric Two-Column Layout (40% Explorer, 60% Map) - Equal Height on Desktop */}
        <div className="flex flex-col lg:flex-row lg:items-stretch justify-between gap-8 lg:gap-10 xl:gap-14 w-full mt-6 sm:mt-8 mb-2 sm:mb-3">
          
          {/* Left Side: Interactive Connectivity Explorer (40% desktop) - Stretches to equal height */}
          <div className="w-full lg:w-[40%] flex flex-col justify-between h-full space-y-4 sm:space-y-5">
            
            {/* Category Navigation Buttons */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 pb-1">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A059]">
                  Select Category
                </span>
                <div className="h-[1px] flex-1 bg-[#E5E5E5]" />
              </div>

              {/* 8 Category Boxes with Premium Luxury Styling & Fluid Animations */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`group relative overflow-hidden flex items-center justify-between px-3.5 py-3 sm:px-4 sm:py-3.5 min-h-[52px] sm:min-h-[56px] text-left transition-all duration-300 ease-out cursor-pointer rounded-none border ${
                        isActive
                          ? 'bg-[#111111] border-[#111111] text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)] -translate-y-0.5'
                          : 'bg-white hover:bg-[#FAF8F5] border-[#E8E8E8] hover:border-[#C5A059]/70 text-[#444444] hover:text-[#111111] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(197,160,89,0.14)]'
                      }`}
                    >
                      {/* Left Accent Bar */}
                      <span 
                        className={`absolute left-0 top-0 bottom-0 w-[3.5px] transition-all duration-300 ease-out ${
                          isActive 
                            ? 'bg-[#C5A059] opacity-100' 
                            : 'bg-[#C5A059] opacity-0 group-hover:opacity-100'
                        }`} 
                      />

                      {/* Icon & Label Container */}
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-1">
                        {/* Elegant Icon Badge */}
                        <div className={`w-8 h-8 rounded-none flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'bg-[#C5A059]/20 text-[#D4B675]'
                            : 'bg-[#F5F5F5] text-[#777777] group-hover:bg-[#C5A059]/12 group-hover:text-[#C5A059]'
                        }`}>
                          <Icon className="w-4 h-4 stroke-[1.7] transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        {/* Label */}
                        <span className={`text-xs sm:text-[13.5px] tracking-wide truncate transition-colors duration-300 ${
                          isActive 
                            ? 'font-medium text-white' 
                            : 'font-normal text-[#333333] group-hover:text-[#111111] group-hover:font-medium'
                        }`}>
                          {cat.label}
                        </span>
                      </div>

                      {/* Right Indicator (Active gold dot or hover arrow) */}
                      <div className="shrink-0 flex items-center pl-1">
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.9)]" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Landmark List Display (Flexes to fill remaining height perfectly) */}
            <div 
              ref={listRef}
              className="flex-1 flex flex-col justify-between bg-white border border-[#E8E8E8] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-5 sm:p-6 rounded-none mt-3 sm:mt-4 min-h-[260px]"
            >
              <div>
                {/* Active Category Header */}
                <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-[#EAEAEA] mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 bg-[#111111] text-white text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase rounded-none">
                      {activeCategory.label}
                    </span>
                    <span className="text-xs text-[#888888]">•</span>
                    <span className="text-xs sm:text-[13px] text-[#666666] font-light italic">
                      {activeCategory.subtitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#C5A059] shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Drive Time</span>
                  </div>
                </div>

                {/* Landmark Items with Smooth Hover Transitions */}
                <div className="space-y-1.5">
                  {activeCategory.landmarks.map((landmark, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between py-3 px-3 border border-transparent hover:border-[#E8E8E8] hover:border-l-[3px] hover:border-l-[#C5A059] hover:bg-[#FAF8F5] transition-all duration-200"
                    >
                      <span className="text-sm sm:text-[15px] font-medium text-[#222222] group-hover:text-[#111111] leading-snug pr-4 transition-colors">
                        {landmark.name}
                      </span>
                      <span className="shrink-0 text-xs sm:text-[13px] font-semibold tracking-wide text-[#C5A059] bg-[#C5A059]/10 px-3 py-1.5 border border-[#C5A059]/30 rounded-none whitespace-nowrap transition-all duration-200 group-hover:bg-[#C5A059] group-hover:text-white">
                        {landmark.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footnote */}
              <p className="text-[11px] text-[#888888] font-light italic pt-3 border-t border-[#EAEAEA] mt-4">
                *All travel times are approximate and subject to traffic conditions as stated in the brochure.
              </p>
            </div>

            {/* View Location on Google Maps Button with Smooth Sliding Gold Layer */}
            <div className="pt-2 sm:pt-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=United+Orchid+Heights+Vrindavan+Yojna+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#111111] text-white font-medium text-xs sm:text-[13px] tracking-[0.18em] uppercase rounded-none transition-colors duration-400 cursor-pointer shadow-xs w-full sm:w-auto"
              >
                {/* Sliding Golden Fill Layer */}
                <span className="absolute inset-0 bg-[#C5A059] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#111111] transition-colors duration-400">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#111111] transition-colors duration-300" />
                  <span>View Location on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                </span>
              </a>
            </div>

          </div>

          {/* Right Side: Original Location Map (60% desktop) - Stretches to equal height */}
          <div className="w-full lg:w-[60%] flex flex-col justify-between h-full">
            <div ref={mapWrapperRef} className="relative w-full flex-1 flex flex-col group pb-3 pl-3 sm:pb-4 sm:pl-4">
              {/* Subtle Offset Golden Frame Outline */}
              <div
                ref={outlineRef}
                className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#C5A059]/40 pointer-events-none z-0"
              />

              {/* Map Image Container */}
              <div className="relative z-10 w-full flex-1 flex items-center justify-center overflow-hidden rounded-none border border-[#E5E5E5] bg-[#F5F5F5] p-2 sm:p-3 shadow-xs">
                
                {/* Full-screen Lightbox Trigger Button */}
                <button
                  onClick={() => setIsZoomOpen(true)}
                  aria-label="Expand Map Fullscreen"
                  className="absolute top-5 right-5 z-20 p-2 bg-white hover:bg-[#111111] text-[#111111] hover:text-[#C5A059] border border-[#E5E5E5] hover:border-[#C5A059] shadow-xs transition-colors duration-200 cursor-pointer"
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

            {/* Address Details Below Map (Right Column) */}
            <div className="pt-2 sm:pt-3 flex items-center justify-start sm:justify-end">
              <span className="text-xs text-[#777777] font-light italic">
                Sector 6, Vrindavan Yojna, Raebareli Road, Lucknow
              </span>
            </div>

          </div>

        </div>

        {/* 3. Original Floral Emblem at Bottom Center */}
        <div className="pt-2 sm:pt-3 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#E5E5E5]" />
            <img
              src="/images/orchid-emblem.webp"
              alt="United Orchid Heights"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain opacity-40 hover:opacity-75 transition-opacity duration-300"
            />
            <div className="h-[1px] flex-1 bg-[#E5E5E5]" />
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
            className="relative max-w-6xl w-full bg-white border border-[#E5E5E5] shadow-2xl p-4 sm:p-6 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E5] mb-3">
              <div>
                <h4 className="font-serif font-medium text-lg sm:text-xl text-[#111111]">
                  United Orchid Heights — Location & Connectivity Map
                </h4>
                <p className="text-xs text-[#C5A059] font-medium">
                  Vrindavan Yojna, Lucknow • Page 7 Architectural Map
                </p>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 border border-[#E5E5E5] hover:bg-[#111111] hover:text-[#C5A059] text-[#111111] transition-colors cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Map Image */}
            <div className="w-full flex-1 overflow-auto flex items-center justify-center p-2 bg-[#F5F5F5]">
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
