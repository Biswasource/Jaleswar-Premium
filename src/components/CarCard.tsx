import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Bell, Fuel, Gauge, Sparkles, Star, Tag, ChevronRight } from 'lucide-react';
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
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-card flex flex-col justify-between group flex-shrink-0 w-[270px] sm:w-[290px] font-sans"
    >
      {/* Top Image Container - Perfectly showing cover with increased height */}
      <div className="relative w-full h-48 sm:h-52 bg-gray-100 overflow-hidden group/image">
        {/* Full Bleed Object-Cover Photo */}
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Ambient Gradient Overlay for Contrast & Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Status / Launch Badge */}
        {car.badge && (
          <div className="absolute top-2.5 left-2.5 z-10 flex flex-wrap gap-1 max-w-[75%]">
            <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md text-white text-[9px] font-sans font-bold tracking-wider uppercase rounded shadow-xs">
              {car.badge.text}
            </span>
            {car.badge.type === 'facelift' && (
              <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[9px] font-sans font-bold rounded shadow-xs">
                Facelift
              </span>
            )}
            {car.badge.type === 'variant' && (
              <span className="px-1.5 py-0.5 bg-emerald-600 text-white text-[9px] font-sans font-bold rounded shadow-xs">
                New Variant
              </span>
            )}
            {car.badge.type === 'electric' && (
              <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[9px] font-sans font-bold rounded shadow-xs">
                Electric
              </span>
            )}
          </div>
        )}

        {/* Favorite Icon Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(car);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-sm ${
            isFavorite
              ? 'bg-red-500 text-white scale-105'
              : 'bg-black/35 hover:bg-black/60 text-white hover:text-red-400'
          }`}
          aria-label="Add to favorites"
        >
          <Heart size={15} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>

        {/* Rating Pill with Star Icon */}
        {car.rating && (
          <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-white text-[11px] font-medium border border-white/10 shadow-xs">
            <Star size={11} className="fill-amber-400 text-amber-400" />
            <span className="font-mono font-bold text-xs">{car.rating.toFixed(1)}</span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute bottom-2.5 right-2.5 z-10 bg-white/95 backdrop-blur-md text-gray-800 text-[10px] font-sans font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-xs">
          {car.category}
        </div>
      </div>

      {/* Card Info & Details */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white font-sans">
        <div>
          {/* Brand & Name */}
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-sans block">
            {car.brand}
          </span>
          <h3 className="font-sans font-bold text-base text-gray-900 group-hover:text-[#f75d34] transition-colors truncate mt-0.5">
            {car.name}
          </h3>

          {/* Price Range formatted in Geist Mono */}
          <p className="font-mono font-black text-base sm:text-lg text-gray-900 mt-1 tracking-tight">
            {car.priceRange}
          </p>

          {/* Spec Row with Fuel & Mileage Icons */}
          <div className="flex items-center justify-between gap-2 mt-2.5 pt-2.5 border-t border-gray-100 text-xs">
            {car.fuelTypes && car.fuelTypes.length > 0 && (
              <div className="flex items-center gap-1.5 text-gray-600 truncate" title={car.fuelTypes.join(', ')}>
                <Fuel size={13} className="text-gray-400 flex-shrink-0" />
                <span className="font-sans truncate text-[11px] font-medium">{car.fuelTypes.slice(0, 2).join(' / ')}</span>
              </div>
            )}
            {car.mileage && (
              <div className="flex items-center gap-1.5 text-gray-600 whitespace-nowrap ml-auto">
                <Gauge size={13} className="text-gray-400 flex-shrink-0" />
                <span className="font-mono text-[11px] font-bold text-gray-800">{car.mileage}</span>
              </div>
            )}
          </div>

          {/* Festive Offer with Sparkles Icon */}
          {car.offers && (
            <div className="flex items-center gap-1.5 mt-2.5 px-2.5 py-1.5 bg-emerald-50 rounded-lg text-[11px] font-sans font-semibold text-emerald-800 truncate border border-emerald-100/80">
              <Sparkles size={12} className="text-emerald-600 flex-shrink-0" />
              <span className="truncate">{car.offers}</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-1">
          {car.isUpcoming ? (
            <button
              onClick={() => (onAlertMe ? onAlertMe(car) : onOpenOffer(car))}
              className="w-full py-2.5 px-3 border border-[#f75d34] text-[#f75d34] hover:bg-[#f75d34] hover:text-white rounded-xl text-xs font-sans font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 group/btn cursor-pointer"
            >
              <Bell size={13} className="group-hover/btn:rotate-12 transition-transform" />
              <span>Alert Me When Launched</span>
            </button>
          ) : (
            <button
              onClick={() => onOpenOffer(car)}
              className="w-full py-2.5 px-3 bg-gradient-to-r from-[#f75d34] to-[#ff6a3d] hover:from-[#e24c23] hover:to-[#f75d34] text-white rounded-xl text-xs font-sans font-bold transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 group/btn cursor-pointer"
            >
              <Tag size={13} />
              <span>View October Offers</span>
              <ChevronRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
