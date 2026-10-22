import React, { useState } from 'react';
import { X, Bell, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { Car } from '../types';

interface AlertModalProps {
  car: Car | null;
  onClose: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({ car, onClose }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!car) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-100 text-[#f75d34] flex items-center justify-center">
              <Bell size={18} />
            </div>
            <div>
              <h3 className="font-black text-sm text-gray-900">Launch Notification</h3>
              <span className="text-[10px] text-gray-500">{car.badge?.text || 'Upcoming Release'}</span>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-orange-50/50 rounded-xl border border-orange-100">
                <img src={car.image} alt={car.name} className="w-16 h-12 object-contain" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{car.name}</h4>
                  <p className="text-xs text-gray-600 font-semibold">{car.priceRange} (Expected)</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Mobile Number or Email
                </label>
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="Enter phone or email for WhatsApp/SMS alert"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#f75d34] focus:ring-1 focus:ring-[#f75d34]"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0" />
                <span>You will receive official pricing, test drive dates & early bird invites.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-xs tracking-wide shadow-md shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Bell size={14} />
                <span>Notify Me on Launch Day</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-black text-lg text-gray-900">Alert Set Successfully!</h4>
              <p className="text-xs text-gray-600">
                We will ping <strong>{emailOrPhone}</strong> the moment bookings open for <strong>{car.name}</strong>.
              </p>
              <button
                onClick={onClose}
                className="w-full py-2 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-black transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
