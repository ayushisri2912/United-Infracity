import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Eye, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Download, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Compass,
  Layers,
  Maximize2
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Complete Floor Plans Data from public/images/floor-plan
const floorPlansData = [
  {
    id: 'first-floor',
    title: 'First Floor Plan',
    category: 'Master Floor Plan',
    tag: 'Levels: 1st Floor',
    mainImage: '/images/floor-plan/first-floor-plan.webp',
    description: 'Comprehensive architectural master layout for the 1st floor featuring dedicated podium access and residential clusters.',
    subPlans: [
      { id: 'ff-master', name: 'First Floor Master Plan', type: 'Master Layout', image: '/images/floor-plan/first-floor-plan.webp' },
      { id: 'ff-2bhk', name: '2 BHK Residence', type: '2 BHK Unit Plan', image: '/images/floor-plan/first-floor-2bhk.webp' },
      { id: 'ff-3bhk-1', name: '3 BHK (Type 1)', type: '3 BHK Unit Plan', image: '/images/floor-plan/first-floor-3bhk-type-1.webp' },
      { id: 'ff-3bhk-2', name: '3 BHK (Type 2)', type: '3 BHK Unit Plan', image: '/images/floor-plan/first-floor-3bhk-type-2.webp' },
      { id: 'ff-3bhk-3', name: '3 BHK (Type 3)', type: '3 BHK Unit Plan', image: '/images/floor-plan/first-floor-3bhk-type-3.webp' },
      { id: 'ff-study-in', name: 'Study Unit (Inside View)', type: 'Study Unit Plan', image: '/images/floor-plan/first-floor-study-inside.webp' },
      { id: 'ff-study-out', name: 'Study Unit (Outside View)', type: 'Study Unit Plan', image: '/images/floor-plan/first-floor-study-outside.webp' },
    ]
  },
  {
    id: 'typical-floor',
    title: 'Typical 2–15th Floor Plan',
    category: 'Master Floor Plan',
    tag: 'Levels: 2nd to 15th Floors',
    mainImage: '/images/floor-plan/typical-2-15-floor-plan.webp',
    description: 'Signature architectural cluster layout across tower storeys 2 through 15 with optimal natural light and cross-ventilation.',
    subPlans: [
      { id: 'typ-master', name: 'Typical 2–15th Master Plan', type: 'Master Layout', image: '/images/floor-plan/typical-2-15-floor-plan.webp' },
      { id: 'typ-3bhk-1', name: '3 BHK (Type 1)', type: '3 BHK Unit Plan', image: '/images/floor-plan/typical-3bhk-type-1.webp' },
      { id: 'typ-3bhk-2', name: '3 BHK (Type 2)', type: '3 BHK Unit Plan', image: '/images/floor-plan/typical-3bhk-type-2.webp' },
      { id: 'typ-3bhk-3', name: '3 BHK (Type 3)', type: '3 BHK Unit Plan', image: '/images/floor-plan/typical-3bhk-type-3.webp' },
      { id: 'typ-3bhk-4', name: '3 BHK (Type 4)', type: '3 BHK Unit Plan', image: '/images/floor-plan/typical-3bhk-type-4.webp' },
      { id: 'typ-study-in', name: 'Study Unit (Inside View)', type: 'Study Unit Plan', image: '/images/floor-plan/typical-study-inside.webp' },
      { id: 'typ-study-out', name: 'Study Unit (Outside View)', type: 'Study Unit Plan', image: '/images/floor-plan/typical-study-outside.webp' },
    ]
  }
];

// Featured individual unit configurations displayed in the compact gallery row
const featuredUnitPlans = [
  {
    id: 'unit-typ-3bhk-1',
    title: '3 BHK (Type 1)',
    floorCategory: 'Typical 2–15th Floor',
    parentIndex: 1,
    subIndex: 1,
    image: '/images/floor-plan/typical-3bhk-type-1.webp'
  },
  {
    id: 'unit-typ-3bhk-2',
    title: '3 BHK (Type 2)',
    floorCategory: 'Typical 2–15th Floor',
    parentIndex: 1,
    subIndex: 2,
    image: '/images/floor-plan/typical-3bhk-type-2.webp'
  },
  {
    id: 'unit-typ-3bhk-3',
    title: '3 BHK (Type 3)',
    floorCategory: 'Typical 2–15th Floor',
    parentIndex: 1,
    subIndex: 3,
    image: '/images/floor-plan/typical-3bhk-type-3.webp'
  },
  {
    id: 'unit-ff-2bhk',
    title: '2 BHK Residence',
    floorCategory: 'First Floor',
    parentIndex: 0,
    subIndex: 1,
    image: '/images/floor-plan/first-floor-2bhk.webp'
  }
];

export default function FloorPlan() {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeParentIndex, setActiveParentIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  // Zoom & Pan State
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const currentParentPlan = floorPlansData[activeParentIndex];
  const currentSubPlan = currentParentPlan.subPlans[activeSubIndex] || currentParentPlan.subPlans[0];

  // GSAP Entrance ScrollTrigger Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header elements reveal
      gsap.fromTo(
        '.gsap-fp-header',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Gallery cards staggered reveal
      if (galleryRef.current) {
        gsap.fromTo(
          galleryRef.current.querySelectorAll('.gsap-fp-card'),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 92%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    // Refresh triggers to ensure correct scroll offsets
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ctx.revert();
    };
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Keyboard navigation & escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, activeParentIndex, activeSubIndex]);

  // Modal open helper
  const openModal = (parentIdx, subIdx = 0) => {
    setActiveParentIndex(parentIdx);
    setActiveSubIndex(subIdx);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Zoom helpers
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.35, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.35, 0.75));
  const handleZoomReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Drag / Pan handlers
  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || zoom <= 1) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch Drag for Mobile
  const handleTouchStart = (e) => {
    if (zoom <= 1 || e.touches.length !== 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].clientX - pan.x,
      y: e.touches[0].clientY - pan.y
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || zoom <= 1 || e.touches.length !== 1) return;
    setPan({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Next / Previous Navigation
  const handleNext = () => {
    const totalSub = currentParentPlan.subPlans.length;
    if (activeSubIndex < totalSub - 1) {
      setActiveSubIndex(activeSubIndex + 1);
    } else {
      // Switch to next parent plan
      const nextParent = (activeParentIndex + 1) % floorPlansData.length;
      setActiveParentIndex(nextParent);
      setActiveSubIndex(0);
    }
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    if (activeSubIndex > 0) {
      setActiveSubIndex(activeSubIndex - 1);
    } else {
      // Switch to previous parent plan
      const prevParent = activeParentIndex === 0 ? floorPlansData.length - 1 : activeParentIndex - 1;
      setActiveParentIndex(prevParent);
      setActiveSubIndex(floorPlansData[prevParent].subPlans.length - 1);
    }
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      id="floor-plans"
      className="pt-3 pb-4 sm:pt-4 sm:pb-6 lg:pt-4 lg:pb-6 bg-[#F6F0E6] border-b border-[#B99A59]/20 relative overflow-hidden"
    >
      {/* Subtle Background Watermark Emblem */}
      <div 
        className="absolute right-[-40px] top-1/3 w-80 h-80 pointer-events-none select-none opacity-[0.035] z-0"
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
        
        {/* 1. Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5 space-y-1.5 sm:space-y-2">
          {/* Eyebrow Pill Badge */}
          <div className="gsap-fp-header inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B99A59]/10 border border-[#B99A59]/25 text-[#A68A4E]">
            <Compass className="w-3.5 h-3.5 text-[#B99A59]" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              THOUGHTFULLY PLANNED
            </span>
          </div>

          {/* Main Heading (~56-60px desktop, font-serif, regular weight) */}
          <h2 className="gsap-fp-header font-serif font-medium text-3xl sm:text-5xl lg:text-[58px] leading-[1.08] tracking-tight text-[#29221F]">
            Floor Plans
          </h2>

          {/* Thin Decorative Champagne Gold Line below Heading */}
          <div className="gsap-fp-header h-[1.5px] w-20 sm:w-28 bg-[#B99A59]/60 mx-auto my-2.5 sm:my-3.5" />

          {/* Description */}
          <p className="gsap-fp-header text-sm sm:text-base lg:text-lg text-[#665A49] font-light leading-relaxed max-w-xl mx-auto">
            Explore thoughtfully designed layouts that bring space, light and comfort together.
          </p>
        </div>

        {/* 2. Floor Plan Image Gallery (Inspired by Pristine Tower layout) */}
        <div ref={galleryRef} className="space-y-6 sm:space-y-7 lg:space-y-8 w-full">
          
          {/* Top Row: Two Main Floor Plans in Two Equal-Width Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 w-full">
            {floorPlansData.map((plan, idx) => (
              <div
                key={plan.id}
                onClick={() => openModal(idx, 0)}
                className="gsap-fp-card relative group cursor-pointer transition-all duration-500 rounded-none bg-white/70 p-2.5 sm:p-3 border border-[#B99A59]/40 hover:border-[#B99A59] shadow-xs hover:shadow-md"
              >
                {/* Thin Inner Double Golden Frame */}
                <div className="relative overflow-hidden w-full h-[300px] sm:h-[340px] bg-[#FAF7F2] border border-[#D9C8A7]/70 flex items-center justify-center rounded-none">
                  
                  {/* Floor Plan Architectural Drawing */}
                  <img
                    src={plan.mainImage}
                    alt={plan.title}
                    className="w-full h-full object-contain p-4 sm:p-6 transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                    loading="eager"
                  />

                  {/* Warm Dark Image Overlay (~35-45% opacity) */}
                  <div className="absolute inset-0 bg-[#32281B]/40 group-hover:bg-[#32281B]/15 transition-all duration-500 flex flex-col items-center justify-center p-4 text-center z-10">
                    
                    {/* Centered Circular Gold Eye Badge & Label */}
                    <div className="flex flex-col items-center justify-center space-y-2.5 transition-all duration-500 group-hover:scale-105">
                      <div className="w-12 h-12 rounded-full bg-[#B99A59] text-white flex items-center justify-center shadow-md border border-white/30 group-hover:bg-[#A68A4E] transition-colors">
                        <Eye className="w-5 h-5" />
                      </div>
                      
                      {/* Floor Plan Title (White Serif) */}
                      <h3 className="font-serif font-medium text-2xl sm:text-3xl text-white tracking-tight drop-shadow-md">
                        {plan.title}
                      </h3>

                      {/* Tag / Category */}
                      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90 bg-[#B99A59]/40 px-3 py-0.5 border border-white/20 backdrop-blur-xs">
                        {plan.tag}
                      </span>

                      {/* Minimal "View Floor Plan" prompt revealed on hover */}
                      <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1">
                        View Floor Plan →
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Additional Apartment Previews (4 Responsive Columns) */}
          <div className="pt-2">
            <div className="flex items-center gap-3 pb-3 sm:pb-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A68A4E]">
                Featured Apartment Configurations
              </span>
              <div className="h-[1px] flex-1 bg-[#B99A59]/25" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
              {featuredUnitPlans.map((unit) => (
                <div
                  key={unit.id}
                  onClick={() => openModal(unit.parentIndex, unit.subIndex)}
                  className="gsap-fp-card relative group cursor-pointer transition-all duration-500 rounded-none bg-white/70 p-2 sm:p-2.5 border border-[#B99A59]/35 hover:border-[#B99A59] shadow-2xs hover:shadow-sm"
                >
                  <div className="relative overflow-hidden w-full h-[220px] sm:h-[240px] bg-[#FAF7F2] border border-[#D9C8A7]/60 flex items-center justify-center rounded-none">
                    <img
                      src={unit.image}
                      alt={unit.title}
                      className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                      loading="eager"
                    />

                    {/* Warm Dark Overlay */}
                    <div className="absolute inset-0 bg-[#32281B]/40 group-hover:bg-[#32281B]/15 transition-all duration-500 flex flex-col items-center justify-center p-3 text-center z-10">
                      <div className="flex flex-col items-center justify-center space-y-1.5 transition-all duration-500 group-hover:scale-105">
                        <div className="w-9 h-9 rounded-full bg-[#B99A59] text-white flex items-center justify-center shadow-xs border border-white/20">
                          <Eye className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif font-medium text-lg sm:text-xl text-white tracking-tight drop-shadow-sm">
                          {unit.title}
                        </h4>
                        <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/90 bg-[#B99A59]/40 px-2 py-0.5 border border-white/20">
                          {unit.floorCategory}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section Bottom Orchid Crest */}
        <div className="pt-4 sm:pt-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#B99A59]/30" />
            <img
              src="/images/orchid-emblem.webp"
              alt="United Orchid Heights"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-40 hover:opacity-80 transition-opacity duration-300"
            />
            <div className="h-[1px] flex-1 bg-[#B99A59]/30" />
          </div>
        </div>

      </div>

      {/* ──────────────────────────────────────────────────────────────
          3. FULLSCREEN INTERACTIVE FLOOR PLAN MODAL
         ────────────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#1C1C1A]/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 select-none animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* Modal Card Window */}
          <div className="relative w-full h-full max-w-7xl max-h-[94vh] bg-[#FFFDF8] border border-[#B99A59]/40 flex flex-col overflow-hidden shadow-2xl rounded-none">
            
            {/* Modal Top Bar */}
            <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-[#F6F0E6] border-b border-[#B99A59]/30 flex items-center justify-between gap-4">
              
              {/* Title & Category Badge */}
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#B99A59]/15 text-[#A68A4E] border border-[#B99A59]/30 shrink-0">
                  <Layers className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-2xl text-[#29221F] tracking-tight leading-snug truncate">
                    {currentSubPlan.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-[#665A49]/80 font-medium">
                    <span>{currentParentPlan.title}</span>
                    <span>•</span>
                    <span className="text-[#A68A4E] font-semibold uppercase tracking-wider">{currentSubPlan.type}</span>
                  </div>
                </div>
              </div>

              {/* Top Controls Toolbar */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                
                {/* Zoom Out */}
                <button
                  onClick={handleZoomOut}
                  title="Zoom Out (-)"
                  className="p-2 sm:px-2.5 sm:py-2 bg-white hover:bg-[#B99A59] text-[#665A49] hover:text-white border border-[#DFD1B7] hover:border-[#B99A59] transition-colors rounded-none cursor-pointer"
                  disabled={zoom <= 0.75}
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                {/* Reset Zoom */}
                <button
                  onClick={handleZoomReset}
                  title="Reset Zoom (100%)"
                  className="px-2.5 py-1.5 sm:py-2 bg-white hover:bg-[#B99A59] text-[#665A49] hover:text-white border border-[#DFD1B7] hover:border-[#B99A59] text-xs font-semibold transition-colors rounded-none cursor-pointer hidden sm:flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{Math.round(zoom * 100)}%</span>
                </button>

                {/* Zoom In */}
                <button
                  onClick={handleZoomIn}
                  title="Zoom In (+)"
                  className="p-2 sm:px-2.5 sm:py-2 bg-white hover:bg-[#B99A59] text-[#665A49] hover:text-white border border-[#DFD1B7] hover:border-[#B99A59] transition-colors rounded-none cursor-pointer"
                  disabled={zoom >= 3}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {/* Download Button */}
                <a
                  href={currentSubPlan.image}
                  download={`${currentSubPlan.name.replace(/\s+/g, '-').toLowerCase()}.webp`}
                  title="Download Floor Plan"
                  className="p-2 sm:px-3 sm:py-2 bg-[#B99A59] hover:bg-[#A38131] text-white font-medium text-xs uppercase tracking-wider transition-colors rounded-none flex items-center gap-1.5 cursor-pointer shadow-xs ml-1"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden md:inline">Download</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  title="Close (Esc)"
                  className="p-2 sm:p-2 bg-white hover:bg-rose-500 text-[#665A49] hover:text-white border border-[#DFD1B7] hover:border-rose-500 transition-colors rounded-none cursor-pointer ml-1"
                >
                  <X className="w-4.5 h-4.5" />
                </button>

              </div>

            </div>

            {/* Sub-Unit Navigation Pills Bar (Access to corresponding individual apartment plans) */}
            <div className="px-4 sm:px-6 py-2.5 bg-[#FAF7F2] border-b border-[#B99A59]/20 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#A68A4E] shrink-0 mr-1 hidden sm:inline">
                Associated Units:
              </span>
              {currentParentPlan.subPlans.map((sub, idx) => {
                const isActive = activeSubIndex === idx;
                return (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setActiveSubIndex(idx);
                      setZoom(1);
                      setPan({ x: 0, y: 0 });
                    }}
                    className={`px-3 py-1 text-xs font-medium whitespace-nowrap rounded-none transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#B99A59] text-white border-[#B99A59] shadow-xs'
                        : 'bg-white text-[#665A49] border-[#DFD1B7] hover:border-[#B99A59]/60 hover:bg-white/90'
                    }`}
                  >
                    {sub.name}
                  </button>
                );
              })}
            </div>

            {/* Modal Interactive Canvas (Uncropped object-contain with Zoom & Pan) */}
            <div
              className={`relative flex-1 w-full h-full overflow-hidden bg-[#FAF7F2] flex items-center justify-center ${
                zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
              }`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Floor Plan Architectural Drawing */}
              <div
                className="w-full h-full flex items-center justify-center p-4 sm:p-8"
                style={{
                  transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
                }}
              >
                <img
                  src={currentSubPlan.image}
                  alt={currentSubPlan.name}
                  className="max-w-full max-h-full object-contain pointer-events-none select-none drop-shadow-sm"
                />
              </div>

              {/* Left / Prev Arrow Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous Floor Plan"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#B99A59] text-[#665A49] hover:text-white border border-[#B99A59]/40 shadow-md flex items-center justify-center transition-all cursor-pointer z-20"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Right / Next Arrow Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next Floor Plan"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#B99A59] text-[#665A49] hover:text-white border border-[#B99A59]/40 shadow-md flex items-center justify-center transition-all cursor-pointer z-20"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Floating Instructions Helper on Bottom Center */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium tracking-wide rounded-full pointer-events-none z-10 hidden sm:block">
                <span>{zoom > 1 ? 'Drag to pan around plan' : 'Click + to zoom • Drag to navigate • Esc to close'}</span>
              </div>

            </div>

            {/* Modal Bottom Status Bar */}
            <div className="px-4 sm:px-6 py-2.5 bg-[#F6F0E6] border-t border-[#B99A59]/30 flex items-center justify-between text-xs text-[#665A49]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#A68A4E]">
                  Plan {activeSubIndex + 1} of {currentParentPlan.subPlans.length}
                </span>
                <span className="hidden sm:inline text-stone-400">•</span>
                <span className="hidden sm:inline font-light italic">
                  {currentParentPlan.description}
                </span>
              </div>

              {/* Parent Floor Plan Switcher */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A68A4E] mr-1 hidden sm:inline">
                  Switch Level:
                </span>
                {floorPlansData.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActiveParentIndex(idx);
                      setActiveSubIndex(0);
                      setZoom(1);
                      setPan({ x: 0, y: 0 });
                    }}
                    className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-none cursor-pointer border transition-colors ${
                      activeParentIndex === idx
                        ? 'bg-[#29221F] text-white border-[#29221F]'
                        : 'bg-white text-[#665A49] border-[#DFD1B7] hover:border-[#B99A59]'
                    }`}
                  >
                    {idx === 0 ? '1st Floor' : '2–15th Floors'}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
