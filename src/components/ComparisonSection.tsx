import React, { useRef, useState } from 'react';
import { ChevronRight, X, Check, Zap } from 'lucide-react';
import { COMPARISONS } from '../data/carsData';
import { Comparison } from '../types';

export const ComparisonSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [comparingPair, setComparingPair] = useState<Comparison | null>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs relative">
        <h2 className="text-xl font-black text-gray-900 tracking-tight mb-5">
          Compare to buy the right car
        </h2>

        <div className="relative group/comparisons">
          <div
            ref={containerRef}
            className="flex items-stretch gap-5 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {COMPARISONS.map((comp) => (
              <div
                key={comp.id}
                className="flex-shrink-0 w-[300px] sm:w-[340px] border border-gray-200 rounded-2xl p-4 bg-white hover:shadow-card transition-all flex flex-col justify-between font-sans"
              >
                {/* Images & VS Badge - Increased Height & Crisp Styling */}
                <div className="relative flex items-center justify-between gap-3 h-32 sm:h-36 bg-[#f8f9fa] rounded-xl p-3 mb-3 border border-gray-100">
                  {/* Car 1 */}
                  <div className="w-1/2 flex flex-col items-center justify-center h-full">
                    <img
                      src={comp.car1.image}
                      alt={comp.car1.name}
                      className="max-h-24 max-w-full object-contain drop-shadow hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* VS circle badge in middle */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center font-black font-mono text-[10px] text-gray-800 z-10">
                    VS
                  </div>

                  {/* Car 2 */}
                  <div className="w-1/2 flex flex-col items-center justify-center h-full">
                    <img
                      src={comp.car2.image}
                      alt={comp.car2.name}
                      className="max-h-24 max-w-full object-contain drop-shadow hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Details split */}
                <div className="grid grid-cols-2 gap-2 text-left mb-4">
                  <div className="border-r border-gray-100 pr-2">
                    <span className="text-[11px] font-semibold text-gray-400 block truncate uppercase tracking-wider">{comp.car1.brand}</span>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-gray-900 truncate mt-0.5">{comp.car1.name}</h4>
                    <p className="font-mono text-xs sm:text-sm font-black text-gray-900 mt-1">{comp.car1.price}</p>
                  </div>
                  <div className="pl-2">
                    <span className="text-[11px] font-semibold text-gray-400 block truncate uppercase tracking-wider">{comp.car2.brand}</span>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-gray-900 truncate mt-0.5">{comp.car2.name}</h4>
                    <p className="font-mono text-xs sm:text-sm font-black text-gray-900 mt-1">{comp.car2.price}</p>
                  </div>
                </div>

                {/* Compare Action Button */}
                <button
                  onClick={() => setComparingPair(comp)}
                  className="w-full py-2.5 border border-[#f75d34] text-[#f75d34] hover:bg-[#f75d34] hover:text-white rounded-xl text-xs font-sans font-bold transition-all shadow-xs text-center cursor-pointer flex items-center justify-center gap-1.5 group/cmp"
                >
                  <span>{comp.buttonText}</span>
                  <ChevronRight size={13} className="group-hover/cmp:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 z-20 w-10 h-10 bg-white rounded-full border border-gray-200 shadow-float flex items-center justify-center text-gray-700 hover:text-[#f75d34] hover:scale-105 active:scale-95 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-50">
          <button
            onClick={() => setComparingPair(COMPARISONS[0])}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f75d34] hover:text-[#e24c23] transition-colors group"
          >
            <span>View All Car Comparisons</span>
            <div className="w-4 h-4 rounded-full bg-[#f75d34] text-white flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
              ›
            </div>
          </button>
        </div>
      </div>

      {/* Comparison Detailed Modal */}
      {comparingPair && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setComparingPair(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-[#f75d34]" />
                <h3 className="font-black text-lg text-gray-900">Side-by-Side Car Comparison</h3>
              </div>
              <button onClick={() => setComparingPair(null)} className="p-1 text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {/* Car 1 */}
              <div className="p-4 bg-gray-50 rounded-xl flex flex-col items-center text-center">
                <img src={comparingPair.car1.image} alt={comparingPair.car1.name} className="h-32 object-contain mb-3 drop-shadow" />
                <h4 className="font-sans font-black text-base text-gray-900">{comparingPair.car1.name}</h4>
                <p className="font-mono text-sm font-bold text-[#f75d34] mt-1">{comparingPair.car1.price}</p>
                <div className="w-full mt-4 space-y-2 text-xs text-left">
                  <div className="flex justify-between py-1 border-b border-gray-200"><span>Engine:</span><strong className="font-mono text-gray-800">2.0L Turbo / 2.2L mHawk</strong></div>
                  <div className="flex justify-between py-1 border-b border-gray-200"><span>Mileage:</span><strong className="font-mono text-gray-800">15.2 kmpl</strong></div>
                  <div className="flex justify-between py-1 border-b border-gray-200"><span>Airbags:</span><strong className="font-mono text-gray-800">6 (Standard)</strong></div>
                  <div className="flex justify-between py-1"><span>Touchscreen:</span><strong className="font-mono text-gray-800">10.25 inch HD</strong></div>
                </div>
              </div>

              {/* Car 2 */}
              <div className="p-4 bg-gray-50 rounded-xl flex flex-col items-center text-center">
                <img src={comparingPair.car2.image} alt={comparingPair.car2.name} className="h-32 object-contain mb-3 drop-shadow" />
                <h4 className="font-sans font-black text-base text-gray-900">{comparingPair.car2.name}</h4>
                <p className="font-mono text-sm font-bold text-[#f75d34] mt-1">{comparingPair.car2.price}</p>
                <div className="w-full mt-4 space-y-2 text-xs text-left">
                  <div className="flex justify-between py-1 border-b border-gray-200"><span>Engine:</span><strong className="font-mono text-gray-800">1.2L DualJet / Turbo</strong></div>
                  <div className="flex justify-between py-1 border-b border-gray-200"><span>Mileage:</span><strong className="font-mono text-gray-800">20.4 kmpl</strong></div>
                  <div className="flex justify-between py-1 border-b border-gray-200"><span>Airbags:</span><strong className="font-mono text-gray-800">6 Airbags</strong></div>
                  <div className="flex justify-between py-1"><span>Touchscreen:</span><strong className="font-mono text-gray-800">9.0 inch SmartPlay</strong></div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setComparingPair(null)} className="px-5 py-2.5 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50">
                Close
              </button>
              <button onClick={() => alert(`Detailed specs PDF sent for ${comparingPair.car1.name} vs ${comparingPair.car2.name}`)} className="px-5 py-2.5 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl text-xs font-bold shadow-sm">
                Download Comparison Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
