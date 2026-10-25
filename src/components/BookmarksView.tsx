import React from 'react';
import { BookmarkCheck, Trash2, ExternalLink, ChevronRight, Share2 } from 'lucide-react';
import { BenefitItem } from '../types';
import { ItemCard } from './ItemCard';

interface BookmarksViewProps {
  bookmarkedItems: BenefitItem[];
  onToggleBookmark: (id: string) => void;
  onOpenDetails: (item: BenefitItem) => void;
  onClearAll: () => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  bookmarkedItems,
  onToggleBookmark,
  onOpenDetails,
  onClearAll
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-full text-indigo-300 text-xs font-semibold mb-2">
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>Your Personal Founder Action List</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Saved Programs & Perks ({bookmarkedItems.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Keep track of the schemes, banking perks, and cloud credit programs you plan to apply for.
          </p>
        </div>

        {bookmarkedItems.length > 0 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={onClearAll}
              className="flex items-center space-x-1.5 px-3 py-2 bg-slate-800 hover:bg-rose-950/40 hover:text-rose-400 text-slate-300 rounded-xl text-xs font-medium transition-colors border border-slate-700 hover:border-rose-500/30"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Saved</span>
            </button>
          </div>
        )}
      </div>

      {/* Grid or Empty State */}
      {bookmarkedItems.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/30 rounded-3xl border border-dashed border-slate-800 p-8 space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto text-xl">
            🔖
          </div>
          <h3 className="text-base font-bold text-white">No items saved yet</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Browse the directory or use the "What Becomes Free?" calculator and click the bookmark icon on any scheme or cloud perk to pin it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              isBookmarked={true}
              onToggleBookmark={onToggleBookmark}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
};
