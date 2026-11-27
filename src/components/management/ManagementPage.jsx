import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Factory, Hotel, GraduationCap, Building2, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ManagementPage({ onOpenEnquire, onNavigateHome }) {
  const navigate = useNavigate();
  const pageRef = useRef(null);

  // ─────────────────────────────────────────────────────────────────────────
  // DATA STRUCTURES
  // ─────────────────────────────────────────────────────────────────────────

  const directors = [
    {
      id: '01',
      name: 'Sh. Atul Awasthi',
      designation: 'Director — United Infracity Pvt. Ltd.',
      qualification: 'Graduate from Lucknow University',
      image: '/images/management_ceo.webp',
      responsibilities: [
        'Steel Manufacturing Operations',
        'Healthcare Division',
        'Real Estate Infrastructure'
      ]
    },
    {
      id: '02',
      name: 'Sh. Anuj Awasthi',
      designation: 'Director — United Infracity Pvt. Ltd.',
      qualification: 'Biotechnology Graduate from UK',
      image: '/images/management_director.webp',
      responsibilities: [
        'Luxury Hospitality',
        'Education Division'
      ]
    }
  ];

  const governanceSectors = [
    {
      num: '01',
      icon: Factory,
      heading: 'Industrial & Manufacturing',
      description: 'Steel manufacturing and industrial operations built on precision, reliability, and quality.'
    },
    {
      num: '02',
      icon: Hotel,
      heading: 'Luxury Hospitality',
      description: 'International hospitality standards through Holiday Inn Lucknow Airport under IHG.'
    },
    {
      num: '03',
      icon: GraduationCap,
      heading: 'Educational Excellence',
      description: 'Quality education through Seth M. R. Jaipuria School, Kanpur Road Campus, Lucknow.'
    },
    {
      num: '04',
      icon: Building2,
      heading: 'Infrastructure & Healthcare',
      description: 'Residential developments and community healthcare infrastructure.'
    }
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // GSAP SCROLLTRIGGER & TIMELINE ANIMATIONS
  // ─────────────────────────────────────────────────────────────────────────

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero Animations
      const tlHero = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tlHero
        .fromTo(
          '.gsap-mgmt-hero-img',
          { scale: 1.08 },
          { scale: 1.02, duration: 2.2, ease: 'power1.out' }
        )
        .fromTo(
          '.gsap-mgmt-hero-eyebrow',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.15
        )
        .fromTo(
          '.gsap-mgmt-hero-title',
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.3
        )
        .fromTo(
          '.gsap-mgmt-hero-divider',
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, transformOrigin: 'center center' },
          0.45
        );

      // 2. Executive Leadership Section
      const tlLeadership = gsap.timeline({
        scrollTrigger: {
          trigger: '.gsap-mgmt-leadership-sec',
          start: 'top 80%',
          once: true
        }
      });
      tlLeadership
        .fromTo(
          '.gsap-mgmt-leadership-header',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
        )
        .fromTo(
          '.gsap-director-img-0',
          { clipPath: 'inset(0% 100% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.0, ease: 'power2.out' },
          0.2
        )
        .fromTo(
          '.gsap-director-img-1',
          { clipPath: 'inset(0% 0% 0% 100%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.0, ease: 'power2.out' },
          0.2
        )
        .fromTo(
          ['.gsap-director-num-0', '.gsap-director-num-1'],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
          0.3
        )
        .fromTo(
          ['.gsap-director-divider-0', '.gsap-director-divider-1'],
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, stagger: 0.15, transformOrigin: 'left center', ease: 'power2.out' },
          0.4
        )
        .fromTo(
          ['.gsap-director-info-0', '.gsap-director-info-1'],
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out' },
          0.35
        );

      // 3. Multi-Sector Governance Section
      const tlGovernance = gsap.timeline({
        scrollTrigger: {
          trigger: '.gsap-mgmt-governance-sec',
          start: 'top 80%',
          once: true
        }
      });
      tlGovernance
        .fromTo(
          '.gsap-mgmt-governance-header',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
        )
        .fromTo(
          '.gsap-sector-item',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: 'power2.out' },
          0.2
        );

      // 4. CTA Section
      gsap.fromTo(
        '.gsap-mgmt-cta-sec',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-mgmt-cta-sec',
            start: 'top 85%',
            once: true
          }
        }
      );
    }, pageRef);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      ref={pageRef}
      className="bg-[#FFFFFF] text-[#141414] font-montserrat antialiased selection:bg-[#C49D55] selection:text-white"
    >
      {/* ───────────────────────────────────────────────────────────────────
          1. MANAGEMENT HERO SECTION
          - Full-width background image with subtle dark overlay
          - Desktop height: 350-400px, Mobile height: 260-300px
          - Smooth masked heading reveal & slow background image scale
         ─────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#C49D55]/30">
        <img
          src="/images/managements.webp"
          alt="United Infracity Management Team Header"
          className="gsap-mgmt-hero-img absolute inset-0 w-full h-full object-cover object-center brightness-110"
        />

        {/* Subtle dark overlays for text readability without over-darkening */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30" />

        {/* Centered Overlay Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2.5">
          <span className="gsap-mgmt-hero-eyebrow text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C49D55] uppercase block">
            OUR LEADERSHIP
          </span>
          <h1 className="gsap-mgmt-hero-title font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl">
            MANAGEMENT
          </h1>

          <div className="gsap-mgmt-hero-divider w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          2. EXECUTIVE LEADERSHIP SECTION
          - Background: #F8F6F1
          - Two directors side by side on desktop in Luxury Editorial Layout
          - Portrait on left (3:4 ratio), Information on right
          - Large golden numbers 01 & 02, thin golden lines, sharp corners
          - Container width strictly matching Navbar: max-w-[1550px]
         ─────────────────────────────────────────────────────────────────── */}
      <section className="gsap-mgmt-leadership-sec py-12 lg:py-14 bg-[#F8F6F1] border-b border-[#E5E5E5]">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-8 lg:space-y-10">
          
          {/* Section Heading: Centered */}
          <div className="gsap-mgmt-leadership-header text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
              BOARD OF DIRECTORS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#141414] leading-tight">
              Executive <span className="italic text-[#C49D55] font-serif">Leadership</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#C49D55] mx-auto mt-2" />
            <p className="text-[#65605A] text-xs sm:text-sm font-light leading-relaxed pt-1 max-w-2xl mx-auto">
              Guided by the vision of Awasthi Group, our executive directors lead diversified business operations with a commitment to quality, integrity, and excellence.
            </p>
          </div>

          {/* Two Directors Side-by-Side Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {directors.map((director, idx) => (
              <div
                key={director.id}
                className="group/card relative flex flex-col sm:flex-row gap-6 lg:gap-7 bg-white p-6 sm:p-7 lg:p-8 border-2 border-[#C49D55]/45 hover:border-[#C49D55] shadow-[0_4px_24px_rgba(196,157,85,0.08)] hover:shadow-[0_20px_45px_rgba(196,157,85,0.22)] hover:-translate-y-1.5 transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Top Animated Gold Accent Line on Hover */}
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C49D55] via-[#E2C792] to-[#C49D55] transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 ease-out origin-left pointer-events-none z-20" />

                {/* Subtle Ambient Gold Radial Glow on Hover */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#C49D55]/10 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Portrait Image (Left: Enlarged Size & Height ~420-440px) */}
                <div className="w-full sm:w-[48%] lg:w-[50%] shrink-0">
                  <div className="relative h-[380px] sm:h-[420px] lg:h-[440px] w-full overflow-hidden border-2 border-[#C49D55]/40 group-hover/card:border-[#C49D55] transition-colors duration-400 bg-stone-900 shadow-sm">
                    <img
                      src={director.image}
                      alt={director.name}
                      className={`gsap-director-img-${idx} w-full h-full object-cover object-top group-hover/card:scale-106 transition-transform duration-700 ease-out`}
                    />
                  </div>
                </div>

                {/* Director Information (Right Column) */}
                <div className={`gsap-director-info-${idx} flex-1 flex flex-col justify-between py-1 space-y-4 relative z-10`}>
                  <div>
                    {/* Large Golden Numbering: 01 / 02 */}
                    <span className={`gsap-director-num-${idx} font-serif text-3xl sm:text-4xl font-normal text-[#C49D55] block leading-none transition-transform duration-300 group-hover/card:translate-x-1`}>
                      {director.id}
                    </span>

                    {/* Thin Golden Divider */}
                    <div className={`gsap-director-divider-${idx} w-14 h-[2px] bg-gradient-to-r from-[#C49D55] to-[#E2C792] my-3`} />

                    {/* Director Name */}
                    <h3 className="font-serif text-2xl sm:text-[27px] font-normal text-[#141414] group-hover/card:text-[#997B20] transition-colors duration-300 leading-tight">
                      {director.name}
                    </h3>

                    {/* Designation */}
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#C49D55] mt-1.5">
                      {director.designation}
                    </p>

                    {/* Qualification */}
                    <p className="text-xs sm:text-[13.5px] text-[#65605A] mt-2 font-medium">
                      <span className="text-[#141414] font-semibold">Qualification:</span>{' '}
                      {director.qualification}
                    </p>
                  </div>

                  {/* Key Portfolio Responsibilities */}
                  <div className="pt-3.5 border-t border-[#C49D55]/25 space-y-2.5">
                    <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#141414] block">
                      Key Responsibilities:
                    </span>
                    <div className="space-y-2">
                      {director.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#65605A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C49D55] shrink-0 group-hover/card:scale-125 transition-transform duration-300" />
                          <span className="group-hover/card:text-[#141414] transition-colors duration-300">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          3. MULTI-SECTOR GOVERNANCE SECTION
          - Full-width black background: #141414
          - Subtle architectural grid pattern in background (3.5% opacity)
          - No images in this section
          - Four equal-width columns on desktop, thin vertical golden separators
          - Large golden numbers 01-04, minimal outline icons, white headings
          - Container width strictly matching Navbar: max-w-[1550px]
         ─────────────────────────────────────────────────────────────────── */}
      <section className="gsap-mgmt-governance-sec py-14 lg:py-16 bg-[#141414] text-white border-b border-[#C49D55]/20 relative overflow-hidden">
        {/* Subtle Architectural Grid Pattern (3.5% Opacity) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#C49D55 1px, transparent 1px), linear-gradient(to right, #C49D55 1px, transparent 1px)`,
            backgroundSize: '24px 24px, 48px 48px'
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-10 relative z-10">
          
          {/* Section Heading: Centered */}
          <div className="gsap-mgmt-governance-header text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
              STRATEGIC OVERSIGHT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-white leading-tight">
              Multi-Sector <span className="italic text-[#C49D55] font-serif">Governance</span>
            </h2>
            <div className="w-12 h-[1.5px] bg-[#C49D55] mx-auto mt-2" />
            <p className="text-[#B5B5B5] text-xs sm:text-sm font-light leading-relaxed pt-1">
              A diversified vision. A unified commitment to excellence.
            </p>
          </div>

          {/* Four Equal-Width Governance Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t lg:border-t-0 border-[#C49D55]/20">
            {governanceSectors.map((sector, idx) => {
              const IconComp = sector.icon;
              return (
                <div
                  key={sector.num}
                  className={`gsap-sector-item group p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:bg-[#1a1a1a] relative ${
                    idx < 3 ? 'lg:border-r border-[#C49D55]/20' : ''
                  } ${idx % 2 === 0 ? 'md:border-r lg:border-r-0 md:last:border-r-0' : ''} border-b md:border-b-0 border-[#C49D55]/20`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Large Golden Number + Minimal Outline Icon */}
                    <div className="flex items-center justify-between transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="font-serif text-5xl lg:text-6xl font-normal text-[#C49D55] leading-none select-none">
                        {sector.num}
                      </span>
                      <div className="w-10 h-10 flex items-center justify-center text-[#C49D55]">
                        <IconComp className="w-8 h-8 stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Heading with Hover Champagne Transition & Animated Underline */}
                    <div className="relative pt-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-[#C49D55] transition-colors duration-300 leading-snug">
                        {sector.heading}
                      </h3>
                      <span className="block w-8 h-[1.5px] bg-[#C49D55] mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#B5B5B5] font-light leading-relaxed pt-1">
                      {sector.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          4. EXECUTIVE PARTNERSHIP CTA
          - Background: #F8F6F1
          - Thin golden horizontal line at top
          - Compact height (~120-150px on desktop)
          - Left: Building Together, Partner With Our Leadership
          - Right: Black button with champagne-gold wave hover animation
          - Container width strictly matching Navbar: max-w-[1550px]
         ─────────────────────────────────────────────────────────────────── */}
      <section className="gsap-mgmt-cta-sec py-8 lg:py-10 bg-[#F8F6F1] border-t border-[#C49D55]/30">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                BUILDING TOGETHER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] leading-tight">
                Partner With Our Leadership
              </h3>
              <p className="text-xs sm:text-sm text-[#65605A] font-light">
                Connect with our executive team for strategic opportunities.
              </p>
            </div>

            {/* Right Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={handleContactClick}
                className="relative overflow-hidden px-8 py-3.5 bg-[#141414] text-[#C49D55] hover:text-[#141414] border border-[#C49D55] text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer transition-colors duration-400 group inline-flex items-center gap-3 select-none hover:shadow-[0_4px_20px_rgba(196,157,85,0.25)] rounded-none"
              >
                {/* Slow Golden Background Rise on Hover (Bottom to Top) */}
                <span
                  className="absolute inset-0 bg-[#C49D55] pointer-events-none transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"
                  aria-hidden="true"
                />

                {/* Subtle Wave Shimmer on Hover */}
                <span
                  className="absolute inset-x-0 h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)',
                    animation: 'ctaGoldWaveRise 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite'
                  }}
                  aria-hidden="true"
                />

                <span className="relative z-10 font-bold transition-colors duration-300">
                  CONTACT US
                </span>
                <ArrowRight className="w-4 h-4 text-[#C49D55] group-hover:text-[#141414] relative z-10 group-hover:translate-x-1.5 transition-all duration-300" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          INLINE CSS KEYFRAMES FOR CTA BUTTON GOLDEN WAVE (BOTTOM-TO-TOP)
         ─────────────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes ctaGoldWaveRise {
          0% {
            transform: translateY(105%);
            opacity: 0;
          }
          25% {
            opacity: 0.65;
          }
          75% {
            opacity: 0.65;
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
