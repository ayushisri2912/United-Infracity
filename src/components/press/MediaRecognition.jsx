import React from 'react';
import { Award, Sparkles } from 'lucide-react';

export default function MediaRecognition() {
  const publications = [
    { name: 'Times of India', label: 'THE TIMES OF INDIA', tagline: 'National Daily' },
    { name: 'Hindustan Times', label: 'Hindustan Times', tagline: 'National Edition' },
    { name: 'Business Standard', label: 'Business Standard', tagline: 'Financial Daily' },
    { name: 'Economic Times', label: 'THE ECONOMIC TIMES', tagline: 'Corporate Journal' },
    { name: 'Dainik Jagran', label: 'दैनिक जागरण', tagline: 'Print Leader' },
    { name: 'Amar Ujala', label: 'अमर उजाला', tagline: 'Regional Press' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-b border-[#D4AF37]/20 relative">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>ESTEEMED MEDIA PARTNERS</span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A]">
            Featured Across <span className="text-[#D4AF37] italic font-serif">Leading Publications</span>
          </h2>
          
          <p className="font-montserrat text-stone-600 text-xs sm:text-sm font-light">
            Our architectural landmarks and corporate achievements are regularly spotlighted by India's top news and financial dailies.
          </p>
        </div>

        {/* Horizontal Logos / Publication Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-500 group flex flex-col items-center justify-center space-y-2 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-stone-100 group-hover:bg-[#D4AF37]/15 flex items-center justify-center text-stone-400 group-hover:text-[#D4AF37] transition-colors duration-300">
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Publication Name (Grayscale by default, Gold on hover) */}
              <h4 className="font-serif font-bold text-base sm:text-lg text-stone-500 group-hover:text-[#D4AF37] grayscale group-hover:grayscale-0 transition-all duration-300 text-center tracking-tight">
                {pub.label}
              </h4>

              <span className="font-montserrat text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-[#997B20] font-semibold transition-colors">
                {pub.tagline}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
