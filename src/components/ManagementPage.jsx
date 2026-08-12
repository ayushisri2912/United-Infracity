import React from 'react';
import { Sparkles, Globe, Mail, ShieldCheck, Award, ArrowRight, Building2, ChevronRight } from 'lucide-react';

export default function ManagementPage({ onOpenEnquire, onNavigateHome }) {
  const teamMembers = [
    {
      id: 1,
      name: 'Vikramaditya Singhania',
      title: 'Chief Executive Officer (CEO)',
      roleBadge: 'Executive Board',
      image: '/images/management_ceo.jpg',
      bio: 'Over 20 years of strategic real estate leadership. Specializes in multi-acre township master planning, corporate growth, and institutional joint ventures.',
      education: 'MBA - IIM Ahmedabad | B.Tech Civil',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Rajeshwari Oberoi',
      title: 'Project Director - Luxury Residential',
      roleBadge: 'Operations Lead',
      image: '/images/management_director.jpg',
      bio: 'Pioneered signature high-rise residential towers with biophilic architecture, zero-defect construction standards, and 100% RERA compliance.',
      education: 'M.Arch - School of Planning & Architecture',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Ananya Malhotra',
      title: 'Chief Financial Officer (CFO)',
      roleBadge: 'Finance & Strategy',
      image: '/images/management_cfo.jpg',
      bio: 'Manages corporate financial governance, capital allocation, and debt-free project structuring across 5M+ sq. ft. of commercial and residential portfolios.',
      education: 'Chartered Accountant (FCA) | CFA',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Sameer Verma',
      title: 'VP - Civil Engineering & Quality Assurance',
      roleBadge: 'Engineering Lead',
      image: '/images/hero_luxury_tower.jpg',
      bio: 'Leads structural engineering, seismic safety protocols, and green building LEED certifications across flagship high-rise commercial hubs.',
      education: 'M.Tech Structural Engineering - IIT Delhi',
      linkedin: '#'
    },
    {
      id: 5,
      name: 'Devendra Patel',
      title: 'Chief Technology Officer (CTO)',
      roleBadge: 'PropTech & Innovation',
      image: '/images/aura_tower_facade.jpg',
      bio: 'Spearheads smart-home IoT integrations, automated building management systems, and eco-friendly solar grid technologies.',
      education: 'B.Tech Computer Science - BITS Pilani',
      linkedin: '#'
    },
    {
      id: 6,
      name: 'Kavita Sharma',
      title: 'Head of Customer Experience & Relations',
      roleBadge: 'Patron Relations',
      image: '/images/united_residences.jpg',
      bio: 'Drives white-glove concierge services, transparent possession workflows, and dedicated patron management for over 6,000+ satisfied families.',
      education: 'M.Sc Hospitality & Corporate Relations',
      linkedin: '#'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Top Hero Banner Header: MANAGEMENT */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        <img
          src="/images/aura_tower_facade.jpg"
          alt="United Infracity Management Team Header"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        
        {/* Dark Overlay for high legibility */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        {/* Centered Overlay Content: MANAGEMENT */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            MANAGEMENT
          </h1>

          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading Above Grid */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Board & Directors</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
              The Team <span className="text-[#D4AF37] italic font-serif">Driving Innovation</span>
            </h2>

            <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
              Meet the visionary corporate leaders and engineering strategists shaping United Infracity's landmark portfolio of smart townships, Grade-A commercial centers, and luxury residential sanctuaries.
            </p>
          </div>

          {/* TEAM PROFILE GRID (Card-Based Elements) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-72 overflow-hidden bg-stone-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Role Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#1A1A1A]/90 backdrop-blur-md text-[#D4AF37] font-bold text-[10px] uppercase tracking-wider rounded-full border border-[#D4AF37]/30 shadow-sm">
                        {member.roleBadge}
                      </span>
                    </div>

                    {/* Bottom Image Overlay Details */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[11px] text-stone-300 font-medium mt-0.5">
                        {member.education}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    {/* Title with Subtle Gold Accent */}
                    <div className="border-l-2 border-[#D4AF37] pl-3 py-0.5">
                      <span className="text-[#997B20] text-xs font-bold uppercase tracking-wider block">
                        {member.title}
                      </span>
                    </div>

                    {/* Biography */}
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                    United Leadership
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-white text-stone-700 flex items-center justify-center transition-colors"
                      title={`Connect with ${member.name}`}
                    >
                      <Globe className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={onOpenEnquire}
                      className="w-8 h-8 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-white text-stone-700 flex items-center justify-center transition-colors"
                      title={`Contact Executive Desk for ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Corporate CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-[#D4AF37]/30 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest block">
                CORPORATE GOVERNANCE & PRESTIGE
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                Interested in Partnering with United Infracity?
              </h3>
              <p className="text-stone-400 text-xs font-light max-w-xl">
                Connect directly with our executive management desk for institutional joint ventures, land acquisitions, and commercial pre-leasing.
              </p>
            </div>

            <button
              onClick={onOpenEnquire}
              className="whitespace-nowrap px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Enquire Executive Desk
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
