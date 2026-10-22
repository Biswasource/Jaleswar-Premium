import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Bell, Fuel, Gauge, Sparkles } from 'lucide-react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
  isFavorite: boolean;
  onToggleFavorite: (car: Car) => void;
  onOpenOffer: (car: Car) => void;
  onAlertMe?: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  isFavorite,
  onToggleFavorite,
  onOpenOffer,
  onAlertMe
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-card flex flex-col justify-between group flex-shrink-0 w-[260px] sm:w-[280px]"
    >
      {/* Top Image Container */}
      <div className="relative bg-[#f4f5f8] h-44 flex items-center justify-center p-3 overflow-hidden">
        
        {/* Launch / Status Badge */}
        {car.badge && (
          <div className="absolute top-2.5 left-2.5 z-10 flex flex-wrap gap-1 max-w-[85%]">
            <span className="px-2 py-0.5 bg-black/75 backdrop-blur-xs text-white text-[9px] font-bold tracking-wider uppercase rounded-sm">
              {car.badge.text}
            </span>
            {car.badge.type === 'facelift' && (
              <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[9px] font-bold rounded-sm">
                Facelift
              </span>
            )}
            {car.badge.type === 'variant' && (
              <span className="px-1.5 py-0.5 bg-emerald-600 text-white text-[9px] font-bold rounded-sm">
                New Variant
              </span>
            )}
            {car.badge.type === 'electric' && (
              <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[9px] font-bold rounded-sm">
                Electric
              </span>
            )}
          </div>
        )}

        {/* Favorite Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(car);
          }}
          className={`absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full transition-all ${
            isFavorite
              ? 'bg-red-50 text-red-500 scale-110 shadow-sm'
              : 'bg-white/80 text-gray-400 hover:text-red-500 hover:bg-white'
          }`}
          aria-label="Add to favorites"
        >
          <Heart size={15} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>

        {/* Studio Car Photo */}
        <img
          src={car.image}
          alt={car.name}
          className="max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
          loading="lazy"
        />

        {/* Fuel / Mileage Tag hover overlay */}
        {car.mileage && (
          <div className="absolute bottom-2 left-2 text-[10px] font-semibold text-gray-500 bg-white/90 px-2 py-0.5 rounded shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
            {car.mileage}
          </div>
        )}
      </div>

      {/* Card Info & Details */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#f75d34] transition-colors truncate">
            {car.name}
          </h3>

          <p className="text-xs sm:text-sm font-black text-gray-900 mt-1">
            {car.priceRange}
          </p>

          {car.offers && (
            <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold text-emerald-700 truncate">
              <Sparkles size={11} className="text-emerald-500 flex-shrink-0" />
              <span className="truncate">{car.offers}</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-2">
          {car.isUpcoming ? (
            <button
              onClick={() => (onAlertMe ? onAlertMe(car) : onOpenOffer(car))}
              className="w-full py-2 px-3 border border-[#f75d34] text-[#f75d34] hover:bg-[#f75d34] hover:text-white rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
            >
              <Bell size={13} />
              <span>Alert Me When Launched</span>
            </button>
          ) : (
            <button
              onClick={() => onOpenOffer(car)}
              className="w-full py-2 px-3 border border-[#f75d34] text-[#f75d34] hover:bg-[#f75d34] hover:text-white rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1"
            >
              <span>View October Offers</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
