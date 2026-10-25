import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, MapPin, ArrowRight, Bookmark } from 'lucide-react';
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
    <div className="space-y-7 animate-in fade-in duration-150">
      {/* Editorial Intro Banner matching guptadeepak.com tone */}
      <section className="space-y-2 pb-2">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#f2f7f4] border border-[#cce2d5] text-[#274e37] text-[11px] font-mono font-semibold uppercase tracking-wider">
          <span>Official Directory & Playbooks</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
          Everything the government & tech giants owe your startup.
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl font-sans leading-relaxed">
          Non-dilutive state stipends, central grants up to ₹50L, zero-balance multi-currency banking, and $500k+ in cloud credits. One dedicated blueprint per program.
        </p>
      </section>

      {/* Search & State Filter Row */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search by keyword, state, grant, or hack (e.g. 'Rajasthan', 'SISFS', 'OpenAI', 'GST LUT')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 text-xs sm:text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 shadow-xs transition-colors font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
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
              className="pl-3 pr-7 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-700 text-xs font-mono font-medium focus:outline-none focus:border-stone-400 shadow-xs appearance-none cursor-pointer max-w-[140px] sm:max-w-none truncate"
            >
              {ALL_INDIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state === 'All States / Central' ? '📍 All States' : `📍 ${state}`}
                </option>
              ))}
            </select>
            <MapPin className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none" />
          </div>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {CATEGORY_CHIPS.map((chip) => (
            <button
              key={chip.id}
              onClick={() => setSelectedCategory(chip.id)}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors font-sans ${
                selectedCategory === chip.id
                  ? 'bg-[#274e37] text-white font-semibold shadow-xs'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Counter Strip */}
        <div className="flex items-center justify-between text-xs font-mono text-stone-500 pt-0.5 border-b border-stone-200/60 pb-2">
          <span>{filteredItems.length} verified programs indexed</span>
          {selectedState !== 'All States / Central' && (
            <button
              onClick={() => setSelectedState('All States / Central')}
              className="text-[#274e37] hover:underline font-semibold"
            >
              Filter: {selectedState} ✕
            </button>
          )}
        </div>
      </div>

      {/* The Master Clean Catalog List */}
      <div className="space-y-3.5">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-stone-300 p-6 space-y-2">
            <div className="text-base font-serif font-bold text-stone-800">No programs match your criteria</div>
            <p className="text-xs text-stone-500 font-sans">Try loosening your search terms or clearing state filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedState('All States / Central');
              }}
              className="px-3.5 py-1.5 bg-[#274e37] text-white rounded-md text-xs font-medium font-sans mt-2"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);

            return (
              <Link
                key={item.id}
                to={`/benefit/${item.slug}`}
                className="group block bg-white hover:bg-[#fafaf8] border border-stone-200 hover:border-stone-400 rounded-xl p-5 sm:p-6 transition-all duration-150 shadow-xs"
              >
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5]">
                      {item.badge}
                    </span>
                    <span className="text-xs text-stone-500 font-sans font-medium">
                      {item.provider}
                    </span>
                    {item.stateOrRegion && item.stateOrRegion !== 'All States / Central' && (
                      <span className="text-[10px] font-mono text-stone-600 px-1.5 py-0.5 bg-stone-100 rounded border border-stone-200">
                        📍 {item.stateOrRegion}
                      </span>
                    )}
                  </div>

                  {isBookmarked && (
                    <span className="text-[11px] font-mono text-[#274e37] font-semibold flex items-center space-x-1">
                      <span>Saved</span>
                      <span>★</span>
                    </span>
                  )}
                </div>

                {/* Title & Value */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-[#274e37] transition-colors tracking-tight">
                    {item.title}
                  </h2>
                  <div className="text-xs sm:text-sm font-mono font-bold text-[#274e37] whitespace-nowrap">
                    {item.valueAmount}
                  </div>
                </div>

                {/* 1-Line Clean Summary */}
                <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed font-sans">
                  {item.whyFoundersCare}
                </p>

                {/* Bottom Navigation CTA */}
                <div className="mt-3.5 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] text-stone-400">
                    Official domain: <span className="text-stone-600 font-medium">{item.domain}</span>
                  </span>

                  <span className="text-[#274e37] group-hover:text-[#1c3827] font-semibold flex items-center space-x-1">
                    <span>View Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
