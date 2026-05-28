'use client';

import { useState } from 'react';

const NAV_LINKS = ['Components', 'Categories', 'Favorites', 'More'];

export default function Navbar({ darkMode, setDarkMode, favCount, onFavoritesClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  return (
    <nav className={`sticky top-0 z-50 border-b ${darkMode ? 'bg-gray-950/90 border-gray-800' : 'bg-white/90 border-gray-200'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 font-bold text-base shrink-0">
            <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-black text-white bg-violet-600`}>U</span>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>UIKit</span>
          </a>
          <div className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={link === 'Favorites' ? onFavoritesClick : undefined}
                className={`text-sm font-medium relative transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {link}
                {link === 'Favorites' && favCount > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-violet-600 rounded-full">{favCount}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className={`hidden sm:flex items-center gap-2 px-3 h-8 rounded-lg text-sm ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'} transition-all`}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              placeholder="Search components..."
              className={`bg-transparent outline-none w-40 text-sm ${darkMode ? 'placeholder-gray-500 text-white' : 'placeholder-gray-400 text-gray-900'}`}
            />
            <kbd className={`text-[10px] px-1 py-0.5 rounded font-mono ${darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'}`}>⌘K</kbd>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {darkMode ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7z"/><path d="M12 7a5 5 0 100 10A5 5 0 0012 7z"/></svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            )}
          </button>

          {/* CTA */}
          <button className="hidden sm:flex items-center gap-1.5 px-3 h-8 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Browse Components
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden border-t px-4 py-3 space-y-2 ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}>
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={link === 'Favorites' ? () => { onFavoritesClick(); setMenuOpen(false); } : undefined}
              className={`block w-full text-left py-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {link} {link === 'Favorites' && favCount > 0 && `(${favCount})`}
            </button>
          ))}
          <div className={`flex items-center gap-2 px-3 h-9 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input placeholder="Search..." className={`bg-transparent outline-none text-sm flex-1 ${darkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}`} />
          </div>
        </div>
      )}
    </nav>
  );
}
