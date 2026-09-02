import React from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MediaSection() {
  const navigate = useNavigate();

  const articles = [
    {
      type: 'Press Coverage',
      date: 'August 2026',
      title: 'United Infracity Announces Next-Gen Smart Township Project Expansion',
      excerpt: 'Pioneering green infrastructure and solar integrated power grids across 150 acres of flagship residential development.',
      image: '/images/united_residences.jpg',
      author: 'Economic Real Estate Times',
      path: '/news-events'
    },
    {
      type: 'News & Event',
      date: 'July 2026',
      title: 'Aura Business Tower Bags National Architectural Excellence Award',
      excerpt: 'Recognized for sustainable skyscraper facade design, double-height glass rotundas, and smart energy conservation.',
      image: '/images/aura_tower_facade.jpg',
      author: 'Urban Infrastructure Digest',
      path: '/news-events'
    },
    {
      type: 'Corporate Blog',
      date: 'June 2026',
      title: 'The Future of High-Street Commercial Hubs in Tier-1 Metro Cities',
      excerpt: 'Insights into how Grade-A office parks and integrated retail squares yield higher rental returns for institutional investors.',
      image: '/images/united_commercial.jpg',
      author: 'United Leadership Desk',
      path: '/blog'
    }
  ];

  const handleReadArticle = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="media" className="py-14 sm:py-16 lg:py-20 bg-[#FDFBF7] relative border-t border-[#D4AF37]/20">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Media & Insights</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            News, Events & <span className="text-[#D4AF37] italic font-serif">Press Coverage</span>
          </h2>
          <p className="text-stone-700 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            Stay updated with our latest corporate announcements, industry awards, and thought leadership articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleReadArticle(item.path)}
              className="bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#1A1A1A]/90 text-[#D4AF37] text-[9px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
                    {item.type}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-stone-400">
                    <Calendar className="w-3 h-3 text-[#D4AF37]" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.author}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed font-light line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <button 
                  onClick={() => handleReadArticle(item.path)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#997B20] hover:text-[#1A1A1A] transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
