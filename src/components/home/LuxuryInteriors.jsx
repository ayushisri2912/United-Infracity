import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useImageReveal from '../../hooks/useImageReveal';

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

  // Cinematic Left-to-Right Image Reveal with Synchronized Golden Border & Re-trigger on Slide Change
  const { triggerAnimation } = useImageReveal({
    direction: 'left',
    duration: 1.3,
    scaleDuration: 1.4,
    scale: 1.08,
    scaleEnabled: true,
    start: 'top 85%',
    borderDelay: 0.1,
    containerRef: imageDisplayRef,
    imageRef: imgRef,
    borderRef: outlineRef,
  });

  // GSAP Entrance ScrollTrigger Animation for header
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

    // Synchronize image masked reveal with content text transition
    if (contentDisplayRef.current) {
      gsap.to(contentDisplayRef.current, {
        opacity: 0,
        y: 6,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          setActiveIndex(index);
          // Trigger smooth cinematic left-to-right mask reveal for new image
          triggerAnimation(0, () => {
            setIsTransitioning(false);
          });
          // Fade text back in synchronized with the reveal
          gsap.fromTo(
            contentDisplayRef.current,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              delay: 0.15,
              ease: 'power3.out'
            }
          );
        }
      });
    } else {
      setActiveIndex(index);
      triggerAnimation(0, () => {
        setIsTransitioning(false);
      });
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
      className="relative py-12 sm:py-14 lg:py-16 bg-white border-b border-[#E5E5E5] overflow-hidden"
    >
      {/* Subtle Background Watermark Emblem */}
      <div 
        className="absolute left-[-30px] top-1/4 w-72 sm:w-80 h-72 sm:h-80 pointer-events-none select-none opacity-[0.025] z-0"
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
          <div className="gsap-header-item inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-1">
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
              THE ART OF REFINED LIVING
            </span>
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
          </div>

          {/* Main Heading: Matching About Section Heading Font Size & Style */}
          <h2 className="gsap-header-item font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#111111] leading-[1.15] tracking-tight">
            Explore Our Luxury Interiors
          </h2>

          {/* Thin Decorative Champagne Gold Line */}
          <div className="gsap-header-item h-[1.5px] w-14 sm:w-18 bg-[#C5A059] mx-auto mt-2 sm:mt-2.5" />

        </div>

        {/* 2. Interactive Room Navigation (Clean Horizontal Tabs with Animated Underline) */}
        <div className="gsap-header-item flex items-center justify-center gap-6 sm:gap-10 border-b border-[#E5E5E5] max-w-3xl mx-auto mb-6 sm:mb-8 overflow-x-auto no-scrollbar py-1">
          {rooms.map((room, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={room.id}
                onClick={() => handleRoomChange(idx)}
                className={`relative pb-3 sm:pb-3.5 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-[#C5A059]' : 'text-[#777777] hover:text-[#111111]'
                }`}
                aria-selected={isActive}
              >
                <span>{room.tabLabel}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* 3. Main Architectural Image Showcase - 100% Unobstructed Full Width */}
        <div className="gsap-showcase-entrance relative w-full mb-6 sm:mb-8">
          <div className="relative w-full pb-3 pl-3 sm:pb-4 sm:pl-4 group">
            {/* Subtle Offset Golden Frame Outline */}
            <div
              ref={outlineRef}
              className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#C5A059]/40 pointer-events-none z-0"
            />

            {/* Main Architectural Image Container */}
            <div 
              ref={imageDisplayRef}
              className="relative z-10 w-full overflow-hidden rounded-none border border-[#E5E5E5] bg-[#F5F5F5] h-[360px] sm:h-[480px] lg:h-[580px] xl:h-[600px]"
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
          className="relative w-full max-w-4xl mx-auto mt-4 sm:mt-5 mb-3 sm:mb-4 px-2 sm:px-4"
        >
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            
            {/* Previous Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Room"
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E5E5E5] hover:border-[#C5A059] bg-white hover:bg-[#111111] text-[#111111] hover:text-[#C5A059] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Centered Editorial Content */}
            <div className="text-center flex-1 space-y-1.5 sm:space-y-2 min-h-[90px] sm:min-h-[105px] flex flex-col justify-center">
              {/* Room Category & Slide Counter */}
              <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#C5A059]">
                <span>0{activeIndex + 1} / {currentRoom.category}</span>
                <span className="text-[#C5A059]/40">•</span>
                <span className="tracking-widest">0{activeIndex + 1} / 04</span>
              </div>

              {/* Large Elegant Serif Heading */}
              <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-tight text-[#111111]">
                {currentRoom.heading}
              </h3>

              {/* Thin Champagne Gold Decorative Line */}
              <div className="h-[1.5px] w-14 sm:w-16 bg-[#C5A059] mx-auto my-1.5 sm:my-2" />

              {/* Short Description */}
              <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed max-w-[650px] mx-auto">
                {currentRoom.description}
              </p>
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next Room"
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E5E5E5] hover:border-[#C5A059] bg-white hover:bg-[#111111] text-[#111111] hover:text-[#C5A059] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* 5. Architectural Thumbnail Navigation (4 Thumbnails Synced with State) */}
        <div className="pt-2 sm:pt-3 max-w-4xl mx-auto w-full">
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
                    : 'opacity-65 hover:opacity-95'
                  }`}
                >
                  <div className={`relative overflow-hidden rounded-none transition-all duration-300 ${
                    isActive
                      ? 'border-2 border-[#C5A059] shadow-xs'
                      : 'border border-[#E5E5E5]'
                  }`}>
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-18 sm:h-22 object-cover rounded-none block group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-[#C5A059]/10 pointer-events-none" />
                    )}
                  </div>
                  <span className={`text-[11px] sm:text-xs font-semibold tracking-wider uppercase block mt-1.5 transition-colors ${
                    isActive ? 'text-[#C5A059]' : 'text-[#777777] group-hover:text-[#111111]'
                  }`}>
                    0{idx + 1} — {room.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6. Original Floral Emblem at Bottom Center */}
        <div className="pt-4 sm:pt-5 flex flex-col items-center justify-center">
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
    </section>
  );
}
