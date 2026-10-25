import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Bookmark, BookmarkCheck, Share2, AlertCircle, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { CuratedItem } from '../data/curatedDirectory';

interface ItemDetailPageProps {
  item: CuratedItem;
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const ItemDetailPage: React.FC<ItemDetailPageProps> = ({
  item,
  onBack,
  isBookmarked,
  onToggleBookmark,
  onNext,
  onPrev
}) => {
  // Keyboard navigation: Esc to go back, ArrowLeft/ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack, onNext, onPrev]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.oneLiner,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-150">
      {/* Top Nav: Back button + Prev/Next + Bookmark + Share */}
      <div className="flex items-center justify-between gap-3 text-xs font-mono text-slate-400 pb-3 border-b border-slate-800/80">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-slate-300 hover:text-white font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to List</span>
          <span className="hidden sm:inline text-slate-500 text-[10px] ml-1">(Esc)</span>
        </button>

        <div className="flex items-center space-x-2">
          {onPrev && (
            <button
              onClick={onPrev}
              className="p-1.5 rounded-lg bg-[#0d121f] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Previous item"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="p-1.5 rounded-lg bg-[#0d121f] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Next item"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => onToggleBookmark(item.id)}
            className="p-1.5 rounded-lg bg-[#0d121f] border border-slate-800 text-slate-400 hover:text-indigo-400 transition-colors"
            title={isBookmarked ? 'Saved' : 'Save bookmark'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'text-indigo-400 fill-indigo-400' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-1.5 rounded-lg bg-[#0d121f] border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Share page"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Single-Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-0.5 text-xs font-mono font-bold rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {item.categoryLabel}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {item.stateOrRegion}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
          {item.title}
        </h1>

        {/* Big Value Pill */}
        <div className="inline-block px-3.5 py-1.5 bg-[#0d121f] border border-emerald-500/30 rounded-xl">
          <span className="text-sm sm:text-base font-mono font-black text-emerald-400">
            💰 {item.value}
          </span>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed pt-1">
          {item.oneLiner}
        </p>
      </div>

      {/* Section 1: Why It Matters (The Leverage) */}
      <div className="bg-[#0d121f] border border-slate-800/80 rounded-xl p-4 sm:p-5 space-y-2">
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
          Why Founders Care
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          {item.whyItMatters}
        </p>
        <div className="text-xs font-mono text-slate-400 pt-1">
          Best suited for: <span className="text-slate-300 font-medium">{item.bestFor}</span>
        </div>
      </div>

      {/* Section 2: The Catch (Unwritten Fine Print) */}
      <div className="bg-amber-950/20 border border-amber-500/25 rounded-xl p-4 sm:p-5 space-y-1.5">
        <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
          <AlertCircle className="w-4 h-4" />
          <span>The Catch / Fine Print</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
          {item.theCatch}
        </p>
      </div>

      {/* Section 3: Eligibility Checklist */}
      <div className="bg-[#0d121f] border border-slate-800/80 rounded-xl p-4 sm:p-5 space-y-3">
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
          Eligibility Requirements
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
          {item.eligibility.map((crit, idx) => (
            <li key={idx} className="flex items-start gap-2 leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{crit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 4: How To Claim (3-4 Steps) */}
      <div className="bg-[#0d121f] border border-slate-800/80 rounded-xl p-4 sm:p-5 space-y-3">
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
          Step-by-Step Execution Plan
        </div>
        <ol className="space-y-2.5 text-xs sm:text-sm text-slate-300">
          {item.howToClaim.map((step, idx) => (
            <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Section 5: Official Destination CTA */}
      <div className="pt-2">
        <a
          href={item.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-5 bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-white/5 font-mono"
        >
          <span>Open Official Portal ({item.domain})</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
