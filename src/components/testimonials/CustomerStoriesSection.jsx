import React, { useState } from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

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
      quote: 'As architects ourselves, we scrutinized every blueprint. United Infracity standard of engineering, acoustic isolation, and natural ventilation exceeded our highest benchmarks.',
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
      quote: 'The appreciation value and rental yields on United Infracity properties speak volumes. Beyond luxury, it is a fortress of enduring financial growth.',
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
    <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 bg-[#F8F6F1] relative">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-6 sm:mb-8">
          <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.25em] text-[#C49D55] block">
            HOMEOWNER TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141414]">
            Stories of <span className="italic text-[#C49D55]">Timeless Living</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-xl mx-auto">
            Discover how United Infracity turns luxury visions into enduring legacy addresses for discerning families.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 font-montserrat text-xs font-medium tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#141414] text-[#C49D55] border border-[#C49D55] shadow-md'
                  : 'bg-white text-stone-600 hover:text-[#141414] border border-stone-200 hover:border-[#C49D55]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white p-6 sm:p-7 border border-[#E5E5E5] hover:border-[#C49D55] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle Gold Corner Accent Line */}
              <div className="absolute top-0 right-0 w-12 h-[2px] bg-[#C49D55]/30 group-hover:bg-[#C49D55] transition-colors" />

              <div className="space-y-4">
                
                {/* Header Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#C49D55]">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C49D55] stroke-none" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#C49D55]/30 group-hover:text-[#C49D55]/60 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="font-serif text-base sm:text-lg text-[#141414] leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Customer Footer Card Profile */}
              <div className="pt-5 border-t border-stone-100 mt-6 space-y-3">
                
                <div className="flex items-center gap-3.5">
                  {/* Customer Photo */}
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#C49D55]/40 group-hover:border-[#C49D55] transition-colors shadow-xs"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif font-normal text-[#141414] text-lg">
                        {item.name}
                      </h4>
                      {item.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-[#C49D55] fill-[#C49D55]/15" title="Verified Homeowner" />
                      )}
                    </div>
                    <p className="font-montserrat text-[11px] text-stone-500 font-light">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Project Badge & Residence Details */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <span className="inline-block px-2.5 py-0.5 bg-[#F8F6F1] text-[#C49D55] border border-[#C49D55]/30 text-[10px] uppercase font-bold tracking-wider">
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
