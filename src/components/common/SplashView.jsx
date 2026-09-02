import React from 'react';

export default function SplashView({ onExplore }) {
  return (
    <div className="relative min-h-screen w-full bg-[#080808] text-white flex flex-col justify-between p-5 sm:p-10 md:p-14 selection:bg-[#C5A059] selection:text-black overflow-hidden font-sans">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] sm:w-[50rem] h-[22rem] sm:h-[50rem] bg-[#C5A059]/15 rounded-full blur-[100px] sm:blur-[140px]" />
      </div>

      {/* Center Typography Section */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center my-auto py-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center px-2">
          
          {/* Sub-header Badge with lines and center dot */}
          <div className="flex items-center justify-center gap-3 mb-3 w-full max-w-md">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/60" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs text-[#C5A059] uppercase tracking-[0.25em] sm:tracking-[0.35em] font-medium whitespace-nowrap">
                UNITED INFRACITY
              </span>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/60" />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-normal tracking-wide leading-[1.15] text-center">
            Our Project Is <br className="hidden sm:block" />
            <span className="italic font-serif text-[#C5A059] drop-shadow-sm">Coming Soon..</span>
          </h1>

        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        {/* Thin horizontal line */}
        <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-[#C5A059]/70 mr-4" />

        {/* CTA Button */}
        <button
          onClick={onExplore}
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium text-white hover:text-[#C5A059] transition-all duration-300 whitespace-nowrap cursor-pointer px-6 py-3 rounded-full border border-[#C5A059]/40 bg-[#121212]/80 hover:border-[#C5A059] backdrop-blur-sm shadow-lg hover:scale-105"
        >
          <span>EXPLORE OUR WEBSITE</span>
          <span className="text-[#C5A059] group-hover:translate-x-1.5 transition-transform duration-300 font-serif text-sm">
            →
          </span>
        </button>
      </div>

    </div>
  );
}

