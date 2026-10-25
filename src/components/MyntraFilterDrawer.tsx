import React, { useState, useMemo } from 'react';
import { X, RotateCcw, Check, Search } from 'lucide-react';
import { MASTER_CATALOG, MasterItem } from '../data/masterCatalog';
import { ALL_INDIAN_STATES } from '../data/allStates';

export interface FilterState {
  categories: string[];
  states: string[];
  stages: string[];
  sectors: string[];
  entities: string[];
}

interface MyntraFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onApplyFilters: (filters: FilterState) => void;
  onResetFilters: () => void;
}

const CATEGORY_OPTIONS = [
  { id: 'stipend', label: 'Monthly Stipends & Living Cash' },
  { id: 'grant', label: 'Non-Dilutive Equity-Free Grants' },
  { id: 'cloud', label: 'Cloud, AI Compute & SaaS Packs' },
  { id: 'banking', label: '3-Year Zero-Balance Current Accounts' },
  { id: 'arbitrage', label: 'Cross-State Arbitrage & Tax Shields' }
];

const ENTITY_OPTIONS = [
  { id: 'pvt_ltd', label: 'Private Limited Company (DPIIT & VC)' },
  { id: 'llp', label: 'Limited Liability Partnership (LLP)' },
  { id: 'partnership', label: 'Registered Partnership Firm' },
  { id: 'sole_proprietorship', label: 'Sole Proprietorship (MSME/PMEGP)' },
  { id: 'delaware_c_corp', label: 'US Delaware C-Corp / Cross-Border' }
];

const STAGE_OPTIONS = [
  { id: 'idea', label: 'Idea Stage (Zero Code / Prototype)' },
  { id: 'bootstrapped', label: 'Bootstrapped / MVP In Market' },
  { id: 'funded', label: 'Institutional / Seed-Backed' }
];

const SECTOR_OPTIONS = [
  { id: 'ai_saas', label: 'AI, LLMs, Developer Tools & SaaS' },
  { id: 'biotech', label: 'BioTech, Diagnostics & HealthTech' },
  { id: 'hardware', label: 'Hardware, IoT, Robotics & ESDM' },
  { id: 'general', label: 'General Tech, Consumer & D2C' }
];

export const MyntraFilterDrawer: React.FC<MyntraFilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  onResetFilters
}) => {
  const [activeTab, setActiveTab] = useState<'category' | 'entity' | 'state' | 'stage' | 'sector'>('category');
  const [draftFilters, setDraftFilters] = useState<FilterState>(filters);
  const [stateSearch, setStateSearch] = useState('');

  React.useEffect(() => {
    if (isOpen) {
      setDraftFilters(filters);
      setStateSearch('');
    }
  }, [isOpen, filters]);

  // Dependent calculation for real-time counts
  const getDependentCount = (type: keyof FilterState, value: string) => {
    return MASTER_CATALOG.filter((item) => {
      // 1. Category check
      if (type === 'categories') {
        if (item.category !== value) return false;
      } else if (draftFilters.categories.length > 0) {
        if (!draftFilters.categories.includes(item.category)) return false;
      }

      // 2. Entity check
      if (type === 'entities') {
        if (item.entityTypes && !item.entityTypes.includes(value as any)) return false;
      } else if (draftFilters.entities.length > 0) {
        if (item.entityTypes && !item.entityTypes.some(e => draftFilters.entities.includes(e))) return false;
      }

      // 3. State check
      if (type === 'states') {
        const matchesThis =
          item.stateOrRegion === value ||
          item.stateOrRegion.includes(value) ||
          item.stateOrRegion === 'All States / Central' ||
          item.stateOrRegion === 'Global / All India';
        if (!matchesThis) return false;
      } else if (draftFilters.states.length > 0) {
        const matchesAnyState = draftFilters.states.some(
          (s) =>
            item.stateOrRegion === s ||
            item.stateOrRegion.includes(s) ||
            item.stateOrRegion === 'All States / Central' ||
            item.stateOrRegion === 'Global / All India'
        );
        if (!matchesAnyState) return false;
      }

      return true;
    }).length;
  };

  const totalMatchingCount = useMemo(() => {
    return MASTER_CATALOG.filter((item) => {
      if (draftFilters.categories.length > 0 && !draftFilters.categories.includes(item.category)) {
        return false;
      }
      if (draftFilters.entities.length > 0 && item.entityTypes) {
        if (!item.entityTypes.some(e => draftFilters.entities.includes(e))) return false;
      }
      if (draftFilters.states.length > 0) {
        const matches = draftFilters.states.some(
          (s) =>
            item.stateOrRegion === s ||
            item.stateOrRegion.includes(s) ||
            item.stateOrRegion === 'All States / Central' ||
            item.stateOrRegion === 'Global / All India'
        );
        if (!matches) return false;
      }
      return true;
    }).length;
  }, [draftFilters]);

  const toggleArrayOption = (type: keyof FilterState, value: string) => {
    setDraftFilters((prev) => {
      const arr = prev[type];
      const nextArr = arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value];
      return { ...prev, [type]: nextArr };
    });
  };

  const handleApply = () => {
    onApplyFilters(draftFilters);
    onClose();
  };

  const handleClear = () => {
    const empty: FilterState = { categories: [], states: [], stages: [], sectors: [], entities: [] };
    setDraftFilters(empty);
    onResetFilters();
  };

  const filteredStates = useMemo(() => {
    if (!stateSearch.trim()) return ALL_INDIAN_STATES;
    return ALL_INDIAN_STATES.filter((s) =>
      s.toLowerCase().includes(stateSearch.toLowerCase().trim())
    );
  }, [stateSearch]);

  if (!isOpen) return null;

  const totalActiveDraftFilters =
    draftFilters.categories.length +
    draftFilters.states.length +
    draftFilters.stages.length +
    draftFilters.sectors.length +
    draftFilters.entities.length;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div 
        className="w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col h-[84vh] sm:h-[660px] max-h-[92vh] overflow-hidden border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-4 py-3.5 border-b border-stone-200 flex items-center justify-between bg-[#fafaf8]">
          <div className="flex items-center space-x-2">
            <h2 className="font-serif font-bold text-base sm:text-lg text-stone-900">
              Filters
            </h2>
            {totalActiveDraftFilters > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#274e37] text-white font-mono text-[11px] font-bold flex items-center justify-center">
                {totalActiveDraftFilters}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {totalActiveDraftFilters > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="p-2 rounded-md hover:bg-stone-200/60 text-stone-600 transition-colors"
                title="Reset All"
                aria-label="Reset All"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-md hover:bg-stone-200/60 text-stone-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2-Column Myntra Layout */}
        <div className="flex-1 flex min-h-0 overflow-hidden">
          {/* Left Vertical Categories Rail */}
          <div className="w-[40%] border-r border-stone-200 bg-[#fafaf8] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveTab('category')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'category'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>Benefit Type</span>
              {draftFilters.categories.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] flex items-center justify-center">
                  {draftFilters.categories.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('entity')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'entity'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>Startup Legal Type</span>
              {draftFilters.entities.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] flex items-center justify-center">
                  {draftFilters.entities.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('state')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'state'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>State / Roots</span>
              {draftFilters.states.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] flex items-center justify-center">
                  {draftFilters.states.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('stage')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'stage'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>Stage</span>
              {draftFilters.stages.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] flex items-center justify-center">
                  {draftFilters.stages.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('sector')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'sector'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>Sector</span>
              {draftFilters.sectors.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] flex items-center justify-center">
                  {draftFilters.sectors.length}
                </span>
              )}
            </button>
          </div>

          {/* Right Pane: Checkbox Options List */}
          <div className="w-[60%] bg-white p-3 sm:p-4 overflow-y-auto space-y-2">
            {activeTab === 'category' && (
              <div className="space-y-1">
                {CATEGORY_OPTIONS.map((opt) => {
                  const isChecked = draftFilters.categories.includes(opt.id);
                  const count = getDependentCount('categories', opt.id);

                  return (
                    <label
                      key={opt.id}
                      className={`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition-colors text-xs ${
                        isChecked ? 'bg-[#f2f7f4] text-[#274e37] font-semibold' : 'hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleArrayOption('categories', opt.id)}
                          className="w-4 h-4 rounded border-stone-300 text-[#274e37] focus:ring-[#274e37] accent-[#274e37]"
                        />
                        <span>{opt.label}</span>
                      </div>
                      <span className="font-mono text-[11px] text-stone-400">
                        ({count})
                      </span>
                    </label>
                  );
                })}
              </div>
            )}

            {activeTab === 'entity' && (
              <div className="space-y-1">
                {ENTITY_OPTIONS.map((opt) => {
                  const isChecked = draftFilters.entities.includes(opt.id);
                  const count = getDependentCount('entities', opt.id);

                  return (
                    <label
                      key={opt.id}
                      className={`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition-colors text-xs ${
                        isChecked ? 'bg-[#f2f7f4] text-[#274e37] font-semibold' : 'hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleArrayOption('entities', opt.id)}
                          className="w-4 h-4 rounded border-stone-300 text-[#274e37] focus:ring-[#274e37] accent-[#274e37]"
                        />
                        <span>{opt.label}</span>
                      </div>
                      <span className="font-mono text-[11px] text-stone-400">
                        ({count})
                      </span>
                    </label>
                  );
                })}
              </div>
            )}

            {activeTab === 'state' && (
              <div className="space-y-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search states..."
                    value={stateSearch}
                    onChange={(e) => setStateSearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 bg-[#fafaf8] border border-stone-200 rounded-md text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400"
                  />
                </div>

                <div className="space-y-1 max-h-[360px] overflow-y-auto">
                  {filteredStates.map((state) => {
                    const isChecked = draftFilters.states.includes(state);
                    const count = getDependentCount('states', state);

                    return (
                      <label
                        key={state}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors text-xs ${
                          isChecked ? 'bg-[#f2f7f4] text-[#274e37] font-semibold' : 'hover:bg-stone-50 text-stone-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 truncate pr-1">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleArrayOption('states', state)}
                            className="w-4 h-4 rounded border-stone-300 text-[#274e37] focus:ring-[#274e37] accent-[#274e37] shrink-0"
                          />
                          <span className="truncate">{state}</span>
                        </div>
                        <span className="font-mono text-[11px] text-stone-400 shrink-0">
                          ({count})
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'stage' && (
              <div className="space-y-1">
                {STAGE_OPTIONS.map((opt) => {
                  const isChecked = draftFilters.stages.includes(opt.id);
                  return (
                    <label
                      key={opt.id}
                      className={`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition-colors text-xs ${
                        isChecked ? 'bg-[#f2f7f4] text-[#274e37] font-semibold' : 'hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleArrayOption('stages', opt.id)}
                          className="w-4 h-4 rounded border-stone-300 text-[#274e37] focus:ring-[#274e37] accent-[#274e37]"
                        />
                        <span>{opt.label}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            )}

            {activeTab === 'sector' && (
              <div className="space-y-1">
                {SECTOR_OPTIONS.map((opt) => {
                  const isChecked = draftFilters.sectors.includes(opt.id);
                  return (
                    <label
                      key={opt.id}
                      className={`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition-colors text-xs ${
                        isChecked ? 'bg-[#f2f7f4] text-[#274e37] font-semibold' : 'hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleArrayOption('sectors', opt.id)}
                          className="w-4 h-4 rounded border-stone-300 text-[#274e37] focus:ring-[#274e37] accent-[#274e37]"
                        />
                        <span>{opt.label}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="p-3 border-t border-stone-200 bg-[#fafaf8] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleClear}
            className="p-2.5 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 transition-colors flex items-center justify-center"
            title="Reset All Filters"
            aria-label="Reset All Filters"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleApply}
            className="flex-1 py-2.5 px-4 bg-[#274e37] hover:bg-[#1c3827] text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-colors shadow-xs"
            aria-label="Apply Filters"
          >
            <Check className="w-4 h-4" />
            <span>({totalMatchingCount})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
