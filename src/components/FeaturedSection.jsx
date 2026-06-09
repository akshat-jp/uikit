import ComponentCard from './ComponentCard';
import { COMPONENTS } from '@/utils/data';

export default function FeaturedSection({setDarkMode, darkMode, favorites, onToggleFav, activeCategory, onViewAll }) {
  const filtered = activeCategory === 'All'
    ? COMPONENTS
    : COMPONENTS.filter(c => c.category === activeCategory);

  return (
    <section id="components" className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Components</h2>
          <p className={`text-sm mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Premium building blocks for your next project</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onViewAll}
            className={`text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors`}
          >
            View all →
          </button>
          <button className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className={`text-center py-20 rounded-2xl border ${darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
          <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <p className="font-medium">No components found</p>
          <p className="text-sm mt-1">Try a different category</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((component) => (
            <ComponentCard
              key={component.id}
              component={component}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              isFav={favorites.some(f => f.id === component.id)}
              onToggleFav={onToggleFav}
            />
          ))}
        </div>
      )}
    </section>
  );
}
