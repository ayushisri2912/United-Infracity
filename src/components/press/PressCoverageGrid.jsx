import React, { useState } from 'react';
import PressCard from './PressCard';
import { Sparkles } from 'lucide-react';

export default function PressCoverageGrid({ onSelectArticle }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const pressArticles = [
    {
      id: 1,
      publication: 'Times of India',
      date: 'August 2026',
      category: 'Print Media',
      headline: 'United Infracity Awarded "Best Commercial Developer of the Year" at Infra Excellence Summit',
      excerpt: 'Recognizing Aura Business Tower’s iconic glass rotunda engineering, LEED Platinum sustainability rating, and state-of-the-art corporate amenities.',
      image: '/images/newpaper.jpg'
    },
    {
      id: 2,
      publication: 'Hindustan Times',
      date: 'July 2026',
      category: 'National News',
      headline: 'High Demand for Ultra-Luxury Sky Condos as United Grand Residences Nears Top-Out Stage',
      excerpt: 'Buyers and NRI investors flock to United Grand Residences as construction reaches top floor with 85% inventory sold prior to completion.',
      image: '/images/press4.jpg'
    },
    {
      id: 3,
      publication: 'Business Standard',
      date: 'June 2026',
      category: 'Financial Report',
      headline: 'United Infracity Registers 42% Year-on-Year Revenue Growth Driven by Township Launches',
      excerpt: 'Corporate financial disclosure reveals robust expansion in integrated township ecosystems across North India’s premium growth corridors.',
      image: '/images/press3.jpg'
    },
    {
      id: 4,
      publication: 'Dainik Jagran',
      date: 'May 2026',
      category: 'Regional Press',
      headline: 'Government Approves Infrastructure Alignment for United Imperial Township Sector',
      excerpt: 'State infrastructure board praises master plan integration, zero-discharge water treatment plants, and wide 60-meter arterial green avenues.',
      image: '/images/certificate.jpg'
    },
    {
      id: 5,
      publication: 'Amar Ujala',
      date: 'April 2026',
      category: 'Regional Press',
      headline: 'United Sovereign Villas Celebrates 100% On-Time Delivery Milestone with VVIP Handover',
      excerpt: 'Residents express delight as United Infracity fulfills possession promises two months ahead of RERA deadline for 5 BHK luxury villas.',
      image: '/images/press2.jpg'
    },
    {
      id: 6,
      publication: 'Economic Times',
      date: 'March 2026',
      category: 'National News',
      headline: 'The Rise of Integrated Grade-A Commercial Parks in Urban NCR Corridor',
      excerpt: 'Thought leadership piece highlighting how United Commercial Square is setting benchmarks for institutional real estate investments.',
      image: '/images/press5.jpg'
    }
  ];

  const categories = ['All', 'National News', 'Print Media', 'Financial Report', 'Regional Press'];

  const filteredArticles = activeFilter === 'All'
    ? pressArticles
    : pressArticles.filter(item => item.category === activeFilter);

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>ARCHIVAL MEDIA ARCHIVE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
              Latest Print & <span className="text-[#D4AF37] italic font-serif">Digital Coverage</span>
            </h2>
            <p className="font-montserrat text-stone-600 text-xs sm:text-sm font-light max-w-lg">
              Explore national press coverage, architectural feature stories, and corporate announcements about United Infracity Private Limited.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#D4AF37] text-stone-950 shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <PressCard
              key={article.id}
              article={article}
              onSelectArticle={onSelectArticle}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
