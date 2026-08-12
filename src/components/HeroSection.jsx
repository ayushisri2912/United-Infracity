import React from 'react';
import { ArrowRight, ShieldCheck, Download, Award } from 'lucide-react';

export default function HeroSection({ onOpenEnquire, onSelectSection }) {
  return (
    <section id="hero" className="py-10 lg:py-14 bg-[#FDFBF7] relative overflow-hidden border-b border-[#D4AF37]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Hero Intro Copy (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#997B20]">
                Pioneers of Luxury Architecture
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15]">
              Pioneers of Modern <br />
              <span className="text-[#D4AF37] italic font-serif">Urban Development</span>
            </h2>

            {/* Description */}
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              United Infracity Private Limited shapes the future of cityscapes with iconic residential towers, state-of-the-art commercial hubs, and master-planned townships designed for timeless distinction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onSelectSection('projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] text-xs uppercase tracking-widest font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#1A1A1A] group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={onOpenEnquire}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#1A1A1A] text-xs uppercase tracking-widest font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Download Portfolio</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#D4AF37]/20">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">15+</div>
                <div className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider mt-0.5">Years Legacy</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">5M+</div>
                <div className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider mt-0.5">Sq. Ft. Delivered</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">100%</div>
                <div className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider mt-0.5">Prime Locations</div>
              </div>
            </div>

          </div>

          {/* Luxury Visual Feature Card (Cols 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <img
                src="/images/hero_luxury_tower.jpg"
                alt="United Infracity Flagship Tower"
                className="w-full h-[340px] sm:h-[380px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                      FEATURED LANDMARK
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A]">
                      Aura Business Tower
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#D4AF37]/20 text-[#997B20] font-bold text-[9px] uppercase rounded-full">
                    Ongoing Commercial
                  </span>
                </div>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Next-generation grade-A corporate offices, rooftop helipad, and sky lounge.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
