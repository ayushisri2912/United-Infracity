import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactHeroBanner from '../components/contact/ContactHeroBanner';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import GoogleMapSection from '../components/contact/GoogleMapSection';
import { Landmark, ExternalLink } from 'lucide-react';

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#rera-details') {
      const timer = setTimeout(() => {
        const element = document.getElementById('rera-details');
        if (element) {
          const navbarHeight = 85;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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

      {/* 3. Statutory RERA Compliance & Collection Account Details Panel */}
      <section id="rera-details" className="scroll-mt-24 pb-12 sm:pb-16 bg-[#FAF8F5]">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-gradient-to-r from-stone-900/95 via-stone-900/90 to-stone-950/95 border border-[#D4AF37]/30 shadow-xl relative overflow-hidden text-stone-200">
            
            {/* Subtle Ambient Gold Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 relative z-10">
              
              {/* Left Section: RERA Banking Details */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                    <Landmark className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide uppercase">
                      RERA Designated Collection Account Details
                    </h5>
                    <p className="text-[11.5px] text-[#D4AF37] font-medium tracking-wide">
                      Project: United Orchid Heights | Launch Date: 04-Nov-2026 | RERA Reg: UPRERAPRJ593231/11/2026
                    </p>
                  </div>
                </div>

                {/* Bank Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5 pt-1 text-xs sm:text-[13px]">
                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                    <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Account Name</span>
                    <span className="font-semibold text-white tracking-tight">UIPL Collection A/c for United Orchid Heights</span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                    <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Account Number</span>
                    <span className="font-mono font-bold text-[#D4AF37] text-sm sm:text-[15px] tracking-wider select-all">
                      0752102900000053
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                    <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Bank Name &amp; IFSC</span>
                    <span className="font-semibold text-white">Punjab National Bank (PNB)</span>
                    <span className="block text-stone-300 font-mono text-[11.5px]">IFSC: <strong className="text-[#D4AF37] select-all">PNB0075210</strong></span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 sm:col-span-2 xl:col-span-2">
                    <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Branch Address</span>
                    <span className="text-stone-200">
                      B - 78, Gate – 3 Phoenix Mall, Kanpur Road, Alambagh, Lucknow, Uttar Pradesh – 226005
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex flex-col justify-between">
                    <span className="text-stone-400 block text-[11px] uppercase tracking-wider">RERA Official Portal</span>
                    <a
                      href="https://www.up-rera.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#D4AF37] hover:underline font-semibold"
                    >
                      <span>www.up-rera.in</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Statutory Legal Disclaimer Note */}
                <p className="text-[11px] sm:text-xs text-stone-400 italic pt-1 leading-normal border-t border-stone-800/80">
                  <strong className="text-[#D4AF37] not-italic font-semibold">Mandatory RERA Note:</strong> As per statutory guidelines, all customer receipts and booking funds must strictly be deposited only into the designated RERA Collection Account.
                </p>
              </div>

              {/* Right Section: Location QR Code */}
              <div className="lg:w-48 xl:w-52 shrink-0 flex flex-col items-center justify-center p-4 rounded-xl bg-stone-950/80 border border-[#D4AF37]/30 text-center">
                <div className="p-2 bg-white rounded-lg shadow-md mb-2">
                  <img
                    src="/images/site-location-qr.png"
                    alt="Site Location QR Code"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                  />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest block">
                  Scan QR Code
                </span>
                <span className="text-[9.5px] text-stone-400 block mt-0.5">
                  Site Location &amp; Navigation
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Full-Width Embedded Google Map */}
      <GoogleMapSection />

    </div>
  );
}
