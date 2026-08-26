import React from 'react';
import { Building2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center space-y-4 p-8 bg-[#FAF8F5]">
      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#806214] p-0.5 shadow-xl animate-pulse">
        <div className="w-full h-full bg-[#1C1C1A] rounded-[14px] flex items-center justify-center">
          <Building2 className="w-8 h-8 text-[#C6A15B]" />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <span className="font-serif font-bold text-lg tracking-wider text-[#1C1C1A]">
          UNITED INFRACITY
        </span>
        <span className="font-montserrat text-[10px] tracking-[0.3em] font-semibold uppercase text-[#C6A15B]">
          Loading Luxury Insights...
        </span>
      </div>
    </div>
  );
}
