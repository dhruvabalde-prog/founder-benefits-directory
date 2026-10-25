import React from 'react';
import { Lightbulb, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { FOUNDER_HACKS } from '../data/hacks';
import { ExpandableTile } from '../components/ExpandableTile';

export const HacksPage: React.FC = () => {
  return (
    <div className="space-y-4 animate-in fade-in duration-150 pb-20 sm:pb-8">
      {/* Punchy Header (No lengthy essay/blurb) */}
      <div className="flex items-center justify-between pb-2 border-b border-stone-200">
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
          Arbitrage Playbooks
        </h1>
        <span className="text-xs font-mono text-stone-500">
          {FOUNDER_HACKS.length} Hacks
        </span>
      </div>

      {/* Expandable Playbook Tiles */}
      <div className="space-y-3">
        {FOUNDER_HACKS.map((hack) => (
          <div
            key={hack.id}
            className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 space-y-3 shadow-xs"
          >
            {/* Header info */}
            <div className="flex items-center justify-between gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5] uppercase tracking-wider">
                {hack.category}
              </span>
              <span className="text-xs font-mono font-bold text-[#274e37]">
                {hack.estimatedFinancialGain}
              </span>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900 tracking-tight">
                {hack.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans leading-relaxed">
                {hack.oneLiner}
              </p>
            </div>

            {/* Expandable Tile for Playbook Details & Compliance */}
            <ExpandableTile
              title="Execution & Case Study"
              badge={`${hack.thePlaybook.length} Steps`}
              defaultOpen={false}
              icon={<Lightbulb className="w-4 h-4 text-[#274e37]" />}
            >
              <div className="space-y-3 pt-2 text-xs font-sans">
                {/* Steps */}
                <ol className="space-y-2 text-stone-800">
                  {hack.thePlaybook.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-[#fafaf8] p-2.5 rounded-lg border border-stone-200">
                      <span className="w-4 h-4 rounded bg-stone-200 text-stone-800 font-mono text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                {/* Case Study */}
                <div className="p-3 bg-[#f2f7f4] rounded-lg border border-[#cce2d5] text-stone-800">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#274e37] block mb-1">
                    Real-World Case Study
                  </span>
                  <p>{hack.realWorldExample}</p>
                </div>

                {/* Compliance */}
                <div className="flex items-start gap-2 text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                  <ShieldCheck className="w-4 h-4 text-[#274e37] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-stone-900 font-semibold">Compliance: </strong>
                    {hack.legalComplianceRule}
                  </span>
                </div>
              </div>
            </ExpandableTile>
          </div>
        ))}
      </div>
    </div>
  );
};
