import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sparkles, Lightbulb, Bookmark, ArrowUpRight } from 'lucide-react';

interface AppHeaderProps {
  savedCount: number;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ savedCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#070a12]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center space-x-2.5 select-none group">
          <div className="w-7 h-7 rounded-lg bg-white text-slate-950 flex items-center justify-center font-black text-xs group-hover:scale-105 transition-transform">
            FP
          </div>
          <div>
            <div className="text-sm font-extrabold text-white tracking-tight leading-none">
              FounderPerks
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              The Founder Playbook
            </div>
          </div>
        </Link>

        {/* Multipage Nav Links */}
        <nav className="flex items-center space-x-1 sm:space-x-1.5 text-xs font-mono">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-slate-800 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`
            }
          >
            Catalog
          </NavLink>

          <NavLink
            to="/hacks"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`
            }
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Arbitrage</span> Hacks
          </NavLink>

          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`
            }
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Calculator</span>
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-2 sm:px-2.5 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-slate-800 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`
            }
          >
            <Bookmark className="w-3.5 h-3.5" />
            {savedCount > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] bg-slate-700 text-white font-bold rounded">
                {savedCount}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
