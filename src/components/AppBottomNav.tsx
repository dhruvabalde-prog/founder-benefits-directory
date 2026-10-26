import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, Lightbulb, Sparkles } from 'lucide-react';

export const AppBottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#fdfdfc]/98 backdrop-blur-md border-t border-stone-200/90 shadow-lg pb-safe">
      <div className="max-w-md mx-auto px-6 py-2 flex items-center justify-between">
        {/* 1. Catalog / Schemes */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex-1 py-1 px-2 rounded-xl flex flex-col items-center justify-center transition-all min-h-[46px] ${
              isActive 
                ? 'text-[#274e37] font-bold' 
                : 'text-stone-400 hover:text-stone-700 active:text-stone-900'
            }`
          }
          aria-label="Schemes"
        >
          {({ isActive }) => (
            <>
              <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-[#f2f7f4]' : ''}`}>
                <LayoutGrid className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-serif tracking-tight mt-0.5">
                Schemes
              </span>
            </>
          )}
        </NavLink>

        {/* 2. Playbooks / Hacks */}
        <NavLink
          to="/hacks"
          className={({ isActive }) =>
            `flex-1 py-1 px-2 rounded-xl flex flex-col items-center justify-center transition-all min-h-[46px] ${
              isActive 
                ? 'text-[#274e37] font-bold' 
                : 'text-stone-400 hover:text-stone-700 active:text-stone-900'
            }`
          }
          aria-label="Playbooks"
        >
          {({ isActive }) => (
            <>
              <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-[#f2f7f4]' : ''}`}>
                <Lightbulb className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-serif tracking-tight mt-0.5">
                Playbooks
              </span>
            </>
          )}
        </NavLink>

        {/* 3. Tools / Zero-Burn */}
        <NavLink
          to="/tools"
          className={({ isActive }) =>
            `flex-1 py-1 px-2 rounded-xl flex flex-col items-center justify-center transition-all min-h-[46px] ${
              isActive 
                ? 'text-[#274e37] font-bold' 
                : 'text-stone-400 hover:text-stone-700 active:text-stone-900'
            }`
          }
          aria-label="Tools"
        >
          {({ isActive }) => (
            <>
              <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-[#f2f7f4]' : ''}`}>
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-serif tracking-tight mt-0.5">
                Tools
              </span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
