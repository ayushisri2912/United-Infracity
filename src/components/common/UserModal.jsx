import React, { useState } from 'react';
import { X, User, CheckCircle2 } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function UserModal() {
  const { isUserOpen, closeUser, openEnquire } = useModal();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  if (!isUserOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#FDFBF7] max-w-md w-full rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 relative">
        
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 relative">
          <button
            onClick={closeUser}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-stone-800 text-stone-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <User className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              UNITED INFRACITY PATRON PORTAL
            </span>
          </div>

          <h3 className="font-serif text-2xl font-bold">
            {isLoggedIn ? 'Welcome Back!' : 'Buyer & Resident Login'}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">
          {isLoggedIn ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-xl text-stone-900">
                Account Active ({userEmail || 'patron@united.com'})
              </h4>
              <p className="text-xs text-stone-600">
                View your saved project bookmarks, site visit schedules, and exclusive pre-launch booking invitations.
              </p>
              
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    closeUser();
                    openEnquire();
                  }}
                  className="w-full py-3 bg-[#D4AF37] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
                >
                  Book Private Site Visit
                </button>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-xl cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Registered Email / Patron ID
                </label>
                <input
                  type="email"
                  required
                  placeholder="patron@domain.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#D4AF37] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#D4AF37] outline-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer"
              >
                Access Portal
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
