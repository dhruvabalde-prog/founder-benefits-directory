import React from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Bookmark, ChevronDown, SlidersHorizontal, Sparkles } from 'lucide-react';

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
  const navigate = useNavigate();
  const location = useLocation();

  // Detect current active main dimension
  const getCurrentDimension = () => {
    if (location.pathname.startsWith('/learning')) return 'learning';
    if (location.pathname.startsWith('/networking')) return 'networking';
    return 'benefits';
  };

  const handleDimensionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === 'benefits') navigate('/');
    if (val === 'learning') navigate('/learning');
    if (val === 'networking') navigate('/networking');
  };

  return (
    <header className="sticky top-0 z-30 bg-[#fdfdfc]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand Mark + Dimension Dropdown */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2 group select-none">
            <div className="w-8 h-8 rounded-lg bg-[#274e37] text-white flex items-center justify-center font-serif font-bold text-base shadow-xs group-hover:bg-[#1c3827] transition-colors">
              अ
            </div>
            <span className="font-serif font-bold text-lg text-stone-900 tracking-tight hidden xs:inline">
              Artha
            </span>
          </Link>

          {/* Single-Word Dimension Dropdown Switcher */}
          <div className="relative">
            <select
              value={getCurrentDimension()}
              onChange={handleDimensionChange}
              className="pl-2.5 pr-7 py-1.5 bg-[#f2f7f4] border border-[#cce2d5] text-[#274e37] rounded-lg text-xs font-serif font-bold tracking-tight appearance-none cursor-pointer focus:outline-none focus:border-[#274e37]"
              aria-label="Section Selector"
            >
              <option value="benefits">Benefits</option>
              <option value="learning">Learning</option>
              <option value="networking">Networking</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#274e37] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

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
