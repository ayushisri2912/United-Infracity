import React from 'react';
import { Waves, ShieldAlert, Cpu, GlassWater, Trees, Dumbbell, Sparkles } from 'lucide-react';

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: Waves,
      title: 'Rooftop Infinity Pool',
      description: 'Temperature-controlled rooftop swimming pools with panoramic city views and sun loungers.'
    },
    {
      icon: GlassWater,
      title: 'Private Sky Lounge & Club',
      description: 'Exclusive multi-storey clubhouses, fine dining lounges, and private party spaces.'
    },
    {
      icon: Cpu,
      title: 'Smart Home Automation',
      description: 'IoT-enabled living spaces with smartphone climate control, automated lighting, and keyless access.'
    },
    {
      icon: Dumbbell,
      title: 'State-of-the-Art Fitness',
      description: 'Fully equipped Technogym fitness centers, yoga pavilions, and luxury spa sauna rooms.'
    },
    {
      icon: Trees,
      title: 'Biophilic Landscaping',
      description: 'Over 70% open green spaces, zen gardens, reflective water bodies, and jogging tracks.'
    },
    {
      icon: ShieldAlert,
      title: '5-Tier Security & Concierge',
      description: 'Round-the-clock security personnel, biometric surveillance, and 24/7 white-glove concierge.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Decorative Gold Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unmatched Lifestyle</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Curated Amenities for <span className="text-[#D4AF37] italic font-serif">Bespoke Urban Living</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Every United Infracity project is designed with world-class infrastructure to elevate everyday living into an extraordinary experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-stone-800/80 border border-stone-700 hover:border-[#D4AF37] shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#806214] p-0.5 mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-stone-900 rounded-[10px] flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                </div>
                <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
