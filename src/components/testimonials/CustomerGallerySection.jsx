import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';

export default function CustomerGallerySection({ onSelectImage }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: 'Grand Living Room Interior',
      category: 'Modern Interiors',
      project: 'The Sovereign Estates',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      span: 'col-span-1 md:col-span-2 row-span-2',
      aspect: 'aspect-[4/3] md:aspect-[16/10]'
    },
    {
      id: 2,
      title: 'Happy Residents & Handover Ceremony',
      category: 'Happy Families',
      project: 'United Grand Towers',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 3,
      title: 'Luxury Apartments Facade',
      category: 'Luxury Apartments',
      project: 'United Sovereign Estates',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 4,
      title: 'Royal Clubhouse & Olympic Pool',
      category: 'Clubhouse',
      project: 'The Sovereign Manor',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 5,
      title: 'Manicured Botanical Gardens',
      category: 'Landscape',
      project: 'United Township Boulevard',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1 md:col-span-2',
      aspect: 'aspect-[16/9]'
    },
    {
      id: 6,
      title: 'Architectural Exterior Illumination',
      category: 'Building Exterior',
      project: 'Aura Commercial Towers',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 7,
      title: 'Penthouse Sky Deck Lounge',
      category: 'Luxury Apartments',
      project: 'Grand Sky Residency',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 8,
      title: 'Private Infinity Villa Oasis',
      category: 'Modern Interiors',
      project: 'The Sovereign Estates',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1 md:col-span-2',
      aspect: 'aspect-[16/9]'
    }
  ];

  const filterTabs = ['All', 'Luxury Apartments', 'Happy Families', 'Clubhouse', 'Landscape', 'Modern Interiors', 'Building Exterior'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#F8F6F1] relative border-t border-[#C49D55]/15">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49D55]/10 border border-[#C49D55]/30 text-[#C49D55] text-xs font-semibold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VISUAL SHOWCASE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141414]">
              The Resident <span className="italic text-[#C49D55]">Gallery</span>
            </h2>
            <p className="font-montserrat text-xs sm:text-sm text-stone-600 font-light max-w-lg">
              A curated visual glimpse into life, landscapes, and architectural luxury across United Infracity developments.
            </p>
          </div>

          {/* Filter Categories Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 font-montserrat text-xs font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-[#141414] text-[#C49D55] border border-[#C49D55] shadow-sm'
                    : 'bg-white text-stone-600 hover:text-[#141414] border border-stone-200 hover:border-[#C49D55]/40'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Style Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className={`group relative overflow-hidden shadow-md border border-[#C49D55]/25 bg-stone-900 cursor-pointer ${item.span || ''}`}
            >
              {/* Image with zoom-on-hover animation */}
              <div className={`w-full h-full relative overflow-hidden ${item.aspect}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-100"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Hover Content Overlay */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-white pointer-events-none">
                <div className="flex justify-end">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-2.5 py-0.5 bg-[#C49D55] text-white font-montserrat text-[10px] font-bold uppercase tracking-wider mb-1.5 shadow-xs">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="font-montserrat text-xs text-stone-300 font-light mt-0.5">
                    {item.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
