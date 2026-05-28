import { STATS } from '@/utils/data';

const STEPS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    label: '1. Browse',
    desc: 'Find the perfect component from our curated, high-quality collection.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: '2. Preview',
    desc: 'Interact with the component in live mode. See how it responds before you use it.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    label: '3. Copy',
    desc: 'One-click to copy both React and Tailwind code directly to your clipboard.',
  },
];

export default function HowItWorks({ darkMode }) {
  return (
    <>
      <section className={`py-16 ${darkMode ? 'bg-gray-900/60' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Ship faster, not harder</h2>
          <p className={`text-sm mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            UIKit is designed to get out of your way. Find what you need, see how it looks, and drop it into your codebase.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STEPS.map(({ icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-violet-500 ${darkMode ? 'bg-violet-900/30' : 'bg-violet-50'}`}>
                  {icon}
                </div>
                <div className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{label}</div>
                <p className={`text-xs leading-relaxed text-center ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-14 border-y ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className={`text-3xl font-extrabold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</div>
                <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
