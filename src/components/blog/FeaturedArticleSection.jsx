import React from 'react';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedArticleSection({ featuredArticle, onSelectArticle }) {
  if (!featuredArticle) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Tagline */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-8 h-[1px] bg-[#C6A15B]" />
          <span className="font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-[#C6A15B]">
            FEATURED STORY
          </span>
        </div>

        {/* Large Horizontal Card */}
        <div 
          onClick={() => onSelectArticle(featuredArticle)}
          className="group relative bg-white rounded-2xl overflow-hidden border border-[#E8DCC8] shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-[#C6A15B]/10 transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
        >
          {/* LEFT SIDE: Image Container */}
          <div className="lg:col-span-7 relative overflow-hidden min-h-[320px] sm:min-h-[420px] bg-stone-900">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.95]"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
            
            {/* Badge overlay on mobile */}
            <div className="absolute top-6 left-6 lg:hidden">
              <span className="px-3.5 py-1 rounded-full bg-[#1C1C1A] text-[#C6A15B] font-montserrat text-[10px] font-bold uppercase tracking-wider">
                {featuredArticle.category}
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Article Meta & Details */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Category, Date & Read Time */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="hidden lg:inline-block px-3.5 py-1 rounded-full bg-[#FAF8F5] text-[#C6A15B] border border-[#E8DCC8] font-montserrat text-[11px] font-bold uppercase tracking-wider">
                  {featuredArticle.category}
                </span>

                <div className="flex items-center gap-4 text-xs font-montserrat text-[#66625A] font-light">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                    {featuredArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>

              {/* Large Elegant Heading */}
              <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-4xl font-normal text-[#1C1C1A] leading-tight group-hover:text-[#C6A15B] transition-colors duration-300">
                {featuredArticle.title}
              </h2>

              {/* Short 2-3 Line Description */}
              <p className="font-montserrat text-sm text-[#66625A] font-light leading-relaxed line-clamp-3">
                {featuredArticle.excerpt}
              </p>
            </div>

            {/* Author & Read More Button */}
            <div className="pt-6 border-t border-[#E8DCC8]/60 flex items-center justify-between">
              <div>
                <span className="font-montserrat text-[11px] uppercase tracking-wider text-stone-400 font-medium block">Author</span>
                <span className="font-cormorant text-base font-bold text-[#1C1C1A]">{featuredArticle.author}</span>
              </div>

              {/* Gold Read More Button */}
              <button 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C6A15B] text-white font-montserrat text-xs font-bold uppercase tracking-wider hover:bg-[#1C1C1A] transition-colors duration-300 shadow-sm"
              >
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
