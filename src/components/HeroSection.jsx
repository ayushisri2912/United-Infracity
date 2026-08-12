import React from 'react';
import { ArrowRight, ShieldCheck, Download, Award } from 'lucide-react';

export default function HeroSection({ onOpenEnquire, onSelectSection }) {
  return (
    <section id="hero" className="py-16 lg:py-24 bg-[#FDFBF7] relative overflow-hidden border-b border-amber-900/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Intro Copy (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#997B20]">
                Pioneers of Luxury Architecture
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15]">
              Pioneers of Modern <br />
              <span className="text-[#D4AF37] italic font-serif">Urban Development</span>
            </h2>

            {/* Description */}
            <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              United Infracity Private Limited shapes the future of cityscapes with iconic residential towers, state-of-the-art commercial hubs, and master-planned townships designed for timeless distinction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onSelectSection('projects')}
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] text-xs uppercase tracking-widest font-semibold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#1A1A1A] group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={onOpenEnquire}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#1A1A1A] text-xs uppercase tracking-widest font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Download Portfolio</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-amber-900/10">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">15+</div>
                <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Years Legacy</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">5M+</div>
                <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Sq. Ft. Delivered</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">100%</div>
                <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Prime Locations</div>
              </div>
            </div>

          </div>

          {/* Luxury Visual Feature Card (Cols 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/hero_luxury_tower.jpg"
                alt="United Infracity Flagship Tower"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                      FEATURED LANDMARK
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                      Aura Business Tower
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#997B20] font-bold text-[10px] uppercase rounded-full">
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
