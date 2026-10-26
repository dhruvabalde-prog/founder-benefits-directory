import React, { useState, useMemo } from 'react';
import { Search, X, ExternalLink, BookOpen, Clock, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { LEARNING_RESOURCES } from '../data/learningContent';

const CATEGORY_CHIPS = [
  { id: 'all', label: 'All Curricula' },
  { id: 'curriculum', label: 'Foundations & PMF' },
  { id: 'fundraising', label: 'Pitch Decks & Capital' },
  { id: 'legal', label: 'Standard Contracts & SAFE' },
  { id: 'gtm', label: 'GTM & Outbound' }
];

export const LearningPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
    <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-150 pb-24 sm:pb-12">
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
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-mono text-[11px] ${
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

      {/* Long Rectangular Tiles Arranged Vertically */}
      <div className="space-y-2">
        {filteredResources.map((res) => {
          const isExpanded = expandedId === res.id;

          return (
            <div
              key={res.id}
              className="bg-white border border-stone-200 hover:border-stone-400 rounded-xl transition-all shadow-xs overflow-hidden"
            >
              {/* Header Tile (Always Visible) */}
              <button
                type="button"
                onClick={() => toggleExpand(res.id)}
                className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 hover:bg-stone-50/60 active:bg-stone-100/50 transition-colors"
              >
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-semibold rounded bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5] shrink-0">
                      {res.format}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-500 shrink-0">
                      {res.provider}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#274e37] shrink-0 ml-auto sm:ml-0">
                      {res.cost}
                    </span>
                  </div>

                  <div className="text-sm sm:text-base font-serif font-bold text-stone-900 leading-snug">
                    {res.title}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 transition-transform">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Expanded View */}
              {isExpanded && (
                <div className="bg-[#fafaf8] border-t border-stone-200 p-4 sm:p-5 space-y-3.5 animate-in fade-in duration-150 text-xs">
                  {/* Summary */}
                  <div className="space-y-1">
                    <div className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                      Course Summary
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                      {res.summary}
                    </p>
                  </div>

                  {/* Commitment */}
                  <div className="flex items-center space-x-2 text-xs font-mono text-stone-600 bg-white p-2.5 rounded-lg border border-stone-200">
                    <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Time Commitment: {res.timeCommitment}</span>
                  </div>

                  {/* Modules / Takeaways */}
                  <div className="space-y-1.5">
                    <div className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                      Curriculum Highlights
                    </div>
                    <div className="space-y-1.5">
                      {res.keyTakeaways.map((takeaway, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-stone-200 text-stone-800">
                          <CheckCircle2 className="w-4 h-4 text-[#274e37] shrink-0 mt-0.5" />
                          <span className="leading-snug">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex items-center justify-between border-t border-stone-200">
                    <div className="flex items-center gap-1 flex-wrap">
                      {res.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={res.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#274e37] hover:bg-[#1c3827] text-white rounded-lg transition-colors shadow-xs inline-flex items-center space-x-1.5 font-serif text-xs font-semibold"
                    >
                      <span>Start Learning</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
