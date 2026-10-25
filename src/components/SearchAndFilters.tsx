import React from 'react';
import { Search, X, MapPin } from 'lucide-react';
import { CategoryType, FounderType } from '../types';
import { ALL_INDIAN_STATES } from '../data/allStates';

interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedFounderType: FounderType;
  setSelectedFounderType: (ft: FounderType) => void;
  totalResults: number;
}

const CATEGORY_TABS: { id: CategoryType; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'government', label: 'Govt Grants' },
  { id: 'sustenance', label: 'Monthly Stipends' },
  { id: 'banking', label: 'Banking' },
  { id: 'saas_perks', label: 'Free Credits' }
];

const FOUNDER_FILTERS: { id: FounderType; label: string }[] = [
  { id: 'all', label: 'All Founders' },
  { id: 'bootstrapped', label: 'Bootstrapped' },
  { id: 'women', label: 'Women >51%' },
  { id: 'deeptech_ai', label: 'AI / DeepTech' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'biotech', label: 'BioTech' },
  { id: 'student', label: 'Student' },
  { id: 'sc_st', label: 'SC/ST' },
  { id: 'vc_backed', label: 'Funded' }
];

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedState,
  setSelectedState,
  selectedFounderType,
  setSelectedFounderType,
  totalResults
}) => {
  return (
    <div className="space-y-2.5">
      {/* Search Input + State Selector */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search schemes, states, banks, credits, rules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* State Filter Dropdown (All Indian States) */}
        <div className="relative shrink-0">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="pl-2.5 pr-6 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-xs font-semibold focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer max-w-[140px] sm:max-w-none truncate"
          >
            {ALL_INDIAN_STATES.map((state) => (
              <option key={state} value={state}>
                {state === 'All States / Central' ? '📍 All States' : `📍 ${state}`}
              </option>
            ))}
          </select>
          <MapPin className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500 pointer-events-none" />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-0.5 scrollbar-none text-xs">
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
              selectedCategory === tab.id
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Founder Type Filters */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-0.5 scrollbar-none text-[11px]">
        {FOUNDER_FILTERS.map((f) => {
          const isActive = selectedFounderType === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setSelectedFounderType(f.id)}
              className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium transition-colors ${
                isActive
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-300 border border-slate-800/80'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Results Count & Active State Indicator */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
        <span>{totalResults} programs available</span>
        <div className="flex items-center space-x-2">
          {selectedState !== 'All States / Central' && (
            <button 
              onClick={() => setSelectedState('All States / Central')}
              className="text-indigo-400 hover:underline"
            >
              {selectedState} ✕
            </button>
          )}
          {selectedFounderType !== 'all' && (
            <button 
              onClick={() => setSelectedFounderType('all')}
              className="text-emerald-400 hover:underline"
            >
              {selectedFounderType} ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
