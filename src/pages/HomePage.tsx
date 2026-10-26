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
  ChevronDown, 
  ChevronUp,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { MASTER_CATALOG } from '../data/masterCatalog';
import { FilterState, MyntraFilterDrawer } from '../components/MyntraFilterDrawer';
import { QuickPersonaPresets, PersonaPresetId } from '../components/QuickPersonaPresets';
import { GlobalContextBar } from '../components/GlobalContextBar';

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
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<PersonaPresetId | null>(null);
  
  // Direct Quick Context states
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedEntity, setSelectedEntity] = useState<string>('all');
  const [benefitCategory, setBenefitCategory] = useState<string>('all');

  const toggleExpand = (id: string) => {
    setExpandedItemId((prev) => (prev === id ? null : id));
  };

  // Quick Persona selection
  const handleSelectPreset = (preset: any) => {
    setActivePreset(preset.id);
    setFilters((prev) => ({
      ...prev,
      categories: preset.activeFilterPatch.categories || [],
      sectors: preset.activeFilterPatch.sectors || [],
      stages: preset.activeFilterPatch.stages || []
    }));
    if (preset.activeFilterPatch.categories && preset.activeFilterPatch.categories.length === 1) {
      setBenefitCategory(preset.activeFilterPatch.categories[0]);
    } else {
      setBenefitCategory('all');
    }
  };

  const handleClearPreset = () => {
    setActivePreset(null);
    setFilters({ categories: [], states: [], stages: [], sectors: [], entities: [] });
    setSelectedState('all');
    setSelectedEntity('all');
    setBenefitCategory('all');
  };

  // Global Context Bar Handlers
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    if (state === 'all') {
      setFilters((prev) => ({ ...prev, states: [] }));
    } else {
      setFilters((prev) => ({ ...prev, states: [state] }));
    }
  };

  const handleEntityChange = (entity: string) => {
    setSelectedEntity(entity);
    if (entity === 'all') {
      setFilters((prev) => ({ ...prev, entities: [] }));
    } else {
      setFilters((prev) => ({ ...prev, entities: [entity] }));
    }
  };

  const handleCategoryChange = (category: string) => {
    setBenefitCategory(category);
    if (category === 'all') {
      setFilters((prev) => ({ ...prev, categories: [] }));
    } else {
      setFilters((prev) => ({ ...prev, categories: [category] }));
    }
  };

  const filteredItems = useMemo(() => {
    return MASTER_CATALOG.filter((item) => {
      // 1. Myntra Dependent Category Filter
      if (filters.categories.length > 0 && !filters.categories.includes(item.category)) {
        return false;
      }

      // 2. Entity Type Filter
      if (filters.entities && filters.entities.length > 0 && item.entityTypes) {
        if (!item.entityTypes.some((e) => filters.entities.includes(e))) {
          return false;
        }
      }

      // 3. Myntra Dependent State Filter
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

  return (
    <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-150 pb-24 sm:pb-12">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search by grant name, compute credits, or state..."
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

      {/* 1-Tap Quick Persona Presets */}
      <QuickPersonaPresets
        activePreset={activePreset}
        onSelectPreset={handleSelectPreset}
        onClearPreset={handleClearPreset}
      />

      {/* Global Context Bar (State + Entity + Category) */}
      <GlobalContextBar
        selectedState={selectedState}
        onSelectState={handleStateChange}
        selectedEntity={selectedEntity}
        onSelectEntity={handleEntityChange}
        benefitCategory={benefitCategory}
        onSelectCategory={handleCategoryChange}
      />

      {/* Items Counter */}
      <div className="flex items-center justify-between text-xs font-mono text-stone-500 px-1 pt-1">
        <span>{filteredItems.length} schemes</span>
        {(filters.categories.length > 0 || filters.states.length > 0 || filters.entities.length > 0 || activePreset) && (
          <button
            type="button"
            onClick={handleClearPreset}
            className="text-[11px] text-stone-500 hover:text-stone-900 underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Master List: Long Rectangular Tiles Arranged Vertically (Header-First Clutter-Free) */}
      <div className="space-y-2">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-stone-300 p-6 space-y-3">
            <div className="text-sm font-serif font-bold text-stone-700">No programs match</div>
            <button
              type="button"
              onClick={handleClearPreset}
              className="p-2 rounded-lg bg-[#274e37] text-white text-xs font-serif inline-flex items-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            const isExpanded = expandedItemId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-stone-200 hover:border-stone-400 rounded-xl transition-all shadow-xs overflow-hidden"
              >
                {/* Long Rectangular Tile Header (Always Visible, Click to View Everything) */}
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 hover:bg-stone-50/60 active:bg-stone-100/50 transition-colors"
                >
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-semibold rounded bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5] shrink-0">
                        {item.badge}
                      </span>
                      {item.stateOrRegion && item.stateOrRegion !== 'All States / Central' && (
                        <span className="text-[9px] sm:text-[10px] font-mono text-stone-600 px-1.5 py-0.5 bg-stone-100 rounded border border-stone-200 shrink-0">
                          {item.stateOrRegion}
                        </span>
                      )}
                      <span className="text-xs font-mono font-bold text-[#274e37] shrink-0 ml-auto sm:ml-0">
                        {item.valueAmount}
                      </span>
                    </div>

                    {/* Long Rectangular Title */}
                    <div className="text-sm sm:text-base font-serif font-bold text-stone-900 leading-snug">
                      {item.title}
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 transition-transform">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded View: Everything about the specific thing */}
                {isExpanded && (
                  <div className="bg-[#fafaf8] border-t border-stone-200 p-4 sm:p-5 space-y-4 animate-in fade-in duration-150 text-xs">
                    {/* Summary */}
                    <div className="space-y-1">
                      <div className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                        Overview
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                        {item.executiveSummary}
                      </p>
                    </div>

                    {/* Why founders care */}
                    <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 space-y-1">
                      <div className="font-mono text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                        Founder Advantage
                      </div>
                      <p className="text-xs leading-relaxed font-sans">
                        {item.whyFoundersCare}
                      </p>
                    </div>

                    {/* Key Eligibility Criteria */}
                    <div className="space-y-2">
                      <div className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                        Eligibility Checklist
                      </div>
                      <div className="space-y-1.5">
                        {item.eligibility.map((crit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-stone-800">
                            <CheckCircle2 className="w-4 h-4 text-[#274e37] shrink-0 mt-0.5" />
                            <span className="leading-snug">{crit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Gotchas & Nuances */}
                    {item.gotchasAndNuances.length > 0 && (
                      <div className="p-3 rounded-lg bg-[#fffbeb] border border-[#fde68a] text-amber-950 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                            Nuance & Caveat
                          </span>
                          <span className="text-xs leading-relaxed">{item.gotchasAndNuances[0]}</span>
                        </div>
                      </div>
                    )}

                    {/* Action Row: Icon-First CTAs */}
                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <button
                          type="button"
                          onClick={() => onToggleBookmark(item.id)}
                          className={`p-2.5 rounded-lg transition-colors border ${
                            isBookmarked
                              ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]'
                              : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900'
                          }`}
                          aria-label="Save program"
                          title={isBookmarked ? 'Saved' : 'Save'}
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="w-4 h-4 fill-[#274e37]" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>

                        <a
                          href={item.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors border border-stone-200"
                          aria-label="Official Portal"
                          title="Official Portal"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      <Link
                        to={`/benefit/${item.slug}`}
                        className="px-3.5 py-2.5 rounded-lg bg-[#274e37] hover:bg-[#1c3827] text-white transition-colors shadow-xs flex items-center space-x-1 font-serif text-xs font-semibold"
                        aria-label="View Full Blueprint"
                      >
                        <span>Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Myntra Filter Modal Drawer */}
      <MyntraFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApplyFilters={(newFilters) => setFilters(newFilters)}
        onResetFilters={handleClearPreset}
      />
    </div>
  );
};
