import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, Lightbulb, Sparkles } from 'lucide-react';

export const AppBottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#fdfdfc]/95 backdrop-blur-md border-t border-stone-200/80 sm:hidden pb-safe">
      <div className="max-w-xs mx-auto px-6 py-2.5 flex items-center justify-around">
        {/* Catalog */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `p-2.5 rounded-xl flex items-center justify-center transition-colors relative min-w-[44px] min-h-[44px] ${
              isActive ? 'text-[#274e37] bg-[#f2f7f4]' : 'text-stone-500 hover:text-stone-900 active:bg-stone-100'
            }`
          }
          aria-label="Catalog"
          title="Catalog"
        >
          <LayoutGrid className="w-5 h-5" />
        </NavLink>

        {/* Playbooks */}
        <NavLink
          to="/hacks"
          className={({ isActive }) =>
            `p-2.5 rounded-xl flex items-center justify-center transition-colors relative min-w-[44px] min-h-[44px] ${
              isActive ? 'text-[#274e37] bg-[#f2f7f4]' : 'text-stone-500 hover:text-stone-900 active:bg-stone-100'
            }`
          }
          aria-label="Playbooks"
          title="Playbooks"
        >
          <Lightbulb className="w-5 h-5" />
        </NavLink>

        {/* Tools */}
        <NavLink
          to="/tools"
          className={({ isActive }) =>
            `p-2.5 rounded-xl flex items-center justify-center transition-colors relative min-w-[44px] min-h-[44px] ${
              isActive ? 'text-[#274e37] bg-[#f2f7f4]' : 'text-stone-500 hover:text-stone-900 active:bg-stone-100'
            }`
          }
          aria-label="Founder Tools"
          title="Founder Tools"
        >
          <Sparkles className="w-5 h-5" />
        </NavLink>
      </div>
    </nav>
  );
};
