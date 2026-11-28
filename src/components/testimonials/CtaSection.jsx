import React from 'react';
import { ArrowRight, PhoneCall, Building2 } from 'lucide-react';

export default function CtaSection({ onExploreProjectsClick, onOpenEnquire }) {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#141414] text-white relative overflow-hidden border-t border-[#C49D55]/20">
      
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#C49D55]/10 via-[#C49D55]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 text-center relative z-10 space-y-5 sm:space-y-6">
        
        {/* Subtle Brand Vector Symbol */}
        <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-[#C49D55]/10 border border-[#C49D55]/30 text-[#C49D55] shadow-lg mx-auto">
          <Building2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.25]" />
        </div>

        {/* Heading & Subheading */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-normal text-white leading-tight">
            Ready to Build Your <span className="italic font-normal text-[#C49D55]">Dream Home?</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm md:text-base font-light text-stone-300 leading-relaxed max-w-xl mx-auto tracking-wide">
            Discover thoughtfully designed luxury residences crafted for generations to come.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1">
          
          {/* Luxury Gold Button: Explore Projects → */}
          <button
            onClick={onExploreProjectsClick}
            className="group relative inline-flex items-center gap-3 px-7 py-3 bg-[#C49D55] hover:bg-[#B38E46] text-white font-montserrat text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(196,157,85,0.35)] cursor-pointer active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Secondary Action: Private Consultation */}
          <button
            onClick={onOpenEnquire}
            className="group inline-flex items-center gap-3 px-7 py-3 bg-white/5 hover:bg-white/10 text-white border border-[#C49D55]/40 hover:border-[#C49D55] font-montserrat text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C49D55]" />
            <span>Schedule Consultation</span>
          </button>

        </div>

        {/* Corporate Trust Footer Tagline */}
        <div className="pt-4 sm:pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-montserrat text-stone-400 font-light gap-2 sm:gap-4">
          <span>United Infracity Private Limited • Real Estate Redefined</span>
          <span>RERA Registered & Compliant • Luxury Township & Commercial Developers</span>
        </div>

      </div>
    </section>
  );
}
