import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SwimmingPool() {
  const sectionRef = useRef(null);
  const headingAreaRef = useRef(null);
  const headingDividerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoOverlayRef = useRef(null);
  const videoRef = useRef(null);
  const isManuallyPausedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Play/Pause Toggle Handler
  const togglePlayPause = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        isManuallyPausedRef.current = false;
      }).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      isManuallyPausedRef.current = true;
    }
  }, []);

  // IntersectionObserver for lazy video load and auto-play/pause on viewport scroll
  useEffect(() => {
    const videoElem = videoRef.current;
    const sectionElem = sectionRef.current;
    if (!sectionElem) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Initiate video load if not yet started
            if (!isVideoLoaded) {
              setIsVideoLoaded(true);
            }
            if (videoElem && !isManuallyPausedRef.current) {
              videoElem.play().then(() => {
                setIsPlaying(true);
              }).catch(() => {
                // Autoplay blocked by browser policy; fallback gracefully
                setIsPlaying(false);
              });
            }
          } else {
            if (videoElem && !videoElem.paused) {
              videoElem.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '200px 0px 200px 0px'
      }
    );

    observer.observe(sectionElem);

    return () => {
      observer.disconnect();
    };
  }, [isVideoLoaded]);

  // GSAP Entrance Animations
  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Heading Area Reveal (Fade up + divider expansion)
      if (headingAreaRef.current) {
        gsap.from(headingAreaRef.current.querySelectorAll('.gsap-heading-elem'), {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingAreaRef.current,
            start: 'top 85%',
            once: true
          }
        });
      }

      if (headingDividerRef.current) {
        gsap.from(headingDividerRef.current, {
          scaleX: 0,
          transformOrigin: 'center center',
          duration: 0.9,
          ease: 'power2.out',
          delay: 0.25,
          scrollTrigger: {
            trigger: headingAreaRef.current,
            start: 'top 85%',
            once: true
          }
        });
      }

      // 2. Cinematic Masked Reveal for Video Container
      if (videoContainerRef.current) {
        gsap.fromTo(
          videoContainerRef.current,
          {
            clipPath: 'inset(8% 4% 8% 4%)',
            opacity: 0.8,
            scale: 0.98
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            clearProps: 'clipPath,transform',
            scrollTrigger: {
              trigger: videoContainerRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      // 3. Staggered Video Overlay Text Reveal (bottom-to-top)
      if (videoOverlayRef.current) {
        gsap.from(videoOverlayRef.current.querySelectorAll('.gsap-overlay-elem'), {
          y: 40,
          opacity: 0,
          duration: 1.0,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: 'top 75%',
            once: true
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="swimming-pool"
      className="relative w-full bg-white border-b border-[#E5E5E5] overflow-hidden"
    >
      {/* ─────────────────────────────────────────────────────────────
          PART 1: MAIN SECTION HEADING (PURE WHITE BACKGROUND)
         ───────────────────────────────────────────────────────────── */}
      <div 
        ref={headingAreaRef}
        className="w-full pt-3 sm:pt-4 lg:pt-5 pb-3 sm:pb-4 lg:pb-5 text-center"
      >
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
          
          {/* Small Uppercase Eyebrow with Champagne Gold Flanks */}
          <div className="gsap-heading-elem inline-flex items-center justify-center gap-2.5 mb-1 sm:mb-1.5">
            <span className="h-[1px] w-7 sm:w-9 bg-[#C5A059]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#C5A059] block">
              THE ART OF RELAXATION
            </span>
            <span className="h-[1px] w-7 sm:w-9 bg-[#C5A059]" />
          </div>

          {/* Main Heading: Luxury Black #111111 */}
          <h2 className="gsap-heading-elem font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#111111] leading-tight tracking-tight">
            Your Everyday Escape
          </h2>

          {/* Thin Champagne Gold Divider */}
          <div
            ref={headingDividerRef}
            className="h-[1.5px] w-14 sm:w-18 bg-[#C5A059] mx-auto mt-2 sm:mt-2.5"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          PART 2: FULL-WIDTH CINEMATIC SWIMMING POOL VIDEO BANNER
         ───────────────────────────────────────────────────────────── */}
      <div
        ref={videoContainerRef}
        className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] xl:h-[600px] bg-[#0c0c0c] overflow-hidden select-none"
      >
        {/* HTML5 Video Element with Native Poster Fallback */}
        <video
          ref={videoRef}
          src="/videos/swimming-pool.mp4"
          poster="/images/pool-img.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center block"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Subtle Transparent Black Overlay for Text Readability */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.45) 100%)'
          }}
        />

        {/* Text Overlay Centered Horizontally & Vertically Directly Over the Video */}
        <div
          ref={videoOverlayRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-12 z-10 pointer-events-none"
        >
          {/* Small Uppercase Heading: Champagne Gold */}
          <span className="gsap-overlay-elem text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#D4B675] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] block mb-2 sm:mb-2.5">
            RELAX • REFRESH • REJUVENATE
          </span>

          {/* Main Video Overlay Heading: Pure White, 48–56px Desktop */}
          <h3 className="gsap-overlay-elem font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-3xl">
            Dive into Tranquility
          </h3>

          {/* Thin Golden Divider */}
          <div className="gsap-overlay-elem h-[1px] w-14 sm:w-16 bg-[#C5A059] mx-auto my-3 sm:my-3.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />

          {/* Soft White Description: 16–18px */}
          <p className="gsap-overlay-elem text-sm sm:text-base lg:text-[17px] text-[#EAEAEA] font-light leading-relaxed max-w-xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Refresh, unwind and make time for yourself by the pool.
          </p>
        </div>

        {/* Minimal Circular Play/Pause Toggle Button in Bottom-Right Corner */}
        <button
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={togglePlayPause}
          className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 lg:bottom-8 lg:right-8 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/50 hover:border-[#C5A059] bg-black/45 hover:bg-black/75 text-white hover:text-[#C5A059] flex items-center justify-center transition-all duration-300 backdrop-blur-xs cursor-pointer focus:outline-none shadow-lg group"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5 transition-transform duration-200 group-hover:scale-110" />
          )}
        </button>
      </div>

      {/* Reduced-Motion Accessibility Rules */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #swimming-pool,
          #swimming-pool * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
