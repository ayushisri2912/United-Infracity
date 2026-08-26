import React from 'react';
import { Play, ChevronDown, Sparkles } from 'lucide-react';

export default function HeroSection({ onWatchStoriesClick }) {
  const handleScrollDown = () => {
    const featuredSection = document.getElementById('featured-story-section');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#1C1C1A]">
      {/* Background Image with subtle zoom/parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop"
          alt="United Infracity Luxury Estate"
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow filter brightness-[0.75] contrast-[1.05]"
        />
        {/* Dark Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A] via-[#1C1C1A]/60 to-[#1C1C1A]/40" />
        {/* Subtle Warm Gold Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-[#1C1C1A]/80 opacity-90" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-8 pt-16">
        
        {/* Editorial Subtitle Tag */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#1C1C1A]/70 border border-[#C6A15B]/40 backdrop-blur-md shadow-2xl animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-[#EAD6B0]">
            CLIENT TESTIMONIALS
          </span>
        </div>

        {/* Luxury Typography Main Heading */}
        <div className="space-y-2">
          <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.08]">
            Building Trust,
          </h1>
          <h2 className="font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal italic tracking-wide text-[#C6A15B] leading-[1.08]">
            Creating Dreams.
          </h2>
        </div>

        {/* Minimal Subtext */}
        <p className="font-montserrat text-sm sm:text-base md:text-lg font-light text-stone-300 max-w-2xl leading-relaxed tracking-wide">
          Every satisfied homeowner reflects our commitment to excellence, quality, and timeless living.
        </p>

        {/* Premium Action Button */}
        <div className="pt-4">
          <button
            onClick={onWatchStoriesClick || handleScrollDown}
            className="group relative inline-flex items-center gap-4 px-9 py-4 rounded-full bg-white/10 hover:bg-[#C6A15B] text-white hover:text-[#1C1C1A] border border-[#C6A15B]/50 hover:border-[#C6A15B] backdrop-blur-md font-montserrat text-xs font-bold uppercase tracking-[0.25em] transition-all duration-500 shadow-xl hover:shadow-[0_10px_35px_rgba(198,161,91,0.4)] cursor-pointer active:scale-95"
          >
            <span className="w-7 h-7 rounded-full bg-[#C6A15B] group-hover:bg-[#1C1C1A] flex items-center justify-center transition-colors duration-500">
              <Play className="w-3.5 h-3.5 text-[#1C1C1A] group-hover:text-[#C6A15B] fill-current ml-0.5" />
            </span>
            <span>Watch Stories</span>
          </button>
        </div>

      </div>

      {/* Subtle Luxury Scroll Indicator */}
      <div 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="font-montserrat text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 group-hover:text-[#C6A15B] transition-colors">
          Scroll
        </span>
        <div className="w-6 h-8 rounded-full border border-[#C6A15B]/40 flex items-start justify-center p-1.5 backdrop-blur-xs">
          <div className="w-1 h-2 rounded-full bg-[#C6A15B] animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}
