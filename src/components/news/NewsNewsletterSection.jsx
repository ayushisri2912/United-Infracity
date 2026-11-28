import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NewsNewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#FAF8F5] border-t border-[#E5E5E5]">
      {/* Container aligned strictly with Navbar: max-w-[1550px] */}
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Architectural Card Container Matching Home Page Theme */}
        <div className="group relative bg-white border border-[#E5E5E5] hover:border-[#C5A059]/60 shadow-sm hover:shadow-[0_16px_40px_rgba(197,160,89,0.12)] p-8 sm:p-12 lg:p-14 text-center space-y-5 transition-all duration-500 overflow-hidden">
          
          {/* Top Golden Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C5A059]" />

          {/* Subtle Background Radial Gold Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#C5A059]/10 via-[#C5A059]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Badge Tagline Matching Home Page */}
          <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs font-semibold tracking-[0.25em] text-[#997B20] uppercase mx-auto">
            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>NEWSLETTER &amp; ANNOUNCEMENTS</span>
          </div>

          {/* Heading & Subtitle */}
          <div className="relative z-10 space-y-2 max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-normal text-[#121212] leading-tight">
              Stay <span className="italic text-[#C5A059] font-serif">Updated</span>
            </h2>
            <p className="font-montserrat text-xs sm:text-sm text-[#555555] font-light leading-relaxed max-w-xl mx-auto">
              Subscribe to receive the latest company news, project launches, and event updates directly in your inbox.
            </p>
          </div>

          {/* Form State */}
          {subscribed ? (
            <div className="relative z-10 inline-flex items-center gap-3 px-6 py-3.5 bg-[#FAF8F5] border border-[#C5A059]/40 text-[#121212] animate-in fade-in duration-300">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span className="font-montserrat text-xs font-semibold tracking-wide">
                Subscription confirmed. Welcome to United Infracity Press Club.
              </span>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto w-full pt-1"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-5 py-3.5 bg-[#FAF8F5] border border-[#E5E5E5] focus:border-[#C5A059] text-xs font-montserrat text-[#121212] placeholder-stone-400 outline-none transition-colors"
              />

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#C5A059] hover:bg-[#121212] text-white font-montserrat text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap active:scale-95"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="relative z-10 font-montserrat text-[11px] text-[#777777] font-light">
            We value your privacy. No spam. Unsubscribe anytime.
          </p>

        </div>

      </div>
    </section>
  );
}
