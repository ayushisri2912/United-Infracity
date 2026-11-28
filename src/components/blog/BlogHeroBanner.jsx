import React from 'react';

export default function BlogHeroBanner() {
  return (
    <section className="relative w-full h-[400px] sm:h-[450px] md:h-[480px] flex items-center justify-center overflow-hidden bg-stone-950 border-b border-[#C49D55]/30">
      {/* Background Image matching About Page style */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="United Infracity Architectural Blog"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Balanced Overlays matching About Page Hero */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35" />
      </div>

      {/* Center-aligned Content matching About Page Hero */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center space-y-3 pt-4 animate-in fade-in duration-700">
        
        {/* Eyebrow Label matching About Page */}
        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C49D55] uppercase block drop-shadow">
          Blog & Insights
        </span>

        {/* Main Heading matching About Page Hero */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl leading-tight">
          Stories, Ideas & <span className="text-[#C49D55]">Industry Perspectives</span>
        </h1>

        {/* Golden Accent Line matching About Page */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto rounded-full my-1.5" />

        {/* Subtitle */}
        <p className="font-montserrat text-xs sm:text-sm text-stone-200 font-light max-w-2xl leading-relaxed tracking-wide drop-shadow">
          Stay updated with luxury real estate trends, construction innovations, architecture, investment insights, and company updates.
        </p>

      </div>
    </section>
  );
}
