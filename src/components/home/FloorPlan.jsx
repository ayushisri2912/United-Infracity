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
  Layers
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
    mainImage: '/images/floor-plan/floor1.png',
    description: 'Comprehensive architectural master layout for the 1st floor featuring dedicated podium access and residential clusters.',
    subPlans: [
      { id: 'ff-master', name: 'First Floor Master Plan', type: 'Master Layout', image: '/images/floor-plan/floor1.png' },
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
    mainImage: '/images/floor-plan/typical1.png',
    description: 'Signature architectural cluster layout across tower storeys 2 through 15 with optimal natural light and cross-ventilation.',
    subPlans: [
      { id: 'typ-master', name: 'Typical 2–15th Master Plan', type: 'Master Layout', image: '/images/floor-plan/typical1.png' },
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeParentIndex, setActiveParentIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const currentParentPlan = floorPlansData[activeParentIndex];
  const currentSubPlan = currentParentPlan.subPlans[activeSubIndex] || currentParentPlan.subPlans[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-fp-header',
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', clearProps: 'all',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', toggleActions: 'play none none none' }
        }
      );

      if (galleryRef.current) {
        gsap.fromTo(
          galleryRef.current.querySelectorAll('.gsap-fp-card'),
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', clearProps: 'all',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 92%', toggleActions: 'play none none none' }
          }
        );
      }
    }, sectionRef);

    const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

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

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.35, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.35, 0.75));
  const handleZoomReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || zoom <= 1) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (zoom <= 1 || e.touches.length !== 1) return;
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || zoom <= 1 || e.touches.length !== 1) return;
    setPan({ x: e.touches[0].clientX - dragStart.x, y: e.touches[0].clientY - dragStart.y });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleNext = () => {
    const totalSub = currentParentPlan.subPlans.length;
    if (activeSubIndex < totalSub - 1) {
      setActiveSubIndex(activeSubIndex + 1);
    } else {
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
      const prevParent = activeParentIndex === 0 ? floorPlansData.length - 1 : activeParentIndex - 1;
      setActiveParentIndex(prevParent);
      setActiveSubIndex(floorPlansData[prevParent].subPlans.length - 1);
    }
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <section ref={sectionRef} id="floor-plans" className="pt-4 sm:pt-5 lg:pt-6 pb-3 sm:pb-4 lg:pb-5 bg-white border-b border-[#E5E5E5] relative overflow-hidden">
      
      <div className="absolute right-[-40px] top-1/3 w-80 h-80 pointer-events-none select-none opacity-[0.025] z-0" aria-hidden="true">
        <img src="/images/orchid-emblem.webp" alt="" className="w-full h-full object-contain filter contrast-125" />
      </div>

      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-7 space-y-1.5 sm:space-y-2">
          {/* Eyebrow with Thin Golden Lines */}
          <div className="gsap-fp-header inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-1">
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
              THOUGHTFULLY PLANNED
            </span>
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
          </div>

          {/* Heading: Matching About Section Heading Font Size & Style */}
          <h2 className="gsap-fp-header font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-[#111111]">
            Floor Plans
          </h2>

          {/* Thin Decorative Champagne Gold Line */}
          <div className="gsap-fp-header h-[1.5px] w-14 sm:w-18 bg-[#C5A059] mx-auto mt-2 sm:mt-2.5" />

          {/* Subtitle */}
          <p className="gsap-fp-header text-sm sm:text-base text-[#555555] font-light leading-relaxed max-w-xl mx-auto">
            Explore thoughtfully designed layouts that bring space, light and comfort together.
          </p>
        </div>

        <div ref={galleryRef} className="space-y-6 sm:space-y-8 lg:space-y-10 w-full">
          
          {/* Top Row: Two Main Floor Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
            {floorPlansData.map((plan, idx) => (
              <div
                key={plan.id}
                onClick={() => openModal(idx, 0)}
                className="gsap-fp-card relative group cursor-pointer transition-all duration-400 ease-out bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#C5A059] shadow-xs hover:shadow-[0_12px_36px_rgba(197,160,89,0.14)] flex flex-col overflow-hidden hover:-translate-y-1"
              >
                {/* Animated Top Golden Accent Line */}
                <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-20 pointer-events-none" />

                <div className="relative overflow-hidden w-full h-[230px] sm:h-[290px] bg-white flex items-center justify-center">
                  <img
                    src={plan.mainImage}
                    alt={plan.title}
                    className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110 select-none"
                    loading="eager"
                  />
                  
                  {/* Subtle Dark Gradient Overlay that Lightens on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/25 group-hover:from-black/55 group-hover:via-black/25 group-hover:to-transparent transition-all duration-500 flex flex-col items-center justify-center p-4 text-center z-10">
                    <div className="flex flex-col items-center justify-center space-y-2.5 transition-all duration-400 group-hover:scale-105">
                      
                      {/* Floating Gold Eye Action Badge */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-lg border border-white/30 transition-all duration-300 group-hover:bg-white group-hover:text-[#111111] group-hover:scale-110">
                        <Eye className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-medium text-xl sm:text-2xl text-white tracking-tight drop-shadow-md">
                        {plan.title}
                      </h3>

                      {/* Tag Badge */}
                      <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#D4B675] bg-[#111111]/90 backdrop-blur-xs px-3.5 py-1 border border-[#C5A059]/40 shadow-xs">
                        {plan.tag}
                      </span>
                    </div>

                    {/* Bottom Right Floating Micro-Pill */}
                    <div className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-wider uppercase text-white/90 bg-black/65 backdrop-blur-xs px-2.5 py-1 border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <span>Click to View Plan ↗</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Featured Units */}
          <div className="pt-4 sm:pt-6">
            <div className="flex items-center gap-3 pb-4 sm:pb-5">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
                Featured Apartment Configurations
              </span>
              <div className="h-[1px] flex-1 bg-[#E5E5E5]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
              {featuredUnitPlans.map((unit) => (
                <div
                  key={unit.id}
                  onClick={() => openModal(unit.parentIndex, unit.subIndex)}
                  className="gsap-fp-card relative group cursor-pointer transition-all duration-400 ease-out bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#C5A059] shadow-xs hover:shadow-[0_8px_28px_rgba(197,160,89,0.12)] flex flex-col overflow-hidden hover:-translate-y-1"
                >
                  {/* Top Golden Accent Line */}
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-left z-20 pointer-events-none" />

                  <div className="relative overflow-hidden w-full h-[180px] sm:h-[220px] bg-white flex items-center justify-center">
                    <img
                      src={unit.image}
                      alt={unit.title}
                      className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110 select-none"
                      loading="eager"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-transparent transition-all duration-500 flex flex-col items-center justify-center p-3 text-center z-10">
                      <div className="flex flex-col items-center justify-center space-y-2 transition-all duration-400 group-hover:scale-105">
                        
                        <div className="w-8.5 h-8.5 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-md border border-white/25 transition-all duration-300 group-hover:bg-white group-hover:text-[#111111] group-hover:scale-110">
                          <Eye className="w-4 h-4 stroke-[1.8]" />
                        </div>

                        <h4 className="font-serif font-medium text-base sm:text-lg text-white tracking-tight drop-shadow-sm">
                          {unit.title}
                        </h4>

                        <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-[#D4B675] bg-[#111111]/90 backdrop-blur-xs px-2.5 py-0.5 border border-[#C5A059]/40 shadow-xs">
                          {unit.floorCategory}
                        </span>
                      </div>

                      {/* Micro Pill */}
                      <div className="absolute bottom-2.5 right-2.5 text-[9px] font-semibold tracking-wider uppercase text-white/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span>View ↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-4 sm:pt-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#E5E5E5]" />
            <img src="/images/orchid-emblem.webp" alt="United Orchid Heights" className="w-8 h-8 sm:w-9 sm:h-9 object-contain opacity-40 hover:opacity-75 transition-opacity duration-300" />
            <div className="h-[1px] flex-1 bg-[#E5E5E5]" />
          </div>
        </div>

      </div>

      {/* Modal (Waisa hi hai) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#151515]/95 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 select-none animate-fadeIn"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[94vh] bg-white border border-[#E5E5E5] flex flex-col overflow-hidden shadow-2xl rounded-none">
            
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#F8F8F8] border-b border-[#E5E5E5] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 shrink-0">
                  <Layers className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#151515] tracking-tight leading-snug truncate">
                    {currentSubPlan.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-[#666666] font-medium">
                    <span>{currentParentPlan.title}</span>
                    <span>•</span>
                    <span className="text-[#C5A059] font-semibold uppercase tracking-wider">{currentSubPlan.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button onClick={handleZoomOut} title="Zoom Out (-)" className="p-2 bg-white hover:bg-[#C5A059] text-[#151515] hover:text-white border border-[#E5E5E5] hover:border-[#C5A059] transition-colors cursor-pointer" disabled={zoom <= 0.75}>
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button onClick={handleZoomReset} title="Reset Zoom (100%)" className="px-2.5 py-1.5 sm:py-2 bg-white hover:bg-[#C5A059] text-[#151515] hover:text-white border border-[#E5E5E5] hover:border-[#C5A059] text-xs font-semibold transition-colors cursor-pointer hidden sm:flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{Math.round(zoom * 100)}%</span>
                </button>
                <button onClick={handleZoomIn} title="Zoom In (+)" className="p-2 bg-white hover:bg-[#C5A059] text-[#151515] hover:text-white border border-[#E5E5E5] hover:border-[#C5A059] transition-colors cursor-pointer" disabled={zoom >= 3}>
                  <ZoomIn className="w-4 h-4" />
                </button>
                <a href={currentSubPlan.image} download={`${currentSubPlan.name.replace(/\s+/g, '-').toLowerCase()}.webp`} title="Download Floor Plan" className="p-2 sm:px-3 sm:py-2 bg-[#C5A059] hover:bg-[#A38131] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm ml-1">
                  <Download className="w-4 h-4" />
                  <span className="hidden md:inline">Download</span>
                </a>
                <button onClick={closeModal} aria-label="Close modal" title="Close (Esc)" className="p-2 bg-white hover:bg-rose-500 text-[#151515] hover:text-white border border-[#E5E5E5] hover:border-rose-500 transition-colors cursor-pointer ml-1">
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            <div className="px-4 sm:px-6 py-2.5 bg-white border-b border-[#E5E5E5] flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C5A059] shrink-0 mr-1 hidden sm:inline">Associated Units:</span>
              {currentParentPlan.subPlans.map((sub, idx) => {
                const isActive = activeSubIndex === idx;
                return (
                  <button key={sub.id} onClick={() => { setActiveSubIndex(idx); setZoom(1); setPan({ x: 0, y: 0 }); }} className={`px-3 py-1 text-xs font-medium whitespace-nowrap transition-all cursor-pointer border ${isActive ? 'bg-[#151515] text-white border-[#151515] shadow-sm' : 'bg-white text-[#666666] border-[#E5E5E5] hover:border-[#C5A059]/60 hover:bg-[#F8F8F8]'}`}>
                    {sub.name}
                  </button>
                );
              })}
            </div>

            <div className={`relative flex-1 w-full h-full overflow-hidden bg-[#F8F8F8] flex items-center justify-center ${zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'}`} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <div className="w-full h-full flex items-center justify-center p-4 sm:p-8" style={{ transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`, transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)' }}>
                <img src={currentSubPlan.image} alt={currentSubPlan.name} className="max-w-full max-h-full object-contain pointer-events-none select-none drop-shadow-sm" />
              </div>

              <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} aria-label="Previous Floor Plan" className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#C5A059] text-[#151515] hover:text-white border border-[#E5E5E5] shadow-md flex items-center justify-center transition-all cursor-pointer z-20">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); handleNext(); }} aria-label="Next Floor Plan" className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#C5A059] text-[#151515] hover:text-white border border-[#E5E5E5] shadow-md flex items-center justify-center transition-all cursor-pointer z-20">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium tracking-wide rounded-full pointer-events-none z-10 hidden sm:block">
                <span>{zoom > 1 ? 'Drag to pan around plan' : 'Click + to zoom • Drag to navigate • Esc to close'}</span>
              </div>
            </div>

            <div className="px-4 sm:px-6 py-3 bg-[#F8F8F8] border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#666666]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#C5A059]">Plan {activeSubIndex + 1} of {currentParentPlan.subPlans.length}</span>
                <span className="hidden sm:inline text-stone-300">•</span>
                <span className="hidden sm:inline font-light italic">{currentParentPlan.description}</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C5A059] mr-1 hidden sm:inline">Switch Level:</span>
                {floorPlansData.map((p, idx) => (
                  <button key={p.id} onClick={() => { setActiveParentIndex(idx); setActiveSubIndex(0); setZoom(1); setPan({ x: 0, y: 0 }); }} className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider cursor-pointer border transition-colors ${activeParentIndex === idx ? 'bg-[#151515] text-white border-[#151515]' : 'bg-white text-[#666666] border-[#E5E5E5] hover:border-[#C5A059]'}`}>
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