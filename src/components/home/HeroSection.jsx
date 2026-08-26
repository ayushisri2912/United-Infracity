import React from 'react';
import { Building2, ShieldCheck, Sparkles, Trophy, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export default function HeroSection() {
  const navigate = useNavigate();
  const { openEnquire } = useModal();

  return (
    <section id="hero" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#997B20] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>United Infracity Private Limited</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15]">
              Pioneers of Modern <br />
              <span className="text-[#D4AF37] italic font-serif">Urban Development</span>
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              United Infracity Private Limited stands at the pinnacle of architectural excellence, delivering landmark commercial hubs, ultra-luxury residential townships, and state-of-the-art government infrastructure. Driven by transparency, precision engineering, and sustainable urban design.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Trophy className="w-4 h-4" />
                  <span className="font-serif font-bold text-lg text-stone-900">25+ Yrs</span>
                </div>
                <p className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Industry Legacy</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Building2 className="w-4 h-4" />
                  <span className="font-serif font-bold text-lg text-stone-900">65+ Projects</span>
                </div>
                <p className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Delivered On-Time</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-serif font-bold text-lg text-stone-900">100% RERA</span>
                </div>
                <p className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Compliant Standards</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  navigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#B38F24] hover:to-[#997B20] text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Discover Our Journey →
              </button>

              <button
                onClick={openEnquire}
                className="px-7 py-3.5 bg-white border border-[#D4AF37]/40 text-[#997B20] hover:bg-[#FDFBF7] font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Schedule Consultation</span>
              </button>
            </div>

          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/aura_tower_facade.jpg"
                alt="United Infracity Architectural Landmark"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#997B20]">
                  Architectural Precision
                </span>
                <h4 className="font-serif font-bold text-stone-900 text-lg">
                  United Corporate Headquarters
                </h4>
                <p className="text-[11px] text-stone-600 font-medium">
                  Grade-A Commercial Infrastructure & Modern Urban Engineering.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#D4AF37]/10 -z-10 blur-xl" />
          </div>

        </div>

      </div>
    </section>
  );
}
