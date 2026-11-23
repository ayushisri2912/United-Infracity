import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useImageReveal from '../../hooks/useImageReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LifestyleExperiences() {
  const sectionRef = useRef(null);

  // Alternating cinematic image reveals with synchronized golden borders
  // 1: Left to right
  const reveal1 = useImageReveal({ direction: 'left', start: 'top 85%' });
  // 2: Right to left (Kids' Park)
  const reveal2 = useImageReveal({ direction: 'right', start: 'top 85%' });
  // 3: Left to right (Modern Gymnasium - subtle 0.15s stagger in same row)
  const reveal3 = useImageReveal({ direction: 'left', delay: 0.15, start: 'top 85%' });
  // 4: Right to left (Banquet Hall)
  const reveal4 = useImageReveal({ direction: 'right', start: 'top 85%' });
  // 5: Left to right (Indoor Games)
  const reveal5 = useImageReveal({ direction: 'left', start: 'top 85%' });
  // 6: Right to left (Lift Lobby)
  const reveal6 = useImageReveal({ direction: 'right', start: 'top 85%' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal all experience text blocks as they scroll into view
      const blocks = sectionRef.current.querySelectorAll('.experience-block');
      blocks.forEach((block) => {
        const textElements = block.querySelectorAll('.gsap-fade-up');
        const line = block.querySelector('.gsap-line-reveal');

        if (textElements.length > 0) {
          gsap.from(textElements, {
            y: 35,
            opacity: 0,
            duration: 1.1,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          });
        }

        if (line) {
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.9,
            ease: 'power2.out',
            delay: 0.25,
            scrollTrigger: {
              trigger: block,
              start: 'top 80%'
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lifestyle-experiences"
      className="relative pt-6 pb-4 sm:pt-8 sm:pb-6 lg:pt-9 lg:pb-8 bg-[#F8F2E8] border-b border-[#B9953E]/20 overflow-hidden"
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

      {/* Main Container - Aligned with Navbar max-w-[1550px] */}
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 lg:mb-8 space-y-2 sm:space-y-2.5">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B9953E]/10 border border-[#B9953E]/25 text-[#A07828]">
            <svg className="w-3.5 h-3.5 text-[#B9953E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C12 2 8 6 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 6 12 2 12 2Z" fill="#B9953E" fillOpacity="0.2" />
              <path d="M12 15V22" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-semibold tracking-widest uppercase">
              EXPERIENCE AN ELEVATED LIFESTYLE
            </span>
          </div>

          {/* Heading - Exact font, weight and scale matching Image 2 */}
          <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#29221F] leading-tight tracking-tight">
            Life, Beautifully Experienced
          </h2>

          <div className="h-[1.5px] w-20 sm:w-24 bg-[#B9953E]/50 mx-auto mt-2.5 sm:mt-3" />
        </div>

        {/* Experiences Staggered Editorial Column - Compact luxury spacing */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20 w-full">

          {/* ──────────────────────────────────────────────────────────
              LAYOUT 1: Charge into Tomorrow + Kids' Park & Gym
             ────────────────────────────────────────────────────────── */}
          <div className="experience-block space-y-6 sm:space-y-8 w-full">
            {/* Top Part: Image Left (58%), Content Right (42%) */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 xl:gap-14 w-full">
              
              {/* Image Left */}
              <div className="w-full lg:w-[58%]">
                <div className="relative w-full group pb-3 pl-3 sm:pb-4 sm:pl-4">
                  {/* Subtle Offset Golden Outline Frame */}
                  <div ref={reveal1.borderRef} className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#B9953E]/45 pointer-events-none z-0" />
                  <div ref={reveal1.containerRef} className="relative z-10 w-full overflow-hidden rounded-none border border-[#DFD1B7]/60 bg-[#EDE2D1]/40">
                    <img
                      ref={reveal1.imageRef}
                      src="/images/download1.webp"
                      alt="Charge into Tomorrow - EV Charging Infrastructure"
                      className="w-full h-auto max-h-[460px] object-cover rounded-none block will-change-transform"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Content Right */}
              <div className="w-full lg:w-[42%] text-center lg:text-left flex flex-col items-center lg:items-start">
                <span className="gsap-fade-up text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#A07828] block mb-2 sm:mb-2.5">
                  SUSTAINABLE & ACTIVE LIVING
                </span>
                <h3 className="gsap-fade-up font-serif font-medium text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-tight text-[#29221F]">
                  Charge into Tomorrow
                </h3>
                <div className="gsap-line-reveal h-[1.5px] w-16 sm:w-20 bg-[#B9953E]/60 my-3 sm:my-4" />
                <p className="gsap-fade-up text-sm sm:text-base lg:text-lg text-[#29221F]/75 font-light leading-relaxed max-w-lg">
                  Smart convenience, active living, and joyful moments all in one place.
                </p>
              </div>

            </div>

            {/* Below Layout 1: Two Landscape Images Side-by-Side (Kids' Park & Gymnasium) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full pt-2">
              
              {/* Kids' Park */}
              <div className="space-y-2.5 group w-full">
                <div className="relative w-full pb-2.5 pl-2.5 sm:pb-3 sm:pl-3">
                  <div ref={reveal2.borderRef} className="absolute top-2.5 left-0 sm:top-3 right-2.5 sm:right-3 bottom-0 border border-[#B9953E]/40 pointer-events-none z-0" />
                  <div ref={reveal2.containerRef} className="relative z-10 overflow-hidden rounded-none border border-[#DFD1B7]/60 bg-[#EDE2D1]/40">
                    <img
                      ref={reveal2.imageRef}
                      src="/images/download2.webp"
                      alt="Kids' Park"
                      className="w-full h-auto max-h-[340px] object-cover rounded-none block will-change-transform"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-0.5">
                  <div className="h-[1px] w-5 bg-[#B9953E]/40" />
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#A07828]">
                    Kids' Park
                  </span>
                </div>
              </div>

              {/* Modern Gymnasium */}
              <div className="space-y-2.5 group w-full">
                <div className="relative w-full pb-2.5 pl-2.5 sm:pb-3 sm:pl-3">
                  <div ref={reveal3.borderRef} className="absolute top-2.5 left-0 sm:top-3 right-2.5 sm:right-3 bottom-0 border border-[#B9953E]/40 pointer-events-none z-0" />
                  <div ref={reveal3.containerRef} className="relative z-10 overflow-hidden rounded-none border border-[#DFD1B7]/60 bg-[#EDE2D1]/40">
                    <img
                      ref={reveal3.imageRef}
                      src="/images/download3.webp"
                      alt="Modern Gymnasium"
                      className="w-full h-auto max-h-[340px] object-cover rounded-none block will-change-transform"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-0.5">
                  <div className="h-[1px] w-5 bg-[#B9953E]/40" />
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#A07828]">
                    Modern Gymnasium
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ──────────────────────────────────────────────────────────
              LAYOUT 2: Gatherings Worth Remembering
             ────────────────────────────────────────────────────────── */}
          <div className="experience-block w-full">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-10 xl:gap-14 w-full">
              
              {/* Content Left (42%) */}
              <div className="w-full lg:w-[42%] text-center lg:text-left flex flex-col items-center lg:items-start">
                <span className="gsap-fade-up text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#A07828] block mb-2 sm:mb-2.5">
                  COMMUNITY & CELEBRATIONS
                </span>
                <h3 className="gsap-fade-up font-serif font-medium text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-tight text-[#29221F]">
                  Gatherings Worth Remembering
                </h3>
                <div className="gsap-line-reveal h-[1.5px] w-16 sm:w-20 bg-[#B9953E]/60 my-3 sm:my-4" />
                <p className="gsap-fade-up text-sm sm:text-base lg:text-lg text-[#29221F]/75 font-light leading-relaxed max-w-lg">
                  An elegant venue for celebrations, special occasions and community moments.
                </p>
              </div>

              {/* Image Right (58%) */}
              <div className="w-full lg:w-[58%] flex justify-center lg:justify-end">
                <div className="relative w-full group pb-3 pl-3 sm:pb-4 sm:pl-4">
                  {/* Subtle Offset Golden Outline Frame */}
                  <div ref={reveal4.borderRef} className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#B9953E]/45 pointer-events-none z-0" />
                  <div ref={reveal4.containerRef} className="relative z-10 w-full overflow-hidden rounded-none border border-[#DFD1B7]/60 bg-[#EDE2D1]/40">
                    <img
                      ref={reveal4.imageRef}
                      src="/images/download4.webp"
                      alt="Gatherings Worth Remembering - Banquet Hall"
                      className="w-full h-auto max-h-[460px] object-cover rounded-none block will-change-transform"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ──────────────────────────────────────────────────────────
              LAYOUT 3: Unwind in Style
             ────────────────────────────────────────────────────────── */}
          <div className="experience-block w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 xl:gap-14 w-full">
              
              {/* Image Left (58%) */}
              <div className="w-full lg:w-[58%]">
                <div className="relative w-full group pb-3 pl-3 sm:pb-4 sm:pl-4">
                  {/* Subtle Offset Golden Outline Frame */}
                  <div ref={reveal5.borderRef} className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#B9953E]/45 pointer-events-none z-0" />
                  <div ref={reveal5.containerRef} className="relative z-10 w-full overflow-hidden rounded-none border border-[#DFD1B7]/60 bg-[#EDE2D1]/40">
                    <img
                      ref={reveal5.imageRef}
                      src="/images/download5.webp"
                      alt="Unwind in Style - Indoor Games & Leisure"
                      className="w-full h-auto max-h-[460px] object-cover rounded-none block will-change-transform"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Content Right (42%) */}
              <div className="w-full lg:w-[42%] text-center lg:text-left flex flex-col items-center lg:items-start">
                <span className="gsap-fade-up text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#A07828] block mb-2 sm:mb-2.5">
                  LEISURE & RECREATION
                </span>
                <h3 className="gsap-fade-up font-serif font-medium text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-tight text-[#29221F]">
                  Unwind in Style
                </h3>
                <div className="gsap-line-reveal h-[1.5px] w-16 sm:w-20 bg-[#B9953E]/60 my-3 sm:my-4" />
                <p className="gsap-fade-up text-sm sm:text-base lg:text-lg text-[#29221F]/75 font-light leading-relaxed max-w-lg">
                  A welcoming space to relax, recharge and enjoy quiet moments.
                </p>
              </div>

            </div>
          </div>

          {/* ──────────────────────────────────────────────────────────
              LAYOUT 4: A Welcome Wrapped in Elegance
             ────────────────────────────────────────────────────────── */}
          <div className="experience-block w-full">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-10 xl:gap-14 w-full">
              
              {/* Content Left (42%) */}
              <div className="w-full lg:w-[42%] text-center lg:text-left flex flex-col items-center lg:items-start">
                <span className="gsap-fade-up text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#A07828] block mb-2 sm:mb-2.5">
                  TIMELESS ARRIVAL
                </span>
                <h3 className="gsap-fade-up font-serif font-medium text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-tight text-[#29221F]">
                  A Welcome Wrapped in Elegance
                </h3>
                <div className="gsap-line-reveal h-[1.5px] w-16 sm:w-20 bg-[#B9953E]/60 my-3 sm:my-4" />
                <p className="gsap-fade-up text-sm sm:text-base lg:text-lg text-[#29221F]/75 font-light leading-relaxed max-w-lg">
                  Step into a beautifully designed reception. Unwind in a warm and inviting lounge. Enjoy convenient lift access to your home.
                </p>
              </div>

              {/* Image Right (58%) - Spans right to navbar width */}
              <div className="w-full lg:w-[58%] flex justify-center lg:justify-end">
                <div className="relative w-full group pb-3 pl-3 sm:pb-4 sm:pl-4">
                  {/* Subtle Offset Golden Outline Frame */}
                  <div ref={reveal6.borderRef} className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#B9953E]/45 pointer-events-none z-0" />
                  <div ref={reveal6.containerRef} className="relative z-10 w-full overflow-hidden rounded-none border border-[#DFD1B7]/60 bg-[#EDE2D1]/40">
                    <img
                      ref={reveal6.imageRef}
                      src="/images/download6.webp"
                      alt="A Welcome Wrapped in Elegance - Luxury Lift Lobby"
                      className="w-full h-auto max-h-[480px] object-cover rounded-none block will-change-transform"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Section Bottom Crest / Emblem Decorative Element */}
        <div className="pt-6 sm:pt-8 lg:pt-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#B9953E]/30" />
            <img
              src="/images/orchid-emblem.webp"
              alt="United Orchid Heights"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-40 hover:opacity-80 transition-opacity duration-300"
            />
            <div className="h-[1px] flex-1 bg-[#B9953E]/30" />
          </div>
        </div>

      </div>
    </section>
  );
}
