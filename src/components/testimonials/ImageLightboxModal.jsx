import React, { useEffect } from 'react';
import { X, Sparkles, Building2 } from 'lucide-react';

export default function ImageLightboxModal({ isOpen, onClose, selectedImage }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !selectedImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Lightbox Container */}
      <div className="relative w-full max-w-5xl bg-[#1C1C1A] rounded-2xl border border-[#C6A15B]/40 shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#141413]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-cormorant font-bold text-white text-lg sm:text-xl">
                {selectedImage.title}
              </h3>
              <p className="font-montserrat text-xs text-[#C6A15B] font-light">
                {selectedImage.project} • {selectedImage.category}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
            title="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High Resolution Image Preview */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden max-h-[65vh] p-2">
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-h-[60vh] w-auto object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Footer info */}
        <div className="p-6 bg-[#141413] border-t border-stone-800 flex items-center justify-between text-xs font-montserrat text-stone-300">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#C6A15B]" />
            <span>United Infracity Private Limited Architecture Collection</span>
          </div>
          <span className="px-3 py-1 bg-[#C6A15B]/20 text-[#C6A15B] border border-[#C6A15B]/30 rounded-full font-semibold uppercase tracking-wider">
            {selectedImage.category}
          </span>
        </div>

      </div>
    </div>
  );
}
