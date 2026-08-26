import React from 'react';
import { Newspaper } from 'lucide-react';

export default function PressHeroBanner() {
  return (
    <section className="relative w-full h-[450px] sm:h-[500px] flex items-center justify-center overflow-hidden bg-[#1C1C1A]">
      
      {/* High-Resolution Luxury Real Estate Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
          alt="United Infracity Press & Coverage"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.6] contrast-[1.05]"
        />
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A] via-[#1C1C1A]/65 to-[#1C1C1A]/40" />
      </div>

      {/* Center-aligned Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-4 pt-6">
        
        {/* Small Gold Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1A]/80 border border-[#C6A15B]/40 backdrop-blur-md">
          <Newspaper className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span className="font-montserrat text-[11px] font-bold uppercase tracking-[0.3em] text-[#C6A15B]">
            PRESS & COVERAGE
          </span>
        </div>

        {/* Main Large Heading */}
        <h1 className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.12] max-w-3xl">
          Recognized Across Leading <span className="italic text-[#C6A15B] font-light">Print, Digital & National Media</span>
        </h1>

        {/* Elegant Gold Divider Line */}
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent my-1" />

        {/* Short Supporting Description */}
        <p className="font-montserrat text-xs sm:text-sm text-stone-300 font-light max-w-2xl leading-relaxed tracking-wide">
          Discover our official press releases, media coverage, executive interviews, and corporate recognitions from United Infracity.
        </p>

      </div>
    </section>
  );
}
