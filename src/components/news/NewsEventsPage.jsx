import React, { useState, useEffect } from 'react';
import NewsHeroBanner from './NewsHeroBanner';
import FeaturedNewsSection from './FeaturedNewsSection';
import LatestNewsGrid from './LatestNewsGrid';
import EventGallerySection from './EventGallerySection';
import UpcomingEventsSection from './UpcomingEventsSection';
import NewsNewsletterSection from './NewsNewsletterSection';
import NewsDetailModal from './NewsDetailModal';
import ImageLightboxModal from '../common/ImageLightboxModal';
import { ArrowUp } from 'lucide-react';

export default function NewsEventsPage({ onOpenEnquire, onNavigateHome }) {
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const featuredNews = {
    id: 'feat-news-1',
    title: 'United Infracity Announces Next-Gen ₹1,200 Cr Smart Integrated Township Project in Cyber Corridor',
    category: 'MAJOR LAUNCH',
    date: 'August 11, 2026',
    location: 'Gurugram Metro Belt',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1400&auto=format&fit=crop',
    description: 'United Infracity Private Limited unveils its flagship 75-acre integrated township, featuring zero-carbon residences, Grade-A commercial suites, and a 10-acre private botanical park.'
  };

  const latestNewsList = [
    {
      id: 'news-1',
      title: 'United Sovereign Estates Handover Achieves Record 99.4% On-Time Completion Rating',
      category: 'HANDOVER MILESTONE',
      date: 'August 04, 2026',
      location: 'Golf Course Extension',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
      description: 'Over 450 luxury villa homeowners received key deliveries during an exclusive weekend ceremony hosted at The Sovereign Estates Clubhouse.'
    },
    {
      id: 'news-2',
      title: 'Aura Commercial Towers Awarded LEED Platinum Certification for Environmental Excellence',
      category: 'SUSTAINABILITY AWARD',
      date: 'July 27, 2026',
      location: 'Financial District',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      description: 'Recognized for 45% lower energy consumption, smart solar facade glazing, and advanced greywater recycling systems.'
    },
    {
      id: 'news-3',
      title: 'United Infracity Wins "Most Trusted Luxury Developer of the Year" at Realty Awards',
      category: 'CORPORATE AWARD',
      date: 'July 15, 2026',
      location: 'National Hospitality Center',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
      description: 'Honored for architectural innovation, transparent customer relations, and structural engineering standards.'
    },
    {
      id: 'news-4',
      title: 'Community Green Initiative: 10,000 Saplings Planted Across Suburban Townships',
      category: 'CSR INITIATIVE',
      date: 'June 30, 2026',
      location: 'Suburban Green Corridor',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop',
      description: 'United Infracity employees, resident families, and local school children joined hands to enrich urban biodiversity.'
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1C1A] font-montserrat antialiased selection:bg-[#C6A15B] selection:text-white relative">
      
      {/* 1. HERO BANNER */}
      <NewsHeroBanner />

      {/* 2. FEATURED NEWS SECTION */}
      <FeaturedNewsSection
        featuredNews={featuredNews}
        onSelectNews={(item) => setSelectedNews(item)}
      />

      {/* 3. LATEST NEWS GRID */}
      <LatestNewsGrid
        newsList={latestNewsList}
        onSelectNews={(item) => setSelectedNews(item)}
      />

      {/* 4. EVENT GALLERY */}
      <EventGallerySection
        onOpenLightbox={(img) => setSelectedGalleryImage(img)}
      />

      {/* 5. UPCOMING EVENTS TIMELINE */}
      <UpcomingEventsSection
        onRegisterEvent={(evt) => onOpenEnquire && onOpenEnquire()}
      />

      {/* 6. NEWSLETTER SUBSCRIPTION SECTION */}
      <NewsNewsletterSection />

      {/* NEWS DETAIL MODAL */}
      <NewsDetailModal
        isOpen={Boolean(selectedNews)}
        onClose={() => setSelectedNews(null)}
        selectedNews={selectedNews}
      />

      {/* IMAGE LIGHTBOX MODAL */}
      <ImageLightboxModal
        isOpen={Boolean(selectedGalleryImage)}
        onClose={() => setSelectedGalleryImage(null)}
        selectedImage={selectedGalleryImage}
      />

      {/* FLOATING SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#1C1C1A] border border-[#C6A15B]/50 text-[#C6A15B] shadow-2xl flex items-center justify-center hover:bg-[#C6A15B] hover:text-[#1C1C1A] hover:border-[#C6A15B] transition-all duration-300 hover:scale-110 cursor-pointer"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
