import React from 'react';
import { Building, Users, CheckCircle2, Award, Sparkles, Trophy } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { label: 'Years of Excellence', value: '15+', icon: Trophy },
    { label: 'Sq. Ft. Delivered', value: '5M+', icon: Building },
    { label: 'Projects Completed', value: '25+', icon: Award },
    { label: 'Happy Families', value: '6000+', icon: Users },
  ];

  return (
    <section id="about" className="py-10 lg:py-14 bg-[#FDFBF7] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: High-resolution image of Aura Tower with rounded-2xl and shadow-2xl */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
              <img
                src="/images/aura_tower_facade.jpg"
                alt="Aura Tower / Luxury Commercial Landmark"
                className="w-full h-[380px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-white/40 shadow-md">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                  Architectural Paragon
                </span>
                <h4 className="font-serif font-bold text-base text-[#1A1A1A] mt-0.5">
                  Aura Tower Commercial & Corporate Centre
                </h4>
                <p className="text-[11px] text-stone-600 mt-0.5 line-clamp-2">
                  Setting standard for sustainable, futuristic commercial real estate infrastructure.
                </p>
              </div>
            </div>

            {/* Decorative Offset Gold Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* RIGHT COLUMN: Headline, Body Text, and 2x2 Statistics Grid */}
          <div className="space-y-5 text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#997B20] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Legacy & Vision</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-[1.2]">
                Creating Landmarks That <br />
                <span className="text-[#D4AF37] italic font-serif">Inspire Generations</span>
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              At <strong>United Infracity Private Limited</strong>, we believe real estate is more than just constructs of steel and glass—it is about creating ecosystems where lives thrive, businesses flourish, and communities bond.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Master-planned luxury residential townships and high-street retail hubs.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Uncompromised quality standards with 100% RERA compliant projects.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Eco-friendly architectures featuring green building certifications.</span>
              </div>
            </div>

            {/* 2x2 Key Statistics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#D4AF37]/20 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-2 group-hover:bg-[#D4AF37] transition-colors">
                      <IconComponent className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
                    </div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-stone-500 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
