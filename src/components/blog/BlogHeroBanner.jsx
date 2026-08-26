import React from 'react';
import { Sparkles } from 'lucide-react';

export default function BlogHeroBanner() {
  return (
    <section className="relative w-full h-[500px] sm:h-[550px] flex items-center justify-center overflow-hidden bg-[#1C1C1A]">
      {/* Background Image with subtle zoom effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="United Infracity Architectural Blog"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.65] contrast-[1.05]"
        />
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A] via-[#1C1C1A]/70 to-[#1C1C1A]/50" />
      </div>

      {/* Center-aligned Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-5 pt-8">
        
        {/* Small Gold Label */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1C1C1A]/80 border border-[#C6A15B]/40 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span className="font-montserrat text-[11px] font-bold uppercase tracking-[0.3em] text-[#C6A15B]">
            BLOG & INSIGHTS
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.1]">
          Stories, Ideas & <span className="italic text-[#C6A15B] font-light">Industry Perspectives</span>
        </h1>

        {/* Elegant Gold Divider Line */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent my-1" />

        {/* Subtitle */}
        <p className="font-montserrat text-sm sm:text-base text-stone-300 font-light max-w-2xl leading-relaxed tracking-wide">
          Stay updated with luxury real estate trends, construction innovations, architecture, investment insights, and company updates.
        </p>

      </div>
    </section>
  );
}
