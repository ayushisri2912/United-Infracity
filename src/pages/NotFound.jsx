import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8 bg-[#FAF8F5]">
      <div className="w-16 h-16 rounded-2xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] mb-6 shadow-lg">
        <Building2 className="w-8 h-8" />
      </div>

      <span className="font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-[#C6A15B] mb-2">
        ERROR 404
      </span>

      <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C1C1A] mb-4">
        Page Not Found
      </h1>

      <p className="font-montserrat text-xs sm:text-sm text-[#66625A] font-light max-w-md mx-auto mb-8 leading-relaxed">
        The architectural page you are searching for does not exist or has been relocated to another address.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1C1C1A] hover:bg-[#C6A15B] text-white hover:text-[#1C1C1A] font-montserrat text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home Gateway</span>
      </Link>
    </div>
  );
}
