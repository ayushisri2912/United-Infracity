import React, { useState } from 'react';
import { Play, Star, Quote, ChevronRight, Award } from 'lucide-react';

export default function FeaturedVideoSection({ onPlayVideo }) {
  const videoStories = [
    {
      id: 'story-1',
      title: 'The Singhania Villa',
      customerName: 'Mr. & Mrs. Vikramaditya Singhania',
      designation: 'Founder & CEO, Horizon Tech Ventures',
      projectName: 'The Sovereign Estates, Golf Course Road',
      quote: 'Our experience with United Infracity exceeded every expectation. The quality, professionalism, and commitment made our dream home a reality.',
      stars: 5,
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-villa-with-pool-and-lights-42868-large.mp4',
      propertyDetails: '7,500 Sq. Ft. Custom Mansion • Handed over in 2024'
    },
    {
      id: 'story-2',
      title: 'Aura Business Park Pentoffice',
      customerName: 'Dr. Rajesh & Ananya Malhotra',
      designation: 'Managing Director, Apex Health Corp',
      projectName: 'Aura Commercial Towers, Sector 62',
      quote: 'The level of structural architectural finesse and timely handover is unparalleled. United Infracity sets the benchmark for luxury corporate addresses.',
      stars: 5,
      thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-view-of-a-luxurious-modern-building-interior-41551-large.mp4',
      propertyDetails: 'Grade-A Commercial Penthouse • 12,000 Sq. Ft.'
    },
    {
      id: 'story-3',
      title: 'Grand Residency Sky Villa',
      customerName: 'Kavita & Devendra Nambiar',
      designation: 'International Portfolio Investor',
      projectName: 'United Grand Towers, Cyber City',
      quote: 'From transparent paperwork to ultra-luxury finishing, living here feels like staying in a 7-star resort every single day.',
      stars: 5,
      thumbnail: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-camera-pan-of-a-modern-living-room-with-large-windows-41553-large.mp4',
      propertyDetails: '4 BHK Sky Duplex • Panoramic Skyline Views'
    }
  ];

  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const currentStory = videoStories[activeStoryIndex];

  return (
    <section id="featured-story-section" className="py-24 sm:py-32 bg-[#F8F5F0] relative overflow-hidden">
      
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C6A15B]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C6A15B]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-[#C6A15B]/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/20 text-[#A88746] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>FEATURED CINEMATIC TESTIMONIAL</span>
            </div>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1C1C1A]">
              Voices of <span className="italic font-normal text-[#C6A15B]">Distinction</span>
            </h2>
          </div>

          {/* Interactive Story Switcher Buttons */}
          <div className="flex items-center gap-2 mt-6 sm:mt-0 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {videoStories.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => setActiveStoryIndex(idx)}
                className={`px-4 py-2 rounded-full font-montserrat text-xs font-semibold tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeStoryIndex === idx
                    ? 'bg-[#1C1C1A] text-white shadow-lg border border-[#1C1C1A]'
                    : 'bg-white text-stone-600 hover:text-[#1C1C1A] border border-stone-200 hover:border-[#C6A15B]/50'
                }`}
              >
                Story {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Luxury Video Thumbnail */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1C1C1A]/10 border border-[#C6A15B]/30 bg-[#1C1C1A] aspect-[16/10]">
              <img
                src={currentStory.thumbnail}
                alt={currentStory.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.03]"
              />
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Glassmorphism Play Button in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => onPlayVideo(currentStory)}
                  className="group/btn relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-[#C6A15B] hover:border-[#C6A15B] cursor-pointer"
                  title="Watch Video Testimonial"
                >
                  {/* Glowing Pulse Ring */}
                  <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75 group-hover/btn:bg-[#C6A15B]" />
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover/btn:text-[#1C1C1A] fill-current ml-1 transition-colors duration-300 z-10" />
                </button>
              </div>

              {/* Bottom Info Bar inside Thumbnail */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
                <div>
                  <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.25em] text-[#C6A15B]">
                    {currentStory.title}
                  </span>
                  <p className="font-montserrat text-xs text-stone-300 font-light mt-0.5">
                    {currentStory.propertyDetails}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-light text-stone-200">
                  <Play className="w-3 h-3 fill-current text-[#C6A15B]" />
                  <span>4K Video Story</span>
                </div>
              </div>
            </div>

            {/* Subtle Gold Ambient Frame Shadow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#C6A15B]/20 to-transparent -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* RIGHT: High-End Editorial Testimonial Content */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Large Gold Quotation Mark */}
              <div className="flex items-center justify-between">
                <Quote className="w-16 h-16 text-[#C6A15B]/40 stroke-[1]" />
                
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(currentStory.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C6A15B] fill-[#C6A15B]" />
                  ))}
                  <span className="font-montserrat text-xs font-semibold text-[#1C1C1A] ml-2 tracking-wider">
                    5.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Main Testimonial Statement */}
              <blockquote className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-normal leading-snug text-[#1C1C1A] italic">
                "{currentStory.quote}"
              </blockquote>
            </div>

            {/* Customer Details & Elegant Divider */}
            <div className="space-y-4 pt-6 border-t border-[#C6A15B]/30">
              <div>
                <h3 className="font-cormorant text-2xl font-bold tracking-tight text-[#1C1C1A]">
                  {currentStory.customerName}
                </h3>
                <p className="font-montserrat text-xs font-medium text-stone-500 mt-0.5 tracking-wide">
                  {currentStory.designation}
                </p>
                <div className="inline-block mt-2 px-3 py-1 rounded-full bg-white border border-[#C6A15B]/30 text-[#A88746] font-montserrat text-[11px] font-semibold tracking-wider uppercase shadow-xs">
                  {currentStory.projectName}
                </div>
              </div>

              {/* Action Link to Watch Video Modal */}
              <div className="pt-2">
                <button
                  onClick={() => onPlayVideo(currentStory)}
                  className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[#1C1C1A] hover:text-[#C6A15B] transition-colors group/link cursor-pointer"
                >
                  <span>Watch Full Video Interview</span>
                  <ChevronRight className="w-4 h-4 text-[#C6A15B] group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
