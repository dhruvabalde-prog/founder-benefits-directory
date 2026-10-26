import React, { useState, useMemo } from 'react';
import { Search, X, ExternalLink, BookOpen, Clock, Tag } from 'lucide-react';
import { LEARNING_RESOURCES, LearningResource } from '../data/learningContent';
import { ExpandableTile } from '../components/ExpandableTile';

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
    <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-150 pb-20 sm:pb-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-stone-200">
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
          Learning
        </h1>
        <span className="text-xs font-mono text-stone-500">
          {filteredResources.length} Free Curricula
        </span>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search by keyword, accelerator, or topic (e.g. 'YC', 'Pitch Decks', 'SAFE', 'GTM')..."
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
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-sans ${
              selectedCategory === chip.id
                ? 'bg-[#274e37] text-white font-semibold shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Resources List */}
      <div className="space-y-3">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 space-y-3 shadow-xs"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5]">
                  {res.format}
                </span>
                <span className="text-xs font-mono text-stone-500">
                  {res.provider}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[#274e37]">
                {res.cost}
              </span>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900 tracking-tight">
                {res.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans leading-relaxed">
                {res.summary}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-stone-500">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>{res.timeCommitment}</span>
            </div>

            {/* Expandable Tile for Key Takeaways */}
            <ExpandableTile
              title="Key Takeaways & Modules"
              badge={`${res.keyTakeaways.length} Key Lessons`}
              defaultOpen={false}
              icon={<BookOpen className="w-4 h-4 text-[#274e37]" />}
            >
              <ul className="space-y-2 pt-2 text-xs text-stone-800 font-sans">
                {res.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#fafaf8] p-2.5 rounded-lg border border-stone-200">
                    <span className="text-[#274e37] font-bold shrink-0">✓</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </ExpandableTile>

            {/* CTA */}
            <div className="pt-2 flex items-center justify-between border-t border-stone-100">
              <div className="flex items-center space-x-1.5 flex-wrap gap-1">
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
                className="p-2 bg-[#274e37] hover:bg-[#1c3827] text-white rounded-lg transition-colors shadow-xs inline-flex items-center space-x-1"
                aria-label="Access Resource"
                title="Access Resource"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
