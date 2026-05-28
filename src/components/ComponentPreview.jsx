export default function ComponentPreview({ type, darkMode }) {
  const base = `w-full h-full flex items-center justify-center`;

  const previews = {
    glass: (
      <div className={base}>
        <div className={`w-36 h-24 rounded-xl border backdrop-blur-sm flex flex-col items-center justify-center gap-1 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/60 border-white/80 shadow-lg'}`}>
          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-violet-500/30' : 'bg-violet-100'}`} />
          <div className={`h-2 w-16 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
          <div className={`h-1.5 w-12 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`} />
        </div>
      </div>
    ),
    gradient: (
      <div className={base}>
        <div className="flex flex-col items-center gap-2">
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-violet-500/40">Click me</button>
          <button className={`px-5 py-2 rounded-lg border text-xs font-semibold ${darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'}`}>Outline</button>
        </div>
      </div>
    ),
    navbar: (
      <div className={base}>
        <div className={`w-40 h-8 rounded-lg border flex items-center justify-between px-2 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className={`w-4 h-4 rounded ${darkMode ? 'bg-violet-500' : 'bg-violet-600'}`} />
          <div className="flex gap-1">
            {[1,2,3].map(i => <div key={i} className={`w-6 h-1.5 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />)}
          </div>
          <div className="w-6 h-4 rounded bg-violet-600" />
        </div>
      </div>
    ),
    table: (
      <div className={`${base} p-3`}>
        <div className={`w-full rounded-lg border overflow-hidden ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className={`flex gap-2 px-2 py-1.5 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            {['Name','Status','Amount'].map(h => <div key={h} className={`flex-1 h-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`} />)}
          </div>
          {[1,2,3].map(r => (
            <div key={r} className={`flex gap-2 px-2 py-1.5 border-t ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <div className={`flex-1 h-1.5 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
              <div className="flex-1 flex"><span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${r===1?'bg-green-100 text-green-700':r===2?'bg-yellow-100 text-yellow-700':'bg-red-100 text-red-700'}`}>{r===1?'Active':r===2?'Pending':'Closed'}</span></div>
              <div className={`flex-1 h-1.5 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
            </div>
          ))}
        </div>
      </div>
    ),
    pricing: (
      <div className={base}>
        <div className={`w-28 rounded-xl border p-3 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="text-[10px] font-semibold text-violet-500 mb-1">PRO</div>
          <div className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>$29<span className="text-[10px] font-normal text-gray-400">/mo</span></div>
          {[1,2,3].map(i => <div key={i} className={`h-1.5 rounded mb-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />)}
          <div className="mt-2 w-full py-1 rounded-md bg-violet-600 text-white text-[9px] font-semibold text-center">Get Started</div>
        </div>
      </div>
    ),
    toast: (
      <div className={`${base} flex flex-col gap-1.5`}>
        {[
          { c: 'bg-green-500', t: 'Success! Changes saved.' },
          { c: 'bg-red-500', t: 'Error! Something went wrong.' },
        ].map(({ c, t }, i) => (
          <div key={i} className={`w-44 flex items-center gap-2 px-3 py-1.5 rounded-lg border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
            <div className={`w-2 h-2 rounded-full ${c} shrink-0`} />
            <span className={`text-[9px] ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t}</span>
          </div>
        ))}
      </div>
    ),
    modal: (
      <div className={base}>
        <div className={`w-36 rounded-xl border p-3 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-lg'}`}>
          <div className={`h-2 w-20 rounded mb-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
          <div className={`h-1.5 w-full rounded mb-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
          <div className={`h-1.5 w-4/5 rounded mb-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
          <div className="flex gap-1">
            <div className={`flex-1 h-5 rounded border text-center ${darkMode ? 'border-gray-600' : 'border-gray-300'}`} />
            <div className="flex-1 h-5 rounded bg-violet-600" />
          </div>
        </div>
      </div>
    ),
    input: (
      <div className={`${base} flex flex-col gap-2`}>
        {['Email address', 'Password'].map((ph, i) => (
          <div key={i} className={`w-40 h-8 rounded-lg border px-3 flex items-center ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
            <span className={`text-[10px] ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{ph}</span>
          </div>
        ))}
      </div>
    ),
    badge: (
      <div className={`${base} flex flex-wrap gap-1.5 justify-center p-4`}>
        {[
          { t: 'New', c: 'bg-violet-100 text-violet-700' },
          { t: 'Popular', c: 'bg-green-100 text-green-700' },
          { t: 'Beta', c: 'bg-yellow-100 text-yellow-700' },
          { t: 'Deprecated', c: 'bg-red-100 text-red-700' },
        ].map(({ t, c }) => (
          <span key={t} className={`px-2 py-0.5 rounded-full text-[9px] font-semibold ${c}`}>{t}</span>
        ))}
      </div>
    ),
    dashboard: (
      <div className={`${base} flex gap-2`}>
        {[
          { label: 'Revenue', v: '$12.4k', t: '+12%', up: true },
          { label: 'Users', v: '3,421', t: '+8%', up: true },
        ].map(({ label, v, t, up }) => (
          <div key={label} className={`flex-1 rounded-lg border p-2 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
            <div className={`text-[9px] mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
            <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{v}</div>
            <div className={`text-[9px] font-medium ${up ? 'text-green-500' : 'text-red-500'}`}>{t}</div>
          </div>
        ))}
      </div>
    ),
    spinner: (
      <div className={`${base} gap-4`}>
        {['w-5 h-5', 'w-7 h-7', 'w-9 h-9'].map((s, i) => (
          <div key={i} className={`${s} rounded-full border-2 border-violet-200 border-t-violet-600 animate-spin`} style={{ animationDuration: `${0.6 + i * 0.2}s` }} />
        ))}
      </div>
    ),
    tooltip: (
      <div className={base}>
        <div className="relative flex flex-col items-center">
          <div className={`px-2 py-1 rounded-lg text-[9px] font-medium text-white bg-gray-900 mb-1.5`}>Hover tooltip ✨</div>
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 mb-2" />
          <button className={`px-3 py-1 rounded-lg border text-[10px] font-medium ${darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'}`}>Hover me</button>
        </div>
      </div>
    ),
  };

  return previews[type] || <div className={base}><span className="text-xs text-gray-400">Preview</span></div>;
}
