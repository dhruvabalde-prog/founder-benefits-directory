import React from 'react';
import { Compass, Lightbulb, AlertTriangle, Bookmark } from 'lucide-react';

interface NavbarProps {
  currentView: 'directory' | 'hacks' | 'nuances' | 'bookmarks';
  setCurrentView: (view: 'directory' | 'hacks' | 'nuances' | 'bookmarks') => void;
  bookmarksCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  bookmarksCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Minimal Brand */}
        <div 
          onClick={() => setCurrentView('directory')}
          className="flex items-center space-x-2 cursor-pointer select-none"
        >
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-xs shadow-sm font-bold text-white">
            FP
          </div>
          <div className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-none">
            FounderPerks
          </div>
        </div>

        {/* Navigation Tabs (Minimal text, clean) */}
        <nav className="flex items-center space-x-1 text-xs">
          <button
            onClick={() => setCurrentView('directory')}
            className={`px-2.5 py-1.5 rounded-lg font-semibold transition-all ${
              currentView === 'directory'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Directory
          </button>

          <button
            onClick={() => setCurrentView('hacks')}
            className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg font-semibold transition-all ${
              currentView === 'hacks'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>Hacks</span>
          </button>

          <button
            onClick={() => setCurrentView('nuances')}
            className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg font-semibold transition-all ${
              currentView === 'nuances'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Traps</span>
          </button>

          <button
            onClick={() => setCurrentView('bookmarks')}
            className={`flex items-center space-x-1 px-2 py-1.5 rounded-lg font-semibold transition-all ${
              currentView === 'bookmarks'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            {bookmarksCount > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] bg-indigo-500 text-white font-bold rounded-full">
                {bookmarksCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
