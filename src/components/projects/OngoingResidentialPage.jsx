import React, { useState } from 'react';
import { MapPin, ArrowUpRight, BedDouble, Maximize2, ShieldCheck, Sparkles, Building2, ChevronRight, Download, Calendar, CheckCircle2, Car, Dumbbell, Waves, Users, ShoppingBag, Shield, Zap, Flame, Trees, Layers, Compass, HardHat } from 'lucide-react';

export default function OngoingResidentialPage({ onOpenEnquire, onNavigateHome }) {
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const orchidHeightsDetails = {
    id: 100,
    title: 'United Orchid Heights',
    developer: 'M/s United Infracity Private Limited (UIPL - Awasthi Group)',
    location: 'Land No. 6C/GH-2, Vrindavan Yojna Phase-1, Sector 6, Lucknow',
    tag: 'Flagship Residential Landmark',
    scale: '180 Luxury Flats in 1 High-Rise Tower',
    configs: '2 BHK, 3 BHK & 3 BHK + Study Apartments',
    possession: 'Projected FY 2031-32 (June 31)',
    price: 'On Request / RERA Registered',
    image: '/images/hero_luxury_tower.jpg',
    architect: 'The Architect Studio - ABHIKARM',
    structural: 'M/s SBC Structures',
    compliance: '100% RERA & UP Awas Evam Vikas Parishad Compliant',
    overview: 'United Orchid Heights is an exclusive residential landmark unveiled by M/s United Infracity Private Limited (Awasthi Group). Spanning 180 luxury apartments in a single grand tower, each residence features expansive bedrooms, extra-large panoramic windows for superior cross-ventilation, modern attached bathrooms, and sunlit private balconies for maximum comfort.',
    landmarks: [
      { name: 'Delhi Public School (DPS)', distance: '1 Km' },
      { name: 'Shaheed Path Corridor', distance: '3 Km' },
      { name: 'SGPGI Hospital', distance: '4 Km' },
      { name: 'Charbagh Railway Station', distance: '9 Km' },
      { name: 'Chaudhary Charan Singh Airport', distance: '10 Km' }
    ],
    amenities: [
      { icon: Users, title: 'Community Club', desc: 'State-of-the-art club for organizing events & gatherings' },
      { icon: Waves, title: 'Swimming Pool', desc: 'Temperature-controlled lap pool with sun lounge deck' },
      { icon: Dumbbell, title: 'Fully Equipped Gymnasium', desc: 'Modern fitness suite with advanced workout equipment' },
      { icon: Building2, title: 'Dedicated Banquet Hall', desc: 'Spacious air-conditioned hall for celebrations' },
      { icon: Sparkles, title: 'Kids Play Area', desc: 'Safe, dedicated outdoor & indoor play park for children' },
      { icon: ShoppingBag, title: 'Stilt Grocery Shops', desc: 'Convenience daily-needs retail outlets on stilt floor' },
      { icon: Shield, title: '24/7 Security & CCTV', desc: 'Complete multi-tier CCTV surveillance & security guards' },
      { icon: ChevronRight, title: 'High-Speed Branded Lifts', desc: 'Passenger & stretcher elevators of reputed brand' },
      { icon: Zap, title: '100% Power Backup', desc: 'Sufficient power backup support for all common areas & flats' },
      { icon: Flame, title: 'NBC Compliant Fire System', desc: 'Complete fire-fighting system per National Building Code' },
      { icon: Car, title: 'Stack & Norm Parking', desc: 'Stack parking and ample bays per Awas Vikas norms' },
      { icon: Trees, title: 'Landscaped CC Roads', desc: 'Rich green belts, CC roads & grand ornamental entrance gate' }
    ],
    specifications: [
      {
        area: 'Living / Dining / Corridors / Bedrooms / Study / Kitchen',
        spec: 'Premium Vitrified Tiles of reputed brand'
      },
      {
        area: 'Toilets',
        spec: 'Quality Ceramic Tiles on Floor & Walls'
      },
      {
        area: 'Wall & Ceiling Finishes',
        spec: 'Acrylic Emulsion Paint / OBD on walls & ceiling respectively'
      },
      {
        area: 'Lift Lobbies / Architrave Work Staircase',
        spec: 'Stone & Tile work and AEP/OBD on walls & ceiling'
      },
      {
        area: 'External Façade',
        spec: 'Weather-resistant External Cement-based Paint'
      }
    ]
  };

  const otherResidentialProjects = [
    {
      id: 101,
      title: 'Aura Grande Residency',
      location: 'Golf Course Extension, Prime Sector 65',
      price: 'Starting ₹1.95 Cr*',
      statusBadge: 'Under Construction 2027',
      statusColor: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
      specs: '3 & 4 BHK Ultra-Luxury Condos',
      area: '2,450 - 3,900 Sq. Ft.',
      image: '/images/united_residences.jpg',
      tag: 'Flagship Sky Living',
      description: 'Ultra-luxurious high-rise residences featuring private elevator foyers, temperature-controlled rooftop infinity pool, and panoramic golf course views.'
    },
    {
      id: 102,
      title: 'The Celestial Villas',
      location: 'Expressway Golf Enclave Sector 128',
      price: 'Starting ₹3.50 Cr*',
      statusBadge: 'Under Construction 2026',
      statusColor: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
      specs: '4 & 5 BHK Independent Luxury Villas',
      area: '4,200 - 6,500 Sq. Ft.',
      image: '/images/hero_luxury_tower.jpg',
      tag: 'Bespoke Villas',
      description: 'Private estate villas featuring private plunge pools, home automation systems, manicured rooftop sun decks, and personal basement parking.'
    },
    {
      id: 103,
      title: 'United Grand Sky Condos',
      location: 'Central Metro Tech Corridor',
      price: 'Starting ₹1.45 Cr*',
      statusBadge: 'Possession Q3 2026',
      statusColor: 'bg-[#D4AF37]/20 text-[#997B20] border-[#D4AF37]/40',
      specs: '2 & 3 BHK Smart Residences',
      area: '1,350 - 2,100 Sq. Ft.',
      image: '/images/aura_tower_facade.jpg',
      tag: 'Smart Urban Living',
      description: 'Next-generation smart apartments equipped with voice-activated climate control, biometric security access, and 5-tier concierge services.'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Hero Header Banner */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        <img
          src="/images/united_residences.jpg"
          alt="Ongoing Residential Banner"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#D4AF37] uppercase block">
            Official Project Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            ONGOING RESIDENTIAL
          </h1>
          <p className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            United Orchid Heights & Luxury Sky Sanctuaries
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* Main Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-14">
          
          {/* FLAGSHIP SHOWCASE: UNITED ORCHID HEIGHTS */}
          <div className="bg-white rounded-3xl border-2 border-[#D4AF37]/40 shadow-xl overflow-hidden relative">
            <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D4AF37]/30">
              <div className="space-y-1">
                <span className="px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/40 inline-block">
                  ✦ Flagship Residential Landmark
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-1">
                  {orchidHeightsDetails.title}
                </h2>
                <p className="text-sm text-stone-300 font-medium flex items-center gap-1.5 pt-0.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>{orchidHeightsDetails.location}</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenEnquire}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Enquire Project Desk
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 space-y-10">
              
              {/* Top Overview & Hero Image Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-5">
                  <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#D4AF37]/30 space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#997B20] block">
                      Developer & Group Legacy
                    </span>
                    <p className="text-base font-bold text-stone-900">
                      {orchidHeightsDetails.developer}
                    </p>
                  </div>

                  <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                    {orchidHeightsDetails.overview}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-center">
                      <span className="text-[10px] uppercase font-bold text-stone-500 block">Structure</span>
                      <span className="font-bold text-sm text-stone-900 block mt-0.5">{orchidHeightsDetails.scale}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-center">
                      <span className="text-[10px] uppercase font-bold text-stone-500 block">Configurations</span>
                      <span className="font-bold text-sm text-stone-900 block mt-0.5">{orchidHeightsDetails.configs}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-center">
                      <span className="text-[10px] uppercase font-bold text-stone-500 block">Possession</span>
                      <span className="font-bold text-sm text-[#D4AF37] block mt-0.5">{orchidHeightsDetails.possession}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/30 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#997B20] block flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" /> Architectural Partner
                      </span>
                      <p className="text-xs font-bold text-stone-900">{orchidHeightsDetails.architect}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/30 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#997B20] block flex items-center gap-1">
                        <HardHat className="w-3.5 h-3.5" /> Structural Engineer
                      </span>
                      <p className="text-xs font-bold text-stone-900">{orchidHeightsDetails.structural}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white group h-[380px] sm:h-[440px]">
                    <img
                      src={orchidHeightsDetails.image}
                      alt="United Orchid Heights"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                      <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block">
                        RERA & LEGAL NORMS
                      </span>
                      <p className="text-xs text-stone-800 font-semibold mt-0.5">
                        {orchidHeightsDetails.compliance}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* LOCATION CONNECTIVITY STRIP */}
              <div className="space-y-4 pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                    Location Connectivity & <span className="text-[#D4AF37] italic font-serif">Proximity Map</span>
                  </h4>
                  <span className="text-xs font-bold text-[#997B20] uppercase tracking-widest">
                    Sector 6 Vrindavan Yojna
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {orchidHeightsDetails.landmarks.map((lm, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#D4AF37]/30 text-center space-y-1 hover:border-[#D4AF37] transition-all">
                      <span className="font-serif font-bold text-2xl text-[#D4AF37] block">{lm.distance}</span>
                      <span className="text-xs text-stone-700 font-semibold block">{lm.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AMENITIES GRID */}
              <div className="space-y-6 pt-4 border-t border-stone-200">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#997B20]">
                    WORLD-CLASS INFRASTRUCTURE
                  </span>
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                    Amenities & <span className="text-[#D4AF37] italic font-serif">Facilities Grid</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {orchidHeightsDetails.amenities.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="p-4.5 rounded-2xl bg-[#FDFBF7] border border-stone-200 flex items-start gap-3 hover:border-[#D4AF37] transition-all">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5">
                          <h5 className="font-serif font-bold text-sm text-stone-900">{item.title}</h5>
                          <p className="text-xs text-stone-600 font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SPECIFICATIONS TABLE */}
              <div className="space-y-4 pt-4 border-t border-stone-200">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#997B20]">
                    MATERIALS & FINISHES
                  </span>
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                    Official Furnishing <span className="text-[#D4AF37] italic font-serif">Specifications</span>
                  </h4>
                </div>

                <div className="bg-[#FDFBF7] rounded-2xl border border-[#D4AF37]/30 overflow-hidden shadow-sm">
                  <div className="divide-y divide-stone-200">
                    {orchidHeightsDetails.specifications.map((row, idx) => (
                      <div key={idx} className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-2 items-center hover:bg-white transition-colors">
                        <div className="sm:col-span-5 font-serif font-bold text-sm text-stone-900 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span>{row.area}</span>
                        </div>
                        <div className="sm:col-span-7 text-xs sm:text-sm text-stone-700 font-medium pl-6 sm:pl-0">
                          {row.spec}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* OTHER ONGOING RESIDENTIAL SANCTUARIES */}
          <div className="space-y-8 pt-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Additional Developments</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Explore Other <span className="text-[#D4AF37] italic font-serif">Residential Sanctuaries</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherResidentialProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#1A1A1A]/90 text-[#D4AF37] font-bold text-[10px] uppercase rounded-full border border-[#D4AF37]/30">
                        {project.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-stone-300 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-stone-600 leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                      <span className="font-serif font-bold text-[#D4AF37] text-sm">{project.price}</span>
                      <button
                        onClick={onOpenEnquire}
                        className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
