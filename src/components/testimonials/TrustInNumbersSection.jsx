import React, { useState, useEffect, useRef } from 'react';
import { Building, Users, Calendar, Award } from 'lucide-react';

export default function TrustInNumbersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      number: 25,
      suffix: '+',
      label: 'Years Experience',
      sublabel: 'Pioneering Luxury Standards',
      icon: Calendar
    },
    {
      id: 2,
      number: 65,
      suffix: '+',
      label: 'Projects Delivered',
      sublabel: 'Landmark Architecture',
      icon: Building
    },
    {
      id: 3,
      number: 10,
      suffix: 'K+',
      label: 'Happy Families',
      sublabel: 'Trusted Resident Community',
      icon: Users
    },
    {
      id: 4,
      number: 98,
      suffix: '%',
      label: 'Customer Satisfaction',
      sublabel: 'Excellence In Handover',
      icon: Award
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
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
      className="py-24 sm:py-32 bg-[#1C1C1A] text-white relative overflow-hidden"
    >
      {/* Background Decorative Gold Grid Lines */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#C6A15B_1px,transparent_1px),linear-gradient(to_bottom,#C6A15B_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Soft Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
            TRUST IN NUMBERS
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
            A Legacy Written In <span className="italic text-[#C6A15B]">Numbers</span>
          </h2>
          <p className="font-montserrat text-sm text-stone-300 font-light leading-relaxed">
            Decades of architectural brilliance, structural perfection, and unwavering client trust.
          </p>
        </div>

        {/* Minimal Luxury Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <CounterCard key={stat.id} stat={stat} isVisible={isVisible} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component for individual Counter Card with smooth animated number logic
function CounterCard({ stat, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.number;
    const duration = 2000; // 2 seconds
    const incrementTime = 30;
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
    <div className="relative group p-8 rounded-2xl bg-white/5 border border-[#C6A15B]/20 backdrop-blur-md hover:bg-white/10 hover:border-[#C6A15B]/50 transition-all duration-500 text-center flex flex-col items-center justify-center space-y-4 shadow-xl">
      
      {/* Icon Badge */}
      <div className="w-12 h-12 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5" />
      </div>

      {/* Large Luxury Number Display */}
      <div className="font-cormorant text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-none flex items-center justify-center">
        <span>{count}</span>
        <span className="text-[#C6A15B] font-normal">{stat.suffix}</span>
      </div>

      {/* Counter Label & Sublabel */}
      <div className="space-y-1">
        <h3 className="font-montserrat text-sm font-bold tracking-wider text-stone-100 uppercase">
          {stat.label}
        </h3>
        <p className="font-montserrat text-xs text-stone-400 font-light">
          {stat.sublabel}
        </p>
      </div>

      {/* Thin Gold Underline Accent on Hover */}
      <div className="w-12 h-[2px] bg-[#C6A15B]/30 group-hover:w-24 group-hover:bg-[#C6A15B] transition-all duration-500 mt-2" />
    </div>
  );
}
