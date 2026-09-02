import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function CentralFilterBox() {
  const {
    selectedCity,
    setSelectedCity,
    activeProjectFilter,
    setActiveProjectFilter,
    selectedConfig,
    setSelectedConfig
  } = useModal();

  return (
    <section className="py-8 bg-[#FDFBF7] relative z-20 border-b border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Ornament Badge */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <div className="w-7 h-7 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-white shadow-sm">
            <span className="text-[#D4AF37] text-xs font-serif font-bold">✴</span>
          </div>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-[#B38F24] uppercase mb-6 sm:mb-8">
          PORTFOLIO OF OUR FINEST PROJECTS
        </h2>

        {/* Central White Box Container */}
        <div className="bg-white rounded-2xl p-4 sm:p-7 lg:p-8 shadow-[0_10px_35px_rgba(212,175,55,0.08)] border border-[#D4AF37]/25 relative">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
          
          {/* 3 Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-end">
            
            {/* FILTER 1: LOCATION */}
            <div className="text-left space-y-1.5">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#997B20] block">
                LOCATION
              </label>
              <div className="relative group">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-stone-800 text-xs sm:text-sm font-semibold tracking-wide rounded-xl px-4 py-3.5 pr-10 appearance-none outline-none cursor-pointer transition-all duration-300 hover:shadow-[0_0_18px_rgba(212,175,55,0.25)] focus:border-[#D4AF37]"
                >
                  <option value="All">CHOOSE CITY (ALL)</option>
                  <option value="Golf Course Extension, Prime Sector">Golf Course Extension</option>
                  <option value="Central Corporate Hub">Central Corporate Hub</option>
                  <option value="Expressway Tech Corridor">Expressway Tech Corridor</option>
                  <option value="Financial District Sector 62">Financial District Sector 62</option>
                  <option value="VVIP Enclave">VVIP Enclave</option>
                  <option value="Capital Administrative Sector">Capital Administrative Sector</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#D4AF37] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            {/* FILTER 2: CATEGORY */}
            <div className="text-left space-y-1.5">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#997B20] block">
                CATEGORY
              </label>
              <div className="relative group">
                <select
                  value={activeProjectFilter}
                  onChange={(e) => setActiveProjectFilter(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-stone-800 text-xs sm:text-sm font-semibold tracking-wide rounded-xl px-4 py-3.5 pr-10 appearance-none outline-none cursor-pointer transition-all duration-300 hover:shadow-[0_0_18px_rgba(212,175,55,0.25)] focus:border-[#D4AF37]"
                >
                  <option value="All">SELECT PROJECT TYPE (ALL)</option>
                  <option value="Residential">Ongoing Residential</option>
                  <option value="Commercial">Ongoing Commercial</option>
                  <option value="Township">United Township</option>
                  <option value="Completed">Completed Projects</option>
                  <option value="Government">Government Projects</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#D4AF37] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            {/* FILTER 3: CONFIGURATION */}
            <div className="text-left space-y-1.5">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#997B20] block">
                CONFIGURATION
              </label>
              <div className="relative group">
                <select
                  value={selectedConfig}
                  onChange={(e) => setSelectedConfig(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-stone-800 text-xs sm:text-sm font-semibold tracking-wide rounded-xl px-4 py-3.5 pr-10 appearance-none outline-none cursor-pointer transition-all duration-300 hover:shadow-[0_0_18px_rgba(212,175,55,0.25)] focus:border-[#D4AF37]"
                >
                  <option value="All">CONFIG (ALL)</option>
                  <option value="3 & 4 BHK Luxury Condos">3 & 4 BHK Luxury Condos</option>
                  <option value="Grade-A Office & High-Street Retail">Grade-A Office & Retail</option>
                  <option value="Bespoke Luxury Villas & Plots">Luxury Villas & Plots</option>
                  <option value="Boutique Offices & Gourmet Food Court">Boutique Offices</option>
                  <option value="5 BHK Independent Villas">5 BHK Independent Villas</option>
                  <option value="Administrative Headquarters">Administrative Complex</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#D4AF37] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
