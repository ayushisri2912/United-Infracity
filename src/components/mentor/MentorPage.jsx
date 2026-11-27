import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Award, ShieldCheck, Building2, Sparkles, ArrowRight, CheckCircle2, Star, BookOpen, GraduationCap, Briefcase, Factory, Hotel, MapPin, ExternalLink, Calendar, Users } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MentorPage({ onOpenEnquire, onNavigateHome }) {
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const mentorDetails = {
    name: 'Sh. Shiv Shanker Awasthi',
    title: 'Founder & Mentor',
    group: 'Awasthi Group of Lucknow & United Infracity Pvt. Ltd.',
    age: '67 Years',
    education: 'Master of Arts (M.A.), Bachelor of Laws (LL.B.)',
    experience: 'Over 40 Years of Business Leadership',
    image: '/images/mentor_sanjoy_seth.jpg',
    quote: '"Business success is built on an unshakeable foundation of ethics, continuous value addition, and uncompromising commitment to Quality, Timely Delivery, and Client Satisfaction."'
  };

  const leadershipTenets = [
    {
      title: 'Four Decades of Mastery',
      detail: 'Ventured into business over 40 years ago starting with steel manufacturing, laying the bedrock of trust and precision.'
    },
    {
      title: 'Legal & Strategic Foresight',
      detail: 'Guided by M.A. and LL.B. academic credentials, establishing airtight corporate governance and RERA statutory compliance.'
    },
    {
      title: 'Multi-Sector Leadership',
      detail: 'Spearheaded substantial growth across Steel, Luxury Hospitality (Holiday Inn - IHG), Education, and Real Estate.'
    },
    {
      title: 'Client-Centric Mentorship',
      detail: 'Championed the core corporate motto: "Quality, Timely Delivery of Works and Client Satisfaction" across all developments.'
    }
  ];

  // Landmark projects data aligned with Home Page & Brochure Page 12 with exact submenu routes
  const landmarkProjects = [
    {
      id: 'holiday-inn',
      name: 'Holiday Inn Lucknow Airport',
      category: 'COMPLETED PROJECT',
      vertical: 'Luxury Hospitality',
      badge: '5-Star IHG Brand',
      image: '/images/holiday-inn.webp',
      route: '/projects/completed',
      summary: 'Premier 5-star international hotel featuring 192 luxury rooms and 50,000+ sq. ft. banqueting.',
      specs: [
        { label: 'Rooms', value: '192 Luxury Rooms' },
        { label: 'Banqueting', value: '50,000+ Sq. Ft.' },
        { label: 'Capacity', value: '2,000 Guests' }
      ]
    },
    {
      id: 'jaipuria-school',
      name: 'Seth M. R. Jaipuria School',
      category: 'COMPLETED PROJECT',
      vertical: 'K-12 Education',
      badge: 'Kanpur Road Campus',
      image: '/images/jaipuria-school.webp',
      route: '/projects/completed',
      summary: 'Premier CBSE K–12 institution spread across 7+ acres with modern academic and sports infrastructure.',
      specs: [
        { label: 'Campus Area', value: '7+ Acres' },
        { label: 'Affiliation', value: 'CBSE K–12' },
        { label: 'Facility', value: 'State-of-the-Art' }
      ]
    },
    {
      id: 'five-star-hotel',
      name: '5-Star Luxury Hotel',
      category: 'ONGOING PROJECT',
      vertical: 'Hospitality',
      badge: 'By 2029 Delivery',
      image: '/images/ongoing-five-star-hotel.webp',
      route: '/projects/commercial',
      summary: 'Upcoming 5-star landmark development designed to international hospitality standards.',
      specs: [
        { label: 'Category', value: '5-Star Luxury' },
        { label: 'Timeline', value: 'By 2029' },
        { label: 'Standard', value: 'International' }
      ]
    },
    {
      id: 'orchid-heights',
      name: 'United Orchid Heights',
      category: 'FLAGSHIP RESIDENTIAL',
      vertical: 'Real Estate',
      badge: '180 Luxury Units',
      image: '/images/cta.png',
      route: '/projects/residential',
      summary: '180 luxury apartments in Vrindavan Yojana with private balconies and full UP-RERA compliance.',
      specs: [
        { label: 'Apartments', value: '180 Units' },
        { label: 'Location', value: 'Plot No. 6C/GH-2' },
        { label: 'RERA Reg.', value: 'UPRERAPRJ593231' }
      ]
    }
  ];

  const handleProjectNavigation = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // GSAP ScrollTrigger Entrance Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Profile sections reveal
      gsap.fromTo(
        '.gsap-mentor-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-mentor-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );

      // 2. Project section header reveal
      gsap.fromTo(
        '.gsap-proj-header',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-proj-section',
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );

      // 3. Staggered reveal for the 4 project cards
      gsap.fromTo(
        '.gsap-project-item',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-project-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    }, pageRef);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="bg-[#FAF8F5] text-[#1A1A1A] animate-in fade-in duration-500 font-montserrat">
      
      {/* ─────────────────────────────────────────────────────────────
          1. TOP HERO BANNER HEADER: OUR MENTOR
         ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#C5A059]/30">
        <img
          src="/images/mentor.jpg"
          alt="United Infracity Our Mentor Header"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        
        {/* Reduced darkness overlays matching Brand page so the background image is clearly visible */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35" />

        {/* Centered Overlay Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#C5A059] uppercase block">
            Founder &amp; Guidance Desk
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-normal tracking-[0.15em] text-white uppercase drop-shadow-2xl">
            OUR MENTOR
          </h1>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN PROFILE CONTENT (Two Column Grid) - max-w-[1550px]
         ───────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
          
          <div className="gsap-mentor-grid grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Portrait & Quick Credentials */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              {/* Portrait Container with Gold Accent Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 bg-white group">
                <img
                  src={mentorDetails.image}
                  alt={`${mentorDetails.name} - Founder & Mentor`}
                  className="w-full h-[460px] sm:h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Floating Profile Badge (Luxury Dark Theme) */}
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#111111]/95 backdrop-blur-md rounded-xl border border-[#C5A059]/35 shadow-2xl space-y-1">
                  <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A059] block">
                    FOUNDER &amp; MENTOR
                  </span>
                  <h3 className="font-serif font-normal text-2xl sm:text-3xl text-white">
                    {mentorDetails.name}
                  </h3>
                  <p className="text-sm text-stone-300 font-medium">
                    Awasthi Group of Lucknow &amp; United Infracity Pvt. Ltd.
                  </p>
                </div>
              </div>

              {/* Mentorship Highlights Grid (Luxury Dark Theme) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#111111] border border-[#2B2B2B] hover:border-[#C5A059]/60 shadow-md text-center space-y-1 transition-all group">
                  <div className="font-serif text-3xl font-normal text-white group-hover:text-[#D4B675] transition-colors">40+ Yrs</div>
                  <div className="text-xs uppercase font-semibold tracking-wider text-stone-400">
                    Business Leadership
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#111111] border border-[#2B2B2B] hover:border-[#C5A059]/60 shadow-md text-center space-y-1 transition-all group">
                  <div className="font-serif text-2xl font-normal text-[#C5A059] group-hover:text-[#F3E5AB] transition-colors">M.A. | LL.B.</div>
                  <div className="text-xs uppercase font-semibold tracking-wider text-stone-400">
                    Education &amp; Law
                  </div>
                </div>
              </div>

              {/* Call-to-action button */}
              <button
                onClick={onOpenEnquire}
                className="w-full py-4 bg-[#111111] hover:bg-[#C5A059] text-white hover:text-stone-950 font-semibold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/40 group"
              >
                <span>Connect With Leadership Desk</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-stone-950 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            {/* RIGHT COLUMN: Stylized Blockquote & Profile Sections */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              
              {/* STYLIZED BLOCKQUOTE (Restored to Light Theme) */}
              <div className="gsap-mentor-card bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#E5E5E5] hover:border-[#C5A059]/40 shadow-sm relative overflow-hidden transition-colors">
                <Quote className="w-16 h-16 text-[#C5A059]/15 absolute top-5 right-5 pointer-events-none" />
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/10 text-[#997B20] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#C5A059]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Mentorship Vision</span>
                </div>

                <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] leading-relaxed tracking-wide font-normal">
                  {mentorDetails.quote}
                </blockquote>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#1A1A1A]">{mentorDetails.name}</h4>
                    <p className="text-xs sm:text-sm text-stone-500 font-medium">Founder &amp; Mentor</p>
                  </div>
                  <span className="px-3.5 py-1 bg-stone-100 text-stone-700 font-semibold text-xs uppercase rounded-full border border-stone-200">
                    Awasthi Group
                  </span>
                </div>
              </div>

              {/* SECTION 1: AGE, EDUCATION & CREDENTIALS CARD */}
              <div className="gsap-mentor-card bg-white rounded-2xl p-6 sm:p-8 md:p-9 border border-[#E5E5E5] hover:border-[#C5A059]/40 shadow-sm space-y-4 relative transition-colors">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                  <GraduationCap className="w-4 h-4 text-[#C5A059]" />
                  <span>Executive Credentials</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111]">
                  Profile &amp; <span className="text-[#C5A059] italic font-serif">Academic Background</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-1">
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-1.5">
                    <span className="text-xs uppercase font-semibold text-[#C5A059] tracking-wider block">
                      Age &amp; Standing
                    </span>
                    <p className="text-lg font-bold text-stone-900">
                      {mentorDetails.age}
                    </p>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">
                      Four decades of active business and industrial leadership in Lucknow &amp; Uttar Pradesh.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-1.5">
                    <span className="text-xs uppercase font-semibold text-[#C5A059] tracking-wider block">
                      Academic Degrees
                    </span>
                    <p className="text-lg font-bold text-stone-900">
                      {mentorDetails.education}
                    </p>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">
                      Graduated in Arts followed by Law, combining academic depth with legal acumen and governance.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 2: THE MENTOR'S JOURNEY */}
              <div className="gsap-mentor-card bg-white rounded-2xl p-6 sm:p-8 md:p-9 border border-[#E5E5E5] hover:border-[#C5A059]/40 shadow-sm space-y-4 relative transition-colors">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                  <Briefcase className="w-4 h-4 text-[#C5A059]" />
                  <span>Four Decades of Entrepreneurship</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111]">
                  The Founder's <span className="text-[#C5A059] italic font-serif">Journey &amp; Vision</span>
                </h3>

                <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                  After completing his Masters in Arts (M.A.) and graduating in Law (LL.B.), <strong>Sh. Shiv Shanker Awasthi</strong> ventured into business more than 40 years ago by establishing a steel mill in Lucknow, creating a foundation built on reliability, precision, quality, and strong work ethics.
                </p>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                  Through vision and discipline, he nurtured the industrial unit into the powerhouse known today as the <strong>Awasthi Group</strong>. Under his leadership alongside <strong>Shri Atul Awasthi</strong> and <strong>Shri Anuj Awasthi</strong>, the Group achieved substantial success across multiple high-impact sectors:
                </p>

                {/* 4 Sector Badges (Luxury Dark Style Inspired by Home Page) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-[#262626] text-white hover:border-[#C5A059]/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-200"><strong>Steel Industry:</strong> 40+ years foundation of precision &amp; heavy structural engineering</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-[#262626] text-white hover:border-[#C5A059]/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-200"><strong>Hospitality:</strong> Hotel Holiday Inn under IHG (with two more hotels planned by 2029)</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-[#262626] text-white hover:border-[#C5A059]/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-200"><strong>Education:</strong> Seth M. R. Jaipuria School (Kanpur Road Campus, 7+ acres)</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-[#262626] text-white hover:border-[#C5A059]/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-200"><strong>Real Estate:</strong> United Orchid Heights (180 luxury residential apartments)</span>
                  </div>
                </div>
              </div>

              {/* SECTION 3: STRATEGIC LEADERSHIP TENETS (Dark Luxury Cards Inspired by Home Page) */}
              <div className="gsap-mentor-card bg-white rounded-2xl p-6 sm:p-8 md:p-9 border border-[#E5E5E5] hover:border-[#C5A059]/40 shadow-sm space-y-6 transition-colors">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Core Pillars</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111]">
                    Leadership <span className="text-[#C5A059] italic font-serif">Pillars</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {leadershipTenets.map((tenet, idx) => (
                    <div
                      key={idx}
                      className="group/pillar p-5 rounded-xl bg-[#111111] border border-[#242424] hover:border-[#C5A059] text-white space-y-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
                    >
                      {/* Top Animated Gold Line */}
                      <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#C5A059] transform scale-x-0 group-hover/pillar:scale-x-100 transition-transform duration-400 ease-out origin-left pointer-events-none" />

                      <div className="flex items-center gap-2 text-sm font-semibold text-[#F3E5AB]">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                        <span>{tenet.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed pl-6">
                        {tenet.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. LANDMARK PROJECTS UNDER MENTORSHIP
             (Enlarged Architecture Images, Sleek Compact Height,
              Bold High-Contrast Text & Direct Submenu Navigation)
         ───────────────────────────────────────────────────────────── */}
      <section className="gsap-proj-section py-14 sm:py-16 lg:py-20 bg-white border-t border-b border-[#E5E5E5] relative overflow-hidden">
        
        {/* Subtle Watermark Emblem */}
        <div 
          className="absolute left-[-40px] top-1/4 w-80 h-80 pointer-events-none select-none opacity-[0.025] z-0" 
          aria-hidden="true"
        >
          <img 
            src="/images/orchid-emblem.webp" 
            alt="" 
            className="w-full h-full object-contain filter contrast-125" 
          />
        </div>

        <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10 space-y-10 sm:space-y-12">
          
          {/* Section Header */}
          <div className="gsap-proj-header text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-1">
              <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A059] uppercase block">
                AWASTHI GROUP PORTFOLIO
              </span>
              <span className="h-[1px] w-7 sm:w-10 bg-[#C5A059]" />
            </div>

            <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-tight">
              Landmarks Built Under His <span className="text-[#C5A059] italic font-serif">Mentorship</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              From international 5-star hospitality to leading K–12 academic campuses and modern residential communities, Sh. Shiv Shanker Awasthi’s visionary leadership has shaped landmarks of enduring value.
            </p>

            <div className="h-[1.5px] w-16 bg-[#C5A059] mx-auto mt-2" />
          </div>

          {/* 4 Landmark Projects Grid (Enlarged Images, Sleek Height & Submenu Routing) */}
          <div className="gsap-project-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {landmarkProjects.map((project) => (
              <div
                key={project.id}
                className="gsap-project-item group relative bg-[#FAF8F5] border border-[#E5E5E5] hover:border-[#C5A059] overflow-hidden shadow-sm hover:shadow-[0_16px_40px_rgba(197,160,89,0.22)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Top Animated Golden Sweep Line */}
                <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-20 pointer-events-none" />

                <div>
                  {/* ENLARGED ARCHITECTURAL IMAGE CONTAINER (Height increased to show full structure) */}
                  <div className="relative h-72 sm:h-80 lg:h-[340px] w-full overflow-hidden bg-stone-950 border-b border-[#E5E5E5]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out will-change-transform"
                    />
                    {/* Multi-layered cinematic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    {/* Top Badges with Glassmorphism */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                      <span className="px-3.5 py-1.5 bg-black/85 backdrop-blur-md text-[#D4B675] text-[11px] font-bold tracking-wider uppercase border border-[#C5A059]/40 shadow-sm">
                        {project.category}
                      </span>
                      <span className="px-3.5 py-1.5 bg-[#111111]/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/10 shadow-sm">
                        {project.badge}
                      </span>
                    </div>

                    {/* Bottom Title on Image with Gold Eyebrow */}
                    <div className="absolute bottom-4 left-5 right-5 z-10">
                      <span className="text-[11px] font-bold text-[#D4B675] uppercase tracking-[0.2em] block">
                        {project.vertical}
                      </span>
                      <h3 className="font-serif font-normal text-2xl sm:text-3xl text-white tracking-wide mt-0.5 drop-shadow-md">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content: Punchy, Bolder & Compact Height */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <p className="text-stone-800 text-sm sm:text-[14.5px] font-semibold leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Quick Specs Pill Row in High-Contrast Typography */}
                    <div className="grid grid-cols-3 gap-2.5 pt-1 border-t border-stone-200">
                      {project.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-lg bg-white border border-stone-200/90 text-center shadow-2xs">
                          <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-medium">
                            {spec.label}
                          </span>
                          <span className="text-xs sm:text-[13px] font-bold text-stone-900 block mt-0.5 leading-tight">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link: Direct Submenu Navigation Based on Project */}
                <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-stone-200/60 bg-[#FAF8F5]">
                  <button
                    onClick={() => handleProjectNavigation(project.route)}
                    className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-[#111111] text-[#111111] hover:text-[#C5A059] border border-stone-300 hover:border-[#C5A059] text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-between cursor-pointer group/btn shadow-xs hover:shadow-md"
                  >
                    <span>View Project In {project.category.includes('COMPLETED') ? 'Completed' : project.category.includes('COMMERCIAL') ? 'Commercial' : 'Residential'} Portfolio</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Luxury CTA Card */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-stone-950 via-[#161513] to-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C5A059]/30 shadow-2xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs text-[#C5A059] font-semibold uppercase tracking-widest block">
                A LEGACY BUILT ON TRUST
              </span>
              <h3 className="font-serif font-normal text-xl sm:text-2xl text-white">
                Experience Four Decades of Architectural &amp; Industrial Excellence
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-light">
                Discover our portfolio of completed and upcoming landmark developments across Lucknow.
              </p>
            </div>
            
            <button
              onClick={() => handleProjectNavigation('/projects/residential')}
              className="whitespace-nowrap px-8 py-4 bg-[#C5A059] hover:bg-[#B38F24] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105"
            >
              Explore Full Portfolio
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
