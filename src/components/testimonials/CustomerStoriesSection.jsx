import React, { useState } from 'react';
import { Star, Quote, CheckCircle, Filter } from 'lucide-react';

export default function CustomerStoriesSection() {
  const categories = ['All Stories', 'Residential Estates', 'Luxury Penthouses', 'Commercial Hubs'];
  const [activeCategory, setActiveCategory] = useState('All Stories');

  const customerStories = [
    {
      id: 1,
      name: 'Rajesh Singhania',
      title: 'Managing Director, Apex Capital',
      project: 'United Sovereign Estates',
      category: 'Residential Estates',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      stars: 5,
      quote: 'Investing in United Infracity was the single best decision for my family. The construction quality, delivery timelines, and luxury finishes are on par with international standards.',
      location: 'Golf Course Extension, Sector 58',
      residenceType: '5 BHK Luxury Villa',
      verified: true
    },
    {
      id: 2,
      name: 'Dr. Ananya Sharma',
      title: 'Senior Healthcare Executive',
      project: 'The Sovereign Estates',
      category: 'Luxury Penthouses',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      stars: 5,
      quote: 'The attention to detail in their floor planning and green landscaping is remarkable. United Infracity delivered our luxury villa with complete transparency and peace of mind.',
      location: 'Central Boulevard',
      residenceType: 'Sky Duplex Penthouse',
      verified: true
    },
    {
      id: 3,
      name: 'Vikramaditya Oberoi',
      title: 'Managing Director, Horizon Tech',
      project: 'Aura Business Tower',
      category: 'Commercial Hubs',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      stars: 5,
      quote: 'Aura Business Tower provided our corporate headquarters with modern Grade-A infrastructure, stellar security, and high prestige. Truly a visionary real estate developer.',
      location: 'Financial District',
      residenceType: 'Corporate Tech Suite',
      verified: true
    },
    {
      id: 4,
      name: 'Priya & Arvind Kapoor',
      title: 'Co-Founders, Luminary Design Studio',
      project: 'United Grand Towers',
      category: 'Residential Estates',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      stars: 5,
      quote: 'As architects ourselves, we scrutinized every blue print. United Infracity standard of engineering, acoustic isolation, and natural ventilation exceeded our highest benchmarks.',
      location: 'Expressway Tech Corridor',
      residenceType: '4 BHK Grand Residency',
      verified: true
    },
    {
      id: 5,
      name: 'Siddharth Malhotra',
      title: 'Venture Capitalist & Angel Investor',
      project: 'United Township Boulevard',
      category: 'Luxury Penthouses',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      stars: 5,
      quote: 'The appreciation value and rental yields on United Infracity properties speak volumes. Beyond luxury, it is a fortress of financial growth.',
      location: 'Township Central Park',
      residenceType: 'Golf View Penthouse',
      verified: true
    },
    {
      id: 6,
      name: 'Meera Nambiar',
      title: 'VP of Global Brand Strategy',
      project: 'The Sovereign Manor',
      category: 'Residential Estates',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      stars: 5,
      quote: 'From the private elevator lobby to the concierge desk, living at The Sovereign Manor gives our family unmatched peace, security, and refined elegance.',
      location: 'Heritage Green Belt',
      residenceType: 'Private Estate Villa',
      verified: true
    }
  ];

  const filteredStories = activeCategory === 'All Stories'
    ? customerStories
    : customerStories.filter(story => story.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 bg-[#F8F5F0] relative border-t border-[#C6A15B]/15">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-[#A88746]">
            HOMEOWNER TESTIMONIALS
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1C1A]">
            Stories of <span className="italic text-[#C6A15B]">Timeless Living</span>
          </h2>
          <p className="font-montserrat text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-xl mx-auto">
            Discover how United Infracity turns luxury visions into enduring legacy addresses for discerning families.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-3 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-montserrat text-xs font-medium tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#C6A15B] text-white shadow-lg shadow-[#C6A15B]/20 border border-[#C6A15B]'
                  : 'bg-white text-stone-600 hover:text-[#1C1C1A] border border-stone-200 hover:border-[#C6A15B]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-8 border border-[#C6A15B]/20 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-[#C6A15B]/15 hover:border-[#C6A15B] hover:-translate-y-2.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Subtle Gold Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#C6A15B]/10 to-transparent group-hover:from-[#C6A15B]/25 transition-colors" />
              </div>

              <div className="space-y-6">
                
                {/* Header Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#C6A15B]">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6A15B] stroke-none" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C6A15B]/20 group-hover:text-[#C6A15B]/40 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="font-cormorant text-xl text-[#1C1C1A] leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Customer Footer Card Profile */}
              <div className="pt-6 border-t border-stone-100 mt-8 space-y-4">
                
                <div className="flex items-center gap-4">
                  {/* Customer Photo */}
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#C6A15B]/30 group-hover:border-[#C6A15B] transition-colors shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-cormorant font-bold text-[#1C1C1A] text-xl">
                        {item.name}
                      </h4>
                      {item.verified && (
                        <CheckCircle className="w-4 h-4 text-[#C6A15B] fill-[#C6A15B]/10" title="Verified Homeowner" />
                      )}
                    </div>
                    <p className="font-montserrat text-xs text-stone-500 font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Project Badge & Residence Details */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                  <span className="inline-block px-3 py-1 bg-[#F8F5F0] text-[#A88746] border border-[#C6A15B]/30 text-[10px] uppercase font-bold tracking-wider rounded-full">
                    {item.project}
                  </span>
                  <span className="font-montserrat text-[11px] text-stone-400 font-light">
                    {item.residenceType}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
