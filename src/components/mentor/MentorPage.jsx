import React from 'react';
import { Quote, Award, ShieldCheck, Building2, Sparkles, ArrowRight, CheckCircle2, Star, BookOpen, GraduationCap, Briefcase, Factory, Hotel } from 'lucide-react';

export default function MentorPage({ onOpenEnquire, onNavigateHome }) {
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
      detail: 'Ventured into business over 40 years ago starting with a steel mill, expanding into multi-sector conglomerates.'
    },
    {
      title: 'Legal & Strategic Foresight',
      detail: 'Guided by M.A. and LL.B. academic credentials, ensuring airtight corporate governance, RERA compliance, and legal ethics.'
    },
    {
      title: 'Multi-Sector Portfolio',
      detail: 'Steered substantial success across Hospitality (Hotel Holiday Inn Lucknow Airport - IHG), Education (Seth MR Jaipuria School), Steel, Healthcare, and Real Estate.'
    },
    {
      title: 'Client-Centric Mentorship',
      detail: 'Championed the core motto: "Quality, Timely Delivery of Works and Client Satisfaction" across all corporate endeavors.'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-[#1A1A1A] animate-in fade-in duration-500">
      
      {/* Top Hero Banner Header: OUR MENTOR */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-stone-950 flex items-center justify-center border-b border-[#D4AF37]/30">
        <img
          src="/images/united_commercial.jpg"
          alt="United Infracity Our Mentor Header"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

        {/* Centered Overlay Content: OUR MENTOR */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 animate-in fade-in duration-700">
          <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#D4AF37] uppercase block">
            Founder & Guidance Desk
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            OUR MENTOR
          </h1>

          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* MAIN PROFILE CONTENT (Two Column Grid) - Container width matching Navbar */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Prominent Portrait Photograph of Sh. Shiv Shanker Awasthi */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 bg-white group">
                <img
                  src={mentorDetails.image}
                  alt={`${mentorDetails.name} - Founder & Mentor`}
                  className="w-full h-[460px] sm:h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Floating Profile Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-xl space-y-1">
                  <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D4AF37] block">
                    FOUNDER & MENTOR
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                    {mentorDetails.name}
                  </h3>
                  <p className="text-sm text-stone-600 font-medium">
                    Awasthi Group of Lucknow & United Infracity Pvt. Ltd.
                  </p>
                </div>
              </div>

              {/* Mentorship Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/20 shadow-sm text-center space-y-1">
                  <div className="font-serif text-3xl font-bold text-[#1A1A1A]">40+ Yrs</div>
                  <div className="text-xs uppercase font-bold tracking-wider text-stone-500">
                    Business Leadership
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/20 shadow-sm text-center space-y-1">
                  <div className="font-serif text-2xl font-bold text-[#D4AF37]">M.A. | LL.B.</div>
                  <div className="text-xs uppercase font-bold tracking-wider text-stone-500">
                    Education & Law
                  </div>
                </div>
              </div>

              {/* Call-to-action button */}
              <button
                onClick={onOpenEnquire}
                className="w-full py-4 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect With Leadership Desk</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

            </div>

            {/* RIGHT COLUMN: Stylized Blockquote & Structured Profile Sections */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* STYLIZED BLOCKQUOTE */}
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/30 shadow-md">
                <Quote className="w-14 h-14 text-[#D4AF37]/20 absolute top-4 right-4 pointer-events-none" />
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Mentorship Vision</span>
                </div>

                <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#B38F24] leading-relaxed tracking-wide">
                  {mentorDetails.quote}
                </blockquote>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-stone-900">{mentorDetails.name}</h4>
                    <p className="text-sm text-stone-500 font-medium">Founder & Mentor</p>
                  </div>
                  <span className="px-3.5 py-1 bg-[#D4AF37]/15 text-[#997B20] font-bold text-xs uppercase rounded-full border border-[#D4AF37]/30">
                    Awasthi Group
                  </span>
                </div>
              </div>

              {/* SECTION 1: AGE, EDUCATION & CREDENTIALS CARD */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/20 shadow-sm space-y-4 relative">
                <div className="absolute top-0 left-8 w-16 h-[3px] bg-[#D4AF37]" />

                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                  <span>Executive Credentials</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                  Profile & <span className="text-[#D4AF37] italic font-serif">Academic Background</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="p-5 rounded-xl bg-[#FDFBF7] border border-stone-200 space-y-1.5">
                    <span className="text-xs uppercase font-bold text-[#997B20] tracking-wider block">
                      Age & Standing
                    </span>
                    <p className="text-base font-bold text-stone-900">
                      {mentorDetails.age}
                    </p>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">
                      Four decades of active business leadership in Lucknow & UP.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#FDFBF7] border border-stone-200 space-y-1.5">
                    <span className="text-xs uppercase font-bold text-[#997B20] tracking-wider block">
                      Academic Degrees
                    </span>
                    <p className="text-base font-bold text-stone-900">
                      {mentorDetails.education}
                    </p>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">
                      Graduated in Arts followed by Law, combining academic depth with legal acumen.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 2: THE MENTOR'S JOURNEY */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/20 shadow-sm space-y-4 relative">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                  <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                  <span>Four Decades of Entrepreneurship</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                  The Founder's <span className="text-[#D4AF37] italic font-serif">Journey & Vision</span>
                </h3>

                <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                  After completing his Masters in Arts (M.A.) and graduating in Law (LL.B.), <strong>Sh. Shiv Shanker Awasthi</strong> ventured into business more than 40 years ago by starting a steel mill in Lucknow.
                </p>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                  Through vision, discipline, and unyielding integrity, he nurtured the small industrial unit into the powerhouse known today as the <strong>Awasthi Group</strong>. Under his guidance, the group achieved substantial success across multiple high-impact sectors:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FDFBF7] border border-stone-200 text-sm font-medium text-stone-800">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Hospitality:</strong> Hotel Holiday Inn Lucknow Airport (5-Star IHG Brand)</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FDFBF7] border border-stone-200 text-sm font-medium text-stone-800">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Education:</strong> Seth MR Jaipuria School (Kanpur Road Campus)</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FDFBF7] border border-stone-200 text-sm font-medium text-stone-800">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Steel Manufacturing:</strong> 40+ years industrial foundation</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FDFBF7] border border-stone-200 text-sm font-medium text-stone-800">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Real Estate & Healthcare:</strong> United Infracity flagship projects</span>
                  </div>
                </div>
              </div>

              {/* SECTION 3: STRATEGIC LEADERSHIP TENETS */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/20 shadow-sm space-y-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Core Pillars</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                    Leadership <span className="text-[#D4AF37] italic font-serif">Pillars</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {leadershipTenets.map((tenet, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-[#FDFBF7] border border-stone-200 space-y-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#D4AF37] shrink-0" />
                        <span>{tenet.title}</span>
                      </div>
                      <p className="text-sm text-stone-600 font-light leading-relaxed pl-6">
                        {tenet.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 4: LEGACY & IMPACT */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/20 shadow-sm space-y-4 relative">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Enduring Impact</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                  A Legacy of <span className="text-[#D4AF37] italic font-serif">Excellence</span>
                </h3>

                <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                  Today, Sh. Shiv Shanker Awasthi's wisdom and mentorship continue to inspire the executive directors and engineering teams at United Infracity Private Limited. His commitment to high ethics, customer satisfaction, and timely execution forms the bedrock of every landmark development.
                </p>

                {/* Bottom CTA Card */}
                <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-stone-900 to-stone-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest block">
                      LEADERSHIP EXCELLENCE
                    </span>
                    <h4 className="font-serif font-bold text-lg sm:text-xl text-white mt-0.5">
                      Explore Flagship Projects Under Sh. Shiv Shanker Awasthi's Mentorship
                    </h4>
                  </div>
                  
                  <button
                    onClick={onNavigateHome}
                    className="whitespace-nowrap px-6 py-3 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all cursor-pointer"
                  >
                    Explore Portfolio
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
