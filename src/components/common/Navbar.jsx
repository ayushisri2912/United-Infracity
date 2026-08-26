import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Building2, Search, User, ChevronDown, Menu, X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openSearch, openUser, setActiveProjectFilter } = useModal();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
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
  className={`sticky top-0 z-50 transition-all duration-500 ${
    isScrolled
      ? "bg-[#F2EEE7] shadow-lg border-b border-[#D4AF37]/20"
      : "bg-[#FDFBF7] border-b border-stone-200"
  }`}
>
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between h-22">
          
          {/* Far-Left: Brand Logo */}
          <div className="flex-1 flex justify-start">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#B38F24] to-[#806214] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#FDFBF7] rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl xl:text-[23px] tracking-tight text-gray-900 group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                  UNITED INFRACITY
                </span>
                <span className="text-[10px] tracking-[0.30em] uppercase font-bold text-stone-500 whitespace-nowrap">
                  Private Limited
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Nav Items */}
          <div className="hidden lg:flex items-center justify-center gap-7 xl:gap-9">
            {menuStructure.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <div key={item.name} className="relative group py-6">
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center gap-1.5 text-[14px] xl:text-[15px] font-semibold tracking-[0.03em] transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#D4AF37]'
                        : 'text-gray-900 hover:text-[#B38F24]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.submenu && (
                      <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-700 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                    {/* Animated Gold Hover Underline */}
                    <span className={`absolute bottom-4 left-0 h-[2.5px] rounded-full bg-[#D4AF37] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </button>

                  {/* Submenu Dropdown */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                      <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-[#D4AF37]/20 p-2 overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem.path, subItem.filter)}
                            className="w-full text-left px-4 py-3 text-sm font-medium text-gray-800 hover:text-gray-900 hover:bg-[#FDFBF7] hover:border-l-2 hover:border-[#D4AF37] rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer"
                          >
                            <span>{subItem.name}</span>
                            <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
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
              className="group w-10 h-10 xl:w-11 xl:h-11 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B38F24] hover:border-[#D4AF37] hover:text-white hover:shadow-md hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              title="Search Projects"
            >
              <Search className="w-4 h-4 xl:w-4.5 xl:h-4.5 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={openUser}
              className="group w-10 h-10 xl:w-11 xl:h-11 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B38F24] hover:border-[#D4AF37] hover:text-white hover:shadow-md hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              title="Patron Portal"
            >
              <User className="w-4 h-4 xl:w-4.5 xl:h-4.5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Action Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={openSearch}
              // className="group w-9 h-9 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300"
              className="group w-10 h-10 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B38F24] hover:border-[#D4AF37] hover:text-white hover:shadow-md hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              title="Search Projects"
            >
              <Search className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={openUser}
              // className="group w-9 h-9 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300"
              className="group w-10 h-10 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B38F24] hover:border-[#D4AF37] hover:text-white hover:shadow-md hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              title="User Account & Enquiry Portal"
            >
              <User className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              // className="p-2 text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 bg-white text-stone-800 hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
          {menuStructure.map((item) => (
            <div key={item.name} className="border-b border-stone-100 pb-2">
              <div className="flex justify-between items-center py-2">
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-gray-900 font-bold text-sm"
                >
                  {item.name}
                </button>
                {item.submenu && (
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === item.name ? null : item.name)}
                    className="p-1 text-stone-500"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {item.submenu && mobileSubmenu === item.name && (
                <div className="pl-4 py-1 space-y-1 bg-stone-50 rounded-lg">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() => handleNavClick(subItem.path, subItem.filter)}
                      className="block w-full text-left py-2 px-2 text-xs font-semibold text-stone-700 hover:text-[#D4AF37]"
                    >
                      • {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
