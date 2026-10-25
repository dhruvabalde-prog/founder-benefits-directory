import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  Check, 
  AlertTriangle, 
  FileText, 
  Layers, 
  Share2, 
  Clock, 
  Sparkles
} from 'lucide-react';
import { MASTER_CATALOG, MasterItem } from '../data/masterCatalog';

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

  // Find item by slug or id
  const item: MasterItem | undefined = MASTER_CATALOG.find(
    (i) => i.slug === slug || i.id === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-serif font-bold text-stone-900">Program Not Found</h2>
        <p className="text-xs text-stone-500 font-sans">The benefit or scheme you are looking for does not exist in the catalog.</p>
        <Link
          to="/"
          className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#274e37] text-white rounded-md text-xs font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalog</span>
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
    <article className="max-w-3xl mx-auto py-3 sm:py-6 space-y-8 animate-in fade-in duration-150">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex items-center justify-between gap-3 text-xs font-mono text-stone-500 pb-3 border-b border-stone-200">
        <Link 
          to="/" 
          className="flex items-center space-x-1.5 text-stone-600 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Index</span>
          <span>/</span>
          <span className="text-stone-800 font-semibold">{item.categoryLabel}</span>
        </Link>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 transition-colors text-xs shadow-xs"
            title="Copy Direct Link"
          >
            <Share2 className="w-3.5 h-3.5 text-stone-500" />
            <span>{copied ? 'Copied URL' : 'Share'}</span>
          </button>

          <button
            onClick={() => onToggleBookmark(item.id)}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 transition-colors text-xs shadow-xs"
            title={isBookmarked ? 'Saved to Bookmarks' : 'Save Program'}
          >
            {isBookmarked ? (
              <>
                <BookmarkCheck className="w-3.5 h-3.5 text-[#274e37]" />
                <span className="text-[#274e37] font-semibold">Saved</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5 text-stone-500" />
                <span>Save</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Program Hero Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5]">
            {item.badge}
          </span>
          <span className="text-xs font-mono text-stone-500">
            Disbursed by: <strong className="text-stone-700 font-semibold">{item.provider}</strong>
          </span>
          {item.stateOrRegion && (
            <span className="text-[11px] font-mono text-stone-600 px-2 py-0.5 bg-stone-100 rounded border border-stone-200">
              📍 {item.stateOrRegion}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
          {item.title}
        </h1>

        {/* Primary Cash/Value Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#f2f7f4] border border-[#cce2d5] text-[#274e37] font-mono text-xs sm:text-sm font-bold">
          <span>Financial Value:</span>
          <span>{item.valueAmount}</span>
        </div>

        {/* Action Button: Direct Portal */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href={item.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#274e37] hover:bg-[#1c3827] text-white font-medium text-xs sm:text-sm rounded-lg transition-colors font-sans shadow-xs"
          >
            <span>Apply on Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center space-x-1.5 text-xs font-mono text-stone-500">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>Approval Timeline: {item.approvalTimeline}</span>
          </div>
        </div>
      </header>

      {/* MODULE 1: EXECUTIVE BRIEF */}
      <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 space-y-3 shadow-xs">
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
          Executive Summary
        </h2>
        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
          {item.executiveSummary}
        </p>

        <div className="pt-3 border-t border-stone-100 mt-3">
          <div className="text-xs font-mono font-semibold text-[#274e37] uppercase tracking-wider mb-1">
            Why Founders Care
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
            {item.whyFoundersCare}
          </p>
        </div>
      </section>

      {/* MODULE 2: ELIGIBILITY CHECKLIST */}
      <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 space-y-3.5 shadow-xs">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
            Eligibility Checklist
          </h2>
          <span className="text-[11px] font-mono text-[#274e37] font-semibold">
            {item.eligibility.length} Criteria
          </span>
        </div>

        <ul className="space-y-2">
          {item.eligibility.map((criterion, idx) => (
            <li 
              key={idx}
              className="flex items-start gap-2.5 bg-[#fafaf8] p-3 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans"
            >
              <div className="w-4 h-4 rounded-full bg-[#f2f7f4] text-[#274e37] font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs border border-[#cce2d5]">
                ✓
              </div>
              <span>{criterion}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* MODULE 3: THE GOTCHAS & FINE PRINT */}
      <section className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-5 sm:p-6 space-y-3 shadow-xs">
        <div className="flex items-center space-x-2 text-amber-900 font-mono text-xs font-bold uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>Insider Gotchas & Fine Print</span>
        </div>
        <p className="text-xs text-amber-800/90 font-sans">
          The exact administrative technicalities that cause 90% of rejections and how to safeguard your application.
        </p>

        <div className="space-y-2 pt-1">
          {item.gotchasAndNuances.map((gotcha, idx) => (
            <div 
              key={idx}
              className="bg-white/80 border border-amber-200/90 p-3 rounded-lg text-xs sm:text-sm text-stone-800 leading-relaxed flex items-start gap-2.5 font-sans"
            >
              <span className="text-amber-600 font-bold font-mono shrink-0">!</span>
              <span>{gotcha}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MODULE 4: REQUIRED DOCUMENTS */}
      <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 space-y-3 shadow-xs">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
            Document Preparation Pack
          </h2>
          <span className="text-[11px] font-mono text-stone-400">Gather PDFs before submission</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {item.documentsRequired.map((doc, idx) => (
            <div 
              key={idx}
              className="bg-[#fafaf8] border border-stone-200 p-3 rounded-lg flex items-start gap-2 text-xs text-stone-700 font-sans"
            >
              <FileText className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MODULE 5: STEP-BY-STEP APPLICATION WORKFLOW */}
      <section className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 space-y-3 shadow-xs">
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
          Step-by-Step Application Roadmap
        </h2>

        <ol className="space-y-2.5">
          {item.applicationSteps.map((step, idx) => (
            <li 
              key={idx}
              className="bg-[#fafaf8] border border-stone-200 p-3.5 rounded-lg flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans"
            >
              <span className="w-5 h-5 rounded bg-stone-200 text-stone-800 font-mono text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* MODULE 6: STACKING STRATEGY */}
      <section className="bg-[#f2f7f4] border border-[#cce2d5] rounded-xl p-5 sm:p-6 space-y-2.5 shadow-xs">
        <div className="flex items-center space-x-2 text-[#274e37] font-mono text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Strategic Stacking Recommendations</span>
        </div>

        <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-sans">
          {item.stackingTips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2 bg-white/90 p-3 rounded-lg border border-[#cce2d5]/80">
              <span className="text-[#274e37] font-bold shrink-0">→</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* BOTTOM ACTION BAR */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200 text-xs font-mono">
        <Link 
          to="/" 
          className="flex items-center space-x-1.5 text-stone-600 hover:text-stone-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Programs</span>
        </Link>

        <a
          href={item.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#274e37] hover:bg-[#1c3827] text-white font-medium rounded-lg transition-colors text-xs shadow-xs font-sans"
        >
          <span>Open {item.domain}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
};
