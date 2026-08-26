import React from 'react';
import { Waves, Trees, Dumbbell, Shield, Sparkles, Coffee } from 'lucide-react';

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: Waves,
      title: 'Temperature-Controlled Pool',
      desc: 'All-weather heated lap pools with private sun decks and poolside cabanas.'
    },
    {
      icon: Trees,
      title: '10-Acre Central Eco Park',
      desc: 'Manicured botanical gardens, jogging tracks, and quiet meditation pavilions.'
    },
    {
      icon: Dumbbell,
      title: 'State-of-the-Art Fitness Suite',
      desc: 'Technogym equipment, private yoga studios, and professional personal trainers.'
    },
    {
      icon: Shield,
      title: '5-Tier Security & Concierge',
      desc: 'Biometric access control, 24/7 CCTV surveillance, and 5-star concierge services.'
    },
    {
      icon: Coffee,
      title: 'Private Resident Clubhouse',
      desc: 'Private mini-theatres, gourmet cafes, and executive conference rooms.'
    },
    {
      icon: Sparkles,
      title: 'Helipad & EV Charging Infrastructure',
      desc: 'Exclusive rooftop helipads and fast EV charging bays for modern convenience.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F0E6] relative border-t border-b border-[#D4AF37]/20">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[#997B20] text-xs font-bold uppercase tracking-[0.25em] block">
            THE LUXURY LIFESTYLE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
            Curated World-Class <span className="text-[#D4AF37] italic font-serif">Amenities</span>
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed">
            Designed to elevate your everyday living into an ultra-luxury retreat across all United Infracity communities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-stone-900 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
