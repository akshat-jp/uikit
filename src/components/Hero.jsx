'use client';

export default function Hero({ darkMode, onBrowse }) {
  return (
    <section className={`relative overflow-hidden py-20 md:py-28 ${darkMode ? 'dot-grid-dark' : 'dot-grid-light'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-violet-600' : 'bg-violet-400'}`} />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${darkMode ? 'bg-violet-900/40 border-violet-700/50 text-violet-300' : 'bg-violet-50 border-violet-200 text-violet-700'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            10+ New Components Added
          </span>
        </div>

        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-2 animate-slide-up ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Beautiful UI Components.
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-slide-up text-violet-600">
          Ready to Copy.
        </h1>

        <p className={`text-base md:text-lg max-w-xl mx-auto mb-8 animate-fade-in ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Interactive previews, copy-paste code, zero backend.
          <br className="hidden sm:block" />
          Just ship faster with perfectly crafted components.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in">
          <button
            onClick={onBrowse}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-semibold rounded-xl transition-all shadow-lg shadow-violet-600/30"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Browse Components
          </button>
          <button className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 font-semibold rounded-xl border  ${darkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
            View Readme
          </button>
        </div>
      </div>
    </section>
  );
}
