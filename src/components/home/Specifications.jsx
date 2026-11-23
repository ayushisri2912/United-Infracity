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
// ACCORDION ROW COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function SpecificationItem({ item, isOpen, onToggle }) {
  const Icon = item.icon;

  return (
    <div
      className={`border-b border-[#D9C8A7]/70 last:border-b-0 transition-colors duration-300 rounded-none ${
        isOpen ? 'bg-[#EDE3CF]' : 'hover:bg-[#F2ECE1]/70'
      }`}
    >
      {/* Accordion Header Button */}
      <button
        type="button"
        id={`spec-header-${item.id}`}
        aria-expanded={isOpen}
        aria-controls={`spec-content-${item.id}`}
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between min-h-[46px] px-3.5 sm:px-4 py-2.5 group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A59]"
      >
        <div className="flex items-center gap-3 min-w-0 pr-2">
          {/* Outline Icon with subtle slide on hover */}
          <div className="text-[#B99A59] group-hover:text-[#96743B] transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
            <Icon className="w-4 h-4 stroke-[1.65]" />
          </div>

          {/* Category Heading */}
          <span
            className={`text-[15px] sm:text-[15.5px] font-medium tracking-tight truncate transition-colors duration-250 ${
              isOpen ? 'text-[#806435] font-semibold' : 'text-[#806435] group-hover:text-[#B99A59]'
            }`}
          >
            {item.category}
          </span>
        </div>

        {/* Plus / Minus Smooth Rotation Icon */}
        <div
          className={`w-5 h-5 rounded-none flex items-center justify-center shrink-0 transition-all duration-250 ${
            isOpen
              ? 'text-[#806435] rotate-45 scale-110'
              : 'text-[#B99A59] group-hover:text-[#806435] rotate-0 group-hover:scale-110'
          }`}
          aria-hidden="true"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2]" />
        </div>
      </button>

      {/* Accordion Expandable Content (Grid transition for smooth 0 -> auto height) */}
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
            className={`transition-transform duration-300 ease-out ${
              isOpen ? 'translate-y-0' : '-translate-y-1'
            } px-4 pb-3.5 pt-1 text-[13.5px] sm:text-[14px] leading-relaxed text-[#665A49] border-t border-[#D9C8A7]/40 space-y-1`}
          >
            {item.specs.map((spec, sIdx) => (
              <div key={sIdx} className="flex flex-wrap items-baseline gap-x-1.5">
                {spec.label ? (
                  <>
                    <span className="font-medium text-[#29221F] tracking-tight shrink-0">
                      {spec.label}:
                    </span>
                    <span className="text-[#665A49] font-normal">
                      {spec.value}
                    </span>
                  </>
                ) : (
                  <span className="text-[#665A49] font-normal leading-relaxed">
                    {spec.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SPECIFICATION PANEL COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function SpecificationPanel({ group, activeItemId, onToggleItem }) {
  return (
    <div className="gsap-spec-panel group relative bg-[#F9F5ED] border border-[#D9C8A7] hover:border-[#B99A59]/80 transition-all duration-350 rounded-none p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_8px_rgba(185,154,89,0.04)]">
      
      {/* Top Header Section of Panel */}
      <div className="relative mb-4">
        {/* Large Faded Golden Decorative Numbering (38-42px) */}
        <div
          className="absolute -top-3.5 right-0 font-serif font-bold text-3xl sm:text-[38px] lg:text-[40px] text-[#CDB789] opacity-35 group-hover:opacity-65 group-hover:text-[#B99A59] transition-all duration-350 select-none pointer-events-none leading-none"
          aria-hidden="true"
        >
          {group.number}
        </div>

        {/* Group Heading (23-26px, font-serif) */}
        <h3 className="font-serif font-medium text-xl sm:text-[23px] lg:text-[24px] text-[#96743B] tracking-tight leading-snug pr-12">
          {group.title}
        </h3>

        {/* Short Golden Decorative Underline */}
        <div className="h-[1.5px] w-12 bg-[#B99A59]/70 mt-2 mb-1" />
      </div>

      {/* Accordion Rows (Square corners, border-radius: 0px) */}
      <div className="border border-[#D9C8A7]/70 divide-y divide-transparent bg-white/40">
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
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 2. Staggered Panel Entrance: Panel 01 -> Panel 02 -> Panel 03
      // Initial opacity: 0, translateY: 40px -> Final opacity: 1, translateY: 0
      // Duration: 0.9s, Stagger delay: 0.18s, Easing: power3.out
      if (panelsRef.current) {
        gsap.fromTo(
          panelsRef.current.querySelectorAll('.gsap-spec-panel'),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.18,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: panelsRef.current,
              start: 'top 85%',
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
      className="pt-5 pb-5 sm:pt-6 sm:pb-6 lg:pt-8 lg:pb-6 bg-[#F6F0E6] border-b border-[#B99A59]/20 relative overflow-hidden"
    >
      {/* Subtle floral watermark in background (~3% opacity) */}
      <div
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none select-none opacity-[0.03] z-0"
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
        {/* 1. SECTION HEADER (Centered - matching Floor Plans styling)       */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-2.5">
          
          {/* Eyebrow Pill Badge */}
          <div className="gsap-spec-header-el inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B99A59]/10 border border-[#B99A59]/25 text-[#A68A4E]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B99A59]" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              QUALITY IN EVERY DETAIL
            </span>
          </div>

          {/* Main Heading (~56-60px desktop, font-serif, regular/medium weight) */}
          <h2 className="gsap-spec-header-el font-serif font-medium text-3xl sm:text-5xl lg:text-[58px] leading-[1.08] tracking-tight text-[#29221F]">
            Specifications
          </h2>

          {/* Thin Decorative Champagne Gold Line below Heading */}
          <div className="gsap-spec-header-el h-[1.5px] w-20 sm:w-28 bg-[#B99A59]/60 mx-auto my-2.5 sm:my-3.5" />

          {/* Description & Italic Tagline */}
          <p className="gsap-spec-header-el text-sm sm:text-base lg:text-lg text-[#665A49] font-light leading-relaxed max-w-xl mx-auto">
            Thoughtfully selected materials. Refined finishes.
            <span className="block italic text-[#806435] mt-1 text-sm sm:text-base">
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
        <div className="gsap-spec-emblem pt-5 sm:pt-6 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 sm:gap-6 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-[#D9C8A7]" />
            <img
              src="/images/orchid-emblem.webp"
              alt="United Orchid Heights"
              className="w-9 sm:w-10 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="h-[1px] flex-1 bg-[#D9C8A7]" />
          </div>
        </div>

      </div>
    </section>
  );
}
