import React from 'react';
import { Search, X, SlidersHorizontal, MapPin, Building, Landmark, Cloud } from 'lucide-react';
import { CategoryType } from '../types';
import { STATES_LIST } from '../data/matrix';
import { CATEGORY_LABELS } from '../data/allBenefits';

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

const QUICK_TAGS = [
  'Non-dilutive',
  'Tax Exemption',
  'Women Founders',
  'SC/ST',
  'Zero Balance',
  'Collateral-Free',
  'No Funding Required',
  'Delaware C-Corp',
  'AI / LLM',
  'Patents'
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
    <div className="space-y-4 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-xl">
      {/* Search Input & State Selector */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search schemes, banking perks, cloud credits (e.g., 'SISFS', 'Zero Balance', 'AWS', 'Women')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* State Filter */}
        <div className="relative min-w-[200px]">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400 pointer-events-none" />
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
          >
            {STATES_LIST.map((state) => (
              <option key={state} value={state}>
                {state === 'All India' ? '📍 All India / Central' : `🏛️ ${state} Policy`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            selectedCategory === 'all'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>{CATEGORY_LABELS.all}</span>
        </button>

        <button
          onClick={() => setSelectedCategory('government')}
          className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            selectedCategory === 'government'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
              : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Landmark className="w-3.5 h-3.5 text-amber-300" />
          <span>{CATEGORY_LABELS.government}</span>
        </button>

        <button
          onClick={() => setSelectedCategory('banking')}
          className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            selectedCategory === 'banking'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Building className="w-3.5 h-3.5 text-emerald-300" />
          <span>{CATEGORY_LABELS.banking}</span>
        </button>

        <button
          onClick={() => setSelectedCategory('saas_perks')}
          className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            selectedCategory === 'saas_perks'
              ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
              : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Cloud className="w-3.5 h-3.5 text-cyan-300" />
          <span>{CATEGORY_LABELS.saas_perks}</span>
        </button>
      </div>

      {/* Quick Filter Tags & Results Counter */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider mr-1">
            Trending:
          </span>
          {QUICK_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/50'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800/80'
              }`}
            >
              #{tag}
            </button>
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="text-xs text-rose-400 hover:underline ml-1"
            >
              Clear tag
            </button>
          )}
        </div>

        <div className="text-slate-400 text-xs font-medium">
          Showing <span className="text-white font-bold">{totalResults}</span> programs
        </div>
      </div>
    </div>
  );
};
