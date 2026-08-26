import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function Footer() {
  const navigate = useNavigate();
  const { openEnquire } = useModal();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: 'X',
      href: 'https://x.com',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  return (
    <footer id="footer" className="bg-[#161513] text-stone-300 border-t-4 border-[#D4AF37] pt-16 pb-10 relative overflow-hidden font-montserrat">
      
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14 pb-12 border-b border-stone-800">
          
          {/* Col 1: Corporate Branding (2 Columns Wide) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37] p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-white tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  UNITED INFRACITY
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4AF37]">
                  Private Limited
                </span>
              </div>
            </Link>

            <p className="text-stone-300 text-sm sm:text-[15px] leading-relaxed max-w-md font-light">
              Pioneers in ultra-luxury residential towers, integrated smart townships, and grade-A commercial real estate developments across India's premier metropolitan corridors.
            </p>

            {/* Circular Social Media Icon Buttons */}
            <div className="pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-3">
                Official Media Channels
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-stone-800/80 border border-[#D4AF37]/30 text-stone-300 flex items-center justify-center transition-all duration-300 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-stone-950 hover:scale-110 shadow-sm cursor-pointer"
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Refined Premium RERA Card */}
            <div className="p-4 rounded-2xl bg-stone-800/50 border border-[#D4AF37]/25 backdrop-blur-sm space-y-1.5 shadow-sm hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>RERA Registered Developer</span>
              </div>
              <p className="text-xs text-stone-400 font-light">
                CIN: U70102UP2012PTC050901 | M/s United Infracity Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3 font-light">
              {[
                { name: 'Home Gateway', path: '/' },
                { name: 'Brand Story', path: '/about' },
                { name: 'Our Mentor Profile', path: '/about/mentor' },
                { name: 'Management Team', path: '/about/management' },
                { name: 'Resident Reviews', path: '/testimonials' },
                { name: 'Blog & Insights', path: '/blog' },
                { name: 'News & Events', path: '/news-events' },
                { name: 'Press & Coverage', path: '/press-coverage' }
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="group flex items-center gap-2 text-stone-300 hover:text-[#D4AF37] transition-all duration-300 text-left text-sm sm:text-[15px] cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Project Portfolios */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2">
              Our Portfolios
            </h4>
            <ul className="space-y-3 font-light">
              {[
                { name: 'Ongoing Residential', path: '/projects/residential' },
                { name: 'Ongoing Commercial', path: '/projects/commercial' },
                { name: 'United Township', path: '/projects/township' },
                { name: 'Completed Landmarks', path: '/projects/completed' },
                { name: 'Government Projects', path: '/projects/government' }
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="group flex items-center gap-2 text-stone-300 hover:text-[#D4AF37] transition-all duration-300 text-left text-sm sm:text-[15px] cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2">
              Registered & Site Office
            </h4>
            <div className="space-y-3.5 text-sm sm:text-[15px] text-stone-300 font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span>
                  <strong className="text-white block font-medium">Registered Office:</strong>
                  560/109, RWS Compound (Near Lal Hospital), Krishna Nagar, Kanpur Road, Lucknow – 226023, UP.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span>
                  <strong className="text-white block font-medium">Site & Sales Office:</strong>
                  Land No. 6C/GH-2, Vrindavan Yojna Phase-1, Sector 6, Lucknow, UP.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+91 (0522) 4567 890 / 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>enquiry@unitedinfracity.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openEnquire}
                className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#B38F24] hover:to-[#997B20] text-stone-950 font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                Enquire Corporate Desk
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-400 font-light">
          <p>
            © {new Date().getFullYear()} <strong className="text-stone-200">UNITED INFRACITY PRIVATE LIMITED</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">RERA Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
