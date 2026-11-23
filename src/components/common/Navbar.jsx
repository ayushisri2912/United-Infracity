import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, User, ChevronDown, Menu, X, PhoneCall } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openSearch, openUser, openEnquire, setActiveProjectFilter } = useModal();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F3EEE7]/95 backdrop-blur-md shadow-md border-b border-[#C49639]/25"
          : "bg-[#F3EEE7] border-b border-[#C49639]/15 shadow-xs"
      }`}
    >
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Far-Left: Brand Logo (logo-hero) */}
          <div className="flex-1 flex justify-start min-w-0">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group py-1 min-w-0"
            >
              <img
                src="/images/logo-hero.webp"
                alt="United Infracity Private Limited"
                className="h-14 sm:h-16 lg:h-[72px] xl:h-[74px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs"
              />
            </Link>
          </div>

          {/* Center: Desktop Nav Items with Logo-Matching Gold Hover/Active Color */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 2xl:gap-9">
            {menuStructure.map((item) => {
              const isActive = location.pathname === item.path || (item.submenu && item.submenu.some(s => s.path === location.pathname));
              return (
                <div key={item.name} className="relative group py-6">
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center gap-1.5 text-[14px] xl:text-[15px] font-semibold tracking-[0.02em] transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#C49639]'
                        : 'text-[#29221F] hover:text-[#C49639]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.submenu && (
                      <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#C49639] group-hover:rotate-180 transition-transform duration-300" />
                    )}
                    {/* Animated Gold Hover Underline */}
                    <span className={`absolute bottom-4 left-0 h-[2.5px] rounded-full bg-[#C49639] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </button>

                  {/* Submenu Dropdown */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-60 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                      <div className="bg-[#F8F4EE]/98 backdrop-blur-xl rounded-xl shadow-2xl border border-[#C49639]/25 p-2 overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem.path, subItem.filter)}
                            className="w-full text-left px-4 py-2.5 text-sm font-medium text-[#29221F] hover:text-[#C49639] hover:bg-[#EDE5DA] hover:border-l-2 hover:border-[#C49639] rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer"
                          >
                            <span>{subItem.name}</span>
                            <span className="text-[#C49639] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Far-Right: Action Buttons */}
          <div className="flex-1 hidden lg:flex items-center justify-end gap-3.5">
            <button
              onClick={openSearch}
              className="group w-10 h-10 xl:w-11 xl:h-11 bg-white/90 border border-stone-300/80 rounded-full flex items-center justify-center text-[#29221F] hover:bg-[#C49639] hover:border-[#C49639] hover:text-white hover:shadow-md hover:shadow-[#C49639]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              title="Search Projects"
            >
              <Search className="w-4 h-4 xl:w-4.5 xl:h-4.5 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={openUser}
              className="group w-10 h-10 xl:w-11 xl:h-11 bg-white/90 border border-stone-300/80 rounded-full flex items-center justify-center text-[#29221F] hover:bg-[#C49639] hover:border-[#C49639] hover:text-white hover:shadow-md hover:shadow-[#C49639]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              title="Patron Portal"
            >
              <User className="w-4 h-4 xl:w-4.5 xl:h-4.5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Action Buttons */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={openSearch}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-white/90 border border-stone-300/80 rounded-full flex items-center justify-center text-[#29221F] hover:bg-[#C49639] hover:border-[#C49639] hover:text-white hover:shadow-md transition-all duration-300 cursor-pointer"
              title="Search Projects"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={openUser}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-white/90 border border-stone-300/80 rounded-full flex items-center justify-center text-[#29221F] hover:bg-[#C49639] hover:border-[#C49639] hover:text-white hover:shadow-md transition-all duration-300 cursor-pointer"
              title="User Account & Enquiry Portal"
            >
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-stone-300/80 bg-white/90 text-[#29221F] hover:bg-[#C49639] hover:text-white hover:border-[#C49639] transition-all duration-300 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F3EEE7] border-b border-[#C49639]/20 px-4 sm:px-6 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto shadow-2xl">
          {menuStructure.map((item) => {
            const isActive = location.pathname === item.path || (item.submenu && item.submenu.some(s => s.path === location.pathname));
            return (
              <div key={item.name} className="border-b border-[#C49639]/10 last:border-b-0 pb-1.5">
                <div className="flex justify-between items-center py-2.5">
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`text-left font-bold text-sm sm:text-base flex-1 ${
                      isActive ? 'text-[#C49639]' : 'text-[#29221F] hover:text-[#C49639]'
                    }`}
                  >
                    {item.name}
                  </button>
                  {item.submenu && (
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === item.name ? null : item.name)}
                      className="p-2 text-stone-500 hover:text-[#C49639] cursor-pointer"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSubmenu === item.name ? 'rotate-180 text-[#C49639]' : ''}`} />
                    </button>
                  )}
                </div>

                {item.submenu && mobileSubmenu === item.name && (
                  <div className="pl-3 py-1 space-y-1 bg-[#EDE5DA] rounded-xl border border-[#C49639]/20 my-1 animate-in fade-in duration-200">
                    {item.submenu.map((subItem) => {
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavClick(subItem.path, subItem.filter)}
                          className={`block w-full text-left py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                            isSubActive ? 'text-[#C49639] bg-white font-bold' : 'text-[#29221F] hover:text-[#C49639] hover:bg-white/80'
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

          {/* Quick Enquire button in Mobile Drawer */}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquire();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-[#C49639] to-[#A37B28] text-white font-bold text-xs uppercase tracking-[0.15em] rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Schedule Site Consultation</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
