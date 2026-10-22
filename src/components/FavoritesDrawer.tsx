import React from 'react';
import { X, Trash2, Heart, ArrowRight } from 'lucide-react';
import { Car } from '../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Car[];
  onRemoveFavorite: (carId: string) => void;
  onOpenOffer: (car: Car) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onOpenOffer
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end" onClick={onClose}>
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart size={20} className="text-[#f75d34]" fill="currentColor" />
            <h3 className="font-black text-lg text-gray-900">
              Shortlisted Cars ({favorites.length})
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Content list */}
        <div className="p-5 flex-1 overflow-y-auto">
          {favorites.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <Heart size={44} className="mx-auto mb-3 stroke-1 text-gray-300" />
              <p className="font-bold text-sm text-gray-700">No cars shortlisted yet</p>
              <p className="text-xs text-gray-400 mt-1">
                Tap the heart icon on any car card to save it for quick comparison and festive quotes.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((car) => (
                <div
                  key={car.id}
                  className="p-3 border border-gray-200 rounded-2xl flex items-center justify-between gap-3 bg-white hover:border-[#f75d34] transition-all"
                >
                  <img src={car.image} alt={car.name} className="w-20 h-14 object-contain bg-gray-50 rounded-lg p-1" />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 truncate">{car.name}</h4>
                    <p className="text-xs font-black text-[#f75d34]">{car.priceRange}</p>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenOffer(car);
                      }}
                      className="text-[11px] font-bold text-gray-600 hover:text-[#f75d34] underline mt-0.5"
                    >
                      View Deals
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveFavorite(car.id)}
                    className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                    title="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50">
            <button
              onClick={() => {
                onClose();
                onOpenOffer(favorites[0]);
              }}
              className="w-full py-3 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Get Quotes For All Saved Cars</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
