import React, { useState } from 'react';
import { X, Download, Sparkles, Check, Eye } from 'lucide-react';
import { HDLogo } from './HDLogo';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoModal: React.FC<LogoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'jj' | 'priyanka'>('jj');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-[#121418] text-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-800 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-[#f75d34]" />
            <div>
              <h3 className="font-black text-lg text-white">Ultra-HD Official Brand Logo</h3>
              <p className="text-xs text-gray-400">Crystal clear vector silhouette with chrome & gold metallic finish</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white rounded-full bg-white/5">
            <X size={20} />
          </button>
        </div>

        {/* Tab selection */}
        <div className="p-6">
          <div className="flex gap-2 p-1 bg-gray-900 rounded-xl mb-6">
            <button
              onClick={() => setActiveTab('jj')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'jj'
                  ? 'bg-[#f75d34] text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              JJ MOTORS (HD 8K)
            </button>
            <button
              onClick={() => setActiveTab('priyanka')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'priyanka'
                  ? 'bg-[#f75d34] text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Priyanka MOTORS (HD Original)
            </button>
          </div>

          {/* Main HD Display Showcase */}
          <div className="relative rounded-2xl overflow-hidden bg-black border border-gray-800 p-6 flex flex-col items-center justify-center min-h-[260px] shadow-inner">
            <img
              src={activeTab === 'jj' ? '/jj-motors-hd-logo.jpg' : '/priyanka-motors-hd-logo.jpg'}
              alt={activeTab === 'jj' ? 'JJ MOTORS HD Logo' : 'Priyanka MOTORS HD Logo'}
              className="max-h-56 max-w-full object-contain rounded-xl drop-shadow-2xl"
            />
            <span className="text-[10px] text-gray-500 font-mono mt-3">
              Precision 8K Render • Aerodynamic Roofline Silhouette
            </span>
          </div>

          {/* Vector Scalable Preview on light background */}
          <div className="mt-4 p-4 rounded-2xl bg-white flex items-center justify-center">
            <HDLogo variant={activeTab} size="md" theme="light" />
          </div>

          {/* Action Download Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-xs text-gray-400">
              High-resolution asset ready for print, web, and dealership boards.
            </span>
            <div className="flex gap-2 w-full sm:w-auto">
              <a
                href={activeTab === 'jj' ? '/jj-motors-hd-logo.jpg' : '/priyanka-motors-hd-logo.jpg'}
                download={activeTab === 'jj' ? 'jj-motors-hd-logo.jpg' : 'priyanka-motors-hd-logo.jpg'}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
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
