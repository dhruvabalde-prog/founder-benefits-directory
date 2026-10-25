import React, { useState, useMemo, useEffect } from 'react';
import { UNIFIED_BENEFITS, QuickBenefit } from './data/unifiedBenefits';
import { ALL_INDIAN_STATES } from './data/allStates';
import { 
  Search, 
  X, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle,
  Sparkles,
  Zap
} from 'lucide-react';

export const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('All States / Central');
  const [selectedFounderType, setSelectedFounderType] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Bookmarks stored in localStorage (zero login)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fp_saved_ids');
      return saved ? JSON.parse(saved) : ['rajasthan-istart', 'sisfs-central', 'microsoft-founders-hub'];
    } catch {
      return ['rajasthan-istart', 'sisfs-central', 'microsoft-founders-hub'];
    }
  });

  const [showSavedOnly, setShowSavedOnly] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('fp_saved_ids', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Instant zero-lag filtering
  const filtered = useMemo(() => {
    return UNIFIED_BENEFITS.filter(item => {
      if (showSavedOnly && !bookmarkedIds.includes(item.id)) return false;

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

      // State filter
      if (selectedState !== 'All States / Central') {
        const matchesState = 
          item.state === selectedState || 
          item.state === 'All States / Central' || 
          item.state === 'Global / All India';
        if (!matchesState) return false;
      }

      // Founder Type filter
      if (selectedFounderType !== 'all') {
        if (!item.founderTypes.includes('all') && !item.founderTypes.includes(selectedFounderType as any)) {
          return false;
        }
      }

      // Search query
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.provider.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.theCatch.toLowerCase().includes(q) ||
          item.state.toLowerCase().includes(q) ||
          item.value.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [search, selectedCategory, selectedState, selectedFounderType, showSavedOnly, bookmarkedIds]);

  // Live intelligent value estimate
  const liveEstimate = useMemo(() => {
    if (selectedState === 'Rajasthan') return '₹25,000/mo cash + ₹25L grant + $150k compute';
    if (selectedState === 'Gujarat') return '₹25,000/mo cash + ₹30L seed + $150k compute';
    if (selectedState === 'Bihar') return '₹10 Lakhs 10-Yr 0% loan + $150k compute';
    if (selectedState === 'Karnataka') return '₹50 Lakhs ELEVATE grant + $150k compute';
    if (selectedState === 'Haryana') return '₹10L grant + 50% rent subsidy + $150k compute';
    if (selectedState === 'Uttar Pradesh') return '₹17,500/mo cash + ₹7.5L seed + $150k compute';
    if (selectedCategory === 'cash') return '₹17.5k–₹25k/month direct living stipends';
    if (selectedCategory === 'cloud') return '$350,000 in free servers, LLMs & dev seats';
    if (selectedCategory === 'hack') return 'Legal dual-state arbitrage & 0% tax shields';
    return '₹50L+ non-dilutive capital + $350k compute + 0% tax';
  }, [selectedState, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Centered Single-Page Command Surface */}
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-4">
        
        {/* Top Header Row */}
        <header className="flex items-center justify-between gap-3 pb-2 border-b border-white/5">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-white text-black font-black text-xs flex items-center justify-center">
              FP
            </span>
            <span className="font-extrabold text-sm tracking-tight text-white">FounderPerks</span>
            <span className="text-slate-500 text-xs hidden sm:inline font-mono">/ One-Page Command Center</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                showSavedOnly
                  ? 'bg-indigo-600 text-white'
                  : 'bg-[#0f1422] text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved ({bookmarkedIds.length})</span>
            </button>
          </div>
        </header>

        {/* Intelligent Live Leverage Bar */}
        <div className="bg-[#0c101a] border border-white/10 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-400">Your Unlocked Leverage:</span>
            <strong className="text-white font-mono">{liveEstimate}</strong>
          </div>

          <div className="text-[11px] font-mono text-slate-500 shrink-0">
            Showing <span className="text-indigo-300 font-bold">{filtered.length}</span> verified playbooks
          </div>
        </div>

        {/* Compact Single-Line Search & State Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Instant Search */}
          <div className="sm:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by keyword, state, hack (e.g. 'Rajasthan', 'SISFS', 'OpenAI', 'Forex')..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-[#0c101a] border border-white/10 rounded-xl text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 transition-colors font-medium"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* State Dropdown (All Indian States) */}
          <div>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full py-2 px-3 bg-[#0c101a] border border-white/10 rounded-xl text-slate-300 text-xs font-semibold focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              {ALL_INDIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state === 'All States / Central' ? '📍 All States' : `📍 ${state}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Filter Buttons: Category Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {[
            { id: 'all', label: 'All' },
            { id: 'cash', label: '💸 Monthly Cash' },
            { id: 'grant', label: '💰 Grants (₹15L–₹50L)' },
            { id: 'cloud', label: '☁️ Free Cloud ($350k)' },
            { id: 'banking', label: '🏦 Banking & 0% Tax' },
            { id: 'hack', label: '⚡ Arbitrage Hacks' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-white text-black font-bold'
                  : 'bg-[#0c101a] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Founder Type Micro-Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px] font-mono">
          <span className="text-slate-500 uppercase tracking-wider text-[10px] mr-1">Founder:</span>
          {[
            { id: 'all', label: 'All' },
            { id: 'bootstrapped', label: 'Bootstrapped' },
            { id: 'women', label: 'Women >51%' },
            { id: 'deeptech', label: 'AI / DeepTech' },
            { id: 'biotech', label: 'BioTech' },
            { id: 'funded', label: 'VC Backed' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFounderType(f.id)}
              className={`px-2 py-0.5 rounded transition-colors ${
                selectedFounderType === f.id
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold'
                  : 'bg-[#0c101a] text-slate-500 hover:text-slate-300 border border-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}

          {(selectedCategory !== 'all' || selectedState !== 'All States / Central' || selectedFounderType !== 'all' || search) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedState('All States / Central');
                setSelectedFounderType('all');
                setSearch('');
                setShowSavedOnly(false);
              }}
              className="text-rose-400 hover:underline pl-2 text-[10px]"
            >
              Reset
            </button>
          )}
        </div>

        {/* High-Density Command List */}
        <div className="space-y-2 pt-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-[#0c101a] rounded-xl border border-white/5 p-6 text-xs text-slate-500">
              No benefits match your exact filters. Click "Reset" above.
            </div>
          ) : (
            filtered.map((item) => {
              const isExpanded = expandedId === item.id;
              const isSaved = bookmarkedIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className={`bg-[#0c101a] hover:bg-[#101524] border transition-all rounded-xl p-3.5 sm:p-4 cursor-pointer ${
                    isExpanded ? 'border-indigo-500/40 bg-[#101524]' : 'border-white/5'
                  }`}
                >
                  {/* Primary Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      {/* Badge line */}
                      <div className="flex items-center gap-2 flex-wrap text-[10px] font-mono">
                        <span className="font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded">
                          {item.value}
                        </span>
                        <span className="text-slate-400">{item.provider}</span>
                        {item.state !== 'All States / Central' && (
                          <span className="text-slate-500">📍 {item.state}</span>
                        )}
                      </div>

                      {/* Name & Summary */}
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-300 leading-snug">
                        {item.summary}
                      </p>

                      {/* The Catch: 1-line insider tip */}
                      <div className="text-[11px] text-amber-300/90 pt-0.5 flex items-start gap-1 font-mono">
                        <span className="text-amber-400 font-bold shrink-0">Catch:</span>
                        <span>{item.theCatch}</span>
                      </div>
                    </div>

                    {/* Actions: Direct Link + Bookmark */}
                    <div className="flex items-center space-x-1.5 shrink-0 pt-0.5">
                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-500 hover:text-white transition-colors"
                        title={isSaved ? 'Saved' : 'Save'}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-indigo-400 fill-indigo-400' : ''}`} />
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center space-x-1 px-2.5 py-1 bg-white hover:bg-slate-200 text-black font-bold text-xs font-mono rounded-lg transition-colors shadow-sm"
                        title={item.domain}
                      >
                        <span>Apply</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Expanded 3-Step Execution Drawer */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2 text-xs animate-in fade-in duration-100">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        3-Step Action Plan:
                      </div>
                      <ol className="space-y-1 text-slate-300 font-mono text-[11px]">
                        {item.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-indigo-400 font-bold shrink-0">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                      <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                        <span>Direct portal: {item.domain}</span>
                        <span className="text-indigo-400 hover:underline">Click anywhere to collapse ▲</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Minimal Footer */}
        <footer className="pt-4 pb-8 border-t border-white/5 text-[11px] font-mono text-slate-600 flex items-center justify-between">
          <span>FounderPerks • Fast, Zero-Fluff Index</span>
          <a
            href="https://github.com/dhruvabalde-prog/founder-benefits-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            GitHub ↗
          </a>
        </footer>

      </div>
    </div>
  );
};

export default App;
