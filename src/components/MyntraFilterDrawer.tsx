import React, { useState, useMemo } from 'react';
import { X, RotateCcw, Check, Search, UserCheck, Cpu, Wrench, Flame } from 'lucide-react';
import { MASTER_CATALOG } from '../data/masterCatalog';
import { ALL_INDIAN_STATES } from '../data/allStates';

export interface FilterState {
  categories: string[];
  states: string[];
  stages: string[];
  sectors: string[];
  entities: string[];
  persona?: string | null;
}

interface MyntraFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onApplyFilters: (filters: FilterState) => void;
  onResetFilters: () => void;
}

const PERSONA_OPTIONS = [
  {
    id: 'woman_led',
    label: 'Woman-Led Startup (51%+ Equity)',
    sub: 'Stand-Up India ₹10L–₹1Cr, PMEGP 35% subsidy, state monthly sustenance bonuses, GeM quota'
  },
  {
    id: 'ai_saas',
    label: 'AI, SaaS & Tech Founders',
    sub: '$150k Azure + Claude 3.5, GCP $200k, PostHog, GST zero export billing'
  },
  {
    id: 'hardware_deeptech',
    label: 'Hardware, Biotech & DeepTech',
    sub: '₹50L BIRAC BIG, NIDHI-PRAYAS prototype grant, T-Works fab lab'
  },
  {
    id: 'solo_bootstrap',
    label: 'Solo Bootstrapper / Zero-Burn',
    sub: 'IDFC 3-Yr zero balance, free Notion/Loom, ₹20k/mo living stipend'
  }
];

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
  const [activeTab, setActiveTab] = useState<'persona' | 'category' | 'entity' | 'state' | 'stage' | 'sector'>('persona');
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
        if (!item.entityTypes.some((e) => draftFilters.entities.includes(e))) {
          return false;
        }
      }
      if (draftFilters.states.length > 0) {
        const matchesAny = draftFilters.states.some(
          (s) =>
            item.stateOrRegion === s ||
            item.stateOrRegion.includes(s) ||
            item.stateOrRegion === 'All States / Central' ||
            item.stateOrRegion === 'Global / All India'
        );
        if (!matchesAny) return false;
      }
      return true;
    }).length;
  }, [draftFilters]);

  if (!isOpen) return null;

  const toggleArrayOption = (key: keyof FilterState, val: string) => {
    setDraftFilters((prev) => {
      const arr = (prev[key] as string[]) || [];
      const updated = arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];
      return { ...prev, [key]: updated };
    });
  };

  const togglePersona = (personaId: string) => {
    setDraftFilters((prev) => {
      if (prev.persona === personaId) {
        return { ...prev, persona: null };
      }
      // Apply preset patch
      if (personaId === 'woman_led') {
        return {
          ...prev,
          persona: personaId,
          categories: ['grant', 'stipend'],
          sectors: ['All Sectors / Sector Agnostic']
        };
      }
      if (personaId === 'ai_saas') {
        return {
          ...prev,
          persona: personaId,
          categories: ['cloud', 'arbitrage'],
          sectors: ['Tech & DeepTech', 'Fintech & Digital Services']
        };
      }
      if (personaId === 'hardware_deeptech') {
        return {
          ...prev,
          persona: personaId,
          categories: ['grant'],
          sectors: ['Healthcare & Biotech', 'Manufacturing & Hardware']
        };
      }
      if (personaId === 'solo_bootstrap') {
        return {
          ...prev,
          persona: personaId,
          categories: ['banking', 'stipend'],
          stages: ['Idea Stage (< 1 Year)', 'Early Bootstrapped']
        };
      }
      return { ...prev, persona: personaId };
    });
  };

  const handleApply = () => {
    onApplyFilters(draftFilters);
    onClose();
  };

  const handleClear = () => {
    const cleared: FilterState = {
      categories: [],
      states: [],
      stages: [],
      sectors: [],
      entities: [],
      persona: null
    };
    setDraftFilters(cleared);
    onResetFilters();
  };

  const filteredStates = ALL_INDIAN_STATES.filter((s) =>
    s.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const totalActiveDraftFilters =
    (draftFilters.persona ? 1 : 0) +
    draftFilters.categories.length +
    draftFilters.states.length +
    draftFilters.stages.length +
    draftFilters.sectors.length +
    draftFilters.entities.length;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl flex flex-col h-[85vh] sm:h-[620px] overflow-hidden"
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
          <div className="w-[42%] border-r border-stone-200 bg-[#fafaf8] overflow-y-auto">
            {/* 1. Quick Capture Persona */}
            <button
              type="button"
              onClick={() => setActiveTab('persona')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'persona'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>Founder Persona</span>
              {draftFilters.persona && (
                <span className="w-2 h-2 rounded-full bg-[#274e37]" />
              )}
            </button>

            {/* 2. Benefit Types */}
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

            {/* 3. Entity Type */}
            <button
              type="button"
              onClick={() => setActiveTab('entity')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'entity'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>Entity Type</span>
              {draftFilters.entities.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] flex items-center justify-center">
                  {draftFilters.entities.length}
                </span>
              )}
            </button>

            {/* 4. State / Region */}
            <button
              type="button"
              onClick={() => setActiveTab('state')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'state'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>State / Region</span>
              {draftFilters.states.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] flex items-center justify-center">
                  {draftFilters.states.length}
                </span>
              )}
            </button>

            {/* 5. Stage */}
            <button
              type="button"
              onClick={() => setActiveTab('stage')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'stage'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>Startup Stage</span>
              {draftFilters.stages.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] flex items-center justify-center">
                  {draftFilters.stages.length}
                </span>
              )}
            </button>

            {/* 6. Sector */}
            <button
              type="button"
              onClick={() => setActiveTab('sector')}
              className={`w-full px-3 py-3 text-left text-xs font-serif font-bold transition-colors flex items-center justify-between border-l-3 ${
                activeTab === 'sector'
                  ? 'bg-white border-[#274e37] text-[#274e37]'
                  : 'border-transparent text-stone-600 hover:bg-stone-100/70'
              }`}
            >
              <span>Industry Sector</span>
              {draftFilters.sectors.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#274e37] text-white font-mono text-[10px] flex items-center justify-center">
                  {draftFilters.sectors.length}
                </span>
              )}
            </button>
          </div>

          {/* Right Content Options Pane */}
          <div className="flex-1 p-4 overflow-y-auto bg-white">
            {/* PERSONA TAB */}
            {activeTab === 'persona' && (
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono text-stone-500 mb-2">
                  1-Tap Persona match auto-selects your stack:
                </div>
                {PERSONA_OPTIONS.map((opt) => {
                  const isChecked = draftFilters.persona === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => togglePersona(opt.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked 
                          ? 'bg-[#f2f7f4] border-[#274e37] shadow-xs' 
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-xs text-stone-900">
                          {opt.label}
                        </span>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 rounded border-stone-300 text-[#274e37] focus:ring-[#274e37] accent-[#274e37]"
                        />
                      </div>
                      <p className="text-[11px] text-stone-500 font-sans mt-1 leading-snug">
                        {opt.sub}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* BENEFIT CATEGORY TAB */}
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

            {/* ENTITY TYPE TAB */}
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

            {/* STATE TAB */}
            {activeTab === 'state' && (
              <div className="space-y-3">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search state..."
                    value={stateSearch}
                    onChange={(e) => setStateSearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-stone-400 font-sans"
                  />
                </div>

                <div className="space-y-0.5 max-h-[380px] overflow-y-auto pr-1">
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

            {/* STAGE TAB */}
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

            {/* SECTOR TAB */}
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
