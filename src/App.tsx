import React, { useState, useEffect, useMemo } from 'react';
import { CURATED_ITEMS, CuratedItem } from './data/curatedDirectory';
import { IndexView } from './components/IndexView';
import { ItemDetailPage } from './components/ItemDetailPage';
import { SmartFinder } from './components/SmartFinder';

export const App: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string>(() => {
    return window.location.hash ? window.location.hash.replace('#', '') : '';
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSmartFinderOpen, setIsSmartFinderOpen] = useState<boolean>(false);

  // Bookmarks in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('founder_perks_saved');
      return saved ? JSON.parse(saved) : ['istart-rajasthan', 'sisfs-seed-fund', 'microsoft-founders-hub'];
    } catch {
      return ['istart-rajasthan', 'sisfs-seed-fund', 'microsoft-founders-hub'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('founder_perks_saved', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setSelectedSlug(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToSlug = (slug: string) => {
    window.location.hash = slug;
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateBackToIndex = () => {
    window.location.hash = '';
    setSelectedSlug('');
  };

  // Filtered launcher items
  const filteredItems = useMemo(() => {
    return CURATED_ITEMS.filter(item => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesRegion = item.stateOrRegion.toLowerCase().includes(q);
        const matchesOneLiner = item.oneLiner.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesRegion && !matchesOneLiner && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Current active item if viewing single page
  const currentActiveItem = useMemo(() => {
    if (!selectedSlug) return null;
    return CURATED_ITEMS.find(i => i.slug === selectedSlug || i.id === selectedSlug) || null;
  }, [selectedSlug]);

  // Next / Prev items for navigation
  const currentIndex = useMemo(() => {
    if (!currentActiveItem) return -1;
    return CURATED_ITEMS.findIndex(i => i.id === currentActiveItem.id);
  }, [currentActiveItem]);

  const prevItem = currentIndex > 0 ? CURATED_ITEMS[currentIndex - 1] : undefined;
  const nextItem = currentIndex < CURATED_ITEMS.length - 1 ? CURATED_ITEMS[currentIndex + 1] : undefined;

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-indigo-500/30 selection:text-indigo-200">
      <main className="flex-1 w-full px-4 sm:px-6 py-6 sm:py-10">
        {currentActiveItem ? (
          /* ONE DEDICATED PAGE FOR THIS SPECIFIC THING */
          <ItemDetailPage
            item={currentActiveItem}
            onBack={navigateBackToIndex}
            isBookmarked={bookmarkedIds.includes(currentActiveItem.id)}
            onToggleBookmark={toggleBookmark}
            onPrev={prevItem ? () => navigateToSlug(prevItem.slug) : undefined}
            onNext={nextItem ? () => navigateToSlug(nextItem.slug) : undefined}
          />
        ) : (
          /* FAST CLEAN LAUNCHER INDEX */
          <IndexView
            items={filteredItems}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectItem={(item) => navigateToSlug(item.slug)}
            onOpenSmartFinder={() => setIsSmartFinderOpen(true)}
            bookmarkedIds={bookmarkedIds}
          />
        )}
      </main>

      {/* Smart Finder Modal */}
      {isSmartFinderOpen && (
        <SmartFinder
          onClose={() => setIsSmartFinderOpen(false)}
          onSelectItem={(item) => navigateToSlug(item.slug)}
        />
      )}

      {/* Minimal Footer */}
      <footer className="border-t border-slate-900 py-4 text-center text-[11px] font-mono text-slate-500">
        <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
          <span>FounderPerks • 1 Page Per Scheme</span>
          <a
            href="https://github.com/dhruvabalde-prog/founder-benefits-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
