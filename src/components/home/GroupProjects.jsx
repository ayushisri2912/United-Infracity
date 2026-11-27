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
      className="pt-5 sm:pt-6 lg:pt-8 pb-4 sm:pb-5 lg:pb-5 bg-white border-b border-[#E5E5E5] relative overflow-hidden"
    >
      {/* Subtle Background Watermark Emblem */}
      <div 
        className="absolute left-[-40px] top-1/3 w-80 h-80 pointer-events-none select-none opacity-[0.025] z-0" 
        aria-hidden="true"
      >
        <img 
          src="/images/orchid-emblem.webp" 
          alt="" 
          className="w-full h-full object-contain filter contrast-125" 
        />
      </div>

      {/* Main Container - max-w-[1550px] aligned with Navbar */}
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* ─────────────────────────────────────────────────────────────
            1. SECTION HEADER (Matching Theme & About Section Style)
           ───────────────────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
          {/* Eyebrow with Thin Golden Lines */}
          <div className="gsap-gp-header inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-1">
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
              OUR PORTFOLIO
            </span>
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
          </div>

          {/* Heading - Equal to About Section */}
          <h2 className="gsap-gp-header font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-[#111111]">
            Landmarks of Excellence
          </h2>

          {/* Thin decorative golden underline */}
          <div className="gsap-gp-header h-[1.5px] w-14 sm:w-18 bg-[#C5A059] mx-auto mt-2 sm:mt-2.5" />
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. FULL-VIEW FEATURED PROJECT SLIDER (Luxury White & Gold Theme)
           ───────────────────────────────────────────────────────────── */}
        <div
          ref={cardRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="group relative bg-white border border-[#E5E5E5] hover:border-[#C5A059] rounded-none overflow-hidden shadow-sm hover:shadow-[0_12px_36px_rgba(197,160,89,0.12)] transition-all duration-400"
        >
          {/* Animated Top Golden Accent Line */}
          <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-20 pointer-events-none" />

          {/* Locked height on desktop (480px) to prevent layout shifts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch h-auto lg:h-[480px]">
            
            {/* ─────────────────────────────────────────────────────────
                LEFT SIDE (~60%): Large Full Architectural Project Image
               ───────────────────────────────────────────────────────── */}
            <div className="lg:col-span-7 relative h-[280px] sm:h-[350px] lg:h-full overflow-hidden bg-[#F5F5F5] border-b lg:border-b-0 lg:border-r border-[#E5E5E5]">
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
              <div className="absolute top-3.5 left-3.5 bg-[#111111]/90 backdrop-blur-xs px-3.5 py-1.5 border border-[#C5A059]/40 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#D4B675] select-none shadow-sm">
                {currentProject.isCompleted ? (
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                ) : (
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                )}
                <span>{currentProject.category}</span>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────
                RIGHT SIDE (~40%): Project Details & Minimal Typography
               ───────────────────────────────────────────────────────── */}
            <div
              ref={contentRef}
              className="lg:col-span-5 p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full min-h-[350px] lg:min-h-0 bg-white"
            >
              {/* Top Details Block */}
              <div className="flex-1 flex flex-col justify-start">
                {/* Category Pill Tag */}
                <div className="gsap-slide-text inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.22em] text-[#C5A059] uppercase mb-1.5">
                  <span>{currentProject.category}</span>
                </div>

                {/* Large Decorative Project Number */}
                <div className="gsap-slide-text font-serif font-light text-5xl sm:text-6xl text-[#C5A059] leading-none mb-1 select-none">
                  {currentProject.displayNumber}
                </div>

                {/* Project Title */}
                <h3 className="gsap-slide-text font-serif font-normal text-2xl sm:text-3xl lg:text-[32px] text-[#111111] leading-tight tracking-tight mt-1 min-h-[36px] lg:min-h-[40px] flex items-center">
                  {currentProject.name}
                </h3>

                {/* Subtitle */}
                <p className="gsap-slide-text font-serif italic text-sm sm:text-[15px] font-normal text-[#C5A059] mt-1 tracking-wide min-h-[22px] flex items-center">
                  {currentProject.subtitle}
                </p>

                {/* Thin Champagne Gold Decorative Accent Line */}
                <div className="gsap-slide-text h-[1.5px] w-14 bg-[#C5A059] my-3" />

                {/* Description */}
                <p className="gsap-slide-text text-[13.5px] sm:text-[14px] leading-relaxed text-[#555555] font-light mb-4 min-h-[60px] line-clamp-3">
                  {currentProject.description}
                </p>

                {/* Key Project Specifications Grid */}
                <div className="gsap-slide-text grid grid-cols-3 gap-2 py-3 border-t border-b border-[#E5E5E5] min-h-[58px]">
                  {currentProject.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="text-left">
                      <span className="block text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wider text-[#C5A059]">
                        {spec.label}
                      </span>
                      <span className="block text-[12px] sm:text-[13px] font-medium text-[#111111] mt-0.5 truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Controls Row: Counter + Minimal Slider Arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5] mt-4 shrink-0">
                
                {/* Active Slide Counter & Indicators */}
                <div className="flex items-center gap-3">
                  <div className="flex items-baseline gap-1 font-serif select-none">
                    <span className="text-lg font-medium text-[#111111]">
                      {currentProject.number}
                    </span>
                    <span className="text-xs text-[#C5A059] font-light">/</span>
                    <span className="text-xs text-[#888888]">
                      0{projectsData.length}
                    </span>
                  </div>

                  {/* Progress dots */}
                  <div className="flex items-center gap-1.5 ml-2">
                    {projectsData.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        onClick={() => setCurrentIndex(dotIdx)}
                        className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                          currentIndex === dotIdx
                            ? 'w-6 bg-[#C5A059]'
                            : 'w-2 bg-[#E5E5E5] hover:bg-[#C5A059]/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Circular Slider Arrows with Theme Styling */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous Project"
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-[#E5E5E5] hover:border-[#C5A059] bg-white hover:bg-[#111111] text-[#111111] hover:text-[#C5A059] flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer focus:outline-none"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[1.8]" />
                  </button>

                  <button
                    type="button"
                    aria-label="Next Project"
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-[#E5E5E5] hover:border-[#C5A059] bg-white hover:bg-[#111111] text-[#111111] hover:text-[#C5A059] flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer focus:outline-none"
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
        <div className="pt-4 sm:pt-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 sm:gap-6 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#E5E5E5]" />
            <img
              src="/images/orchid-emblem.webp"
              alt="United Orchid Heights"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain opacity-40 hover:opacity-75 transition-opacity duration-300"
            />
            <div className="h-[1px] flex-1 bg-[#E5E5E5]" />
          </div>
        </div>

      </div>
    </section>
  );
}
