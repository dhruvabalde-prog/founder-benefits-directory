import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';
import { AppBottomNav } from './components/AppBottomNav';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { HacksPage } from './pages/HacksPage';
import { ToolsPage } from './pages/ToolsPage';
import { LearningPage } from './pages/LearningPage';
import { NetworkingPage } from './pages/NetworkingPage';
import { SavedPage } from './pages/SavedPage';
import { ArrowUpRight } from 'lucide-react';
import { FilterState } from './components/MyntraFilterDrawer';

export const App: React.FC = () => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('founder_master_saved');
      return saved ? JSON.parse(saved) : ['istart-rajasthan', 'microsoft-founders-hub', 'sisfs-central'];
    } catch {
      return ['istart-rajasthan', 'microsoft-founders-hub', 'sisfs-central'];
    }
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    states: [],
    stages: [],
    sectors: [],
    entities: []
  });

  const activeFilterCount =
    filters.categories.length +
    filters.states.length +
    filters.stages.length +
    filters.sectors.length +
    filters.entities.length;

  useEffect(() => {
    try {
      localStorage.setItem('founder_master_saved', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const clearAllBookmarks = () => {
    setBookmarkedIds([]);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fdfdfc] text-stone-900 flex flex-col font-sans selection:bg-[#274e37]/15 selection:text-[#274e37]">
        {/* Sticky App Header */}
        <AppHeader 
          savedCount={bookmarkedIds.length} 
          onOpenFilterDrawer={() => setIsFilterOpen(true)}
          activeFilterCount={activeFilterCount}
        />

        {/* Viewport content */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  bookmarkedIds={bookmarkedIds} 
                  onToggleBookmark={toggleBookmark}
                  isFilterOpen={isFilterOpen}
                  setIsFilterOpen={setIsFilterOpen}
                  filters={filters}
                  setFilters={setFilters}
                />
              } 
            />
            <Route
              path="/benefit/:slug"
              element={
                <DetailPage
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
            <Route path="/hacks" element={<HacksPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/networking" element={<NetworkingPage />} />
            <Route
              path="/tools"
              element={
                <ToolsPage
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
            <Route path="/calculator" element={<Navigate to="/tools" replace />} />
            <Route
              path="/saved"
              element={
                <SavedPage
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={toggleBookmark}
                  onClearAll={clearAllBookmarks}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Mobile First Bottom Navigation Bar */}
        <AppBottomNav />

        {/* Desktop Footer */}
        <footer className="hidden sm:block border-t border-stone-200/80 bg-[#fdfdfc] py-6 text-xs text-stone-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            <span className="font-serif text-stone-600">Artha</span>
            <div className="flex items-center space-x-4 font-mono text-[11px]">
              <a
                href="https://github.com/dhruvabalde-prog/founder-benefits-directory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-[#274e37] flex items-center space-x-1 transition-colors"
                aria-label="GitHub Source"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
