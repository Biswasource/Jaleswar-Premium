import React, { useState } from 'react';
import { X, Search, MapPin, Check } from 'lucide-react';
import { CITIES } from '../data/carsData';

interface CityModalProps {
  currentCity: string;
  onSelectCity: (city: string) => void;
  onClose: () => void;
}

export const CityModal: React.FC<CityModalProps> = ({
  currentCity,
  onSelectCity,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const topMetros = [
    'New Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 
    'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Gurgaon', 'Noida'
  ];

  const filteredCities = CITIES.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-[#f75d34]" />
            <h3 className="font-black text-lg text-gray-900">Select Your City</h3>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-5">
          {/* Search Input */}
          <div className="relative mb-5">
            <Search size={16} className="absolute left-3.5 top-3 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by city or state name..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#f75d34] focus:ring-1 focus:ring-[#f75d34]"
              autoFocus
            />
          </div>

          {/* Popular Metros Chips */}
          <div className="mb-5">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
              Popular Cities
            </span>
            <div className="flex flex-wrap gap-2">
              {topMetros.map((metro) => {
                const isSelected = currentCity.toLowerCase() === metro.toLowerCase();
                return (
                  <button
                    key={metro}
                    onClick={() => {
                      onSelectCity(metro);
                      onClose();
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#f75d34] text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#f75d34]'
                    }`}
                  >
                    {metro}
                  </button>
                );
              })}
            </div>
          </div>

          {/* List of All Cities */}
          <div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
              All Available Hubs
            </span>
            <div className="max-h-60 overflow-y-auto space-y-1 pr-1">
              {filteredCities.map((c) => {
                const isSelected = currentCity.toLowerCase() === c.name.toLowerCase();
                return (
                  <button
                    key={c.name}
                    onClick={() => {
                      onSelectCity(c.name);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium transition-colors ${
                      isSelected ? 'bg-orange-50 text-[#f75d34] font-bold' : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className={isSelected ? 'text-[#f75d34]' : 'text-gray-400'} />
                      <span>{c.name}, <span className="text-gray-400 text-[11px]">{c.state}</span></span>
                    </div>
                    {isSelected && <Check size={16} className="text-[#f75d34]" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
