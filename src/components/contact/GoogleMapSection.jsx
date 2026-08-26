import React from 'react';

export default function GoogleMapSection() {
  return (
    <section className="py-12 bg-[#FAF8F5]">
      <div className="max-w-[1550px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        <div className="w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-md border border-[#D4AF37]/30 bg-stone-200">
          <iframe
            title="United Infracity Corporate Headquarters Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.253018269784!2d77.36214055!3d28.6040841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56f5c555555%3A0x1234567890abcdef!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter contrast-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
