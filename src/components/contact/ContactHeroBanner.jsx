import React from 'react';
import { Building2 } from 'lucide-react';

export default function ContactHeroBanner() {
  return (
    <section className="relative w-full h-[400px] sm:h-[450px] flex items-center justify-center overflow-hidden bg-[#141414]">
      {/* High-Resolution Corporate Real Estate Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt="United Infracity Corporate Office"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
        />
        {/* Dark Luxury Gradient Overlay matching Home Page */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/65 to-[#141414]/35" />
      </div>

      {/* Center-aligned Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center space-y-3 pt-6">
        
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#141414]/80 border border-[#C49D55]/40 backdrop-blur-md">
          <Building2 className="w-3.5 h-3.5 text-[#C49D55]" />
          <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C49D55]">
            UNITED INFRACITY
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
          Contact <span className="italic text-[#C49D55]">Us</span>
        </h1>

        {/* Subtitle */}
        <p className="font-montserrat text-xs sm:text-sm text-stone-200 font-light max-w-xl leading-relaxed tracking-wide">
          We'd love to hear from you. Reach out for project enquiries, site visits, and corporate collaborations.
        </p>

      </div>
    </section>
  );
}
