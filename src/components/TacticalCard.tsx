import React, { useState } from 'react';
import { ExternalLink, Bookmark, BookmarkCheck, ChevronDown, ChevronUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PlaybookItem } from '../data/playbookContent';

interface TacticalCardProps {
  item: PlaybookItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const TacticalCard: React.FC<TacticalCardProps> = ({
  item,
  isBookmarked,
  onToggleBookmark
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative bg-[#0d121f] hover:bg-[#111726] border border-slate-800/80 hover:border-slate-700 rounded-xl p-4 sm:p-5 transition-all duration-150">
      {/* Top Meta Row */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-tight rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {item.badge}
          </span>
          <span className="text-[11px] text-slate-400 font-medium">
            {item.entity}
          </span>
          {item.stateOrRegion && item.stateOrRegion !== 'All States / Central' && (
            <span className="text-[10px] text-slate-400 px-1.5 py-0.2 bg-slate-800/60 rounded border border-slate-800">
              📍 {item.stateOrRegion}
            </span>
          )}
        </div>

        <button
          onClick={() => onToggleBookmark(item.id)}
          className="text-slate-500 hover:text-indigo-400 p-1 transition-colors"
          title={isBookmarked ? 'Saved to Playbook' : 'Save for later'}
        >
          {isBookmarked ? (
            <BookmarkCheck className="w-4 h-4 text-indigo-400" />
          ) : (
            <Bookmark className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Title & Value Row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-white transition-colors tracking-tight">
          {item.title}
        </h3>
        <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400 whitespace-nowrap">
          {item.amountOrValue}
        </div>
      </div>

      {/* Target Audience Line */}
      <div className="text-[11px] text-slate-400 mb-2 font-mono">
        Best for: <span className="text-slate-300">{item.targetAudience}</span>
      </div>

      {/* Why Founders Care (Plain English) */}
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
        {item.whyFoundersCare}
      </p>

      {/* The Catch / Fine Print Box (High-Value Insight) */}
      <div className="bg-amber-950/20 border border-amber-500/20 rounded-lg p-2.5 flex items-start gap-2 mb-3">
        <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-[11px] text-amber-200/90 leading-normal">
          <strong className="text-amber-300 font-semibold">The Catch: </strong>
          {item.theCatch}
        </p>
      </div>

      {/* Expandable Step-by-Step Execution */}
      {expanded && (
        <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2 text-xs animate-in fade-in duration-100">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Execution Blueprint
          </div>
          <ol className="space-y-1.5 text-slate-300">
            {item.howToClaim.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="w-4 h-4 rounded bg-slate-800 text-slate-300 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Bottom Action Strip */}
      <div className="pt-2 flex items-center justify-between text-xs">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-slate-400 hover:text-white font-medium flex items-center gap-1 py-1 transition-colors"
        >
          <span>{expanded ? 'Hide steps' : 'How to claim'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <a
          href={item.directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-mono text-xs font-semibold rounded-lg transition-colors border border-slate-700"
        >
          <span>{item.domain}</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    </article>
  );
};
