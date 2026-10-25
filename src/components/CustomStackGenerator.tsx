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
    <div className="space-y-6 bg-white border border-stone-200 rounded-xl p-5 sm:p-7 shadow-xs">
      <div className="space-y-1.5 pb-2">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#f2f7f4] border border-[#cce2d5] text-[#274e37] text-[11px] font-mono font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Runway Calculator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
          Calculate Your Exact Founder Leverage Stack
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
          Select your legal registration state, stage, and sector to generate the exact stack of non-dilutive living cash, grants, and free credits you can unlock right now.
        </p>
      </div>

      {/* 3 Step Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
        {/* State */}
        <div>
          <label className="block text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
            1. Registered State or Roots
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full bg-[#fafaf8] border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-stone-400 font-sans cursor-pointer shadow-xs"
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
          <label className="block text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
            2. Funding Stage
          </label>
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value as any)}
            className="w-full bg-[#fafaf8] border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-stone-400 font-sans cursor-pointer shadow-xs"
          >
            <option value="idea">Idea Stage (Zero Code / Prototype)</option>
            <option value="bootstrapped">Bootstrapped (Building MVP / Self-funded)</option>
            <option value="funded">Institutional Seed / Angel-backed</option>
          </select>
        </div>

        {/* Sector */}
        <div>
          <label className="block text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
            3. Sector Focus
          </label>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value as any)}
            className="w-full bg-[#fafaf8] border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-stone-400 font-sans cursor-pointer shadow-xs"
          >
            <option value="ai_saas">Software, SaaS & AI / LLMs</option>
            <option value="biotech">BioTech, HealthTech & Diagnostics</option>
            <option value="hardware">Hardware, Electronics & IoT</option>
            <option value="general">Consumer / D2C / General Tech</option>
          </select>
        </div>
      </div>

      {/* Generated Summary Card */}
      <div className="bg-[#f2f7f4] border border-[#cce2d5] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono font-semibold text-[#274e37] uppercase tracking-wider">
            Your Tailored 18-Month Leverage Package
          </div>
          <div className="text-lg sm:text-2xl font-serif font-bold text-stone-900 mt-1">
            {selectedState === 'Rajasthan' && '₹3 Lakhs Living Cash + ₹25L Grant + $150k Compute'}
            {selectedState === 'Gujarat' && '₹3 Lakhs Living Cash + ₹30L Seed + $150k Compute'}
            {selectedState === 'Bihar' && '₹10 Lakhs 0% Loan (10 Yrs) + $150k Compute'}
            {selectedState === 'Karnataka' && '₹50 Lakhs ELEVATE Grant + $150k Compute'}
            {!['Rajasthan', 'Gujarat', 'Bihar', 'Karnataka'].includes(selectedState) && '₹20L SISFS Grant + $150k Compute + Zero-Tax Export'}
          </div>
        </div>

        <div className="text-xs font-mono text-stone-600 bg-white/80 px-3 py-1.5 rounded-lg border border-[#cce2d5]">
          Matched <strong className="text-[#274e37] font-bold">{matchedStack.length}</strong> tactical playbooks
        </div>
      </div>

      {/* Stack Items List */}
      <div className="space-y-3">
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500">
          Your Recommended Action Checklist:
        </div>

        <div className="space-y-2">
          {matchedStack.map((item, idx) => {
            const isSaved = bookmarkedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-[#fafaf8] border border-stone-200 hover:border-stone-300 rounded-lg p-3.5 sm:p-4 flex items-center justify-between gap-3 text-xs transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 rounded bg-stone-200 text-stone-800 font-mono text-[10px] font-semibold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="font-serif font-bold text-stone-900 text-sm">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                      <span className="font-semibold text-[#274e37]">{item.amountOrValue}</span> • <span>{item.badge}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => onToggleBookmark(item.id)}
                    className="p-1.5 rounded bg-white hover:bg-stone-100 text-stone-500 hover:text-stone-900 border border-stone-200 transition-colors shadow-xs"
                    title={isSaved ? 'Saved' : 'Save'}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-[#274e37] fill-[#274e37]' : ''}`} />
                  </button>

                  <a
                    href={item.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1 bg-[#274e37] hover:bg-[#1c3827] text-white rounded text-xs font-medium font-sans shadow-xs transition-colors"
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
