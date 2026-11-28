import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function LatestArticlesSection({ articles, onSelectArticle }) {
  return (
    <section className="pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-20 bg-[#FAF8F5]">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 border-b border-[#E8DCC8] pb-4 sm:pb-5 gap-4">
          <div>
            <span className="font-montserrat text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
              CURATED READS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#111111] leading-[1.15] tracking-tight">
              Latest <span className="font-serif italic text-[#C5A059]">Articles</span>
            </h2>
          </div>
          <span className="font-montserrat text-xs font-medium text-[#777777] tracking-wider uppercase">
            Showing {articles.length} Insights
          </span>
        </div>

        {/* Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {articles.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectArticle(item)}
              className="group bg-white rounded-none overflow-hidden border border-[#E5E5E5] hover:border-[#C5A059] shadow-xs hover:shadow-[0_16px_40px_rgba(197,160,89,0.12)] hover:-translate-y-1.5 transition-all duration-400 ease-out cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.97]"
                  />
                  {/* Category Pill Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#111111] border border-[#E5E5E5] font-montserrat text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  
                  {/* Publish Date & Read Time */}
                  <div className="flex items-center gap-3 text-[11px] sm:text-xs font-montserrat text-[#777777] font-normal">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      {item.readTime}
                    </span>
                  </div>

                  {/* Blog Title: Home Page Serif Typography */}
                  <h3 className="font-serif text-xl sm:text-[22px] lg:text-[23px] font-normal text-[#111111] leading-snug tracking-tight group-hover:text-[#C5A059] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Two-Line Excerpt */}
                  <p className="font-montserrat text-xs sm:text-[13px] text-[#555555] font-light leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer: Read Article Link */}
              <div className="px-6 pb-6 pt-2 border-t border-stone-100 mt-2 flex items-center justify-between">
                <span className="font-montserrat text-xs text-[#777777] font-medium tracking-wide">
                  {item.author}
                </span>

                <div className="inline-flex items-center gap-1.5 font-montserrat text-xs font-semibold uppercase tracking-wider text-[#C5A059] group-hover:text-[#111111] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
