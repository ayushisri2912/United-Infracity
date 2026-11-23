import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export default function HeroBannerSlider() {
  const navigate = useNavigate();
  const { setActiveProjectFilter } = useModal();

  const handleExplore = () => {
    setActiveProjectFilter('Residential');
    navigate('/projects/residential');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const handleScrollDown = () => {
  //   const nextElem = document.getElementById('central-filter');
  //   if (nextElem) {
  //     nextElem.scrollIntoView({ behavior: 'smooth' });
  //   } else {
  //     window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
  //   }
  // };

  return (
    <section className="relative w-full h-[calc(100vh-80px)] sm:h-[calc(100vh-88px)] min-h-[600px] sm:min-h-[650px] lg:min-h-[720px] overflow-hidden bg-[#F8F5F0] flex flex-col justify-between selection:bg-[#D4AF37] selection:text-white">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/herosec-full.webp"
          alt="United Orchid Heights"
          className="w-full h-full object-cover object-[78%_center] sm:object-[center_right] md:object-center select-none filter contrast-[1.03] brightness-[0.97]"
        />
        {/* Reduced left-side brightness: subtle warm wash instead of milky white overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/60 via-[#FAF6F0]/25 via-45% to-transparent pointer-events-none" />
        {/* Subtle architectural base shadow grounding the towers and greenery */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1F1B17]/15 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1550px] w-full mx-auto h-full px-4 sm:px-8 lg:px-14 flex flex-col justify-center pb-10 sm:pb-16 lg:pb-20">
        <div className="max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-5 lg:space-y-5">
          
          {/* Top Tagline with Decorative Lines */}
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#B0894C]" />
            <span className="text-[#A07D3E] text-xs sm:text-[13px] tracking-[0.25em] uppercase font-semibold">
              LUXURY LIVING IN LUCKNOW
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#B0894C]" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-[#1F1B17] text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-normal leading-[1.06] tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            UNITED<br />ORCHID HEIGHTS
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-lg sm:text-2xl lg:text-[27px] text-[#3D332A] font-normal leading-relaxed drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
            The Finest Expression of Modern Living
          </p>

          {/* Location Pin */}
          <div className="flex items-center gap-2.5 text-[#2A241F] text-sm sm:text-base font-medium">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#2A241F] fill-[#2A241F] shrink-0" />
            <span>Vrindavan Yojna Phase 1, Lucknow</span>
          </div>

          {/* Single Action Button: Explore Now */}
          <div className="pt-2 sm:pt-4">
            <button
              onClick={handleExplore}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#BA8748] to-[#9C6D34] hover:from-[#A37438] hover:to-[#8B5F2A] active:scale-[0.98] text-white font-medium px-8 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base rounded-xl shadow-[0_8px_25px_rgba(186,135,72,0.32)] hover:shadow-[0_12px_30px_rgba(186,135,72,0.42)] transition-all duration-300 hover:scale-[1.02] cursor-pointer group border border-[#D9B472]/30"
            >
              <span className="tracking-wide">Explore Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

     

      {/* Elegant Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-9 lg:h-12 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,28 C360,50 800,0 1140,25 C1280,35 1380,18 1440,24 L1440,48 L0,48 Z"
            fill="#FDFBF7"
          />
          <path
            d="M0,28 C360,50 800,0 1140,25 C1280,35 1380,18 1440,24"
            stroke="#D4AF37"
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />
        </svg>
      </div>
    </section>
  );
}
