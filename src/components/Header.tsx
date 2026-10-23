import React, { useState } from 'react';
import {
  Search,
  Heart,
  User,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Globe
} from 'lucide-react';
import { HDLogo } from './HDLogo';

interface HeaderProps {
  selectedCity: string;
  onOpenCityModal: () => void;
  onOpenAuthModal: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onSearch: (query: string) => void;
  activeView: 'new' | 'used';
  onViewChange: (view: 'new' | 'used') => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedCity,
  onOpenCityModal,
  onOpenAuthModal,
  favoritesCount,
  onOpenFavorites,
  onSearch,
  activeView,
  onViewChange
}) => {
  const [searchCategory, setSearchCategory] = useState<'All' | 'New Cars' | 'Used Cars'>('All');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavDropdown, setActiveNavDropdown] = useState<string | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0c] text-white shadow-xl border-b border-neutral-800 font-sans">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <button
              onClick={() => onViewChange('new')}
              className="flex items-center gap-1.5 group text-left focus:outline-none hover:opacity-95 transition-opacity py-1"
              title="Jaleswar Premium — Home"
            >
              <HDLogo size="md" theme="dark" showText={true} />
            </button>
          </div>

          {/* Center Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-2 lg:mx-6">
            <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center border border-neutral-700/80 rounded-full bg-[#14161c] hover:border-neutral-500 focus-within:border-[#f75d34] focus-within:ring-2 focus-within:ring-[#f75d34]/20 transition-all shadow-inner overflow-visible">
              
              {/* Category Dropdown Pill */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="flex items-center gap-1.5 pl-4 pr-3 py-2 text-xs font-semibold text-gray-300 hover:text-white border-r border-neutral-700/80 cursor-pointer"
                >
                  <span>{searchCategory}</span>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showCategoryDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-32 bg-[#181a22] rounded-xl shadow-2xl border border-neutral-700 py-1 z-30 animate-in fade-in slide-in-from-top-2">
                    {(['All', 'New Cars', 'Used Cars'] as const).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSearchCategory(cat);
                          setShowCategoryDropdown(false);
                          if (cat === 'Used Cars') {
                            onViewChange('used');
                          } else {
                            onViewChange('new');
                          }
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-white/10 hover:text-[#f75d34] cursor-pointer ${
                          searchCategory === cat ? 'text-[#f75d34] font-bold bg-white/5' : 'text-gray-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="relative flex-1 flex items-center">
                <Search size={16} className="absolute left-3 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search or Ask a Question e.g. Thar, Creta, Budget under 15 Lakh"
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-gray-400 bg-transparent focus:outline-none font-sans"
                />
              </div>

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="pr-3 text-gray-400 hover:text-white text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </form>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Language dropdown */}
            <div className="hidden lg:flex items-center gap-1 text-xs font-medium text-gray-300 hover:text-white cursor-pointer py-1.5 px-2 rounded-lg hover:bg-white/10 transition-colors">
              <Globe size={14} className="text-gray-400" />
              <span>English</span>
              <ChevronDown size={12} className="text-gray-400" />
            </div>

            <div className="h-4 w-px bg-neutral-700 hidden lg:block" />

            {/* Wishlist */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 text-gray-300 hover:text-[#f75d34] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              title="Saved Cars"
            >
              <Heart size={20} />
              {favoritesCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#f75d34] text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Login / Register */}
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 hover:border-[#f75d34] py-1.5 px-3 sm:px-4 rounded-lg transition-all cursor-pointer"
            >
              <User size={17} className="text-gray-300" />
              <span className="hidden sm:inline">Login / Register</span>
            </button>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center border border-neutral-700 rounded-full bg-[#14161c] px-3 py-1.5">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Thar, Creta, EV..."
              className="w-full text-xs text-white placeholder-gray-400 bg-transparent focus:outline-none"
            />
          </form>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="border-t border-neutral-800 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 text-xs font-semibold tracking-wide text-gray-300">
            
            {/* Nav Menu */}
            <nav className="hidden lg:flex items-center space-x-6">
              {[
                { name: 'NEW CARS', view: 'new' as const, sub: ['Explore New Cars', 'Upcoming Cars', 'Electric Cars', 'Popular Brands', 'Car Offers'] },
                { name: 'USED CARS', view: 'used' as const, sub: ['Buy Used Cars (With Filters)', 'Direct Owner Cars', 'Used Cars by City', 'Valuation Calculator'] },
                { name: 'NEWS & REVIEWS', view: null, sub: ['Latest Car News', 'Expert Reviews', 'First Drive Impressions', 'User Opinions'] },
                { name: 'VIDEOS', view: null, sub: ['Walkaround Videos', 'Comparison Tests', 'Visual Stories'] },
              ].map((item) => {
                const isSelected = item.view && activeView === item.view;
                return (
                  <div
                    key={item.name}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveNavDropdown(item.name)}
                    onMouseLeave={() => setActiveNavDropdown(null)}
                  >
                    <button
                      onClick={() => {
                        if (item.view) onViewChange(item.view);
                      }}
                      className={`flex items-center gap-1 transition-colors py-1 cursor-pointer ${
                        isSelected
                          ? 'text-[#f75d34] font-black border-b-2 border-[#f75d34]'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={13} className="text-gray-400 group-hover:rotate-180 transition-transform duration-150" />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {activeNavDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-[#161820] rounded-xl shadow-2xl border border-neutral-700 py-2 z-40 animate-in fade-in duration-150">
                        {item.sub.map((subItem) => (
                          <button
                            key={subItem}
                            onClick={() => {
                              if (item.view) onViewChange(item.view);
                              setActiveNavDropdown(null);
                            }}
                            className="w-full text-left flex items-center justify-between px-4 py-2 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                          >
                            <span>{subItem}</span>
                            <span className="text-[10px] text-gray-500">›</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Quick Festive Tag */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#ff7849] bg-orange-950/40 px-2.5 py-1 rounded-full border border-orange-500/30">
              <Sparkles size={13} className="text-[#ff7849] animate-spin" style={{ animationDuration: '4s' }} />
              <span className="font-bold">Festive Season Deals</span>
              <span className="hidden sm:inline text-gray-300 font-mono">— Up to ₹1.5 Lakh off</span>
            </div>

            {/* City Selector */}
            <button
              onClick={onOpenCityModal}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              <MapPin size={15} className="text-[#f75d34]" />
              <span className="text-gray-400">Select City:</span>
              <span className="font-bold text-white underline decoration-dotted decoration-white/30 underline-offset-4">
                {selectedCity}
              </span>
              <ChevronDown size={13} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="w-4/5 max-w-sm h-full bg-[#101216] text-white p-5 flex flex-col justify-between shadow-2xl border-r border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <HDLogo size="sm" theme="dark" />
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-gray-400 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <button
                  onClick={() => {
                    onOpenCityModal();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#f75d34]" />
                    <span>Current City: <strong className="text-white">{selectedCity}</strong></span>
                  </div>
                  <span className="text-xs text-[#f75d34]">Change</span>
                </button>

                <div className="py-2">
                  {[
                    { name: 'NEW CARS', view: 'new' as const },
                    { name: 'USED CARS', view: 'used' as const },
                    { name: 'NEWS & REVIEWS', view: null },
                    { name: 'VIDEOS', view: null }
                  ].map((nav) => (
                    <div
                      key={nav.name}
                      onClick={() => {
                        if (nav.view) onViewChange(nav.view);
                        setMobileMenuOpen(false);
                      }}
                      className="py-3 border-b border-neutral-800 flex items-center justify-between text-sm font-semibold text-gray-200 hover:text-[#f75d34] cursor-pointer"
                    >
                      <span>{nav.name}</span>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <button
                onClick={() => {
                  onOpenAuthModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-[#f75d34] hover:bg-[#e24c23] text-white rounded-xl font-bold text-sm shadow-md transition-colors"
              >
                Login / Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
