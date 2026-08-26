import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import FeaturedVideoSection from './FeaturedVideoSection';
import CustomerStoriesSection from './CustomerStoriesSection';
import TrustInNumbersSection from './TrustInNumbersSection';
import CustomerGallerySection from './CustomerGallerySection';
import CtaSection from './CtaSection';
import VideoModal from './VideoModal';
import ImageLightboxModal from '../common/ImageLightboxModal';
import { ArrowUp } from 'lucide-react';

export default function TestimonialsPage({ onOpenEnquire, onNavigateHome }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const handleWatchStoriesClick = () => {
    const el = document.getElementById('featured-story-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjectsClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1C1C1A] font-montserrat antialiased selection:bg-[#C6A15B] selection:text-white relative">
      
      {/* 1. HERO SECTION */}
      <HeroSection onWatchStoriesClick={handleWatchStoriesClick} />

      {/* 2. FEATURED VIDEO TESTIMONIAL SECTION */}
      <FeaturedVideoSection onPlayVideo={(story) => setSelectedVideo(story)} />

      {/* 3. CUSTOMER STORIES SECTION */}
      <CustomerStoriesSection />

      {/* 4. TRUST IN NUMBERS SECTION */}
      <TrustInNumbersSection />

      {/* 5. CUSTOMER GALLERY MASONRY SECTION */}
      <CustomerGallerySection onSelectImage={(img) => setSelectedImage(img)} />

      {/* 6. CALL TO ACTION SECTION */}
      <CtaSection
        onExploreProjectsClick={handleExploreProjectsClick}
        onOpenEnquire={onOpenEnquire}
      />

      {/* VIDEO MODAL */}
      <VideoModal
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        videoStory={selectedVideo}
      />

      {/* IMAGE LIGHTBOX MODAL */}
      <ImageLightboxModal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        selectedImage={selectedImage}
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
