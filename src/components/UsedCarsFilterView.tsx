import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Bookmark,
  MapPin,
  Bot,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  X,
  Phone,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Gem,
  Sparkles,
  Flame,
  ArrowUpDown,
  RotateCcw
} from 'lucide-react';
import { UsedCar } from '../types';
import { USED_CARS_DATA } from '../data/carsData';

interface UsedCarsFilterViewProps {
  selectedCity: string;
  onOpenCityModal: () => void;
}

export const UsedCarsFilterView: React.FC<UsedCarsFilterViewProps> = ({
  selectedCity,
  onOpenCityModal
}) => {
  // Collapsible section states
  const [collapsedAll, setCollapsedAll] = useState(false);
  const [openSections, setOpenSections] = useState({
    recommended: true,
    budget: true,
    brand: true,
    fuel: true,
    transmission: false
  });

  // Filter states
  const [selectedRecommended, setSelectedRecommended] = useState<string | null>(null);
  const [maxBudgetSlider, setMaxBudgetSlider] = useState<number>(30); // in Lakhs
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFuels, setSelectedFuels] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'relevance' | 'priceAsc' | 'priceDesc' | 'kmAsc' | 'yearDesc'>('relevance');

  // Bookmarks
  const [bookmarkedCars, setBookmarkedCars] = useState<string[]>(['used-tata-tigor-2022']);

  // Carousel image indexes per car
  const [carouselIndexes, setCarouselIndexes] = useState<{ [carId: string]: number }>({});

  // Feedback votes
  const [feedbackVotes, setFeedbackVotes] = useState<{ [carId: string]: 'yes' | 'no' }>({});

  // Modals
  const [sellerModalCar, setSellerModalCar] = useState<UsedCar | null>(null);
  const [offerModalCar, setOfferModalCar] = useState<UsedCar | null>(null);
  const [reportModalCar, setReportModalCar] = useState<UsedCar | null>(null);
  const [offerPrice, setOfferPrice] = useState<string>('');
  const [offerSent, setOfferSent] = useState<boolean>(false);

  // Toggle sections
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCollapseAll = () => {
    const nextState = !collapsedAll;
    setCollapsedAll(nextState);
    setOpenSections({
      recommended: !nextState,
      budget: !nextState,
      brand: !nextState,
      fuel: !nextState,
      transmission: !nextState
    });
  };

  const resetAllFilters = () => {
    setSelectedRecommended(null);
    setMaxBudgetSlider(30);
    setSelectedPriceRanges([]);
    setSelectedBrands([]);
    setSelectedFuels([]);
    setSortBy('relevance');
  };

  // Image carousel next/prev
  const nextCarImage = (carId: string, total: number) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [carId]: ((prev[carId] || 0) + 1) % total
    }));
  };

  const prevCarImage = (carId: string, total: number) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [carId]: ((prev[carId] || 0) - 1 + total) % total
    }));
  };

  const toggleBookmark = (carId: string) => {
    setBookmarkedCars((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );
  };

  // Price range definitions
  const priceRangeOptions = [
    { label: 'Under ₹2 Lakh', min: 0, max: 2, count: 10 },
    { label: '₹2 - ₹3 Lakh', min: 2, max: 3, count: 11 },
    { label: '₹3 - ₹5 Lakh', min: 3, max: 5, count: 15 },
    { label: '₹5 - ₹8 Lakh', min: 5, max: 8, count: 18 },
    { label: '₹8 - ₹10 Lakh', min: 8, max: 10, count: 2 },
    { label: 'Above ₹10 Lakh', min: 10, max: 100, count: 7 }
  ];

  // Filtering logic
  const filteredCars = useMemo(() => {
    return USED_CARS_DATA.filter((car) => {
      // Recommended Filters
      if (selectedRecommended === 'under5') {
        if (car.priceLakh > 5) return false;
      }
      if (selectedRecommended === 'luxury') {
        if (!car.isLuxury && car.priceLakh < 15) return false;
      }
      if (selectedRecommended === 'excellent') {
        if (car.kmDriven > 25000 || car.year < 2022) return false;
      }
      if (selectedRecommended === 'cng') {
        if (car.fuel !== 'CNG') return false;
      }

      // Budget Slider
      if (car.priceLakh > maxBudgetSlider) return false;

      // Price Ranges checkboxes
      if (selectedPriceRanges.length > 0) {
        const matchesAnyRange = selectedPriceRanges.some((rangeLabel) => {
          const opt = priceRangeOptions.find((p) => p.label === rangeLabel);
          if (!opt) return false;
          return car.priceLakh >= opt.min && car.priceLakh < opt.max;
        });
        if (!matchesAnyRange) return false;
      }

      // Brands
      if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) {
        return false;
      }

      // Fuel
      if (selectedFuels.length > 0 && !selectedFuels.includes(car.fuel)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.priceLakh - b.priceLakh;
      if (sortBy === 'priceDesc') return b.priceLakh - a.priceLakh;
      if (sortBy === 'kmAsc') return a.kmDriven - b.kmDriven;
      if (sortBy === 'yearDesc') return b.year - a.year;
      return 0; // relevance
    });
  }, [selectedRecommended, maxBudgetSlider, selectedPriceRanges, selectedBrands, selectedFuels, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      
      {/* Top Banner / Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <span>Home</span>
            <span>›</span>
            <span>Used Cars</span>
            <span>›</span>
            <span className="text-[#f75d34] font-semibold">{selectedCity}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Used Cars in <span className="text-[#f75d34]">{selectedCity}</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Showing {filteredCars.length} certified pre-owned cars with 140-point inspection
          </p>
        </div>

        {/* Top Right: Sort By Dropdown */}
        <div className="flex items-center gap-3">
          {(selectedRecommended || selectedPriceRanges.length > 0 || selectedBrands.length > 0) && (
            <button
              onClick={resetAllFilters}
              className="text-xs font-bold text-gray-500 hover:text-[#f75d34] flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#f75d34] transition-colors"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          )}

          <div className="relative flex items-center border border-gray-300 rounded-xl px-3 py-1.5 bg-white shadow-xs">
            <ArrowUpDown size={14} className="text-gray-400 mr-2" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-bold text-gray-800 bg-transparent focus:outline-none cursor-pointer pr-2"
            >
              <option value="relevance">Relevance</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="kmAsc">KM Driven: Low to High</option>
              <option value="yearDesc">Year: Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Filters (Col 4) | Right Results (Col 8) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* ================= LEFT SIDEBAR FILTERS ================= */}
        <aside className="lg:col-span-4 space-y-5">
          
          {/* Collapse All Filters Header Button */}
          <button
            onClick={handleCollapseAll}
            className="w-full flex items-center justify-between text-xs font-black tracking-wider uppercase text-gray-700 bg-white p-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors shadow-xs"
          >
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={15} className="text-[#f75d34]" />
              <span>{collapsedAll ? 'Expand All Filters' : 'Collapse All Filters'}</span>
            </div>
            {collapsedAll ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>

          {/* Section 1: Recommended Filters */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('recommended')}
            >
              <h3 className="text-sm font-black text-gray-900 tracking-tight">
                Recommended Filters
              </h3>
              <button className="text-gray-400 hover:text-gray-600 text-lg font-bold">
                {openSections.recommended ? '−' : '+'}
              </button>
            </div>

            {openSections.recommended && (
              <div className="grid grid-cols-2 gap-3 mt-4">
                {/* Tile 1: Under 5 Lakh */}
                <button
                  onClick={() =>
                    setSelectedRecommended(selectedRecommended === 'under5' ? null : 'under5')
                  }
                  className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between h-24 ${
                    selectedRecommended === 'under5'
                      ? 'border-[#f75d34] bg-orange-50/50 shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-orange-100 text-[#f75d34] flex items-center justify-center font-bold text-xs mb-1">
                    ₹
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-900 leading-tight">Under ₹5 Lakh</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">Affordable picks under budget</span>
                  </div>
                </button>

                {/* Tile 2: Luxury Cars */}
                <button
                  onClick={() =>
                    setSelectedRecommended(selectedRecommended === 'luxury' ? null : 'luxury')
                  }
                  className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between h-24 ${
                    selectedRecommended === 'luxury'
                      ? 'border-[#f75d34] bg-orange-50/50 shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs mb-1">
                    <Gem size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-900 leading-tight">Luxury Cars</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">Premium brand cars</span>
                  </div>
                </button>

                {/* Tile 3: Excellent Condition */}
                <button
                  onClick={() =>
                    setSelectedRecommended(selectedRecommended === 'excellent' ? null : 'excellent')
                  }
                  className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between h-24 ${
                    selectedRecommended === 'excellent'
                      ? 'border-[#f75d34] bg-orange-50/50 shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs mb-1">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-900 leading-tight">Excellent Condition</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">Under 3 years, below 25k km</span>
                  </div>
                </button>

                {/* Tile 4: CNG */}
                <button
                  onClick={() =>
                    setSelectedRecommended(selectedRecommended === 'cng' ? null : 'cng')
                  }
                  className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between h-24 ${
                    selectedRecommended === 'cng'
                      ? 'border-[#f75d34] bg-orange-50/50 shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xs mb-1">
                    <Flame size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-900 leading-tight">CNG</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">Save on daily commute</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Section 2: Budget */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('budget')}
            >
              <h3 className="text-sm font-black text-gray-900 tracking-tight">
                Budget
              </h3>
              <button className="text-gray-400 hover:text-gray-600 text-lg font-bold">
                {openSections.budget ? '−' : '+'}
              </button>
            </div>

            {openSections.budget && (
              <div className="mt-4">
                {/* Range Label (Exact to screenshot: ₹5 Crore on left, ₹0 on right) */}
                <div className="flex items-center justify-between text-xs font-black mb-2">
                  <span className="text-[#f75d34]">₹{maxBudgetSlider} Lakh Max</span>
                  <span className="text-gray-400">₹0</span>
                </div>

                {/* Orange Dual Range Slider */}
                <input
                  type="range"
                  min="1"
                  max="35"
                  step="0.5"
                  value={maxBudgetSlider}
                  onChange={(e) => setMaxBudgetSlider(parseFloat(e.target.value))}
                  className="w-full accent-[#f75d34] h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                />

                {/* Price range checkboxes with counts */}
                <div className="mt-5 space-y-2.5">
                  <span className="text-xs font-bold text-gray-700 block mb-2">
                    What is your price range?
                  </span>

                  {priceRangeOptions.map((opt) => {
                    const isChecked = selectedPriceRanges.includes(opt.label);
                    return (
                      <label
                        key={opt.label}
                        className="flex items-center justify-between text-xs font-medium text-gray-700 hover:text-gray-900 cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {
                              setSelectedPriceRanges((prev) =>
                                isChecked
                                  ? prev.filter((r) => r !== opt.label)
                                  : [...prev, opt.label]
                              );
                            }}
                            className="rounded border-gray-300 text-[#f75d34] focus:ring-[#f75d34] h-4 w-4"
                          />
                          <span className={isChecked ? 'font-bold text-[#f75d34]' : ''}>
                            {opt.label}
                          </span>
                        </div>
                        <span className="text-gray-400 text-[11px] group-hover:text-gray-600">
                          {opt.count}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Brand + Model */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('brand')}
            >
              <h3 className="text-sm font-black text-gray-900 tracking-tight">
                Brand + Model
              </h3>
              <button className="text-gray-400 hover:text-gray-600 text-lg font-bold">
                {openSections.brand ? '−' : '+'}
              </button>
            </div>

            {openSections.brand && (
              <div className="mt-4 space-y-2.5">
                {[
                  { name: 'Tata', count: 14 },
                  { name: 'Maruti Suzuki', count: 18 },
                  { name: 'Hyundai', count: 12 },
                  { name: 'Datsun', count: 3 },
                  { name: 'BMW', count: 6 },
                  { name: 'Mahindra', count: 9 }
                ].map((brand) => {
                  const isChecked = selectedBrands.includes(brand.name);
                  return (
                    <label
                      key={brand.name}
                      className="flex items-center justify-between text-xs font-medium text-gray-700 hover:text-gray-900 cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {
                            setSelectedBrands((prev) =>
                              isChecked
                                ? prev.filter((b) => b !== brand.name)
                                : [...prev, brand.name]
                            );
                          }}
                          className="rounded border-gray-300 text-[#f75d34] focus:ring-[#f75d34] h-4 w-4"
                        />
                        <span className={isChecked ? 'font-bold text-[#f75d34]' : ''}>
                          {brand.name}
                        </span>
                      </div>
                      <span className="text-gray-400 text-[11px] group-hover:text-gray-600">
                        {brand.count}
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* Section 4: Fuel Type */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection('fuel')}
            >
              <h3 className="text-sm font-black text-gray-900 tracking-tight">
                Fuel Type
              </h3>
              <button className="text-gray-400 hover:text-gray-600 text-lg font-bold">
                {openSections.fuel ? '−' : '+'}
              </button>
            </div>

            {openSections.fuel && (
              <div className="mt-4 space-y-2.5">
                {['Petrol', 'Diesel', 'CNG', 'Electric'].map((fuel) => {
                  const isChecked = selectedFuels.includes(fuel);
                  return (
                    <label
                      key={fuel}
                      className="flex items-center justify-between text-xs font-medium text-gray-700 hover:text-gray-900 cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {
                            setSelectedFuels((prev) =>
                              isChecked ? prev.filter((f) => f !== fuel) : [...prev, fuel]
                            );
                          }}
                          className="rounded border-gray-300 text-[#f75d34] focus:ring-[#f75d34] h-4 w-4"
                        />
                        <span className={isChecked ? 'font-bold text-[#f75d34]' : ''}>
                          {fuel}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

        </aside>

        {/* ================= RIGHT CARDS GRID ================= */}
        <section className="lg:col-span-8">
          
          {filteredCars.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <SlidersHorizontal size={40} className="mx-auto text-gray-300 mb-3" />
              <h3 className="font-bold text-gray-800 text-base">No cars match your exact filter</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                Try widening your budget range slider or clearing brand checkboxes to view available listings.
              </p>
              <button
                onClick={resetAllFilters}
                className="mt-4 px-5 py-2 bg-[#f75d34] text-white rounded-xl text-xs font-bold hover:bg-[#e24c23] transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCars.map((car) => {
                const imgIdx = carouselIndexes[car.id] || 0;
                const isSaved = bookmarkedCars.includes(car.id);
                const feedback = feedbackVotes[car.id];

                return (
                  <motion.div
                    key={car.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-card transition-all flex flex-col justify-between group"
                  >
                    {/* Top Image Box with Carousel & Badges */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden group/image">
                      {/* Direct Owner / Featured Badges */}
                      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                        {car.isDirectOwner && (
                          <span className="px-2 py-0.5 bg-[#f75d34] text-white text-[10px] font-bold rounded-sm uppercase tracking-wider shadow-xs">
                            Direct Owner
                          </span>
                        )}
                        {car.isFeatured && (
                          <span className="px-2 py-0.5 bg-white/90 backdrop-blur-xs text-gray-800 text-[10px] font-bold rounded-sm uppercase tracking-wider shadow-xs">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Bookmark / Save icon */}
                      <button
                        onClick={() => toggleBookmark(car.id)}
                        className={`absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isSaved
                            ? 'bg-[#f75d34] text-white shadow-sm'
                            : 'bg-white/90 text-gray-700 hover:text-[#f75d34]'
                        }`}
                        title="Bookmark car"
                      >
                        <Bookmark size={14} fill={isSaved ? 'currentColor' : 'none'} />
                      </button>

                      {/* Photo Carousel */}
                      <img
                        src={car.images[imgIdx]}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />

                      {/* Image navigation arrows (< and >) */}
                      {car.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevCarImage(car.id, car.images.length);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextCarImage(car.id, car.images.length);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity"
                          >
                            <ChevronRight size={16} />
                          </button>

                          {/* Dots */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                            {car.images.map((_, dotIdx) => (
                              <div
                                key={dotIdx}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  imgIdx === dotIdx ? 'bg-white' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <div>
                        {/* Title & Price */}
                        <div className="flex items-baseline justify-between gap-1">
                          <div className="flex items-center gap-1.5 truncate">
                            <h3 className="font-black text-sm sm:text-base text-gray-900 group-hover:text-[#f75d34] transition-colors truncate">
                              {car.name}
                            </h3>
                            <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                              {car.year}
                            </span>
                          </div>
                          <span className="font-black text-sm sm:text-base text-gray-900 whitespace-nowrap">
                            {car.priceFormatted}
                          </span>
                        </div>

                        {/* Specs row: kms • transmission • fuel | Make Offer link */}
                        <div className="flex items-center justify-between mt-1 text-[11px] text-gray-600">
                          <span className="truncate">
                            {car.kmFormatted} • {car.transmission} • {car.fuel}
                          </span>
                          <button
                            onClick={() => {
                              setOfferModalCar(car);
                              setOfferPrice(car.priceFormatted);
                              setOfferSent(false);
                            }}
                            className="text-[#f75d34] font-bold hover:underline whitespace-nowrap ml-2"
                          >
                            Make Offer
                          </button>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-1">
                          <MapPin size={11} className="text-gray-400 flex-shrink-0" />
                          <span className="truncate">{car.location}</span>
                        </div>

                        {/* AI Expert Box (Green box with rounded corners) */}
                        <div className="mt-3.5 bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-2.5 text-[11px]">
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-1 text-emerald-800 font-bold">
                              <Bot size={13} className="text-emerald-600" />
                              <span>AI Expert</span>
                            </div>
                            <span
                              className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider ${
                                car.aiExpert.status === 'GREAT PRICE'
                                  ? 'bg-emerald-200 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {car.aiExpert.status}
                            </span>
                          </div>

                          <ul className="space-y-1 text-gray-700 leading-tight">
                            {car.aiExpert.points.map((pt, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span className="truncate">{pt}</span>
                              </li>
                            ))}
                          </ul>

                          <button
                            onClick={() => setReportModalCar(car)}
                            className="mt-2 text-[10px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 hover:underline"
                          >
                            <span>Read full report</span>
                            <ExternalLink size={10} />
                          </button>
                        </div>
                      </div>

                      {/* Big Orange Button: View Seller Details */}
                      <div className="mt-4 pt-1">
                        <button
                          onClick={() => setSellerModalCar(car)}
                          className="w-full py-2.5 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-xs shadow-md shadow-orange-500/20 active:scale-[0.99] transition-all"
                        >
                          View Seller Details
                        </button>

                        {/* Bottom Feedback: Is this car a good match for you? */}
                        <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400 px-1">
                          <span>Is this car a good match for you?</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                setFeedbackVotes((prev) => ({ ...prev, [car.id]: 'yes' }))
                              }
                              className={`flex items-center gap-1 hover:text-gray-700 ${
                                feedback === 'yes' ? 'text-emerald-600 font-bold' : ''
                              }`}
                            >
                              <ThumbsUp size={11} />
                              <span>Yes</span>
                            </button>
                            <button
                              onClick={() =>
                                setFeedbackVotes((prev) => ({ ...prev, [car.id]: 'no' }))
                              }
                              className={`flex items-center gap-1 hover:text-gray-700 ${
                                feedback === 'no' ? 'text-red-500 font-bold' : ''
                              }`}
                            >
                              <ThumbsDown size={11} />
                              <span>No</span>
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Middle Horizontal Budget Pill Selector (Exact to screenshot) */}
          <div className="mt-10 bg-sky-50/70 border border-sky-100 rounded-2xl p-5">
            <h3 className="text-sm font-black text-gray-900 mb-3">
              Budget Quick Filters
            </h3>
            <div className="flex flex-wrap gap-2">
              {priceRangeOptions.map((opt) => {
                const isSelected = selectedPriceRanges.includes(opt.label);
                return (
                  <button
                    key={opt.label}
                    onClick={() => {
                      setSelectedPriceRanges((prev) =>
                        isSelected ? [] : [opt.label]
                      );
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#f75d34] text-white shadow-xs'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-[#f75d34] hover:text-[#f75d34]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

        </section>
      </div>

      {/* ================= MODAL 1: VIEW SELLER DETAILS ================= */}
      {sellerModalCar && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSellerModalCar(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-orange-50/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#f75d34] text-white flex items-center justify-center font-bold text-xs">
                  JJ
                </div>
                <div>
                  <h3 className="font-black text-sm text-gray-900">Verified Seller Details</h3>
                  <span className="text-[10px] text-gray-500">{sellerModalCar.name} ({sellerModalCar.year})</span>
                </div>
              </div>
              <button onClick={() => setSellerModalCar(null)} className="p-1 text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <img
                  src={sellerModalCar.images[0]}
                  alt={sellerModalCar.name}
                  className="w-16 h-12 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{sellerModalCar.name}</h4>
                  <p className="text-xs font-black text-[#f75d34]">{sellerModalCar.priceFormatted}</p>
                  <p className="text-[10px] text-gray-500">{sellerModalCar.location}</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-b border-gray-100 py-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Owner Name:</span>
                  <strong className="text-gray-900">{sellerModalCar.seller.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone:</span>
                  <strong className="text-gray-900 font-mono">+91 {sellerModalCar.seller.phone}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">JJ Motors Rating:</span>
                  <span className="text-amber-600 font-bold">★ {sellerModalCar.seller.rating} / 5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Ownership:</span>
                  <strong className="text-gray-900">{sellerModalCar.owner}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                <ShieldCheck size={16} className="flex-shrink-0" />
                <span>Verified Seller: RC, Insurance, and NOC documents authenticated by JJ Motors.</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${sellerModalCar.seller.phone}`}
                  className="py-2.5 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/20"
                >
                  <Phone size={14} />
                  <span>Call Seller</span>
                </a>
                <button
                  onClick={() => {
                    alert(`Doorstep test drive inspection scheduled for ${sellerModalCar.name}! The seller will contact you shortly.`);
                    setSellerModalCar(null);
                  }}
                  className="py-2.5 bg-gray-900 hover:bg-black text-white rounded-xl font-bold text-xs"
                >
                  Book Test Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL 2: MAKE OFFER ================= */}
      {offerModalCar && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOfferModalCar(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-black text-base text-gray-900">Make an Offer</h3>
              <button onClick={() => setOfferModalCar(null)} className="p-1 text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {!offerSent ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setOfferSent(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-xs text-gray-500">Asking Price</span>
                    <h4 className="text-xl font-black text-gray-900">{offerModalCar.priceFormatted}</h4>
                    <span className="text-[11px] text-gray-500">{offerModalCar.name} ({offerModalCar.year})</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Counter Offer</label>
                    <input
                      type="text"
                      required
                      value={offerPrice}
                      onChange={(e) => setOfferPrice(e.target.value)}
                      placeholder="e.g. ₹6,20,000"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-xs sm:text-sm font-bold text-gray-900 focus:outline-none focus:border-[#f75d34]"
                    />
                  </div>

                  <p className="text-[10px] text-gray-400">
                    Your offer will be notified to <strong>{offerModalCar.seller.name}</strong> instantly via SMS/WhatsApp.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    Send Offer to Seller
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 space-y-3">
                  <CheckCircle2 size={36} className="text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-base text-gray-900">Offer Submitted!</h4>
                  <p className="text-xs text-gray-600">
                    Your counter offer of <strong>{offerPrice}</strong> has been transmitted to the owner.
                  </p>
                  <button
                    onClick={() => setOfferModalCar(null)}
                    className="w-full py-2 bg-gray-900 text-white rounded-xl text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL 3: READ FULL REPORT ================= */}
      {reportModalCar && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setReportModalCar(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-emerald-50/50">
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-emerald-600" />
                <h3 className="font-black text-sm text-gray-900">JJ Motors 140-Point Inspection Report</h3>
              </div>
              <button onClick={() => setReportModalCar(null)} className="p-1 text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h4 className="font-black text-base text-gray-900">{reportModalCar.name}</h4>
                  <p className="text-xs text-gray-500">{reportModalCar.kmFormatted} • {reportModalCar.fuel} • {reportModalCar.year}</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold">
                  Score: 9.2 / 10
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <strong className="text-gray-900 block mb-1">1. Engine & Transmission (Pass)</strong>
                  <p className="text-gray-600">Zero fluid leakage, smooth gear shifts, compression ratios within factory specs.</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl">
                  <strong className="text-gray-900 block mb-1">2. Body Structure & Paint (Non-Accidental)</strong>
                  <p className="text-gray-600">Original chassis pillars intact, original paint thickness verified across all panels.</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl">
                  <strong className="text-gray-900 block mb-1">3. Tyres & Suspension (75%+ Life)</strong>
                  <p className="text-gray-600">Front & rear tread depth ~5.2mm remaining. No uneven wear or strut noise.</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl">
                  <strong className="text-gray-900 block mb-1">4. Electricals & Air Conditioning (Pass)</strong>
                  <p className="text-gray-600">AC cooling temp reaches 7°C in 4 mins. All power windows and airbags functional.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    alert('Official signed PDF Inspection Certificate downloaded!');
                    setReportModalCar(null);
                  }}
                  className="w-full py-2.5 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-xs shadow-md"
                >
                  Download Signed Inspection Certificate (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
