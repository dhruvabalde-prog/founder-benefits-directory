import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
  ShieldCheck,
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
  const navigate = useNavigate();
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
        <h2 className="text-xl font-bold text-white">Program Not Found</h2>
        <p className="text-xs text-slate-400">The benefit or scheme you are looking for does not exist in the catalog.</p>
        <Link
          to="/"
          className="inline-flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Index</span>
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
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 animate-in fade-in duration-150">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex items-center justify-between gap-3 text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
        <Link 
          to="/" 
          className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Index</span>
          <span>/</span>
          <span className="text-slate-300">{item.categoryLabel}</span>
        </Link>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#0d121f] hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Copy Direct Link"
          >
            <Share2 className="w-3 h-3" />
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>

          <button
            onClick={() => onToggleBookmark(item.id)}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#0d121f] hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-indigo-400 transition-colors"
            title={isBookmarked ? 'Saved to Bookmarks' : 'Save Program'}
          >
            {isBookmarked ? (
              <>
                <BookmarkCheck className="w-3 h-3 text-indigo-400" />
                <span className="text-indigo-300">Saved</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3 h-3" />
                <span>Save</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Program Hero Header */}
      <header className="space-y-3.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {item.badge}
          </span>
          <span className="text-xs font-mono text-slate-400">
            Disbursed by: <strong className="text-slate-200">{item.provider}</strong>
          </span>
          {item.stateOrRegion && (
            <span className="text-xs font-mono text-slate-400 px-2 py-0.5 bg-[#0d121f] rounded border border-slate-800">
              📍 {item.stateOrRegion}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {item.title}
        </h1>

        {/* Primary Cash/Value Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-sm sm:text-base font-bold">
          <span>💰 Financial Value:</span>
          <span>{item.valueAmount}</span>
        </div>

        {/* Action Button: Direct Portal */}
        <div className="pt-2 flex items-center gap-3">
          <a
            href={item.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-colors font-mono shadow-md"
          >
            <span>Apply on Official Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Timeline: {item.approvalTimeline}</span>
          </div>
        </div>
      </header>

      {/* MODULE 1: EXECUTIVE BRIEF */}
      <section className="space-y-2 bg-[#0d121f] border border-slate-800/80 rounded-2xl p-5 sm:p-6">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
          Executive Brief
        </h2>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
          {item.executiveSummary}
        </p>

        <div className="pt-3 border-t border-slate-800/80 mt-3">
          <div className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider mb-1">
            Why Founders Care
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {item.whyFoundersCare}
          </p>
        </div>
      </section>

      {/* MODULE 2: ELIGIBILITY CHECKLIST */}
      <section className="space-y-3 bg-[#0d121f] border border-slate-800/80 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Eligibility Checklist
          </h2>
          <span className="text-[11px] font-mono text-emerald-400">
            {item.eligibility.length} Criteria
          </span>
        </div>

        <ul className="space-y-2">
          {item.eligibility.map((criterion, idx) => (
            <li 
              key={idx}
              className="flex items-start gap-2.5 bg-[#111726] p-3 rounded-xl border border-slate-800/60 text-xs sm:text-sm text-slate-200 leading-relaxed"
            >
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                ✓
              </div>
              <span>{criterion}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* MODULE 3: THE GOTCHAS & FINE PRINT */}
      <section className="space-y-3 bg-amber-950/20 border border-amber-500/30 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>The Insider Gotchas & Fine Print</span>
        </div>
        <p className="text-xs text-amber-200/80">
          The fine print that causes 90% of rejections and how to structure your application to pass committee scrutiny.
        </p>

        <div className="space-y-2 pt-1">
          {item.gotchasAndNuances.map((gotcha, idx) => (
            <div 
              key={idx}
              className="bg-black/30 border border-amber-500/20 p-3 rounded-xl text-xs sm:text-sm text-amber-100/90 leading-relaxed flex items-start gap-2.5"
            >
              <span className="text-amber-400 font-bold font-mono shrink-0">!</span>
              <span>{gotcha}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MODULE 4: REQUIRED DOCUMENTS */}
      <section className="space-y-3 bg-[#0d121f] border border-slate-800/80 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Document Preparation Pack
          </h2>
          <span className="text-[11px] font-mono text-slate-400">PDFs to gather before applying</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {item.documentsRequired.map((doc, idx) => (
            <div 
              key={idx}
              className="bg-[#111726] border border-slate-800/60 p-3 rounded-xl flex items-start gap-2 text-xs text-slate-300"
            >
              <FileText className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MODULE 5: STEP-BY-STEP APPLICATION WORKFLOW */}
      <section className="space-y-3 bg-[#0d121f] border border-slate-800/80 rounded-2xl p-5 sm:p-6">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
          Step-by-Step Application Roadmap
        </h2>

        <ol className="space-y-2.5">
          {item.applicationSteps.map((step, idx) => (
            <li 
              key={idx}
              className="bg-[#111726] border border-slate-800/60 p-3.5 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed"
            >
              <span className="w-5 h-5 rounded bg-slate-800 text-indigo-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* MODULE 6: STACKING STRATEGY */}
      <section className="space-y-2.5 bg-[#0d121f] border border-slate-800/80 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Strategic Stacking Recommendations</span>
        </div>

        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
          {item.stackingTips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2 bg-[#111726] p-3 rounded-xl border border-slate-800/60">
              <span className="text-indigo-400 font-bold shrink-0">→</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* BOTTOM ACTION BAR */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 text-xs font-mono">
        <Link 
          to="/" 
          className="flex items-center space-x-1.5 text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Programs</span>
        </Link>

        <a
          href={item.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors text-xs"
        >
          <span>Open {item.domain}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
};
