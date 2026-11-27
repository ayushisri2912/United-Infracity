import React from 'react';
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  Award,
  ArrowUpRight,
  Sparkles,
  Lock,
  ArrowRight,
  Zap,
  Shield,
  Layers,
  FileCheck
} from 'lucide-react';

export default function GovernmentProjectsPage({ onOpenEnquire, onNavigateHome }) {
  const govtProjects = [
    {
      id: 501,
      title: 'State Administrative Secretariat Complex',
      agency: 'State Public Works & Urban Infrastructure Dept.',
      tags: ['Seismic Zone 5 Resistant', 'IGBC Platinum Green Rated', 'High Security Zone'],
      scale: '450,000 Sq. Ft. Built-up Area',
      completion: 'Completed & Handed Over',
      image: '/images/united_commercial.webp',
      description:
        'State-of-the-art administrative office complex built with high-tensile earthquake-resistant structural steel, central automated climate control, integrated data centers, and renewable solar power grid integration.'
    },
    {
      id: 502,
      title: 'Capital Transit & Civic Hub',
      agency: 'Metropolitan Development Authority',
      tags: ['Civic Infrastructure', 'Zero Carbon Footprint', '100% On-Time Delivery'],
      scale: '120-Acre Transit Terminal Complex',
      completion: 'Under Execution Milestone',
      image: '/images/aura_tower_facade.webp',
      description:
        'Integrated multimodal passenger terminal and civic administrative complex engineered for high-density daily transit with solar-powered canopies, barrier-free pedestrian corridors, and automated traffic management.'
    },
    {
      id: 503,
      title: 'Judicial & District Officers Complex',
      agency: 'Department of Justice & Infrastructure',
      tags: ['Seismic Zone 5 Safety', 'Biometric Access Security', 'LEED Gold Certified'],
      scale: '320,000 Sq. Ft.',
      completion: 'Completed & Handed Over',
      image: '/images/hero_luxury_tower.webp',
      description:
        'Ultra-secure judicial and administrative officer court complex featuring acoustic courtrooms, digital archiving infrastructure, ballistic access control, and eco-friendly rainwater harvesting basins.'
    }
  ];

  const govtBenchmarks = [
    {
      icon: ShieldCheck,
      title: 'Seismic Zone 5 Structural Safety',
      desc: 'Engineered with certified high-tensile TMT steel frames complying with highest national seismic safety codes.'
    },
    {
      icon: Award,
      title: 'IGBC Platinum & Green Benchmarks',
      desc: 'Sustainable public buildings equipped with solar micro-grids, zero liquid discharge STPs, and rainwater systems.'
    },
    {
      icon: Lock,
      title: 'High-Security Civic Architecture',
      desc: 'Multi-layer perimeter access, biometric validation portals, CCTV network surveillance, and secure archive suites.'
    },
    {
      icon: FileCheck,
      title: '100% On-Time EPC Execution',
      desc: 'Proven track record of timely completion and rigorous statutory adherence under CPWD and State PWD standards.'
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#141414] font-montserrat antialiased selection:bg-[#C49D55] selection:text-white">
      {/* ───────────────────────────────────────────────────────────────────
          HERO BANNER HEADER
          - Matches Brand, Residential, Commercial, Township & Completed pages:
            reduced overlay darkness so the architectural background is clearly visible.
         ─────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#C49D55]/30">
        <img
          src="/images/united_commercial.webp"
          alt="Government Civic Infrastructure Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* Soft balanced overlays matching website theme */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C49D55] uppercase block">
            CIVIC & PUBLIC INFRASTRUCTURE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl">
            GOVERNMENT PROJECTS
          </h1>
          <p className="text-[#C49D55] text-xs sm:text-sm font-medium tracking-widest uppercase mt-1">
            State Civic Infrastructure & High-Security Engineering Contracts
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          MAIN SECTION
          - Container Width matching Navbar: max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14
          - Ivory (#F8F6F1) background, Sharp Corners, Champagne Gold (#C49D55)
         ─────────────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F8F6F1]">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 space-y-12 sm:space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
              CIVIC ENGINEERING EXCELLENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141414]">
              State Administrative & <span className="text-[#C49D55] italic font-serif">Civic Infrastructure</span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto my-2" />
            <p className="text-sm sm:text-base text-[#65605A] font-light leading-relaxed pt-1">
              Trusted by government departments and public sector enterprises to deliver seismic-resistant, IGBC green-certified administrative secretariats, transit terminals, and judicial complexes.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {govtProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#C49D55]/30 hover:border-[#C49D55] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#141414]/90 text-[#C49D55] font-semibold text-[10px] uppercase tracking-wider border border-[#C49D55]/30 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-[#C49D55]" />
                        <span>Govt EPC Contract</span>
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] text-[#C49D55] font-semibold uppercase block tracking-wider mb-0.5">
                        {project.agency}
                      </span>
                      <h3 className="font-serif font-normal text-xl sm:text-2xl text-white group-hover:text-[#C49D55] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[#65605A] leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-[#F8F6F1] text-[#141414] text-[10px] font-semibold uppercase border border-[#C49D55]/25"
                        >
                          ✦ {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-200 mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#65605A] uppercase tracking-wider block">Scale & Scope</span>
                    <span className="font-serif font-bold text-sm text-[#141414]">
                      {project.scale}
                    </span>
                  </div>

                  <button
                    onClick={onOpenEnquire}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#141414] hover:bg-[#C49D55] text-white hover:text-[#141414] font-semibold text-xs uppercase tracking-wider border border-[#C49D55]/40 transition-all cursor-pointer shadow-sm"
                  >
                    <span>Govt Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ───────────────────────────────────────────────────────────────────
              PUBLIC SECTOR BENCHMARKS STRIP
             ─────────────────────────────────────────────────────────────────── */}
          <div className="bg-white border border-[#C49D55]/30 p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto space-y-1 mb-8">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                STATUTORY ACCREDITATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414]">
                Public Infrastructure Execution Benchmarks
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {govtBenchmarks.map((bm, idx) => {
                const IconComp = bm.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-[#F8F6F1] border border-[#C49D55]/20 hover:border-[#C49D55] transition-all space-y-2.5"
                  >
                    <div className="w-10 h-10 bg-[#141414] text-[#C49D55] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#141414]">
                      {bm.title}
                    </h4>
                    <p className="text-xs text-[#65605A] font-light leading-relaxed">
                      {bm.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────────────
              PUBLIC SECTOR LIAISON CTA
             ─────────────────────────────────────────────────────────────────── */}
          <div className="bg-[#141414] text-white p-6 sm:p-8 lg:p-10 border border-[#C49D55]/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C49D55] uppercase block">
                PUBLIC TENDERS & INSTITUTIONAL EPC
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Government & Public Sector Procurement Desk
              </h3>
              <p className="text-xs sm:text-sm text-[#B5B5B5] font-light leading-relaxed">
                Connect with our specialized government infrastructure division for pre-qualification dossiers, joint venture consortia, and EPC tender submissions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={onOpenEnquire}
                className="px-7 py-3.5 bg-[#C49D55] hover:bg-[#b08b46] text-[#141414] font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 shadow-lg"
              >
                <span>Connect With Govt Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
