import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import useImageReveal from '../../hooks/useImageReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EnquirySection() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const contentRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    configuration: '',
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    // Full Name: letters, spaces, hyphens, apostrophes (at least 2 chars)
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (!/^[A-Za-z\s'-]{2,50}$/.test(formData.fullName.trim())) {
      newErrors.fullName = 'Please enter a valid name.';
    }

    // Phone: Indian mobile numbers (10 digits starting with 6-9, optionally +91)
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Enter valid 10-digit mobile number.';
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Configuration
    if (!formData.configuration) {
      newErrors.configuration = 'Select a configuration.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Ready for future API integration (no fake alert or popup)
      console.log('Enquiry Form Submitted:', formData);
      setIsSubmitted(true);
    }
  };

  // Cinematic Left-to-Right Architectural Image Reveal
  useImageReveal({
    direction: 'left',
    duration: 1.3,
    scaleDuration: 1.4,
    scale: 1.08,
    scaleEnabled: true,
    start: 'top 85%',
    containerRef: imageContainerRef,
  });

  // GSAP Staggered Form & Content Reveal
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered Content Reveal
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll('.gsap-enquiry-reveal'),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="enquiry-section"
      className="pt-5 sm:pt-6 lg:pt-7 pb-10 sm:pb-12 lg:pb-14 bg-white border-b border-[#E5E5E5] relative overflow-hidden"
    >
      {/* Maximum Container Width: 1550px aligned with Navbar */}
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* Compact Split Panel: Left 35% Image | Right 65% Enquiry */}
        <div className="group relative flex flex-col md:flex-row items-stretch border border-[#E5E5E5] hover:border-[#C5A059]/60 bg-white overflow-hidden rounded-none shadow-sm hover:shadow-[0_16px_40px_rgba(197,160,89,0.12)] transition-all duration-500 min-h-[330px] md:h-[350px] lg:h-[360px]">
          
          {/* Animated Top Golden Accent Line on Hover */}
          <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-20 pointer-events-none" />

          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN (35% Width): Architectural Building Elevation
             ───────────────────────────────────────────────────────────── */}
          <div
            ref={imageContainerRef}
            className="w-full md:w-[35%] h-[200px] sm:h-[240px] md:h-full relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-[#E5E5E5] bg-[#F5F5F5]"
          >
            <img
              src="/images/cta.png"
              alt="United Orchid Heights Architectural Elevation"
              className="w-full h-full object-cover object-center will-change-transform transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN (65% Width): Luxury Content & Compact Form
             ───────────────────────────────────────────────────────────── */}
          <div
            ref={contentRef}
            className="w-full md:w-[65%] p-5 sm:p-6 lg:p-7 xl:p-8 flex flex-col justify-between bg-white"
          >
            {/* Top: Header Typography */}
            <div>
              {/* Small Uppercase Subtitle with Golden Line */}
              <div className="gsap-enquiry-reveal inline-flex items-center gap-2 mb-1.5">
                <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
                  BEGIN YOUR JOURNEY
                </span>
                <span className="h-[1px] w-8 bg-[#C5A059]" />
              </div>

              {/* Main Heading: Line 1 dark serif, Line 2 italic champagne gold */}
              <h2 className="gsap-enquiry-reveal font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] text-[#111111] font-normal leading-[1.14] tracking-tight">
                Your Dream Home.
                <span className="italic font-serif text-[#C5A059] block sm:inline sm:ml-2 font-normal">
                  One Step Closer.
                </span>
              </h2>

              {/* Description */}
              <p className="gsap-enquiry-reveal text-xs sm:text-[13.5px] text-[#666666] font-light mt-1">
                Discover a life of elegance at United Orchid Heights.
              </p>
            </div>

            {/* Bottom: Compact Two-Column Form */}
            <form onSubmit={handleSubmit} noValidate className="mt-4 sm:mt-5 space-y-3">
              
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                
                {/* Full Name */}
                <div className="gsap-enquiry-reveal relative">
                  <input
                    type="text"
                    id="enquiry-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Full Name"
                    className="w-full bg-transparent py-1.5 text-xs sm:text-[13px] text-[#111111] placeholder-[#999999] border-b border-[#E5E5E5] focus:border-[#C5A059] focus:outline-none transition-colors duration-300"
                  />
                  {/* Animated Focus Accent Line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 ${
                      focusedField === 'fullName' ? 'w-full' : 'w-0'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="block text-[10px] text-red-600 mt-0.5 leading-tight">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="gsap-enquiry-reveal relative">
                  <input
                    type="tel"
                    id="enquiry-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Phone Number (+91)"
                    className="w-full bg-transparent py-1.5 text-xs sm:text-[13px] text-[#111111] placeholder-[#999999] border-b border-[#E5E5E5] focus:border-[#C5A059] focus:outline-none transition-colors duration-300"
                  />
                  {/* Animated Focus Accent Line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 ${
                      focusedField === 'phone' ? 'w-full' : 'w-0'
                    }`}
                  />
                  {errors.phone && (
                    <span className="block text-[10px] text-red-600 mt-0.5 leading-tight">
                      {errors.phone}
                    </span>
                  )}
                </div>

              </div>

              {/* Row 2: Email Address & Configuration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                
                {/* Email Address */}
                <div className="gsap-enquiry-reveal relative">
                  <input
                    type="email"
                    id="enquiry-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Email Address"
                    className="w-full bg-transparent py-1.5 text-xs sm:text-[13px] text-[#111111] placeholder-[#999999] border-b border-[#E5E5E5] focus:border-[#C5A059] focus:outline-none transition-colors duration-300"
                  />
                  {/* Animated Focus Accent Line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 ${
                      focusedField === 'email' ? 'w-full' : 'w-0'
                    }`}
                  />
                  {errors.email && (
                    <span className="block text-[10px] text-red-600 mt-0.5 leading-tight">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Configuration Dropdown */}
                <div className="gsap-enquiry-reveal relative">
                  <select
                    id="enquiry-configuration"
                    name="configuration"
                    value={formData.configuration}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('configuration')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent py-1.5 text-xs sm:text-[13px] text-[#111111] border-b border-[#E5E5E5] focus:border-[#C5A059] focus:outline-none transition-colors duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-white text-[#999999]">
                      Select Configuration
                    </option>
                    <option value="3 BHK" className="bg-white text-[#111111]">
                      3 BHK
                    </option>
                    <option value="3 BHK+S" className="bg-white text-[#111111]">
                      3 BHK+S
                    </option>
                  </select>
                  {/* Animated Focus Accent Line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 ${
                      focusedField === 'configuration' ? 'w-full' : 'w-0'
                    }`}
                  />
                  {errors.configuration && (
                    <span className="block text-[10px] text-red-600 mt-0.5 leading-tight">
                      {errors.configuration}
                    </span>
                  )}
                </div>

              </div>

              {/* Row 3: Submit Button with Sliding Gold Fill Effect & Feedback State */}
              <div className="gsap-enquiry-reveal pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 px-7 h-[44px] sm:h-[46px] bg-[#111111] text-white text-[11.5px] sm:text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-400 cursor-pointer rounded-none shadow-xs"
                >
                  {/* Sliding Golden Fill Layer */}
                  <span className="absolute inset-0 bg-[#C5A059] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-[#111111] transition-colors duration-400">
                    <span>Request a Site Visit</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>

                {isSubmitted && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                    <span>Thank you. Our sales advisory team will reach out shortly.</span>
                  </div>
                )}
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
