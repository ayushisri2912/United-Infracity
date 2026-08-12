import React from 'react';
import { Newspaper, Calendar, ArrowRight, Sparkles, Award } from 'lucide-react';

export default function MediaSection() {
  const articles = [
    {
      type: 'Press Coverage',
      date: 'August 2026',
      title: 'United Infracity Announces Next-Gen Smart Township Project Expansion',
      excerpt: 'Pioneering green infrastructure and solar integrated power grids across 150 acres of flagship residential development.',
      image: '/images/united_residences.jpg',
      author: 'Economic Real Estate Times'
    },
    {
      type: 'News & Event',
      date: 'July 2026',
      title: 'Aura Business Tower Bags National Architectural Excellence Award',
      excerpt: 'Recognized for sustainable skyscraper facade design, double-height glass rotundas, and smart energy conservation.',
      image: '/images/aura_tower_facade.jpg',
      author: 'Urban Infrastructure Digest'
    },
    {
      type: 'Corporate Blog',
      date: 'June 2026',
      title: 'The Future of High-Street Commercial Hubs in Tier-1 Metro Cities',
      excerpt: 'Insights into how Grade-A office parks and integrated retail squares yield higher rental returns for institutional investors.',
      image: '/images/united_commercial.jpg',
      author: 'United Leadership Desk'
    }
  ];

  return (
    <section id="media" className="py-20 lg:py-28 bg-[#FDFBF7] relative border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Media & Insights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
            News, Events & <span className="text-[#D4AF37] italic font-serif">Press Coverage</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Stay updated with our latest corporate announcements, industry awards, and thought leadership articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#1A1A1A]/90 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
                    {item.type}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.author}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20] hover:text-[#1A1A1A] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
