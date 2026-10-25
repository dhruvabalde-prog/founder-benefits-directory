import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  AlertTriangle, 
  FileText, 
  Share2, 
  Clock, 
  Sparkles,
  CheckCircle2,
  ListOrdered
} from 'lucide-react';
import { MASTER_CATALOG, MasterItem } from '../data/masterCatalog';
import { ExpandableTile } from '../components/ExpandableTile';

interface DetailPageProps {
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({
  bookmarkedIds,
  onToggleBookmark
}) => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const item: MasterItem | undefined = MASTER_CATALOG.find(
    (i) => i.slug === slug || i.id === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-serif font-bold text-stone-900">Not Found</h2>
        <Link
          to="/"
          className="p-3 bg-[#274e37] text-white rounded-lg inline-flex items-center justify-center"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  const isBookmarked = bookmarkedIds.includes(item.id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="max-w-2xl mx-auto py-2 sm:py-4 space-y-4 sm:space-y-5 animate-in fade-in duration-150 pb-20 sm:pb-8">
      {/* Top Nav & Action Strip (Icon-Only) */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-stone-200">
        <Link 
          to="/" 
          className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
          aria-label="Back to Catalog"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={handleCopyLink}
            className="p-2 rounded-lg bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 transition-colors shadow-xs"
            aria-label="Share URL"
            title={copied ? 'Copied' : 'Share'}
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onToggleBookmark(item.id)}
            className={`p-2 rounded-lg transition-colors border shadow-xs ${
              isBookmarked
                ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
            aria-label="Bookmark"
            title={isBookmarked ? 'Saved' : 'Save'}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 fill-[#274e37]" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>

          <a
            href={item.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#274e37] hover:bg-[#1c3827] text-white transition-colors shadow-xs"
            aria-label="Open Official Portal"
            title="Official Portal"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Program Hero Header */}
      <header className="space-y-2.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5]">
            {item.badge}
          </span>
          <span className="text-xs font-mono text-stone-500">
            {item.provider}
          </span>
          {item.stateOrRegion && item.stateOrRegion !== 'All States / Central' && (
            <span className="text-[10px] font-mono text-stone-600 px-1.5 py-0.5 bg-stone-100 rounded border border-stone-200">
              📍 {item.stateOrRegion}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight leading-snug">
          {item.title}
        </h1>

        <div className="flex items-center justify-between gap-2 pt-0.5">
          <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#f2f7f4] border border-[#cce2d5] text-[#274e37] font-mono text-xs sm:text-sm font-bold">
            {item.valueAmount}
          </div>

          <div className="flex items-center space-x-1.5 text-xs font-mono text-stone-400">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>{item.approvalTimeline}</span>
          </div>
        </div>
      </header>

      {/* Expandable Tiles (Ghar Expand System) */}
      <div className="space-y-2.5 pt-1">
        {/* Tile 1: Brief */}
        <ExpandableTile
          title="Summary & Founder Impact"
          defaultOpen={true}
          icon={<FileText className="w-4 h-4 text-stone-500" />}
        >
          <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans pt-1">
            <p>{item.executiveSummary}</p>
            <div className="p-3 bg-[#fafaf8] rounded-lg border border-stone-200 text-stone-800">
              <span className="font-mono text-[10px] uppercase font-bold text-[#274e37] block mb-1">
                Strategic Advantage
              </span>
              <p>{item.whyFoundersCare}</p>
            </div>
          </div>
        </ExpandableTile>

        {/* Tile 2: Eligibility */}
        <ExpandableTile
          title="Eligibility Criteria"
          badge={item.eligibility.length}
          defaultOpen={false}
          icon={<CheckCircle2 className="w-4 h-4 text-[#274e37]" />}
        >
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-sans pt-1">
            {item.eligibility.map((crit, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-2.5 bg-[#fafaf8] p-2.5 rounded-lg border border-stone-200"
              >
                <span className="w-4 h-4 rounded-full bg-[#f2f7f4] text-[#274e37] font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs border border-[#cce2d5]">
                  ✓
                </span>
                <span>{crit}</span>
              </li>
            ))}
          </ul>
        </ExpandableTile>

        {/* Tile 3: Gotchas & Traps */}
        <ExpandableTile
          title="Gotchas & Fine Print"
          badge={item.gotchasAndNuances.length}
          variant="alert"
          defaultOpen={false}
          icon={<AlertTriangle className="w-4 h-4 text-amber-600" />}
        >
          <div className="space-y-2 text-xs sm:text-sm text-stone-800 font-sans pt-1">
            {item.gotchasAndNuances.map((gotcha, idx) => (
              <div 
                key={idx}
                className="bg-white/90 border border-amber-200 p-2.5 rounded-lg flex items-start gap-2"
              >
                <span className="text-amber-600 font-bold font-mono shrink-0">!</span>
                <span>{gotcha}</span>
              </div>
            ))}
          </div>
        </ExpandableTile>

        {/* Tile 4: Documents Required */}
        <ExpandableTile
          title="Document Pack"
          badge={item.documentsRequired.length}
          defaultOpen={false}
          icon={<FileText className="w-4 h-4 text-stone-500" />}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 font-sans pt-1">
            {item.documentsRequired.map((doc, idx) => (
              <div 
                key={idx}
                className="bg-[#fafaf8] border border-stone-200 p-2.5 rounded-lg flex items-start gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </ExpandableTile>

        {/* Tile 5: Application Steps */}
        <ExpandableTile
          title="Application Roadmap"
          badge={item.applicationSteps.length}
          defaultOpen={false}
          icon={<ListOrdered className="w-4 h-4 text-stone-500" />}
        >
          <ol className="space-y-2 text-xs sm:text-sm text-stone-700 font-sans pt-1">
            {item.applicationSteps.map((step, idx) => (
              <li 
                key={idx}
                className="bg-[#fafaf8] border border-stone-200 p-2.5 rounded-lg flex items-start gap-2.5"
              >
                <span className="w-5 h-5 rounded bg-stone-200 text-stone-800 font-mono text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </ExpandableTile>

        {/* Tile 6: Stacking Strategy */}
        <ExpandableTile
          title="Stacking Recommendations"
          badge={item.stackingTips.length}
          variant="highlight"
          defaultOpen={false}
          icon={<Sparkles className="w-4 h-4 text-[#274e37]" />}
        >
          <ul className="space-y-2 text-xs sm:text-sm text-stone-800 font-sans pt-1">
            {item.stackingTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white/90 p-2.5 rounded-lg border border-[#cce2d5]">
                <span className="text-[#274e37] font-bold shrink-0">→</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </ExpandableTile>
      </div>

      {/* Bottom Sticky Action Bar (Icon-Only) */}
      <div className="pt-3 flex items-center justify-between border-t border-stone-200">
        <Link 
          to="/" 
          className="p-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
          aria-label="Back to Catalog"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        <a
          href={item.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-[#274e37] hover:bg-[#1c3827] text-white transition-colors shadow-xs flex items-center justify-center"
          aria-label="Open Official Portal"
          title="Open Official Portal"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </article>
  );
};
