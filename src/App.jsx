import React, { useState } from 'react';
import SplashView from './components/SplashView';
import Navbar from './components/Navbar';
import HeroBannerSlider from './components/HeroBannerSlider';
import CentralFilterBox from './components/CentralFilterBox';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import AmenitiesSection from './components/AmenitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import MediaSection from './components/MediaSection';
import BrandPage from './components/BrandPage';
import MentorPage from './components/MentorPage';
import ManagementPage from './components/ManagementPage';
import OngoingResidentialPage from './components/OngoingResidentialPage';
import OngoingCommercialPage from './components/OngoingCommercialPage';
import UnitedTownshipPage from './components/UnitedTownshipPage';
import CompletedProjectsPage from './components/CompletedProjectsPage';
import GovernmentProjectsPage from './components/GovernmentProjectsPage';
import EnquiryModal from './components/EnquiryModal';
import SearchModal from './components/SearchModal';
import UserModal from './components/UserModal';
import Footer from './components/Footer';
import Launch from './components/Launch';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedConfig, setSelectedConfig] = useState('All');
  console.log(currentPage)

  const handleExplore = () => {
    setShowSplash(false);
    // setCurrentPage('home');
    setCurrentPage('launch');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomePage = () =>{
    setShowSplash(false);
    setCurrentPage('launch');
    // setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  const handleSelectSection = (sectionId, filterCategory) => {
    if (showSplash) {
      setShowSplash(false);
    }
    
    if (filterCategory) {
      setActiveProjectFilter(filterCategory);
    }

    if (sectionId === 'brand' || sectionId === 'about') {
      setCurrentPage('brand');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'mentor') {
      setCurrentPage('mentor');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'management') {
      setCurrentPage('management');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'projects-residential') {
      setCurrentPage('projects-residential');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'projects-commercial') {
      setCurrentPage('projects-commercial');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'projects-township') {
      setCurrentPage('projects-township');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'projects-completed') {
      setCurrentPage('projects-completed');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'projects-government') {
      setCurrentPage('projects-government');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'launch') {
      setCurrentPage('launch');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Switch back to home view for any home section
    setCurrentPage('home');
    
    setTimeout(() => {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans antialiased selection:bg-[#D4AF37] selection:text-white">
      
      {showSplash ? (
        /* 1. INITIAL LANDING VIEW (Splash / Intro Screen) */
        <SplashView onExplore={handleExplore} />
      ) : currentPage === 'launch' ? (
            /* DEDICATED GOVERNMENT PROJECTS PAGE VIEW */
            <div className="flex-grow">
              <Launch handleHome={handleHomePage}
                // onOpenEnquire={() => setIsEnquireModalOpen(true)}
                // onNavigateHome={() => handleSelectSection('hero')}
              />
            </div>
          ) : (
        /* MAIN APPLICATION FLOW */
        <div className="animate-in fade-in duration-500 flex flex-col min-h-screen">
          
          {/* STICKY NAVBAR */}
          <Navbar
            onOpenSearch={() => setIsSearchModalOpen(true)}
            onOpenUserModal={() => setIsUserModalOpen(true)}
            onSelectSection={handleSelectSection}
          />

          {currentPage === 'brand' ? (
            /* DEDICATED BRAND WEBPAGE VIEW */
            <div className="flex-grow">
              <BrandPage
                onOpenEnquire={() => setIsEnquireModalOpen(true)}
                onSelectSection={handleSelectSection}
                onNavigateHome={() => handleSelectSection('projects')}
              />
            </div>
          ) : currentPage === 'mentor' ? (
            /* DEDICATED OUR MENTOR WEBPAGE VIEW */
            <div className="flex-grow">
              <MentorPage
                onOpenEnquire={() => setIsEnquireModalOpen(true)}
                onNavigateHome={() => handleSelectSection('projects')}
              />
            </div>
          ) : currentPage === 'management' ? (
            /* DEDICATED MANAGEMENT WEBPAGE VIEW */
            <div className="flex-grow">
              <ManagementPage
                onOpenEnquire={() => setIsEnquireModalOpen(true)}
                onNavigateHome={() => handleSelectSection('projects')}
              />
            </div>
          ) : currentPage === 'projects-residential' ? (
            /* DEDICATED ONGOING RESIDENTIAL PAGE VIEW */
            <div className="flex-grow">
              <OngoingResidentialPage
                onOpenEnquire={() => setIsEnquireModalOpen(true)}
                onNavigateHome={() => handleSelectSection('hero')}
              />
            </div>
          ) : currentPage === 'projects-commercial' ? (
            /* DEDICATED ONGOING COMMERCIAL PAGE VIEW */
            <div className="flex-grow">
              <OngoingCommercialPage
                onOpenEnquire={() => setIsEnquireModalOpen(true)}
                onNavigateHome={() => handleSelectSection('hero')}
              />
            </div>
          ) : currentPage === 'projects-township' ? (
            /* DEDICATED UNITED TOWNSHIP PAGE VIEW */
            <div className="flex-grow">
              <UnitedTownshipPage
                onOpenEnquire={() => setIsEnquireModalOpen(true)}
                onNavigateHome={() => handleSelectSection('hero')}
              />
            </div>
          ) : currentPage === 'projects-completed' ? (
            /* DEDICATED COMPLETED PROJECTS PAGE VIEW */
            <div className="flex-grow">
              <CompletedProjectsPage
                onOpenEnquire={() => setIsEnquireModalOpen(true)}
                onNavigateHome={() => handleSelectSection('hero')}
              />
            </div>
          ) : currentPage === 'projects-government' ? (
            /* DEDICATED GOVERNMENT PROJECTS PAGE VIEW */
            <div className="flex-grow">
              <GovernmentProjectsPage
                onOpenEnquire={() => setIsEnquireModalOpen(true)}
                onNavigateHome={() => handleSelectSection('hero')}
              />
            </div>
          ) : (
            /* HOME PAGE FLOW */
            <div className="flex-grow">
              {/* HERO BANNER SLIDER */}
              <HeroBannerSlider onSelectSection={handleSelectSection} />

              {/* CENTRAL FILTERING BOX */}
              <CentralFilterBox
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedCategory={activeProjectFilter}
                setSelectedCategory={setActiveProjectFilter}
                selectedConfig={selectedConfig}
                setSelectedConfig={setSelectedConfig}
              />

              {/* MAIN SECTIONS */}
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
                  selectedCity={selectedCity}
                  selectedConfig={selectedConfig}
                />

                {/* Luxury Lifestyle Amenities */}
                <AmenitiesSection />

                {/* Resident Testimonials */}
                <TestimonialsSection />

                {/* Media & News Coverage */}
                <MediaSection />
              </main>
            </div>
            
          )}

          {/* FOOTER */}
          <Footer
            onSelectSection={handleSelectSection}
            onOpenEnquire={() => setIsEnquireModalOpen(true)}
          />

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
