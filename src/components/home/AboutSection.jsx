import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus,
  Play,
  Pause
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  // ─────────────────────────────────────────────────────────────
  // 1. LIFESTYLE & LIVING DATA & STATE
  // ─────────────────────────────────────────────────────────────
  const lifestyleSectionRef = useRef(null);
  const lifestyleImageContainerRef = useRef(null);
  const lifestyleImageRef = useRef(null);
  const [activeLifestyle, setActiveLifestyle] = useState(0);

  const lifestyleItems = useMemo(() => [
    {
      id: '01',
      number: '01',
      title: 'Space & Natural Light',
      desc: 'Bright, cross-ventilated residences with spacious balconies.',
      image: '/images/living-room.webp',
      alt: 'Spacious luxury living room with natural sunlight - United Orchid Heights'
    },
    {
      id: '02',
      number: '02',
      title: 'Shared Moments & Gatherings',
      desc: 'Thoughtfully designed spaces for celebrations and togetherness.',
      image: '/images/download4.webp',
      alt: 'Grand banquet hall and community celebration venue - United Orchid Heights'
    },
    {
      id: '03',
      number: '03',
      title: 'Active Living & Wellness',
      desc: 'Dedicated spaces for fitness, recreation and relaxation.',
      image: '/images/pool-img.webp',
      alt: 'Luxury swimming pool and active wellness area - United Orchid Heights'
    },
    {
      id: '04',
      number: '04',
      title: 'Gated Security & Smart Living',
      desc: 'Secure living with modern safety and convenience features.',
      image: '/images/peace-img.webp',
      alt: 'Residential gated entrance with modern 24x7 security - United Orchid Heights'
    }
  ], []);

  // Smooth cinematic image transition on accordion change
  const handleSelectLifestyle = useCallback((idx) => {
    if (idx === activeLifestyle) return;
    setActiveLifestyle(idx);

    if (lifestyleImageContainerRef.current) {
      const prefersReducedMotion = typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReducedMotion) {
        gsap.fromTo(
          lifestyleImageContainerRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          { 
            clipPath: 'inset(0 0% 0 0)', 
            duration: 0.85, 
            ease: 'power3.inOut',
            clearProps: 'clipPath'
          }
        );
        if (lifestyleImageRef.current) {
          gsap.fromTo(
            lifestyleImageRef.current,
            { scale: 1.08 },
            { scale: 1.0, duration: 1.0, ease: 'power2.out' }
          );
        }
      }
    }
  }, [activeLifestyle]);

  // ─────────────────────────────────────────────────────────────
  // 2. PREMIUM AMENITIES DATA & STATE
  // ─────────────────────────────────────────────────────────────
  const amenitiesSectionRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const trackRef = useRef(null);
  const animatingRef = useRef(false);
  const touchStartX = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartX = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(9); // Start at middle copy
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);
  const [containerWidth, setContainerWidth] = useState(0);

  // All 9 existing amenities with numbers (01 to 09) and optimized WebP images
  const premiumAmenities = useMemo(() => [
    {
      id: 'kids-park',
      number: '01',
      name: "Kids' Park",
      image: '/images/kids-park.webp',
      alt: "Kids' Park - United Orchid Heights"
    },
    {
      id: 'grand-clubhouse',
      number: '02',
      name: 'Grand Clubhouse',
      image: '/images/grand-clubhouse.webp',
      alt: 'Grand Clubhouse - United Orchid Heights'
    },
    {
      id: 'swimming-pool',
      number: '03',
      name: 'Swimming Pool',
      image: '/images/swimming-pool.webp',
      alt: 'Swimming Pool - United Orchid Heights'
    },
    {
      id: 'car-parking',
      number: '04',
      name: 'Car Parking',
      image: '/images/car-parking.webp',
      alt: 'Car Parking - United Orchid Heights'
    },
    {
      id: 'cctv',
      number: '05',
      name: 'CCTV',
      image: '/images/cctv.webp',
      alt: 'CCTV Surveillance - United Orchid Heights'
    },
    {
      id: 'modern-gymnasium',
      number: '06',
      name: 'Modern Gymnasium',
      image: '/images/modern-gymnasium.webp',
      alt: 'Modern Gymnasium - United Orchid Heights'
    },
    {
      id: 'ev-charging',
      number: '07',
      name: 'EV Charging',
      image: '/images/ev-charging.webp',
      alt: 'EV Charging - United Orchid Heights'
    },
    {
      id: 'dg-power-backup',
      number: '08',
      name: 'DG Power Backup',
      image: '/images/dg-power-backup-system.webp',
      alt: 'DG Power Backup - United Orchid Heights'
    },
    {
      id: 'banquet-hall',
      number: '09',
      name: 'Banquet Hall',
      image: '/images/banquet-hall.webp',
      alt: 'Banquet Hall - United Orchid Heights'
    }
  ], []);

  // 3 sets for seamless infinite loop
  const extendedAmenities = useMemo(() => [
    ...premiumAmenities,
    ...premiumAmenities,
    ...premiumAmenities
  ], [premiumAmenities]);

  // Responsive Carousel Width & Breakpoints
  useEffect(() => {
    const updateDimensions = () => {
      if (carouselContainerRef.current) {
        setContainerWidth(carouselContainerRef.current.clientWidth);
      }
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) {
          setVisibleCards(4);
        } else if (window.innerWidth >= 640) {
          setVisibleCards(2);
        } else {
          setVisibleCards(1.2);
        }
      }
    };

    updateDimensions();

    let ro = null;
    if (typeof ResizeObserver !== 'undefined' && carouselContainerRef.current) {
      ro = new ResizeObserver(updateDimensions);
      ro.observe(carouselContainerRef.current);
    }
    window.addEventListener('resize', updateDimensions);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Carousel Next & Previous Handlers (800ms duration)
  const handleNext = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => {
      animatingRef.current = false;
    }, 800);
  }, []);

  const handlePrev = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => {
      animatingRef.current = false;
    }, 800);
  }, []);

  // Seamless Infinite Loop Reset on Transition End
  const handleTransitionEnd = (e) => {
    if (e.target !== trackRef.current) return;
    animatingRef.current = false;
    if (currentIndex >= 18) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - 9);
    } else if (currentIndex < 9) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + 9);
    }
  };

  // Autoplay (3500ms, paused on hover/focus/drag)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Preload upcoming carousel image
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % extendedAmenities.length;
    const imgToPreload = extendedAmenities[nextIdx]?.image;
    if (imgToPreload && typeof window !== 'undefined') {
      const preloadImg = new Image();
      preloadImg.src = imgToPreload;
    }
  }, [currentIndex, extendedAmenities]);

  // Touch Swipe & Mouse Drag Support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    dragStartX.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diff = dragStartX.current - e.clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setIsPaused(false);
  };

  // Carousel Calculations
  const gap = 16;
  const cardWidth = containerWidth > 0
    ? (containerWidth - (Math.floor(visibleCards) - 1) * gap) / visibleCards
    : 320;
  const translateX = currentIndex * (cardWidth + gap);
  const activeIndex = ((currentIndex % 9) + 9) % 9;

  // ─────────────────────────────────────────────────────────────
  // 3. GSAP ENTRANCE ANIMATIONS
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Lifestyle & Living section entrance
      if (lifestyleSectionRef.current) {
        const headingElements = lifestyleSectionRef.current.querySelectorAll('.gsap-lifestyle-fade');
        gsap.from(headingElements, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: lifestyleSectionRef.current,
            start: 'top 82%',
            once: true
          }
        });

        const accordionRows = lifestyleSectionRef.current.querySelectorAll('.gsap-accordion-row');
        gsap.from(accordionRows, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: lifestyleSectionRef.current,
            start: 'top 80%',
            once: true
          }
        });

        if (lifestyleImageContainerRef.current) {
          gsap.fromTo(
            lifestyleImageContainerRef.current,
            { clipPath: 'inset(0 100% 0 0)' },
            {
              clipPath: 'inset(0 0% 0 0)',
              duration: 1.2,
              ease: 'power3.inOut',
              clearProps: 'clipPath',
              scrollTrigger: {
                trigger: lifestyleSectionRef.current,
                start: 'top 80%',
                once: true
              }
            }
          );
        }
      }

      // 2. Premium Amenities section entrance
      if (amenitiesSectionRef.current) {
        const headerElems = amenitiesSectionRef.current.querySelectorAll('.gsap-amenities-fade');
        gsap.from(headerElems, {
          y: 25,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: amenitiesSectionRef.current,
            start: 'top 82%',
            once: true
          }
        });

        const cards = amenitiesSectionRef.current.querySelectorAll('.amenity-reveal-mask');
        gsap.fromTo(
          cards,
          {
            clipPath: 'inset(100% 0 0 0)',
            opacity: 1, // CHANGED: Pehle 0 tha, ab 1 kiya taaki black flash na ho
            y: 0 // CHANGED: Pehle 30 tha, ab 0 kiya
          },
          {
            clipPath: 'inset(0% 0 0 0)',
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'clipPath',
            scrollTrigger: {
              trigger: amenitiesSectionRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="bg-white relative overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: LIFESTYLE & LIVING — INTERACTIVE SHOWCASE
         ═══════════════════════════════════════════════════════════ */}
      <div 
        ref={lifestyleSectionRef}
        className="w-full py-12 sm:py-14 lg:py-[60px] border-b border-[#E5E5E5]"
      >
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
          
          {/* Section Heading — Left-Aligned, Compact, Thin Golden Line */}
          <div className="mb-8 sm:mb-10 text-left">
            <div className="gsap-lifestyle-fade inline-flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
                LIFESTYLE & LIVING
              </span>
              <span className="h-[1px] w-12 bg-[#C5A059]" />
            </div>

            <h2 className="gsap-lifestyle-fade font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#151515] leading-[1.15]">
              Designed Around the Way You Live
            </h2>

            <p className="gsap-lifestyle-fade font-serif italic text-lg sm:text-xl text-[#C5A059] font-normal mt-1.5">
              Space • Light • Comfort
            </p>
          </div>

          {/* Two-Column Showcase: Left 40% (Accordion) & Right 60% (Dynamic Image) */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12 xl:gap-14">
            
            {/* Left Side: Minimal Interactive Accordion (40% width) */}
            <div className="w-full lg:w-[40%] flex flex-col justify-between py-1">
              <div className="divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5]">
                {lifestyleItems.map((item, idx) => {
                  const isActive = activeLifestyle === idx;
                  return (
                    <div 
                      key={item.id} 
                      className="gsap-accordion-row transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => handleSelectLifestyle(idx)}
                        className="w-full py-4 sm:py-4.5 flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                        aria-expanded={isActive}
                      >
                        <div className="flex items-center gap-3 sm:gap-4 pr-4">
                          <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider text-[#C5A059] shrink-0">
                            {item.number}
                          </span>
                          <span className={`font-serif text-base sm:text-lg font-medium transition-colors duration-300 ${
                            isActive ? 'text-[#C5A059]' : 'text-[#151515] group-hover:text-[#C5A059]'
                          }`}>
                            {item.title}
                          </span>
                        </div>

                        <div className="shrink-0">
                          {isActive ? (
                            <Minus className="w-4 h-4 text-[#C5A059] transition-transform duration-300" />
                          ) : (
                            <Plus className="w-4 h-4 text-[#888888] group-hover:text-[#C5A059] transition-transform duration-300" />
                          )}
                        </div>
                      </button>

                      {/* Smooth Description Expand */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isActive ? 'max-h-24 opacity-100 pb-3' : 'max-h-0 opacity-0 pb-0'
                        }`}
                      >
                        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pl-7 sm:pl-8 pr-4">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress Indicator for Lifestyle Showcase */}
              <div className="pt-6 hidden lg:flex items-center justify-between text-xs tracking-wider text-[#666666]">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm font-medium text-[#151515]">
                    {lifestyleItems[activeLifestyle].number}
                  </span>
                  <span className="text-xs text-[#888888]">/ 04</span>
                  <div className="w-28 h-[2px] bg-[#E5E5E5] relative overflow-hidden rounded-full">
                    <div 
                      className="h-full bg-[#C5A059] transition-all duration-500 ease-out"
                      style={{ width: `${((activeLifestyle + 1) / 4) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#A88A48] font-medium">
                  {lifestyleItems[activeLifestyle].title}
                </span>
              </div>
            </div>

            {/* Right Side: Dynamic Architectural Lifestyle Image (60% width) */}
            <div className="w-full lg:w-[60%] flex flex-col justify-center">
              <div 
                ref={lifestyleImageContainerRef}
                className="relative w-full aspect-[4/3] max-h-[390px] overflow-hidden rounded-none bg-[#151515] shadow-xs"
              >
                <img
                  ref={lifestyleImageRef}
                  key={lifestyleItems[activeLifestyle].image}
                  src={lifestyleItems[activeLifestyle].image}
                  alt={lifestyleItems[activeLifestyle].alt}
                  width="800"
                  height="600"
                  decoding="async"
                  className="w-full h-full object-cover rounded-none block will-change-transform"
                />
              </div>

              {/* Mobile Slide Counter */}
              <div className="flex lg:hidden items-center justify-between pt-3 text-xs tracking-wider text-[#666666]">
                <div className="flex items-center gap-2.5">
                  <span className="font-serif text-sm font-medium text-[#151515]">
                    {lifestyleItems[activeLifestyle].number}
                  </span>
                  <span className="text-xs text-[#888888]">/ 04</span>
                  <div className="w-20 h-[2px] bg-[#E5E5E5] relative overflow-hidden rounded-full">
                    <div 
                      className="h-full bg-[#C5A059] transition-all duration-500 ease-out"
                      style={{ width: `${((activeLifestyle + 1) / 4) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#A88A48] font-medium">
                  {lifestyleItems[activeLifestyle].title}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: PREMIUM AMENITIES — LUXURY IMAGE CAROUSEL
         ═══════════════════════════════════════════════════════════ */}
      <div 
        ref={amenitiesSectionRef}
        className="w-full bg-[#151515] py-6 sm:py-7 lg:py-8 border-t border-[#262626] relative overflow-hidden"
      >
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative">
          
          {/* Centered Section Header — Compact with minimal gaps */}
          <div className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-4 space-y-1">
            <div className="gsap-amenities-fade inline-flex items-center justify-center gap-2">
              <span className="h-[1px] w-6 sm:w-8 bg-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059] block">
                CURATED FOR YOUR COMFORT
              </span>
              <span className="h-[1px] w-6 sm:w-8 bg-[#C5A059]" />
            </div>

            <h3 className="gsap-amenities-fade font-serif font-normal text-2xl sm:text-3xl lg:text-[32px] text-white tracking-tight leading-tight">
              Premium Amenities
            </h3>

            <p className="gsap-amenities-fade font-serif italic text-xs sm:text-sm text-[#BDBDBD] font-normal">
              Everyday Comfort. Elevated Living.
            </p>

            {/* Short Thin Golden Divider */}
            <div className="gsap-amenities-fade h-[1px] w-12 sm:w-14 bg-[#C5A059]/70 mx-auto mt-1.5" />
          </div>

          {/* Carousel Viewport Container */}
          <div 
            ref={carouselContainerRef}
            className="relative w-full overflow-hidden select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {/* Sliding Track */}
            <div
              ref={trackRef}
              className="flex items-center will-change-transform cursor-grab active:cursor-grabbing"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${translateX}px)`,
                transition: isTransitioning
                  ? 'transform 800ms cubic-bezier(0.25, 1, 0.5, 1)'
                  : 'none'
              }}
            >
              {extendedAmenities.map((amenity, idx) => {
                const isInitial = idx >= 9 && idx < 13;
                return (
                  <div
                    key={`${amenity.id}-${idx}`}
                    tabIndex={0}
                    role="group"
                    aria-label={amenity.name}
                    className="amenity-carousel-card amenity-reveal-mask group relative flex-shrink-0 overflow-hidden rounded-none cursor-pointer focus-visible:outline-none bg-[#1e1e1e]"
                    style={{
                      width: `${cardWidth}px`,
                      marginRight: `${gap}px`,
                      height: '310px'
                    }}
                  >
                    {/* Sharp Rectangular Image */}
                    <img
                      src={amenity.image}
                      alt={amenity.alt}
                      width="600"
                      height="800"
                      loading="eager" // CHANGED: Lazy se Eager kiya taaki images turant load hon
                      decoding="async"
                      className="w-full h-full object-cover rounded-none transition-transform duration-600 ease-out group-hover:scale-105 will-change-transform block bg-[#151515]" // CHANGED: bg color add kiya
                      onError={(e) => {
                        if (!e.currentTarget.dataset.fallback) {
                          e.currentTarget.dataset.fallback = 'true';
                          e.currentTarget.src = '/images/herosec-full.webp';
                        }
                      }}
                    />

                    {/* Subtle gradient at bottom 30% only behind text */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none transition-opacity duration-500 ease-out z-[2]"
                      style={{
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.15) 60%, transparent 100%)'
                      }}
                    />

                    {/* Amenity Name directly over image bottom (as in reference image) */}
                    <div className="absolute bottom-3.5 sm:bottom-4 inset-x-0 text-center px-3 z-[4] pointer-events-none">
                      <span className="font-serif text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-white tracking-wide block transition-transform duration-500 ease-out group-hover:-translate-y-1 will-change-transform drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                        {amenity.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Minimal Circular Next & Previous Navigation Arrows on Image Area */}
            <button
              type="button"
              aria-label="Previous Amenity"
              onClick={handlePrev}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b1b1b]/85 hover:bg-[#111111] text-white hover:text-[#C5A059] border border-white/10 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer focus:outline-none backdrop-blur-xs"
            >
              <ChevronLeft className="w-4.5 h-4.5 stroke-[1.8]" />
            </button>

            <button
              type="button"
              aria-label="Next Amenity"
              onClick={handleNext}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b1b1b]/85 hover:bg-[#111111] text-white hover:text-[#C5A059] border border-white/10 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer focus:outline-none backdrop-blur-xs"
            >
              <ChevronRight className="w-4.5 h-4.5 stroke-[1.8]" />
            </button>
          </div>

          {/* Bottom Minimal Progress Indicator Strip */}
          <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-5 w-full">
            {/* Current Slide Number (Champagne Gold) */}
            <span className="font-serif text-xs sm:text-sm font-semibold text-[#C5A059] shrink-0 tracking-wider">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>

            {/* Long Thin Horizontal Progress Track */}
            <div className="flex-1 h-[2px] bg-[#444444] relative overflow-hidden rounded-full">
              <div
                className="h-full bg-[#C5A059] transition-all duration-500 ease-out"
                style={{
                  width: `${((activeIndex + 1) / 9) * 100}%`
                }}
              />
            </div>

            {/* Total Number of Slides (Light Grey) */}
            <span className="font-serif text-xs sm:text-sm font-normal text-[#BDBDBD] shrink-0 tracking-wider">
              09
            </span>
          </div>

        </div>
      </div>

      {/* Reduced-Motion Accessibility Rules */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #about,
          #about * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}