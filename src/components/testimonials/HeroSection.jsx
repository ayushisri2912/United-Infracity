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
    <section className="relative w-full h-[440px] sm:h-[480px] md:h-[520px] flex items-center justify-center overflow-hidden bg-stone-950 border-b border-[#C49D55]/30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop"
          alt="United Infracity Luxury Estate"
          className="w-full h-full object-cover object-center"
        />
        {/* 0.5 Opacity Black Overlay between image and content for enhanced text visibility */}
        <div 
          className="absolute inset-0 bg-black/50" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center space-y-3 sm:space-y-4 pt-2 sm:pt-4 animate-in fade-in duration-700">
        
        {/* Eyebrow Label matching About Page Hero */}
        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C49D55] uppercase block drop-shadow">
          Client Testimonials
        </span>

        {/* Luxury Typography Main Heading matching About Page Hero */}
        <div className="space-y-1 sm:space-y-2">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl leading-tight">
            Building Trust,
          </h1>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.15em] text-[#C49D55] uppercase drop-shadow-2xl leading-tight">
            Creating Dreams
          </h2>
        </div>

        {/* Golden Divider Line matching About Page */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55] to-transparent mx-auto rounded-full my-1" />

        {/* Minimal Subtext */}
        <p className="font-montserrat text-xs sm:text-sm md:text-base font-light text-stone-200 max-w-2xl leading-relaxed tracking-wide drop-shadow-md">
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
        <span className="font-montserrat text-[10px] font-medium uppercase tracking-[0.25em] text-stone-300 group-hover:text-[#C49D55] transition-colors">
          Scroll
        </span>
        <div className="w-4 h-6 border border-[#C49D55]/50 flex items-start justify-center p-1 backdrop-blur-xs">
          <div className="w-1 h-1.5 bg-[#C49D55] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
