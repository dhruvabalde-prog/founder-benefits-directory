import React, { useRef, useEffect } from 'react';
import { Search, X, Sparkles, ChevronRight, Bookmark } from 'lucide-react';
import { CuratedItem, CATEGORIES } from '../data/curatedDirectory';

interface IndexViewProps {
  items: CuratedItem[];
  selectedCategory: string;
  setSelectedCategory: (cat: any) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectItem: (item: CuratedItem) => void;
  onOpenSmartFinder: () => void;
  bookmarkedIds: string[];
}

export const IndexView: React.FC<IndexViewProps> = ({
  items,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onSelectItem,
  onOpenSmartFinder,
  bookmarkedIds
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Shortcut "/" to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Top Bar: Title + Smart Matcher Button */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            FounderPerks
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            {items.length} curated playbooks & grants • 1 page per topic
          </p>
        </div>

        <button
          onClick={onOpenSmartFinder}
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-600/90 hover:bg-indigo-600 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Smart Matcher</span>
        </button>
      </div>

      {/* Instant Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Filter perks, stipends, cloud compute, hacks... (Press '/' to focus)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-9 py-2 bg-[#0d121f] border border-slate-800 rounded-xl text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-mono">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center space-x-1 ${
              selectedCategory === cat.id
                ? 'bg-white text-slate-950 font-bold'
                : 'bg-[#0d121f] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Clean High-Density Item Rows (Click row -> opens dedicated single page) */}
      <div className="space-y-2 pt-1">
        {items.length === 0 ? (
          <div className="text-center py-12 bg-[#0d121f] rounded-xl border border-slate-800 p-6 space-y-2">
            <div className="text-xs text-slate-400 font-mono">No matching records found.</div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-indigo-400 hover:underline font-mono"
            >
              Reset search
            </button>
          </div>
        ) : (
          items.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group cursor-pointer bg-[#0d121f] hover:bg-[#111726] border border-slate-800/80 hover:border-slate-700 rounded-xl p-3.5 transition-all flex items-center justify-between gap-3"
              >
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 uppercase tracking-tight">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 truncate">
                      {item.stateOrRegion}
                    </span>
                    {isBookmarked && (
                      <Bookmark className="w-3 h-3 text-indigo-400 fill-indigo-400 inline" />
                    )}
                  </div>

                  <div className="text-sm font-bold text-slate-100 group-hover:text-white truncate">
                    {item.title}
                  </div>

                  <div className="text-xs text-slate-400 line-clamp-1">
                    {item.oneLiner}
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <div className="text-xs font-mono font-bold text-emerald-400 whitespace-nowrap text-right">
                    {item.value}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
