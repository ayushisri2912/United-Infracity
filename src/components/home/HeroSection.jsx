import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useImageReveal from '../../hooks/useImageReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const navigate = useNavigate();
  const { openEnquire } = useModal();

  const sectionRef = useRef(null);
  const contentColRef = useRef(null);
  const statsStripRef = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);

  // 1. Cinematic Left-to-Right Masked Reveal Hook for the Building Image
  const { containerRef: imageContainerRef, imageRef } = useImageReveal({
    direction: 'left',
    duration: 1.3,
    scale: 1.08,
    start: 'top 82%',
    once: true,
    ease: 'power3.inOut'
  });

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 2. Heading Bottom-to-Top Line Reveal
      const heading = sectionRef.current?.querySelector('.gsap-about-heading');
      if (heading) {
        gsap.from(heading, {
          y: 40,
          opacity: 0,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        });
      }

      // 3. Staggered Fade-Up for Subtitle, Paragraphs and Action Buttons
      if (contentColRef.current) {
        const textElements = contentColRef.current.querySelectorAll('.gsap-about-fade');
        if (textElements.length > 0) {
          gsap.from(textElements, {
            y: 28,
            opacity: 0,
            duration: 0.95,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true
            }
          });
        }
      }

      // 4. Smooth Numerical Count-Up Effect for Statistics
      if (statsStripRef.current) {
        const statsObj = { count1: 0, count2: 0, count3: 0 };
        gsap.to(statsObj, {
          count1: 180,
          count2: 15,
          count3: 5301,
          duration: 2.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsStripRef.current,
            start: 'top 90%',
            once: true
          },
          onUpdate: () => {
            if (stat1Ref.current) {
              stat1Ref.current.textContent = Math.floor(statsObj.count1);
            }
            if (stat2Ref.current) {
              stat2Ref.current.textContent = Math.floor(statsObj.count2);
            }
            if (stat3Ref.current) {
              stat3Ref.current.textContent = Math.floor(statsObj.count3).toLocaleString();
            }
          }
        });

        // 5. Subtle Staggered Reveal for Statistics Labels
        const labels = statsStripRef.current.querySelectorAll('.gsap-stat-label');
        if (labels.length > 0) {
          gsap.from(labels, {
            y: 12,
            opacity: 0,
            duration: 0.85,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsStripRef.current,
              start: 'top 90%',
              once: true
            }
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="bg-white py-14 sm:py-16 lg:py-[68px] relative border-b border-[#E5E5E5] overflow-hidden"
    >
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Part 1: Two-Column Editorial Architectural Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 sm:gap-12 lg:gap-14 xl:gap-16">
          
          {/* Left Column: Prominent Building Image (~48% Desktop Width) */}
          <div className="w-full lg:w-[48%] flex flex-col">
            <div className="relative w-full overflow-hidden">
              {/* Image Container with Left-to-Right Masked Reveal */}
              <div
                ref={imageContainerRef}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-none bg-[#F5F5F5]"
              >
                <img
                  ref={imageRef}
                  src="/images/about1.webp"
                  alt="United Orchid Heights - 15-Storey Luxury Residential Tower"
                  className="w-full h-full object-cover rounded-none block will-change-transform"
                  loading="lazy"
                />
              </div>

              {/* Minimal Editorial Caption Below Image */}
              <div className="pt-3.5 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#777777] border-t border-[#E5E5E5] mt-3">
                <span className="font-semibold text-[#111111] tracking-[0.18em]">
                  United Orchid Heights
                </span>
                <span className="text-[#888888] font-light tracking-[0.12em]">
                  Architectural Landmark • Lucknow
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Content (~52% Desktop Width) */}
          <div
            ref={contentColRef}
            className="w-full lg:w-[52%] flex flex-col justify-center space-y-6 sm:space-y-7 text-left"
          >
            {/* Top Eyebrow Label with Thin Golden Line */}
            <div className="gsap-about-fade inline-flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B99A55] uppercase">
                ABOUT THE PROJECT
              </span>
              <span className="h-[1px] w-12 bg-[#B99A55]" />
            </div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-2">
              <h2 className="gsap-about-heading font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-[#111111] leading-[1.14]">
                United Orchid Heights
              </h2>
              <p className="gsap-about-fade font-serif italic text-lg sm:text-xl text-[#B99A55] font-normal">
                Where Thoughtful Living Rises Higher
              </p>
            </div>

            {/* Three Project Description Paragraphs */}
            <div className="gsap-about-fade space-y-3.5 text-[#555555] text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                United Orchid Heights is a thoughtfully planned residential development by United Infracity Private Limited, created for modern families seeking the right balance of comfort, connectivity and contemporary living.
              </p>
              <p>
                Located in Vrindavan Yojana Phase 1, Lucknow, the project brings together well-designed 3 BHK and 3 BHK + S residences within a single 15-storey residential tower.
              </p>
              <p>
                Spread across 5,301 sq. m., United Orchid Heights comprises 180 residences, complemented by landscaped spaces and lifestyle amenities.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="gsap-about-fade flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary Button: Solid Black with Smooth Golden Sliding-Fill Hover Animation */}
              <button
                onClick={() => {
                  navigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative overflow-hidden group px-7 py-3.5 bg-[#111111] text-white font-medium text-xs uppercase tracking-[0.18em] rounded-none transition-colors duration-400 cursor-pointer flex items-center justify-center gap-2.5 shadow-xs"
              >
                {/* Sliding Golden Fill Layer */}
                <span className="absolute inset-0 bg-[#B99A55] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#111111] transition-colors duration-400">
                  <span>Discover Our Journey</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </button>

              {/* Secondary Button: Clean Outlined Rectangular Button */}
              <button
                onClick={openEnquire}
                className="px-7 py-3.5 bg-transparent hover:bg-[#111111] border border-[#B99A55] text-[#111111] hover:text-white font-medium text-xs uppercase tracking-[0.18em] rounded-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Schedule Consultation</span>
              </button>
            </div>

          </div>

        </div>

        {/* Part 2: Compact Full-Width Black Statistics Strip Directly Below */}
        <div
          ref={statsStripRef}
          className="mt-12 sm:mt-14 lg:mt-16 bg-[#111111] w-full py-5 sm:py-6 lg:py-0 lg:h-[120px] flex items-center shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 w-full divide-y md:divide-y-0 md:divide-x divide-[#333333]">
            
            {/* Stat 1: Residences */}
            <div className="flex flex-col items-center justify-center text-center px-3 sm:px-4 py-3 md:py-0">
              <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center">
                <span
                  ref={stat1Ref}
                  className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[50px] font-semibold text-[#D4B675] tracking-tight leading-none"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontVariantNumeric: 'lining-nums tabular-nums',
                    fontFeatureSettings: '"lnum" 1, "tnum" 1'
                  }}
                >
                  180
                </span>
              </div>
              <span className="gsap-stat-label text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-white/90 mt-1 sm:mt-1.5">
                Residences
              </span>
            </div>

            {/* Stat 2: Storeys */}
            <div className="flex flex-col items-center justify-center text-center px-3 sm:px-4 py-3 md:py-0">
              <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center">
                <span
                  ref={stat2Ref}
                  className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[50px] font-semibold text-[#D4B675] tracking-tight leading-none"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontVariantNumeric: 'lining-nums tabular-nums',
                    fontFeatureSettings: '"lnum" 1, "tnum" 1'
                  }}
                >
                  15
                </span>
              </div>
              <span className="gsap-stat-label text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-white/90 mt-1 sm:mt-1.5">
                Storeys
              </span>
            </div>

            {/* Stat 3: Sq. Metres */}
            <div className="flex flex-col items-center justify-center text-center px-3 sm:px-4 py-3 md:py-0">
              <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center">
                <span
                  ref={stat3Ref}
                  className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[50px] font-semibold text-[#D4B675] tracking-tight leading-none"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontVariantNumeric: 'lining-nums tabular-nums',
                    fontFeatureSettings: '"lnum" 1, "tnum" 1'
                  }}
                >
                  5,301
                </span>
              </div>
              <span className="gsap-stat-label text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-white/90 mt-1 sm:mt-1.5">
                Sq. Metres
              </span>
            </div>

            {/* Stat 4: Configurations */}
            <div className="flex flex-col items-center justify-center text-center px-3 sm:px-4 py-3 md:py-0">
              <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center">
                <span
                  className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[32px] font-semibold text-[#D4B675] tracking-tight leading-none whitespace-nowrap"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontVariantNumeric: 'lining-nums tabular-nums',
                    fontFeatureSettings: '"lnum" 1, "tnum" 1'
                  }}
                >
                  3 BHK & 3 BHK + S
                </span>
              </div>
              <span className="gsap-stat-label text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-white/90 mt-1 sm:mt-1.5">
                Configurations
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Scoped CSS for Reduced Motion Respect */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #hero,
          #hero * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
