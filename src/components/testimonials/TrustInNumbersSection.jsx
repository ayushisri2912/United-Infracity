import React, { useState, useEffect, useRef } from 'react';
import { Clock, Hotel, Sparkles, GraduationCap } from 'lucide-react';

export default function TrustInNumbersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Authentic statistics synchronized directly with Home Page (AboutAwasthiGroup & GroupProjects)
  const stats = [
    {
      id: 1,
      number: 40,
      suffix: '+',
      label: 'Years Group Legacy',
      sublabel: 'Founded in 1980s · Steel & Infra',
      icon: Clock
    },
    {
      id: 2,
      number: 192,
      suffix: '',
      label: 'Luxury Hotel Rooms',
      sublabel: 'Holiday Inn under IHG',
      icon: Hotel
    },
    {
      id: 3,
      number: 50000,
      suffix: '+',
      label: 'Sq. Ft. Banqueting Space',
      sublabel: 'Operational Hospitality & Lawns',
      icon: Sparkles
    },
    {
      id: 4,
      number: 7,
      suffix: '+ Acres',
      label: 'Educational Campus',
      sublabel: 'Seth M.R. Jaipuria School',
      icon: GraduationCap
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-10 sm:py-14 lg:py-16 bg-[#141414] text-white relative overflow-hidden"
    >
      {/* Background Decorative Gold Subtle Grid Lines */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#C49D55_1px,transparent_1px),linear-gradient(to_bottom,#C49D55_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Soft Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[220px] bg-[#C49D55]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* Compact Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-10">
          <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.35em] text-[#C49D55] block">
            TRUST IN NUMBERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            A Legacy Written In <span className="italic text-[#C49D55]">Numbers</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-xl mx-auto">
            Decades of architectural brilliance, structural perfection, and unwavering client trust.
          </p>
        </div>

        {/* Compact Luxury Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <CounterCard key={stat.id} stat={stat} isVisible={isVisible} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component for individual Counter Card with smooth single-line counter
function CounterCard({ stat, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.number;
    const duration = 1800; // 1.8 seconds smooth animation
    const incrementTime = 25;
    const totalSteps = duration / incrementTime;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, stat.number]);

  const Icon = stat.icon;

  return (
    <div className="relative group p-5 sm:p-6 bg-white/[0.03] border border-[#C49D55]/20 hover:border-[#C49D55]/60 hover:bg-white/[0.06] transition-all duration-300 text-center flex flex-col items-center justify-center space-y-3 shadow-lg">
      
      {/* Icon Badge */}
      <div className="w-10 h-10 rounded-full bg-[#C49D55]/10 border border-[#C49D55]/30 flex items-center justify-center text-[#C49D55] group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-4 h-4" />
      </div>

      {/* Large Luxury Number Display - Single Line Aligned */}
      <div className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-white tracking-tight leading-none flex items-baseline justify-center whitespace-nowrap">
        <span className="text-[#C49D55]">{count.toLocaleString()}</span>
        <span className="text-[#C49D55] font-light ml-1">{stat.suffix}</span>
      </div>

      {/* Counter Label & Sublabel */}
      <div className="space-y-0.5 pt-0.5">
        <h3 className="font-montserrat text-xs sm:text-[13px] font-bold tracking-wider text-stone-100 uppercase">
          {stat.label}
        </h3>
        <p className="font-montserrat text-[11px] sm:text-xs text-stone-400 font-light">
          {stat.sublabel}
        </p>
      </div>

      {/* Thin Gold Underline Accent on Hover */}
      <div className="w-8 h-[1px] bg-[#C49D55]/30 group-hover:w-16 group-hover:bg-[#C49D55] transition-all duration-300 mt-0.5" />
    </div>
  );
}
