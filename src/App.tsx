import React, { useState, useMemo, useEffect } from 'react';
import { PlaybookHeader } from './components/PlaybookHeader';
import { PlaybookNav } from './components/PlaybookNav';
import { TacticalCard } from './components/TacticalCard';
import { CustomStackGenerator } from './components/CustomStackGenerator';
import { PLAYBOOK_CHAPTERS, PlaybookItem } from './data/playbookContent';
import { Trash2, BookmarkCheck, ArrowUpRight } from 'lucide-react';

export const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Bookmarks with local storage (no login friction)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('founder_playbook_saved');
      return saved ? JSON.parse(saved) : ['istart-rajasthan-stipend', 'microsoft-founders-hub', 'sisfs-central'];
    } catch {
      return ['istart-rajasthan-stipend', 'microsoft-founders-hub', 'sisfs-central'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('founder_playbook_saved', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Filtered chapters & items based on search and active tab
  const filteredChapters = useMemo(() => {
    return PLAYBOOK_CHAPTERS.map(ch => {
      const filteredItems = ch.items.filter(item => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.entity.toLowerCase().includes(q) ||
          item.whyFoundersCare.toLowerCase().includes(q) ||
          item.theCatch.toLowerCase().includes(q) ||
          item.stateOrRegion.toLowerCase().includes(q) ||
          item.tags.some(t => t.toLowerCase().includes(q))
        );
      });

      return {
        ...ch,
        items: filteredItems
      };
    }).filter(ch => {
      if (activeChapter !== 'all' && activeChapter !== 'saved' && activeChapter !== 'custom_stack') {
        if (ch.id !== activeChapter) return false;
      }
      return ch.items.length > 0;
    });
  }, [activeChapter, searchQuery]);

  // All bookmarked items
  const savedItems = useMemo(() => {
    const allItems: PlaybookItem[] = [];
    PLAYBOOK_CHAPTERS.forEach(ch => allItems.push(...ch.items));
    return allItems.filter(item => bookmarkedIds.includes(item.id));
  }, [bookmarkedIds]);

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Centered Editorial Container (Substack / Linear width) */}
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 flex-1">
        {/* Playbook Header & Manifesto */}
        <PlaybookHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeChapter={activeChapter}
          setActiveChapter={setActiveChapter}
          savedCount={bookmarkedIds.length}
        />

        {/* Sticky-feeling Chapter Nav */}
        <PlaybookNav
          activeChapter={activeChapter}
          setActiveChapter={setActiveChapter}
        />

        {/* VIEW 1: CUSTOM STACK BUILDER */}
        {activeChapter === 'custom_stack' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <CustomStackGenerator
              onToggleBookmark={toggleBookmark}
              bookmarkedIds={bookmarkedIds}
            />
          </div>
        )}

        {/* VIEW 2: SAVED BOOKMARKS */}
        {activeChapter === 'saved' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">Your Saved Playbooks ({savedItems.length})</h2>
                <p className="text-xs text-slate-400 font-mono">Pinned locally for quick offline access</p>
              </div>

              {savedItems.length > 0 && (
                <button
                  onClick={() => setBookmarkedIds([])}
                  className="flex items-center space-x-1 px-2.5 py-1 text-xs text-rose-400 hover:bg-rose-950/20 rounded-lg transition-colors border border-rose-500/20 font-mono"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {savedItems.length === 0 ? (
              <div className="text-center py-16 bg-[#0d121f] rounded-2xl border border-dashed border-slate-800 p-6 space-y-2">
                <div className="text-sm font-bold text-slate-300">No playbooks saved yet</div>
                <div className="text-xs text-slate-500 font-mono">Click the bookmark icon on any tactic to pin it here.</div>
              </div>
            ) : (
              <div className="space-y-4">
                {savedItems.map((item) => (
                  <TacticalCard
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

        {/* VIEW 3: CHAPTERS / TACTICAL PLAYBOOK FEED */}
        {activeChapter !== 'custom_stack' && activeChapter !== 'saved' && (
          <div className="space-y-12">
            {filteredChapters.length === 0 ? (
              <div className="text-center py-16 bg-[#0d121f] rounded-2xl border border-slate-800 p-6 space-y-2">
                <div className="text-sm font-bold text-white">No tactics found matching "{searchQuery}"</div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveChapter('all');
                  }}
                  className="px-3 py-1.5 bg-white text-slate-950 font-bold rounded-lg text-xs font-mono"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              filteredChapters.map((chapter) => (
                <section key={chapter.id} className="space-y-4">
                  {/* Chapter Section Title */}
                  <div className="space-y-1.5 pb-2 border-b border-slate-800/80">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-indigo-400">
                        CHAPTER {chapter.number}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {chapter.title}
                    </h2>

                    <div className="text-xs sm:text-sm font-medium text-slate-400">
                      {chapter.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      {chapter.intro}
                    </p>
                  </div>

                  {/* Chapter Tactical Cards */}
                  <div className="space-y-3.5 pt-1">
                    {chapter.items.map((item) => (
                      <TacticalCard
                        key={item.id}
                        item={item}
                        isBookmarked={bookmarkedIds.includes(item.id)}
                        onToggleBookmark={toggleBookmark}
                      />
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        )}

        {/* Minimal Footer */}
        <footer className="pt-8 border-t border-slate-900 text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            FounderPerks • Built for the Indian & Global Startup Ecosystem
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/dhruvabalde-prog/founder-benefits-directory"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 flex items-center space-x-1 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
