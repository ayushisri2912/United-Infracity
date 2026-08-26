import React from 'react';
import { Star, Quote, Sparkles, Play, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TestimonialsSection() {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: 'Rajesh Singhania',
      role: 'Business Investor & Homeowner',
      project: 'United Grand Residences',
      quote: 'Investing in United Infracity was the single best decision for my family. The construction quality, delivery timelines, and luxury finishes are on par with international standards.',
      stars: 5,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Dr. Ananya Sharma',
      role: 'Senior Healthcare Executive',
      project: 'The Sovereign Estates',
      quote: 'The attention to detail in their floor planning and green landscaping is remarkable. United Infracity delivered our luxury villa with complete transparency and peace of mind.',
      stars: 5,
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Vikramaditya Oberoi',
      role: 'Managing Director, Horizon Tech',
      project: 'Aura Business Tower',
      quote: 'Aura Business Tower provided our corporate headquarters with modern Grade-A infrastructure, stellar security, and high prestige. Truly a visionary real estate developer.',
      stars: 5,
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const handleNavigateTestimonials = () => {
    navigate('/testimonials');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F8F5F0] relative border-t border-[#C6A15B]/20">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C6A15B]/10 text-[#A88746] border border-[#C6A15B]/20 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Voices of Distinction</span>
            </div>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-bold text-[#1C1C1A]">
              What Our Resident <span className="text-[#C6A15B] italic font-serif">Patrons Say</span>
            </h2>
            <p className="font-montserrat text-stone-700 text-base sm:text-lg font-light max-w-xl">
              Hear from corporate leaders, investors, and families who have chosen United Infracity as their address of pride.
            </p>
          </div>

          <button
            onClick={handleNavigateTestimonials}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1C1A] hover:bg-[#C6A15B] text-white hover:text-[#1C1C1A] font-montserrat text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer self-start md:self-auto"
          >
            <span>Explore All Testimonials</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#C6A15B]/20 shadow-sm hover:shadow-xl hover:border-[#C6A15B] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#C6A15B]">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#C6A15B]/30" />
                </div>

                <p className="font-cormorant text-stone-800 text-lg leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 mt-6 flex items-center gap-4">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#C6A15B]/30"
                />
                <div>
                  <h4 className="font-cormorant font-bold text-[#1C1C1A] text-lg">
                    {item.name}
                  </h4>
                  <p className="font-montserrat text-[11px] text-stone-500 font-medium">{item.role}</p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 bg-[#F8F5F0] text-[#A88746] border border-[#C6A15B]/30 text-[9px] uppercase font-bold rounded-full">
                    {item.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1C1C1A] text-white border border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B]">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
            <div>
              <h4 className="font-cormorant font-bold text-xl text-white">Watch Video Interviews & Resident Stories</h4>
              <p className="font-montserrat text-xs text-stone-300 font-light">Experience real homeowner video journeys across our luxury townships.</p>
            </div>
          </div>
          <button
            onClick={handleNavigateTestimonials}
            className="px-6 py-3 rounded-full bg-[#C6A15B] hover:bg-white text-[#1C1C1A] font-montserrat text-xs font-bold uppercase tracking-wider transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Watch Video Stories →
          </button>
        </div>

      </div>
    </section>
  );
}
