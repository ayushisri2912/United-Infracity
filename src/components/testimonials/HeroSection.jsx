import React from 'react';
import { Play, Sparkles } from 'lucide-react';

export default function HeroSection({ onWatchStoriesClick }) {
  const handleScrollDown = () => {
    const featuredSection = document.getElementById('featured-story-section');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[440px] sm:h-[480px] md:h-[520px] flex items-center justify-center overflow-hidden bg-[#141414]">
      {/* Background Image with subtle zoom/parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop"
          alt="United Infracity Luxury Estate"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
        />
        {/* Dark Luxury Gradient Overlay matching Home Page */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/65 to-[#141414]/40" />
        {/* Subtle Warm Gold Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-[#141414]/85 opacity-90" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center space-y-4 pt-4 sm:pt-6">
        
        {/* Editorial Subtitle Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#141414]/80 border border-[#C49D55]/40 backdrop-blur-md shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#C49D55]" />
          <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.25em] text-[#C49D55]">
            CLIENT TESTIMONIALS
          </span>
        </div>

        {/* Luxury Typography Main Heading */}
        <div className="space-y-1">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1]">
            Building Trust,
          </h1>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic tracking-wide text-[#C49D55] leading-[1.1]">
            Creating Dreams.
          </h2>
        </div>

        {/* Minimal Subtext */}
        <p className="font-montserrat text-xs sm:text-sm md:text-base font-light text-stone-300 max-w-2xl leading-relaxed tracking-wide">
          Every satisfied homeowner reflects our commitment to excellence, structural quality, and timeless living.
        </p>

        {/* Premium Action Button */}
        <div className="pt-2">
          <button
            onClick={onWatchStoriesClick || handleScrollDown}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-[#C49D55] hover:bg-[#B38E46] text-white font-montserrat text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(196,157,85,0.35)] cursor-pointer active:scale-95"
          >
            <span className="w-5 h-5 bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors duration-300">
              <Play className="w-3 h-3 text-white fill-current ml-0.5" />
            </span>
            <span>Watch Stories</span>
          </button>
        </div>

      </div>

      {/* Subtle Luxury Scroll Indicator */}
      <div 
        onClick={handleScrollDown}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer group"
      >
        <span className="font-montserrat text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400 group-hover:text-[#C49D55] transition-colors">
          Scroll
        </span>
        <div className="w-4 h-6 border border-[#C49D55]/40 flex items-start justify-center p-1 backdrop-blur-xs">
          <div className="w-1 h-1.5 bg-[#C49D55] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
