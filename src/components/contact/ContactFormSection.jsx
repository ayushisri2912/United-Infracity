import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      
      <div className="space-y-2">
        <h2 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#1C1C1A]">
          Send Us A <span className="italic text-[#C6A15B]">Message</span>
        </h2>
        <p className="font-montserrat text-sm sm:text-base text-stone-600 font-light">
          Submit your query below and our team will get in touch with you shortly.
        </p>
      </div>

      {/* Clean White Form Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/25 shadow-sm hover:shadow-md transition-shadow duration-300">
        
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#C6A15B]/20 text-[#C6A15B] border border-[#C6A15B]/40 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-cormorant font-bold text-2xl text-[#1C1C1A]">
              Thank You for Reaching Out!
            </h3>
            <p className="font-montserrat text-xs sm:text-sm text-stone-600 font-light max-w-sm mx-auto leading-relaxed">
              Your message has been successfully received by United Infracity. A luxury property consultant will contact you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', phone: '', email: '', subject: '', message: '' });
              }}
              className="px-6 py-2.5 bg-[#1C1C1A] text-white font-montserrat text-xs uppercase font-bold tracking-wider rounded-xl hover:bg-[#C6A15B] transition-colors cursor-pointer"
            >
              Send Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                  Full Name <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-stone-300 focus:border-[#C6A15B] focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                  Phone Number <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-stone-300 focus:border-[#C6A15B] focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors"
                />
              </div>
            </div>

            {/* Email Address & Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                  Email Address <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="patron@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-stone-300 focus:border-[#C6A15B] focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                  Subject <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Site Visit / Project Enquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-stone-300 focus:border-[#C6A15B] focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                Message <span className="text-[#C6A15B]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share your requirements or questions with us..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-stone-300 focus:border-[#C6A15B] focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors resize-none"
              />
            </div>

            {/* Primary Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#C6A15B] hover:bg-[#A88746] text-stone-950 font-montserrat font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
