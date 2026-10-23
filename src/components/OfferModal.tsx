import React, { useState } from 'react';
import { X, Sparkles, Gift, CheckCircle, ShieldCheck, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Car } from '../types';

interface OfferModalProps {
  car: Car | null;
  carNameFallback?: string;
  onClose: () => void;
  selectedCity: string;
}

export const OfferModal: React.FC<OfferModalProps> = ({
  car,
  carNameFallback,
  onClose,
  selectedCity
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const targetName = car ? car.name : carNameFallback || 'Festive Car Offer';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCoupon = 'JJ-OCT-' + Math.floor(100000 + Math.random() * 900000);
    setCouponCode(generatedCoupon);
    setIsSubmitted(true);

    // Fire joyful confetti animation
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#e84420] via-[#f75d34] to-[#ff7a45] text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <Gift size={18} />
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
              Exclusive October Offer
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black">{targetName}</h3>
          <p className="text-xs text-orange-100 mt-1">
            Claim verified dealer discounts, zero down-payment options & instant exchange bonus in {selectedCity}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <>
              {/* Quick Perks Pill */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-orange-50 border border-orange-200/60 rounded-xl p-3 flex items-center gap-2">
                  <Tag size={16} className="text-[#f75d34]" />
                  <div>
                    <span className="text-[10px] text-gray-500 font-medium block">Cash Discount</span>
                    <strong className="text-xs text-gray-900">Up to ₹65,000*</strong>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200/60 rounded-xl p-3 flex items-center gap-2">
                  <Sparkles size={16} className="text-emerald-600" />
                  <div>
                    <span className="text-[10px] text-gray-500 font-medium block">Exchange Bonus</span>
                    <strong className="text-xs text-gray-900">Up to ₹30,000*</strong>
                  </div>
                </div>
              </div>

              {/* Offer Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#f75d34] focus:ring-1 focus:ring-[#f75d34]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number (For WhatsApp Voucher)</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-xs font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9876543210"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-r-xl text-xs sm:text-sm focus:outline-none focus:border-[#f75d34] focus:ring-1 focus:ring-[#f75d34]"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 text-[11px] text-gray-500">
                  <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Your details are 100% confidential. No spam calls guarantee by Jaleswar Premium.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-sm tracking-wide shadow-md shadow-orange-500/30 transition-all"
                >
                  Unlock Best October Offer Now
                </button>
              </form>
            </>
          ) : (
            /* Success confirmation screen */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle size={36} />
              </div>

              <div>
                <h4 className="text-xl font-black text-gray-900">Festive Voucher Claimed!</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Congratulations <strong>{name}</strong>! Your exclusive festive booking token for <strong>{targetName}</strong> is generated.
                </p>
              </div>

              <div className="bg-orange-50 border-2 border-dashed border-[#f75d34] rounded-2xl p-4">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                  Your Voucher Code
                </span>
                <span className="text-2xl font-black text-[#f75d34] tracking-widest font-mono block mt-1">
                  {couponCode}
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold mt-1 block">
                  ✓ Verified for all {selectedCity} dealerships
                </span>
              </div>

              <p className="text-xs text-gray-500">
                A copy with free accessories list has been sent to <strong>+91 {phone}</strong>.
              </p>

              <button
                onClick={onClose}
                className="w-full py-2.5 bg-gray-900 hover:bg-black text-white rounded-xl font-bold text-xs transition-colors"
              >
                Close & Continue Browsing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
