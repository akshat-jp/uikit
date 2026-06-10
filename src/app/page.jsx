'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryTabs from '@/components/CategoryTabs';
import FeaturedSection from '@/components/FeaturedSection';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import FavoritesModal from '@/components/FavoritesModal';
import Footer from '@/components/Footer';
import { getFavorites, toggleFavorite } from '@/utils/favorites';

export default function Home() {
    

  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    try {
      
      const saved = localStorage.getItem('uikit_theme');
      if (saved === 'dark') setDarkMode(true);
    } catch {}
    setFavorites(getFavorites());
  }, []);

  // Persist theme
  useEffect(() => {
    try {
      localStorage.setItem('uikit_theme', darkMode ? 'dark' : 'light');
    } catch {}
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const handleToggleFav = useCallback((item) => {
    const updated = toggleFavorite(item);
    setFavorites([...updated]);
  }, []);

  const scrollToComponents = () => {
    document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        favCount={favorites.length}
        onFavoritesClick={() => setShowFavorites(true)}
      />

      <Hero darkMode={darkMode} onBrowse={scrollToComponents} />

      <CategoryTabs
        active={activeCategory}
        onChange={setActiveCategory}
        darkMode={darkMode}
      />

      <FeaturedSection
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        favorites={favorites}
        onToggleFav={handleToggleFav}
        activeCategory={activeCategory}
        onViewAll={() => setActiveCategory('All')}
      />

      <HowItWorks darkMode={darkMode} />

      <CTASection darkMode={darkMode} onBrowse={scrollToComponents} />

      <Footer darkMode={darkMode} />

      {showFavorites && (
        <FavoritesModal
          darkMode={darkMode}
          favorites={favorites}
          onToggleFav={handleToggleFav}
          onClose={() => setShowFavorites(false)}
        />
      )}
    </div>
  );
}
