import React from 'react';
import { TableProperties, CheckCircle2, Sparkles, Building, Landmark, Cloud } from 'lucide-react';
import { PERSONA_SCENARIOS } from '../data/matrix';

export const ComparisonMatrix: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-full text-indigo-300 text-xs font-semibold mb-3">
          <TableProperties className="w-3.5 h-3.5" />
          <span>Cross-Sector Comparative Architecture</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Comparison Matrix: What Unlocks By Founder Persona
        </h1>

        <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
          Quick reference table comparing the grant limits, cloud credit tiers, corporate banking benefits, and compliance requirements across different founder archetypes.
        </p>
      </div>

      {/* Responsive Matrix Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-300 font-semibold text-xs uppercase tracking-wider">
              <th className="p-4 sm:p-5 min-w-[220px]">Founder Archetype</th>
              <th className="p-4 sm:p-5 min-w-[200px]">
                <div className="flex items-center text-cyan-400">
                  <Cloud className="w-4 h-4 mr-1.5" />
                  Free Cloud & AI Stack
                </div>
              </th>
              <th className="p-4 sm:p-5 min-w-[220px]">
                <div className="flex items-center text-amber-400">
                  <Landmark className="w-4 h-4 mr-1.5" />
                  Government Grants & Debt
                </div>
              </th>
              <th className="p-4 sm:p-5 min-w-[200px]">
                <div className="flex items-center text-emerald-400">
                  <Building className="w-4 h-4 mr-1.5" />
                  Founder Banking Perks
                </div>
              </th>
              <th className="p-4 sm:p-5 min-w-[220px]">Key Strategic Rule</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-slate-300">
            {PERSONA_SCENARIOS.map((p) => (
              <tr key={p.id} className="hover:bg-slate-850/50 transition-colors">
                {/* Archetype */}
                <td className="p-4 sm:p-5 align-top">
                  <div className="font-bold text-white text-sm sm:text-base">
                    {p.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {p.role}
                  </div>
                  <div className="mt-2 inline-block px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold rounded text-xs">
                    {p.estimatedTotalValue}
                  </div>
                </td>

                {/* Cloud & AI */}
                <td className="p-4 sm:p-5 align-top space-y-1.5">
                  <div className="font-medium text-slate-200">
                    {p.id === 'bootstrapped-idea-founder' && '$1k AWS + $1k Azure + $2.5k OpenAI'}
                    {p.id === 'woman-founder-innovator' && 'Standard $5k-$100k Cloud Credits'}
                    {p.id === 'deeptech-ai-founder' && '$350k GCP AI + $150k Azure + $100k AWS'}
                    {p.id === 'biotech-medtech-founder' && 'AWS BioCompute + $10k GCP'}
                    {p.id === 'vc-backed-growth-founder' && '$100k AWS + $200k GCP + $150k Azure'}
                  </div>
                  <div className="text-xs text-slate-400">
                    {p.id === 'bootstrapped-idea-founder' && 'No investor code needed via MS Founders Hub Level 1.'}
                    {p.id === 'deeptech-ai-founder' && 'Vertex AI + Gemini Pro tokens covered at 100%.'}
                    {p.id === 'vc-backed-growth-founder' && '20 free GitHub Enterprise seats + 90% HubSpot.'}
                  </div>
                </td>

                {/* Grants */}
                <td className="p-4 sm:p-5 align-top space-y-1.5">
                  <div className="font-medium text-slate-200">
                    {p.id === 'bootstrapped-idea-founder' && 'DPIIT Patent Rebates (80%) + GeM'}
                    {p.id === 'woman-founder-innovator' && '₹10L - ₹1 Cr Stand-Up India + State Seed'}
                    {p.id === 'deeptech-ai-founder' && '₹30L MeitY TIDE Grant + ₹40L SAMRIDH'}
                    {p.id === 'biotech-medtech-founder' && '₹50L BIRAC BIG Grant (Non-dilutive)'}
                    {p.id === 'vc-backed-growth-founder' && '₹10 Crore CGSS Collateral-Free Debt'}
                  </div>
                  <div className="text-xs text-slate-400">
                    {p.id === 'woman-founder-innovator' && 'Mandatory bank branch quota under Stand-Up India.'}
                    {p.id === 'biotech-medtech-founder' && 'Zero equity taken by BIRAC across 18 months.'}
                  </div>
                </td>

                {/* Banking */}
                <td className="p-4 sm:p-5 align-top space-y-1.5">
                  <div className="font-medium text-slate-200">
                    {p.id === 'bootstrapped-idea-founder' && 'HDFC SmartUp / ICICI iStartup Zero Bal'}
                    {p.id === 'woman-founder-innovator' && 'Mudra / Stand-Up India Subsidized Rates'}
                    {p.id === 'deeptech-ai-founder' && 'RazorpayX High-Limit Corporate Cards'}
                    {p.id === 'biotech-medtech-founder' && 'Dedicated Grant Escrow Account'}
                    {p.id === 'vc-backed-growth-founder' && 'Mercury US Bank + Dedicated Forex Desk'}
                  </div>
                  <div className="text-xs text-slate-400">
                    {p.id === 'vc-backed-growth-founder' && 'Automated e-FIRC & 0% GST with LUT filed.'}
                    {p.id === 'bootstrapped-idea-founder' && 'Waived AQB charges for the first 12 months.'}
                  </div>
                </td>

                {/* Strategic Advice */}
                <td className="p-4 sm:p-5 align-top text-xs text-slate-300 leading-relaxed">
                  {p.keyAdvice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
