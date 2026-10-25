import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bookmark, Sparkles, Lightbulb, SlidersHorizontal } from 'lucide-react';

interface AppHeaderProps {
  savedCount: number;
  onOpenFilterDrawer?: () => void;
  activeFilterCount?: number;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ 
  savedCount, 
  onOpenFilterDrawer,
  activeFilterCount = 0 
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#fdfdfc]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Brand Mark: Artha */}
        <Link to="/" className="flex items-center space-x-2.5 group select-none">
          <div className="w-8 h-8 rounded-lg bg-[#274e37] text-white flex items-center justify-center font-serif font-bold text-base shadow-xs group-hover:bg-[#1c3827] transition-colors">
            अ
          </div>
          <div className="font-serif font-bold text-lg sm:text-xl text-stone-900 tracking-tight leading-none group-hover:text-[#274e37] transition-colors">
            Artha
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex items-center space-x-1.5 text-xs font-serif font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'text-[#274e37] bg-[#f2f7f4] font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`
            }
          >
            Catalog
          </NavLink>

          <NavLink
            to="/hacks"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'text-[#274e37] bg-[#f2f7f4] font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`
            }
          >
            Playbooks
          </NavLink>

          <NavLink
            to="/tools"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'text-[#274e37] bg-[#f2f7f4] font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`
            }
          >
            Tools
          </NavLink>

          {onOpenFilterDrawer && (
            <button
              type="button"
              onClick={onOpenFilterDrawer}
              className="px-2.5 py-1.5 rounded-md border border-stone-200 text-stone-700 hover:bg-stone-100/80 transition-colors flex items-center space-x-1.5 font-sans text-xs"
              aria-label="Filter"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          )}

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `p-2 rounded-md transition-colors relative ${
                isActive
                  ? 'text-[#274e37] bg-[#f2f7f4]'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`
            }
            aria-label="Bookmarks"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.2 text-[9px] bg-[#274e37] text-white font-mono font-bold rounded-full">
                {savedCount}
              </span>
            )}
          </NavLink>
        </nav>

        {/* Mobile quick actions (Filters trigger + Saved) */}
        <div className="flex sm:hidden items-center space-x-1.5">
          {onOpenFilterDrawer && (
            <button
              type="button"
              onClick={onOpenFilterDrawer}
              className="p-2 rounded-lg border border-stone-200 text-stone-700 active:bg-stone-100 transition-colors relative"
              aria-label="Filter"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[9px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          )}

          <NavLink
            to="/saved"
            className="p-2 rounded-lg text-stone-700 active:bg-stone-100 relative"
            aria-label="Bookmarks"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[9px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};
