import React from 'react';
import { 
  Sun, 
  Users, 
  Waves, 
  ShieldCheck, 
  Trees, 
  Building2, 
  Car, 
  Cctv, 
  Dumbbell, 
  Zap, 
  Landmark 
} from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      number: '01',
      icon: Sun,
      title: 'Space & Natural Light',
      desc: 'Cross-ventilated 3 BHK layouts with wide panoramic balconies designed to welcome maximum daylight and fresh air.',
      tag: '3 BHK & 3 BHK+S'
    },
    {
      number: '02',
      icon: Users,
      title: 'Shared Moments & Gatherings',
      desc: 'An inviting setting for community celebrations and cherished everyday moments at the grand banquet hall and landscaped lawns.',
      tag: 'Clubhouse & Banquet'
    },
    {
      number: '03',
      icon: Waves,
      title: 'Active Living & Wellness',
      desc: 'World-class swimming pool, fully equipped modern gymnasium, and a vibrant kids\' play park to recharge and unwind.',
      tag: 'Pool, Gym & Sports'
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: 'Gated Security & Smart Living',
      desc: '24x7 smart CCTV surveillance, gated entrance with boom barriers, EV charging stations, and full DG power backup.',
      tag: 'Peace of Mind'
    }
  ];

  const microAmenities = [
    { name: 'Kids Park', icon: Trees },
    { name: 'Grand Clubhouse', icon: Building2 },
    { name: 'Swimming Pool', icon: Waves },
    { name: 'Covered Car Parking', icon: Car },
    { name: '24x7 CCTV Security', icon: Cctv },
    { name: 'Modern Gymnasium', icon: Dumbbell },
    { name: 'EV Charging Stations', icon: Zap },
    { name: 'Banquet Hall', icon: Landmark }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-[#F8F2E8] relative border-t border-b border-[#B9953E]/20 overflow-hidden">
      {/* Subtle Background Glow & Orchid Accents matching About Section */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#B9953E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#EDE2D1]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container - Exactly matches Navbar max-w-[1550px] and horizontal padding */}
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* 1. Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          {/* Top Badge / Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B9953E]/10 border border-[#B9953E]/25 text-[#A07828]">
            <svg className="w-3.5 h-3.5 text-[#B9953E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C12 2 8 6 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 6 12 2 12 2Z" fill="#B9953E" fillOpacity="0.2" />
              <path d="M12 15V22" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-semibold tracking-widest uppercase">
              LIFESTYLE & LIVING
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-[#29221F] leading-tight tracking-tight">
            Designed Around the Way You Live
          </h2>

          {/* Subheading Highlight */}
          <p className="font-serif italic text-2xl sm:text-3xl text-[#B9953E] font-normal mt-1 block">
            Space • Light • Comfort
          </p>

          {/* Subtitle Paragraph */}
          <p className="text-[#29221F]/75 text-sm sm:text-base font-light leading-relaxed max-w-[680px] mx-auto pt-1">
            Spaces that welcome natural light, encourage effortless movement and give every member of the family room to feel at home.
          </p>
        </div>

        {/* 2. 4-Pillar Interactive Cards Grid - Width aligned with Navbar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-[#B9953E]/25 p-6 sm:p-7 shadow-xs hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(185,149,62,0.22)] hover:border-[#B9953E] transition-all duration-300 ease-out group flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative Soft Corner Accent on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#B9953E]/10 via-transparent to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Content */}
                <div className="space-y-4 relative z-10">
                  {/* Minimal Gold Outline Icon Inside 44x44 Badge */}
                  <div className="w-11 h-11 rounded-xl bg-[#B9953E]/10 border border-[#B9953E]/25 text-[#B9953E] flex items-center justify-center group-hover:bg-[#B9953E] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-xl text-[#29221F] group-hover:text-[#B9953E] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#29221F]/80 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Row: Chip/Tag + Watermark Number */}
                <div className="pt-6 mt-6 border-t border-[#B9953E]/15 flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-[#B9953E]/10 text-[#A07828] border border-[#B9953E]/25">
                    {pillar.tag}
                  </span>

                  {/* Watermark Number */}
                  <span className="font-serif text-3xl font-bold text-[#B9953E]/20 group-hover:text-[#B9953E]/40 select-none transition-colors">
                    {pillar.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Bottom Horizontal Amenities Strip (Brochure Ticker) - Width aligned with Navbar */}
        <div className="mt-12 sm:mt-16 w-full">
          <div className="rounded-2xl bg-[#EDE2D1]/50 backdrop-blur-md border border-[#B9953E]/25 p-5 sm:p-6 shadow-sm">
            {/* Header label inside strip */}
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
              <div className="h-[1px] w-8 sm:w-16 bg-[#B9953E]/30" />
              <h4 className="font-serif text-sm sm:text-base font-semibold text-[#29221F] tracking-wide text-center">
                Premium Amenities <span className="text-[#B9953E] font-normal italic">• Everyday Comfort</span>
              </h4>
              <div className="h-[1px] w-8 sm:w-16 bg-[#B9953E]/30" />
            </div>

            {/* 8 Amenities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
              {microAmenities.map((amenity, idx) => {
                const AmenityIcon = amenity.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center p-3 rounded-xl bg-white/80 hover:bg-white border border-[#B9953E]/20 hover:border-[#B9953E]/60 transition-all duration-200 group shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#B9953E]/10 text-[#B9953E] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <AmenityIcon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <span className="text-[11px] font-medium text-[#29221F]/85 group-hover:text-[#29221F] leading-tight">
                      {amenity.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
