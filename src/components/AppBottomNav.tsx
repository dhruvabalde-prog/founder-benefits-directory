import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, SlidersHorizontal, Lightbulb, Sparkles, Bookmark } from 'lucide-react';

interface AppBottomNavProps {
  savedCount: number;
  activeFilterCount: number;
  onOpenFilterDrawer: () => void;
}

export const AppBottomNav: React.FC<AppBottomNavProps> = ({
  savedCount,
  activeFilterCount,
  onOpenFilterDrawer
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#fdfdfc]/95 backdrop-blur-md border-t border-stone-200/80 sm:hidden pb-safe">
      <div className="max-w-md mx-auto px-4 py-2 flex items-center justify-around">
        {/* Home / Catalog */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `p-2.5 rounded-lg flex items-center justify-center transition-colors relative min-w-[44px] min-h-[44px] ${
              isActive ? 'text-[#274e37] bg-[#f2f7f4]' : 'text-stone-500 hover:text-stone-900'
            }`
          }
          aria-label="Catalog"
          title="Catalog"
        >
          <LayoutGrid className="w-5 h-5" />
        </NavLink>

        {/* Filter Trigger */}
        <button
          type="button"
          onClick={onOpenFilterDrawer}
          className="p-2.5 rounded-lg flex items-center justify-center transition-colors relative min-w-[44px] min-h-[44px] text-stone-500 hover:text-stone-900 active:bg-stone-100"
          aria-label="Filters"
          title="Filters"
        >
          <SlidersHorizontal className="w-5 h-5" />
          {activeFilterCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[9px] font-bold flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Hacks */}
        <NavLink
          to="/hacks"
          className={({ isActive }) =>
            `p-2.5 rounded-lg flex items-center justify-center transition-colors relative min-w-[44px] min-h-[44px] ${
              isActive ? 'text-[#274e37] bg-[#f2f7f4]' : 'text-stone-500 hover:text-stone-900'
            }`
          }
          aria-label="Arbitrage Hacks"
          title="Arbitrage Hacks"
        >
          <Lightbulb className="w-5 h-5" />
        </NavLink>

        {/* Calculator */}
        <NavLink
          to="/calculator"
          className={({ isActive }) =>
            `p-2.5 rounded-lg flex items-center justify-center transition-colors relative min-w-[44px] min-h-[44px] ${
              isActive ? 'text-[#274e37] bg-[#f2f7f4]' : 'text-stone-500 hover:text-stone-900'
            }`
          }
          aria-label="Stack Calculator"
          title="Stack Calculator"
        >
          <Sparkles className="w-5 h-5" />
        </NavLink>

        {/* Saved */}
        <NavLink
          to="/saved"
          className={({ isActive }) =>
            `p-2.5 rounded-lg flex items-center justify-center transition-colors relative min-w-[44px] min-h-[44px] ${
              isActive ? 'text-[#274e37] bg-[#f2f7f4]' : 'text-stone-500 hover:text-stone-900'
            }`
          }
          aria-label="Saved"
          title="Saved"
        >
          <Bookmark className="w-5 h-5" />
          {savedCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-stone-200 text-stone-800 font-mono text-[9px] font-bold flex items-center justify-center">
              {savedCount}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
