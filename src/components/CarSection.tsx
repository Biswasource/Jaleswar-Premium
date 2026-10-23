import React, { useRef, useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Car } from '../types';
import { CarCard } from './CarCard';

interface CarSectionProps {
  title: string;
  tabs?: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  cars: Car[];
  favorites: string[];
  onToggleFavorite: (car: Car) => void;
  onOpenOffer: (car: Car) => void;
  onAlertMe?: (car: Car) => void;
  viewAllLink?: {
    text: string;
    onClick: () => void;
  };
}

export const CarSection: React.FC<CarSectionProps> = ({
  title,
  tabs,
  activeTab,
  onTabChange,
  cars,
  favorites,
  onToggleFavorite,
  onOpenOffer,
  onAlertMe,
  viewAllLink
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs relative">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
          <h2 className="text-xl font-black text-gray-900 tracking-tight">
            {title}
          </h2>

          {/* Optional Category Tabs */}
          {tabs && tabs.length > 0 && onTabChange && (
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`text-xs font-bolder whitespace-nowrap pb-1 relative transition-colors ${isActive ? 'text-[#f75d34]' : 'text-gray-500 hover:text-gray-900'
                      }`}
                  >
                    <span>{tab}</span>
                    {isActive && (
                      <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#f75d34]" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative mt-5 group/carousel">
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
          >
            {cars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                isFavorite={favorites.includes(car.id)}
                onToggleFavorite={onToggleFavorite}
                onOpenOffer={onOpenOffer}
                onAlertMe={onAlertMe}
              />
            ))}
          </div>

          {/* Carousel Next Navigation Button (as seen in screenshots on the right edge) */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 z-20 w-10 h-10 bg-white rounded-full border border-gray-200 shadow-float flex items-center justify-center text-gray-700 hover:text-[#f75d34] hover:scale-105 active:scale-95 transition-all focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* View All Footer Link */}
        {viewAllLink && (
          <div className="mt-4 pt-2 border-t border-gray-50">
            <button
              onClick={viewAllLink.onClick}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f75d34] hover:text-[#e24c23] transition-colors group"
            >
              <span>{viewAllLink.text}</span>
              <div className="w-4 h-4 rounded-full bg-[#f75d34] text-white flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
                ›
              </div>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
