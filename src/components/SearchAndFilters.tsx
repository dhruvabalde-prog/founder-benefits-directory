import React from 'react';
import { Search, X, MapPin } from 'lucide-react';
import { CategoryType } from '../types';
import { STATES_LIST } from '../data/matrix';

interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  totalResults: number;
}

const CATEGORY_TABS: { id: CategoryType; label: string; icon: string }[] = [
  { id: 'all', label: 'All', icon: '⚡' },
  { id: 'government', label: 'Govt Schemes', icon: '🏛️' },
  { id: 'banking', label: 'Banking', icon: '🏦' },
  { id: 'saas_perks', label: 'Free Credits', icon: '☁️' }
];

const ARCHETYPE_CHIPS = [
  { tag: 'Bootstrapped', label: 'Bootstrapped' },
  { tag: 'Women Founders', label: 'Women >51%' },
  { tag: 'Non-dilutive', label: 'Grants' },
  { tag: 'Zero Balance', label: 'Zero Balance' },
  { tag: 'Tax Exemption', label: 'Tax Holiday' },
  { tag: 'AI / LLM', label: 'AI & LLM' },
  { tag: 'Biotech', label: 'BioTech' },
  { tag: 'Delaware C-Corp', label: 'US Delaware' }
];

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedState,
  setSelectedState,
  selectedTag,
  setSelectedTag,
  totalResults
}) => {
  return (
    <div className="space-y-3">
      {/* Search Bar + State Select */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search schemes, banks, credits, rules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* State select */}
        <div className="relative shrink-0">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="pl-3 pr-7 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-xs font-semibold focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer"
          >
            {STATES_LIST.map((state) => (
              <option key={state} value={state}>
                {state === 'All India' ? '📍 All India' : `📍 ${state}`}
              </option>
            ))}
          </select>
          <MapPin className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
        </div>
      </div>

      {/* Category Pills (Minimal) */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === tab.id
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Archetype Quick Filter Chips */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
        {ARCHETYPE_CHIPS.map(({ tag, label }) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(isActive ? null : tag)}
              className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium transition-colors ${
                isActive
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-300 border border-slate-800/80'
              }`}
            >
              {label}
            </button>
          );
        })}

        {selectedTag && (
          <button
            onClick={() => setSelectedTag(null)}
            className="text-xs text-rose-400 font-semibold hover:underline shrink-0 px-1"
          >
            Clear
          </button>
        )}
      </div>

      {/* Result Counter */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
        <span>{totalResults} programs</span>
        {selectedState !== 'All India' && (
          <span className="text-indigo-400 font-medium">{selectedState} focus</span>
        )}
      </div>
    </div>
  );
};
