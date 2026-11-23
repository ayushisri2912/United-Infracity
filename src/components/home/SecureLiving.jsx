import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SecureLiving() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const lineRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imgRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content children reveal (subtitle, heading, desc)
      if (contentRef.current) {
        gsap.from(contentRef.current.querySelectorAll('.gsap-fade-up'), {
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

      // Decorative golden line reveal
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.9,
          ease: 'power2.out',
          delay: 0.35,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        });
      }

      // Lodha-style Image entrance reveal (container fade up + scale down)
      if (imageContainerRef.current) {
        gsap.from(imageContainerRef.current, {
          y: 45,
          opacity: 0,
          duration: 1.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
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
            start: 'top 78%',
            toggleActions: 'play none none none'
          }
        });

        // Lodha-style subtle parallax scrub as user scrolls
        gsap.to(imgRef.current, {
          yPercent: 6,
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
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
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
      id="secure-living"
      className="relative py-8 sm:py-12 lg:py-14 bg-[#F8F2E8] border-b border-[#B9953E]/20 overflow-hidden"
    >
      {/* Subtle Orchid Heights Emblem Watermark (4-6% opacity) */}
      <div 
        className="absolute left-[-30px] sm:left-4 bottom-[-20px] sm:bottom-4 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none select-none opacity-[0.05] z-0"
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Editorial Typography Content (40% desktop) */}
          <div 
            ref={contentRef}
            className="w-full lg:w-[42%] text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Top Badge / Eyebrow (matching Image 2 style) */}
            <div className="gsap-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B9953E]/10 border border-[#B9953E]/25 text-[#A07828] mb-3 sm:mb-4">
              <svg className="w-3.5 h-3.5 text-[#B9953E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C12 2 8 6 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 6 12 2 12 2Z" fill="#B9953E" fillOpacity="0.2" />
                <path d="M12 15V22" strokeLinecap="round" />
              </svg>
              <span className="text-xs font-semibold tracking-widest uppercase">
                SECURE SPACES, HAPPIER LIVES
              </span>
            </div>

            {/* Heading: Font and styling matching Image 2, with larger impactful size */}
            <h2 className="gsap-fade-up font-serif font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[80px] leading-[1.05] tracking-tight text-[#29221F]">
              Peace of Mind, <br className="hidden sm:inline" />
              Every Day
            </h2>

            {/* Thin Golden Decorative Line */}
            <div
              ref={lineRef}
              className="gsap-fade-up h-[1.5px] w-20 sm:w-28 bg-[#B9953E]/60 my-4 sm:my-5"
            />

            {/* Description matching Image 2 typography */}
            <p className="gsap-fade-up text-sm sm:text-base lg:text-lg text-[#29221F]/75 font-light leading-relaxed max-w-lg">
              A gated entrance for a reassuring welcome home.
            </p>
          </div>

          {/* Right Column: Large Architectural Gated Entrance Image (58% desktop) */}
          <div className="w-full lg:w-[58%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-3xl pb-3 pl-3 sm:pb-4 sm:pl-4 group">
              {/* Subtle Offset Golden Outline Frame (shifted down-left, strictly bounded inside container) */}
              <div
                ref={outlineRef}
                className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#B9953E]/45 pointer-events-none z-0"
              />

              {/* Square Architectural Image Container */}
              <div 
                ref={imageContainerRef}
                className="relative z-10 w-full overflow-hidden rounded-none shadow-none border border-[#DFD1B7]/60 bg-[#EDE2D1]/40"
              >
                <img
                  ref={imgRef}
                  src="/images/peace-img.webp"
                  alt="A gated entrance for a reassuring welcome home - United Orchid Heights"
                  className="w-full h-auto object-cover rounded-none block will-change-transform"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
