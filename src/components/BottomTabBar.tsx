import React from 'react';
import { 
  Compass, 
  Sparkles, 
  TableProperties, 
  AlertTriangle, 
  BookmarkCheck
} from 'lucide-react';

interface BottomTabBarProps {
  currentView: 'directory' | 'wizard' | 'matrix' | 'nuances' | 'bookmarks';
  setCurrentView: (view: 'directory' | 'wizard' | 'matrix' | 'nuances' | 'bookmarks') => void;
  bookmarksCount: number;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  currentView,
  setCurrentView,
  bookmarksCount
}) => {
  const tabs = [
    {
      id: 'directory',
      label: 'Explore',
      icon: <Compass className="w-5 h-5" />,
      badge: null
    },
    {
      id: 'wizard',
      label: 'Free Stack',
      icon: <Sparkles className="w-5 h-5" />,
      badge: 'PRO'
    },
    {
      id: 'matrix',
      label: 'Matrix',
      icon: <TableProperties className="w-5 h-5" />,
      badge: null
    },
    {
      id: 'nuances',
      label: 'Traps',
      icon: <AlertTriangle className="w-5 h-5" />,
      badge: null
    },
    {
      id: 'bookmarks',
      label: 'My Perks',
      icon: <BookmarkCheck className="w-5 h-5" />,
      badge: bookmarksCount > 0 ? bookmarksCount : null
    }
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none pb-safe">
      <div className="max-w-md mx-auto px-4 pb-3 sm:pb-4 pointer-events-auto">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/70 shadow-2xl shadow-black/80 rounded-2xl sm:rounded-3xl p-1.5 flex items-center justify-around">
          {tabs.map((tab) => {
            const isActive = currentView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentView(tab.id as any)}
                className={`relative flex flex-col items-center justify-center py-2 px-3 sm:px-4 rounded-xl sm:rounded-2xl transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-indigo-600/90 shadow-md shadow-indigo-600/30 scale-105' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <span className="absolute -top-1 w-1 h-1 rounded-full bg-emerald-400 shadow-glow" />
                )}

                <div className="relative">
                  {tab.icon}
                  {tab.badge && (
                    <span className="absolute -top-1.5 -right-2.5 px-1.5 py-0.2 text-[9px] font-black rounded-full bg-emerald-500 text-slate-950">
                      {tab.badge}
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-semibold mt-1 tracking-tight">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
