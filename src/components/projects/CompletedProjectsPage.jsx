import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Award,
  CheckCircle2,
  MapPin,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowUpRight,
  Hotel,
  GraduationCap,
  Factory
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CompletedProjectsPage({ onOpenEnquire, onNavigateHome }) {
  const pageRef = useRef(null);

  // Real statistics based on authentic Awasthi Group & United Infracity brochure data
  const statsData = [
    {
      target: 40,
      suffix: '+',
      label: 'Years of Group Legacy',
      sub: 'Founded in 1980s'
    },
    {
      target: 192,
      suffix: '',
      label: 'Luxury Hotel Rooms',
      sub: 'Holiday Inn under IHG'
    },
    {
      target: 50,
      suffix: ',000+',
      label: 'Sq. Ft. Banqueting & Lawns',
      sub: 'Operational Hospitality Area'
    },
    {
      target: 7,
      suffix: '+ Acres',
      label: 'Educational Campus',
      sub: 'Seth M.R. Jaipuria School'
    }
  ];

  // Authentic completed projects from the Home page & brochure
  const completedProjects = [
    {
      id: 401,
      title: 'Holiday Inn (under IHG)',
      subtitle: '5-Star Luxury Hotel',
      category: 'Hospitality Division',
      icon: Hotel,
      location: 'Lucknow Airport Corridor, Kanpur Road, Lucknow',
      deliveredYear: 'Operational Landmark',
      statusBadge: 'Delivered & Operational',
      specs: [
        { label: 'Capacity', value: '2,000 Guests' },
        { label: 'Rooms', value: '192 Luxury Rooms' },
        { label: 'Banqueting', value: '50,000+ Sq. Ft.' }
      ],
      image: '/images/holiday-inn.webp',
      description:
        'A landmark 5-star hospitality development featuring 192 spacious rooms, international fine-dining restaurants, expansive conference venues, and over 50,000 sq. ft. of banquet and lawn space catering to up to 2,000 guests under InterContinental Hotels Group (IHG).'
    },
    {
      id: 402,
      title: 'Seth M. R. Jaipuria School',
      subtitle: 'K-12 Premier Educational Institution',
      category: 'Education Division',
      icon: GraduationCap,
      location: 'Kanpur Road Campus, Lucknow',
      deliveredYear: 'Operational Academy',
      statusBadge: 'Delivered & Operational',
      specs: [
        { label: 'Campus Area', value: '7+ Acres' },
        { label: 'Affiliation', value: 'CBSE K–12' },
        { label: 'Facilities', value: 'State-of-the-Art' }
      ],
      image: '/images/jaipuria-school.webp',
      description:
        'A leading CBSE-affiliated K–12 institution sprawling across more than 7 lush green acres, delivering progressive education with smart classrooms, advanced sciences and robotics laboratories, comprehensive sports complexes, and performing arts centers.'
    },
    {
      id: 403,
      title: 'Awasthi Group Steel Manufacturing',
      subtitle: 'Industrial Infrastructure Division',
      category: 'Steel & Heavy Industry',
      icon: Factory,
      location: 'Industrial Infrastructure Hub, North India',
      deliveredYear: '40+ Years of Operations',
      statusBadge: 'Foundational Industry',
      specs: [
        { label: 'Core Products', value: 'TMT Steel Bars' },
        { label: 'Manufacturing', value: 'Precision Forging' },
        { label: 'Supply Reach', value: 'Statewide Infrastructure' }
      ],
      image: '/images/steel-ind.webp',
      description:
        'The foundational industrial enterprise of Awasthi Group with four decades of manufacturing excellence in high-tensile TMT steel bars and structural fabrication, supplying major government highways, flyovers, commercial hubs, and urban residential projects.'
    }
  ];

  // GSAP Counter and ScrollTrigger Animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Animate the counters
      document.querySelectorAll('.gsap-stat-counter').forEach((el) => {
        const targetVal = parseFloat(el.getAttribute('data-target') || '0');
        if (prefersReducedMotion) {
          el.innerText = targetVal;
          return;
        }

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: targetVal,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true
            }
          }
        );
      });

      // Animate cards staggered entrance
      if (!prefersReducedMotion) {
        gsap.fromTo(
          '.gsap-completed-card',
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.gsap-completed-grid',
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="bg-[#FFFFFF] text-[#141414] font-montserrat antialiased selection:bg-[#C49D55] selection:text-white"
    >
      {/* ───────────────────────────────────────────────────────────────────
          HERO BANNER HEADER
          - Soft, balanced overlays identical to Brand & Residential pages
          - Crisp architectural background, serif heading, thin gold line
         ─────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#C49D55]/30">
        <img
          src="/images/holiday-inn.webp"
          alt="Completed Projects Portfolio Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* Soft balanced overlays matching Brand Page */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C49D55] uppercase block">
            DELIVERED PORTFOLIO & TRACK RECORD
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl">
            COMPLETED PROJECTS
          </h1>
          <p className="text-[#C49D55] text-xs sm:text-sm font-medium tracking-widest uppercase mt-1">
            Portfolio of Delivered Landmarks & Heritage of Trust
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          COMPACT ANIMATED WORKING STATS COUNTER STRIP
          - Compact height (py-4 sm:py-5)
          - Single-line alignment with whitespace-nowrap
         ─────────────────────────────────────────────────────────────────── */}
      <div className="bg-[#141414] text-white py-4 sm:py-5 border-b border-[#C49D55]/30">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#C49D55]/20">
          {statsData.map((stat, idx) => (
            <div key={idx} className="pt-2.5 lg:pt-0 lg:px-4 space-y-0.5">
              <div className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-white flex items-center justify-center whitespace-nowrap leading-tight">
                <span
                  className="gsap-stat-counter text-[#C49D55]"
                  data-target={stat.target}
                >
                  {stat.target}
                </span>
                <span className="text-[#C49D55]">{stat.suffix}</span>
              </div>
              <div className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-white pt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#B5B5B5] font-light">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          MAIN SECTION
          - Width matching Navbar: max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14
          - Ivory background (#F8F6F1), Sharp Corners, Real Projects Data
         ─────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F8F6F1]">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-12 sm:space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
              DELIVERED INFRASTRUCTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141414]">
              Delivered Landmarks & <span className="text-[#C49D55] italic font-serif">Thriving Operations</span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto my-2" />
            <p className="text-sm sm:text-base text-[#65605A] font-light leading-relaxed pt-1">
              Guided by four decades of integrity and precision engineering, Awasthi Group has successfully delivered premier institutions across 5-star hospitality, K-12 education, and foundational steel infrastructure.
            </p>
          </div>

          {/* Cards Grid with Real Home-Page Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gsap-completed-grid">
            {completedProjects.map((project) => {
              const IconComp = project.icon;
              return (
                <div
                  key={project.id}
                  className="gsap-completed-card bg-white border border-[#C49D55]/30 hover:border-[#C49D55] transition-all duration-400 ease-out flex flex-col justify-between group shadow-sm hover:shadow-[0_12px_32px_rgba(196,157,85,0.18)] hover:-translate-y-1.5 overflow-hidden"
                >
                  <div>
                    {/* Architectural Image Container - Clear, Large, and Bright */}
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      {/* Gentle bottom architectural shadow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#141414]/90 text-[#C49D55] font-semibold text-[10px] uppercase tracking-wider border border-[#C49D55]/40 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C49D55]" />
                          <span>{project.statusBadge}</span>
                        </span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-[#141414]/90 text-white font-semibold text-[10px] uppercase tracking-wider border border-white/20">
                          {project.category}
                        </span>
                      </div>

                      {/* Bottom Title over Image */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-1.5 text-xs text-stone-300 mb-1">
                          <MapPin className="w-3.5 h-3.5 text-[#C49D55] shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>
                        <h3 className="font-serif font-normal text-xl sm:text-2xl text-white group-hover:text-[#C49D55] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content & Highlights */}
                    <div className="p-6 space-y-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#C49D55] uppercase tracking-wider">
                        <IconComp className="w-4 h-4 text-[#C49D55]" />
                        <span>{project.subtitle}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#65605A] leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* Official Specifications Table */}
                      <div className="space-y-2 bg-[#F8F6F1] p-3.5 border border-[#C49D55]/20 text-xs">
                        {project.specs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className={`flex justify-between items-center ${
                              sIdx !== project.specs.length - 1
                                ? 'border-b border-[#C49D55]/15 pb-1.5'
                                : ''
                            }`}
                          >
                            <span className="text-[#65605A] text-[10px] uppercase tracking-wider font-semibold">
                              {spec.label}
                            </span>
                            <span className="font-semibold text-[#141414]">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0 border-t border-stone-200 mt-2">
                    <button
                      onClick={onOpenEnquire}
                      className="w-full mt-4 py-3 bg-[#141414] hover:bg-[#C49D55] text-white hover:text-[#141414] font-semibold text-xs uppercase tracking-widest border border-[#C49D55]/40 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Enquire Project Desk</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ───────────────────────────────────────────────────────────────────
              FOUR DECADES OF EXCELLENCE CERTIFICATE BANNER
             ─────────────────────────────────────────────────────────────────── */}
          <div className="bg-[#141414] text-white p-6 sm:p-8 lg:p-12 border border-[#C49D55]/30 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-md">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                STATUTORY COMPLIANCE & HERITAGE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                Backed by 40+ Years of Business Integrity
              </h3>
              <p className="text-xs sm:text-sm text-[#B5B5B5] font-light leading-relaxed">
                Every project developed under United Infracity Private Limited strictly complies with UP Awas Evam Vikas Parishad regulations, National Building Code standards, and RERA registration guidelines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={onOpenEnquire}
                className="px-8 py-4 bg-[#C49D55] hover:bg-[#b08b46] text-[#141414] font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg flex items-center gap-2"
              >
                <span>Connect With Management Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
