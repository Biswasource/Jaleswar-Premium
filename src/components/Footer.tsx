import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Award, ThumbsUp, Send } from 'lucide-react';
import { HDLogo } from './HDLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e2229] text-gray-300 font-sans mt-16 border-t-4 border-[#f75d34]">
      
      {/* Trust Badges Bar */}
      <div className="bg-[#242831] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-[#f75d34]/30 flex items-center justify-center text-[#f75d34]">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">India's #1 Car Portal</h4>
                <p className="text-xs text-gray-400">Trusted by over 4 Crore car buyers every month</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-[#f75d34]/30 flex items-center justify-center text-[#f75d34]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Verified Dealerships</h4>
                <p className="text-xs text-gray-400">100% genuine pricing and authenticated offers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-[#f75d34]/30 flex items-center justify-center text-[#f75d34]">
                <ThumbsUp size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Unbiased Expert Reviews</h4>
                <p className="text-xs text-gray-400">In-depth road tests and real-world fuel economy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
            {/* Brand Info */}
            <div className="col-span-2">
              <div className="mb-3">
                <HDLogo size="lg" theme="dark" />
              </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm mb-4">
              Jaleswar Premium is India's premier pre-owned car showroom, helping car buyers research, compare, test drive, and secure certified vehicles with complete peace of mind.
            </p>

            <div className="space-y-1.5 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#f75d34]" />
                <span className="font-mono">Customer Care: 1800-200-8899 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#f75d34]" />
                <span>support@jaleswarpremium.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#f75d34]" />
                <span>Jaleswar Premium Hub, Jaleswar / Cuttack, India</span>
              </div>
            </div>
          </div>

          {/* Column: Popular Cars */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#f75d34] pl-2">
              Popular Cars
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {['Mahindra Thar', 'Hyundai Creta', 'Tata Sierra', 'Kia Seltos', 'Maruti Brezza', 'Renault Duster'].map((car) => (
                <li key={car}>
                  <a href="#" className="hover:text-[#f75d34] transition-colors">{car}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Car Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#f75d34] pl-2">
              Car Research
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {['New Car Launches', 'Electric Cars', 'Upcoming 2026 Cars', 'Used Cars by City', 'Car Loan EMI Calculator', 'Compare Cars'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#f75d34] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Newsletter & App */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#f75d34] pl-2">
              Get Car News
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Subscribe for weekly price drops and secret festive discounts.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to JJ Motors newsletters!'); }} className="flex">
              <input
                type="email"
                placeholder="Enter email"
                required
                className="bg-gray-800 border border-gray-700 text-xs px-3 py-2 rounded-l-lg focus:outline-none focus:border-[#f75d34] text-white flex-1"
              />
              <button
                type="submit"
                className="bg-[#f75d34] hover:bg-[#e24c23] text-white px-3 py-2 rounded-r-lg"
              >
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Jaleswar Premium Private Limited. All Rights Reserved. Prices indicated are Ex-Showroom and subject to variant / state taxes.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300">Disclaimers</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
