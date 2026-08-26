import React from 'react';
import { Newspaper, Calendar, ExternalLink, Sparkles } from 'lucide-react';

export default function FeaturedCoverage({ onSelectArticle }) {
  const featuredArticle = {
    publication: 'The Economic Times',
    edition: 'National Real Estate Edition',
    date: 'August 12, 2026',
    headline: 'United Infracity Redefines Luxury Real Estate Landscape with Landmark Integrated Townships',
    excerpt: 'In an exclusive coverage, The Economic Times highlights United Infracity Private Limited’s commitment to sustainable architectural marvels, ultra-luxury residential towers, and grade-A corporate infrastructure across prime tech corridors.',
    image: '/images/united_residences.jpg',
    url: '#'
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Tagline Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-[#997B20]">
            FEATURED MEDIA SPOTLIGHT
          </span>
        </div>

        {/* Featured Card Wrapper */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-xl hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Media Image Clipping */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-stone-900 group">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.headline}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Publication Ribbon Badge */}
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-montserrat font-bold uppercase tracking-wider flex items-center gap-2">
              <Newspaper className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{featuredArticle.publication}</span>
            </div>
          </div>

          {/* Right Column: Article Details */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Meta Date & Edition */}
              <div className="flex items-center gap-3 font-montserrat text-xs text-stone-500 font-medium">
                <div className="flex items-center gap-1.5 text-[#997B20]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{featuredArticle.date}</span>
                </div>
                <span>•</span>
                <span className="uppercase tracking-wider text-[#997B20] font-semibold">{featuredArticle.edition}</span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight hover:text-[#D4AF37] transition-colors">
                {featuredArticle.headline}
              </h2>

              {/* Excerpt Description */}
              <p className="font-montserrat text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                {featuredArticle.excerpt}
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => onSelectArticle && onSelectArticle(featuredArticle)}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-stone-900 hover:bg-[#D4AF37] text-white hover:text-stone-950 font-montserrat text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-md cursor-pointer group"
              >
                <span>Read Full Coverage</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
