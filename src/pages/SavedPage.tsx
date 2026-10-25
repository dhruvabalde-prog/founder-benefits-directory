import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, Bookmark } from 'lucide-react';
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
    <div className="space-y-6 animate-in fade-in duration-150">
      <div className="flex items-center justify-between pb-3 border-b border-stone-200">
        <div>
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
            Saved Programs ({savedItems.length})
          </h1>
          <p className="text-xs font-mono text-stone-500">
            Stored locally in your browser for offline reference.
          </p>
        </div>

        {savedItems.length > 0 && (
          <button
            onClick={onClearAll}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-rose-700 hover:bg-rose-50 border border-rose-200 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {savedItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-stone-300 p-6 space-y-3">
          <Bookmark className="w-8 h-8 text-stone-400 mx-auto" />
          <div className="text-base font-serif font-bold text-stone-800">No programs saved yet</div>
          <p className="text-xs text-stone-500 font-sans max-w-sm mx-auto">
            Click 'Save' on any dedicated scheme or grant page to pin it to your personal shortlist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#274e37] text-white rounded-md text-xs font-medium font-sans mt-2"
          >
            <span>Browse Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {savedItems.map((item) => (
            <Link
              key={item.id}
              to={`/benefit/${item.slug}`}
              className="group block bg-white hover:bg-[#fafaf8] border border-stone-200 hover:border-stone-400 rounded-xl p-5 transition-all shadow-xs"
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

              <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-stone-500">{item.provider}</span>
                <span className="text-[#274e37] font-semibold flex items-center space-x-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
