import React, { useState } from 'react';
import SplashView from './components/SplashView';
import Navbar from './components/Navbar';
import HeroBannerSlider from './components/HeroBannerSlider';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import AmenitiesSection from './components/AmenitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import MediaSection from './components/MediaSection';
import EnquiryModal from './components/EnquiryModal';
import SearchModal from './components/SearchModal';
import UserModal from './components/UserModal';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState('All');

  const handleExplore = () => {
    setShowSplash(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSection = (sectionId, filterCategory) => {
    if (showSplash) {
      setShowSplash(false);
    }
    if (filterCategory) {
      setActiveProjectFilter(filterCategory);
    }
    setTimeout(() => {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans antialiased selection:bg-[#D4AF37] selection:text-white">
      
      {showSplash ? (
        /* 1. INITIAL LANDING VIEW (Splash / Intro Screen) */
        <SplashView onExplore={handleExplore} />
      ) : (
        /* MAIN HOME PAGE FLOW */
        <div className="animate-in fade-in duration-500">
          
          {/* 2. STICKY NAVBAR */}
          <Navbar
            onOpenSearch={() => setIsSearchModalOpen(true)}
            onOpenUserModal={() => setIsUserModalOpen(true)}
            onSelectSection={handleSelectSection}
          />

          {/* 3. NEW HERO BANNER SLIDER (Full Width Flagship Banner) */}
          <HeroBannerSlider onSelectSection={handleSelectSection} />

          {/* 4. MAIN HOME PAGE SECTIONS */}
          <main>
            {/* Pioneers of Modern Urban Development Section */}
            <HeroSection
              onOpenEnquire={() => setIsEnquireModalOpen(true)}
              onSelectSection={handleSelectSection}
            />

            {/* Creating Landmarks That Inspire Generations Section */}
            <AboutSection />

            {/* Featured Projects Showcase */}
            <ProjectsShowcase
              onOpenEnquire={() => setIsEnquireModalOpen(true)}
              activeFilter={activeProjectFilter}
              setActiveFilter={setActiveProjectFilter}
            />

            {/* Luxury Lifestyle Amenities */}
            <AmenitiesSection />

            {/* Resident Testimonials */}
            <TestimonialsSection />

            {/* Media & News Coverage */}
            <MediaSection />
          </main>

          {/* FOOTER */}
          <Footer
            onSelectSection={handleSelectSection}
            onOpenEnquire={() => setIsEnquireModalOpen(true)}
          />

          {/* Floating Back to Intro View Toggle */}
          <div className="fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setShowSplash(true)}
              className="px-4 py-2 bg-[#1A1A1A]/80 hover:bg-[#1A1A1A] backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 rounded-full text-xs font-semibold shadow-2xl hover:scale-105 transition-all"
              title="Return to Splash Screen"
            >
              ✦ Splash View
            </button>
          </div>

        </div>
      )}

      {/* ENQUIRY MODAL */}
      <EnquiryModal
        isOpen={isEnquireModalOpen}
        onClose={() => setIsEnquireModalOpen(false)}
      />

      {/* SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectProject={(filter) => handleSelectSection('projects', filter)}
      />

      {/* USER ACCOUNT MODAL */}
      <UserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        onOpenEnquire={() => setIsEnquireModalOpen(true)}
      />

    </div>
  );
}
