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
      className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-[#F6F0E6] relative overflow-hidden"
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
          <div className="w-full lg:w-[29%] flex flex-col items-center justify-center text-center py-4 lg:pr-8 xl:pr-10">
            
            {/* Transparent High-Res Awasthi Group Logo */}
            <div className="gsap-awasthi-logo flex items-center justify-center mb-1">
              <img
                src="/images/awasthi-group-logo.png"
                alt="Awasthi Group"
                className="w-40 sm:w-44 lg:w-48 h-auto object-contain mx-auto"
              />
            </div>

            {/* Thin Golden Decorative Separator across column */}
            <div className="w-full max-w-[200px] sm:max-w-[240px] h-[1px] bg-[#D9C8A7] my-5 sm:my-6 mx-auto" />

            {/* Large Animated Legacy Counter (Clean 40 without plus) */}
            <div className="flex flex-col items-center justify-center">
              <span
                ref={counterRef}
                className="font-serif font-normal text-8xl sm:text-9xl lg:text-[112px] text-[#A68A4E] leading-none tracking-tight select-none"
              >
                40
              </span>
              <span className="block text-xs sm:text-[13px] font-medium tracking-[0.25em] uppercase text-[#665A49] mt-3">
                YEARS OF LEGACY
              </span>
              <p className="italic text-xs sm:text-[13.5px] text-[#806435] mt-2 tracking-wide">
                Built on trust. Driven by excellence.
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              VERTICAL GOLDEN DIVIDER (Desktop)
             ───────────────────────────────────────────────────────────── */}
          <div
            ref={dividerRef}
            className="hidden lg:block w-[1px] bg-[#D9C8A7] self-stretch mx-2 xl:mx-4"
            aria-hidden="true"
          />

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN — ORIGINAL BROCHURE CONTENT (~70-72% Width)
             ───────────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[71%] lg:pl-8 xl:pl-10 flex flex-col justify-center">
            
            {/* Eyebrow Subtitle */}
            <div className="gsap-awasthi-heading inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B99A59]/10 border border-[#B99A59]/25 text-[#A68A4E] mb-3 self-start">
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                OUR LEGACY
              </span>
            </div>

            {/* Exact Original Brochure Heading with Elegant Hierarchy */}
            <h2 className="gsap-awasthi-heading font-serif font-normal text-2xl sm:text-3xl lg:text-[40px] leading-[1.2] tracking-tight text-[#29221F] mb-3">
              Awasthi Group
              <span className="block font-serif text-xl sm:text-2xl lg:text-[30px] text-[#806435] font-light mt-1">
                A Legacy of Strength and Progress Across Every Venture
              </span>
            </h2>

            {/* Decorative golden accent line */}
            <div className="gsap-awasthi-heading h-[1.5px] w-16 bg-[#B99A59]/60 mb-5" />

            {/* Complete Original 5 Brochure Paragraphs */}
            <div className="gsap-awasthi-content space-y-2.5 sm:space-y-3 text-[14px] sm:text-[14.5px] leading-[1.7] text-[#665A49] font-light">
              <p className="gsap-awasthi-para">
                With a 40-year legacy in the steel industry, Awasthi Group has built its foundation on reliability, precision, quality, and strong work ethics. Today, the Group has diversified into education, hospitality, and real estate.
              </p>
              
              <p className="gsap-awasthi-para">
                Under the leadership of <strong className="font-medium text-[#29221F]">Shri Shiv Shanker Awasthi</strong>, along with <strong className="font-medium text-[#29221F]">Shri Atul Awasthi</strong> and <strong className="font-medium text-[#29221F]">Shri Anuj Awasthi</strong>, the Group continues to grow as a trusted and diversified business enterprise.
              </p>

              <p className="gsap-awasthi-para">
                In education, the Group operates <span className="font-medium text-[#29221F]">Seth M. R. Jaipuria School, Kanpur Road Campus, Lucknow</span>.
              </p>

              <p className="gsap-awasthi-para">
                In hospitality, Awasthi Group has successfully commissioned <span className="font-medium text-[#29221F]">Holiday Inn under IHG</span>, with two more internationally associated hotels planned by 2029.
              </p>

              <p className="gsap-awasthi-para">
                Expanding its presence in real estate, the Group is introducing <span className="font-medium text-[#29221F]">Orchid Heights</span>, a 180-apartment residential project, with a vision to develop sustainable and modern communities while maintaining its commitment to quality, integrity, and customer satisfaction.
              </p>
            </div>

          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            BUSINESS VENTURES STRIP (Full Width Strip Matching 1st Image)
           ───────────────────────────────────────────────────────────── */}
        <div className="gsap-ventures-strip mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-[#D9C8A7]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {businessVentures.map((venture) => {
              const Icon = venture.icon;
              return (
                <div
                  key={venture.label}
                  className="gsap-venture-item flex flex-col items-center justify-center text-center group cursor-default"
                >
                  {/* Clean Outline Gold Icon with No Box Container */}
                  <div className="text-[#B99A59] group-hover:text-[#96743B] transition-all duration-300 group-hover:scale-110 mb-2 sm:mb-2.5">
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.4]" />
                  </div>

                  {/* Clean Label Directly Beneath Icon */}
                  <span className="text-[13.5px] sm:text-[14.5px] font-medium tracking-tight text-[#665A49] group-hover:text-[#29221F] transition-colors">
                    {venture.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
