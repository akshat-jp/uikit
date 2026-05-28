'use client';

export default function CTASection({ darkMode, onBrowse }) {
  return (
    <section className={`py-20 text-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Build faster with ready-to-use UI.
        </h2>
        <p className={`text-sm mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          No account required. No backend. Just copy and go. Join thousands of
          <br className="hidden sm:block" />
          developers building better interfaces.
        </p>
        <button
          onClick={onBrowse}
          className="inline-flex items-center gap-2 px-8 py-3 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-semibold rounded-xl transition-all shadow-lg shadow-violet-600/30"
        >
          Start Browsing
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
