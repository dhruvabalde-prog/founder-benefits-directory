import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, Check, ExternalLink, Bookmark } from 'lucide-react';
import { PLAYBOOK_CHAPTERS, PlaybookItem } from '../data/playbookContent';
import { ALL_INDIAN_STATES } from '../data/allStates';

interface CustomStackGeneratorProps {
  onToggleBookmark: (id: string) => void;
  bookmarkedIds: string[];
}

export const CustomStackGenerator: React.FC<CustomStackGeneratorProps> = ({
  onToggleBookmark,
  bookmarkedIds
}) => {
  const [selectedState, setSelectedState] = useState<string>('Rajasthan');
  const [selectedStage, setSelectedStage] = useState<'idea' | 'bootstrapped' | 'funded'>('bootstrapped');
  const [selectedSector, setSelectedSector] = useState<'ai_saas' | 'biotech' | 'hardware' | 'general'>('ai_saas');

  // Match optimal stack items
  const matchedStack = useMemo(() => {
    const allItems: PlaybookItem[] = [];
    PLAYBOOK_CHAPTERS.forEach(ch => allItems.push(...ch.items));

    return allItems.filter(item => {
      // State matching: matches state or is Central/Global
      const isStateMatch = 
        item.stateOrRegion === selectedState || 
        item.stateOrRegion.includes(selectedState) || 
        item.stateOrRegion === 'All States / Central' || 
        item.stateOrRegion === 'Global / All India';
      
      // Sector matching
      let isSectorMatch = true;
      if (selectedSector === 'biotech') {
        if (item.id.includes('biotech') || item.tags.includes('Biotech')) isSectorMatch = true;
      }

      return isStateMatch && isSectorMatch;
    });
  }, [selectedState, selectedStage, selectedSector]);

  return (
    <div className="space-y-6 bg-[#0d121f] border border-slate-800 rounded-2xl p-5 sm:p-7">
      <div className="space-y-1">
        <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Calculator</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Configure Your Exact Founder Runway Stack
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Pick your stage, sector, and registered state to see exactly what cash, grants, and free compute you can unlock this month.
        </p>
      </div>

      {/* 3 Step Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
        {/* State */}
        <div>
          <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            1. Registered State or Roots
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full bg-[#111726] border border-slate-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 font-medium cursor-pointer"
          >
            {ALL_INDIAN_STATES.filter(s => s !== 'All States / Central').map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Stage */}
        <div>
          <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            2. Funding Stage
          </label>
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value as any)}
            className="w-full bg-[#111726] border border-slate-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 font-medium cursor-pointer"
          >
            <option value="idea">Idea Stage (Zero Code / Prototype)</option>
            <option value="bootstrapped">Bootstrapped (Building MVP / Self-funded)</option>
            <option value="funded">Institutional Seed / Angel-backed</option>
          </select>
        </div>

        {/* Sector */}
        <div>
          <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            3. Sector Focus
          </label>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value as any)}
            className="w-full bg-[#111726] border border-slate-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 font-medium cursor-pointer"
          >
            <option value="ai_saas">Software, SaaS & AI / LLMs</option>
            <option value="biotech">BioTech, HealthTech & Diagnostics</option>
            <option value="hardware">Hardware, Electronics & IoT</option>
            <option value="general">Consumer / D2C / General Tech</option>
          </select>
        </div>
      </div>

      {/* Generated Summary Card */}
      <div className="bg-[#111726] border border-indigo-500/30 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider">
            Your Tailored 18-Month Leverage Package
          </div>
          <div className="text-lg sm:text-2xl font-black text-white mt-0.5">
            {selectedState === 'Rajasthan' && '₹3 Lakhs Living Cash + ₹25L Grant + $150k Compute'}
            {selectedState === 'Gujarat' && '₹3 Lakhs Living Cash + ₹30L Seed + $150k Compute'}
            {selectedState === 'Bihar' && '₹10 Lakhs 0% Loan (10 Yrs) + $150k Compute'}
            {selectedState === 'Karnataka' && '₹50 Lakhs ELEVATE Grant + $150k Compute'}
            {!['Rajasthan', 'Gujarat', 'Bihar', 'Karnataka'].includes(selectedState) && '₹20L SISFS Grant + $150k Compute + Zero-Tax Export'}
          </div>
        </div>

        <div className="text-xs font-mono text-slate-400">
          Matched <strong className="text-white font-bold">{matchedStack.length}</strong> tactical playbooks
        </div>
      </div>

      {/* Stack Items List */}
      <div className="space-y-2.5">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
          Your Recommended Action Checklist:
        </div>

        <div className="space-y-2">
          {matchedStack.map((item, idx) => {
            const isSaved = bookmarkedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-[#111726] border border-slate-800 hover:border-slate-700 rounded-xl p-3 sm:p-4 flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-indigo-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="font-bold text-white text-sm">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {item.amountOrValue} • <span className="text-slate-300">{item.badge}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => onToggleBookmark(item.id)}
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 transition-colors"
                    title={isSaved ? 'Saved' : 'Save'}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-indigo-400 fill-indigo-400' : ''}`} />
                  </button>

                  <a
                    href={item.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold font-mono"
                  >
                    <span>Claim</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
