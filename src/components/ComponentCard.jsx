'use client';

import { useState } from 'react';
import ComponentPreview from './ComponentPreview';

export default function ComponentCard({setDarkMode, component, darkMode, isFav, onToggleFav }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const code = component.code || `// ${component.name} Component\n// Copy from UIKit — uikit.dev`;
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className={`group rounded-2xl border flex flex-col overflow-hidden transition-all duration-200 hover:shadow-xl animate-fade-in ${
      darkMode
        ? 'bg-gray-900 border-gray-800 hover:border-violet-700/60 hover:shadow-violet-900/20'
        : 'bg-white border-gray-200 hover:border-violet-300 hover:shadow-violet-100'
    }`}>
      {/* Preview area */}
      <div className={`relative h-36 ${darkMode ? 'card-preview-dark bg-gray-800/50' : 'card-preview bg-gray-50'} overflow-hidden`}>
        <ComponentPreview   type={component.preview}  darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Bookmark / favorite button */}
        <button
          onClick={() => onToggleFav(component)}
          className={`absolute top-2 right-2 w-7 h-7 rounded-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 ${
            isFav
              ? 'opacity-100 bg-violet-600 text-white'
              : darkMode
              ? 'bg-gray-700 text-gray-400 hover:text-white hover:bg-violet-600'
              : 'bg-white text-gray-400 hover:text-violet-600 hover:bg-violet-50 shadow-sm border border-gray-200'
          }`}
          title={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg className="w-3.5 h-3.5" fill={isFav ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Preview pill */}
        <span className={`absolute bottom-2 left-2 text-[9px] font-medium px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-500 border border-gray-200 shadow-sm'}`}>
          Preview
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className={`font-semibold text-sm mb-0.5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{component.name}</h3>
        <p className={`text-xs leading-relaxed mb-3 flex-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{component.description}</p>

        {/* Tags */}
        <div className="flex gap-1 mb-3">
          {component.tags.map((tag) => (
            <span key={tag} className={`px-2 py-0.5 rounded text-[10px] font-medium ${
              darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
            }`}>{tag}</span>
          ))}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            copied
              ? 'bg-green-600 border-green-600 text-white'
              : darkMode
              ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600'
              : 'border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              Copy Code
            </>
          )}
        </button>
      </div>
    </div>
  );
}
