import React, { useState } from 'react';
import { X, Lock, Phone, UserCheck, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setTimeout(() => {
      onClose();
      setIsLoggedIn(false);
      setOtpSent(false);
      setPhoneNumber('');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f75d34] flex items-center justify-center text-white font-black text-xs">
              JP
            </div>
            <h3 className="font-black text-base text-gray-900">
              {isLoggedIn ? 'Welcome to Jaleswar Premium' : otpSent ? 'Verify OTP' : 'Login / Register'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {isLoggedIn ? (
            <div className="text-center py-4 space-y-2">
              <UserCheck size={40} className="text-emerald-500 mx-auto" />
              <h4 className="font-bold text-base text-gray-900">Logged In Successfully!</h4>
              <p className="text-xs text-gray-500">Redirecting to your Jaleswar Premium account...</p>
            </div>
          ) : !otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <p className="text-xs text-gray-600">
                Enter your mobile number to view saved cars, track test drive bookings, and get personalised deals.
              </p>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-xs font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="9876543210"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-r-xl text-xs sm:text-sm focus:outline-none focus:border-[#f75d34] focus:ring-1 focus:ring-[#f75d34]"
                    autoFocus
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-xs tracking-wide shadow-md transition-all"
              >
                Send One Time Password (OTP)
              </button>

              <div className="flex items-center gap-2 pt-2 text-[10px] text-gray-400">
                <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0" />
                <span>By continuing, you agree to Jaleswar Premium Terms & Privacy Policy</span>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <p className="text-xs text-gray-600">
                Enter the 4-digit code sent to <strong>+91 {phoneNumber}</strong>
              </p>

              <div>
                <input
                  type="text"
                  maxLength={4}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="• • • •"
                  className="w-full text-center tracking-[1em] text-lg font-bold py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-[#f75d34]"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-xs tracking-wide shadow-md transition-all"
              >
                Verify & Continue
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="text-xs text-[#f75d34] font-semibold hover:underline"
                >
                  Edit phone number
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
