import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Compass,
  Building2,
  HardHat,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MapPin,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Factory,
  Hotel,
  GraduationCap,
  Calendar,
  Layers,
  Car,
  Flame,
  Zap,
  Trees,
  Check,
  FileText
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandPage({ onOpenEnquire, onSelectSection, onNavigateHome }) {
  const navigate = useNavigate();
  const pageRef = useRef(null);

  // Accordion state for Corporate Details (collapsed by default)
  const [isCorporateDetailsOpen, setIsCorporateDetailsOpen] = useState(false);

  // Expandable panel state for Section 03 (0 = Steel active by default)
  const [activeIndustryPanel, setActiveIndustryPanel] = useState(0);

  // Tabs state for Section 06 (0 = Overview, 1 = Amenities, 2 = Connectivity)
  const [activeOrchidTab, setActiveOrchidTab] = useState(0);
  const showcaseImgRef = useRef(null);
  const showcaseContentRef = useRef(null);
  const showcaseNumRef = useRef(null);

  // ─────────────────────────────────────────────────────────────────────────
  // DATA STRUCTURES
  // ─────────────────────────────────────────────────────────────────────────

  // Section 02: Corporate Identity Core 4 Columns
  const primaryCorporateData = [
    {
      icon: Building2,
      label: 'COMPANY NAME',
      value: 'M/s United Infracity Private Limited (UIPL)',
      sub: 'Govt. of India Registered Entity'
    },
    {
      icon: Award,
      label: 'PARENT GROUP',
      value: 'Awasthi Group, Lucknow',
      sub: '40+ Years of Business Legacy'
    },
    {
      icon: FileText,
      label: 'CORPORATE IDENTITY NUMBER (CIN)',
      value: 'U70102UP2012PTC050901',
      sub: 'Ministry of Corporate Affairs'
    },
    {
      icon: ShieldCheck,
      label: 'PROJECT RERA REGISTRATION',
      value: 'UPRERAPRJ593231/11/2026',
      sub: 'UP Real Estate Regulatory Authority'
    }
  ];

  // Section 03: Expandable Industry Panels
  const industryPanels = [
    {
      id: 'steel',
      number: '01',
      title: 'Steel Industry',
      highlight: '40 Years of Legacy',
      image: '/images/steel-ind.webp',
      description:
        'With a 40-year legacy in the steel industry, Awasthi Group has built its foundation on reliability, precision, quality and strong work ethics.'
    },
    {
      id: 'hospitality',
      number: '02',
      title: 'Hospitality',
      highlight: 'Holiday Inn under IHG',
      image: '/images/holiday-inn.webp',
      description:
        'The Group has successfully commissioned Holiday Inn under IHG, featuring 192 luxury rooms and over 50,000 sq. ft. of banquet and lawn space, accommodating up to 2,000 guests. Two more internationally associated hotels are planned by 2029.'
    },
    {
      id: 'education',
      number: '03',
      title: 'Education',
      highlight: 'Seth M. R. Jaipuria School',
      image: '/images/jaipuria-school.webp',
      description:
        'The Group operates Seth M. R. Jaipuria School, Kanpur Road Campus, Lucknow, a CBSE-affiliated K–12 institution with infrastructure spread across 7+ acres.'
    },
    {
      id: 'real-estate',
      number: '04',
      title: 'Real Estate & Infrastructure',
      highlight: 'United Orchid Heights',
      image: '/images/cta.webp',
      description:
        'Expanding its presence in real estate, the Group is introducing Orchid Heights, a 180-apartment residential project with a vision to develop sustainable and modern communities while maintaining its commitment to quality, integrity and customer satisfaction.'
    }
  ];

  // Section 04: Group Journey Milestones
  const groupMilestones = [
    {
      tag: 'Over 40 Years of Legacy',
      title: 'Industrial Genesis'
    },
    {
      tag: '2012',
      title: 'Incorporation of UIPL'
    },
    {
      tag: 'Hospitality Expansion',
      title: 'Holiday Inn under IHG'
    },
    {
      tag: 'Educational Expansion',
      title: 'Seth M. R. Jaipuria School'
    },
    {
      tag: 'Present & Beyond',
      title: 'United Orchid Heights'
    }
  ];

  // Section 06: Orchid Heights Showcase Tabs
  const orchidTabs = [
    {
      num: '01',
      label: '01 — Overview',
      title: 'Designed for Elevated Living',
      image: '/images/real-state.webp',
      alt: 'United Orchid Heights Exterior',
      fit: 'object-cover'
    },
    {
      num: '02',
      label: '02 — Amenities',
      title: 'Experience a Refined Lifestyle',
      image: '/images/active-living-wellness.webp',
      alt: 'United Orchid Heights Amenities',
      fit: 'object-cover'
    },
    {
      num: '03',
      label: '03 — Connectivity',
      title: 'Connected to Everything',
      image: '/images/download4.webp',
      alt: 'United Orchid Heights Location Map',
      fit: 'object-contain'
    }
  ];

  // Section 06: Orchid Heights Amenities
  const orchidAmenities = [
    'Swimming Pool',
    'Community Club & Banquet Hall',
    'Kids\' Play Zone',
    'Stilt & Stack Parking',
    '24/7 Security & CCTV Surveillance',
    'Fire Safety System',
    'High-Speed Elevators',
    'Power Backup & Landscaping'
  ];

  // Section 06: Orchid Heights Connectivity
  const orchidConnectivity = [
    { destination: 'Delhi Public School', distance: '1 Km' },
    { destination: 'Shaheed Path Corridor', distance: '3 Km' },
    { destination: 'SGPGI Hospital', distance: '4 Km' },
    { destination: 'Charbagh Railway Station', distance: '9 Km' },
    { destination: 'CCS Lucknow Airport', distance: '10 Km' }
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // GSAP SCROLLTRIGGER ANIMATIONS
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Section 01 Count-up Animation
      const countEl = document.querySelector('.gsap-legacy-count');
      if (countEl) {
        gsap.fromTo(
          countEl,
          { innerText: 0 },
          {
            innerText: 40,
            duration: 1.8,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: '.gsap-brand-sec01',
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      // 2. Section 01 Masked Image Reveal
      gsap.fromTo(
        '.gsap-sec01-img',
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.1 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-sec01-img-wrap',
            start: 'top 85%',
            once: true
          }
        }
      );

      // 3. Section 02 Corporate Identity Stagger
      gsap.fromTo(
        '.gsap-corp-item',
        { opacity: 0, y: 25, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-corp-grid',
            start: 'top 85%',
            once: true
          }
        }
      );

      // 4. Section 04 Timeline Animation (Synchronized 3.5s Golden Line + Markers)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        gsap.set(['.gsap-timeline-line-h', '.gsap-timeline-line-v'], { scale: 1 });
        gsap.set(['[class*="gsap-marker-"]', '[class*="gsap-text-"]'], { opacity: 1, scale: 1, y: 0 });
      } else {
        const tlJourney = gsap.timeline({
          scrollTrigger: {
            trigger: '.gsap-journey-section',
            start: 'top 80%',
            once: true
          }
        });

        // Animate golden connecting line from left to right over 3.5 seconds
        tlJourney.fromTo(
          '.gsap-timeline-line-h',
          { scaleX: 0 },
          { scaleX: 1, duration: 3.5, ease: 'none', transformOrigin: 'left center' },
          0
        );

        // Mobile vertical line
        tlJourney.fromTo(
          '.gsap-timeline-line-v',
          { scaleY: 0 },
          { scaleY: 1, duration: 3.5, ease: 'none', transformOrigin: 'top center' },
          0
        );

        // Synchronize markers and text reveals with the line progress
        const markerTimings = [0.05, 0.88, 1.75, 2.62, 3.45];
        markerTimings.forEach((startTime, idx) => {
          tlJourney.fromTo(
            `.gsap-marker-${idx}`,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out' },
            startTime
          );

          tlJourney.fromTo(
            `.gsap-text-${idx}`,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
            startTime + 0.15
          );
        });
      }

      // 6. Section 05 Partners Stagger
      gsap.fromTo(
        '.gsap-partner-col',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-partners-sec',
            start: 'top 85%',
            once: true
          }
        }
      );

      // 7. Section 06 Orchid Heights Architectural Showcase ScrollTrigger
      const tlOrchid = gsap.timeline({
        scrollTrigger: {
          trigger: '.gsap-orchid-section',
          start: 'top 80%',
          once: true
        }
      });

      tlOrchid
        .fromTo(
          '.gsap-orchid-header',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          0
        )
        .fromTo(
          '.gsap-orchid-tabs',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          0.15
        )
        .fromTo(
          '.gsap-orchid-showcase-img',
          { clipPath: 'inset(0% 100% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.0, ease: 'power2.out' },
          0.3
        )
        .fromTo(
          '.gsap-orchid-showcase-content',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          0.45
        );
    }, pageRef);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  const handleTabChange = (newTabIdx) => {
    if (newTabIdx === activeOrchidTab) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setActiveOrchidTab(newTabIdx);
      return;
    }

    // Transition out previous image and content
    gsap.to([showcaseImgRef.current, showcaseContentRef.current], {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setActiveOrchidTab(newTabIdx);

        // Reveal new image with cinematic left-to-right masked reveal (0.9-1.2s)
        gsap.fromTo(
          showcaseImgRef.current,
          { clipPath: 'inset(0% 100% 0% 0%)', opacity: 1 },
          { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.0, ease: 'power2.out' }
        );

        // Animate new content from bottom to top (0.5-0.7s)
        gsap.fromTo(
          showcaseContentRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );

        // Animate golden section number
        if (showcaseNumRef.current) {
          gsap.fromTo(
            showcaseNumRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
          );
        }
      }
    });
  };

  const handleNavigateProject = () => {
    if (onSelectSection) {
      onSelectSection('projects');
    } else {
      navigate('/projects/residential');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={pageRef}
      className="bg-[#FFFFFF] text-[#121212] font-montserrat antialiased selection:bg-[#C5A059] selection:text-white"
    >
      {/* ───────────────────────────────────────────────────────────────────
          TOP HERO BANNER HEADER
          - Darkness reduced so the background architectural image is clearly visible
         ─────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#C5A059]/30">
        <img
          src="/images/brand-story.webp"
          alt="United Infracity Brand Profile Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* Reduced darkness overlays so the architectural building is clearly visible */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C5A059] uppercase block">
            Awasthi Group Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl">
            ABOUT US
          </h1>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          SECTION 01: THE SPIRIT OF UNITED INFRACITY
          - Reduced top/bottom padding to minimize vertical gaps
          - Enlarged architectural image (wider column & taller height)
          - Compact 40+ Years of Legacy overlay badge
         ─────────────────────────────────────────────────────────────────── */}
      <section className="gsap-brand-sec01 py-6 sm:py-7 lg:py-8 bg-[#F8F6F1] border-b border-[#E5E5E5]">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
                  OUR BRAND STORY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#121212] leading-[1.15] mt-1.5">
                  The Spirit of <br />
                  <span className="text-[#C5A059] italic font-serif">United Infracity</span>
                </h2>
                <div className="w-16 h-[1.5px] bg-[#C5A059] mt-2.5" />
              </div>

              <div className="space-y-3 text-[#555555] text-sm sm:text-[15px] leading-relaxed font-normal">
                <p>
                  United Infracity Private Limited (UIPL) is a construction and infrastructure company belonging to Lucknow's esteemed Awasthi Group, a business house with a 40-year legacy built on reliability, precision, quality and strong work ethics.
                </p>
                <p>
                  Under the leadership of Shri Shiv Shanker Awasthi, along with Shri Atul Awasthi and Shri Anuj Awasthi, the Group has diversified into education, hospitality and real estate, continuing its commitment to quality, integrity and client satisfaction.
                </p>
              </div>

              {/* Company Motto (No separate rounded card, clean elegant inline styling) */}
              <div className="pt-1">
                <div className="border-l-2 border-[#C5A059] pl-4 py-1">
                  <span className="text-[11px] font-semibold tracking-widest text-[#C5A059] uppercase block mb-0.5">
                    Company Motto
                  </span>
                  <p className="font-serif italic text-base sm:text-lg text-[#121212] font-medium leading-snug">
                    “Quality, Timely Delivery of Works and Client Satisfaction.”
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Column with Enlarged Image & Compact Overlay Badge */}
            <div className="lg:col-span-6 gsap-sec01-img-wrap">
              <div className="relative h-[380px] sm:h-[420px] lg:h-[450px] w-full overflow-hidden bg-stone-900 border border-[#C5A059]/30 shadow-xl">
                <img
                  src="/images/brand-img.webp"
                  alt="The Spirit of United Infracity"
                  className="gsap-sec01-img w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Compact 40+ Years of Legacy Overlay Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 py-2 px-3.5 bg-[#121212]/92 backdrop-blur-md border border-[#C5A059]/40 shadow-xl flex items-center gap-3">
                  <div className="flex items-baseline gap-0.5">
                    <span className="gsap-legacy-count font-serif text-2xl sm:text-3xl font-normal text-[#C5A059] leading-none">
                      40
                    </span>
                    <span className="font-serif text-lg font-normal text-[#C5A059] leading-none">+</span>
                  </div>
                  <div className="border-l border-[#C5A059]/30 pl-2.5 text-left leading-tight">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-white block">
                      Years of Legacy
                    </span>
                    <span className="text-[9.5px] text-[#C5A059] uppercase tracking-wider block font-medium">
                      Awasthi Group
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          SECTION 02: CORPORATE IDENTITY
          - Luxury Black & Champagne Gold Theme (#121212 / #161616 / #C5A059)
          - 4 Elevated Corporate Cards with gold icons, animated gold top line & hover glow
          - Premium "View Corporate Details" Accordion with glowing trigger & 4 detail cards
         ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-14 bg-gradient-to-b from-[#141414] via-[#101010] to-[#0A0A0A] text-white border-b border-[#C5A059]/30 relative overflow-hidden">
        {/* Subtle Ambient Gold Radial Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-[#C5A059]/5 blur-[120px] pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-7 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>A FOUNDATION OF TRUST</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white mt-2">
                Corporate <span className="italic text-[#C5A059] font-serif">Identity</span>
              </h2>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
              Statutory corporate disclosures, RERA registrations, and corporate governance framework.
            </p>
          </div>
          <div className="w-14 h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent" />

          {/* 4-Column Luxury Black & Gold Cards with Hover Animations */}
          <div className="gsap-corp-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {primaryCorporateData.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="gsap-corp-item group/corp p-5 sm:p-6 bg-gradient-to-b from-[#181818] to-[#121212] border border-[#C5A059]/25 hover:border-[#C5A059] transition-all duration-400 relative overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(197,160,89,0.18)] hover:-translate-y-1 flex flex-col justify-between"
                >
                  {/* Top Animated Gold Accent Line */}
                  <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C5A059] transform scale-x-0 group-hover/corp:scale-x-100 transition-transform duration-500 ease-out origin-left pointer-events-none" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#C5A059] block font-mono">
                        {item.label}
                      </span>
                      <div className="w-8 h-8 bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover/corp:bg-[#C5A059] group-hover/corp:text-stone-950 transition-colors duration-300">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-sm sm:text-[15px] font-medium text-white group-hover/corp:text-[#F3E5AB] transition-colors leading-snug">
                      {item.value}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 mt-3">
                    <span className="text-[10px] text-stone-400 group-hover/corp:text-stone-300 tracking-wide uppercase font-medium">
                      {item.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Luxury Accordion: View Corporate Details */}
          <div className="border border-[#C5A059]/30 bg-[#161616]/90 shadow-md">
            <button
              onClick={() => setIsCorporateDetailsOpen(!isCorporateDetailsOpen)}
              className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left hover:bg-[#1f1f1f] transition-all cursor-pointer group"
              aria-expanded={isCorporateDetailsOpen}
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#C5A059] group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white group-hover:text-[#C5A059] transition-colors">
                  {isCorporateDetailsOpen ? 'Hide Additional Corporate Details' : 'View Verified Corporate & Statutory Details'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#C5A059]">
                <span className="text-[11px] font-medium uppercase tracking-wider hidden sm:inline">
                  {isCorporateDetailsOpen ? 'Collapse' : 'Expand'}
                </span>
                {isCorporateDetailsOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>

            {/* Accordion Content */}
            {isCorporateDetailsOpen && (
              <div className="p-5 sm:p-6 border-t border-[#C5A059]/25 bg-[#0F0F0F] space-y-5 animate-in fade-in duration-300">
                <p className="text-stone-300 text-sm leading-relaxed font-light">
                  United Infracity Private Limited was incorporated under the Ministry of Corporate Affairs, Government of India, under the Companies Act, 1956 (Year of Incorporation: <strong>2012</strong>).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                  <div className="p-4 bg-[#141414] border border-[#C5A059]/20 hover:border-[#C5A059]/40 transition-colors space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] block">
                      Registered Office
                    </span>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      560/109, RWS Compound (Near Lal Hospital), Krishna Nagar, Kanpur Road, Lucknow, Uttar Pradesh, India – 226023.
                    </p>
                  </div>

                  <div className="p-4 bg-[#141414] border border-[#C5A059]/20 hover:border-[#C5A059]/40 transition-colors space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] block">
                      Project Site Address
                    </span>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      Plot No. 6C/GH-2, Vrindavan Yojana Phase-1, Lucknow.
                    </p>
                  </div>

                  <div className="p-4 bg-[#141414] border border-[#C5A059]/20 hover:border-[#C5A059]/40 transition-colors space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] block">
                      Leadership &amp; Promoters
                    </span>
                    <ul className="text-xs sm:text-sm text-stone-300 space-y-0.5">
                      <li>• Shri Shiv Shanker Awasthi</li>
                      <li>• Shri Atul Awasthi</li>
                      <li>• Shri Anuj Awasthi</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#141414] border border-[#C5A059]/20 hover:border-[#C5A059]/40 transition-colors space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] block">
                      Official RERA Portal
                    </span>
                    <a
                      href="https://www.up-rera.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-white hover:text-[#C5A059] inline-flex items-center gap-1.5 transition-colors underline underline-offset-4"
                    >
                      <span>https://www.up-rera.in/</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          SECTION 03: A LEGACY ACROSS INDUSTRIES
          - Enlarged image panel height (h-[420px] on desktop)
          - Large golden numbering 01–04
          - First active by default, smooth expand on hover/click with golden sweep line
         ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-14 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
                THE AWASTHI GROUP
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#121212] mt-1">
                A Legacy Across <span className="italic text-[#C5A059] font-serif">Industries</span>
              </h2>
            </div>
            <p className="text-[#555555] text-xs sm:text-sm max-w-md font-light leading-relaxed">
              Four decades of experience, diversified expertise and a continued commitment to excellence.
            </p>
          </div>
          <div className="w-14 h-[1.5px] bg-[#C5A059] -mt-2" />

          {/* 4 Expandable Horizontal Image Panels with Increased Height (h-[420px]) */}
          <div className="flex flex-col md:flex-row gap-3 w-full h-auto md:h-[420px]">
            {industryPanels.map((panel, idx) => {
              const isActive = activeIndustryPanel === idx;
              return (
                <div
                  key={panel.id}
                  onClick={() => setActiveIndustryPanel(idx)}
                  onMouseEnter={() => setActiveIndustryPanel(idx)}
                  className={`group/panel relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border ${
                    isActive
                      ? 'md:flex-[3.2] h-[380px] md:h-[420px] border-[#C5A059] shadow-[0_16px_40px_rgba(197,160,89,0.22)]'
                      : 'md:flex-1 h-[100px] md:h-[420px] border-stone-200/90 hover:border-[#C5A059]/60 opacity-90 hover:opacity-100 shadow-xs'
                  }`}
                >
                  {/* Panel Background Image with Smooth Hover Scale */}
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover/panel:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* High-Contrast Cinematic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/20" />

                  {/* Top Golden Accent Line on Active & Hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] bg-[#C5A059] transition-all duration-500 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover/panel:opacity-80 group-hover/panel:scale-x-100'
                    }`}
                  />

                  {/* Content Container */}
                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10 text-white">
                    {/* Top Row: Number and Badge */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl sm:text-4xl font-normal text-[#C5A059] drop-shadow-sm">
                        {panel.number}
                      </span>
                      {isActive && (
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] bg-black/75 px-3 py-1 border border-[#C5A059]/40 backdrop-blur-sm animate-in fade-in duration-300 shadow-sm">
                          {panel.highlight}
                        </span>
                      )}
                    </div>

                    {/* Bottom Row: Title & Upward Reveal Description */}
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-white drop-shadow-md">
                        {panel.title}
                      </h3>

                      {isActive && (
                        <p className="text-xs sm:text-[13px] text-stone-200 font-light leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-2 duration-500">
                          {panel.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          SECTION 04: OUR GROUP JOURNEY
          - Center-aligned heading with gold italic
          - Minimal horizontal timeline without cards or containers
          - 5 milestones evenly spaced
          - Connected by thin golden horizontal line
         ─────────────────────────────────────────────────────────────────── */}
      <section className="gsap-journey-section py-10 lg:py-12 bg-gradient-to-b from-[#FBF9F6] via-[#FAF8F5] to-white border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-8 relative z-10">
          
          {/* Center-aligned Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs font-semibold tracking-[0.25em] text-[#997B20] uppercase">
              <Award className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>MILESTONES OF EXCELLENCE</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#121212]">
              Our Group <span className="italic text-[#C5A059] font-serif">Journey</span>
            </h2>
          </div>

          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden md:block relative pt-4 pb-2">
            {/* Thin Horizontal Golden Connecting Line - Centered exactly with the circles (top-[38px] = pt-4 (16px) + h-11/2 (22px)) */}
            <div className="gsap-timeline-line-h absolute top-[38px] left-[10%] right-[10%] h-[1.5px] bg-[#C5A059] z-0" />

            {/* 5 Evenly Spaced Milestones */}
            <div className="grid grid-cols-5 gap-3 relative z-10">
              {groupMilestones.map((m, idx) => (
                <div key={idx} className="group/ms flex flex-col items-center cursor-default">
                  {/* Circular Marker (44px, white background, golden border, inner dot, subtle glow on hover) */}
                  <div
                    className={`gsap-marker-${idx} relative z-10 w-11 h-11 rounded-full bg-white border border-[#C5A059] flex items-center justify-center transition-all duration-300 group-hover/ms:shadow-[inset_0_0_8px_rgba(197,160,89,0.35),0_0_12px_rgba(197,160,89,0.3)] group-hover/ms:border-[#B38F24]`}
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-[#C5A059] transition-all duration-300 group-hover/ms:bg-[#B38F24]" />
                  </div>

                  {/* Milestone Content Directly Below (No Card / Container) */}
                  <div className={`gsap-text-${idx} mt-4 flex flex-col items-center text-center px-2 space-y-1`}>
                    <span className="text-[11px] font-semibold text-[#8C7126] tracking-wider uppercase">
                      {m.tag}
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-normal text-[#121212] transition-colors duration-300 group-hover/ms:text-[#C5A059]">
                      {m.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline (Vertical) */}
          <div className="md:hidden relative max-w-md mx-auto pl-2 py-2">
            {/* Thin Vertical Golden Connecting Line - Centered with markers (left-[30px] = pl-2 (8px) + w-11/2 (22px)) */}
            <div className="gsap-timeline-line-v absolute top-6 bottom-6 left-[30px] w-[1.5px] bg-[#C5A059] z-0" />

            {/* Vertical Milestones */}
            <div className="space-y-6 relative z-10">
              {groupMilestones.map((m, idx) => (
                <div key={idx} className="group/ms flex items-start gap-4 cursor-default">
                  {/* Circular Marker */}
                  <div
                    className={`gsap-marker-${idx} flex-shrink-0 relative z-10 w-11 h-11 rounded-full bg-white border border-[#C5A059] flex items-center justify-center transition-all duration-300 group-hover/ms:shadow-[inset_0_0_8px_rgba(197,160,89,0.35),0_0_12px_rgba(197,160,89,0.3)] group-hover/ms:border-[#B38F24]`}
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-[#C5A059] transition-all duration-300 group-hover/ms:bg-[#B38F24]" />
                  </div>

                  {/* Milestone Content Beside Marker */}
                  <div className={`gsap-text-${idx} flex-1 pt-1 space-y-0.5`}>
                    <span className="text-[11px] font-semibold text-[#8C7126] tracking-wider uppercase block">
                      {m.tag}
                    </span>
                    <h4 className="font-serif text-base font-normal text-[#121212] transition-colors duration-300 group-hover/ms:text-[#C5A059]">
                      {m.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          SECTION 05: DESIGN & ENGINEERING PARTNERS
          - Full-width black background (#121212)
          - Subtle architectural blueprint pattern (3–5% opacity)
          - Two equal columns separated by thin golden vertical line
          - Sharp corners, no rounded cards, target height 200–250px
         ─────────────────────────────────────────────────────────────────── */}
      <section className="gsap-partners-sec py-10 lg:py-12 bg-[#121212] text-white border-b border-[#C5A059]/20 relative overflow-hidden">
        {/* Subtle Architectural Blueprint Background Pattern (3-5% Opacity) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px), linear-gradient(to right, #C5A059 1px, transparent 1px)`,
            backgroundSize: '24px 24px, 48px 48px'
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10 space-y-6">
          
          {/* Header */}
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
              TECHNICAL EXCELLENCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white mt-1">
              Design &amp; Engineering Partners
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mt-2.5" />
          </div>

          {/* Two Equal Columns with Interactive Golden Hover Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/25 border border-[#C5A059]/20 bg-[#161616]">
            
            {/* Partner 01: Architectural Conceptualization */}
            <div className="gsap-partner-col group/partner relative p-6 sm:p-8 space-y-3 cursor-pointer overflow-hidden transition-all duration-500 hover:bg-[#1a1a1a] hover:shadow-[inset_0_0_40px_rgba(197,160,89,0.06)]">
              {/* Top Animated Gold Accent Line */}
              <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C5A059] transform scale-x-0 group-hover/partner:scale-x-100 transition-transform duration-500 ease-out origin-left pointer-events-none" />

              {/* Background Ambient Glow & Watermark Icon on Hover */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl opacity-0 group-hover/partner:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute right-4 bottom-4 text-white/[0.025] group-hover/partner:text-[#C5A059]/[0.08] group-hover/partner:scale-110 transition-all duration-700 pointer-events-none">
                <Compass className="w-24 h-24 stroke-[1]" />
              </div>

              {/* Icon & Label */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover/partner:bg-[#C5A059] group-hover/partner:text-stone-950 group-hover/partner:scale-105 group-hover/partner:shadow-[0_0_15px_rgba(197,160,89,0.4)] transition-all duration-400">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059] block">
                  ARCHITECTURAL CONCEPTUALIZATION
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5 relative z-10">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover/partner:text-[#F3E5AB] transition-colors duration-300">
                  The Architect Studio – ABHIKARM
                </h3>
                <p className="text-stone-400 group-hover/partner:text-stone-300 text-xs sm:text-sm font-light leading-relaxed transition-colors duration-300">
                  Architectural conceptualization focused on modern, functional and aesthetically refined design.
                </p>
              </div>

            </div>

            {/* Partner 02: Structural Design & Engineering */}
            <div className="gsap-partner-col group/partner relative p-6 sm:p-8 space-y-3 cursor-pointer overflow-hidden transition-all duration-500 hover:bg-[#1a1a1a] hover:shadow-[inset_0_0_40px_rgba(197,160,89,0.06)]">
              {/* Top Animated Gold Accent Line */}
              <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C5A059] transform scale-x-0 group-hover/partner:scale-x-100 transition-transform duration-500 ease-out origin-left pointer-events-none" />

              {/* Background Ambient Glow & Watermark Icon on Hover */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl opacity-0 group-hover/partner:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute right-4 bottom-4 text-white/[0.025] group-hover/partner:text-[#C5A059]/[0.08] group-hover/partner:scale-110 transition-all duration-700 pointer-events-none">
                <HardHat className="w-24 h-24 stroke-[1]" />
              </div>

              {/* Icon & Label */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover/partner:bg-[#C5A059] group-hover/partner:text-stone-950 group-hover/partner:scale-105 group-hover/partner:shadow-[0_0_15px_rgba(197,160,89,0.4)] transition-all duration-400">
                  <HardHat className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059] block">
                  STRUCTURAL DESIGN &amp; ENGINEERING
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5 relative z-10">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover/partner:text-[#F3E5AB] transition-colors duration-300">
                  M/s SBC Structures
                </h3>
                <p className="text-stone-400 group-hover/partner:text-stone-300 text-xs sm:text-sm font-light leading-relaxed transition-colors duration-300">
                  Structural design and engineering for resilient building frameworks.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          SECTION 06: UNITED ORCHID HEIGHTS — ARCHITECTURAL SHOWCASE
          - Top center heading + thin gold divider
          - 3 equal-width interactive tabs (01 Overview, 02 Amenities, 03 Connectivity)
          - Two-column balanced layout (58% image, 42% content, 40-50px gap)
          - Left image: 340-380px, original photos, object-cover / object-contain (map), no dark overlays
          - Right content: gold number, heading, details/highlights, Explore Project button
          - Thin divider + minimal RERA registration with ShieldCheck icon
          - Button: Black bg, gold text, slow bottom-to-top wave animation on hover (1.3s)
         ─────────────────────────────────────────────────────────────────── */}
      <section className="gsap-orchid-section py-10 lg:py-12 bg-[#F8F6F1] border-b border-[#E5E5E5] relative overflow-hidden">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-6 lg:space-y-7 relative z-10">
          
          {/* Section Heading: Top Center */}
          <div className="gsap-orchid-header text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
              OUR FLAGSHIP DEVELOPMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#141414] leading-tight">
              United Orchid Heights
            </h2>
            <div className="w-12 h-[2px] bg-[#C49D55] mx-auto mt-2" />
          </div>

          {/* Interactive Tab Navigation: 3 Equal-width horizontal tabs */}
          <div className="gsap-orchid-tabs max-w-3xl w-full mx-auto grid grid-cols-3 border border-[#C49D55]/30">
            {orchidTabs.map((tab, idx) => {
              const isActive = activeOrchidTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleTabChange(idx)}
                  className={`relative py-3 sm:py-3.5 px-2 sm:px-4 text-xs sm:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer text-center select-none ${
                    isActive
                      ? 'bg-[#141414] text-[#C49D55]'
                      : 'bg-white hover:bg-[#FAF8F5] text-[#141414]'
                  } ${idx > 0 ? 'border-l border-[#C49D55]/30' : ''}`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C49D55] transition-all" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Showcase Layout: Two-Column (58% Image / 42% Content) */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pt-2 min-h-[350px] sm:min-h-[380px]">
            
            {/* Left Image Column: 58% Width on Desktop */}
            <div className="w-full lg:w-[58%] shrink-0">
              <div className="relative h-[320px] sm:h-[350px] lg:h-[380px] w-full overflow-hidden border border-[#C49D55]/30 bg-white">
                <img
                  ref={showcaseImgRef}
                  src={orchidTabs[activeOrchidTab].image}
                  alt={orchidTabs[activeOrchidTab].alt}
                  className={`gsap-orchid-showcase-img w-full h-full ${orchidTabs[activeOrchidTab].fit} ${
                    orchidTabs[activeOrchidTab].fit === 'object-contain' ? 'p-3 bg-[#FAF8F5]' : ''
                  }`}
                />
              </div>
            </div>

            {/* Right Content Column: 42% Width on Desktop, Vertically Centered */}
            <div
              ref={showcaseContentRef}
              className="gsap-orchid-showcase-content w-full lg:w-[42%] flex flex-col justify-center min-h-[320px] sm:min-h-[350px]"
            >
              {/* Tab 01 — Overview */}
              {activeOrchidTab === 0 && (
                <div className="space-y-4">
                  <span ref={showcaseNumRef} className="font-serif text-3xl sm:text-4xl font-normal text-[#C49D55] block leading-none">
                    01
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] leading-tight">
                    Designed for Elevated Living
                  </h3>
                  <p className="text-xs sm:text-sm text-[#65605A] font-light leading-relaxed">
                    United Orchid Heights is a premium residential development featuring 180 apartments, thoughtfully designed with spacious bedrooms, natural ventilation, modern attached bathrooms, and private balconies.
                  </p>

                  {/* Highlights with minimal typography and thin dividers */}
                  <div className="py-2.5 border-y border-[#C49D55]/25 flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-xs sm:text-[13px]">
                    <span className="font-semibold text-[#141414]">180 Premium Apartments</span>
                    <span className="text-[#C49D55]">•</span>
                    <span className="font-medium text-[#65605A]">2 BHK</span>
                    <span className="text-[#C49D55]">•</span>
                    <span className="font-medium text-[#65605A]">3 BHK</span>
                    <span className="text-[#C49D55]">•</span>
                    <span className="font-medium text-[#65605A]">3 BHK + Study</span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleNavigateProject}
                      className="relative overflow-hidden px-7 py-3 bg-[#141414] text-[#C49D55] border border-[#C49D55] text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 group inline-flex items-center gap-3 select-none hover:shadow-[0_4px_20px_rgba(196,157,85,0.25)]"
                    >
                      <span
                        className="absolute inset-x-0 h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{
                          background: 'linear-gradient(to top, rgba(196, 157, 85, 0) 0%, rgba(196, 157, 85, 0.45) 50%, rgba(196, 157, 85, 0) 100%)',
                          animation: 'goldWaveBottomToTopHover 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite'
                        }}
                        aria-hidden="true"
                      />
                      <span className="relative z-10 font-bold">EXPLORE PROJECT</span>
                      <ArrowRight className="w-4 h-4 text-[#C49D55] relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 02 — Amenities */}
              {activeOrchidTab === 1 && (
                <div className="space-y-4">
                  <span ref={showcaseNumRef} className="font-serif text-3xl sm:text-4xl font-normal text-[#C49D55] block leading-none">
                    02
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] leading-tight">
                    Experience a Refined Lifestyle
                  </h3>

                  {/* Amenities List in Clean Compact Two-column List with Check Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 py-1">
                    {orchidAmenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-[12.5px] text-[#65605A]">
                        <Check className="w-3.5 h-3.5 text-[#C49D55] stroke-[2.5] shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleNavigateProject}
                      className="relative overflow-hidden px-7 py-3 bg-[#141414] text-[#C49D55] border border-[#C49D55] text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 group inline-flex items-center gap-3 select-none hover:shadow-[0_4px_20px_rgba(196,157,85,0.25)]"
                    >
                      <span
                        className="absolute inset-x-0 h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{
                          background: 'linear-gradient(to top, rgba(196, 157, 85, 0) 0%, rgba(196, 157, 85, 0.45) 50%, rgba(196, 157, 85, 0) 100%)',
                          animation: 'goldWaveBottomToTopHover 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite'
                        }}
                        aria-hidden="true"
                      />
                      <span className="relative z-10 font-bold">EXPLORE PROJECT</span>
                      <ArrowRight className="w-4 h-4 text-[#C49D55] relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 03 — Connectivity */}
              {activeOrchidTab === 2 && (
                <div className="space-y-4">
                  <span ref={showcaseNumRef} className="font-serif text-3xl sm:text-4xl font-normal text-[#C49D55] block leading-none">
                    03
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] leading-tight">
                      Connected to Everything
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#65605A] mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C49D55] shrink-0" />
                      <span>Plot No. 6C/GH-2, Vrindavan Yojana Phase-1, Lucknow.</span>
                    </div>
                  </div>

                  {/* Connectivity Rows with Thin Dividers */}
                  <div className="divide-y divide-[#C49D55]/20 border-y border-[#C49D55]/20">
                    {orchidConnectivity.map((item, idx) => (
                      <div key={idx} className="py-1.5 flex items-center justify-between text-xs sm:text-[13px]">
                        <span className="text-[#141414] font-medium">{item.destination}</span>
                        <span className="font-serif font-bold text-[#C49D55] text-sm sm:text-base tracking-wide">
                          {item.distance}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleNavigateProject}
                      className="relative overflow-hidden px-7 py-3 bg-[#141414] text-[#C49D55] border border-[#C49D55] text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 group inline-flex items-center gap-3 select-none hover:shadow-[0_4px_20px_rgba(196,157,85,0.25)]"
                    >
                      <span
                        className="absolute inset-x-0 h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{
                          background: 'linear-gradient(to top, rgba(196, 157, 85, 0) 0%, rgba(196, 157, 85, 0.45) 50%, rgba(196, 157, 85, 0) 100%)',
                          animation: 'goldWaveBottomToTopHover 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite'
                        }}
                        aria-hidden="true"
                      />
                      <span className="relative z-10 font-bold">EXPLORE PROJECT</span>
                      <ArrowRight className="w-4 h-4 text-[#C49D55] relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Thin Horizontal Divider below Showcase Layout */}
          <div className="w-full h-[1px] bg-[#C49D55]/25 mt-6 lg:mt-8" />

          {/* Minimal RERA Registration */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#65605A] pt-1">
            <ShieldCheck className="w-4 h-4 text-[#C49D55] shrink-0" />
            <span>
              <span className="text-[#141414] font-medium">Project RERA Registration:</span>{' '}
              <span className="font-semibold text-[#C49D55] tracking-wide">UPRERAPRJ593231/11/2026</span>
            </span>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          INLINE CSS KEYFRAMES FOR GOLDEN WAVE ANIMATION (BOTTOM-TO-TOP ONLY)
         ─────────────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes goldWaveBottomToTop {
          0% {
            transform: translateY(105%);
            opacity: 0;
          }
          15% {
            opacity: 0.45;
          }
          85% {
            opacity: 0.45;
          }
          100% {
            transform: translateY(-105%);
            opacity: 0;
          }
        }
        @keyframes goldWaveBottomToTopHover {
          0% {
            transform: translateY(105%);
            opacity: 0;
          }
          20% {
            opacity: 0.55;
          }
          80% {
            opacity: 0.55;
          }
          100% {
            transform: translateY(-105%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
