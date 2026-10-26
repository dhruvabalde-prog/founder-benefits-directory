import React from 'react';
import { MapPin, Building2, ChevronDown, Sparkles } from 'lucide-react';
import { ALL_INDIAN_STATES } from '../data/allStates';
import { FilterState } from './MyntraFilterDrawer';

interface GlobalContextBarProps {
  selectedState: string;
  onSelectState: (state: string) => void;
  selectedEntity: string;
  onSelectEntity: (entity: string) => void;
  benefitCategory: string;
  onSelectCategory: (category: string) => void;
}

const ENTITY_OPTIONS = [
  { value: 'all', label: 'All Legal Entities' },
  { value: 'sole_proprietorship', label: 'Sole Proprietorship' },
  { value: 'partnership', label: 'Partnership Firm' },
  { value: 'llp', label: 'Registered LLP' },
  { value: 'pvt_ltd', label: 'Private Limited' },
  { value: 'delaware_c_corp', label: 'Delaware C-Corp (US)' }
];

const CATEGORY_TABS = [
  { value: 'all', label: 'All Benefits' },
  { value: 'grant', label: 'Grants & Capital' },
  { value: 'stipend', label: 'Living Stipends' },
  { value: 'banking', label: 'Zero-Burn Accounts' },
  { value: 'cloud', label: 'Cloud Credits' },
  { value: 'arbitrage', label: 'Tax & Entity Hacks' }
];

export const GlobalContextBar: React.FC<GlobalContextBarProps> = ({
  selectedState,
  onSelectState,
  selectedEntity,
  onSelectEntity,
  benefitCategory,
  onSelectCategory
}) => {
  return (
    <div className="bg-white border border-stone-200/90 rounded-xl p-3 space-y-2.5 shadow-xs">
      {/* 2-Dropdown Matrix (State + Entity) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* State Selector */}
        <div className="relative">
          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-stone-500">
            <MapPin className="w-3.5 h-3.5 text-[#274e37]" />
          </div>
          <select
            value={selectedState}
            onChange={(e) => onSelectState(e.target.value)}
            className="w-full pl-8 pr-7 py-2 bg-stone-50/70 hover:bg-stone-50 border border-stone-200 rounded-lg text-xs font-serif font-medium text-stone-900 appearance-none focus:outline-none focus:border-[#274e37] cursor-pointer"
            aria-label="Select State"
          >
            <option value="all">📍 All States / Central</option>
            {ALL_INDIAN_STATES.filter((s) => s !== 'All States / Central').map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Legal Entity Selector */}
        <div className="relative">
          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-stone-500">
            <Building2 className="w-3.5 h-3.5 text-[#274e37]" />
          </div>
          <select
            value={selectedEntity}
            onChange={(e) => onSelectEntity(e.target.value)}
            className="w-full pl-8 pr-7 py-2 bg-stone-50/70 hover:bg-stone-50 border border-stone-200 rounded-lg text-xs font-serif font-medium text-stone-900 appearance-none focus:outline-none focus:border-[#274e37] cursor-pointer"
            aria-label="Select Legal Entity"
          >
            {ENTITY_OPTIONS.map((ent) => (
              <option key={ent.value} value={ent.value}>
                🏛️ {ent.label}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Horizontal Category Switcher Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-0.5 -mx-1 px-1">
        {CATEGORY_TABS.map((tab) => {
          const isActive = benefitCategory === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => onSelectCategory(tab.value)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap transition-colors shrink-0 ${
                isActive
                  ? 'bg-[#274e37] text-white font-semibold shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
