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
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { MASTER_CATALOG, MasterItem } from '../data/masterCatalog';
import { FilterState, MyntraFilterDrawer } from '../components/MyntraFilterDrawer';
import { QuickPersonaPresets, PersonaPresetId } from '../components/QuickPersonaPresets';
import { GlobalContextBar } from '../components/GlobalContextBar';
import { DepartmentToolsMatrix } from '../components/DepartmentToolsMatrix';

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
  const [showToolsMatrix, setShowToolsMatrix] = useState<boolean>(false);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

      // 4. Stage Filter
      if (filters.stages.length > 0) {
        // loose matching on stages
      }

      // 5. Search query
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
    filters.categories.length +
    filters.states.length +
    filters.stages.length +
    filters.sectors.length +
    (filters.entities ? filters.entities.length : 0);

  return (
    <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-150 pb-20 sm:pb-8">
      {/* 1. Quick Search Bar & Full Filter Drawer Button */}
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

        {/* Myntra-style Filter Trigger Button */}
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

      {/* 2. One-Tap Quick Persona Presets */}
      <QuickPersonaPresets
        activePreset={activePreset}
        onSelectPreset={handleSelectPreset}
        onClearPreset={handleClearPreset}
      />

      {/* 3. Global Context Bar (State + Legal Entity + Category Tabs) */}
      <GlobalContextBar
        selectedState={selectedState}
        onSelectState={handleStateChange}
        selectedEntity={selectedEntity}
        onSelectEntity={handleEntityChange}
        benefitCategory={benefitCategory}
        onSelectCategory={handleCategoryChange}
      />

      {/* 4. Zero-Burn Tools Banner / Matrix Toggle */}
      <div className="bg-[#fcfbf9] border border-stone-200/90 rounded-xl p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-[#274e37]/10 text-[#274e37] flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-[#274e37]" />
          </div>
          <div>
            <div className="font-serif font-bold text-xs text-stone-900">
              Departmental Zero-Burn Stack
            </div>
            <div className="text-[10px] text-stone-500 font-sans">
              Free lifetime database, cold email leads, zero-balance banking
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowToolsMatrix(!showToolsMatrix)}
          className="px-2.5 py-1.5 rounded-lg bg-[#274e37] text-white text-[11px] font-serif font-medium hover:bg-[#1c3827] transition-colors shrink-0"
        >
          {showToolsMatrix ? 'Hide Stack' : 'View Stack'}
        </button>
      </div>

      {/* Render Departmental Stack Matrix if toggled */}
      {showToolsMatrix && (
        <div className="animate-in fade-in duration-150">
          <DepartmentToolsMatrix />
        </div>
      )}

      {/* 5. Master Items Counter & Filter Reset */}
      <div className="flex items-center justify-between text-xs font-mono text-stone-500 px-1 pt-1">
        <span>{filteredItems.length} schemes & programs matching</span>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={handleClearPreset}
            className="text-[11px] text-stone-500 hover:text-stone-900 underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* 6. Master List: Compact Tiles with Expandable Accordion */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-stone-300 p-6 space-y-3">
            <div className="text-sm font-serif font-bold text-stone-700">No programs match this combination</div>
            <p className="text-xs text-stone-500 max-w-sm mx-auto font-sans">
              Try switching your state to "All States / Central" or clearing the entity filter to see universal central schemes.
            </p>
            <button
              type="button"
              onClick={handleClearPreset}
              className="px-4 py-2 rounded-lg bg-[#274e37] text-white text-xs font-serif font-medium inline-flex items-center justify-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            const isExpanded = expandedItemId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-stone-200/90 hover:border-stone-400 rounded-xl transition-all shadow-xs overflow-hidden"
              >
                {/* Main Scannable Row */}
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5]">
                        {item.badge}
                      </span>
                      <span className="text-xs text-stone-500 font-sans truncate max-w-[140px] sm:max-w-none">
                        {item.provider}
                      </span>
                      {item.stateOrRegion && item.stateOrRegion !== 'All States / Central' && (
                        <span className="text-[10px] font-mono text-stone-600 px-1.5 py-0.5 bg-stone-100 rounded border border-stone-200">
                          {item.stateOrRegion}
                        </span>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm font-mono font-bold text-[#274e37] whitespace-nowrap">
                      {item.valueAmount}
                    </div>
                  </div>

                  <Link to={`/benefit/${item.slug}`} className="block group">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-[#274e37] transition-colors tracking-tight">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed font-sans">
                    {item.whyFoundersCare}
                  </p>

                  {/* Actions Bar: Icon-Only CTAs */}
                  <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                    <button
                      type="button"
                      onClick={(e) => toggleExpand(item.id, e)}
                      className="p-1.5 rounded-md hover:bg-stone-100 text-stone-500 transition-colors flex items-center space-x-1 text-xs font-mono"
                      aria-label="Expand Preview"
                      title="Quick Preview"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <div className="flex items-center space-x-1.5">
                      <button
                        type="button"
                        onClick={() => onToggleBookmark(item.id)}
                        className={`p-2 rounded-lg transition-colors border ${
                          isBookmarked
                            ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]'
                            : 'bg-white border-stone-200 text-stone-500 hover:text-stone-900'
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
                        className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors border border-stone-200"
                        aria-label="Official Portal"
                        title="Official Portal"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <Link
                        to={`/benefit/${item.slug}`}
                        className="p-2 rounded-lg bg-[#274e37] hover:bg-[#1c3827] text-white transition-colors shadow-xs"
                        aria-label="View Blueprint"
                        title="View Full Blueprint"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Expandable Tile Content (Ghar Expand) */}
                {isExpanded && (
                  <div className="bg-[#fafaf8] border-t border-stone-200 p-4 sm:p-5 space-y-3 animate-in fade-in duration-100 text-xs">
                    {/* Eligibility preview */}
                    <div className="space-y-1.5">
                      <div className="font-mono text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                        Key Eligibility Criteria
                      </div>
                      <div className="space-y-1">
                        {item.eligibility.slice(0, 3).map((crit, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#274e37] shrink-0 mt-0.5" />
                            <span>{crit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick gotcha */}
                    {item.gotchasAndNuances.length > 0 && (
                      <div className="p-2.5 rounded-lg bg-[#fffbeb] border border-[#fde68a] text-amber-900 flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-relaxed">{item.gotchasAndNuances[0]}</span>
                      </div>
                    )}

                    <div className="pt-1 flex justify-end">
                      <Link
                        to={`/benefit/${item.slug}`}
                        className="p-2 rounded-lg bg-[#274e37] text-white hover:bg-[#1c3827] inline-flex items-center justify-center transition-colors"
                        aria-label="Read Full Blueprint"
                      >
                        <ArrowRight className="w-4 h-4" />
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
