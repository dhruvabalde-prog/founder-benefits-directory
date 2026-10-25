import React from 'react';
import { Compass, AlertTriangle, Bookmark, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentView: 'directory' | 'nuances' | 'bookmarks';
  setCurrentView: (view: 'directory' | 'nuances' | 'bookmarks') => void;
  bookmarksCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  bookmarksCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        {/* Brand */}
        <div 
          onClick={() => setCurrentView('directory')}
          className="flex items-center space-x-2.5 cursor-pointer select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm shadow-md shadow-indigo-600/30">
            🚀
          </div>
          <div>
            <div className="text-base font-extrabold text-white tracking-tight leading-none">
              FounderPerks
            </div>
            <div className="text-[10px] text-slate-400 font-medium">
              Schemes • Banking • Free Credits
            </div>
          </div>
        </div>

        {/* Minimal Navigation Pills */}
        <nav className="flex items-center space-x-1 text-xs">
          <button
            onClick={() => setCurrentView('directory')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              currentView === 'directory'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Directory
          </button>

          <button
            onClick={() => setCurrentView('nuances')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              currentView === 'nuances'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Nuances</span>
          </button>

          <button
            onClick={() => setCurrentView('bookmarks')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              currentView === 'bookmarks'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved</span>
            {bookmarksCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] bg-indigo-500 text-white font-bold rounded-full">
                {bookmarksCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
