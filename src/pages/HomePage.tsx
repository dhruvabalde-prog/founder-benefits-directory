import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, MapPin, ArrowRight, Sparkles, Lightbulb, Bookmark } from 'lucide-react';
import { MASTER_CATALOG, MasterItem } from '../data/masterCatalog';
import { ALL_INDIAN_STATES } from '../data/allStates';

interface HomePageProps {
  bookmarkedIds: string[];
}

const CATEGORY_CHIPS = [
  { id: 'all', label: 'All Catalog' },
  { id: 'stipend', label: 'Monthly Stipends' },
  { id: 'grant', label: 'Non-Dilutive Grants' },
  { id: 'cloud', label: 'Cloud & AI Compute' },
  { id: 'banking', label: 'Founder Banking' },
  { id: 'arbitrage', label: 'State Hacks' }
];

export const HomePage: React.FC<HomePageProps> = ({ bookmarkedIds }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('All States / Central');

  const filteredItems = useMemo(() => {
    return MASTER_CATALOG.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // State filter
      if (selectedState !== 'All States / Central') {
        const matchesState = 
          item.stateOrRegion === selectedState || 
          item.stateOrRegion.includes(selectedState) || 
          item.stateOrRegion === 'All States / Central' || 
          item.stateOrRegion === 'Global / All India';
        if (!matchesState) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesProvider = item.provider.toLowerCase().includes(q);
        const matchesDesc = item.executiveSummary.toLowerCase().includes(q);
        const matchesState = item.stateOrRegion.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesProvider && !matchesDesc && !matchesState && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedState, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search & State Filter Row */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search catalog by keyword, grant, state, or hack (e.g. 'Rajasthan', 'SISFS', 'OpenAI')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-[#0d121f] border border-slate-800 rounded-xl text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-slate-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* State Dropdown */}
          <div className="relative shrink-0">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="pl-3 pr-7 py-2.5 bg-[#0d121f] border border-slate-800 rounded-xl text-slate-300 text-xs font-mono font-medium focus:outline-none focus:border-slate-600 appearance-none cursor-pointer max-w-[140px] sm:max-w-none truncate"
            >
              {ALL_INDIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state === 'All States / Central' ? '📍 All States' : `📍 ${state}`}
                </option>
              ))}
            </select>
            <MapPin className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500 pointer-events-none" />
          </div>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-medium">
          {CATEGORY_CHIPS.map((chip) => (
            <button
              key={chip.id}
              onClick={() => setSelectedCategory(chip.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === chip.id
                  ? 'bg-white text-slate-950 font-bold'
                  : 'bg-[#0d121f] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Counter Strip */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-0.5">
          <span>{filteredItems.length} verified programs indexed</span>
          {selectedState !== 'All States / Central' && (
            <button
              onClick={() => setSelectedState('All States / Central')}
              className="text-indigo-400 hover:underline"
            >
              Filter: {selectedState} ✕
            </button>
          )}
        </div>
      </div>

      {/* The Master Clean Catalog List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#0d121f] rounded-2xl border border-slate-800 p-6 space-y-2">
            <div className="text-sm font-bold text-white">No programs found</div>
            <p className="text-xs text-slate-400 font-mono">Try adjusting your search terms or clearing state filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedState('All States / Central');
              }}
              className="px-3 py-1 bg-white text-slate-950 rounded-lg text-xs font-bold font-mono mt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);

            return (
              <Link
                key={item.id}
                to={`/benefit/${item.slug}`}
                className="group block bg-[#0d121f] hover:bg-[#111726] border border-slate-800/80 hover:border-slate-700 rounded-xl p-4 sm:p-5 transition-all duration-150"
              >
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.provider}
                    </span>
                    {item.stateOrRegion && item.stateOrRegion !== 'All States / Central' && (
                      <span className="text-[10px] text-slate-400 px-1.5 py-0.2 bg-slate-800/60 rounded border border-slate-800">
                        📍 {item.stateOrRegion}
                      </span>
                    )}
                  </div>

                  {isBookmarked && (
                    <span className="text-[10px] font-mono text-indigo-400 font-bold">
                      Saved ★
                    </span>
                  )}
                </div>

                {/* Title & Value */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-white transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400 whitespace-nowrap">
                    {item.valueAmount}
                  </div>
                </div>

                {/* 1-Line Clean Summary */}
                <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                  {item.whyFoundersCare}
                </p>

                {/* Bottom Navigation CTA */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] text-slate-500">
                    Official domain: <strong className="text-slate-400">{item.domain}</strong>
                  </span>

                  <span className="text-indigo-400 group-hover:text-indigo-300 font-bold flex items-center space-x-1">
                    <span>View Dedicated Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
