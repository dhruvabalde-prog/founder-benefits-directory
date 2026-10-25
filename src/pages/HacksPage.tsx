import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, ArrowRight, ShieldCheck } from 'lucide-react';
import { FOUNDER_HACKS } from '../data/hacks';

export const HacksPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      <div className="space-y-1.5 pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>Founder Playbooks</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Cross-State Arbitrage & Legal Hacks
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Tactical playbooks used by second-time founders to capture state sustenance allowances, 10-year interest-free capital, and eliminate 18% taxes.
        </p>
      </div>

      <div className="space-y-4">
        {FOUNDER_HACKS.map((hack) => (
          <div
            key={hack.id}
            className="bg-[#0d121f] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  {hack.category}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  💰 Gain: {hack.estimatedFinancialGain}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight pt-1">
                {hack.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {hack.oneLiner}
              </p>
            </div>

            {/* Steps */}
            <div className="bg-[#111726] border border-slate-800/80 rounded-xl p-4 space-y-2">
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                Execution Steps
              </div>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-200">
                {hack.thePlaybook.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-4 h-4 rounded bg-slate-800 text-amber-300 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Case Study */}
            <div className="p-3 bg-black/40 rounded-xl border border-slate-800 text-xs text-slate-300">
              <span className="text-[11px] font-mono font-bold text-indigo-400 uppercase block mb-1">
                Real-World Case Study
              </span>
              <p className="leading-relaxed">{hack.realWorldExample}</p>
            </div>

            {/* Compliance */}
            <div className="flex items-start gap-2 text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Compliance Checklist: </strong>
                {hack.legalComplianceRule}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
