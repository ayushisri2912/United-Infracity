import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function UpcomingEventsSection({ onRegisterEvent }) {
  const upcomingEvents = [
    {
      id: 'event-1',
      date: 'SEPTEMBER 18, 2026',
      time: '10:00 AM - 05:00 PM',
      title: 'Grand VIP Unveiling: Sovereign Golf Estates Phase II',
      location: 'Grand Ballroom, The Sovereign Estates Clubhouse, Golf Course Extension',
      description: 'An exclusive private preview of our ultra-luxury 5 BHK Golf Villas featuring private infinity pools, smart home automation, and 18-hole view terraces.'
    },
    {
      id: 'event-2',
      date: 'OCTOBER 05, 2026',
      time: '11:00 AM - 03:00 PM',
      title: 'Commercial Real Estate & Investment Summit 2026',
      location: 'Auditorium, Aura Commercial Towers, Financial District',
      description: 'Keynote addresses from leading institutional investors, urban planners, and tax strategists on high-yield Grade-A office spaces and retail hubs.'
    },
    {
      id: 'event-3',
      date: 'NOVEMBER 12, 2026',
      time: '09:00 AM - 04:00 PM',
      title: 'United Annual Sustainability & Zero-Carbon Architecture Expo',
      location: 'Township Central Park Amphitheatre, United Integrated Township',
      description: 'Showcasing solar glass facades, rainwater harvesting innovations, and native botanical landscaping integrated across our upcoming developments.'
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#FAF8F5] border-t border-[#E8DCC8]/60">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-10">
          <span className="font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-[#C6A15B]">
            MARK YOUR CALENDAR
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1C1C1A]">
            Upcoming <span className="italic text-[#C6A15B]">Events & Expos</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-[#66625A] font-light leading-relaxed">
            Join us at exclusive project launches, investor summits, and corporate milestone gatherings.
          </p>
        </div>

        {/* List Layout with Thin Gold Divider Lines */}
        <div className="space-y-0 border-t border-b border-[#E8DCC8]">
          {upcomingEvents.map((evt, idx) => (
            <div
              key={evt.id}
              className="py-6 sm:py-7 border-b border-[#E8DCC8] last:border-b-0 group transition-colors hover:bg-white/70 px-4 sm:px-6 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                
                {/* Date Column */}
                <div className="md:col-span-4 lg:col-span-3 space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E8DCC8] text-[#C6A15B] font-montserrat text-[11px] font-bold tracking-wider shadow-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{evt.date}</span>
                  </div>
                  <p className="font-montserrat text-xs text-[#66625A] font-light flex items-center gap-1.5 pt-0.5">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>{evt.time}</span>
                  </p>
                </div>

                {/* Event Details Column */}
                <div className="md:col-span-8 lg:col-span-9 space-y-2.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A] group-hover:text-[#C6A15B] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <div className="flex items-start gap-1.5 font-montserrat text-xs text-[#C6A15B] font-medium">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{evt.location}</span>
                  </div>

                  <p className="font-montserrat text-xs sm:text-sm text-[#66625A] font-light leading-relaxed max-w-4xl">
                    {evt.description}
                  </p>

                  <div className="pt-1">
                    <button
                      onClick={() => onRegisterEvent(evt)}
                      className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-wider text-[#1C1C1A] hover:text-[#C6A15B] transition-colors cursor-pointer"
                    >
                      <span>Reserve Invitation</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
