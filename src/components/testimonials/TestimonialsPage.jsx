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
    <div className="min-h-screen bg-[#F8F6F1] text-[#141414] font-montserrat antialiased selection:bg-[#C49D55] selection:text-white relative">
      
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
          className="fixed bottom-8 right-8 z-40 w-11 h-11 bg-[#141414] border border-[#C49D55]/50 text-[#C49D55] shadow-2xl flex items-center justify-center hover:bg-[#C49D55] hover:text-[#141414] hover:border-[#C49D55] transition-all duration-300 hover:scale-105 cursor-pointer"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
