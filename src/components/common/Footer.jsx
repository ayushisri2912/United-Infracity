import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, ShieldCheck, ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function Footer() {
  const navigate = useNavigate();
  const { openEnquire } = useModal();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReraLinkClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/contact') {
      const element = document.getElementById('rera-details');
      if (element) {
        const navbarHeight = 85;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/contact#rera-details');
    }
  };

  const socialLinks = [
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
      name: 'Pinterest',
      href: 'https://pinterest.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
        </svg>
      )
    }
  ];

  return (
    <footer id="footer" className="bg-[#161513] text-stone-200 border-t-4 border-[#D4AF37] pt-6 sm:pt-7 lg:pt-8 pb-3 sm:pb-3.5 relative overflow-hidden font-montserrat">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* PART 1: Top Bar - Branding & Quick Action */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 pb-5 sm:pb-6 border-b border-stone-800">
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3.5 group">
              <img
                src="/images/footerlogo.webp"
                alt="United Infracity"
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl lg:text-[26px] font-medium text-white tracking-[0.06em] leading-tight group-hover:text-[#D4AF37] transition-colors">
                  UNITED INFRACITY
                </span>
                <span className="text-[10px] sm:text-[11.5px] tracking-[0.3em] uppercase font-semibold text-[#D4AF37] mt-0.5">
                  Private Limited
                </span>
              </div>
            </Link>

            <span className="hidden sm:inline-block w-px h-8 bg-stone-800" />

            {/* RERA Registration & CIN Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.up-rera.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/50 text-xs text-[#D4AF37] hover:bg-[#D4AF37] hover:text-stone-950 transition-colors duration-300 group"
                title="Verify on Official UP-RERA Portal"
              >
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#D4AF37] group-hover:text-stone-950" />
                <span className="font-semibold tracking-wider text-[11px] sm:text-xs">
                  RERA Reg. No: <strong className="font-bold underline decoration-[#D4AF37]/60 underline-offset-2">UPRERAPRJ593231/11/2026</strong>
                </span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100" />
              </a>

              <span className="hidden xl:inline-flex items-center px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-stone-400 text-xs">
                CIN: U70102UP2012PTC050901
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={openEnquire}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#B38F24] hover:to-[#997B20] text-stone-950 font-bold text-xs sm:text-sm uppercase tracking-[0.15em] rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer text-center"
            >
              Enquire Corporate Desk
            </button>
          </div>
        </div>

        {/* PART 2: Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-9 py-5 sm:py-6 border-b border-stone-800">
          
          {/* Col 1: Corporate Profile & Social */}
          <div className="space-y-5">
            <p className="text-stone-300 text-sm sm:text-[15px] leading-relaxed font-light">
               Thoughtfully designed spac
                          </p>
            
            <div className="pt-2">
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
                    className="w-10 h-10 rounded-full bg-stone-800 border border-[#D4AF37]/40 text-stone-200 flex items-center justify-center transition-all duration-300 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-stone-950 hover:scale-110 shadow-sm cursor-pointer"
                    title={social.name}
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <span className="text-xs text-stone-400">
                Official Portal: <a href="https://www.unitedinfracity.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline font-medium">www.unitedinfracity.com</a>
              </span>
            </div>

            {/* Minimal RERA & Collection Account Details Link */}
            <div className="pt-1">
              <Link
                to="/contact#rera-details"
                onClick={handleReraLinkClick}
                className="inline-flex items-center gap-1.5 text-[14px] text-[#D4AF37] hover:text-[#F3E5AB] transition-colors duration-200 cursor-pointer font-normal group"
              >
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#D4AF37] group-hover:text-[#F3E5AB] transition-colors duration-200" />
                <span>RERA &amp; Collection Account Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base sm:text-lg tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-light">
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
                    className="group flex items-center gap-2 text-stone-300 hover:text-[#D4AF37] transition-colors text-left text-sm sm:text-[15px] cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Portfolios */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base sm:text-lg tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2">
              Our Portfolios
            </h4>
            <ul className="space-y-2.5 font-light">
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
                    className="group flex items-center gap-2 text-stone-300 hover:text-[#D4AF37] transition-colors text-left text-sm sm:text-[15px] cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters & Official Contact */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base sm:text-lg tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2">
              Registered & Site Office
            </h4>
            <div className="space-y-3.5 text-sm sm:text-[15px] text-stone-300 font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=560/109,+RWS+Compound+(Near+Lal+Hospital),+Krishna+Nagar,+Kanpur+Road,+Lucknow+-+226023,+UP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors group cursor-pointer"
                  title="Open Registered Office in Google Maps"
                >
                  <strong className="text-white block font-medium group-hover:text-[#D4AF37] transition-colors">Registered Office:</strong>
                  560/109, RWS Compound (Near Lal Hospital), Krishna Nagar, Kanpur Road, Lucknow – 226023, UP.
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4.5 h-4.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Plot+No.+6C/GH-2,+Vrindavan+Yojana+Phase-1,+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors group cursor-pointer"
                  title="Open Site Address in Google Maps"
                >
                  <strong className="text-white block font-medium group-hover:text-[#D4AF37] transition-colors">Site Address:</strong>
                  Plot No. 6C/GH-2, Vrindavan Yojana Phase-1, Lucknow.
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+916391579595" className="hover:text-[#D4AF37] transition-colors font-medium text-white">
                  +91 6391579595
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:uni.infracity12@gmail.com" className="hover:text-[#D4AF37] transition-colors font-medium">
                  uni.infracity12@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* PART 3: Bottom Bar */}
        <div className="pt-3 sm:pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-sm sm:text-[14px] text-stone-300 font-normal text-center sm:text-left">
          <p className="tracking-wide text-stone-300">
            © {new Date().getFullYear()} <strong className="text-white font-semibold">UNITED INFRACITY PRIVATE LIMITED</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2.5 text-sm sm:text-[14.5px] text-stone-300 tracking-wide">
            <span>Precision Crafted with Digital Intelligence by</span>
            <a
              href="https://codecrafter.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-90 transition-opacity"
              title="Code Crafter"
            >
              <img
                src="/images/ccwslogo.webp"
                alt="Code Crafter"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain inline-block drop-shadow-sm brightness-110"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
