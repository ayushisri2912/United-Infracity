import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroBannerSlider({ onSelectSection }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tagline: 'FLAGSHIP RESIDENTIAL',
      title: 'THE GRAND HORIZON',
      subtitle: 'ULTRA-LUXURY SKY RESIDENCES & PENTHOUSES',
      image: '/images/united_residences.jpg',
      category: 'Residential'
    },
    {
      id: 2,
      tagline: 'COMMERCIAL LANDMARK',
      title: 'AURA BUSINESS TOWER',
      subtitle: 'GRADE-A CORPORATE HEADQUARTERS & RETAIL',
      image: '/images/aura_tower_facade.jpg',
      category: 'Commercial'
    },
    {
      id: 3,
      tagline: 'INTEGRATED TOWNSHIP',
      title: 'UNITED IMPERIAL TOWNSHIP',
      subtitle: '150-ACRE MASTER-PLANNED GREEN ECOSYSTEM',
      image: '/images/hero_luxury_tower.jpg',
      category: 'Township'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative w-full h-[75vh] min-h-[500px] max-h-[750px] overflow-hidden bg-black selection:bg-amber-500 selection:text-black">
      
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          />
          {/* Left Dark Gradient Overlay for optimal legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Floating Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-center text-left">
        <div className="max-w-2xl space-y-4 animate-in fade-in slide-in-from-left duration-700">
          
          {/* Top Tagline with decorative gold lines */}
          <div className="text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-400/80 inline-block" />
            <span>{activeSlide.tagline}</span>
            <span className="w-8 h-[2px] bg-amber-400/80 inline-block" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-wide leading-none font-bold">
            {activeSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-amber-400 text-xs sm:text-sm md:text-base tracking-[0.2em] font-semibold">
            {activeSlide.subtitle}
          </p>

          {/* Action Button: EXPLORE MORE → */}
          <div className="pt-4">
            <button
              onClick={() => onSelectSection('projects', activeSlide.category)}
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-black font-bold px-7 py-3.5 text-xs tracking-[0.2em] uppercase rounded-md shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>EXPLORE MORE</span>
              <span className="font-serif text-sm">→</span>
            </button>
          </div>

        </div>
      </div>

      {/* Slider Controls & Dot Indicators at Bottom-Right */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        
        {/* Prev / Next Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="p-1 text-white/70 hover:text-amber-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="p-1 text-white/70 hover:text-amber-400 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

    </section>
  );
}
