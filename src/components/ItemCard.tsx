import React, { useState } from 'react';
import { 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp,
  Check
} from 'lucide-react';
import { BenefitItem } from '../types';

interface ItemCardProps {
  item: BenefitItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  isBookmarked,
  onToggleBookmark
}) => {
  const [expanded, setExpanded] = useState(false);

  // Extract friendly hostname for intuitive original link pill
  const getDomain = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace('www.', '');
    } catch {
      return 'Official Link';
    }
  };

  const domain = getDomain(item.officialLink);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'government':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'banking':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'saas_perks':
      default:
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
    }
  };

  return (
    <article className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 sm:p-5 transition-all shadow-sm">
      {/* Top Header: Category & Bookmark */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md border uppercase tracking-wider ${getCategoryColor(item.category)}`}>
            {item.category === 'government' ? 'Govt' : item.category === 'banking' ? 'Banking' : 'Credits'}
          </span>

          <span className="text-[11px] font-semibold text-slate-400">
            {item.provider}
          </span>

          {item.statesApplicable && item.statesApplicable[0] !== 'All India' && (
            <span className="px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-300 rounded font-medium">
              {item.statesApplicable[0]}
            </span>
          )}
        </div>

        <button
          onClick={() => onToggleBookmark(item.id)}
          className="text-slate-400 hover:text-indigo-400 p-1"
          aria-label={isBookmarked ? 'Saved' : 'Save'}
        >
          {isBookmarked ? (
            <BookmarkCheck className="w-4 h-4 text-indigo-400" />
          ) : (
            <Bookmark className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-white leading-snug">
        {item.title}
      </h3>

      {/* Value Amount Pill */}
      <div className="mt-2 mb-2.5 inline-flex items-center px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-300 text-xs font-bold">
        💰 {item.valueAmount}
      </div>

      {/* Description */}
      <p className="text-xs text-slate-300 leading-relaxed">
        {item.shortDescription}
      </p>

      {/* Hidden Nuance Box (High value, compact) */}
      {item.hiddenNuances && item.hiddenNuances.length > 0 && (
        <div className="mt-3 bg-amber-500/5 border border-amber-500/20 rounded-xl p-2.5 flex items-start gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-200/90 leading-tight">
            <strong className="text-amber-300 font-semibold">Nuance: </strong>
            {item.hiddenNuances[0]}
          </p>
        </div>
      )}

      {/* Collapsible Details */}
      {expanded && (
        <div className="mt-4 pt-3 border-t border-slate-800 space-y-3.5 text-xs animate-in fade-in duration-150">
          {/* Eligibility */}
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Eligibility Checklist
            </div>
            <ul className="space-y-1.5 text-slate-300">
              {item.eligibility.map((crit, idx) => (
                <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{crit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Perks */}
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Benefits
            </div>
            <ul className="space-y-1 text-slate-300">
              {item.keyPerks.map((perk, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-indigo-400 font-bold shrink-0">•</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          {item.documentsRequired && item.documentsRequired.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Required Documents
              </div>
              <p className="text-[11px] text-slate-400">
                {item.documentsRequired.join(' • ')}
              </p>
            </div>
          )}

          {/* Steps */}
          {item.applicationStepByStep && item.applicationStepByStep.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                How to Apply
              </div>
              <ol className="space-y-1 text-slate-300 text-[11px]">
                {item.applicationStepByStep.map((step, idx) => (
                  <li key={idx} className="leading-normal">{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      {/* Action Bar (Minimal Text) */}
      <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        {/* Toggle Details CTA (Minimal text) */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-white font-medium py-1 px-2 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <span>{expanded ? 'Less' : 'Details'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Direct Original Link CTA (Intuitive Domain Badge + Minimal Apply) */}
        <a
          href={item.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg text-xs transition-colors shadow-sm"
          title={`Visit ${item.officialLink}`}
        >
          <span className="text-[10px] text-indigo-200 font-mono hidden sm:inline">{domain}</span>
          <span>Apply</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
};
