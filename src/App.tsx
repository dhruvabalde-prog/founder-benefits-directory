import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SearchAndFilters } from './components/SearchAndFilters';
import { ItemCard } from './components/ItemCard';
import { HacksSection } from './components/HacksSection';
import { NuancesGuide } from './components/NuancesGuide';
import { ALL_BENEFITS } from './data/allBenefits';
import { BenefitItem, CategoryType, FounderType } from './types';
import { Trash2 } from 'lucide-react';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'directory' | 'hacks' | 'nuances' | 'bookmarks'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedState, setSelectedState] = useState('All States / Central');
  const [selectedFounderType, setSelectedFounderType] = useState<FounderType>('all');

  // Bookmarks stored in localStorage (zero login)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('founder_perks_bookmarks');
      return saved ? JSON.parse(saved) : ['dpiit-startup-recognition', 'rajasthan-istart', 'sisfs-seed-fund-scheme'];
    } catch {
      return ['dpiit-startup-recognition', 'rajasthan-istart', 'sisfs-seed-fund-scheme'];
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
      // 1. Category Filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'sustenance') {
          if (item.category !== 'sustenance') return false;
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }

      // 2. State Filter
      if (selectedState !== 'All States / Central') {
        const matchesState = 
          item.stateOrRegion === selectedState || 
          item.stateOrRegion === 'All States / Central';
        if (!matchesState) return false;
      }

      // 3. Founder Type Filter
      if (selectedFounderType !== 'all') {
        if (!item.founderTypes.includes('all') && !item.founderTypes.includes(selectedFounderType)) {
          return false;
        }
      }

      // 4. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesProvider = item.provider.toLowerCase().includes(q);
        const matchesState = item.stateOrRegion.toLowerCase().includes(q);
        const matchesDesc = item.shortDescription.toLowerCase().includes(q);
        const matchesHack = item.hackOrNuance.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesProvider && !matchesState && !matchesDesc && !matchesHack && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedState, selectedFounderType, searchQuery]);

  const bookmarkedItems = useMemo(() => {
    return ALL_BENEFITS.filter(item => bookmarkedIds.includes(item.id));
  }, [bookmarkedIds]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        bookmarksCount={bookmarkedIds.length}
      />

      {/* Main Container: Mobile-First, max-w-4xl */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-4 space-y-4">
        {/* VIEW 1: DIRECTORY */}
        {currentView === 'directory' && (
          <div className="space-y-3.5">
            {/* Search and High-Utility Filters */}
            <SearchAndFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              selectedFounderType={selectedFounderType}
              setSelectedFounderType={setSelectedFounderType}
              totalResults={filteredBenefits.length}
            />

            {/* List of Benefit Cards */}
            {filteredBenefits.length === 0 ? (
              <div className="text-center py-12 bg-slate-900/60 rounded-2xl border border-slate-800 p-6 space-y-2">
                <div className="text-xl">🔍</div>
                <div className="text-xs text-slate-400">No schemes found matching criteria.</div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedState('All States / Central');
                    setSelectedFounderType('all');
                  }}
                  className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
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

        {/* VIEW 2: FOUNDER HACKS & CROSS-STATE ARBITRAGE */}
        {currentView === 'hacks' && <HacksSection />}

        {/* VIEW 3: NUANCES & TRAPS */}
        {currentView === 'nuances' && <NuancesGuide />}

        {/* VIEW 4: SAVED PERKS */}
        {currentView === 'bookmarks' && (
          <div className="space-y-3.5">
            <div className="flex items-center justify-between py-1">
              <div>
                <h2 className="text-base font-bold text-white">Saved Programs ({bookmarkedItems.length})</h2>
                <p className="text-xs text-slate-400">Stored locally in your browser.</p>
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
                <div>No saved items yet.</div>
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

      {/* Minimal Clean Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-5 text-center text-[11px] text-slate-400">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <span>FounderPerks • Open Startup Schemes Database</span>
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
