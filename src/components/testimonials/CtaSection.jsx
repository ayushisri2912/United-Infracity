import React from 'react';
import { ArrowRight, PhoneCall, Building2 } from 'lucide-react';

export default function CtaSection({ onExploreProjectsClick, onOpenEnquire }) {
  return (
    <section className="py-24 sm:py-36 bg-[#141413] text-white relative overflow-hidden border-t border-[#C6A15B]/20">
      
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#C6A15B]/10 via-[#C6A15B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-10">
        
        {/* Subtle Brand Vector Symbol */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 text-[#C6A15B] shadow-2xl mx-auto">
          <Building2 className="w-8 h-8 stroke-[1.25]" />
        </div>

        {/* Heading & Subheading */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-white leading-tight">
            Ready to Build Your <span className="italic font-normal text-[#C6A15B]">Dream Home?</span>
          </h2>
          <p className="font-montserrat text-sm sm:text-base md:text-lg font-light text-stone-300 leading-relaxed max-w-xl mx-auto tracking-wide">
            Discover thoughtfully designed residences crafted for generations.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          
          {/* Luxury Gold Outlined Button: Explore Projects → */}
          <button
            onClick={onExploreProjectsClick}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#1C1C1A] font-montserrat text-xs font-bold uppercase tracking-[0.25em] transition-all duration-500 shadow-xl hover:shadow-[0_10px_35px_rgba(198,161,91,0.35)] cursor-pointer active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Secondary Action: Private Consultation */}
          <button
            onClick={onOpenEnquire}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 font-montserrat text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Schedule Consultation</span>
          </button>

        </div>

        {/* Corporate Trust Footer Tagline */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-montserrat text-stone-400 font-light gap-4">
          <span>United Infracity Private Limited • Real Estate Redefined</span>
          <span>RERA Registered & Compliant • Luxury Township & Commercial Developers</span>
        </div>

      </div>
    </section>
  );
}
