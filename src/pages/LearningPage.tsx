import React, { useState, useMemo } from 'react';
import { Search, X, ExternalLink, ChevronRight } from 'lucide-react';
import { LEARNING_RESOURCES } from '../data/learningContent';

const CATEGORY_CHIPS = [
  { id: 'all', label: 'All' },
  { id: 'curriculum', label: 'Foundations & PMF' },
  { id: 'fundraising', label: 'Pitch Decks & Capital' },
  { id: 'legal', label: 'Standard Contracts & SAFE' },
  { id: 'gtm', label: 'GTM & Outbound' }
];

export const LearningPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredResources = useMemo(() => {
    return LEARNING_RESOURCES.filter((res) => {
      if (selectedCategory !== 'all' && res.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = res.title.toLowerCase().includes(q);
        const matchesProvider = res.provider.toLowerCase().includes(q);
        const matchesSummary = res.summary.toLowerCase().includes(q);
        const matchesTags = res.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesProvider && !matchesSummary && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-150 pb-16 sm:pb-12">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search lessons, YC videos, SAFE contracts, deck databases..."
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

      {/* Category Chips */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        {CATEGORY_CHIPS.map((chip) => (
          <button
            key={chip.id}
            type="button"
            onClick={() => setSelectedCategory(chip.id)}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-sans text-xs ${
              selectedCategory === chip.id
                ? 'bg-[#274e37] text-white font-semibold shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between text-xs font-mono text-stone-500 px-1">
        <span>{filteredResources.length} curricula</span>
      </div>

      {/* Long Rectangular Tiles Arranged Vertically (No Expand, Click to Direct External Link) */}
      <div className="space-y-2">
        {filteredResources.map((res) => {
          return (
            <div
              key={res.id}
              className="bg-white border border-stone-200/90 hover:border-stone-400 rounded-xl transition-all shadow-xs overflow-hidden"
            >
              <a
                href={res.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 flex items-center justify-between gap-3 group select-none block"
              >
                <div className="flex-1 min-w-0 pr-1">
                  {/* WhatsApp chat style tags */}
                  <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                    <span className="px-2 py-0.5 text-[11px] rounded-md bg-[#e7f8ec] text-[#12592b] font-sans leading-tight">
                      {res.format}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] rounded-md bg-stone-100 text-stone-600 font-sans leading-tight">
                      {res.provider}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#274e37] ml-auto sm:ml-0">
                      {res.cost}
                    </span>
                  </div>

                  <div className="text-sm sm:text-base font-serif font-bold text-stone-900 group-hover:text-[#274e37] transition-colors leading-snug">
                    {res.title}
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-stone-100 group-hover:bg-[#274e37] group-hover:text-white text-stone-600 transition-colors shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
