import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function LatestNewsGrid({ newsList, onSelectNews }) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 border-b border-[#E8DCC8] pb-6 gap-4">
          <div>
            <span className="font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-[#C6A15B] block mb-1">
              PRESS RELEASE ARCHIVES
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-normal text-[#1C1C1A]">
              Latest <span className="italic text-[#C6A15B]">News & Announcements</span>
            </h2>
          </div>
          <span className="font-montserrat text-xs font-medium text-[#66625A]">
            Showing {newsList.length} Releases
          </span>
        </div>

        {/* 2-Column Responsive Grid on Desktop & Tablet, 1-Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {newsList.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectNews(item)}
              className="group bg-white rounded-xl overflow-hidden border border-[#E8DCC8] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-[#C6A15B]/12 hover:border-[#C6A15B]/60 hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Large Featured Image with Zoom on Hover */}
                <div className="relative aspect-[16/9] overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.97]"
                  />
                  {/* Category Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1C1C1A] border border-[#E8DCC8] font-montserrat text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-3">
                  
                  {/* Publish Date */}
                  <div className="flex items-center gap-1.5 text-[11px] font-montserrat text-[#66625A] font-light">
                    <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{item.date}</span>
                  </div>

                  {/* News Title */}
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#1C1C1A] leading-snug group-hover:text-[#C6A15B] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Two-Line Description */}
                  <p className="font-montserrat text-xs sm:text-sm text-[#66625A] font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-stone-100 mt-2 flex items-center justify-between">
                <span className="font-montserrat text-[11px] text-stone-400 font-light">
                  {item.location || 'Corporate HQ'}
                </span>

                <div className="inline-flex items-center gap-1.5 font-montserrat text-xs font-bold text-[#C6A15B] group-hover:text-[#1C1C1A] transition-colors">
                  <span>Read Full Release</span>
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
