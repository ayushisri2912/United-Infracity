import React, { useState } from 'react';
import { Building2, Search, User, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenUserModal, onSelectSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const menuStructure = [
    { name: 'Home', id: 'hero' },
    {
      name: 'About Us',
      id: 'about',
      dropdownOnly: true,
      submenu: [
        { name: 'Brand', id: 'brand' },
        { name: 'Our Mentor', id: 'mentor' },
        { name: 'Management', id: 'management' }
      ]
    },
    {
      name: 'Projects',
      id: 'projects',
      dropdownOnly: true,
      submenu: [
        { name: 'Ongoing Residential', id: 'projects-residential' },
        { name: 'Ongoing Commercial', id: 'projects-commercial' },
        { name: 'United Township', id: 'projects-township' },
        { name: 'Completed Projects', id: 'projects-completed' },
        { name: 'Government Projects', id: 'projects-government' }
      ]
    },
    { name: 'Testimonials', id: 'testimonials' },
    {
      name: 'Media',
      id: 'media',
      submenu: [
        { name: 'Blogs', id: 'media' },
        { name: 'News & Events', id: 'media' },
        { name: 'Press & Coverage', id: 'media' }
      ]
    },
    { name: 'Contact Us', id: 'footer' }
  ];

  const handleNavClick = (item, filter) => {
    // If it's a dropdown-only parent like 'About Us', do not execute main page navigation
    if (typeof item === 'object' && item.dropdownOnly) {
      setMobileSubmenu(mobileSubmenu === item.name ? null : item.name);
      return;
    }

    const sectionId = typeof item === 'object' ? item.id : item;
    onSelectSection(sectionId, filter);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Architectural Vector */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#B38F24] to-[#806214] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#FDFBF7] rounded-[10px] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                UNITED INFRACITY
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-stone-500">
                Private Limited
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {menuStructure.map((item) => (
              <div key={item.name} className="relative group py-6">
                <button
                  onClick={() => handleNavClick(item)}
                  className="flex items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-amber-700 tracking-wide transition-colors duration-300 cursor-pointer"
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-700 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                  {/* Animated Gold Hover Underline */}
                  <span className="absolute bottom-4 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-300 ease-out" />
                </button>

                {/* Submenu Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                    <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-[#D4AF37]/20 p-2 overflow-hidden">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavClick(subItem.id, subItem.filter)}
                          className="w-full text-left px-4 py-2.5 text-xs font-semibold text-gray-800 hover:text-gray-900 hover:bg-[#FDFBF7] hover:border-l-2 hover:border-[#D4AF37] rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer"
                        >
                          <span>{subItem.name}</span>
                          <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Items: Circular Search & Circular User Icons with Premium Gold Hover Effects */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Icon Button */}
            <button
              onClick={onOpenSearch}
              className="group w-10 h-10 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B38F24] hover:border-[#D4AF37] hover:text-white hover:shadow-md hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              title="Search Projects"
            >
              <Search className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors duration-300 group-hover:scale-110" />
            </button>

            {/* User Profile / Account Icon Button */}
            <button
              onClick={onOpenUserModal}
              className="group w-10 h-10 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B38F24] hover:border-[#D4AF37] hover:text-white hover:shadow-md hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              title="User Account & Enquiry Portal"
            >
              <User className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors duration-300 group-hover:scale-110" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Action Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="group w-9 h-9 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300"
              title="Search Projects"
            >
              <Search className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={onOpenUserModal}
              className="group w-9 h-9 bg-white border border-stone-300 rounded-full flex items-center justify-center text-stone-700 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300"
              title="User Account & Enquiry Portal"
            >
              <User className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                      onClick={() => handleNavClick(subItem.id, subItem.filter)}
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
