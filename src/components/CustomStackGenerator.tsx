import React, { useState, useMemo } from 'react';
import { ExternalLink, Bookmark, BookmarkCheck } from 'lucide-react';
import { PLAYBOOK_CHAPTERS, PlaybookItem } from '../data/playbookContent';
import { ALL_INDIAN_STATES } from '../data/allStates';
import { ExpandableTile } from './ExpandableTile';

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

  const matchedStack = useMemo(() => {
    const allItems: PlaybookItem[] = [];
    PLAYBOOK_CHAPTERS.forEach((ch) => allItems.push(...ch.items));

    return allItems.filter((item) => {
      const isStateMatch =
        item.stateOrRegion === selectedState ||
        item.stateOrRegion.includes(selectedState) ||
        item.stateOrRegion === 'All States / Central' ||
        item.stateOrRegion === 'Global / All India';

      let isSectorMatch = true;
      if (selectedSector === 'biotech') {
        if (item.id.includes('biotech') || item.tags.includes('Biotech')) isSectorMatch = true;
      }

      return isStateMatch && isSectorMatch;
    });
  }, [selectedState, selectedStage, selectedSector]);

  return (
    <div className="space-y-4 bg-white border border-stone-200 rounded-xl p-4 sm:p-6 shadow-xs pb-20 sm:pb-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-stone-200">
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
          Runway Stack
        </h1>
        <span className="text-xs font-mono text-stone-500">
          {matchedStack.length} matches
        </span>
      </div>

      {/* 3 Step Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div>
          <label className="block text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider mb-1">
            State
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full bg-[#fafaf8] border border-stone-200 rounded-lg px-2.5 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-stone-400 font-sans cursor-pointer shadow-xs"
          >
            {ALL_INDIAN_STATES.filter((s) => s !== 'All States / Central').map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider mb-1">
            Stage
          </label>
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value as any)}
            className="w-full bg-[#fafaf8] border border-stone-200 rounded-lg px-2.5 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-stone-400 font-sans cursor-pointer shadow-xs"
          >
            <option value="idea">Idea Stage</option>
            <option value="bootstrapped">Bootstrapped / MVP</option>
            <option value="funded">Institutional / Seed</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider mb-1">
            Sector
          </label>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value as any)}
            className="w-full bg-[#fafaf8] border border-stone-200 rounded-lg px-2.5 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-stone-400 font-sans cursor-pointer shadow-xs"
          >
            <option value="ai_saas">Software, SaaS & AI</option>
            <option value="biotech">BioTech & Health</option>
            <option value="hardware">Hardware & IoT</option>
            <option value="general">General Tech & D2C</option>
          </select>
        </div>
      </div>

      {/* Package Highlight Tile */}
      <div className="bg-[#f2f7f4] border border-[#cce2d5] rounded-xl p-4">
        <div className="font-serif font-bold text-stone-900 text-sm sm:text-base">
          {selectedState === 'Rajasthan' && '₹3L Living Cash + ₹25L Grant + $150k Compute'}
          {selectedState === 'Gujarat' && '₹3L Living Cash + ₹30L Seed + $150k Compute'}
          {selectedState === 'Bihar' && '₹10L 0% Loan (10 Yrs) + $150k Compute'}
          {selectedState === 'Karnataka' && '₹50L ELEVATE Grant + $150k Compute'}
          {!['Rajasthan', 'Gujarat', 'Bihar', 'Karnataka'].includes(selectedState) && '₹20L SISFS Grant + $150k Compute + Zero-Tax Export'}
        </div>
      </div>

      {/* Recommended Items */}
      <div className="space-y-2 pt-1">
        {matchedStack.map((item, idx) => {
          const isSaved = bookmarkedIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="bg-[#fafaf8] border border-stone-200 rounded-lg p-3 sm:p-4 flex items-center justify-between gap-3 text-xs transition-colors"
            >
              <div className="flex items-center space-x-2.5 min-w-0">
                <span className="w-5 h-5 rounded bg-stone-200 text-stone-800 font-mono text-[10px] font-semibold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <div className="font-serif font-bold text-stone-900 text-xs sm:text-sm truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#274e37] font-mono mt-0.5 font-semibold">
                    {item.amountOrValue}
                  </div>
                </div>
              </div>

              {/* Icon-Only CTAs */}
              <div className="flex items-center space-x-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => onToggleBookmark(item.id)}
                  className={`p-2 rounded-lg border transition-colors ${
                    isSaved
                      ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]'
                      : 'bg-white border-stone-200 text-stone-500 hover:text-stone-900'
                  }`}
                  aria-label="Bookmark"
                  title={isSaved ? 'Saved' : 'Save'}
                >
                  {isSaved ? (
                    <BookmarkCheck className="w-4 h-4 fill-[#274e37]" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </button>

                <a
                  href={item.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#274e37] hover:bg-[#1c3827] text-white rounded-lg transition-colors shadow-xs"
                  aria-label="Open portal"
                  title="Claim"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
