import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ArrowLeft, Bookmark } from 'lucide-react';
import { MASTER_CATALOG, MasterItem } from '../data/masterCatalog';

interface SavedPageProps {
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onClearAll: () => void;
}

export const SavedPage: React.FC<SavedPageProps> = ({
  bookmarkedIds,
  onClearAll
}) => {
  const savedItems: MasterItem[] = MASTER_CATALOG.filter((item) =>
    bookmarkedIds.includes(item.id)
  );

  return (
    <div className="space-y-4 animate-in fade-in duration-150 pb-20 sm:pb-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-stone-200">
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
          Saved ({savedItems.length})
        </h1>

        {savedItems.length > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="p-2 rounded-lg text-rose-700 hover:bg-rose-50 border border-rose-200 transition-colors"
            aria-label="Clear All"
            title="Clear All"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {savedItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-stone-300 p-6 space-y-3">
          <Bookmark className="w-8 h-8 text-stone-400 mx-auto" />
          <div className="text-sm font-serif font-bold text-stone-700">Empty</div>
          <Link
            to="/"
            className="p-3 bg-[#274e37] text-white rounded-lg inline-flex items-center justify-center"
            aria-label="Browse"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {savedItems.map((item) => (
            <Link
              key={item.id}
              to={`/benefit/${item.slug}`}
              className="group block bg-white hover:bg-[#fafaf8] border border-stone-200 hover:border-stone-400 rounded-xl p-4 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-mono text-[10px] text-[#274e37] font-semibold uppercase bg-[#f2f7f4] px-2 py-0.5 rounded border border-[#cce2d5]">
                  {item.badge}
                </span>
                <span className="font-mono font-bold text-[#274e37]">
                  {item.valueAmount}
                </span>
              </div>

              <h2 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#274e37] transition-colors">
                {item.title}
              </h2>
              <p className="text-xs text-stone-600 line-clamp-1 mt-0.5 font-sans">
                {item.whyFoundersCare}
              </p>

              <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-stone-400">{item.provider}</span>
                <span className="p-1.5 rounded-md bg-stone-100 group-hover:bg-[#274e37] group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
