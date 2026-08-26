import React, { useEffect } from 'react';
import ContactHeroBanner from '../components/contact/ContactHeroBanner';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import GoogleMapSection from '../components/contact/GoogleMapSection';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FAF8F5] text-[#1C1C1A] font-montserrat min-h-screen">
      
      {/* 1. Hero Banner */}
      <ContactHeroBanner />

      {/* 2. Two-Column Contact Section */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Get In Touch & Info Card */}
            <div className="lg:col-span-5">
              <ContactInfoSection />
            </div>

            {/* Right Column: Send Us A Message Form */}
            <div className="lg:col-span-7">
              <ContactFormSection />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Full-Width Embedded Google Map */}
      <GoogleMapSection />

    </div>
  );
}
