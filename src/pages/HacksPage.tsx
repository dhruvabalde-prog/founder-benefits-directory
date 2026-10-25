import React from 'react';
import { Lightbulb, ArrowRight, ShieldCheck } from 'lucide-react';
import { FOUNDER_HACKS } from '../data/hacks';

export const HacksPage: React.FC = () => {
  return (
    <div className="space-y-7 animate-in fade-in duration-150">
      <div className="space-y-2 pb-2">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#f2f7f4] border border-[#cce2d5] text-[#274e37] text-[11px] font-mono font-semibold uppercase tracking-wider">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Strategic Founder Arbitrage</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
          Cross-State Arbitrage & Legal Stacking Hacks
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl font-sans leading-relaxed">
          Tactical blueprints used by second-time founders to capture state sustenance allowances, 10-year interest-free capital, and eliminate 18% export friction legally.
        </p>
      </div>

      <div className="space-y-4">
        {FOUNDER_HACKS.map((hack) => (
          <div
            key={hack.id}
            className="bg-white border border-stone-200 rounded-xl p-5 sm:p-7 space-y-4 shadow-xs"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5] uppercase tracking-wider">
                  {hack.category}
                </span>
                <span className="text-xs font-mono font-bold text-[#274e37]">
                  Estimated Value: {hack.estimatedFinancialGain}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 tracking-tight pt-1">
                {hack.title}
              </h2>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                {hack.oneLiner}
              </p>
            </div>

            {/* Steps */}
            <div className="bg-[#fafaf8] border border-stone-200 rounded-lg p-4 space-y-2.5">
              <div className="text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider">
                Execution Steps
              </div>
              <ol className="space-y-2 text-xs sm:text-sm text-stone-800 font-sans">
                {hack.thePlaybook.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-5 h-5 rounded bg-stone-200 text-stone-800 font-mono text-[11px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Case Study */}
            <div className="p-4 bg-[#f2f7f4] rounded-lg border border-[#cce2d5] text-xs text-stone-800 font-sans">
              <span className="text-[11px] font-mono font-bold text-[#274e37] uppercase block mb-1">
                Real-World Case Study
              </span>
              <p className="leading-relaxed">{hack.realWorldExample}</p>
            </div>

            {/* Compliance */}
            <div className="flex items-start gap-2 text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-200 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#274e37] shrink-0 mt-0.5" />
              <span>
                <strong className="text-stone-900 font-semibold">Compliance Checklist: </strong>
                {hack.legalComplianceRule}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
