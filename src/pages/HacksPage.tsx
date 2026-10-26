import React from 'react';
import { Lightbulb, ExternalLink } from 'lucide-react';
import { FOUNDER_HACKS } from '../data/hacks';

export const HacksPage: React.FC = () => {
  return (
    <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-150 pb-24 sm:pb-12">
      {/* Header */}
      <div className="flex items-center justify-between pb-1 border-b border-stone-200">
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
          Playbooks
        </h1>
        <span className="text-xs font-mono text-stone-500">
          {FOUNDER_HACKS.length} Hacks
        </span>
      </div>

      {/* Long Rectangular Tiles Arranged Vertically */}
      <div className="space-y-2">
        {FOUNDER_HACKS.map((hack) => (
          <div
            key={hack.id}
            className="bg-white border border-stone-200/90 hover:border-stone-400 rounded-xl transition-all shadow-xs overflow-hidden"
          >
            <div className="p-3.5 sm:p-4 space-y-2.5">
              {/* WhatsApp chat style tags */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-[#e7f8ec] text-[#12592b] font-sans leading-tight">
                  {hack.category}
                </span>
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-[#f2f7f4] text-[#274e37] font-sans leading-tight font-mono ml-auto">
                  {hack.estimatedFinancialGain}
                </span>
              </div>

              <div className="text-sm sm:text-base font-serif font-bold text-stone-900 leading-snug">
                {hack.title}
              </div>

              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                {hack.oneLiner}
              </p>

              {/* Execution Steps */}
              <div className="pt-2 border-t border-stone-100 space-y-1.5">
                <div className="font-mono text-[10px] uppercase font-bold text-[#274e37]">
                  Execution Steps
                </div>
                <ol className="space-y-1 text-xs text-stone-700 font-sans">
                  {hack.thePlaybook.slice(0, 3).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#274e37] font-bold shrink-0">{idx + 1}.</span>
                      <span className="leading-snug">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
