import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Bookmark, SlidersHorizontal, ArrowLeft } from 'lucide-react';

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

  const isBenefitsRoot = location.pathname === '/';
  const isLearning = location.pathname.startsWith('/learning');
  const isNetworking = location.pathname.startsWith('/networking');
  const isHacks = location.pathname.startsWith('/hacks');
  const isTools = location.pathname.startsWith('/tools');
  const isSaved = location.pathname.startsWith('/saved');
  const isDetail = location.pathname.startsWith('/benefit/');

  const getCurrentSectionTitle = () => {
    if (isLearning) return 'Learning';
    if (isNetworking) return 'Networking';
    if (isHacks) return 'Playbooks';
    if (isTools) return 'Tools';
    if (isSaved) return 'Saved';
    if (isDetail) return 'Blueprint';
    return 'Benefits';
  };

  return (
    <header className="sticky top-0 z-30 bg-[#fdfdfc]/98 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand & Section Indicator */}
        <div className="flex items-center space-x-2.5">
          {(isLearning || isNetworking || isDetail) && (
            <Link
              to="/"
              className="p-1.5 -ml-1 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Back to Benefits"
              title="Back to Benefits"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
          )}

          <Link to="/" className="flex items-center space-x-2 group select-none">
            <div className="w-8 h-8 rounded-lg bg-[#274e37] text-white flex items-center justify-center font-serif font-bold text-base shadow-xs group-hover:bg-[#1c3827] transition-colors">
              अ
            </div>
            <span className="font-serif font-bold text-lg text-stone-900 tracking-tight">
              Artha
            </span>
          </Link>

          <span className="text-stone-300 font-mono text-xs">/</span>

          {/* Section Indicator */}
          <span className="font-serif font-bold text-xs sm:text-sm text-[#274e37] bg-[#f2f7f4] px-2.5 py-0.5 rounded-md border border-[#cce2d5]">
            {getCurrentSectionTitle()}
          </span>
        </div>

        {/* Desktop Quick Links */}
        <nav className="hidden sm:flex items-center space-x-2 text-xs font-serif font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-2.5 py-1 rounded-md transition-colors ${
                isActive ? 'text-[#274e37] bg-[#f2f7f4] font-bold' : 'text-stone-600 hover:text-stone-900'
              }`
            }
          >
            Schemes
          </NavLink>
          <NavLink
            to="/hacks"
            className={({ isActive }) =>
              `px-2.5 py-1 rounded-md transition-colors ${
                isActive ? 'text-[#274e37] bg-[#f2f7f4] font-bold' : 'text-stone-600 hover:text-stone-900'
              }`
            }
          >
            Playbooks
          </NavLink>
          <NavLink
            to="/tools"
            className={({ isActive }) =>
              `px-2.5 py-1 rounded-md transition-colors ${
                isActive ? 'text-[#274e37] bg-[#f2f7f4] font-bold' : 'text-stone-600 hover:text-stone-900'
              }`
            }
          >
            Tools
          </NavLink>
          <span className="text-stone-300">|</span>
          <NavLink
            to="/learning"
            className={({ isActive }) =>
              `px-2.5 py-1 rounded-md transition-colors ${
                isActive ? 'text-[#274e37] bg-[#f2f7f4] font-bold' : 'text-stone-600 hover:text-stone-900'
              }`
            }
          >
            Learning
          </NavLink>
          <NavLink
            to="/networking"
            className={({ isActive }) =>
              `px-2.5 py-1 rounded-md transition-colors ${
                isActive ? 'text-[#274e37] bg-[#f2f7f4] font-bold' : 'text-stone-600 hover:text-stone-900'
              }`
            }
          >
            Networking
          </NavLink>
        </nav>

        {/* Right Actions: Filter trigger + Saved Bookmarks */}
        <div className="flex items-center space-x-1.5">
          {isBenefitsRoot && onOpenFilterDrawer && (
            <button
              type="button"
              onClick={onOpenFilterDrawer}
              className={`p-2 rounded-lg border transition-colors flex items-center space-x-1.5 font-sans text-xs ${
                activeFilterCount > 0
                  ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
              aria-label="Open Filters"
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
