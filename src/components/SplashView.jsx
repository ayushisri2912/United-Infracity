import React from 'react';

export default function SplashView({ onExplore }) {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between p-8 sm:p-12 md:p-16 selection:bg-[#D4AF37] selection:text-black overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Top Header Placeholder / Subtle Branding Accent */}
      <div className="relative z-10 w-full flex justify-between items-center">
        <div className="w-8 h-[2px] bg-[#D4AF37]/60" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-medium">
          Est. 2011
        </span>
      </div>

      {/* Center Typography Section */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center my-auto py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Sub-header */}
          <h2 className="text-amber-500 text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] font-semibold">
            UNITED INFRACITY
          </h2>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white text-center font-normal tracking-tight leading-[1.15]">
            Our Project Is Coming Soon...
          </h1>

        </div>
      </div>

      {/* Bottom-Right CTA Section */}
      <div className="relative z-10 w-full flex items-center justify-end gap-6 pt-8">
        {/* Thin horizontal line extending to the left */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-amber-500/70" />

        {/* CTA Button */}
        <button
          onClick={onExplore}
          className="group inline-flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-white hover:text-amber-500 transition-all duration-300 whitespace-nowrap cursor-pointer"
        >
          <span>EXPLORE OUR WEBSITE</span>
          <span className="text-amber-500 group-hover:translate-x-2 transition-transform duration-300 font-serif text-base">
            →
          </span>
        </button>
      </div>

    </div>
  );
}
