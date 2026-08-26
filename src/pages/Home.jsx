import React, { useEffect } from 'react';
import HeroBannerSlider from '../components/home/HeroBannerSlider';
import CentralFilterBox from '../components/home/CentralFilterBox';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import AmenitiesSection from '../components/home/AmenitiesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import MediaSection from '../components/home/MediaSection';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      {/* 1. Hero Banner Slider */}
      <HeroBannerSlider />

      {/* 2. Central Property Filtering Box */}
      <CentralFilterBox />

      {/* 3. Pioneers of Modern Urban Development (Hero Story) */}
      <HeroSection />

      {/* 4. Creating Landmarks That Inspire Generations (About Section) */}
      <AboutSection />

      {/* 5. Featured Projects Showcase */}
      <ProjectsShowcase />

      {/* 6. Luxury Lifestyle Amenities */}
      <AmenitiesSection />

      {/* 7. Resident Testimonials Teaser */}
      <TestimonialsSection />

      {/* 8. Media & News Coverage */}
      <MediaSection />
    </div>
  );
}
