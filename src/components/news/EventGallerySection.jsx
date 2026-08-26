import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles } from 'lucide-react';

export default function EventGallerySection({ onOpenLightbox }) {
  const galleryImages = [
    {
      id: 1,
      title: 'Grand Groundbreaking Ceremony - Sovereign Township',
      category: 'Foundation Laying',
      date: 'May 2026',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Annual Real Estate Excellence & Leadership Gala',
      category: 'Award Ceremony',
      date: 'March 2026',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Luxury Clubhouse Inauguration & Handover Gala',
      category: 'Project Launch',
      date: 'February 2026',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'United Green Initiative - 10,000 Tree Plantation CSR',
      category: 'Community CSR',
      date: 'January 2026',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Aura Commercial Towers Structural Topping-Out Ceremony',
      category: 'Construction Milestone',
      date: 'November 2025',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Resident VIP Preview Night & Classical Symphony Evening',
      category: 'Exclusive Resident Event',
      date: 'October 2025',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E8DCC8]">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8DCC8] text-[#C6A15B] text-xs font-bold uppercase tracking-[0.25em]">
            <Camera className="w-3.5 h-3.5" />
            <span>MEDIA ARCHIVES</span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-normal text-[#1C1C1A]">
            Corporate Event <span className="italic text-[#C6A15B]">Gallery</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-[#66625A] font-light leading-relaxed">
            Moments of celebration, milestone handovers, and community initiatives capturing the spirit of United Infracity.
          </p>
        </div>

        {/* 6-Image Equal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(img)}
              className="group relative rounded-xl overflow-hidden shadow-md border border-[#E8DCC8] bg-stone-900 aspect-[4/3] cursor-pointer"
            >
              {/* Image with zoom and scale hover animation */}
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.9] group-hover:brightness-100"
              />

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Text & Icon overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white pointer-events-none">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-0.5 bg-[#C6A15B] text-white font-montserrat text-[10px] font-bold uppercase tracking-wider rounded-full mb-1">
                    {img.category}
                  </span>
                  <h4 className="font-cormorant text-xl font-bold text-white leading-snug">
                    {img.title}
                  </h4>
                  <p className="font-montserrat text-[11px] text-stone-300 font-light mt-0.5">
                    {img.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Gallery Button Below */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenLightbox(galleryImages[0])}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#C6A15B] text-[#1C1C1A] hover:bg-[#C6A15B] hover:text-white font-montserrat text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm cursor-pointer"
          >
            <span>View Gallery</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
