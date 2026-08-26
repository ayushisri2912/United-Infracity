import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export default function HeroBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { setActiveProjectFilter } = useModal();

  const slides = [
    {
      id: 1,
      tagline: 'FLAGSHIP RESIDENTIAL',
      title: 'THE GRAND HORIZON',
      subtitle: 'ULTRA-LUXURY SKY RESIDENCES & PENTHOUSES',
      image: '/images/united_residences.jpg',
      category: 'Residential',
      path: '/projects/residential'
    },
    {
      id: 2,
      tagline: 'COMMERCIAL LANDMARK',
      title: 'AURA BUSINESS TOWER',
      subtitle: 'GRADE-A CORPORATE HEADQUARTERS & RETAIL',
      image: '/images/aura_tower_facade.jpg',
      category: 'Commercial',
      path: '/projects/commercial'
    },
    {
      id: 3,
      tagline: 'INTEGRATED TOWNSHIP',
      title: 'UNITED IMPERIAL TOWNSHIP',
      subtitle: '150-ACRE MASTER-PLANNED GREEN ECOSYSTEM',
      image: '/images/hero_luxury_tower.jpg',
      category: 'Township',
      path: '/projects/township'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  const handleExplore = (slide) => {
    setActiveProjectFilter(slide.category);
    navigate(slide.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[72vh] sm:h-[80vh] lg:h-[88vh] min-h-[650px] overflow-hidden bg-black selection:bg-amber-500 selection:text-black">
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center scale-110 transition-transform duration-[6000ms]"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        </div>
      ))}

      {/* Floating Content Overlay */}
      <div className="relative z-20 max-w-[1550px] w-full mx-auto h-full px-6 sm:px-10 lg:px-14 flex flex-col justify-center text-left">
        <div className="max-w-2xl space-y-3 animate-in fade-in slide-in-from-left duration-700">

          {/* Top Tagline */}
          <div className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-semibold flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#D4AF37] inline-block" />
            <span>{activeSlide.tagline}</span>
            <span className="w-6 h-[2px] bg-[#D4AF37] inline-block" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight font-bold">
            {activeSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-[#D4AF37]/90 text-xs sm:text-sm tracking-[0.2em] font-semibold">
            {activeSlide.subtitle}
          </p>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => handleExplore(activeSlide)}
              className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 font-bold px-6 py-2.5 text-xs tracking-[0.2em] uppercase rounded-lg shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span>EXPLORE MORE</span>
              <span className="font-serif text-sm">→</span>
            </button>
          </div>

        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 right-6 sm:right-8 z-30 flex items-center gap-3 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xl">
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="p-1 text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? 'w-6 bg-[#D4AF37]' : 'w-1.5 bg-white/40 hover:bg-white'}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="p-1 text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
