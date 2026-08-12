import React from 'react';
import { Quote, Award, ShieldCheck, Building2, Sparkles, Heart, ArrowRight, CheckCircle2, Star, Users } from 'lucide-react';

export default function MentorPage({ onOpenEnquire, onNavigateHome }) {
  const leadershipTenets = [
    {
      title: 'Ethical Transparency',
      detail: 'Pioneered 100% RERA compliance, clear title deeds, and customer-first financial integrity.'
    },
    {
      title: 'Architectural Mastery',
      detail: 'Collaborating with world-class structural engineers and international urban designers.'
    },
    {
      title: 'Biophilic Integration',
      detail: 'Embedding 70%+ open green spaces, zen gardens, and energy-efficient building facades.'
    },
    {
      title: 'People-First Mentorship',
      detail: 'Cultivating a culture of continuous innovation, safety standards, and leadership empowerment.'
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
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-2xl">
            OUR MENTOR
          </h1>

          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* MAIN PROFILE CONTENT (Two Column Grid) */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Prominent High-Quality Portrait Photograph of Sanjoy Seth */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 bg-white group">
                <img
                  src="/images/mentor_sanjoy_seth.jpg"
                  alt="Sanjoy Seth - Founder & Chief Mentor, United Infracity"
                  className="w-full h-[460px] sm:h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Floating Profile Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-xl">
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37] block">
                    FOUNDER & MANAGING DIRECTOR
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#1A1A1A] mt-0.5">
                    Sanjoy Seth
                  </h3>
                  <p className="text-xs text-stone-600 font-medium mt-1">
                    Chief Mentor, United Infracity Private Limited
                  </p>
                </div>
              </div>

              {/* Mentorship Highlights Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/20 shadow-sm text-center">
                  <div className="font-serif text-2xl font-bold text-[#1A1A1A]">25+ Yrs</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-stone-500 mt-0.5">
                    Real Estate Vision
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/20 shadow-sm text-center">
                  <div className="font-serif text-2xl font-bold text-[#D4AF37]">5M+ Sq. Ft.</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-stone-500 mt-0.5">
                    Landmarks Delivered
                  </div>
                </div>
              </div>

              {/* Call-to-action button */}
              <button
                onClick={onOpenEnquire}
                className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect With Leadership Desk</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

            </div>

            {/* RIGHT COLUMN: Stylized Blockquote & Structured Profile Sections */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* STYLIZED BLOCKQUOTE (Core Mentorship Philosophy) */}
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-md">
                <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute top-4 right-4 pointer-events-none" />
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Mentorship Philosophy</span>
                </div>

                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#B38F24] leading-relaxed tracking-wide">
                  "Real estate is not merely about shaping structures of concrete and steel; it is about inspiring human lives, nurturing sustainable communities, and leaving an enduring legacy of excellence for generations to come."
                </blockquote>

                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-stone-900">Sanjoy Seth</h4>
                    <p className="text-xs text-stone-500 font-medium">Founder & Chief Mentor</p>
                  </div>
                  <span className="px-3 py-1 bg-[#D4AF37]/15 text-[#997B20] font-bold text-[10px] uppercase rounded-full border border-[#D4AF37]/30">
                    United Infracity
                  </span>
                </div>
              </div>

              {/* SECTION 1: THE FOUNDER'S JOURNEY */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 shadow-sm space-y-4 relative">
                <div className="absolute top-0 left-8 w-16 h-[3px] bg-[#D4AF37]" />

                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Pioneering Legacy</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  The Founder's <span className="text-[#D4AF37] italic font-serif">Journey</span>
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                  With over two decades of hands-on leadership in urban development and civil infrastructure, <strong>Sanjoy Seth</strong> established <strong>United Infracity Private Limited</strong> with a mission to transform metropolitan skylines into thriving human ecosystems.
                </p>

                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  Beginning with luxury residential boutique developments, his sharp foresight led the group to pioneer Grade-A commercial corporate hubs, mixed-use retail parks, and 150-acre integrated townships. Under his mentorship, United Infracity has consistently delivered projects on schedule while adhering to the highest global safety and quality standards.
                </p>
              </div>

              {/* SECTION 2: VISION & LEADERSHIP */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 shadow-sm space-y-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Strategic Leadership</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    Vision & <span className="text-[#D4AF37] italic font-serif">Leadership Tenets</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {leadershipTenets.map((tenet, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#FDFBF7] border border-stone-200 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A]">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{tenet.title}</span>
                      </div>
                      <p className="text-xs text-stone-600 font-light leading-relaxed pl-6">
                        {tenet.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 3: A LEGACY OF INSPIRED GENERATIONS */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 shadow-sm space-y-4 relative">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#997B20]">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Impact & Heritage</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  A Legacy of <span className="text-[#D4AF37] italic font-serif">Inspired Generations</span>
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  Today, Sanjoy Seth's mentorship guides a dynamic team of structural engineers, architects, and corporate strategists. His philosophy ensures that every United Infracity development is more than just a real estate investment—it is a landmark created for timeless pride, family security, and lasting economic value.
                </p>

                {/* Bottom CTA Card */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-stone-900 to-stone-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block">
                      LEADERSHIP EXCELLENCE
                    </span>
                    <h4 className="font-serif font-bold text-base text-white mt-0.5">
                      Explore Projects Mentored by Sanjoy Seth
                    </h4>
                  </div>
                  
                  <button
                    onClick={onNavigateHome}
                    className="whitespace-nowrap px-5 py-2.5 bg-[#D4AF37] hover:bg-[#B38F24] text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all cursor-pointer"
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
