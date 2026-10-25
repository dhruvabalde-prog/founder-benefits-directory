import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomTabBar } from './components/BottomTabBar';
import { InstallAppBanner } from './components/InstallAppBanner';
import { DeviceFrameWrapper } from './components/DeviceFrameWrapper';
import { SearchAndFilters } from './components/SearchAndFilters';
import { ItemCard } from './components/ItemCard';
import { DetailModal } from './components/DetailModal';
import { EligibilityWizard } from './components/EligibilityWizard';
import { NuancesGuide } from './components/NuancesGuide';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { BookmarksView } from './components/BookmarksView';
import { ALL_BENEFITS } from './data/allBenefits';
import { BenefitItem, CategoryType } from './types';
import { 
  Sparkles, 
  Landmark, 
  Building, 
  Cloud,
  ChevronRight
} from 'lucide-react';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'directory' | 'wizard' | 'nuances' | 'matrix' | 'bookmarks'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedState, setSelectedState] = useState('All India');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedItemForModal, setSelectedItemForModal] = useState<BenefitItem | null>(null);
  const [activeDevice, setActiveDevice] = useState<'responsive' | 'mobile_frame'>('responsive');

  // Bookmarks with localStorage
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

  // Featured "Perk of the Day"
  const featuredPerk = ALL_BENEFITS.find(i => i.id === 'sisfs-seed-fund-scheme') || ALL_BENEFITS[0];

  return (
    <DeviceFrameWrapper activeDevice={activeDevice} setActiveDevice={setActiveDevice}>
      {/* PWA Install Banner */}
      <InstallAppBanner />

      {/* Main App Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        bookmarksCount={bookmarkedIds.length}
      />

      {/* Main Scrollable Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-28 space-y-6">
        {/* VIEW 1: DIRECTORY / EXPLORE */}
        {currentView === 'directory' && (
          <div className="space-y-6">
            {/* Native App Stories / Quick Action Pills Carousel */}
            <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none pt-1">
              <button
                onClick={() => setCurrentView('wizard')}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs whitespace-nowrap shadow-lg shadow-emerald-600/25 shrink-0 hover:scale-105 transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate My Free Stack</span>
              </button>

              <button
                onClick={() => setSelectedCategory('government')}
                className="flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-amber-500/30 text-amber-300 font-semibold text-xs whitespace-nowrap hover:bg-slate-850 shrink-0 transition-colors"
              >
                <Landmark className="w-4 h-4 text-amber-400" />
                <span>₹50 Cr+ Grants</span>
              </button>

              <button
                onClick={() => setSelectedCategory('banking')}
                className="flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-emerald-500/30 text-emerald-300 font-semibold text-xs whitespace-nowrap hover:bg-slate-850 shrink-0 transition-colors"
              >
                <Building className="w-4 h-4 text-emerald-400" />
                <span>Zero Balance Banking</span>
              </button>

              <button
                onClick={() => setSelectedCategory('saas_perks')}
                className="flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-cyan-500/30 text-cyan-300 font-semibold text-xs whitespace-nowrap hover:bg-slate-850 shrink-0 transition-colors"
              >
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span>$350k+ Cloud & AI</span>
              </button>

              <button
                onClick={() => setCurrentView('nuances')}
                className="flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-slate-700 text-slate-300 font-semibold text-xs whitespace-nowrap hover:bg-slate-850 shrink-0 transition-colors"
              >
                <span>⚠️ Gotchas Manual</span>
              </button>
            </div>

            {/* Featured Hero Banner Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-950 border border-indigo-500/40 p-5 sm:p-7 shadow-2xl">
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center">
                    ⭐ Featured Founder Scheme
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    Non-Dilutive Capital
                  </span>
                </div>

                <div>
                  <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {featuredPerk.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                    {featuredPerk.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="text-xs font-black text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
                    💰 {featuredPerk.valueAmount}
                  </div>

                  <button
                    onClick={() => setSelectedItemForModal(featuredPerk)}
                    className="flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    <span>View Application Blueprint</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filter and Search Bar */}
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

            {/* Grid of Benefit Cards */}
            {filteredBenefits.length === 0 ? (
              <div className="text-center py-12 bg-slate-900/40 rounded-3xl border border-dashed border-slate-800 p-8 space-y-3">
                <div className="text-3xl">🔍</div>
                <h3 className="text-base font-bold text-white">No matching perks found</h3>
                <p className="text-xs text-slate-400">Try adjusting your filters or resetting search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedState('All India');
                    setSelectedTag(null);
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredBenefits.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    isBookmarked={bookmarkedIds.includes(item.id)}
                    onToggleBookmark={toggleBookmark}
                    onOpenDetails={(item) => setSelectedItemForModal(item)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: ELIGIBILITY WIZARD */}
        {currentView === 'wizard' && (
          <EligibilityWizard
            onSelectBenefit={(item) => setSelectedItemForModal(item)}
          />
        )}

        {/* VIEW 3: NUANCES & TRAPS GUIDE */}
        {currentView === 'nuances' && <NuancesGuide />}

        {/* VIEW 4: COMPARISON MATRIX */}
        {currentView === 'matrix' && <ComparisonMatrix />}

        {/* VIEW 5: BOOKMARKS */}
        {currentView === 'bookmarks' && (
          <BookmarksView
            bookmarkedItems={bookmarkedItems}
            onToggleBookmark={toggleBookmark}
            onOpenDetails={(item) => setSelectedItemForModal(item)}
            onClearAll={() => setBookmarkedIds([])}
          />
        )}
      </main>

      {/* Floating App Bottom Dock Navigation */}
      <BottomTabBar
        currentView={currentView}
        setCurrentView={setCurrentView}
        bookmarksCount={bookmarkedIds.length}
      />

      {/* Blueprint Detail Modal */}
      <DetailModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        isBookmarked={selectedItemForModal ? bookmarkedIds.includes(selectedItemForModal.id) : false}
        onToggleBookmark={toggleBookmark}
      />
    </DeviceFrameWrapper>
  );
};

export default App;
