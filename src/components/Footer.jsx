import React from 'react';
import { Building2, Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Footer({ onSelectSection, onOpenEnquire }) {
  return (
    <footer id="footer" className="bg-stone-900 text-stone-300 border-t-4 border-[#D4AF37] pt-12 pb-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-stone-800">
          
          {/* Col 1: Corporate Branding (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#D4AF37] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-stone-900 rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-white tracking-tight">
                  UNITED INFRACITY
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37]">
                  Private Limited
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Pioneers in luxury residential towers, integrated smart townships, and grade-A commercial real estate developments across India's premier metropolitan corridors.
            </p>

            <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> RERA Registered Developer
              </div>
              <p className="text-[10px] text-stone-400">
                Registration No: UPRERAPRJ15892 / HARERA/GGM/2024/99
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href="#" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#D4AF37] hover:text-stone-900 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#D4AF37] hover:text-stone-900 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#D4AF37] hover:text-stone-900 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <button onClick={() => onSelectSection('hero')} className="hover:text-[#D4AF37] transition-colors">
                  • Home Gateway
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('brand')} className="hover:text-[#D4AF37] transition-colors">
                  • Brand Story
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('mentor')} className="hover:text-[#D4AF37] transition-colors">
                  • Our Mentor Profile
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('management')} className="hover:text-[#D4AF37] transition-colors">
                  • Management Team
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('projects')} className="hover:text-[#D4AF37] transition-colors">
                  • Portfolio Showcase
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('testimonials')} className="hover:text-[#D4AF37] transition-colors">
                  • Resident Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('media')} className="hover:text-[#D4AF37] transition-colors">
                  • Media & News Coverage
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Project Portfolios */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase">
              Our Projects
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <button onClick={() => onSelectSection('projects-residential')} className="hover:text-[#D4AF37] transition-colors">
                  • Ongoing Residential
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('projects-commercial')} className="hover:text-[#D4AF37] transition-colors">
                  • Ongoing Commercial
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('projects-township')} className="hover:text-[#D4AF37] transition-colors">
                  • United Township
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('projects-completed')} className="hover:text-[#D4AF37] transition-colors">
                  • Completed Landmarks
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('projects-government')} className="hover:text-[#D4AF37] transition-colors">
                  • Government Infrastructure
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase">
              Corporate Office
            </h4>
            <div className="space-y-2 text-xs text-stone-400 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  United Infracity Corporate Heights, Sector 18, Commercial Belt, Metro City - 201301.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>+91 (0120) 4567 890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>info@unitedinfracity.com</span>
              </div>
            </div>

            <button
              onClick={onOpenEnquire}
              className="mt-1 w-full py-2.5 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-900 font-bold text-[10px] uppercase tracking-widest rounded-lg transition-all shadow-sm"
            >
              Enquire Corporate Desk
            </button>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-light">
          <p>
            © {new Date().getFullYear()} <strong>UNITED INFRACITY PRIVATE LIMITED</strong>. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-[11px]">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">RERA Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
