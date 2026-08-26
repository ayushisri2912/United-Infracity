import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NewsletterCtaSection() {
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
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E8DCC8]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Light Beige / Clean Card Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E8DCC8] shadow-[0_15px_40px_rgba(0,0,0,0.02)] text-center space-y-8 relative overflow-hidden">
          
          {/* Subtle Corner Gold Lighting Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-3 max-w-xl mx-auto">
            {/* Header Icon */}
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#E8DCC8] text-[#C6A15B] flex items-center justify-center mx-auto shadow-xs">
              <Mail className="w-5 h-5" />
            </div>

            {/* Heading */}
            <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1C1C1A]">
              Never Miss Our <span className="italic text-[#C6A15B]">Latest Updates</span>
            </h2>

            {/* Subtitle */}
            <p className="font-montserrat text-xs sm:text-sm text-[#66625A] font-light leading-relaxed">
              Get exclusive insights, project launches, and market updates directly in your inbox.
            </p>
          </div>

          {/* Form / Subscription State */}
          {subscribed ? (
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#FAF8F5] border border-[#C6A15B]/40 text-[#1C1C1A] animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-[#C6A15B]" />
              <span className="font-montserrat text-xs font-semibold tracking-wide">
                Thank you! You are now subscribed to United Infracity Insights.
              </span>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
            >
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E8DCC8] focus:border-[#C6A15B] text-xs font-montserrat text-[#1C1C1A] placeholder-stone-400 outline-none transition-colors shadow-inner"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#C6A15B] hover:bg-[#1C1C1A] text-white font-montserrat text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Minimal Privacy Guarantee */}
          <p className="font-montserrat text-[10px] text-stone-400 font-light">
            We respect your privacy. Unsubscribe at any time with one click.
          </p>

        </div>

      </div>
    </section>
  );
}
