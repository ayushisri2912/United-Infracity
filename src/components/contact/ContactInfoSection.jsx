import React from 'react';
import { MapPin, Phone, Mail, Building2, ShieldCheck } from 'lucide-react';

export default function ContactInfoSection() {
  // Authentic contact details synchronized directly with Home Page & Official Footer
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Registered Office',
      lines: [
        '560/109, RWS Compound (Near Lal Hospital),',
        'Krishna Nagar, Kanpur Road, Lucknow – 226023, UP'
      ]
    },
    {
      icon: Building2,
      title: 'Site / Sales Office',
      lines: [
        'Plot No. 6C/GH-2, Vrindavan Yojna Phase-1,',
        'Sector 6, Vrindavan, Lucknow, UP'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'Corporate Identity Number',
      lines: [
        'CIN: U70102UP2012PTC050901',
        'M/s United Infracity Private Limited (Awasthi Group)'
      ]
    },
    {
      icon: Phone,
      title: 'Official Helpline',
      lines: ['+91 6391579595'],
      isPhone: true
    },
    {
      icon: Mail,
      title: 'Email Address',
      lines: ['uni.infracity12@gmail.com', 'info@unitedinfracity.com'],
      isMail: true
    }
  ];

  const socialLinks = [
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
      name: 'Instagram',
      href: 'https://instagram.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
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
      name: 'YouTube',
      href: 'https://youtube.com',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
  ];

  return (
    <div className="h-full flex flex-col space-y-6">
      
      {/* Header with strictly matched height & baseline */}
      <div className="min-h-[72px] sm:min-h-[80px] flex flex-col justify-end space-y-1.5">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] font-normal leading-tight">
          Get In <span className="italic text-[#C49D55]">Touch</span>
        </h2>
        <p className="font-montserrat text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
          Connect directly with our luxury real estate advisors, site sales desk, and corporate relations team.
        </p>
      </div>

      {/* Clean White Information Card - Equal Height & Architectural Accents */}
      <div className="flex-1 flex flex-col justify-between bg-white p-6 sm:p-8 border border-[#E5E5E5] hover:border-[#C49D55]/60 shadow-sm hover:shadow-xl transition-all duration-500 relative group">
        
        {/* Subtle Top Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55]/40 to-transparent group-hover:via-[#C49D55] transition-all duration-500" />
        
        {/* Architectural Corner Brackets */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C49D55]/40 group-hover:border-[#C49D55] transition-colors" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C49D55]/40 group-hover:border-[#C49D55] transition-colors" />

        <div className="space-y-4 sm:space-y-5">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="gsap-contact-item flex items-start gap-3.5 sm:gap-4 group/item">
                <div className="w-10 h-10 bg-[#C49D55]/10 border border-[#C49D55]/30 flex items-center justify-center text-[#C49D55] shrink-0 group-hover/item:scale-105 group-hover/item:bg-[#C49D55] group-hover/item:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-montserrat font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#141414]">
                    {item.title}
                  </h4>
                  {item.lines.map((line, i) => (
                    <p key={i} className="font-montserrat text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed">
                      {item.isPhone ? (
                        <a href={`tel:${line.replace(/\s+/g, '')}`} className="hover:text-[#C49D55] transition-colors font-medium text-stone-800">
                          {line}
                        </a>
                      ) : item.isMail ? (
                        <a href={`mailto:${line}`} className="hover:text-[#C49D55] transition-colors font-medium text-stone-800">
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider & Social Links */}
        <div className="pt-4 mt-6 border-t border-[#E5E5E5] flex items-center justify-between">
          <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-[#C49D55]">
            Connect With Us
          </span>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-8 h-8 bg-[#F8F6F1] border border-[#E5E5E5] text-stone-600 hover:bg-[#C49D55] hover:border-[#C49D55] hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-2xs hover:scale-105"
                title={social.name}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
