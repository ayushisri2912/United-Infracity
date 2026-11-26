import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, PhoneCall } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openSearch, openEnquire, setActiveProjectFilter } = useModal();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  const menuStructure = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      dropdownOnly: true,
      submenu: [
        { name: 'Brand', path: '/about' },
        { name: 'Our Mentor', path: '/about/mentor' },
        { name: 'Management', path: '/about/management' }
      ]
    },
    {
      name: 'Projects',
      path: '/projects/residential',
      dropdownOnly: true,
      submenu: [
        { name: 'Ongoing Residential', path: '/projects/residential', filter: 'Residential' },
        { name: 'Ongoing Commercial', path: '/projects/commercial', filter: 'Commercial' },
        { name: 'United Township', path: '/projects/township', filter: 'Township' },
        { name: 'Completed Projects', path: '/projects/completed', filter: 'Completed' },
        { name: 'Government Projects', path: '/projects/government', filter: 'Government' }
      ]
    },
    { name: 'Testimonials', path: '/testimonials' },
    {
      name: 'Media',
      path: '/blog',
      submenu: [
        { name: 'Blogs', path: '/blog' },
        { name: 'News & Events', path: '/news-events' },
        { name: 'Press & Coverage', path: '/press-coverage' }
      ]
    },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleNavClick = (item, filter) => {
    if (typeof item === 'object' && item.dropdownOnly) {
      setMobileSubmenu(mobileSubmenu === item.name ? null : item.name);
      return;
    }

    const targetPath = typeof item === 'object' ? item.path : item;
    
    if (filter) {
      setActiveProjectFilter(filter);
    }

    if (targetPath === '#footer') {
      const footerElem = document.getElementById('footer');
      if (footerElem) {
        footerElem.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else if (targetPath) {
      navigate(targetPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ease-out nav-root ${
        isScrolled
          ? 'bg-[#111111]/98 backdrop-blur-md border-b border-[#C5A059]/35 shadow-md shadow-black/40'
          : 'bg-[#111111] border-b border-[#C5A059]/25'
      }`}
    >
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        {/* Navbar Height: ~80px (h-20), compacting to h-[70px] when scrolled */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-out ${
            isScrolled ? 'h-[70px]' : 'h-20'
          }`}
        >
          {/* Far-Left: Brand Logo (Preserved golden emblem with white company name) */}
          <div className="flex-1 flex justify-start min-w-0">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group py-1 min-w-0"
              aria-label="United Infracity Home"
            >
              <img
                src="/images/logo-hero-white.webp"
                alt="United Infracity Private Limited"
                className={`w-auto object-contain transition-all duration-300 ease-out group-hover:scale-105 will-change-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${
                  isScrolled
                    ? 'h-11 sm:h-12 lg:h-[50px]'
                    : 'h-13 sm:h-14 lg:h-[60px]'
                }`}
                onError={(e) => {
                  e.currentTarget.src = '/images/logo-hero.webp';
                }}
              />
            </Link>
          </div>

          {/* Center: Desktop Nav Items with Architectural Typography & Smooth Left-to-Right Golden Underline */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 2xl:gap-9">
            {menuStructure.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.submenu && item.submenu.some((s) => s.path === location.pathname));

              return (
                <div key={item.name} className="relative group py-5">
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`relative flex items-center gap-1.5 text-[14px] xl:text-[15px] font-medium tracking-[0.03em] transition-colors duration-300 cursor-pointer whitespace-nowrap py-1 select-none focus:outline-none focus-visible:text-[#C5A059] ${
                      isActive
                        ? 'text-[#C5A059]'
                        : 'text-white hover:text-[#C5A059]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.submenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-all duration-300 ${
                          isActive
                            ? 'text-[#C5A059]'
                            : 'text-white/60 group-hover:text-[#C5A059]'
                        } group-hover:rotate-180`}
                      />
                    )}

                    {/* Smooth Left-to-Right Golden Underline Animation */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] transition-transform duration-300 ease-out origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </button>

                  {/* Submenu Dropdown with Opacity and TranslateY Reveal */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-64 pt-2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                      <div className="bg-[#1C1C1C] border border-[#333333] shadow-xl p-1.5 rounded-none">
                        {item.submenu.map((subItem) => {
                          const isSubActive = location.pathname === subItem.path;
                          return (
                            <button
                              key={subItem.name}
                              onClick={() => handleNavClick(subItem.path, subItem.filter)}
                              className={`w-full text-left px-4 py-2.5 text-xs xl:text-sm font-medium transition-all duration-200 flex items-center justify-between cursor-pointer rounded-none group/sub ${
                                isSubActive
                                  ? 'text-[#C5A059] bg-[#252525] border-l-2 border-[#C5A059]'
                                  : 'text-white hover:text-[#C5A059] hover:bg-[#252525] hover:border-l-2 hover:border-[#C5A059]'
                              }`}
                            >
                              <span>{subItem.name}</span>
                              <span className="text-[#D4B675] opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-200 text-xs">
                                →
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Far-Right: Action Icons (Minimal White Outline, No White Circular Badges, Golden Hover Effects) */}
          <div className="flex-1 hidden lg:flex items-center justify-end gap-2">
            <button
              onClick={openSearch}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#C5A059] transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:text-[#C5A059] group"
              title="Search Projects"
              aria-label="Search Projects"
            >
              <Search className="w-5 h-5 stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Minimal Action Icons */}
          <div className="flex lg:hidden items-center gap-1 shrink-0">
            <button
              onClick={openSearch}
              className="w-9 h-9 flex items-center justify-center text-white hover:text-[#C5A059] transition-colors duration-300 cursor-pointer focus:outline-none"
              title="Search Projects"
              aria-label="Search Projects"
            >
              <Search className="w-4.5 h-4.5 stroke-[1.8]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center text-white hover:text-[#C5A059] transition-colors duration-300 cursor-pointer focus:outline-none ml-1"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[1.8]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[1.8]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Solid Luxury Black #111111 with Gold Accents) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-[#C5A059]/30 px-5 sm:px-8 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto shadow-2xl">
          {menuStructure.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.submenu && item.submenu.some((s) => s.path === location.pathname));

            return (
              <div key={item.name} className="border-b border-[#333333] last:border-b-0 pb-1.5">
                <div className="flex justify-between items-center py-2.5">
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`text-left font-medium text-sm sm:text-base flex-1 transition-colors ${
                      isActive ? 'text-[#C5A059]' : 'text-white hover:text-[#C5A059]'
                    }`}
                  >
                    {item.name}
                  </button>
                  {item.submenu && (
                    <button
                      onClick={() =>
                        setMobileSubmenu(mobileSubmenu === item.name ? null : item.name)
                      }
                      className="p-2 text-white/60 hover:text-[#C5A059] cursor-pointer"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileSubmenu === item.name ? 'rotate-180 text-[#C5A059]' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.submenu && mobileSubmenu === item.name && (
                  <div className="pl-3 py-1 space-y-1 bg-[#1C1C1C] border border-[#333333] my-1 rounded-none animate-in fade-in duration-200">
                    {item.submenu.map((subItem) => {
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavClick(subItem.path, subItem.filter)}
                          className={`block w-full text-left py-2 px-3 text-xs sm:text-sm font-medium transition-colors ${
                            isSubActive
                              ? 'text-[#C5A059] bg-[#252525] border-l-2 border-[#C5A059]'
                              : 'text-white/85 hover:text-[#C5A059] hover:bg-[#252525]'
                          }`}
                        >
                          • {subItem.name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Consultation Action Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquire();
              }}
              className="w-full py-3.5 bg-[#C5A059] hover:bg-[#D4B675] text-[#111111] font-semibold text-xs uppercase tracking-[0.15em] rounded-none shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300"
            >
              <PhoneCall className="w-3.5 h-3.5 stroke-[2]" />
              <span>Schedule Site Consultation</span>
            </button>
          </div>
        </div>
      )}

      {/* Scoped CSS for Reduced Motion Respect */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .nav-root,
          .nav-root * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            transform: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
