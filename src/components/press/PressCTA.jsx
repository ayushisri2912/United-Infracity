import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function PressCTA() {
  const navigate = useNavigate();
  const { openEnquire } = useModal();

  const handleViewProjects = () => {
    navigate('/projects/residential');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // <section className="py-20 bg-[#1C1C1A] text-white relative overflow-hidden">
      <section className="py-20 bg-[#2E2922] text-white relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mx-auto shadow-lg">
          <Building2 className="w-7 h-7" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
          Explore Our <span className="text-[#D4AF37] italic font-serif">Landmark Projects</span>
        </h2>

        {/* Description */}
        <p className="font-montserrat text-stone-300 text-xs sm:text-base font-light max-w-xl mx-auto leading-relaxed">
          Discover the developments that continue to shape modern living.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleViewProjects}
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#D4AF37] hover:bg-white text-stone-950 font-montserrat text-xs font-bold uppercase tracking-[0.2em] rounded-xl shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={openEnquire}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-montserrat text-xs font-bold uppercase tracking-[0.2em] rounded-xl border border-white/30 transition-colors cursor-pointer"
          >
            <span>Enquire Private Visit</span>
          </button>
        </div>

      </div>
    </section>
  );
}
