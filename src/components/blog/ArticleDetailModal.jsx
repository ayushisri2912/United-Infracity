import React, { useEffect } from 'react';
import { X, Calendar, Clock, Share2, Bookmark, Check, ArrowRight, User } from 'lucide-react';

export default function ArticleDetailModal({ isOpen, onClose, article, onSelectRelatedArticle }) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Click Backdrop Outside to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Reading Container */}
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl border border-[#E8DCC8] shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DCC8] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FAF8F5] text-[#C6A15B] border border-[#E8DCC8] font-montserrat text-[10px] font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="hidden sm:inline font-montserrat text-xs text-[#66625A]">
              United Infracity Insights
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#E8DCC8]/50 border border-[#E8DCC8] text-xs font-montserrat text-[#1C1C1A] transition-colors cursor-pointer"
              title="Share Article"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#C6A15B]" />}
              <span>{copied ? 'Copied Link' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
              title="Close Article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto p-6 sm:p-12 space-y-10">
          
          {/* Article Header & Meta */}
          <div className="space-y-6">
            
            <div className="flex items-center gap-4 text-xs font-montserrat text-[#66625A] font-light">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C6A15B]" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C6A15B]" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-cormorant text-3xl sm:text-5xl font-bold text-[#1C1C1A] leading-tight">
              {article.title}
            </h1>

            {/* Author Profile Bar */}
            <div className="flex items-center gap-4 pt-2 border-y border-[#E8DCC8]/60 py-4">
              <div className="w-11 h-11 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] font-serif font-bold text-lg">
                {article.author ? article.author.charAt(0) : 'U'}
              </div>
              <div>
                <h4 className="font-cormorant font-bold text-[#1C1C1A] text-lg">
                  {article.author || 'United Editorial Team'}
                </h4>
                <p className="font-montserrat text-xs text-[#66625A] font-light">
                  Senior Real Estate & Urban Planning Contributor
                </p>
              </div>
            </div>
          </div>

          {/* Featured Header Image */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#E8DCC8] aspect-[16/9]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Content Paragraphs */}
          <div className="space-y-6 font-montserrat text-sm sm:text-base text-[#1C1C1A] font-light leading-relaxed">
            <p className="text-base sm:text-lg text-stone-800 font-normal leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#C6A15B] first-letter:mr-3 first-letter:float-left">
              {article.excerpt}
            </p>

            <p>
              As India’s luxury real estate landscape experiences an unprecedented renaissance, discerning buyers and institutional investors are demanding architectures that blend environmental intelligence with high-end luxury. The paradigm has shifted from basic luxury finishes to holistic ecosystem living.
            </p>

            {/* Editorial Pull Quote Box */}
            <blockquote className="my-8 p-8 rounded-xl bg-white border-l-4 border-[#C6A15B] shadow-xs space-y-2">
              <p className="font-cormorant text-2xl sm:text-3xl text-[#1C1C1A] italic leading-snug">
                "Real estate excellence is no longer measured solely by square footage, but by spatial harmony, structural longevity, and sustainable engineering."
              </p>
              <cite className="block font-montserrat text-xs font-bold text-[#C6A15B] uppercase tracking-wider not-italic pt-2">
                — {article.author}
              </cite>
            </blockquote>

            <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#1C1C1A] pt-4">
              Structural Innovation & Timeless Value
            </h3>

            <p>
              Developments by United Infracity Private Limited incorporate Grade-A structural standards, energy-efficient climate envelope design, and curated biophilic landscaped courtyards. Every sq. ft. is engineered for 100+ year structural resilience.
            </p>

            {/* Bulleted Takeaways */}
            <div className="p-6 rounded-xl bg-white border border-[#E8DCC8] space-y-3 my-6">
              <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#C6A15B]">
                Key Industry Takeaways
              </h4>
              <ul className="space-y-2 font-montserrat text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] font-bold">•</span>
                  <span><strong>Capital Appreciation:</strong> Integrated luxury townships maintain a 18-24% higher long-term resale premium.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] font-bold">•</span>
                  <span><strong>Acoustic & Thermal Comfort:</strong> Double-glazed Low-E facade glass reduces heat ingress by up to 40%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] font-bold">•</span>
                  <span><strong>Wellness Architecture:</strong> Dedicated oxygenating gardens and private clubhouse amenities boost resident well-being.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="pt-8 border-t border-[#E8DCC8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-montserrat text-xs text-[#66625A]">
              Category: <strong className="text-[#1C1C1A]">{article.category}</strong>
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#1C1C1A] hover:bg-[#C6A15B] text-white font-montserrat text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Article
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
