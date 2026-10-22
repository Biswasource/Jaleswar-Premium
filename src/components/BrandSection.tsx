import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { POPULAR_BRANDS } from '../data/carsData';

interface BrandSectionProps {
  onSelectBrand: (brandName: string) => void;
}

export const BrandSection: React.FC<BrandSectionProps> = ({ onSelectBrand }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs relative">
        <h2 className="text-xl font-black text-gray-900 tracking-tight mb-5">
          Popular brands
        </h2>

        <div className="relative group/brands">
          <div
            ref={containerRef}
            className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {POPULAR_BRANDS.map((brand) => (
              <button
                key={brand.name}
                onClick={() => onSelectBrand(brand.name)}
                className="flex-shrink-0 w-36 sm:w-40 h-28 border border-gray-200 hover:border-[#f75d34] rounded-xl flex flex-col items-center justify-center p-3 hover:shadow-md transition-all group bg-white"
              >
                <div className="h-12 w-20 flex items-center justify-center mb-2">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold text-gray-700 group-hover:text-[#f75d34] transition-colors">
                  {brand.name}
                </span>
              </button>
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
            onClick={() => onSelectBrand('All')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f75d34] hover:text-[#e24c23] transition-colors group"
          >
            <span>View All Brands</span>
            <div className="w-4 h-4 rounded-full bg-[#f75d34] text-white flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
              ›
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
