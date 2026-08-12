import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Singhania',
      role: 'Business Investor & Homeowner',
      project: 'United Grand Residences',
      quote: 'Investing in United Infracity was the single best decision for my family. The construction quality, delivery timelines, and luxury finishes are on par with international standards.',
      stars: 5
    },
    {
      name: 'Dr. Ananya Sharma',
      role: 'Senior Healthcare Executive',
      project: 'The Sovereign Estates',
      quote: 'The attention to detail in their floor planning and green landscaping is remarkable. United Infracity delivered our luxury villa with complete transparency and peace of mind.',
      stars: 5
    },
    {
      name: 'Vikramaditya Oberoi',
      role: 'Managing Director, Horizon Tech',
      project: 'Aura Business Tower',
      quote: 'Aura Business Tower provided our corporate headquarters with modern Grade-A infrastructure, stellar security, and high prestige. Truly a visionary real estate developer.',
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FDFBF7] relative border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Voices of Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
            What Our Resident <span className="text-[#D4AF37] italic font-serif">Patrons Say</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Hear from corporate leaders, investors, and families who have chosen United Infracity as their address of pride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#D4AF37]">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#D4AF37]/30" />
                </div>

                <p className="text-stone-600 text-sm leading-relaxed italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 mt-6">
                <h4 className="font-serif font-bold text-stone-900 text-base">
                  {item.name}
                </h4>
                <p className="text-xs text-stone-500 font-medium">{item.role}</p>
                <span className="inline-block mt-2 px-2.5 py-0.5 bg-[#FDFBF7] text-[#997B20] border border-[#D4AF37]/30 text-[10px] uppercase font-bold rounded-full">
                  {item.project}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
