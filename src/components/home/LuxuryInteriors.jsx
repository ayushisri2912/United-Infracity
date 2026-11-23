import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const rooms = [
  {
    id: 'living',
    tabLabel: '01 — Living Room',
    category: 'LIVING ROOM',
    title: 'Living Room',
    heading: 'Comfort, Beautifully Considered',
    description: 'Warm, elegant interiors designed for everyday living and memorable moments.',
    image: '/assets/interiors/living-room.webp',
    caption: 'Expansive Living Room with Natural Daylight'
  },
  {
    id: 'dining',
    tabLabel: '02 — Dining Room',
    category: 'DINING ROOM',
    title: 'Dining Room',
    heading: 'Spaces to Connect',
    description: 'An elegant setting for shared meals and memorable conversations.',
    image: '/assets/interiors/dining-room.webp',
    caption: 'Refined Dining Setting for Memorable Gatherings'
  },
  {
    id: 'bedroom',
    tabLabel: '03 — Bedroom',
    category: 'MASTER BEDROOM',
    title: 'Bedroom',
    heading: 'A Retreat of Your Own',
    description: 'Warm tones and refined details create a serene personal space.',
    image: '/assets/interiors/bedroom.webp',
    caption: 'Serene Sanctuary Crafted with Warm Textures'
  },
  {
    id: 'kitchen',
    tabLabel: '04 — Kitchen',
    category: 'MODULAR KITCHEN',
    title: 'Kitchen',
    heading: 'A Kitchen Made for Everyday Moments',
    description: 'Thoughtful details and warm finishes make every day feel special.',
    image: '/assets/interiors/kitchen.webp',
    caption: 'Thoughtful Layout & Warm Architectural Finishes'
  }
];

export default function LuxuryInteriors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sectionRef = useRef(null);
  const imageDisplayRef = useRef(null);
  const imgRef = useRef(null);
  const outlineRef = useRef(null);
  const contentDisplayRef = useRef(null);

  const currentRoom = rooms[activeIndex];

  // GSAP Entrance ScrollTrigger Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-header-item', {
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

      // Lodha-style Image entrance reveal
      if (imageDisplayRef.current) {
        gsap.from(imageDisplayRef.current, {
          y: 45,
          opacity: 0,
          duration: 1.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });
      }

      // Lodha-style Image subtle zoom-out reveal
      if (imgRef.current) {
        gsap.from(imgRef.current, {
          scale: 1.12,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });

        gsap.to(imgRef.current, {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
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
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const handleRoomChange = (index) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);

    // Smooth subtle crossfade & fade-up transition for image & dynamic content
    if (imageDisplayRef.current && contentDisplayRef.current) {
      gsap.to([imageDisplayRef.current, contentDisplayRef.current], {
        opacity: 0.2,
        y: 6,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          setActiveIndex(index);
          gsap.to([imageDisplayRef.current, contentDisplayRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power3.out',
            onComplete: () => setIsTransitioning(false)
          });
        }
      });
    } else {
      setActiveIndex(index);
      setIsTransitioning(false);
    }
  };

  const handlePrev = () => {
    const newIdx = activeIndex === 0 ? rooms.length - 1 : activeIndex - 1;
    handleRoomChange(newIdx);
  };

  const handleNext = () => {
    const newIdx = activeIndex === rooms.length - 1 ? 0 : activeIndex + 1;
    handleRoomChange(newIdx);
  };

  return (
    <section
      ref={sectionRef}
      id="luxury-interiors"
      className="relative pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-16 bg-[#F6F0E6] border-b border-[#B99A59]/20 overflow-hidden"
    >
      {/* Subtle Background Watermark Emblem */}
      <div 
        className="absolute left-[-30px] top-1/4 w-72 sm:w-80 h-72 sm:h-80 pointer-events-none select-none opacity-[0.04] z-0"
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
          {/* Small Uppercase Label */}
          <div className="gsap-header-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B99A59]/10 border border-[#B99A59]/25 text-[#A07828]">
            <svg className="w-3.5 h-3.5 text-[#B99A59]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C12 2 8 6 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 6 12 2 12 2Z" fill="#B99A59" fillOpacity="0.2" />
              <path d="M12 15V22" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A07828]">
              THE ART OF REFINED LIVING
            </span>
          </div>

          {/* Main Heading: Regular weight, elegant serif */}
          <h2 className="gsap-header-item font-serif font-medium text-3xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-tight text-[#29221F]">
            Explore Our Luxury Interiors
          </h2>

          {/* Thin Decorative Champagne Gold Line */}
          <div className="gsap-header-item h-[1.5px] w-20 sm:w-28 bg-[#B99A59]/60 mx-auto my-2.5 sm:my-3.5" />

        </div>

        {/* 2. Interactive Room Navigation (Clean Horizontal Tabs with Animated Underline) */}
        <div className="gsap-header-item flex items-center justify-center gap-6 sm:gap-10 border-b border-[#B99A59]/25 max-w-3xl mx-auto mb-6 sm:mb-8 overflow-x-auto no-scrollbar py-1">
          {rooms.map((room, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={room.id}
                onClick={() => handleRoomChange(idx)}
                className={`relative pb-3 sm:pb-3.5 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-[#A68A4E]' : 'text-[#665A49]/60 hover:text-[#A68A4E]'
                }`}
                aria-selected={isActive}
              >
                <span>{room.tabLabel}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B99A59] transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* 3. Main Architectural Image Showcase - 100% Unobstructed Full Width */}
        <div className="gsap-showcase-entrance relative w-full mb-6 sm:mb-8">
          <div className="relative w-full pb-3 pl-3 sm:pb-4 sm:pl-4 group">
            {/* Subtle Offset Golden Frame Outline (shifted down-left, bounded inside container) */}
            <div
              ref={outlineRef}
              className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#B99A59]/45 pointer-events-none z-0"
            />

            {/* Main Architectural Image Container */}
            <div 
              ref={imageDisplayRef}
              className="relative z-10 w-full overflow-hidden rounded-none border border-[#DFD1B7]/60 bg-[#EDE3D1]/50 h-[360px] sm:h-[480px] lg:h-[580px] xl:h-[600px]"
            >
              <img
                ref={imgRef}
                src={currentRoom.image}
                alt={currentRoom.heading}
                className="w-full h-full object-cover rounded-none block will-change-transform"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* 4. Dynamic Content Below Image (Centered, Flanked by Minimal Circular Arrow Buttons) */}
        <div 
          ref={contentDisplayRef}
          className="relative w-full max-w-4xl mx-auto my-7 sm:my-8 px-2 sm:px-4"
        >
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            
            {/* Previous Arrow Button (Minimal circular with thin gold border) */}
            <button
              onClick={handlePrev}
              aria-label="Previous Room"
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#B99A59]/50 flex items-center justify-center text-[#A68A4E] hover:bg-[#B99A59] hover:text-white transition-all duration-300 cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Centered Editorial Content */}
            <div className="text-center flex-1 space-y-2 sm:space-y-2.5 min-h-[140px] sm:min-h-[150px] flex flex-col justify-center">
              {/* Room Category & Slide Counter */}
              <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#A68A4E]">
                <span>0{activeIndex + 1} / {currentRoom.category}</span>
                <span className="text-[#B99A59]/40">•</span>
                <span className="tracking-widest">0{activeIndex + 1} / 04</span>
              </div>

              {/* Large Elegant Serif Heading (around 44-48px on desktop) */}
              <h3 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.12] tracking-tight text-[#A68A4E]">
                {currentRoom.heading}
              </h3>

              {/* Thin Champagne Gold Decorative Line */}
              <div className="h-[1.5px] w-16 sm:w-20 bg-[#B99A59]/70 mx-auto my-2 sm:my-2.5" />

              {/* Short Description (max 650px width, 16-18px) */}
              <p className="text-sm sm:text-base lg:text-[17px] text-[#665A49] font-light leading-relaxed max-w-[650px] mx-auto">
                {currentRoom.description}
              </p>
            </div>

            {/* Next Arrow Button (Minimal circular with thin gold border) */}
            <button
              onClick={handleNext}
              aria-label="Next Room"
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#B99A59]/50 flex items-center justify-center text-[#A68A4E] hover:bg-[#B99A59] hover:text-white transition-all duration-300 cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* 5. Architectural Thumbnail Navigation (4 Thumbnails Synced with State) */}
        <div className="pt-2 sm:pt-4 max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {rooms.map((room, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={room.id}
                  onClick={() => handleRoomChange(idx)}
                  className={`text-left group cursor-pointer transition-all duration-300 relative ${
                    isActive 
                      ? 'opacity-100' 
                      : 'opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className={`relative overflow-hidden rounded-none transition-all duration-300 ${
                    isActive
                      ? 'border-2 border-[#B99A59] shadow-xs'
                      : 'border border-[#DFD1B7]/70'
                  }`}>
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-18 sm:h-22 object-cover rounded-none block group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-[#B99A59]/10 pointer-events-none" />
                    )}
                  </div>
                  <span className={`text-[11px] sm:text-xs font-semibold tracking-wider uppercase block mt-1.5 transition-colors ${
                    isActive ? 'text-[#A68A4E]' : 'text-[#665A49]'
                  }`}>
                    0{idx + 1} — {room.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6. Original Floral Emblem at Bottom Center */}
        <div className="pt-8 sm:pt-12 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#B99A59]/30" />
            <img
              src="/images/orchid-emblem.webp"
              alt="United Orchid Heights"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-45 hover:opacity-80 transition-opacity duration-300"
            />
            <div className="h-[1px] flex-1 bg-[#B99A59]/30" />
          </div>
        </div>

      </div>
    </section>
  );
}
