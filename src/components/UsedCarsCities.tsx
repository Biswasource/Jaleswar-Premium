import React from 'react';
import { CITIES } from '../data/carsData';
import { City } from '../types';

interface UsedCarsCitiesProps {
  selectedCity: string;
  onSelectCity: (cityName: string) => void;
}

export const UsedCarsCities: React.FC<UsedCarsCitiesProps> = ({
  selectedCity,
  onSelectCity
}) => {
  // SVG Monument Illustrations for each city
  const renderCityIcon = (iconType: string) => {
    switch (iconType) {
      case 'charminar':
        return (
          <svg className="w-10 h-10 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 21V7l2-2 2 2v14M16 21V7l2-2 2 2v14M8 12h8M8 16h8M10 21v-3a2 2 0 0 1 4 0v3" />
          </svg>
        );
      case 'howrah':
        return (
          <svg className="w-10 h-10 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 18h20M5 18l4-11 3 11 3-11 4 11M3 18l6-5M21 18l-6-5" />
          </svg>
        );
      case 'hawa':
        return (
          <svg className="w-10 h-10 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3l7 7v11H5V10l7-7zM9 13h1v2H9v-2zm5 0h1v2h-1v-2zm-5 4h1v2H9v-2zm5 0h1v2h-1v-2z" />
          </svg>
        );
      case 'palace':
        return (
          <svg className="w-10 h-10 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M5 21V9l7-5 7 5v12M9 14h6v7H9v-7z" />
          </svg>
        );
      case 'towers':
        return (
          <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v17M14 21V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12" />
          </svg>
        );
      default:
        // Gateway of India / Monument line art
        return (
          <svg className="w-10 h-10 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 21V8a1 1 0 0 1 1-1h3v14M16 21V7h3a1 1 0 0 1 1 1v13M8 10h8M8 21v-7a4 4 0 0 1 8 0v7" />
          </svg>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs">
        <h2 className="text-xl font-black text-gray-900 tracking-tight mb-5">
          Get trusted used cars nearby
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {CITIES.map((city) => {
            const isSelected = selectedCity.toLowerCase() === city.name.toLowerCase();
            return (
              <button
                key={city.name}
                onClick={() => onSelectCity(city.name)}
                className={`p-3 rounded-2xl border transition-all text-center flex flex-col items-center justify-between group ${
                  isSelected
                    ? 'border-[#f75d34] bg-orange-50/40 shadow-xs'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {/* Landmark art circle */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-transform group-hover:scale-110 ${
                  isSelected ? 'bg-orange-100/70' : 'bg-sky-50'
                }`}>
                  {renderCityIcon(city.iconType)}
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 block font-medium">Used cars in</span>
                  <span className={`text-xs font-bold block ${
                    isSelected ? 'text-[#f75d34]' : 'text-gray-800 group-hover:text-gray-900'
                  }`}>
                    {city.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
