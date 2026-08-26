import React from 'react';
import { ShieldCheck, Building2, Sparkles, Award, ArrowRight, CheckCircle2, Compass, Users, MapPin, FileText, Star, GraduationCap, Hotel, Factory, HeartPulse, HardHat } from 'lucide-react';

export default function BrandPage({ onOpenEnquire, onSelectSection, onNavigateHome }) {
  const corporateDetails = [
    {
      label: 'Company Name',
      value: 'M/s United Infracity Private Limited (UIPL)'
    },
    {
      label: 'Parent Group',
      value: 'Awasthi Group of Lucknow'
    },
    {
      label: 'Corporate Identity Number (CIN)',
      value: 'U70102UP2012PTC050901'
    },
    {
      label: 'Registered Office',
      value: '560/109, RWS Compound (Near Lal Hospital), Krishna Nagar, Kanpur Road, Lucknow, Uttar Pradesh - 226023'
    },
    {
      label: 'Incorporation & Legal',
      value: 'Duly incorporated under the Ministry of Corporate Affairs, Companies Act, 1956'
    },
    {
      label: 'Company Motto',
      value: '"Quality, Timely Delivery of Works and Client Satisfaction"'
    }
  ];

  const groupVerticals = [
    {
      icon: Hotel,
      title: 'Luxury Hospitality',
      badge: '5-Star IHG Brand',
      description: 'Owners of Hotel Holiday Inn Lucknow Airport, a prestigious 5-Star Brand managed under IHG (InterContinental Hotels Group), UK - hosting business executives & international guests for over a decade.'
    },
    {
      icon: GraduationCap,
      title: 'K-12 Education',
      badge: 'Seth MR Jaipuria School',
      description: 'Pioneering world-class education with Seth MR Jaipuria School (Kanpur Road Campus, Lucknow), nurturing future leaders through academic excellence and modern infrastructure.'
    },
    {
      icon: Factory,
      title: 'Steel Manufacturing',
      badge: 'Industrial Foundation',
      description: 'Over 40 years of industrial mastery in steel manufacturing, providing heavy-duty structural integrity and robust industrial foundation across sectors.'
    },
    {
      icon: HeartPulse,
      title: 'Healthcare Division',
      badge: 'Community Wellness',
      description: 'Expanding healthcare infrastructure initiatives dedicated to providing state-of-the-art medical services and holistic community health.'
    },
    {
      icon: Building2,
      title: 'Real Estate & Infrastructure',
      badge: 'Urban Landmarks',
      description: 'Developing high-end residential towers, Grade-A commercial centers, and master-planned urban communities engineered with seismic safety and premium finishes.'
    }
  ];

  const designPartners = [
    {
      role: 'Architectural Conceptualization',
      partner: 'The Architect Studio - ABHIKARM',
      desc: 'Expert architectural design teams conceptualizing modern, functional, and aesthetically striking urban facades.'
    },
    {
      role: 'Structural Design & Engineering',
      partner: 'M/s SBC Structures',
      desc: 'Master structural engineers crafting resilient, seismic-resistant building frameworks adhering strictly to NBC codes.'
    }
  ];

  const flagshipProject = {
    title: 'United Orchid Heights',
    location: 'Land No. 6C/GH-2, Vrindavan Yojna Phase-1, Sector 6, Vrindavan, Lucknow',
    overview: 'A premium residential sanctuary featuring 180 luxury flats across 1 tower (2 BHK, 3 BHK, and 3 BHK + Study). Designed with expansive bedrooms, large panoramic cross-ventilation windows, modern attached bathrooms, and private sunlit balconies.',
    landmarks: [
      { name: 'Delhi Public School', distance: '1 Km' },
      { name: 'Shaheed Path Corridor', distance: '3 Km' },
      { name: 'SGPGI Hospital', distance: '4 Km' },
      { name: 'Charbagh Railway Station', distance: '9 Km' },
      { name: 'CCS Lucknow Airport', distance: '10 Km' }
    ],
    facilities: [
      'Stilt & Stack Parking (Awas Vikas Norms)',
      'Community Club & Banquet Hall',
      'Swimming Pool & Kids Play Zone',
      '24/7 Security & CCTV Surveillance',
      'Complete NBC Compliant Fire System',
      'High-Speed Elevators of Reputed Brand',
      'Full Power Backup & Landscaping'
    ]
  };

  const brandJourney = [
    {
      year: 'Over 40 Years Ago',
      title: 'Industrial Genesis',
      detail: 'Group founder Sh. Shiv Shanker Awasthi established a steel mill in Lucknow, laying the cornerstone of Awasthi Group.'
    },
    {
      year: '2012',
      title: 'Incorporation of UIPL',
      detail: 'M/s United Infracity Private Limited (UIPL) incorporated under Ministry of Corporate Affairs (CIN: U70102UP2012PTC050901).'
    },
    {
      year: 'Decade of Hospitality',
      title: '5-Star IHG Partnership',
      detail: 'Developed Hotel Holiday Inn Lucknow Airport, managed under IHG (InterContinental Hotels Group, UK).'
    },
    {
      year: 'K-12 Expansion',
      title: 'Seth MR Jaipuria School',
      detail: 'Launched Seth MR Jaipuria School, Kanpur Road Campus, expanding the group into education excellence.'
    },
    {
      year: 'Present & Beyond',
      title: 'United Orchid Heights & Beyond',
      detail: 'Unveiling flagship residential developments in Sector 6 Vrindavan Yojna, Lucknow with architectural partner ABHIKARM and structural partner SBC Structures.'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Top Hero Banner Header */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        <img
          src="/images/aura_tower_facade.jpg"
          alt="United Infracity Brand Profile Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#D4AF37] uppercase block">
            Awasthi Group Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            ABOUT US
          </h1>

          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* MAIN TWO-COLUMN GRID LAYOUT - Container width matching Navbar */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Corporate Essence & Key Identity */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Corporate Overview</span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15]">
                  The Spirit of <br />
                  <span className="text-[#D4AF37] italic font-serif">UNITED INFRACITY</span>
                </h2>
              </div>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                <strong>M/s United Infracity Private Limited (UIPL)</strong> is a premier construction and infrastructure entity belonging to Lucknow's esteemed <strong>"Awasthi Group"</strong>—a leading business house with a decade-long luxury destination presence in the city.
              </p>

              {/* Main Inspiring Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white group">
                <img
                  src="/images/hero_luxury_tower.jpg"
                  alt="United Infracity Corporate Heritage"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4.5 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                    CORPORATE IDENTITY
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#1A1A1A] mt-0.5">
                    M/s United Infracity Pvt. Ltd.
                  </h4>
                  <p className="text-sm text-stone-600 mt-0.5 font-medium">
                    CIN: U70102UP2012PTC050901
                  </p>
                </div>
              </div>

              {/* Official Company Motto Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-md space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-[#997B20] block">
                  OUR COMPANY MOTTO
                </span>
                <p className="text-stone-900 text-base sm:text-lg italic font-serif leading-relaxed font-semibold">
                  "Quality, Timely Delivery of Works and Client Satisfaction."
                </p>
              </div>

              {/* Registered Office Quick Card */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white border border-[#D4AF37]/30 shadow-lg space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Registered Office</span>
                </div>
                <p className="text-sm text-stone-300 font-light leading-relaxed">
                  560/109, RWS Compound (Near Lal Hospital), Krishna Nagar, Kanpur Road, Lucknow, Uttar Pradesh, India - 226023.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: Detailed Profile Content */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* SECTION 1: COMPANY OVERVIEW & CORPORATE DETAILS */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/20 shadow-sm space-y-6 relative">
                <div className="absolute top-0 left-8 w-16 h-[3px] bg-[#D4AF37]" />
                
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Official Corporate Profile</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                  Company Overview & <span className="text-[#D4AF37] italic font-serif">Legislation</span>
                </h3>

                <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                  <strong>M/s United Infracity Private Limited (UIPL)</strong> is incorporated under the Ministry of Corporate Affairs, Government of India (Companies Act, 1956) with Corporate Identity Number <strong>U70102UP2012PTC050901</strong>.
                </p>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                  Backed by the immense goodwill and strong credibility of its promoters in Lucknow, UIPL has earned a renowned standing in construction, infrastructure, and real estate development. The group has hosted top business executives for over a decade in the luxury hospitality space and is committed to delivering architectural paradigms built on trust, engineering perfection, and statutory compliance under the RERA Act and Uttar Pradesh Awas Evam Vikas Parishad regulations.
                </p>

                {/* Structured Corporate Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {corporateDetails.map((detail, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#FDFBF7] border border-stone-200 space-y-1">
                      <span className="text-xs uppercase font-bold text-[#997B20] tracking-wider block">
                        {detail.label}
                      </span>
                      <p className="text-sm font-semibold text-stone-900 leading-snug">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 2: DIVERSIFIED GROUP VERTICALS */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                    <Building2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Awasthi Group Pillars</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                    Group Legacy & <span className="text-[#D4AF37] italic font-serif">Industry Verticals</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {groupVerticals.map((vert, idx) => {
                    const IconComp = vert.icon;
                    return (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all duration-300 group flex flex-col sm:flex-row items-start gap-5"
                      >
                        <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                          <IconComp className="w-7 h-7 text-[#D4AF37] group-hover:text-white transition-colors" />
                        </div>

                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-serif font-bold text-xl text-stone-900 group-hover:text-[#D4AF37] transition-colors">
                              {vert.title}
                            </h4>
                            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                              {vert.badge}
                            </span>
                          </div>

                          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                            {vert.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: DESIGN & ENGINEERING PARTNERS */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/20 shadow-sm space-y-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                    <HardHat className="w-4 h-4 text-[#D4AF37]" />
                    <span>Technical Excellence</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                    Design & Engineering <span className="text-[#D4AF37] italic font-serif">Partners</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {designPartners.map((item, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#D4AF37]/30 space-y-2">
                      <span className="text-xs uppercase font-bold tracking-widest text-[#997B20] block">
                        {item.role}
                      </span>
                      <h4 className="font-serif font-bold text-lg text-stone-900">
                        {item.partner}
                      </h4>
                      <p className="text-sm text-stone-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 4: FLAGSHIP RESIDENTIAL PROJECT (UNITED ORCHID HEIGHTS) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/30 shadow-md space-y-6 relative">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                    <Star className="w-4 h-4 text-[#D4AF37]" />
                    <span>Flagship Residential Unveiling</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-sm text-[#D4AF37] font-semibold flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{flagshipProject.location}</span>
                  </p>
                </div>

                <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                  {flagshipProject.overview}
                </p>

                {/* Connectivity & Proximity Grid */}
                <div className="space-y-3">
                  <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-stone-800 block">
                    Strategic Vicinity & Connectivity:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {flagshipProject.landmarks.map((lm, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#FDFBF7] border border-stone-200 text-center">
                        <span className="font-serif font-bold text-base text-[#D4AF37] block">{lm.distance}</span>
                        <span className="text-xs text-stone-600 font-medium block">{lm.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Project Amenities */}
                <div className="space-y-3 pt-3 border-t border-stone-100">
                  <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-stone-800 block">
                    Project Amenities & Infrastructure:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {flagshipProject.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-stone-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 5: MILESTONES & JOURNEY */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/20 shadow-sm space-y-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    <span>Milestones of Excellence</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                    Group <span className="text-[#D4AF37] italic font-serif">Journey</span>
                  </h3>
                </div>

                <div className="relative pl-6 sm:pl-8 space-y-6 border-l-2 border-[#D4AF37]/30">
                  {brandJourney.map((step, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#FDFBF7] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors" />
                      
                      <div className="inline-block px-3 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold font-serif mb-1">
                        {step.year}
                      </div>

                      <h4 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#D4AF37] transition-colors">
                        {step.title}
                      </h4>

                      <p className="text-sm text-stone-600 font-light mt-1 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Banner */}
                <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-stone-900 to-stone-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest block">
                      BECOME A PART OF OUR LEGACY
                    </span>
                    <h4 className="font-serif font-bold text-xl text-white mt-0.5">
                      Explore United Infracity Flagship Portfolios
                    </h4>
                  </div>
                  
                  <button
                    onClick={onNavigateHome}
                    className="whitespace-nowrap px-6 py-3 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all cursor-pointer"
                  >
                    View All Projects
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
