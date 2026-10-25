import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bookmark, Sparkles, Lightbulb } from 'lucide-react';

interface AppHeaderProps {
  savedCount: number;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ savedCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fdfdfc]/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
        {/* Brand Mark like guptadeepak.com */}
        <Link to="/" className="flex items-center space-x-3 group select-none">
          <div className="w-8 h-8 rounded-md bg-[#274e37] text-white flex items-center justify-center font-serif font-bold text-sm shadow-sm group-hover:bg-[#1c3827] transition-colors">
            FP
          </div>
          <div>
            <div className="text-base font-serif font-bold text-stone-900 tracking-tight leading-none group-hover:text-[#274e37] transition-colors">
              FounderPerks
            </div>
            <div className="text-[11px] text-stone-500 font-sans mt-0.5 font-normal hidden sm:block">
              Curated Schemes, Banking & Founder Playbooks
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-1 sm:space-x-2 text-xs font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-2.5 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'text-[#274e37] bg-[#f2f7f4] font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`
            }
          >
            Index
          </NavLink>

          <NavLink
            to="/hacks"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-2.5 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'text-[#274e37] bg-[#f2f7f4] font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`
            }
          >
            <Lightbulb className="w-3.5 h-3.5 text-stone-500" />
            <span>Hacks</span>
          </NavLink>

          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-2.5 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'text-[#274e37] bg-[#f2f7f4] font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`
            }
          >
            <Sparkles className="w-3.5 h-3.5 text-stone-500" />
            <span className="hidden sm:inline">Stack</span> Calculator
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-2.5 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'text-[#274e37] bg-[#f2f7f4] font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`
            }
            title="Saved Items"
          >
            <Bookmark className="w-3.5 h-3.5 text-stone-500" />
            {savedCount > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] bg-stone-200 text-stone-700 font-mono font-bold rounded-full">
                {savedCount}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
