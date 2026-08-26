import React from 'react';

export default function PopularTopicsSection({ categories, activeCategory, onSelectCategory }) {
  return (
    <section className="py-8 bg-[#FAF8F5] border-y border-[#E8DCC8]/60">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="font-montserrat text-[11px] font-bold uppercase tracking-[0.3em] text-[#66625A]">
            POPULAR TOPICS
          </span>

          {/* Category Pill Buttons */}
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-5 py-2 rounded-full font-montserrat text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#C6A15B] text-white shadow-md border border-[#C6A15B]'
                      : 'bg-white text-[#1C1C1A] border border-[#E8DCC8] hover:border-[#C6A15B] hover:bg-[#C6A15B]/10 hover:text-[#C6A15B]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
