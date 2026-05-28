'use client';

import { useRef } from 'react';
import { CATEGORIES } from '@/utils/data';

export default function CategoryTabs({ active, onChange, darkMode }) {
  const scrollRef = useRef(null);

  return (
    <div className={`sticky top-12 z-40 border-b ${darkMode ? 'bg-gray-950/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={scrollRef}
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                active === cat
                  ? 'bg-violet-600 text-white shadow-sm'
                  : darkMode
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
