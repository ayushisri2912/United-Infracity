import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Share2, Check, Newspaper, Building2 } from 'lucide-react';

export default function NewsDetailModal({ isOpen, onClose, selectedNews }) {
  const [copied, setCopied] = React.useState(false);

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

  if (!isOpen || !selectedNews) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Click Backdrop Outside to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl border border-[#E8DCC8] shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DCC8] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FAF8F5] text-[#C6A15B] border border-[#E8DCC8] font-montserrat text-[10px] font-bold uppercase tracking-wider">
              {selectedNews.category || 'Press Release'}
            </span>
            <span className="hidden sm:inline font-montserrat text-xs text-[#66625A]">
              United Infracity Press Release
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#E8DCC8]/50 border border-[#E8DCC8] text-xs font-montserrat text-[#1C1C1A] transition-colors cursor-pointer"
              title="Share Press Release"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#C6A15B]" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-12 space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-montserrat text-[#66625A] font-light">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C6A15B]" />
                {selectedNews.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C6A15B]" />
                {selectedNews.location || 'Corporate Headquarters'}
              </span>
            </div>

            <h1 className="font-cormorant text-3xl sm:text-5xl font-bold text-[#1C1C1A] leading-tight">
              {selectedNews.title}
            </h1>
          </div>

          {/* High Res Image */}
          {selectedNews.image && (
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#E8DCC8] aspect-[16/9]">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Body Content */}
          <div className="space-y-6 font-montserrat text-sm sm:text-base text-[#1C1C1A] font-light leading-relaxed">
            <p className="text-base sm:text-lg text-stone-800 font-normal leading-relaxed">
              {selectedNews.description}
            </p>

            <p>
              United Infracity Private Limited today announced landmark developments advancing sustainable architecture and high-end residential engineering. The expansion highlights the group’s commitment to delivering timely luxury townships equipped with world-class clubhouse infrastructure, green belts, and Grade-A commercial suites.
            </p>

            <div className="p-6 rounded-xl bg-white border border-[#E8DCC8] space-y-3">
              <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#C6A15B]">
                Key Highlights
              </h4>
              <ul className="space-y-2 font-montserrat text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] font-bold">•</span>
                  <span><strong>Architectural Innovation:</strong> LEED-certified designs with seismic structural dampeners.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] font-bold">•</span>
                  <span><strong>Timely Handover Guarantee:</strong> ISO-certified milestone tracking for total homeowner peace of mind.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] font-bold">•</span>
                  <span><strong>Community CSR Impact:</strong> Integrated solar energy grids and zero-waste water recycling plants.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Press Contact Footer */}
          <div className="pt-6 border-t border-[#E8DCC8] flex flex-col sm:flex-row items-center justify-between text-xs font-montserrat text-[#66625A] gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C6A15B]" />
              <span>Corporate Relations & Media Desk: media@unitedinfracity.com</span>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[#1C1C1A] text-white font-bold uppercase tracking-wider hover:bg-[#C6A15B] transition-colors cursor-pointer"
            >
              Close Release
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
