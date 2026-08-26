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
    <section className="py-24 sm:py-32 bg-[#F8F5F0] relative border-t border-[#C6A15B]/15">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/20 text-[#A88746] text-xs font-semibold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VISUAL SHOWCASE</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1C1A]">
              The Resident <span className="italic text-[#C6A15B]">Gallery</span>
            </h2>
            <p className="font-montserrat text-sm text-stone-600 font-light max-w-lg">
              A curated visual glimpse into life, landscapes, and architectural luxury across United Infracity developments.
            </p>
          </div>

          {/* Filter Categories Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full font-montserrat text-xs font-semibold tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-[#1C1C1A] text-white shadow-md'
                    : 'bg-white text-stone-600 hover:text-[#1C1C1A] border border-stone-200 hover:border-[#C6A15B]/40'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Style Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className={`group relative rounded-2xl overflow-hidden shadow-lg border border-[#C6A15B]/20 bg-stone-900 cursor-pointer ${item.span || ''}`}
            >
              {/* Image with zoom-on-hover animation */}
              <div className={`w-full h-full relative overflow-hidden ${item.aspect}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.9] group-hover:brightness-100"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Hover Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white pointer-events-none">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-[#C6A15B] text-[#1C1C1A] font-montserrat text-[10px] font-bold uppercase tracking-wider rounded-full mb-2 shadow-xs">
                    {item.category}
                  </span>
                  <h3 className="font-cormorant text-2xl font-bold tracking-tight text-white">
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
