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
    <section className="py-12 sm:py-16 bg-[#141414] text-white relative overflow-hidden border-t border-[#C49D55]/20">
      <div className="relative z-10 max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 text-center space-y-5">
        
        <div className="w-12 h-12 bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto shadow-lg">
          <Building2 className="w-6 h-6" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-white leading-tight">
          Explore Our <span className="text-[#D4AF37] italic font-serif">Landmark Projects</span>
        </h2>

        {/* Description */}
        <p className="font-montserrat text-stone-300 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
          Discover the developments that continue to shape modern living.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={handleViewProjects}
            className="inline-flex items-center gap-2.5 px-8 py-3 bg-[#D4AF37] hover:bg-white text-stone-950 font-montserrat text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={openEnquire}
            className="inline-flex items-center gap-2 px-7 py-3 bg-transparent hover:bg-white/10 text-white font-montserrat text-xs font-semibold uppercase tracking-[0.2em] border border-white/30 transition-colors cursor-pointer"
          >
            <span>Enquire Private Visit</span>
          </button>
        </div>

      </div>
    </section>
  );
}
