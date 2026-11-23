import React, { useEffect } from 'react';
import HeroBannerSlider from '../components/home/HeroBannerSlider';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import SecureLiving from '../components/home/SecureLiving';
import LifestyleExperiences from '../components/home/LifestyleExperiences';
import SwimmingPool from '../components/home/SwimmingPool';
import LuxuryInteriors from '../components/home/LuxuryInteriors';
import LocationConnectivity from '../components/home/LocationConnectivity';
import FloorPlan from '../components/home/FloorPlan';
import Specifications from '../components/home/Specifications';
import AboutAwasthiGroup from '../components/home/AboutAwasthiGroup';
import GroupProjects from '../components/home/GroupProjects';
import EnquirySection from '../components/home/EnquirySection';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      {/* 1. Hero Banner Slider */}
      <HeroBannerSlider />

      {/* 2. Pioneers of Modern Urban Development (Hero Story) */}
      <HeroSection />

      {/* 3. Creating Landmarks That Inspire Generations (About Section) */}
      <AboutSection />

      <SecureLiving/>

      <LifestyleExperiences/>
    
      <SwimmingPool/>

      <LuxuryInteriors/>

      <LocationConnectivity/>

      <FloorPlan/>

      <Specifications/>

      {/* 4. About Awasthi Group & Group Projects */}
      <AboutAwasthiGroup/>
  
      <GroupProjects/>

      <EnquirySection/>
      
    </div>
  );
}
