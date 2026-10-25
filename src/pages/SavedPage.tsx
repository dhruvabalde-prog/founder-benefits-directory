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
  onToggleBookmark,
  onClearAll
}) => {
  const savedItems: MasterItem[] = MASTER_CATALOG.filter((item) =>
    bookmarkedIds.includes(item.id)
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Saved Programs ({savedItems.length})
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Stored locally in your browser for quick reference.
          </p>
        </div>

        {savedItems.length > 0 && (
          <button
            onClick={onClearAll}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-rose-400 hover:bg-rose-950/20 border border-rose-500/20 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {savedItems.length === 0 ? (
        <div className="text-center py-16 bg-[#0d121f] rounded-2xl border border-dashed border-slate-800 p-6 space-y-3">
          <Bookmark className="w-8 h-8 text-slate-600 mx-auto" />
          <div className="text-sm font-bold text-slate-300">No programs saved yet</div>
          <p className="text-xs text-slate-400 font-mono max-w-sm mx-auto">
            Click 'Save' on any dedicated scheme or grant page to pin it to your personal checklist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 px-4 py-2 bg-white text-slate-950 rounded-lg text-xs font-bold font-mono"
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
              className="group block bg-[#0d121f] hover:bg-[#111726] border border-slate-800 rounded-xl p-4 transition-all"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-mono text-[10px] text-indigo-400 font-bold uppercase">
                  {item.badge}
                </span>
                <span className="font-mono font-bold text-emerald-400">
                  {item.valueAmount}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                {item.whyFoundersCare}
              </p>

              <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-slate-500">{item.provider}</span>
                <span className="text-indigo-400 font-bold flex items-center space-x-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
