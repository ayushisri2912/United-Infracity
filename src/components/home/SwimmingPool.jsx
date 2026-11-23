import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useImageReveal from '../../hooks/useImageReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SwimmingPool() {
  const sectionRef = useRef(null);
  const topContentRef = useRef(null);
  const topLineRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const outlineRef = useRef(null);
  const bottomContentRef = useRef(null);

  // Cinematic Right-to-Left Swimming Pool Image Reveal with Synchronized Golden Border
  useImageReveal({
    direction: 'right',
    duration: 1.3,
    scaleDuration: 1.4,
    scale: 1.08,
    scaleEnabled: true,
    start: 'top 85%',
    borderDelay: 0.1,
    containerRef: imageWrapperRef,
    imageRef: imageRef,
    borderRef: outlineRef,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top Heading & Description reveal
      if (topContentRef.current) {
        gsap.from(topContentRef.current.querySelectorAll('.gsap-fade-up'), {
          y: 40,
          opacity: 0,
          duration: 1.1,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      }

      // Top thin gold decorative line expansion
      if (topLineRef.current) {
        gsap.from(topLineRef.current, {
          scaleX: 0,
          transformOrigin: 'center center',
          duration: 0.9,
          ease: 'power2.out',
          delay: 0.25,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        });
      }

      // Bottom Heading & Description reveal
      if (bottomContentRef.current) {
        gsap.from(bottomContentRef.current.querySelectorAll('.gsap-fade-up-bottom'), {
          y: 40,
          opacity: 0,
          duration: 1.1,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bottomContentRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="swimming-pool"
      className="relative pt-6 pb-5 sm:pt-8 sm:pb-6 lg:pt-10 lg:pb-7 bg-[#F6F0E6] border-b border-[#B99A59]/20 overflow-hidden"
    >
      {/* Container - Aligned exactly with Navbar max-w-[1550px] */}
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* 1. Top Section Header (Centered) */}
        <div ref={topContentRef} className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 space-y-2 sm:space-y-2.5">
          {/* Main Heading - Matching Image 1 (Designed Around the Way You Live) font and responsive scale */}
          <h2 className="gsap-fade-up font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#29221F] leading-tight tracking-tight">
            Your Everyday Escape
          </h2>

          {/* Thin Decorative Champagne Gold Line below Heading */}
          <div
            ref={topLineRef}
            className="gsap-fade-up h-[1.5px] w-20 sm:w-28 bg-[#B99A59]/60 mx-auto my-2.5 sm:my-3.5"
          />

          {/* Description */}
          <p className="gsap-fade-up text-sm sm:text-base lg:text-lg text-[#29221F]/75 font-light leading-relaxed max-w-xl mx-auto">
            Refresh, unwind and make time for yourself by the pool.
          </p>
        </div>

        {/* 2. Cinematic Landscape Swimming Pool Image with Subtle Golden Frame - Full Navbar Width */}
        <div className="relative w-full my-4 sm:my-6">
          <div className="relative w-full group pb-3 pl-3 sm:pb-4 sm:pl-4">
            {/* Subtle Offset Golden Frame Outline (shifted down-left, bounded inside container) */}
            <div
              ref={outlineRef}
              className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#B99A59]/45 pointer-events-none z-0"
            />

            {/* Main Image Container (Square Corners, No Heavy Shadow, Natural Colors) */}
            <div 
              ref={imageWrapperRef}
              className="relative z-10 w-full overflow-hidden rounded-none border border-[#DFD1B7]/60 bg-[#EDE2D1]/40"
            >
              <div className="overflow-hidden w-full">
                <img
                  ref={imageRef}
                  src="/images/pool-img.webp"
                  alt="Your Everyday Escape - Swimming Pool at United Orchid Heights"
                  className="w-full h-auto max-h-[640px] object-cover rounded-none block will-change-transform"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Heading & Description (Centered) */}
        <div ref={bottomContentRef} className="text-center max-w-3xl mx-auto mt-6 sm:mt-8 space-y-2 sm:space-y-2.5">
          {/* Bottom Heading - Size matched to 2nd image (Explore Our Luxury Interiors), preserving color #96743B */}
          <h3 className="gsap-fade-up-bottom font-serif font-medium text-3xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-tight text-[#96743B]">
            Your Weekend Starts Here!
          </h3>

          {/* Bottom Description */}
          <p className="gsap-fade-up-bottom text-sm sm:text-base lg:text-lg text-[#29221F]/75 font-light leading-relaxed max-w-lg mx-auto">
            Make time for a swim, a laugh, and a little fun.
          </p>
        </div>

        {/* 4. Floral Emblem at Bottom Center */}
        <div className="pt-3 sm:pt-4 flex flex-col items-center justify-center">
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
