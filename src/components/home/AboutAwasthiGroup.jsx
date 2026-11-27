import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Factory, GraduationCap, Hotel, Building2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ─────────────────────────────────────────────────────────────────────────────
// BUSINESS VENTURES DATA
// ─────────────────────────────────────────────────────────────────────────────
const businessVentures = [
  { label: 'Steel Industry', icon: Factory },
  { label: 'Education', icon: GraduationCap },
  { label: 'Hospitality', icon: Hotel },
  { label: 'Real Estate', icon: Building2 },
];

export default function AboutAwasthiGroup() {
  const sectionRef = useRef(null);
  const counterRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // 1. Logo Entrance Animation: opacity 0 -> 1, translateX: -25px -> 0
      gsap.fromTo(
        '.gsap-awasthi-logo',
        { opacity: 0, x: -25 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );

      // 2. Animated Vertical Golden Divider: scaleY 0 -> 1 from top
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1,
            ease: 'power3.out',
            transformOrigin: 'top',
            clearProps: 'all',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }

      // 3. Animated Legacy Counter (0 to 40, ~2s duration)
      if (counterRef.current) {
        if (!prefersReducedMotion) {
          const counterObj = { value: 0 };
          gsap.to(counterObj, {
            value: 40,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent = Math.round(counterObj.value);
              }
            },
          });
        } else {
          counterRef.current.textContent = '40';
        }
      }

      // 4. Heading Fade-Up Reveal
      gsap.fromTo(
        '.gsap-awasthi-heading',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );

      // 5. Sequential Paragraphs Staggered Animation
      gsap.fromTo(
        '.gsap-awasthi-para',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.gsap-awasthi-content',
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );

      // 6. Business Ventures Strip Sequential Reveal
      gsap.fromTo(
        '.gsap-venture-item',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.gsap-ventures-strip',
            start: 'top 92%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, sectionRef);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-awasthi-group"
      className="pt-5 sm:pt-6 lg:pt-8 pb-5 sm:pb-6 lg:pb-7 bg-white border-b border-[#E5E5E5] relative overflow-hidden"
    >
      {/* Subtle background ambient floral emblem (~2.5% opacity) */}
      <div
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none select-none opacity-[0.025] z-0"
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
        
        {/* Two-Column Editorial Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN — LOGO AND LEGACY COUNTER (~28-30% Width)
             ───────────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[29%] flex flex-col items-center justify-center text-center py-1 lg:py-2 lg:pr-8 xl:pr-10">
            
            {/* Transparent High-Res Awasthi Group Logo */}
            <div className="gsap-awasthi-logo flex items-center justify-center mb-1 group">
              <img
                src="/images/awasthi-group-logo.webp"
                alt="Awasthi Group"
                className="w-40 sm:w-44 lg:w-48 h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Thin Decorative Separator across column */}
            <div className="w-full max-w-[200px] sm:max-w-[240px] h-[1px] bg-[#E5E5E5] my-5 sm:my-6 mx-auto" />

            {/* Large Animated Legacy Counter */}
            <div className="flex flex-col items-center justify-center">
              <span
                ref={counterRef}
                className="font-serif font-normal text-8xl sm:text-9xl lg:text-[112px] text-[#C5A059] leading-none tracking-tight select-none"
              >
                40
              </span>
              <span className="block text-xs sm:text-[13px] font-semibold tracking-[0.25em] uppercase text-[#111111] mt-3">
                YEARS OF LEGACY
              </span>
              <p className="font-serif italic text-xs sm:text-[13.5px] text-[#C5A059] mt-2 tracking-wide font-normal">
                Built on trust. Driven by excellence.
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              VERTICAL GOLDEN DIVIDER (Desktop)
             ───────────────────────────────────────────────────────────── */}
          <div
            ref={dividerRef}
            className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-[#C5A059]/50 to-transparent self-stretch mx-2 xl:mx-4"
            aria-hidden="true"
          />

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN — ORIGINAL BROCHURE CONTENT (~70-72% Width)
             ───────────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[71%] lg:pl-8 xl:pl-10 flex flex-col justify-center">
            
            {/* Eyebrow Subtitle with Thin Golden Line (Matching Hero/About Section) */}
            <div className="gsap-awasthi-heading inline-flex items-center gap-3 mb-3 self-start">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
                OUR LEGACY
              </span>
              <span className="h-[1px] w-12 bg-[#C5A059]" />
            </div>

            {/* Exact Original Brochure Heading with Elegant Hierarchy */}
            <h2 className="gsap-awasthi-heading font-serif font-normal text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] tracking-tight text-[#111111] mb-2">
              Awasthi Group
              <span className="block font-serif italic text-lg sm:text-xl lg:text-[22px] text-[#C5A059] font-normal mt-1.5">
                A Legacy of Strength and Progress Across Every Venture
              </span>
            </h2>

            {/* Decorative golden accent line */}
            <div className="gsap-awasthi-heading h-[1.5px] w-14 sm:w-16 bg-[#C5A059] mb-5" />

            {/* Complete Original 5 Brochure Paragraphs */}
            <div className="gsap-awasthi-content space-y-3 sm:space-y-3.5 text-[14px] sm:text-[15px] leading-[1.75] text-[#555555] font-normal">
              <p className="gsap-awasthi-para">
                With a 40-year legacy in the steel industry, Awasthi Group has built its foundation on reliability, precision, quality, and strong work ethics. Today, the Group has diversified into education, hospitality, and real estate.
              </p>
              
              <p className="gsap-awasthi-para">
                Under the leadership of <strong className="font-semibold text-[#111111]">Shri Shiv Shanker Awasthi</strong>, along with <strong className="font-semibold text-[#111111]">Shri Atul Awasthi</strong> and <strong className="font-semibold text-[#111111]">Shri Anuj Awasthi</strong>, the Group continues to grow as a trusted and diversified business enterprise.
              </p>

              <p className="gsap-awasthi-para">
                In education, the Group operates <span className="font-medium text-[#111111]">Seth M. R. Jaipuria School, Kanpur Road Campus, Lucknow</span>.
              </p>

              <p className="gsap-awasthi-para">
                In hospitality, Awasthi Group has successfully commissioned <span className="font-medium text-[#111111]">Holiday Inn under IHG</span>, with two more internationally associated hotels planned by 2029.
              </p>

              <p className="gsap-awasthi-para">
                Expanding its presence in real estate, the Group is introducing <span className="font-medium text-[#111111]">Orchid Heights</span>, a 180-apartment residential project, with a vision to develop sustainable and modern communities while maintaining its commitment to quality, integrity, and customer satisfaction.
              </p>
            </div>

          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            BUSINESS VENTURES STRIP (Deep Black Luxury Theme with Gold Accents)
           ───────────────────────────────────────────────────────────── */}
        <div className="gsap-ventures-strip mt-6 sm:mt-8 pt-6 sm:pt-7 border-t border-[#E5E5E5]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {businessVentures.map((venture) => {
              const Icon = venture.icon;
              return (
                <div
                  key={venture.label}
                  className="gsap-venture-item group relative flex flex-col items-center justify-center text-center p-5 sm:p-6 rounded-none bg-[#111111] border border-[#222222] hover:border-[#C5A059] shadow-md shadow-black/15 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_14px_36px_rgba(197,160,89,0.3)] cursor-pointer overflow-hidden"
                >
                  {/* Slow Vertical Liquid Reveal Animation Layer */}
                  <div className="absolute inset-0 z-0 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none">
                    {/* Liquid Wave Meniscus Crest at Top Edge */}
                    <div className="absolute -top-3 left-0 right-0 h-3.5 w-full opacity-95">
                      <svg viewBox="0 0 400 30" preserveAspectRatio="none" className="w-full h-full fill-[#E5C984]">
                        <path d="M0,15 C80,30 160,0 240,15 C320,30 360,5 400,15 L400,30 L0,30 Z" />
                      </svg>
                    </div>
                    {/* Liquid Gold Core Body */}
                    <div className="w-full h-full bg-gradient-to-t from-[#9E782F] via-[#C5A059] to-[#E5C984]" />
                  </div>

                  {/* Top Animated Golden Sweep Accent */}
                  <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C5A059] z-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left pointer-events-none" />

                  {/* Refined Icon Badge in Architectural Dark Frame */}
                  <div className="relative z-10 w-12 h-12 sm:w-13 sm:h-13 rounded-none bg-[#1C1C1C] border border-[#333333] group-hover:border-[#0D0D0D] group-hover:bg-[#0D0D0D] text-[#D4B675] group-hover:text-[#F3E5AB] flex items-center justify-center transition-all duration-500 shadow-inner group-hover:shadow-lg mb-3 group-hover:scale-105">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6] transition-transform duration-300" />
                  </div>

                  {/* Clean Bold Label in White transitioning to Rich Deep Onyx on Gold Liquid */}
                  <span className="relative z-10 text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-white/95 group-hover:text-[#0D0D0D] transition-colors duration-500">
                    {venture.label}
                  </span>

                  {/* Subtle Expanding Gold/Dark Line on Hover */}
                  <span className="relative z-10 h-[1.5px] w-0 group-hover:w-8 bg-[#0D0D0D] transition-all duration-500 ease-out mt-2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
