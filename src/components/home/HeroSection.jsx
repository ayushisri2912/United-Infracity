import React, { useEffect, useRef } from 'react';
import { PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const navigate = useNavigate();
  const { openEnquire } = useModal();

  const sectionRef = useRef(null);
  const textContentRef = useRef(null);
  const imgContainerRef = useRef(null);
  const imgRef = useRef(null);
  const outlineRef = useRef(null);

  const stats = [
    { value: '180', label: 'Residences' },
    { value: '15', label: 'Storeys' },
    { value: '5,301', label: 'Sq. Metres' },
    { value: '3 BHK', label: 'Configurations' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Right column text and stats fade-up
      if (textContentRef.current) {
        gsap.from(textContentRef.current.querySelectorAll('.gsap-hero-fade'), {
          y: 35,
          opacity: 0,
          duration: 1.1,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      }

      // Lodha-style Image container smooth reveal
      if (imgContainerRef.current) {
        gsap.from(imgContainerRef.current, {
          y: 40,
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
    <section ref={sectionRef} id="hero" className="py-14 sm:py-18 lg:py-24 bg-[#F8F2E8] relative overflow-hidden">
      {/* Subtle Luxury Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EDE2D1]/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B9953E]/5 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* Left Column (Approx 50% width): Project Building Image - Height matched to right content */}
          <div className="lg:col-span-6 order-1 flex flex-col h-full">
            <div className="relative group w-full h-full flex flex-col max-w-xl mx-auto lg:max-w-none pb-3 pl-3 sm:pb-4 sm:pl-4">
              {/* Subtle Offset Golden Outline Frame (shifted down-left, bounded inside container) */}
              <div
                ref={outlineRef}
                className="absolute top-3 left-0 sm:top-4 right-3 sm:right-4 bottom-0 border border-[#B9953E]/45 rounded-xl sm:rounded-2xl pointer-events-none z-0"
              />

              {/* Main Image Container filling height */}
              <div 
                ref={imgContainerRef}
                className="relative z-10 flex-1 w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-0 overflow-hidden rounded-xl sm:rounded-2xl bg-[#EDE2D1] shadow-xl border border-[#B9953E]/20 flex flex-col"
              >
                <img
                  ref={imgRef}
                  src="/images/about1.webp"
                  alt="United Orchid Heights - 15-Storey Luxury Residential Tower"
                  className="w-full h-full object-cover object-center flex-1 will-change-transform block"
                  loading="lazy"
                />

                {/* Subtle Luxury Caption Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-3.5 rounded-xl bg-[#F8F2E8]/95 backdrop-blur-md border border-[#B9953E]/30 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#B9953E] uppercase block">
                      Architectural Landmark
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#29221F] mt-0.5">
                      United Orchid Heights
                    </h4>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-[11px] font-medium text-[#29221F]/70 tracking-wide">
                      Vrindavan Yojana, Lucknow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Approx 50% width): Project Information, Stats & Buttons */}
          <div ref={textContentRef} className="lg:col-span-6 order-2 text-left flex flex-col justify-between h-full py-1 sm:py-2 space-y-6 sm:space-y-7">
            
            {/* Top: Header & Description */}
            <div className="space-y-5">
              {/* Small Label with Orchid Motif */}
              <div className="gsap-hero-fade inline-flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#B9953E] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C12 2 8 6 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 6 12 2 12 2Z" fill="#B9953E" fillOpacity="0.2" />
                  <path d="M12 15V22" strokeLinecap="round" />
                  <path d="M8 12C5 12 2 14 2 17C2 19 4 21 7 21C10 21 11 18 12 15" strokeLinecap="round" />
                  <path d="M16 12C19 12 22 14 22 17C22 19 20 21 17 21C14 21 13 18 12 15" strokeLinecap="round" />
                </svg>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#B9953E] uppercase">
                  ABOUT THE PROJECT
                </span>
                <div className="h-[1px] w-12 bg-[#B9953E]/40" />
              </div>

              {/* Main Heading */}
              <div className="gsap-hero-fade">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#29221F] leading-[1.12]">
                  United Orchid Heights
                </h2>
                <p className="font-serif italic text-lg sm:text-xl text-[#B9953E] font-medium mt-1">
                  Where Thoughtful Living Rises Higher
                </p>
              </div>

              {/* Description Paragraphs */}
              <div className="gsap-hero-fade space-y-3 sm:space-y-3.5 text-[#29221F]/85 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-light">
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
            </div>

            {/* Middle: Project Statistics */}
            <div className="gsap-hero-fade pt-5 border-t border-[#B9953E]/20">
              <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-5 items-start">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B9953E] tracking-tight leading-none">
                      {stat.value}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#29221F]/70 uppercase tracking-wider font-semibold leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: Two Action Buttons */}
            <div className="gsap-hero-fade flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => {
                  navigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 sm:px-7 py-3.5 bg-[#B9953E] hover:bg-[#A38131] text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-center"
              >
                Discover Our Journey →
              </button>

              <button
                onClick={openEnquire}
                className="px-6 sm:px-7 py-3.5 bg-[#EDE2D1]/60 hover:bg-[#EDE2D1] border border-[#B9953E]/40 text-[#29221F] font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#B9953E]" />
                <span>Schedule Consultation</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
