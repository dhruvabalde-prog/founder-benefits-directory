import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Bookmark, SlidersHorizontal } from 'lucide-react';

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
  const location = useLocation();

  const getCurrentTitle = () => {
    if (location.pathname.startsWith('/learning')) return 'Learning';
    if (location.pathname.startsWith('/networking')) return 'Networking';
    if (location.pathname.startsWith('/hacks')) return 'Playbooks';
    if (location.pathname.startsWith('/tools')) return 'Tools';
    if (location.pathname.startsWith('/saved')) return 'Saved';
    return 'Benefits';
  };

  const isBenefitsPage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-30 bg-[#fdfdfc]/98 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand Mark + Active Hub Heading */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2.5 group select-none">
            <div className="w-8 h-8 rounded-lg bg-[#274e37] text-white flex items-center justify-center font-serif font-bold text-base shadow-xs group-hover:bg-[#1c3827] transition-colors">
              अ
            </div>
            <span className="font-serif font-bold text-lg text-stone-900 tracking-tight">
              Artha
            </span>
          </Link>

          <span className="text-stone-300 font-mono text-xs">/</span>

          {/* Clean Single-Word Active Hub Display */}
          <span className="font-serif font-bold text-sm text-[#274e37] bg-[#f2f7f4] px-2.5 py-0.5 rounded-md border border-[#cce2d5]">
            {getCurrentTitle()}
          </span>
        </div>

        {/* Right Actions: Filter trigger (on benefits) + Saved Bookmarks */}
        <div className="flex items-center space-x-1.5">
          {isBenefitsPage && onOpenFilterDrawer && (
            <button
              type="button"
              onClick={onOpenFilterDrawer}
              className={`p-2 rounded-lg border transition-colors flex items-center space-x-1.5 font-sans text-xs ${
                activeFilterCount > 0
                  ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]'
                  : 'border-stone-200 text-stone-700 hover:bg-stone-100/80'
              }`}
              aria-label="Filter"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[9px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          )}

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `p-2 rounded-lg transition-colors relative border ${
                isActive
                  ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]'
                  : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900'
              }`
            }
            aria-label="Bookmarks"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#274e37] text-white font-mono text-[9px] font-bold rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};
