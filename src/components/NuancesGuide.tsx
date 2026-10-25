import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  FileCode, 
  ArrowRight,
  ShieldAlert,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { NUANCE_TOPICS } from '../data/nuances';

export const NuancesGuide: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(NUANCE_TOPICS[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Guide Header */}
      <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-300 text-xs font-semibold mb-3">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Insider Field Manual & Regulatory Pitfalls</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          The Nuances & Hidden Gotchas Founders Rarely Discover in Time
        </h1>

        <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
          Government policies, tax exemptions, and banking suites sound attractive on paper, but the real challenge lies in the fine print. Here are the 5 most critical nuances, legal traps, and practical playbooks every founder in India must master.
        </p>
      </div>

      {/* Accordion / Deep Dive Cards */}
      <div className="space-y-4">
        {NUANCE_TOPICS.map((topic, index) => {
          const isExpanded = expandedId === topic.id;

          return (
            <div
              key={topic.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isExpanded 
                  ? 'bg-slate-900 border-amber-500/50 shadow-xl' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Header Row */}
              <button
                onClick={() => toggleExpand(topic.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 transition-colors"
              >
                <div className="flex items-start space-x-3.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm ${
                    isExpanded 
                      ? 'bg-amber-500 text-slate-950' 
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {topic.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-300/90 mt-1 font-medium">
                      {topic.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-slate-800/80 text-slate-400">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Expanded Body */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-5 text-sm animate-in fade-in duration-200">
                  {/* Summary */}
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 text-slate-300 leading-relaxed">
                    {topic.summary}
                  </div>

                  {/* Common Mistakes vs Insider Tips Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Common Mistakes */}
                    <div className="bg-rose-950/20 border border-rose-500/20 rounded-xl p-4">
                      <div className="flex items-center space-x-2 text-rose-300 font-bold text-xs uppercase tracking-wider mb-3">
                        <ShieldAlert className="w-4 h-4 text-rose-400" />
                        <span>Common Costly Mistakes</span>
                      </div>
                      <ul className="space-y-2.5">
                        {topic.commonMistakes.map((mistake, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-rose-200/90 leading-relaxed">
                            <span className="text-rose-400 font-bold shrink-0 mt-0.5">✕</span>
                            <span>{mistake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Insider Tips */}
                    <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4">
                      <div className="flex items-center space-x-2 text-emerald-300 font-bold text-xs uppercase tracking-wider mb-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Pro Founder Playbook</span>
                      </div>
                      <ul className="space-y-2.5">
                        {topic.insiderTips.map((tip, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-emerald-200/90 leading-relaxed">
                            <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Legal Clause / Reference */}
                  <div className="flex items-center space-x-2 px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400">
                    <FileCode className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Statutory Reference: <strong className="text-slate-200">{topic.keyLegislationOrClause}</strong></span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
