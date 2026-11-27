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

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    let errorMsg = '';
    if (name === 'fullName') {
      if (!value.trim()) {
        errorMsg = 'Full Name is required.';
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        errorMsg = 'Full Name can only contain letters and spaces.';
      }
    } else if (name === 'phone') {
      if (!value.trim()) {
        errorMsg = 'Phone Number is required.';
      } else if (!/^\d{10}$/.test(value)) {
        errorMsg = 'Phone Number must be exactly 10 numeric digits.';
      }
    } else if (name === 'email') {
      if (!value.trim()) {
        errorMsg = 'Email Address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMsg = 'Please enter a valid email format (e.g. user@example.com).';
      }
    } else if (name === 'subject') {
      if (!value.trim()) {
        errorMsg = 'Subject is required.';
      }
    } else if (name === 'message') {
      if (!value.trim()) {
        errorMsg = 'Message is required.';
      }
    }
    return errorMsg;
  };

  const validateForm = () => {
    const newErrors = {};
    const fullNameErr = validateField('fullName', formData.fullName);
    if (fullNameErr) newErrors.fullName = fullNameErr;

    const phoneErr = validateField('phone', formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const subjectErr = validateField('subject', formData.subject);
    if (subjectErr) newErrors.subject = subjectErr;

    const messageErr = validateField('message', formData.message);
    if (messageErr) newErrors.message = messageErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData((prev) => ({ ...prev, fullName: value }));
    if (errors.fullName) {
      setErrors((prev) => ({ ...prev, fullName: validateField('fullName', value) }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: value }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: validateField('phone', value) }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, email: value }));
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: validateField('email', value) }));
    }
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, subject: value }));
    if (errors.subject) {
      setErrors((prev) => ({ ...prev, subject: validateField('subject', value) }));
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, message: value }));
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: validateField('message', value) }));
    }
  };

  const handleBlur = (field) => {
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="h-full flex flex-col space-y-6">
      
      {/* Header with strictly matched height & baseline */}
      <div className="min-h-[72px] sm:min-h-[80px] flex flex-col justify-end space-y-1.5">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] font-normal leading-tight">
          Send Us A <span className="italic text-[#C49D55]">Message</span>
        </h2>
        <p className="font-montserrat text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
          Submit your enquiry below and our executive team will get in touch with you shortly to assist.
        </p>
      </div>

      {/* Form Card - Equal Height & Architectural Accents */}
      <div className="flex-1 flex flex-col justify-between bg-white p-6 sm:p-8 border border-[#E5E5E5] hover:border-[#C49D55]/60 shadow-sm hover:shadow-xl transition-all duration-500 relative group">
        
        {/* Subtle Top Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49D55]/40 to-transparent group-hover:via-[#C49D55] transition-all duration-500" />
        
        {/* Architectural Corner Brackets */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C49D55]/40 group-hover:border-[#C49D55] transition-colors" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C49D55]/40 group-hover:border-[#C49D55] transition-colors" />

        {submitted ? (
          <div className="py-12 my-auto text-center space-y-4">
            <div className="w-16 h-16 bg-[#C49D55]/10 text-[#C49D55] border border-[#C49D55]/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-normal text-[#141414]">
                Thank You for Contacting Us
              </h3>
              <p className="font-montserrat text-xs sm:text-sm text-stone-600 font-light max-w-md mx-auto leading-relaxed">
                Your message has been received. Our senior relationship manager will contact you within 24 business hours.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', phone: '', email: '', subject: '', message: '' });
                setErrors({});
              }}
              className="px-6 py-2.5 bg-[#141414] text-[#C49D55] border border-[#C49D55] font-montserrat text-xs uppercase font-bold tracking-wider hover:bg-[#C49D55] hover:text-white transition-colors cursor-pointer"
            >
              Send Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                    Full Name <span className="text-[#C49D55]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vikramaditya Sharma"
                    value={formData.fullName}
                    onChange={handleFullNameChange}
                    onBlur={() => handleBlur('fullName')}
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border ${
                      errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#E5E5E5] focus:border-[#C49D55]'
                    } focus:bg-white focus:ring-1 focus:ring-[#C49D55]/30 outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-all`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-[11px] font-montserrat mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                    Phone Number <span className="text-[#C49D55]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur('phone')}
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#E5E5E5] focus:border-[#C49D55]'
                    } focus:bg-white focus:ring-1 focus:ring-[#C49D55]/30 outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-all`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] font-montserrat mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email Address & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                    Email Address <span className="text-[#C49D55]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="patron@domain.com"
                    value={formData.email}
                    onChange={handleEmailChange}
                    onBlur={() => handleBlur('email')}
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#E5E5E5] focus:border-[#C49D55]'
                    } focus:bg-white focus:ring-1 focus:ring-[#C49D55]/30 outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[11px] font-montserrat mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                    Subject <span className="text-[#C49D55]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Site Visit / Project Enquiry"
                    value={formData.subject}
                    onChange={handleSubjectChange}
                    onBlur={() => handleBlur('subject')}
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-[#E5E5E5] focus:border-[#C49D55]'
                    } focus:bg-white focus:ring-1 focus:ring-[#C49D55]/30 outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-[11px] font-montserrat mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                  Message <span className="text-[#C49D55]">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Share your requirements or questions with us..."
                  value={formData.message}
                  onChange={handleMessageChange}
                  onBlur={() => handleBlur('message')}
                  className={`w-full px-4 py-3 bg-[#FAF8F5] border ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#E5E5E5] focus:border-[#C49D55]'
                  } focus:bg-white focus:ring-1 focus:ring-[#C49D55]/30 outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-all resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-[11px] font-montserrat mt-1">{errors.message}</p>
                )}
              </div>
            </div>

            {/* Primary Submit Button with Shimmer Sweep Animation */}
            <div className="pt-3 mt-auto">
              <button
                type="submit"
                className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-3 w-full py-4 bg-[#C49D55] hover:bg-[#B38E46] text-white font-montserrat font-bold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-[0.99]"
              >
                {/* Shimmer Sweep Animation on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span className="relative z-10">Send Message</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
