import React from 'react';
import { Building2 } from 'lucide-react';

export default function ContactHeroBanner() {
  return (
    <section className="relative w-full h-[400px] sm:h-[460px] flex items-center justify-center overflow-hidden bg-[#1C1C1A]">
      {/* High-Resolution Corporate Real Estate Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt="United Infracity Corporate Office"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.7] contrast-[1.05]"
        />
        {/* Light Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A] via-[#1C1C1A]/50 to-[#1C1C1A]/30" />
      </div>

      {/* Center-aligned Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-3.5 pt-6">
        
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1A]/80 border border-[#C6A15B]/40 backdrop-blur-md">
          <Building2 className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span className="font-montserrat text-[11px] font-bold uppercase tracking-[0.3em] text-[#C6A15B]">
            UNITED INFRACITY
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
          Contact <span className="italic text-[#C6A15B] font-light">Us</span>
        </h1>

        {/* Subtitle */}
        <p className="font-montserrat text-xs sm:text-sm text-stone-200 font-light max-w-xl leading-relaxed tracking-wide">
          We'd love to hear from you. Reach out for project enquiries, site visits and business collaborations.
        </p>

      </div>
    </section>
  );
}
