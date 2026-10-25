import React from 'react';
import { 
  Compass, 
  Sparkles, 
  AlertTriangle, 
  TableProperties, 
  BookmarkCheck, 
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  currentView: 'directory' | 'wizard' | 'nuances' | 'matrix' | 'bookmarks';
  setCurrentView: (view: 'directory' | 'wizard' | 'nuances' | 'matrix' | 'bookmarks') => void;
  bookmarksCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  bookmarksCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setCurrentView('directory')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <span className="text-xl">🚀</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent">
                  FounderPerks
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 inline mr-1" />
                  India + Global
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Schemes • Banking • SaaS Credits • Nuances Guide
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setCurrentView('directory')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'directory'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Directory</span>
            </button>

            <button
              onClick={() => setCurrentView('wizard')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'wizard'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30 font-semibold'
                  : 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 border border-emerald-500/30'
              }`}
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="hidden sm:inline">What Becomes Free?</span>
              <span className="sm:hidden">Calculator</span>
            </button>

            <button
              onClick={() => setCurrentView('nuances')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'nuances'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline">Nuances & Traps</span>
              <span className="md:hidden">Nuances</span>
            </button>

            <button
              onClick={() => setCurrentView('matrix')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'matrix'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <TableProperties className="w-4 h-4" />
              <span className="hidden md:inline">Comparison Matrix</span>
              <span className="md:hidden">Matrix</span>
            </button>

            <button
              onClick={() => setCurrentView('bookmarks')}
              className={`relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'bookmarks'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
              title="Saved items"
            >
              <BookmarkCheck className="w-4 h-4 text-indigo-400" />
              <span className="hidden sm:inline">Saved</span>
              {bookmarksCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-xs font-bold bg-indigo-500 text-white rounded-full">
                  {bookmarksCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
