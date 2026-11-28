import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export default function FeaturedNewsSection({ featuredNews, onSelectNews }) {
  if (!featuredNews) return null;

  return (
    <section className="pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 bg-[#FAF8F5]">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
          <span className="w-8 h-[1px] bg-[#C5A059]" />
          <span className="font-montserrat text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
            FEATURED HEADLINE
          </span>
        </div>

        {/* Large Featured News Card (Split 2-Column: 7 cols Image, 5 cols Details as in 2nd image) */}
        <div 
          onClick={() => onSelectNews(featuredNews)}
          className="group bg-white rounded-none overflow-hidden border border-[#E5E5E5] hover:border-[#C5A059] shadow-xs hover:shadow-[0_16px_40px_rgba(197,160,89,0.12)] transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
        >
          {/* LEFT SIDE: Architectural Image (lg:col-span-7 as requested) */}
          <div className="lg:col-span-7 relative overflow-hidden min-h-[360px] sm:min-h-[480px] lg:min-h-full bg-stone-900">
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.98]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
            
            <div className="absolute top-5 left-5">
              <span className="px-3.5 py-1.5 bg-[#111111]/90 backdrop-blur-md text-[#D4B675] font-montserrat text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase border border-[#C5A059]/40 shadow-sm">
                {featuredNews.category}
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: News Details (lg:col-span-5 width matching 2nd image) */}
          <div className="lg:col-span-5 p-6 sm:p-7 lg:p-8 xl:p-9 flex flex-col justify-between space-y-4 sm:space-y-5">
            
            <div className="space-y-3.5">
              
              {/* Category Badge & Date / Location Bar */}
              <div className="flex flex-wrap items-center gap-2.5 pb-2 border-b border-[#EAE3D5]">
                <div className="flex items-center gap-1.5 text-xs font-montserrat text-[#777777] font-normal">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{featuredNews.date}</span>
                </div>
                <span className="text-[#C5A059]/50">•</span>
                <div className="flex items-center gap-1.5 text-xs font-montserrat text-[#777777] font-normal">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Vrindavan Yojna, Lucknow</span>
                </div>
              </div>

              {/* Large Prominent Headline */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[30px] xl:text-[32px] font-normal text-[#111111] leading-[1.2] tracking-tight group-hover:text-[#C5A059] transition-colors duration-300">
                {featuredNews.title}
              </h2>

              {/* Primary Lead Description */}
              <p className="font-montserrat text-sm sm:text-[14.5px] text-[#333333] font-normal leading-relaxed">
                {featuredNews.description}
              </p>

              {/* Extended Downward Content - Legacy & Vision */}
              <p className="font-montserrat text-xs sm:text-[13px] text-[#555555] font-light leading-relaxed">
                Backed by four decades of business legacy of Lucknow’s esteemed Awasthi Group, United Infracity Private Limited (UIPL) is setting a pioneering milestone in modern urban infrastructure. Conceived as an integrated smart ecosystem, the project seamlessly combines luxury residential developments, high-street commercial hubs, and nature-centric community spaces.
              </p>

              {/* Extended Downward Content - Engineering & Connectivity */}
              <p className="font-montserrat text-xs sm:text-[13px] text-[#555555] font-light leading-relaxed">
                Engineered with earthquake-resistant Grade-A RCC structural framing, sustainable rainwater harvesting systems, and solar-enabled facilities, this project ensures signal-free proximity to Shaheed Path, SGPGI Hospital, and CCS Lucknow Airport.
              </p>

              {/* Feature Highlights Grid from Home Page */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2.5 border-t border-[#EAE3D5]">
                <div className="flex items-center gap-2 text-xs text-[#222222] font-medium font-montserrat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>75-Acre Smart Eco-Township</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#222222] font-medium font-montserrat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>100% RERA & UPAVP Approved</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#222222] font-medium font-montserrat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>10-Acre Landscaped Botanical Park</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#222222] font-medium font-montserrat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Multi-Tier Security & Club Infrastructure</span>
                </div>
              </div>

            </div>

            {/* Read More Button Footer */}
            <div className="pt-3.5 border-t border-[#EAE3D5] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[#777777] font-montserrat">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span>Official Corporate Release • Awasthi Group</span>
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] group-hover:bg-[#111111] text-white font-montserrat text-xs font-semibold uppercase tracking-wider transition-colors duration-300 shadow-xs rounded-none">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
