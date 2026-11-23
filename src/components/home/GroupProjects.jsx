import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Award, Clock } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS DATA (Exact brochure details from Page 12)
// ─────────────────────────────────────────────────────────────────────────────
const projectsData = [
  {
    id: 'holiday-inn',
    number: '01',
    displayNumber: '01.',
    name: 'Holiday Inn',
    category: 'COMPLETED PROJECTS',
    isCompleted: true,
    subtitle: '5-Star Hotel',
    description:
      'Featuring 192 spacious rooms, over 50,000 sq. ft. of banquet and lawn space, and the capacity to accommodate up to 2,000 guests under IHG.',
    specs: [
      { label: 'Capacity', value: '2,000 Guests' },
      { label: 'Rooms', value: '192 Luxury Rooms' },
      { label: 'Banqueting', value: '50,000+ Sq. Ft.' },
    ],
    image: '/images/holiday-inn.webp',
    objectPosition: 'center 40%',
  },
  {
    id: 'jaipuria-school',
    number: '02',
    displayNumber: '02.',
    name: 'Seth M. R. Jaipuria School',
    category: 'COMPLETED PROJECTS',
    isCompleted: true,
    subtitle: 'Kanpur Road Campus, Lucknow',
    description:
      'A leading CBSE-affiliated K–12 institution featuring state-of-the-art academic, sports and cultural infrastructure spread across more than 7 acres.',
    specs: [
      { label: 'Campus Area', value: '7+ Acres' },
      { label: 'Affiliation', value: 'CBSE K–12' },
      { label: 'Facility', value: 'State-of-the-Art' },
    ],
    image: '/images/jaipuria-school.webp',
    objectPosition: 'center center',
  },
  {
    id: 'five-star-hotel',
    number: '03',
    displayNumber: '03.',
    name: '5-Star Hotel',
    category: 'ONGOING PROJECTS',
    isCompleted: false,
    subtitle: 'International Association (By 2029)',
    description:
      'An upcoming landmark 5-star hotel development designed to international hospitality standards, expanding Awasthi Group’s premium presence.',
    specs: [
      { label: 'Category', value: '5-Star Luxury' },
      { label: 'Timeline', value: 'By 2029' },
      { label: 'Standard', value: 'International' },
    ],
    image: '/images/ongoing-five-star-hotel.webp',
    objectPosition: 'center 35%',
  },
  {
    id: 'three-star-hotel',
    number: '04',
    displayNumber: '04.',
    name: '3-Star Hotel',
    category: 'ONGOING PROJECTS',
    isCompleted: false,
    subtitle: 'Upcoming Modern Hospitality Development',
    description:
      'Contemporary hotel development combining comfort, convenience and smart contemporary architecture for modern business and leisure travelers.',
    specs: [
      { label: 'Category', value: '3-Star Premium' },
      { label: 'Type', value: 'Business & Leisure' },
      { label: 'Location', value: 'Prime Lucknow' },
    ],
    image: '/images/ongoing-three-star-hotel.webp',
    objectPosition: 'center center',
  },
];

export default function GroupProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  const currentProject = projectsData[currentIndex];

  // Manual Navigation Handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  // ─────────────────────────────────────────────────────────────────────────
  // AUTO-PLAY / AUTO-SWIPE: Changes slide automatically every 3.5 seconds
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Animate text & specs whenever active slide changes
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current.querySelectorAll('.gsap-slide-text'),
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'all',
      }
    );
  }, [currentIndex]);

  // ScrollTrigger entrance reveal
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        '.gsap-gp-header',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
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

      // Card Container Reveal
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="group-projects"
      className="py-10 sm:py-11 lg:py-12 bg-[#F6F0E6] border-b border-[#B99A59]/20 relative overflow-hidden"
    >
      {/* Main Container - max-w-[1400px] */}
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─────────────────────────────────────────────────────────────
            1. PRESERVED SECTION HEADER (Exact current styling & text)
           ───────────────────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8 space-y-2">
          {/* Eyebrow Pill Badge */}
          <div className="gsap-gp-header inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B99A59]/10 border border-[#B99A59]/25 text-[#A68A4E]">
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
              OUR PORTFOLIO
            </span>
          </div>

          {/* Heading */}
          <h2 className="gsap-gp-header font-serif font-normal text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] tracking-tight text-[#29221F]">
            Landmarks of Excellence
          </h2>

          {/* Thin decorative golden underline */}
          <div className="gsap-gp-header h-[1.5px] w-20 sm:w-28 bg-[#B99A59]/60 mx-auto my-2 sm:my-2.5" />
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. FULL-VIEW FEATURED PROJECT SLIDER (Inspired by Prestige Layout)
               No plus/minus strips; Left: Large Full Image; Right: Details;
               Autoplay: Swipes automatically every 3-4s (pauses on hover).
           ───────────────────────────────────────────────────────────── */}
        <div
          ref={cardRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-[#FAF6F0] border border-[#D9C8A7] rounded-none overflow-hidden shadow-[0_4px_24px_rgba(185,154,89,0.06)]"
        >
          {/* Strictly locked height on desktop (480px) to prevent layout shifts or height jumping */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch h-auto lg:h-[480px]">
            
            {/* ─────────────────────────────────────────────────────────
                LEFT SIDE (~60%): Large Full Architectural Project Image
               ───────────────────────────────────────────────────────── */}
            <div className="lg:col-span-7 relative h-[280px] sm:h-[350px] lg:h-full overflow-hidden bg-[#EDE3CF]/40 border-b lg:border-b-0 lg:border-r border-[#D9C8A7]">
              {/* Full Project Image with smooth crossfade on index change */}
              <img
                key={currentProject.id}
                src={currentProject.image}
                alt={currentProject.name}
                style={{ objectPosition: currentProject.objectPosition }}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] animate-fadeIn"
                loading="eager"
              />

              {/* Status Badge in Upper Left Corner */}
              <div className="absolute top-3 left-3 bg-[#29221F]/85 backdrop-blur-xs px-3 py-1 border border-[#B99A59]/40 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#F6F0E6] select-none">
                {currentProject.isCompleted ? (
                  <Award className="w-3.5 h-3.5 text-[#B99A59]" />
                ) : (
                  <Clock className="w-3.5 h-3.5 text-[#B99A59]" />
                )}
                <span>{currentProject.category}</span>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────
                RIGHT SIDE (~40%): Project Details & Minimal Typography
               ───────────────────────────────────────────────────────── */}
            <div
              ref={contentRef}
              className="lg:col-span-5 p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full min-h-[350px] lg:min-h-0 bg-[#FAF6F0]"
            >
              {/* Top Details Block */}
              <div className="flex-1 flex flex-col justify-start">
                {/* Category Pill Tag */}
                <div className="gsap-slide-text inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#A68A4E] uppercase mb-1.5">
                  <span>{currentProject.category}</span>
                </div>

                {/* Large Decorative Project Number */}
                <div className="gsap-slide-text font-serif font-light text-5xl sm:text-6xl text-[#A68A4E] leading-none mb-1 select-none">
                  {currentProject.displayNumber}
                </div>

                {/* Project Title (Consistent height) */}
                <h3 className="gsap-slide-text font-serif font-normal text-2xl sm:text-3xl lg:text-[32px] text-[#30271F] leading-tight tracking-tight mt-1 min-h-[36px] lg:min-h-[40px] flex items-center">
                  {currentProject.name}
                </h3>

                {/* Subtitle (Consistent height) */}
                <p className="gsap-slide-text text-sm font-medium text-[#806435] mt-1 tracking-wide min-h-[22px] flex items-center">
                  {currentProject.subtitle}
                </p>

                {/* Thin Champagne Gold Decorative Accent Line */}
                <div className="gsap-slide-text h-[1.5px] w-16 bg-[#B99A59]/80 my-3" />

                {/* Description (Locked to exactly 3 lines with min-h to prevent height changes) */}
                <p className="gsap-slide-text text-[13.5px] sm:text-[14px] leading-relaxed text-[#665A49] font-light mb-4 min-h-[60px] line-clamp-3">
                  {currentProject.description}
                </p>

                {/* Key Project Specifications Grid (Consistent height) */}
                <div className="gsap-slide-text grid grid-cols-3 gap-2 py-3 border-t border-b border-[#D9C8A7]/70 min-h-[58px]">
                  {currentProject.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="text-left">
                      <span className="block text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wider text-[#A68A4E]">
                        {spec.label}
                      </span>
                      <span className="block text-[12px] sm:text-[13px] font-medium text-[#30271F] mt-0.5 truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Controls Row: Counter + Minimal Slider Arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-[#D9C8A7]/40 mt-4 shrink-0">
                
                {/* Active Slide Counter & Indicators */}
                <div className="flex items-center gap-3">
                  <div className="flex items-baseline gap-1 font-serif select-none">
                    <span className="text-lg font-medium text-[#29221F]">
                      {currentProject.number}
                    </span>
                    <span className="text-xs text-[#A68A4E] font-light">/</span>
                    <span className="text-xs text-[#665A49]">
                      0{projectsData.length}
                    </span>
                  </div>

                  {/* Tiny progress dots */}
                  <div className="flex items-center gap-1.5 ml-2">
                    {projectsData.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        onClick={() => setCurrentIndex(dotIdx)}
                        className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                          currentIndex === dotIdx
                            ? 'w-6 bg-[#B99A59]'
                            : 'w-2 bg-[#D9C8A7] hover:bg-[#B99A59]/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Circular Slider Arrows (Just like reference image) */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous Project"
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-[#D9C8A7] hover:border-[#B99A59] bg-white hover:bg-[#B99A59] text-[#665A49] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A59]"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[1.8]" />
                  </button>

                  <button
                    type="button"
                    aria-label="Next Project"
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-[#D9C8A7] hover:border-[#B99A59] bg-white hover:bg-[#B99A59] text-[#665A49] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A59]"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[1.8]" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. MINIMAL ORCHID CREST DIVIDER
           ───────────────────────────────────────────────────────────── */}
        <div className="pt-6 sm:pt-7 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 sm:gap-6 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#D9C8A7]" />
            <img
              src="/images/orchid-emblem.webp"
              alt="United Orchid Heights"
              className="w-8 h-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="h-[1px] flex-1 bg-[#D9C8A7]" />
          </div>
        </div>

      </div>
    </section>
  );
}
