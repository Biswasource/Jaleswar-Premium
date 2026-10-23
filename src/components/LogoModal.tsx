import React, { useState } from 'react';
import { X, Download, Sparkles } from 'lucide-react';
import logoImg from '../assets/image.png';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoModal: React.FC<LogoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'jaleswar' | 'jj'>('jaleswar');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 font-sans" onClick={onClose}>
      <div
        className="bg-[#101216] text-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-800 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-[#f75d34]" />
            <div>
              <h3 className="font-black text-lg text-white">Ultra-HD Official Brand Logo</h3>
              <p className="text-xs text-gray-400">Jaleswar Premium Pre-Owned Car Showroom</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white rounded-full bg-white/5 cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Tab selection */}
        <div className="p-6">
          <div className="flex gap-2 p-1 bg-black rounded-xl mb-6 border border-neutral-800">
            <button
              onClick={() => setActiveTab('jaleswar')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'jaleswar'
                  ? 'bg-[#f75d34] text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Jaleswar Premium (Official 2024 Logo)
            </button>
            <button
              onClick={() => setActiveTab('jj')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'jj'
                  ? 'bg-[#f75d34] text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Alternative Vector Silhouette
            </button>
          </div>

          {/* Main HD Display Showcase */}
          <div className="relative rounded-2xl overflow-hidden bg-black border border-neutral-800 p-6 flex flex-col items-center justify-center min-h-[280px] shadow-inner">
            <img
              src={activeTab === 'jaleswar' ? logoImg : '/jj-motors-hd-logo.jpg'}
              alt="Brand Logo"
              className="max-h-60 max-w-full object-contain rounded-xl drop-shadow-2xl"
            />
            <span className="text-[11px] text-gray-400 font-mono mt-4 font-semibold">
              {activeTab === 'jaleswar' ? 'JALESWAR PREMIUM • PRE-OWNED CAR SHOWROOM • 2024' : 'Precision 8K Render • Aerodynamic Roofline Silhouette'}
            </span>
          </div>

          {/* Action Download Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-xs text-gray-400">
              High-resolution asset ready for print, web, and showroom signage.
            </span>
            <div className="flex gap-2 w-full sm:w-auto">
              <a
                href={activeTab === 'jaleswar' ? '/jaleswar-premium-logo.png' : '/jj-motors-hd-logo.jpg'}
                download={activeTab === 'jaleswar' ? 'jaleswar-premium-logo.png' : 'brand-logo.jpg'}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Download size={15} />
                <span>Download Ultra-HD Image</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
