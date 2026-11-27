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
      quote:
        'Our experience with United Infracity exceeded every expectation. The quality, professionalism, and commitment made our dream home a reality.',
      stars: 5,
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      videoUrl: '/images/house-vid.mp4',
      propertyDetails: '7,500 Sq. Ft. Custom Mansion • Handed over in 2024'
    },
    {
      id: 'story-2',
      title: 'Aura Business Park Pentoffice',
      customerName: 'Dr. Rajesh & Ananya Malhotra',
      designation: 'Managing Director, Apex Health Corp',
      projectName: 'Aura Commercial Towers, Sector 62',
      quote:
        'The level of structural architectural finesse and timely handover is unparalleled. United Infracity sets the benchmark for luxury corporate addresses.',
      stars: 5,
      thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
      videoUrl: '/images/video2.mp4',
      propertyDetails: 'Grade-A Commercial Penthouse • 12,000 Sq. Ft.'
    },
    {
      id: 'story-3',
      title: 'Grand Residency Sky Villa',
      customerName: 'Kavita & Devendra Nambiar',
      designation: 'International Portfolio Investor',
      projectName: 'United Grand Towers, Cyber City',
      quote:
        'From transparent paperwork to ultra-luxury finishing, living here feels like staying in a 7-star resort every single day.',
      stars: 5,
      thumbnail: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
      videoUrl: '/images/video3.mp4',
      propertyDetails: '4 BHK Sky Duplex • Panoramic Skyline Views'
    },
    {
      id: 'story-4',
      title: 'United Orchid Heights Residence',
      customerName: 'Arun & Meera Srivastava',
      designation: 'Senior Corporate Director',
      projectName: 'United Orchid Heights, Vrindavan Yojana',
      quote:
        'From the grand architecture to the thoughtful cross-ventilation and natural lighting, United Orchid Heights embodies elevated modern urban living.',
      stars: 5,
      thumbnail: '/images/living-room.webp',
      videoUrl: '/images/video4.mp4',
      propertyDetails: '3 BHK + Study Residence • Vrindavan Yojana'
    }
  ];

  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const currentStory = videoStories[activeStoryIndex];

  return (
    <section id="featured-story-section" className="pt-6 sm:pt-8 pb-6 sm:pb-8 bg-[#F8F6F1] relative overflow-hidden">
      
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C49D55]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C49D55]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* Section Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 border-b border-[#C49D55]/20 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49D55]/10 border border-[#C49D55]/30 text-[#C49D55] text-xs font-semibold uppercase tracking-[0.25em] mb-2.5">
              <Award className="w-3.5 h-3.5" />
              <span>FEATURED CINEMATIC TESTIMONIAL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141414]">
              Voices of <span className="italic font-normal text-[#C49D55]">Distinction</span>
            </h2>
          </div>

          {/* Interactive Story Switcher Buttons */}
          <div className="flex items-center gap-2 mt-4 sm:mt-0 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {videoStories.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => setActiveStoryIndex(idx)}
                className={`px-4 py-2 font-montserrat text-xs font-medium tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeStoryIndex === idx
                    ? 'bg-[#141414] text-[#C49D55] border border-[#C49D55] shadow-md'
                    : 'bg-white text-stone-600 hover:text-[#141414] border border-stone-200 hover:border-[#C49D55]/50'
                }`}
              >
                Story {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Large Luxury Video Thumbnail */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden shadow-xl shadow-[#141414]/10 border border-[#C49D55]/30 bg-[#141414] aspect-[16/10]">
              <img
                src={currentStory.thumbnail}
                alt={currentStory.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.03]"
              />
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

              {/* Glassmorphism Play Button in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => onPlayVideo(currentStory)}
                  className="group/btn relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-[#C49D55] hover:border-[#C49D55] cursor-pointer"
                  title="Watch Video Testimonial"
                >
                  {/* Glowing Pulse Ring */}
                  <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75 group-hover/btn:bg-[#C49D55]" />
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover/btn:text-[#141414] fill-current ml-0.5 transition-colors duration-300 z-10" />
                </button>
              </div>

              {/* Bottom Info Bar inside Thumbnail */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white pointer-events-none">
                <div>
                  <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49D55]">
                    {currentStory.title}
                  </span>
                  <p className="font-montserrat text-xs text-stone-300 font-light mt-0.5">
                    {currentStory.propertyDetails}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/20 text-xs font-light text-stone-200">
                  <Play className="w-3 h-3 fill-current text-[#C49D55]" />
                  <span>4K Video Story</span>
                </div>
              </div>
            </div>

            {/* Subtle Gold Ambient Frame Shadow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C49D55]/20 to-transparent -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* RIGHT: High-End Editorial Testimonial Content */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Large Gold Quotation Mark */}
              <div className="flex items-center justify-between">
                <Quote className="w-12 h-12 text-[#C49D55]/40 stroke-[1]" />
                
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(currentStory.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C49D55] fill-[#C49D55]" />
                  ))}
                  <span className="font-montserrat text-xs font-semibold text-[#141414] ml-2 tracking-wider">
                    5.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Main Testimonial Statement */}
              <blockquote className="font-serif text-2xl sm:text-3xl font-normal leading-snug text-[#141414] italic">
                "{currentStory.quote}"
              </blockquote>
            </div>

            {/* Customer Details & Elegant Divider */}
            <div className="space-y-3 pt-4 border-t border-[#C49D55]/30">
              <div>
                <h3 className="font-serif text-2xl font-normal tracking-tight text-[#141414]">
                  {currentStory.customerName}
                </h3>
                <p className="font-montserrat text-xs font-medium text-stone-500 mt-0.5 tracking-wide">
                  {currentStory.designation}
                </p>
                <div className="inline-block mt-2 px-3 py-0.5 bg-[#C49D55]/10 border border-[#C49D55]/30 text-[#C49D55] font-montserrat text-[11px] font-semibold tracking-wider uppercase">
                  {currentStory.projectName}
                </div>
              </div>

              {/* Action Link to Watch Video Modal */}
              <div className="pt-2">
                <button
                  onClick={() => onPlayVideo(currentStory)}
                  className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[#141414] hover:text-[#C49D55] transition-colors group/link cursor-pointer"
                >
                  <span>Watch Full Video Interview</span>
                  <ChevronRight className="w-4 h-4 text-[#C49D55] group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
