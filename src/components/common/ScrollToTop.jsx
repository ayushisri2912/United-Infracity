import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Automatically scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Track scroll position to show/hide floating button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="fixed bottom-7 sm:bottom-8 right-7 sm:right-8 z-40 w-11 h-11 bg-[#141414] border border-[#C49D55]/60 text-[#C49D55] shadow-2xl flex items-center justify-center hover:bg-[#C49D55] hover:text-[#141414] hover:border-[#C49D55] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <ArrowUp className="w-5 h-5 stroke-[2]" />
    </button>
  );
}
