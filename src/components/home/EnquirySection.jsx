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
      className="py-6 sm:py-7 lg:py-8 bg-[#F5EFE5] border-b border-[#B99A59]/20 relative overflow-hidden"
    >
      {/* Maximum Container Width: 1400px */}
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Split Panel: Left 35% Image | Right 65% Enquiry */}
        <div className="flex flex-col md:flex-row items-stretch border border-[#D9C8A7] bg-[#EDE4D3] overflow-hidden rounded-none shadow-[0_4px_24px_rgba(185,154,89,0.06)] min-h-[330px] md:h-[350px] lg:h-[360px]">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN (35% Width): Architectural Building Elevation
             ───────────────────────────────────────────────────────────── */}
          <div
            ref={imageContainerRef}
            className="w-full md:w-[35%] h-[200px] sm:h-[240px] md:h-full relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-[#D9C8A7] bg-[#DFD3BE]"
          >
            <img
              src="/images/cta.png"
              alt="United Orchid Heights Architectural Elevation"
              className="w-full h-full object-cover object-center will-change-transform"
              loading="lazy"
            />
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN (65% Width): Luxury Content & Compact Form
             ───────────────────────────────────────────────────────────── */}
          <div
            ref={contentRef}
            className="w-full md:w-[65%] p-5 sm:p-6 lg:p-7 xl:p-8 flex flex-col justify-between bg-[#EDE4D3]"
          >
            {/* Top: Header Typography */}
            <div>
              {/* Small Uppercase Subtitle */}
              <span className="gsap-enquiry-reveal block text-[10.5px] sm:text-xs font-semibold tracking-[0.22em] text-[#A68A4E] uppercase mb-1">
                BEGIN YOUR JOURNEY
              </span>

              {/* Main Heading: Line 1 dark serif, Line 2 italic champagne gold */}
              <h2 className="gsap-enquiry-reveal font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] text-[#30271F] font-normal leading-[1.12] tracking-tight">
                Your Dream Home.
                <span className="italic font-serif text-[#B99A59] block sm:inline sm:ml-2">
                  One Step Closer.
                </span>
              </h2>

              {/* Description */}
              <p className="gsap-enquiry-reveal text-xs sm:text-[13px] text-[#665A49] font-light mt-1">
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
                    className="w-full bg-transparent py-1.5 text-xs sm:text-[13px] text-[#30271F] placeholder-[#8C7E6D] border-b border-[#C9B58C] focus:border-[#B99A59] focus:outline-none transition-colors duration-300"
                  />
                  {/* Animated Focus Accent Line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B99A59] transition-all duration-300 ${
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
                    className="w-full bg-transparent py-1.5 text-xs sm:text-[13px] text-[#30271F] placeholder-[#8C7E6D] border-b border-[#C9B58C] focus:border-[#B99A59] focus:outline-none transition-colors duration-300"
                  />
                  {/* Animated Focus Accent Line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B99A59] transition-all duration-300 ${
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
                    className="w-full bg-transparent py-1.5 text-xs sm:text-[13px] text-[#30271F] placeholder-[#8C7E6D] border-b border-[#C9B58C] focus:border-[#B99A59] focus:outline-none transition-colors duration-300"
                  />
                  {/* Animated Focus Accent Line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B99A59] transition-all duration-300 ${
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
                    className="w-full bg-transparent py-1.5 text-xs sm:text-[13px] text-[#30271F] border-b border-[#C9B58C] focus:border-[#B99A59] focus:outline-none transition-colors duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-[#EDE4D3] text-[#8C7E6D]">
                      Select Configuration
                    </option>
                    <option value="3 BHK" className="bg-[#EDE4D3] text-[#30271F]">
                      3 BHK
                    </option>
                    <option value="3 BHK+S" className="bg-[#EDE4D3] text-[#30271F]">
                      3 BHK+S
                    </option>
                  </select>
                  {/* Animated Focus Accent Line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B99A59] transition-all duration-300 ${
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

              {/* Row 3: Submit Button & Feedback State */}
              <div className="gsap-enquiry-reveal pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 h-[42px] sm:h-[44px] bg-[#A68A4E] hover:bg-[#B99A59] text-white text-[11.5px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 group cursor-pointer rounded-none shadow-xs"
                >
                  <span>Request a Site Visit</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                {isSubmitted && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#29221F]">
                    <CheckCircle2 className="w-4 h-4 text-[#B99A59]" />
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
