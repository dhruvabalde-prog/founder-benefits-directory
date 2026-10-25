import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { HacksPage } from './pages/HacksPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { SavedPage } from './pages/SavedPage';
import { ArrowUpRight } from 'lucide-react';

export const App: React.FC = () => {
  // Bookmarks stored in local storage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('founder_master_saved');
      return saved ? JSON.parse(saved) : ['istart-rajasthan', 'microsoft-founders-hub', 'sisfs-central'];
    } catch {
      return ['istart-rajasthan', 'microsoft-founders-hub', 'sisfs-central'];
    }
  });

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
      <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Sticky App Header */}
        <AppHeader savedCount={bookmarkedIds.length} />

        {/* Multipage Routing Viewport (max-w-4xl, centered, ultra-clean) */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
          <Routes>
            <Route path="/" element={<HomePage bookmarkedIds={bookmarkedIds} />} />
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
            <Route
              path="/calculator"
              element={
                <CalculatorPage
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={toggleBookmark}
                />
              }
            />
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

        {/* Minimal Footer */}
        <footer className="border-t border-slate-900 bg-[#070a12] py-6 text-xs font-mono text-slate-500">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
            <span>FounderPerks • High-Signal Founder Playbook</span>
            <a
              href="https://github.com/dhruvabalde-prog/founder-benefits-directory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white flex items-center space-x-1 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
