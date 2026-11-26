import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Armchair,
  Bed,
  BedDouble,
  Bath,
  UtensilsCrossed,
  Sun,
  Sparkles,
  Footprints,
  DoorClosed,
  Building2,
  Zap,
  Cpu,
  Droplets,
  ArrowUpDown,
  Landmark,
  Plus,
  ShieldCheck
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ─────────────────────────────────────────────────────────────────────────────
// SPECIFICATIONS DATA (All 15 Original Categories from Page 12 of Brochure)
// ─────────────────────────────────────────────────────────────────────────────
const specificationGroups = [
  {
    number: '01',
    title: 'Interior & Finishes',
    items: [
      {
        id: 'living-dining-study',
        category: 'Living / Dining / Study',
        icon: Armchair,
        specs: [
          { label: 'Flooring', value: 'Vitrified Tiles' },
          { label: 'Walls', value: 'Oil-bound distemper / Acrylic emulsion paint' },
          { label: 'Ceiling', value: 'Oil-bound distemper / Acrylic emulsion paint' }
        ]
      },
      {
        id: 'master-bedroom',
        category: 'Master Bedroom',
        icon: Bed,
        specs: [
          { label: 'Flooring', value: 'Vitrified Tiles' },
          { label: 'Walls', value: 'Oil-bound distemper / Acrylic emulsion paint' },
          { label: 'Ceiling', value: 'Oil-bound distemper / Acrylic emulsion paint' }
        ]
      },
      {
        id: 'other-bedrooms',
        category: 'Other Bedrooms',
        icon: BedDouble,
        specs: [
          { label: 'Flooring', value: 'Vitrified Tiles' },
          { label: 'Walls', value: 'Oil-bound distemper / Acrylic emulsion paint' },
          { label: 'Ceiling', value: 'Oil-bound distemper / Acrylic emulsion paint' }
        ]
      },
      {
        id: 'toilets',
        category: 'Master & Other Toilets',
        icon: Bath,
        specs: [
          { label: 'Flooring', value: 'Ceramic tiles (anti-skid)' },
          { label: 'Walls', value: 'Ceramic Tiles' },
          { label: 'Ceiling', value: 'MR Gypsum Board False Ceiling' },
          { label: 'Counter', value: 'Granite' },
          { label: 'Doors', value: 'Hardwood door frame with factory-made skin doors' },
          { label: 'Glazing & Shutters', value: 'uPVC / anodized aluminium glazing and shutters' },
          { label: 'Ledge Wall Coping', value: 'Granite' },
          { label: 'Window Cill', value: 'Granite' },
          { label: 'Sanitary Fixtures', value: 'Jaquar / Kohler or equivalent' }
        ]
      },
      {
        id: 'kitchen',
        category: 'Kitchen',
        icon: UtensilsCrossed,
        specs: [
          { label: 'Flooring', value: 'Vitrified Tiles' },
          { label: 'Walls', value: 'Ceramic tiles' },
          { label: 'Ceiling', value: 'Acrylic Emulsion Paint' },
          { label: 'Counter', value: 'Granite' }
        ]
      }
    ]
  },
  {
    number: '02',
    title: 'Architectural Details',
    items: [
      {
        id: 'balconies-terraces',
        category: 'Balconies & Terraces',
        icon: Sun,
        specs: [
          { label: 'Flooring', value: 'Anti-skid ceramic tiles' },
          { label: 'Walls', value: 'Exterior Grade Paint' },
          { label: 'Ceiling', value: 'Exterior Grade Paint' },
          { label: 'Railing', value: 'SS Railing with Glass' },
          { label: 'Utility Balcony', value: 'MS Railing with Synthetic Enamel Paint' }
        ]
      },
      {
        id: 'servant-utility',
        category: 'Servant / Utility Room',
        icon: Sparkles,
        specs: [
          { description: 'Same as the room.' }
        ]
      },
      {
        id: 'staircase',
        category: 'Staircase',
        icon: Footprints,
        specs: [
          { label: 'Flooring', value: 'Granite / tiles' },
          { label: 'Walls', value: 'OBD over Gypsum Plaster' },
          { label: 'Ceiling', value: 'OBD over Gypsum Plaster' },
          { label: 'Railing', value: 'MS Railing with Synthetic Enamel Paint' }
        ]
      },
      {
        id: 'doors',
        category: 'Doors',
        icon: DoorClosed,
        specs: [
          { description: 'Hardwood door frame with factory-made skin doors.' }
        ]
      },
      {
        id: 'external-facade',
        category: 'External Facade',
        icon: Building2,
        specs: [
          { description: 'External cement-based paint.' }
        ]
      }
    ]
  },
  {
    number: '03',
    title: 'Services & Essentials',
    items: [
      {
        id: 'accessories-specialities',
        category: 'Accessories & Specialities',
        icon: Zap,
        specs: [
          { description: '5KV (3BHK, 3BHK+S)' }
        ]
      },
      {
        id: 'electrical',
        category: 'Electrical',
        icon: Cpu,
        specs: [
          { description: 'ISI-marked switches, sockets, distribution boxes and circuit breakers from established brands.' }
        ]
      },
      {
        id: 'plumbing',
        category: 'Plumbing',
        icon: Droplets,
        specs: [
          { description: 'ISI-marked CPVC water supply pipes with standard valves and fittings, CP fittings by Jaquar or an equivalent brand.' }
        ]
      },
      {
        id: 'lift',
        category: 'Lift',
        icon: ArrowUpDown,
        specs: [
          { description: 'High-speed lift from a reputed brand such as Otis, Schindler, Johnson or an equivalent brand.' }
        ]
      },
      {
        id: 'lobby-common',
        category: 'Lobby / Common Area',
        icon: Landmark,
        specs: [
          { description: 'Granite, tiles and marble.' }
        ]
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ACCORDION ROW COMPONENT WITH SMOOTH HOVER & ACCENT ANIMATIONS
// ─────────────────────────────────────────────────────────────────────────────
function SpecificationItem({ item, isOpen, onToggle }) {
  const Icon = item.icon;

  return (
    <div
      className={`group relative overflow-hidden border transition-all duration-300 rounded-none mb-2 last:mb-0 ${
        isOpen
          ? 'bg-[#FAF5ED] border-[#C5A059]/70 shadow-xs'
          : 'bg-white hover:bg-[#FAF8F4] border-[#E8E1D3] hover:border-[#C5A059]/50'
      }`}
    >
      {/* Left Golden Accent Indicator Line */}
      <span 
        className={`absolute left-0 top-0 bottom-0 w-[3.5px] transition-all duration-300 ease-out z-10 ${
          isOpen 
            ? 'bg-[#C5A059] opacity-100 scale-y-100' 
            : 'bg-[#C5A059] opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100'
        }`} 
      />

      {/* Accordion Header Button */}
      <button
        type="button"
        id={`spec-header-${item.id}`}
        aria-expanded={isOpen}
        aria-controls={`spec-content-${item.id}`}
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between min-h-[50px] px-3.5 sm:px-4 py-2.5 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059]"
      >
        <div className="flex items-center gap-3 min-w-0 pr-2">
          {/* Refined Icon Badge in Architectural Dark Frame */}
          <div className={`w-8 h-8 rounded-none flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen 
              ? 'bg-[#C5A059] text-[#111111] shadow-xs' 
              : 'bg-[#111111] text-[#D4B675] group-hover:bg-[#C5A059] group-hover:text-[#111111]'
          }`}>
            <Icon className="w-4 h-4 stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Category Heading */}
          <span
            className={`text-[14px] sm:text-[14.5px] tracking-tight truncate transition-colors duration-250 ${
              isOpen ? 'text-[#111111] font-semibold' : 'text-[#222222] font-medium group-hover:text-[#111111]'
            }`}
          >
            {item.category}
          </span>
        </div>

        {/* Plus / Minus Smooth Rotation Icon */}
        <div
          className={`w-6 h-6 rounded-none flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? 'text-white bg-[#111111] rotate-45 scale-105 shadow-xs'
              : 'text-[#777777] bg-[#F2EDE4] group-hover:bg-[#C5A059] group-hover:text-[#111111] rotate-0'
          }`}
          aria-hidden="true"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.2]" />
        </div>
      </button>

      {/* Accordion Expandable Content */}
      <div
        id={`spec-content-${item.id}`}
        role="region"
        aria-labelledby={`spec-header-${item.id}`}
        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`transition-all duration-300 ease-out ${
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-1.5 opacity-0'
            } px-4 pb-4 pt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-[#555555] border-t border-[#EAE3D5] space-y-2 bg-[#FAF8F4]/80`}
          >
            {item.specs.map((spec, sIdx) => (
              <div key={sIdx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                <div className="flex-1">
                  {spec.label ? (
                    <>
                      <span className="font-semibold text-[#111111] mr-1.5">
                        {spec.label}:
                      </span>
                      <span className="text-[#444444] font-normal">
                        {spec.value}
                      </span>
                    </>
                  ) : (
                    <span className="text-[#444444] font-normal leading-relaxed">
                      {spec.description}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SPECIFICATION PANEL COMPONENT WITH LUXURY HEADER & HOVER ELEVATION
// ─────────────────────────────────────────────────────────────────────────────
function SpecificationPanel({ group, activeItemId, onToggleItem }) {
  return (
    <div className="gsap-spec-panel group relative bg-white border border-[#E2DAC8] hover:border-[#C5A059] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(197,160,89,0.15)] transition-all duration-400 ease-out rounded-none flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden">
      
      {/* Animated Top Golden Border Accent */}
      <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-20 pointer-events-none" />

      {/* Top Header Section of Panel with Distinct Luxury Band */}
      <div className="p-5 sm:p-6 pb-4 bg-gradient-to-b from-[#FAF8F4] to-white border-b border-[#EAE3D5] relative">
        {/* Top Badges Row */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase px-2.5 py-0.5 bg-[#111111] text-[#D4B675] border border-[#C5A059]/30">
            PART {group.number}
          </span>
          <span className="font-serif font-light text-3xl sm:text-4xl text-[#C5A059] leading-none select-none">
            {group.number}
          </span>
        </div>

        {/* Group Heading */}
        <h3 className="font-serif font-normal text-xl sm:text-[22px] lg:text-[23px] text-[#111111] tracking-tight leading-snug transition-colors duration-300">
          {group.title}
        </h3>

        {/* Short Golden Decorative Underline with Hover Expansion */}
        <div className="h-[2px] w-12 group-hover:w-20 bg-[#C5A059] mt-2.5 transition-all duration-400 ease-out" />
      </div>

      {/* Accordion Rows Container */}
      <div className="p-3 sm:p-4 bg-white/60">
        {group.items.map((item) => (
          <SpecificationItem
            key={item.id}
            item={item}
            isOpen={activeItemId === item.id}
            onToggle={() => onToggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN SPECIFICATIONS SECTION
// ─────────────────────────────────────────────────────────────────────────────
export default function Specifications() {
  const [activeItemId, setActiveItemId] = useState(null);
  const sectionRef = useRef(null);
  const panelsRef = useRef(null);

  // Toggle accordion row (Single item open at any time across all 3 panels)
  const handleToggle = (id) => {
    setActiveItemId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Header elements reveal: pill, heading, line, description
      gsap.fromTo(
        '.gsap-spec-header-el',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 2. Staggered Panel Entrance with subtle scale & smooth float-up
      if (panelsRef.current) {
        gsap.fromTo(
          panelsRef.current.querySelectorAll('.gsap-spec-panel'),
          { y: 35, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.16,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: panelsRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // 3. Bottom Orchid Emblem subtle fade-in
      gsap.fromTo(
        '.gsap-spec-emblem',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.gsap-spec-emblem',
            start: 'top 92%',
            toggleActions: 'play none none none'
          }
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
      id="specifications"
      className="pt-8 pb-5 sm:pt-10 sm:pb-6 lg:pt-12 lg:pb-7 bg-[#F9F7F2] border-b border-[#E8E2D5] relative overflow-hidden"
    >
      {/* Subtle floral watermark in background (~2.5% opacity) */}
      <div
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none select-none opacity-[0.025] z-0"
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
        
        {/* ───────────────────────────────────────────────────────────────── */}
        {/* 1. SECTION HEADER (Centered - matching About & Floor Plans style) */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
          
          {/* Eyebrow Label with Thin Golden Lines */}
          <div className="gsap-spec-header-el inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-1">
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
              QUALITY IN EVERY DETAIL
            </span>
            <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
          </div>

          {/* Main Heading: Matching About Section Heading Font Size & Style */}
          <h2 className="gsap-spec-header-el font-serif font-normal text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-[#111111]">
            Specifications
          </h2>

          {/* Thin Decorative Champagne Gold Line below Heading */}
          <div className="gsap-spec-header-el h-[1.5px] w-14 sm:w-18 bg-[#C5A059] mx-auto mt-2 sm:mt-2.5" />

          {/* Description & Italic Tagline */}
          <p className="gsap-spec-header-el text-sm sm:text-base text-[#555555] font-light leading-relaxed max-w-xl mx-auto">
            Thoughtfully selected materials. Refined finishes.
            <span className="block font-serif italic text-[#C5A059] mt-1 text-sm sm:text-base font-normal">
              Crafted with care, designed to endure.
            </span>
          </p>
        </div>

        {/* ───────────────────────────────────────────────────────────────── */}
        {/* 2. THREE-COLUMN SPECIFICATIONS ACCORDION LAYOUT                   */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div
          ref={panelsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {specificationGroups.map((group) => (
            <SpecificationPanel
              key={group.number}
              group={group}
              activeItemId={activeItemId}
              onToggleItem={handleToggle}
            />
          ))}
        </div>

        {/* ───────────────────────────────────────────────────────────────── */}
        {/* 3. DECORATIVE ORCHID BRANDING AT BOTTOM CENTER                    */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div className="gsap-spec-emblem pt-3.5 sm:pt-4 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 sm:gap-6 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#DCD4C4]" />
            <img
              src="/images/orchid-emblem.webp"
              alt="United Orchid Heights"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain opacity-45 hover:opacity-80 transition-opacity duration-300"
            />
            <div className="h-[1px] flex-1 bg-[#DCD4C4]" />
          </div>
        </div>

      </div>
    </section>
  );
}
