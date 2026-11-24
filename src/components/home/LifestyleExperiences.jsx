import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LifestyleExperiences() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const featuredItems = [
    {
      id: 'ev-charging',
      category: 'Sustainable Living',
      title: 'Charge into Tomorrow',
      desc: 'Convenience for a better tomorrow.',
      image: '/images/download1.webp',
      alt: 'Charge into Tomorrow - EV Charging Infrastructure',
      objectPosition: '35% 65%',
      isFeatured: false,
    },
    {
      id: 'kids-park',
      category: 'Joyful Childhood',
      title: 'Play, Explore & Grow',
      desc: 'Spaces for little moments of joy.',
      image: '/images/download2.webp',
      alt: "Play, Explore & Grow - Kids' Park",
      objectPosition: 'center 75%',
      isFeatured: true,
    },
    {
      id: 'modern-gymnasium',
      category: 'Active Living',
      title: 'Fitness & Wellness',
      desc: 'Make wellness a part of every day.',
      image: '/images/download3.webp',
      alt: 'Fitness & Wellness - Modern Gymnasium',
      objectPosition: 'center 70%',
      isFeatured: false,
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Heading Staggered Reveal
      if (headingRef.current) {
        gsap.from(headingRef.current.querySelectorAll('.gsap-fade-up'), {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            once: true
          }
        });
      }

      // 2. Three Featured Image Cards Reveal (Staggered bottom-to-top, 30px upward movement, 1.0s duration, 0.15s stagger)
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.gsap-card-reveal');
        gsap.fromTo(
          cards,
          {
            clipPath: 'inset(100% 0 0 0)',
            opacity: 0,
            y: 30
          },
          {
            clipPath: 'inset(0% 0 0 0)',
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: 'power3.out',
            clearProps: 'clipPath',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lifestyle-experiences"
      className="relative py-7 sm:py-8 lg:py-10 bg-white border-b border-[#E5E5E5] overflow-hidden"
    >
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* Section Heading: Centered, Compact, Minimal Gaps */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-4 sm:mb-5 lg:mb-6 space-y-1">
          <div className="gsap-fade-up inline-flex items-center justify-center gap-2.5">
            <span className="h-[1px] w-6 sm:w-8 bg-[#C5A059]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059] block">
              EXPERIENCE AN ELEVATED LIFESTYLE
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-[#C5A059]" />
          </div>

          <h2 className="gsap-fade-up font-serif font-medium text-2xl sm:text-3xl lg:text-[36px] text-[#151515] leading-tight tracking-tight">
            Life, Beautifully Experienced
          </h2>

          <div className="gsap-fade-up h-[1px] w-12 sm:w-16 bg-[#C5A059] mx-auto mt-1.5" />
        </div>

        {/* Featured Three-Image Layout: Left (~460px), Center Featured (~530px), Right (~460px) */}
        <div 
          ref={cardsRef}
          className="flex flex-col lg:flex-row items-center justify-center gap-5 sm:gap-6 lg:gap-7 w-full"
        >
          {featuredItems.map((item) => {
            const isCenter = item.isFeatured;
            return (
              <div
                key={item.id}
                className={`gsap-card-reveal group relative w-full overflow-hidden rounded-[14px] bg-[#1a1a1a] shadow-sm transition-all duration-500 ease-out cursor-pointer ${
                  isCenter 
                    ? 'lg:w-[36%] h-[420px] sm:h-[470px] lg:h-[530px] z-10 shadow-md ring-1 ring-[#C5A059]/20 hover:ring-[#C5A059]/50' 
                    : 'lg:w-[32%] h-[370px] sm:h-[410px] lg:h-[460px] z-0 ring-1 ring-black/5 hover:ring-[#C5A059]/30'
                }`}
              >
                {/* Image with 800ms Zoom (Scale 1.06 on Hover) */}
                <img
                  src={item.image}
                  alt={item.alt}
                  width="800"
                  height="600"
                  decoding="async"
                  loading="lazy"
                  style={{ objectPosition: item.objectPosition }}
                  className="w-full h-full object-cover rounded-[14px] transition-transform duration-800 ease-out group-hover:scale-[1.06] will-change-transform block"
                />

                {/* Subtle Transparent-to-Dark Gradient at Bottom (Natural & Bright Upper Half) */}
                <div
                  className="absolute inset-0 rounded-[14px] pointer-events-none transition-opacity duration-600 ease-out z-[2]"
                  style={{
                    background: 'linear-gradient(to top, rgba(12, 10, 8, 0.9) 0%, rgba(12, 10, 8, 0.45) 48%, rgba(12, 10, 8, 0.05) 75%, transparent 100%)'
                  }}
                />

                {/* Bottom-Left Overlay Content (Category, Title, and Smooth Reveal Description) */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 lg:p-8 z-[4] pointer-events-none flex flex-col justify-end text-left">
                  {/* Category & Title with Smooth Upward Shift on Hover (20–25px) */}
                  <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2 lg:group-hover:-translate-y-3 will-change-transform">
                    <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-[#D4B675] block mb-1.5 sm:mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-[26px] lg:text-[28px] font-medium text-white tracking-tight leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Short Description (Revealed on Hover, Fully Visible on Touch/Mobile) */}
                  <div className="overflow-hidden transition-all duration-500 ease-out max-h-24 opacity-100 mt-2 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:group-hover:max-h-20 lg:group-hover:opacity-100 lg:group-hover:mt-2.5">
                    <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Reduced-Motion Accessibility Rules */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #lifestyle-experiences,
          #lifestyle-experiences * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
