import React from 'react';
import { Award, Compass, Eye, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Compass,
      title: 'Architectural Vision',
      desc: 'Creating timeless master plans, sustainable green building footprints, and luxury structural elegance.'
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromised Trust',
      desc: '100% legal compliance, transparent RERA disclosures, and clean title deeds on every development.'
    },
    {
      icon: Award,
      title: 'Precision Delivery',
      desc: 'Proprietary project management tracking ensuring timely possession and zero compromise on materials.'
    },
    {
      icon: Eye,
      title: 'Sustainable Future',
      desc: 'Solar integration, zero-discharge water recycling, and energy-efficient building envelopes.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F0E6] relative border-t border-b border-[#D4AF37]/20">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[#997B20] text-xs font-bold uppercase tracking-[0.25em] block">
            OUR CORE FOUNDATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
            Creating Landmarks That <span className="text-[#D4AF37] italic font-serif">Inspire Generations</span>
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed">
            At United Infracity Private Limited, every brick laid is a testament to our passion for perfection, structural safety, and elevated community living.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-stone-900 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-[#D4AF37] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex justify-end">
                  <span className="text-stone-300 font-serif font-bold text-2xl group-hover:text-[#D4AF37] transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
