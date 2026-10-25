import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import { FOUNDER_HACKS } from '../data/hacks';
import { FounderHack } from '../types';

export const HacksSection: React.FC = () => {
  const [expandedHackId, setExpandedHackId] = useState<string | null>(FOUNDER_HACKS[0].id);

  const toggleExpand = (id: string) => {
    setExpandedHackId(prev => prev === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {/* Intro Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5">
        <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
          <Lightbulb className="w-4 h-4" />
          <span>Founder Playbooks & Cross-State Arbitrage</span>
        </div>
        <h2 className="text-lg font-black text-white">
          Legal Hacks, Dual-State Benefits & Workarounds
        </h2>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
          Tactical playbooks used by experienced founders in India to maximize non-dilutive grants, claim living stipends across state borders, and cut compliance costs to zero.
        </p>
      </div>

      {/* List of Hacks */}
      <div className="space-y-3">
        {FOUNDER_HACKS.map((hack: FounderHack) => {
          const isExpanded = expandedHackId === hack.id;

          return (
            <div
              key={hack.id}
              className={`rounded-2xl border transition-all ${
                isExpanded 
                  ? 'bg-slate-900 border-amber-500/40 shadow-md' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleExpand(hack.id)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                      {hack.category}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400">
                      💰 {hack.estimatedFinancialGain}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug pt-0.5">
                    {hack.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-normal">
                    {hack.oneLiner}
                  </p>
                </div>

                <div className="p-1 rounded-lg text-slate-400 shrink-0">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Expanded Playbook */}
              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-800 space-y-3.5 text-xs">
                  {/* Step-by-Step Playbook */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Execution Steps
                    </div>
                    <ol className="space-y-2 text-slate-300">
                      {hack.thePlaybook.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-4 h-4 rounded-full bg-slate-800 text-amber-300 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Real World Example */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-300">
                    <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                      Case Study in Practice
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {hack.realWorldExample}
                    </p>
                  </div>

                  {/* Legal Compliance Rule */}
                  <div className="flex items-start gap-2 text-slate-400 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-slate-300">
                      <strong className="text-white">Compliance Check: </strong>
                      {hack.legalComplianceRule}
                    </span>
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
