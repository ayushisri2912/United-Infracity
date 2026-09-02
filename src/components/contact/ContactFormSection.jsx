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
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setErrors({});
    }
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
                setErrors({});
              }}
              className="px-6 py-2.5 bg-[#1C1C1A] text-white font-montserrat text-xs uppercase font-bold tracking-wider rounded-xl hover:bg-[#C6A15B] transition-colors cursor-pointer"
            >
              Send Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            
            {/* Full Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                  Full Name <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vikramaditya Sharma"
                  value={formData.fullName}
                  onChange={handleFullNameChange}
                  onBlur={() => handleBlur('fullName')}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border ${
                    errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#C6A15B]'
                  } focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-[11px] font-montserrat mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                  Phone Number <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onBlur={() => handleBlur('phone')}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border ${
                    errors.phone ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#C6A15B]'
                  } focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors`}
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
                  Email Address <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="patron@domain.com"
                  value={formData.email}
                  onChange={handleEmailChange}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#C6A15B]'
                  } focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors`}
                />
                {errors.email && (
                  <p className="text-red-500 text-[11px] font-montserrat mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                  Subject <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Site Visit / Project Enquiry"
                  value={formData.subject}
                  onChange={handleSubjectChange}
                  onBlur={() => handleBlur('subject')}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border ${
                    errors.subject ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#C6A15B]'
                  } focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-[11px] font-montserrat mt-1">{errors.subject}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-montserrat">
                Message <span className="text-[#C6A15B]">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Share your requirements or questions with us..."
                value={formData.message}
                onChange={handleMessageChange}
                onBlur={() => handleBlur('message')}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border ${
                  errors.message ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#C6A15B]'
                } focus:bg-white outline-none font-montserrat text-xs sm:text-sm text-stone-900 transition-colors resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-[11px] font-montserrat mt-1">{errors.message}</p>
              )}
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
