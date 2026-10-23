import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CarSection } from './components/CarSection';
import { BrandSection } from './components/BrandSection';
import { VisualStories } from './components/VisualStories';
import { ComparisonSection } from './components/ComparisonSection';
import { UsedCarsCities } from './components/UsedCarsCities';
import { NewsSection, CommercialBanner } from './components/NewsSection';
import { Footer } from './components/Footer';
import { OfferModal } from './components/OfferModal';
import { CityModal } from './components/CityModal';
import { AlertModal } from './components/AlertModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { AuthModal } from './components/AuthModal';
import { UsedCarsFilterView } from './components/UsedCarsFilterView';
import { LogoModal } from './components/LogoModal';

import {
  MOST_SEARCHED_CARS,
  FESTIVE_OFFERS_CARS,
  ELECTRIC_CARS,
  UPCOMING_CARS,
  LATEST_CARS
} from './data/carsData';
import { Car } from './types';

export function App() {
  // Global App States
  const [activeView, setActiveView] = useState<'new' | 'used'>('new');
  const [selectedCity, setSelectedCity] = useState('Cuttack');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jj_favorites');
      return saved ? JSON.parse(saved) : ['tata-sierra', 'hyundai-creta'];
    } catch {
      return ['tata-sierra', 'hyundai-creta'];
    }
  });

  // Most Searched Category Tabs
  const [activeCategory, setActiveCategory] = useState('SUV');

  // Modals
  const [offerModalCar, setOfferModalCar] = useState<Car | null>(null);
  const [offerCarFallback, setOfferCarFallback] = useState<string>('');
  const [alertModalCar, setAlertModalCar] = useState<Car | null>(null);
  const [cityModalOpen, setCityModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false);
  const [logoModalOpen, setLogoModalOpen] = useState(false);

  // Search Toast / notification
  const [searchNotification, setSearchNotification] = useState<string | null>(null);

  // Sync favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('jj_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const toggleFavorite = (car: Car) => {
    setFavorites((prev) => {
      const exists = prev.includes(car.id);
      if (exists) {
        return prev.filter((id) => id !== car.id);
      } else {
        return [...prev, car.id];
      }
    });
  };

  const handleOpenOfferModal = (carOrName: Car | string) => {
    if (typeof carOrName === 'string') {
      setOfferModalCar(null);
      setOfferCarFallback(carOrName);
    } else {
      setOfferModalCar(carOrName);
      setOfferCarFallback(carOrName.name);
    }
  };

  const handleAlertMe = (car: Car) => {
    setAlertModalCar(car);
  };

  const handleSearch = (query: string) => {
    setSearchNotification(`Searching Jaleswar Premium inventory for: "${query}"...`);
    setTimeout(() => {
      setSearchNotification(null);
      if (activeView === 'new') {
        const element = document.getElementById('most-searched-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 1500);
  };

  const handleSearchFilter = (filters: { type: 'new' | 'used'; mode: 'budget' | 'brand'; budget: string; vehicleType: string }) => {
    if (filters.type === 'used') {
      setActiveView('used');
      setSearchNotification(`Switched to Used Cars Filter View for budget: ${filters.budget}`);
      setTimeout(() => setSearchNotification(null), 2000);
      return;
    }

    setSearchNotification(
      `Filtering ${filters.type === 'new' ? 'New Cars' : 'Used Cars'} (${filters.vehicleType}) in budget range: ${filters.budget}`
    );
    setTimeout(() => {
      setSearchNotification(null);
      const target = document.getElementById('most-searched-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  };

  // Compile list of full car objects for favorites drawer
  const allCarsList = [
    ...MOST_SEARCHED_CARS,
    ...FESTIVE_OFFERS_CARS,
    ...ELECTRIC_CARS,
    ...UPCOMING_CARS,
    ...LATEST_CARS
  ];
  const favoriteCars = allCarsList.filter((c) => favorites.includes(c.id));

  // Category filtering simulation for "The most searched cars"
  const filteredMostSearched = MOST_SEARCHED_CARS.filter((c) => {
    if (activeCategory === 'SUV') return true;
    if (activeCategory === 'Electric') return c.fuelTypes?.includes('Electric');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1e2229] font-sans flex flex-col selection:bg-[#f75d34] selection:text-white">

      {/* Top Header */}
      <Header
        selectedCity={selectedCity}
        onOpenCityModal={() => setCityModalOpen(true)}
        onOpenAuthModal={() => setAuthModalOpen(true)}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setFavoritesDrawerOpen(true)}
        onSearch={handleSearch}
        activeView={activeView}
        onViewChange={(view) => setActiveView(view)}
      />

      {/* View Switcher Bar */}
      <div className="bg-white border-b border-gray-200 py-2.5 px-4 sticky top-28 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('new')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${activeView === 'new'
                  ? 'bg-[#1e2229] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
                }`}
            >
              <span>🚗 New Cars Portal</span>
            </button>
            <button
              onClick={() => setActiveView('used')}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${activeView === 'used'
                  ? 'bg-[#f75d34] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
                }`}
            >
              <span>🔍 Used Cars & Filters</span>
              <span className="bg-black/20 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                As In Screenshot
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
            <button
              onClick={() => setLogoModalOpen(true)}
              className="px-3 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
              title="View & Download 8K Official HD Brand Logo"
            >
              <span>✨ Official HD Logo</span>
            </button>

            <div className="hidden sm:flex items-center gap-1.5">
              <span>Location:</span>
              <button
                onClick={() => setCityModalOpen(true)}
                className="text-[#f75d34] font-bold hover:underline"
              >
                {selectedCity}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Search Notification Toast */}
      {searchNotification && (
        <div className="fixed top-24 right-4 z-50 bg-gray-900 text-white px-4 py-2.5 rounded-xl shadow-float text-xs font-semibold flex items-center gap-2 border border-gray-700 animate-in fade-in slide-in-from-top-2">
          <div className="w-2 h-2 rounded-full bg-[#f75d34] animate-ping" />
          <span>{searchNotification}</span>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-1 pb-16">

        {activeView === 'used' ? (
          /* ================= USED CARS FILTER VIEW (AS IN USER SCREENSHOT) ================= */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <UsedCarsFilterView
              selectedCity={selectedCity}
              onOpenCityModal={() => setCityModalOpen(true)}
            />
          </motion.div>
        ) : (
          /* ================= NEW CARS HOME PORTAL ================= */
          <>
            {/* Section: Hero Banner & Search Filter Box */}
            <Hero
              onSearchFilter={handleSearchFilter}
              onOpenOfferModal={(name) => handleOpenOfferModal(name)}
            />

            {/* Section: The most searched cars */}
            <motion.div
              id="most-searched-section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <CarSection
                title="The most searched cars"
                tabs={['SUV', 'Hatchback', 'Sedan', 'MUV', 'Luxury']}
                activeTab={activeCategory}
                onTabChange={(tab) => setActiveCategory(tab)}
                cars={filteredMostSearched}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onOpenOffer={handleOpenOfferModal}
                viewAllLink={{
                  text: `View All ${activeCategory} Cars`,
                  onClick: () => handleOpenOfferModal(`${activeCategory} Collection`)
                }}
              />
            </motion.div>

            {/* Section: Get Festive Offers for Popular Cars */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <CarSection
                title="Get Festive Offers for Popular Cars"
                cars={FESTIVE_OFFERS_CARS}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onOpenOffer={handleOpenOfferModal}
              />
            </motion.div>

            {/* Section: Electric cars */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <CarSection
                title="Electric cars"
                cars={ELECTRIC_CARS}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onOpenOffer={handleOpenOfferModal}
                viewAllLink={{
                  text: 'View All Electric Cars',
                  onClick: () => handleOpenOfferModal('Electric Cars Portfolio')
                }}
              />
            </motion.div>

            {/* Section: Upcoming cars */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <CarSection
                title="Upcoming cars"
                cars={UPCOMING_CARS}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onOpenOffer={handleOpenOfferModal}
                onAlertMe={handleAlertMe}
                viewAllLink={{
                  text: 'View All Upcoming Cars',
                  onClick: () => handleAlertMe(UPCOMING_CARS[0])
                }}
              />
            </motion.div>

            {/* Section: Latest cars */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <CarSection
                title="Latest cars"
                cars={LATEST_CARS}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onOpenOffer={handleOpenOfferModal}
              />
            </motion.div>

            {/* Section: Popular brands */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <BrandSection
                onSelectBrand={(brand) => {
                  setSearchNotification(`Browsing latest models from ${brand}`);
                  setTimeout(() => setSearchNotification(null), 2000);
                }}
              />
            </motion.div>

            {/* Ad Commercial Banner */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <CommercialBanner />
            </motion.div>

            {/* Section: Car visual stories */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <VisualStories />
            </motion.div>

            {/* Section: Compare to buy the right car */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <ComparisonSection />
            </motion.div>

            {/* Section: Get trusted used cars nearby */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <UsedCarsCities
                selectedCity={selectedCity}
                onSelectCity={(city) => {
                  setSelectedCity(city);
                  setActiveView('used');
                  setSearchNotification(`Showing used cars in ${city}`);
                  setTimeout(() => setSearchNotification(null), 2500);
                }}
              />
            </motion.div>

            {/* Section: News to help choose your car */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <NewsSection />
            </motion.div>
          </>
        )}

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      {(offerModalCar || offerCarFallback) && (
        <OfferModal
          car={offerModalCar}
          carNameFallback={offerCarFallback}
          onClose={() => {
            setOfferModalCar(null);
            setOfferCarFallback('');
          }}
          selectedCity={selectedCity}
        />
      )}

      {cityModalOpen && (
        <CityModal
          currentCity={selectedCity}
          onSelectCity={(city) => setSelectedCity(city)}
          onClose={() => setCityModalOpen(false)}
        />
      )}

      {alertModalCar && (
        <AlertModal
          car={alertModalCar}
          onClose={() => setAlertModalCar(null)}
        />
      )}

      <FavoritesDrawer
        isOpen={favoritesDrawerOpen}
        onClose={() => setFavoritesDrawerOpen(false)}
        favorites={favoriteCars}
        onRemoveFavorite={(id) => toggleFavorite({ id } as Car)}
        onOpenOffer={handleOpenOfferModal}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <LogoModal
        isOpen={logoModalOpen}
        onClose={() => setLogoModalOpen(false)}
      />

    </div>
  );
}

export default App;
