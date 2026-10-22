import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, ChevronDown, Gift, Sparkles } from 'lucide-react';

interface HeroProps {
  onSearchFilter: (filters: { type: 'new' | 'used'; mode: 'budget' | 'brand'; budget: string; vehicleType: string }) => void;
  onOpenOfferModal: (carName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchFilter, onOpenOfferModal }) => {
  // Hero slide state
  const [activeSlide, setActiveSlide] = useState(0);

  // Search card state
  const [carType, setCarType] = useState<'new' | 'used'>('new');
  const [searchMode, setSearchMode] = useState<'budget' | 'brand'>('budget');
  const [selectedBudget, setSelectedBudget] = useState('Select Budget');
  const [selectedVehicleType, setSelectedVehicleType] = useState('All Vehicle Types');
  const [selectedBrand, setSelectedBrand] = useState('Select Brand');

  // Nissan banner interactive tab
  const [activeNissanTab, setActiveNissanTab] = useState(0);

  const heroSlides = [
    {
      brand: 'Renault',
      model: 'Duster Hybrid',
      tagline1: 'Compact SUV With',
      tagline2: '29 Kmpl Efficiency!',
      badge: 'LAUNCHED',
      image: '/renault-duster-white.jpg',
      label: 'Duster Hybrid Launched'
    },
    {
      brand: 'Toyota',
      model: 'Glanza FL',
      tagline1: 'Smart Hybrid Hatchback',
      tagline2: 'With 360° Camera!',
      badge: 'LAUNCHED',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      label: 'Glanza FL Launched'
    },
    {
      brand: 'Hyundai',
      model: 'Bayon',
      tagline1: 'Sporty Turbo Crossover',
      tagline2: 'With Level-2 ADAS!',
      badge: 'REVEALED',
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1200&q=80',
      label: 'Hyundai Bayon Revealed'
    }
  ];

  const nissanTabs = [
    {
      title: 'Book A Nissan',
      heading: 'Book A Nissan Win Gifts Worth 1CR*',
      desc: 'Bring home a new Nissan and win assured festive gifts worth up to ₹1 Crore*. Book your car today!'
    },
    {
      title: 'Test Drive Now',
      heading: 'Experience Nissan Magnite at Home',
      desc: 'Free doorstep test drive with certified product experts at your convenient time slot.'
    },
    {
      title: 'Nissan Rewards',
      heading: 'Exclusive 50,000 Loyalty Bonus',
      desc: 'Additional cash discounts and free 3-year scheduled maintenance for existing owners.'
    },
    {
      title: 'Book Nissan Car',
      heading: 'Priority Delivery in 7 Days',
      desc: 'Instant booking with 100% refundable token and zero cancellation charge before allotment.'
    },
    {
      title: 'Assured Gifts*',
      heading: 'Assured Gold Coin & Accessories',
      desc: 'Every festive delivery comes with guaranteed ₹25,000 genuine Nissan accessory package.'
    }
  ];

  const handleSearch = () => {
    onSearchFilter({
      type: carType,
      mode: searchMode,
      budget: selectedBudget,
      vehicleType: selectedVehicleType
    });
  };

  return (
    <div className="w-full font-sans">
      
      {/* ================= MAIN HERO SECTION ================= */}
      <div className="relative w-full overflow-hidden bg-[#cbb89e] min-h-[500px] lg:min-h-[560px]">
        
        {/* Background 3D Architectural Studio Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 scale-105"
          style={{
            backgroundImage: "url('/studio-hero-bg.jpg')",
          }}
        />

        {/* Ambient Gradient Overlay for Text Readability & Studio Lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/35 pointer-events-none lg:bg-gradient-to-r lg:from-black/45 lg:via-black/10 lg:to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT: "Find your right car" Floating Card (Exact match to screenshot) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-7 border border-gray-100 max-w-md w-full relative">
                
                <h2 className="text-xl sm:text-2xl font-black text-[#1e2229] mb-4 tracking-tight">
                  Find your right car
                </h2>

                {/* Tabs: New Car / Used Car with downward pointer arrow on active tab */}
                <div className="relative mb-5">
                  <div className="grid grid-cols-2 p-1 bg-white border border-gray-200 rounded-xl">
                    <button
                      onClick={() => setCarType('new')}
                      className={`relative py-2.5 text-xs sm:text-sm font-black rounded-lg transition-all ${
                        carType === 'new'
                          ? 'bg-[#1e2229] text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <span>New Car</span>
                      {carType === 'new' && (
                        /* Pointer triangle indicator */
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-[#1e2229]" />
                      )}
                    </button>

                    <button
                      onClick={() => setCarType('used')}
                      className={`relative py-2.5 text-xs sm:text-sm font-black rounded-lg transition-all ${
                        carType === 'used'
                          ? 'bg-[#1e2229] text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <span>Used Car</span>
                      {carType === 'used' && (
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-[#1e2229]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Radio Buttons: By Budget vs By Brand */}
                <div className="flex items-center gap-6 mb-4 text-xs font-bold text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        searchMode === 'budget' ? 'border-[#f75d34]' : 'border-gray-400 group-hover:border-gray-600'
                      }`}
                    >
                      {searchMode === 'budget' && (
                        <span className="w-2 h-2 rounded-full bg-[#f75d34]" />
                      )}
                    </span>
                    <input
                      type="radio"
                      name="searchModeRadio"
                      checked={searchMode === 'budget'}
                      onChange={() => setSearchMode('budget')}
                      className="sr-only"
                    />
                    <span className={searchMode === 'budget' ? 'text-[#f75d34] font-black' : 'text-gray-600'}>
                      By Budget
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer group">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        searchMode === 'brand' ? 'border-[#f75d34]' : 'border-gray-400 group-hover:border-gray-600'
                      }`}
                    >
                      {searchMode === 'brand' && (
                        <span className="w-2 h-2 rounded-full bg-[#f75d34]" />
                      )}
                    </span>
                    <input
                      type="radio"
                      name="searchModeRadio"
                      checked={searchMode === 'brand'}
                      onChange={() => setSearchMode('brand')}
                      className="sr-only"
                    />
                    <span className={searchMode === 'brand' ? 'text-[#f75d34] font-black' : 'text-gray-600'}>
                      By Brand
                    </span>
                  </label>
                </div>

                {/* Dropdowns based on mode */}
                <div className="space-y-3 mb-5">
                  {searchMode === 'budget' ? (
                    <>
                      <div className="relative">
                        <select
                          value={selectedBudget}
                          onChange={(e) => setSelectedBudget(e.target.value)}
                          className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#f75d34] focus:ring-1 focus:ring-[#f75d34] cursor-pointer"
                        >
                          <option>Select Budget</option>
                          <option>Under 5 Lakh</option>
                          <option>5 - 10 Lakh</option>
                          <option>10 - 15 Lakh</option>
                          <option>15 - 20 Lakh</option>
                          <option>20 - 35 Lakh</option>
                          <option>Above 35 Lakh</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" />
                      </div>

                      <div className="relative">
                        <select
                          value={selectedVehicleType}
                          onChange={(e) => setSelectedVehicleType(e.target.value)}
                          className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#f75d34] focus:ring-1 focus:ring-[#f75d34] cursor-pointer"
                        >
                          <option>All Vehicle Types</option>
                          <option>SUV</option>
                          <option>Sedan</option>
                          <option>Hatchback</option>
                          <option>MUV</option>
                          <option>Luxury</option>
                          <option>Electric</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative">
                        <select
                          value={selectedBrand}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#f75d34] focus:ring-1 focus:ring-[#f75d34] cursor-pointer"
                        >
                          <option>Select Brand</option>
                          <option>Maruti Suzuki</option>
                          <option>Tata</option>
                          <option>Mahindra</option>
                          <option>Hyundai</option>
                          <option>Kia</option>
                          <option>Toyota</option>
                          <option>Renault</option>
                          <option>Honda</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" />
                      </div>

                      <div className="relative">
                        <select
                          value={selectedVehicleType}
                          onChange={(e) => setSelectedVehicleType(e.target.value)}
                          className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#f75d34] focus:ring-1 focus:ring-[#f75d34] cursor-pointer"
                        >
                          <option>All Vehicle Types</option>
                          <option>SUV</option>
                          <option>Sedan</option>
                          <option>Hatchback</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" />
                      </div>
                    </>
                  )}
                </div>

                {/* Big Orange Search Button */}
                <button
                  onClick={handleSearch}
                  className="w-full py-3.5 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-black text-sm tracking-wide shadow-lg shadow-orange-500/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <span>Search</span>
                </button>

                {/* Advanced Search Link */}
                <div className="mt-4 text-right">
                  <button
                    onClick={() => onSearchFilter({ type: carType, mode: searchMode, budget: selectedBudget, vehicleType: selectedVehicleType })}
                    className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-[#f75d34] transition-colors"
                  >
                    <span>Advanced Search</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Spotlight Car Showcase (Renault Duster Hybrid & Typography) */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between min-h-[320px] lg:min-h-[460px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6"
                >
                  {/* Left Text Block */}
                  <div className="flex flex-col items-start text-left max-w-sm">
                    {/* LAUNCHED orange pill */}
                    <span className="inline-block px-3 py-1 bg-[#f75d34] text-white text-[10px] font-black rounded-md tracking-wider uppercase mb-2.5 shadow-md">
                      {heroSlides[activeSlide].badge}
                    </span>

                    {/* Headline: Renault / Duster Hybrid */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-md tracking-tight leading-tight">
                      {heroSlides[activeSlide].brand} <br />
                      <span className="text-white">{heroSlides[activeSlide].model}</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base font-bold text-white/95 drop-shadow-sm mt-2 leading-snug">
                      {heroSlides[activeSlide].tagline1} <br />
                      {heroSlides[activeSlide].tagline2}
                    </p>

                    {/* Know More Pill Button */}
                    <button
                      onClick={() => onOpenOfferModal(`${heroSlides[activeSlide].brand} ${heroSlides[activeSlide].model}`)}
                      className="mt-5 px-6 py-2 bg-white text-gray-900 rounded-full text-xs font-bold shadow-md hover:bg-gray-100 transition-all flex items-center gap-2"
                    >
                      <span>Know More</span>
                    </button>
                  </div>

                  {/* Right: Studio Vehicle Image with realistic ground shadow */}
                  <div className="w-full lg:w-auto flex-1 flex justify-center lg:justify-end">
                    <img
                      src={heroSlides[activeSlide].image}
                      alt={`${heroSlides[activeSlide].brand} ${heroSlides[activeSlide].model}`}
                      className="max-h-56 sm:max-h-64 lg:max-h-80 w-auto object-contain drop-shadow-2xl rounded-2xl transition-all duration-500"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Slide Indicators (Duster Hybrid Launched, Glanza FL Launched, Hyundai Bayon Revealed) */}
              <div className="mt-8 flex items-center gap-6 sm:gap-10 border-t border-white/20 pt-4 overflow-x-auto no-scrollbar">
                {heroSlides.map((slide, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <button
                      key={slide.label}
                      onClick={() => setActiveSlide(idx)}
                      className="text-left group relative pb-2 focus:outline-none whitespace-nowrap"
                    >
                      <span
                        className={`text-xs sm:text-sm font-bold transition-colors ${
                          isActive ? 'text-white' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        {slide.label}
                      </span>
                      {isActive ? (
                        <motion.div
                          layoutId="slideWhiteIndicator"
                          className="h-1 bg-white rounded-full mt-1.5 w-full"
                        />
                      ) : (
                        <div className="h-1 bg-transparent group-hover:bg-white/30 rounded-full mt-1.5 w-full" />
                      )}
                    </button>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ================= SPONSORED DEAL BANNER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Vertical Menu */}
          <div className="md:col-span-3 border-r border-gray-100 bg-[#fafafa]">
            {nissanTabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => setActiveNissanTab(idx)}
                className={`w-full text-left px-4 py-3.5 text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border-b border-gray-100 last:border-b-0 ${
                  activeNissanTab === idx
                    ? 'bg-white text-[#f75d34] font-bold border-l-4 border-l-[#f75d34] shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100/70 hover:text-gray-900'
                }`}
              >
                <span>{tab.title}</span>
                {activeNissanTab === idx && (
                  <ChevronRight size={16} className="text-[#f75d34]" />
                )}
              </button>
            ))}
          </div>

          {/* Middle Content */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#f75d34]">
                <Gift size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Festive Campaign</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                {nissanTabs[activeNissanTab].heading}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                {nissanTabs[activeNissanTab].desc}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={() => onOpenOfferModal('Nissan Magnite')}
                className="px-5 py-2 border-2 border-[#f75d34] text-[#f75d34] hover:bg-[#f75d34] hover:text-white rounded-lg text-xs font-bold transition-all shadow-sm"
              >
                Know More
              </button>

              <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-black text-[10px] text-gray-700">
                  NISSAN
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase">Official Partner</span>
              </div>
            </div>
          </div>

          {/* Right Image Display */}
          <div className="md:col-span-4 bg-gradient-to-r from-gray-50 to-orange-50/30 p-4 flex flex-col items-center justify-center relative">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80"
              alt="Nissan Lineup"
              className="max-h-44 object-contain drop-shadow-md rounded-xl hover:scale-105 transition-transform duration-300"
            />
            <span className="text-[10px] text-gray-400 mt-2 self-end">
              Sponsored by Nissan
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
