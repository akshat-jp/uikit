export default function Footer({ darkMode }) {
  return (
    <footer className={`border-t py-8 ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-black text-white bg-violet-600">U</span>
          <span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>UIKit</span>
          <span className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>— Beautiful components, ready to ship.</span>
        </div>
        <div className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
          © 2025 UIKit. Made with ❤️ for developers.
        </div>
      </div>
    </footer>
  );
}
