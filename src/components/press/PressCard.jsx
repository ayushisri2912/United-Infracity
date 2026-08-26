import React from 'react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

export default function PressCard({ article, onSelectArticle }) {
  return (
    <div
      onClick={() => onSelectArticle && onSelectArticle(article)}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-[#D4AF37] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Newspaper Clipping Image Container */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-900">
          <img
            src={article.image}
            alt={article.headline}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter contrast-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          
          {/* Publication Tag */}
          <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-stone-950/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-montserrat font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
            <Newspaper className="w-3 h-3 text-[#D4AF37]" />
            <span>{article.publication}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          {/* Meta Date */}
          <div className="flex items-center gap-2 font-montserrat text-[11px] text-stone-400 font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#997B20]" />
            <span>{article.date}</span>
          </div>

          {/* Headline */}
          <h3 className="font-serif font-bold text-lg text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-2">
            {article.headline}
          </h3>

          {/* Excerpt */}
          <p className="font-montserrat text-stone-600 text-xs leading-relaxed font-light line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
        <span className="font-montserrat text-[11px] font-bold uppercase tracking-widest text-[#997B20] group-hover:text-stone-900 transition-colors flex items-center gap-1.5">
          <span>View Coverage</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
        </span>
      </div>

    </div>
  );
}
