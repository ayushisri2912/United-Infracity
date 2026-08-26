import React from 'react';
import { Sparkles, Globe, Mail, ShieldCheck, Award, ArrowRight, Building2, Briefcase, GraduationCap, Hotel, Factory, HeartPulse, HardHat } from 'lucide-react';

export default function ManagementPage({ onOpenEnquire, onNavigateHome }) {
  const directors = [
    {
      id: 1,
      name: 'Sh. Atul Awasthi',
      title: 'Director',
      roleBadge: 'Executive Board Director',
      image: '/images/management_ceo.jpg',
      age: '44 Years',
      education: 'Graduate from Lucknow University',
      bio: 'Joined the Group after graduation and steers key industrial & civil operations. He currently oversees Steel Manufacturing Operations, Healthcare division, and Real Estate Development Infrastructure of the Group.',
      portfolio: [
        'Steel Manufacturing Operations',
        'Healthcare Division',
        'Real Estate Infrastructure'
      ],
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Sh. Anuj Awasthi',
      title: 'Director',
      roleBadge: 'Executive Board Director',
      image: '/images/management_director.jpg',
      age: '42 Years',
      education: 'Biotechnology Graduate from UK',
      bio: 'Joined the Group after graduating in Biotechnology from the UK. He spearheads the Group\'s luxury hospitality portfolio along with K-12 educational institutions, establishing landmark service excellence.',
      portfolio: [
        'Hospitality Division (Hotel Holiday Inn Lucknow Airport - IHG)',
        'Education Division (Seth MR Jaipuria School, Kanpur Road Campus)'
      ],
      linkedin: '#'
    }
  ];

  const executivePillars = [
    {
      icon: Factory,
      title: 'Industrial & Manufacturing Mastery',
      desc: 'Heavy industrial production and steel mill governance driving robust structural engineering.'
    },
    {
      icon: Hotel,
      title: 'Global Hospitality Standards',
      desc: 'Partnering with IHG (InterContinental Hotels Group, UK) for 5-Star Hotel Holiday Inn Lucknow Airport.'
    },
    {
      icon: GraduationCap,
      title: 'Educational Excellence',
      desc: 'Nurturing premier learning environments with Seth MR Jaipuria School, Kanpur Road Campus.'
    },
    {
      icon: HardHat,
      title: 'Infrastructure & Healthcare',
      desc: 'Delivering landmark residential developments and state-of-the-art community healthcare hubs.'
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
          <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#D4AF37] uppercase block">
            Executive Leadership & Board
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            MANAGEMENT
          </h1>

          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* MAIN CONTENT SECTION - Container width matching Navbar */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Section Heading Above Grid */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Board of Directors</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
              Executive <span className="text-[#D4AF37] italic font-serif">Leadership</span>
            </h2>

            <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed">
              Guided by the vision of Awasthi Group, our executive directors steer United Infracity's diversified operations across Real Estate Infrastructure, Hospitality, Education, Steel Manufacturing, and Healthcare.
            </p>
          </div>

          {/* TWO PROMINENT EXECUTIVE DIRECTOR CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {directors.map((director) => (
              <div
                key={director.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header & Profile Image */}
                  <div className="relative h-80 sm:h-96 overflow-hidden bg-stone-900">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Role Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 bg-[#1A1A1A]/95 backdrop-blur-md text-[#D4AF37] font-bold text-xs uppercase tracking-wider rounded-full border border-[#D4AF37]/40 shadow-sm">
                        {director.roleBadge}
                      </span>
                    </div>

                    {/* Bottom Image Overlay Details */}
                    <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                          {director.name}
                        </h3>
                        <span className="px-3 py-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold font-serif">
                          Age: {director.age}
                        </span>
                      </div>

                      <p className="text-sm text-stone-300 font-medium flex items-center gap-2 pt-0.5">
                        <GraduationCap className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{director.education}</span>
                      </p>
                    </div>
                  </div>

                  {/* Card Body Details */}
                  <div className="p-6 sm:p-8 space-y-5">
                    {/* Title with Gold Line Accent */}
                    <div className="border-l-3 border-[#D4AF37] pl-4 py-0.5">
                      <span className="text-[#997B20] text-xs font-bold uppercase tracking-wider block">
                        Executive Title & Role
                      </span>
                      <h4 className="font-serif font-bold text-xl text-stone-900">
                        {director.title} — United Infracity Pvt. Ltd.
                      </h4>
                    </div>

                    {/* Biography */}
                    <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                      {director.bio}
                    </p>

                    {/* Executive Portfolio Division List */}
                    <div className="space-y-2.5 pt-2 border-t border-stone-100">
                      <span className="text-xs uppercase font-bold text-stone-800 tracking-wider block">
                        Portfolio Responsibilities:
                      </span>
                      <div className="space-y-2">
                        {director.portfolio.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDFBF7] border border-stone-200 text-sm font-semibold text-stone-800">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-stone-400 tracking-widest">
                    Awasthi Group Director
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={onOpenEnquire}
                      className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-[#D4AF37] text-white hover:text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact Desk</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* EXECUTIVE GOVERNANCE & SECTOR PILLARS GRID */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/20 shadow-sm space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Strategic Oversight</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Multi-Sector <span className="text-[#D4AF37] italic font-serif">Governance</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {executivePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="p-6 rounded-xl bg-[#FDFBF7] border border-stone-200 space-y-2">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-stone-900">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Corporate CTA Section */}
          <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-[#D4AF37]/30 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest block">
                CORPORATE GOVERNANCE & PRESTIGE
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                Interested in Executive Partnerships with United Infracity?
              </h3>
              <p className="text-stone-400 text-sm font-light max-w-xl">
                Connect directly with our directorate desk for commercial pre-leasing, infrastructure joint ventures, and strategic acquisitions.
              </p>
            </div>

            <button
              onClick={onOpenEnquire}
              className="whitespace-nowrap px-8 py-4 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Enquire Executive Desk
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
