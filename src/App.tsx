import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SearchAndFilters } from './components/SearchAndFilters';
import { ItemCard } from './components/ItemCard';
import { NuancesGuide } from './components/NuancesGuide';
import { ALL_BENEFITS } from './data/allBenefits';
import { BenefitItem, CategoryType } from './types';
import { BookmarkCheck, Trash2, ExternalLink } from 'lucide-react';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'directory' | 'nuances' | 'bookmarks'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedState, setSelectedState] = useState('All India');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Bookmarks stored in localStorage (no login required)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('founder_perks_bookmarks');
      return saved ? JSON.parse(saved) : ['dpiit-startup-recognition', 'sisfs-seed-fund-scheme', 'microsoft-founders-hub'];
    } catch {
      return ['dpiit-startup-recognition', 'sisfs-seed-fund-scheme', 'microsoft-founders-hub'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('founder_perks_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Filtered benefits for Directory
  const filteredBenefits = useMemo(() => {
    return ALL_BENEFITS.filter(item => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (selectedState !== 'All India') {
        const matchesState = item.statesApplicable?.includes(selectedState) || item.statesApplicable?.includes('All India');
        if (!matchesState) return false;
      }
      if (selectedTag) {
        const matchesTag = item.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase()) ||
          item.title.toLowerCase().includes(selectedTag.toLowerCase()) ||
          item.keyPerks.some(p => p.toLowerCase().includes(selectedTag.toLowerCase()));
        if (!matchesTag) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesProvider = item.provider.toLowerCase().includes(q);
        const matchesDesc = item.shortDescription.toLowerCase().includes(q);
        const matchesPerks = item.keyPerks.some(p => p.toLowerCase().includes(q));
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesProvider && !matchesDesc && !matchesPerks && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedState, selectedTag, searchQuery]);

  const bookmarkedItems = useMemo(() => {
    return ALL_BENEFITS.filter(item => bookmarkedIds.includes(item.id));
  }, [bookmarkedIds]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Clean Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        bookmarksCount={bookmarkedIds.length}
      />

      {/* Main Content Area: Mobile-First, max-w-4xl */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-5 space-y-5">
        {/* VIEW 1: DIRECTORY */}
        {currentView === 'directory' && (
          <div className="space-y-4">
            {/* Search and Quick Category/Tag Navigation */}
            <SearchAndFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              totalResults={filteredBenefits.length}
            />

            {/* List of Benefits Cards */}
            {filteredBenefits.length === 0 ? (
              <div className="text-center py-12 bg-slate-900/60 rounded-2xl border border-slate-800 p-6 space-y-2">
                <div className="text-2xl">🔍</div>
                <div className="text-sm font-bold text-white">No results found</div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedState('All India');
                    setSelectedTag(null);
                  }}
                  className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
                >
                  Reset
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredBenefits.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    isBookmarked={bookmarkedIds.includes(item.id)}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: NUANCES & TRAPS */}
        {currentView === 'nuances' && (
          <div className="space-y-4">
            <div className="text-left py-2">
              <h2 className="text-lg font-bold text-white">Founder Nuances & Traps</h2>
              <p className="text-xs text-slate-400">Essential regulatory fine print founders usually miss.</p>
            </div>
            <NuancesGuide />
          </div>
        )}

        {/* VIEW 3: SAVED PERKS */}
        {currentView === 'bookmarks' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between py-1">
              <div>
                <h2 className="text-lg font-bold text-white">Saved ({bookmarkedItems.length})</h2>
                <p className="text-xs text-slate-400">Locally saved to your browser.</p>
              </div>

              {bookmarkedItems.length > 0 && (
                <button
                  onClick={() => setBookmarkedIds([])}
                  className="flex items-center space-x-1 px-2.5 py-1 text-xs text-rose-400 hover:bg-rose-950/30 rounded-lg transition-colors border border-rose-500/20"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}
            </div>

            {bookmarkedItems.length === 0 ? (
              <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 p-6 space-y-1 text-slate-400 text-xs">
                <div>No saved perks yet.</div>
                <div>Tap the bookmark icon on any scheme to pin it here.</div>
              </div>
            ) : (
              <div className="space-y-3">
                {bookmarkedItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    isBookmarked={true}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-[11px] text-slate-400">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <span>FounderPerks • Open Founder Knowledge Base</span>
          <a
            href="https://github.com/dhruvabalde-prog/founder-benefits-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
