import React from 'react';
import { Search, X, Sparkles, BookOpen } from 'lucide-react';

interface PlaybookHeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeChapter: string;
  setActiveChapter: (ch: string) => void;
  savedCount: number;
}

export const PlaybookHeader: React.FC<PlaybookHeaderProps> = ({
  searchQuery,
  setSearchQuery,
  activeChapter,
  setActiveChapter,
  savedCount
}) => {
  return (
    <header className="space-y-5 pb-4 border-b border-slate-800/80">
      {/* Top Navbar Row */}
      <div className="flex items-center justify-between">
        <div 
          onClick={() => setActiveChapter('all')}
          className="flex items-center space-x-2.5 cursor-pointer select-none"
        >
          <div className="w-7 h-7 rounded-lg bg-white text-slate-950 flex items-center justify-center font-black text-xs">
            FP
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-white">FounderPerks</span>
            <span className="text-slate-400 text-xs ml-2 font-mono hidden sm:inline">• Private Field Manual</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveChapter('custom_stack')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeChapter === 'custom_stack'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-indigo-400 hover:bg-indigo-500/10 border border-indigo-500/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>My Survival Stack</span>
          </button>

          <button
            onClick={() => setActiveChapter('saved')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeChapter === 'saved'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Bookmarks</span>
            {savedCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] bg-slate-700 text-white font-mono rounded">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Editorial Title & Manifesto */}
      <div className="space-y-2 pt-2">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
          <span>●</span>
          <span>Updated for 2025–2026 Founder Cohorts</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          The Founder Survival & Leverage Playbook
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          The unwritten cheat-code manual for Indian tech founders: how to draw ₹25k/month living stipends before funding, claim up to ₹50 Lakhs in non-dilutive government checks, unlock $350k in free servers & LLMs, and legally pay 0% tax on US SaaS revenue.
        </p>

        {/* Minimal Metrics Pill Strip */}
        <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
          <div className="px-2.5 py-1 rounded bg-[#0d121f] border border-slate-800 text-slate-300">
            <span className="text-emerald-400 font-bold">₹25k/Mo</span> Living Stipends
          </div>
          <div className="px-2.5 py-1 rounded bg-[#0d121f] border border-slate-800 text-slate-300">
            <span className="text-indigo-400 font-bold">₹50 Lakhs</span> Non-Dilutive Grants
          </div>
          <div className="px-2.5 py-1 rounded bg-[#0d121f] border border-slate-800 text-slate-300">
            <span className="text-cyan-400 font-bold">$350,000</span> Free Cloud Compute
          </div>
          <div className="px-2.5 py-1 rounded bg-[#0d121f] border border-slate-800 text-slate-300">
            <span className="text-amber-400 font-bold">0% Tax</span> Foreign Export Shield
          </div>
        </div>
      </div>

      {/* Global Minimal Search Bar */}
      <div className="relative pt-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search playbooks, stipends, cloud compute, state policies, hacks (e.g. 'Rajasthan', 'SISFS', 'OpenAI', 'Forex')..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-9 py-2.5 bg-[#0d121f] border border-slate-800 rounded-xl text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-slate-600 transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </header>
  );
};
