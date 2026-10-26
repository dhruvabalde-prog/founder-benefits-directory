import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  ArrowRight, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { MASTER_CATALOG } from '../data/masterCatalog';
import { FilterState, MyntraFilterDrawer } from '../components/MyntraFilterDrawer';

interface HomePageProps {
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  bookmarkedIds, 
  onToggleBookmark,
  isFilterOpen,
  setIsFilterOpen,
  filters,
  setFilters
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MASTER_CATALOG.filter((item) => {
      // 1. Category Filter
      if (filters.categories.length > 0 && !filters.categories.includes(item.category)) {
        return false;
      }

      // 2. Entity Type Filter
      if (filters.entities && filters.entities.length > 0 && item.entityTypes) {
        if (!item.entityTypes.some((e) => filters.entities.includes(e))) {
          return false;
        }
      }

      // 3. State Filter
      if (filters.states.length > 0) {
        const matchesAnyState = filters.states.some(
          (s) =>
            item.stateOrRegion === s ||
            item.stateOrRegion.includes(s) ||
            item.stateOrRegion === 'All States / Central' ||
            item.stateOrRegion === 'Global / All India'
        );
        if (!matchesAnyState) return false;
      }

      // 4. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesProvider = item.provider.toLowerCase().includes(q);
        const matchesDesc = item.executiveSummary.toLowerCase().includes(q);
        const matchesState = item.stateOrRegion.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesProvider && !matchesDesc && !matchesState && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [filters, searchQuery]);

  const activeFilterCount =
    (filters.persona ? 1 : 0) +
    filters.categories.length +
    filters.states.length +
    filters.stages.length +
    filters.sectors.length +
    filters.entities.length;

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      states: [],
      stages: [],
      sectors: [],
      entities: [],
      persona: null
    });
  };

  return (
    <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-150 pb-24 sm:pb-12">
      {/* Search Input + Filter Drawer Button */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search programs, states, compute or grants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-xs sm:text-sm focus:outline-none focus:border-stone-400 shadow-xs transition-colors font-sans"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700"
              aria-label="Clear Search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filters Button */}
        <button
          type="button"
          onClick={() => setIsFilterOpen(true)}
          className={`p-2.5 sm:px-3 sm:py-2.5 rounded-xl border flex items-center justify-center space-x-1.5 transition-colors shadow-xs shrink-0 ${
            activeFilterCount > 0
              ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]'
              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
          }`}
          aria-label="Open Filters"
        >
          <SlidersHorizontal className="w-4 h-4" />
          {activeFilterCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] font-bold flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Active Filter Chips Strip */}
      {activeFilterCount > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap text-xs">
          {filters.persona && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-[#e7f8ec] text-[#12592b] text-[11px] font-sans">
              <span>Persona: {filters.persona.replace('_', ' ')}</span>
            </span>
          )}
          {filters.categories.map((c) => (
            <span key={c} className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-[#e7f8ec] text-[#12592b] text-[11px] font-sans">
              <span>{c}</span>
            </span>
          ))}
          {filters.entities.map((e) => (
            <span key={e} className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-[#e7f8ec] text-[#12592b] text-[11px] font-sans">
              <span>{e.replace('_', ' ')}</span>
            </span>
          ))}
          {filters.states.map((s) => (
            <span key={s} className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-[#e7f8ec] text-[#12592b] text-[11px] font-sans">
              <span>{s}</span>
            </span>
          ))}
          <button
            type="button"
            onClick={handleClearFilters}
            className="text-[11px] font-mono text-stone-500 hover:text-stone-900 underline px-1"
          >
            Clear
          </button>
        </div>
      )}

      {/* Items Counter */}
      <div className="flex items-center justify-between text-xs font-mono text-stone-500 px-1">
        <span>{filteredItems.length} schemes</span>
      </div>

      {/* Master List: Clean Long Rectangular Tiles Arranged Vertically (Click to Navigate Directly, No In-Place Expand) */}
      <div className="space-y-2">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-stone-300 p-6 space-y-3">
            <div className="text-sm font-serif font-bold text-stone-700">No programs match</div>
            <button
              type="button"
              onClick={handleClearFilters}
              className="p-2 rounded-lg bg-[#274e37] text-white text-xs font-serif inline-flex items-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white border border-stone-200/90 hover:border-stone-400 rounded-xl transition-all shadow-xs overflow-hidden"
              >
                {/* Long Rectangular Tile (Click Entire Tile to Navigate Directly to Full Detail Blueprint) */}
                <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
                  <Link 
                    to={`/benefit/${item.slug}`} 
                    className="flex-1 min-w-0 pr-1 group block select-none"
                  >
                    {/* WhatsApp Chat Style Tags: Simple, clean bubble tags */}
                    <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                      <span className="px-2 py-0.5 text-[11px] rounded-md bg-[#e7f8ec] text-[#12592b] font-sans leading-tight">
                        {item.badge}
                      </span>
                      {item.stateOrRegion && item.stateOrRegion !== 'All States / Central' && (
                        <span className="px-2 py-0.5 text-[11px] rounded-md bg-[#e7f8ec] text-[#12592b] font-sans leading-tight">
                          {item.stateOrRegion}
                        </span>
                      )}
                      <span className="px-2 py-0.5 text-[11px] rounded-md bg-stone-100 text-stone-600 font-sans leading-tight">
                        {item.provider}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#274e37] ml-auto sm:ml-0">
                        {item.valueAmount}
                      </span>
                    </div>

                    {/* Long Rectangular Tile Heading */}
                    <div className="text-sm sm:text-base font-serif font-bold text-stone-900 group-hover:text-[#274e37] transition-colors leading-snug">
                      {item.title}
                    </div>
                  </Link>

                  {/* Right Action Buttons */}
                  <div className="flex items-center space-x-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => onToggleBookmark(item.id)}
                      className={`p-2 rounded-lg transition-colors border ${
                        isBookmarked
                          ? 'bg-[#e7f8ec] border-[#b8e8c7] text-[#12592b]'
                          : 'bg-white border-stone-200 text-stone-400 hover:text-stone-700'
                      }`}
                      aria-label="Bookmark"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 fill-[#12592b]" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>

                    <Link
                      to={`/benefit/${item.slug}`}
                      className="p-2 rounded-lg bg-stone-100 hover:bg-[#274e37] hover:text-white text-stone-600 transition-colors"
                      aria-label="View Details"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Myntra Filter Modal Drawer (Holds all filter dimensions) */}
      <MyntraFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApplyFilters={(newFilters) => setFilters(newFilters)}
        onResetFilters={handleClearFilters}
      />
    </div>
  );
};
