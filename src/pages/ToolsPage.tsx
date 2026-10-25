import React, { useState } from 'react';
import { 
  Sparkles, 
  Calculator, 
  ShieldCheck, 
  Scale, 
  FileCheck2, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { CustomStackGenerator } from '../components/CustomStackGenerator';
import { ALL_INDIAN_STATES } from '../data/allStates';
import { ExpandableTile } from '../components/ExpandableTile';

interface ToolsPageProps {
  onToggleBookmark: (id: string) => void;
  bookmarkedIds: string[];
}

interface StateProfile {
  name: string;
  sustenance: string;
  seedGrant: string;
  softLoan: string;
  patentSubsidy: string;
  keyIncubator: string;
  taxOrSgstRebate: string;
}

const STATE_PROFILES: Record<string, StateProfile> = {
  'Rajasthan': {
    name: 'Rajasthan',
    sustenance: '₹20k–₹25k/mo for 12 months',
    seedGrant: 'Up to ₹25 Lakhs prototype seed grant',
    softLoan: 'Viability funding up to ₹50 Lakhs',
    patentSubsidy: 'Up to ₹2L domestic / ₹5L international',
    keyIncubator: 'iStart Techno Hub (Jaipur, Jodhpur, Udaipur)',
    taxOrSgstRebate: '100% power tariff & stamp duty exemptions'
  },
  'Gujarat': {
    name: 'Gujarat',
    sustenance: '₹20k–₹25k/mo for 12 months',
    seedGrant: 'Up to ₹30 Lakhs seed capital support',
    softLoan: 'Low-interest bank loan interest subsidies',
    patentSubsidy: 'Up to ₹2L domestic / ₹5L international',
    keyIncubator: 'i-Hub Ahmedabad, CIIE IIM-A, GTU',
    taxOrSgstRebate: '100% net SGST reimbursement for 5 years'
  },
  'Karnataka': {
    name: 'Karnataka',
    sustenance: 'Incubator dependent / stipend in select cohorts',
    seedGrant: 'Up to ₹50 Lakhs ELEVATE Idea2PoC grant',
    softLoan: 'Access to KITVEN Venture debt fund',
    patentSubsidy: 'Up to ₹2L domestic / ₹10L international PCT',
    keyIncubator: 'K-tech Innovation Hubs, C-CAMP, IISc',
    taxOrSgstRebate: 'Special incentives under Karnataka IT Policy'
  },
  'Bihar': {
    name: 'Bihar',
    sustenance: 'Incubation co-working pass + seed loan',
    seedGrant: 'Up to ₹10 Lakhs 100% 0% interest loan for 10 years',
    softLoan: 'Zero collateral 10-year interest-free capital',
    patentSubsidy: 'Full patent fee reimbursement',
    keyIncubator: 'Bihar Startup Hub, Maurya Lok, Patna',
    taxOrSgstRebate: 'Priority in state public procurement'
  },
  'Uttar Pradesh': {
    name: 'Uttar Pradesh',
    sustenance: '₹17,500/mo for 12 months',
    seedGrant: '₹5L marketing + up to ₹50L seed support',
    softLoan: 'Credit guarantee backed incubator loans',
    patentSubsidy: 'Up to ₹2L per patent',
    keyIncubator: 'IIT Kanpur, IIM Lucknow, AKTU Noida',
    taxOrSgstRebate: '100% electricity duty exemption for 10 years'
  },
  'Tamil Nadu': {
    name: 'Tamil Nadu',
    sustenance: 'Covered under TANSEED tranches',
    seedGrant: '₹10L–₹15L TANSEED equity-free cash',
    softLoan: 'Tamil Nadu Emerging Sector Seed Fund',
    patentSubsidy: 'Up to ₹2L domestic / ₹10L international',
    keyIncubator: 'IIT Madras Research Park, Anna Incubator',
    taxOrSgstRebate: 'StartupTN Smart Card (₹5L+ credits in SaaS)'
  },
  'Kerala': {
    name: 'Kerala',
    sustenance: 'KSUM Fellowships up to ₹20k/mo',
    seedGrant: 'Up to ₹12 Lakhs non-dilutive Idea Grant',
    softLoan: '₹15 Lakhs scale-up loan with zero collateral',
    patentSubsidy: 'Up to ₹10 Lakhs international patent support',
    keyIncubator: 'KSUM Integrated Complex & Maker Village, Kochi',
    taxOrSgstRebate: 'Subsidized prototyping & laser/SMT fab labs'
  },
  'Telangana': {
    name: 'Telangana',
    sustenance: '₹25,000/mo for women founders via WE-Hub',
    seedGrant: 'Up to ₹25 Lakhs T-Fund co-investment checks',
    softLoan: 'SIDBI-backed venture debt via T-Hub',
    patentSubsidy: 'Up to ₹2L domestic / ₹5L international',
    keyIncubator: 'T-Hub 2.0, T-Works Prototyping, WE-Hub',
    taxOrSgstRebate: '100% subsidized prototyping machine hours'
  },
  'Haryana': {
    name: 'Haryana',
    sustenance: '₹20,000/mo for 12 months',
    seedGrant: 'Up to ₹5 Lakhs seed capital support',
    softLoan: 'Credit linked state subsidy',
    patentSubsidy: 'Up to ₹2 Lakhs per patent',
    keyIncubator: 'Hartron Innovation Hubs (Gurugram, Panchkula)',
    taxOrSgstRebate: '50% net SGST reimbursement for 7 years'
  },
  'Odisha': {
    name: 'Odisha',
    sustenance: '₹20k–₹22k/mo for 12 months',
    seedGrant: 'Up to ₹16 Lakhs product development grant',
    softLoan: 'Low-interest state MSME debt',
    patentSubsidy: 'Up to ₹3L domestic / ₹10L international',
    keyIncubator: 'O-Hub, KIIT-TBI Bhubaneswar, IIT BBS',
    taxOrSgstRebate: 'Free co-working seats at O-Hub'
  },
  'Madhya Pradesh': {
    name: 'Madhya Pradesh',
    sustenance: '₹10,000/mo for 12 months',
    seedGrant: 'Up to ₹30 Lakhs seed capital via incubators',
    softLoan: '15% matching co-investment grant (up to ₹15L)',
    patentSubsidy: 'Full patent fee reimbursement',
    keyIncubator: 'SVIC Indore, IIM Indore, MANIT Bhopal',
    taxOrSgstRebate: 'Lease rental subsidy up to ₹5,000/mo'
  },
  'Goa': {
    name: 'Goa',
    sustenance: '₹20,000/mo for 12 months',
    seedGrant: 'Up to ₹10 Lakhs prototype seed grant',
    softLoan: 'Interest subsidy on working capital loans',
    patentSubsidy: 'Up to ₹2 Lakhs per patent',
    keyIncubator: 'FiiRE Goa, Don Bosco College, Panaji',
    taxOrSgstRebate: '50% salary reimbursement (up to ₹25k/mo per hire)'
  },
  'Punjab': {
    name: 'Punjab',
    sustenance: '₹15,000/mo for 12 months',
    seedGrant: 'Up to ₹3 Lakhs seed capital grant',
    softLoan: 'Subsidized loan assistance via State MSME',
    patentSubsidy: 'Up to ₹2 Lakhs per patent',
    keyIncubator: 'AIC-ISB Mohali, IIT Ropar',
    taxOrSgstRebate: '100% electricity duty exemption for 7 years'
  },
  'Assam': {
    name: 'Assam',
    sustenance: '₹20,000/mo for 12 months',
    seedGrant: 'Up to ₹5L idea grant + ₹50L scaleup support',
    softLoan: 'North East Venture Fund (NEVF) access',
    patentSubsidy: 'Full patent filing cost support',
    keyIncubator: 'Assam Startup Nest, IIT Guwahati TIC',
    taxOrSgstRebate: 'Special North East industrial development incentives'
  },
  'Andhra Pradesh': {
    name: 'Andhra Pradesh',
    sustenance: 'Incubation living stipends in select hubs',
    seedGrant: 'Up to ₹10 Lakhs seed funding grant',
    softLoan: 'State venture capital matching fund',
    patentSubsidy: 'Up to ₹2 Lakhs per patent',
    keyIncubator: 'APIS Millennium Tower Vizag, AMTZ MedTech Hub',
    taxOrSgstRebate: 'Subsidized plug-and-play co-working desks'
  }
};

export const ToolsPage: React.FC<ToolsPageProps> = ({
  onToggleBookmark,
  bookmarkedIds
}) => {
  const [activeTab, setActiveTab] = useState<'stacker' | '80iac' | 'matrix' | 'lut'>('stacker');

  // 80-IAC Checker state
  const [incorporationYear, setIncorporationYear] = useState<'after_2016' | 'before_2016'>('after_2016');
  const [entityType, setEntityType] = useState<'pvt_ltd_llp' | 'proprietorship'>('pvt_ltd_llp');
  const [turnoverUnder100Cr, setTurnoverUnder100Cr] = useState<boolean>(true);
  const [hasInnovationDefensibility, setHasInnovationDefensibility] = useState<boolean>(true);
  const [dpiitRecognized, setDpiitRecognized] = useState<boolean>(true);

  // Matrix comparison state
  const [stateA, setStateA] = useState<string>('Rajasthan');
  const [stateB, setStateB] = useState<string>('Karnataka');

  // Calculate 80-IAC verdict
  const is80IACEligible = 
    incorporationYear === 'after_2016' &&
    entityType === 'pvt_ltd_llp' &&
    turnoverUnder100Cr &&
    hasInnovationDefensibility &&
    dpiitRecognized;

  return (
    <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-150 pb-20 sm:pb-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-stone-200">
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
          Founder Tools
        </h1>
        <span className="text-xs font-mono text-stone-500">
          4 Interactive Utilities
        </span>
      </div>

      {/* Tool Navigation Bar (Icon-first, clean tabs) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('stacker')}
          className={`p-3 rounded-xl border text-left transition-all ${
            activeTab === 'stacker'
              ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37] shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#274e37]" />
            <span className="font-serif font-bold text-xs sm:text-sm">Runway Stack</span>
          </div>
          <p className="text-[10px] text-stone-500 font-sans mt-0.5">Cash & compute calculator</p>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('matrix')}
          className={`p-3 rounded-xl border text-left transition-all ${
            activeTab === 'matrix'
              ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37] shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Scale className="w-4 h-4 text-[#274e37]" />
            <span className="font-serif font-bold text-xs sm:text-sm">State Matrix</span>
          </div>
          <p className="text-[10px] text-stone-500 font-sans mt-0.5">Cross-state arbitrage</p>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('80iac')}
          className={`p-3 rounded-xl border text-left transition-all ${
            activeTab === '80iac'
              ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37] shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
          }`}
        >
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#274e37]" />
            <span className="font-serif font-bold text-xs sm:text-sm">80-IAC Checker</span>
          </div>
          <p className="text-[10px] text-stone-500 font-sans mt-0.5">3-Yr 0% Tax Holiday</p>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('lut')}
          className={`p-3 rounded-xl border text-left transition-all ${
            activeTab === 'lut'
              ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37] shadow-xs'
              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
          }`}
        >
          <div className="flex items-center space-x-2">
            <FileCheck2 className="w-4 h-4 text-[#274e37]" />
            <span className="font-serif font-bold text-xs sm:text-sm">Export LUT</span>
          </div>
          <p className="text-[10px] text-stone-500 font-sans mt-0.5">0% GST & Purpose Codes</p>
        </button>
      </div>

      {/* TOOL 1: RUNWAY STACK CALCULATOR */}
      {activeTab === 'stacker' && (
        <CustomStackGenerator
          onToggleBookmark={onToggleBookmark}
          bookmarkedIds={bookmarkedIds}
        />
      )}

      {/* TOOL 2: CROSS-STATE ARBITRAGE MATRIX */}
      {activeTab === 'matrix' && (
        <div className="space-y-4 bg-white border border-stone-200 rounded-xl p-4 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200">
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                Cross-State Policy Comparison Matrix
              </h2>
              <p className="text-xs text-stone-500 font-sans">
                Compare sustenance allowances, grants, and subsidies between any two startup jurisdictions.
              </p>
            </div>
          </div>

          {/* State Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider mb-1">
                State A (e.g. Registered Roots)
              </label>
              <select
                value={stateA}
                onChange={(e) => setStateA(e.target.value)}
                className="w-full bg-[#fafaf8] border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-stone-400 font-sans cursor-pointer shadow-xs"
              >
                {Object.keys(STATE_PROFILES).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-semibold text-stone-500 uppercase tracking-wider mb-1">
                State B (e.g. Tech Hub / Operating Base)
              </label>
              <select
                value={stateB}
                onChange={(e) => setStateB(e.target.value)}
                className="w-full bg-[#fafaf8] border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-stone-400 font-sans cursor-pointer shadow-xs"
              >
                {Object.keys(STATE_PROFILES).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Side by Side Comparison Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {/* State A Card */}
            <div className="bg-[#fafaf8] border border-stone-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="font-serif font-bold text-base text-stone-900">{stateA}</span>
                <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-mono text-[10px] font-semibold">
                  Policy Summary
                </span>
              </div>

              <div className="space-y-2 text-xs font-sans">
                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Living Sustenance</span>
                  <p className="text-stone-800 font-medium">{STATE_PROFILES[stateA]?.sustenance}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Seed Capital & Grants</span>
                  <p className="text-[#274e37] font-semibold">{STATE_PROFILES[stateA]?.seedGrant}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Soft Loans & Debt</span>
                  <p className="text-stone-800">{STATE_PROFILES[stateA]?.softLoan}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Patent Subsidies</span>
                  <p className="text-stone-800">{STATE_PROFILES[stateA]?.patentSubsidy}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Key Nodal Hub</span>
                  <p className="text-stone-800">{STATE_PROFILES[stateA]?.keyIncubator}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Tax & SGST Advantages</span>
                  <p className="text-stone-800">{STATE_PROFILES[stateA]?.taxOrSgstRebate}</p>
                </div>
              </div>
            </div>

            {/* State B Card */}
            <div className="bg-[#fafaf8] border border-stone-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="font-serif font-bold text-base text-stone-900">{stateB}</span>
                <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-mono text-[10px] font-semibold">
                  Policy Summary
                </span>
              </div>

              <div className="space-y-2 text-xs font-sans">
                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Living Sustenance</span>
                  <p className="text-stone-800 font-medium">{STATE_PROFILES[stateB]?.sustenance}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Seed Capital & Grants</span>
                  <p className="text-[#274e37] font-semibold">{STATE_PROFILES[stateB]?.seedGrant}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Soft Loans & Debt</span>
                  <p className="text-stone-800">{STATE_PROFILES[stateB]?.softLoan}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Patent Subsidies</span>
                  <p className="text-stone-800">{STATE_PROFILES[stateB]?.patentSubsidy}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Key Nodal Hub</span>
                  <p className="text-stone-800">{STATE_PROFILES[stateB]?.keyIncubator}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase font-semibold block">Tax & SGST Advantages</span>
                  <p className="text-stone-800">{STATE_PROFILES[stateB]?.taxOrSgstRebate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 3: SECTION 80-IAC 3-YEAR 100% TAX HOLIDAY CHECKER */}
      {activeTab === '80iac' && (
        <div className="space-y-4 bg-white border border-stone-200 rounded-xl p-4 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200">
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                Section 80-IAC Tax Exemption Readiness Checker
              </h2>
              <p className="text-xs text-stone-500 font-sans">
                Verify if your startup can legally claim 3 consecutive years of 0% corporate tax under CBDT guidelines.
              </p>
            </div>
          </div>

          {/* Interactive 5 Criteria */}
          <div className="space-y-3">
            <div className="bg-[#fafaf8] p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-serif font-bold text-stone-900 block">1. Date of Incorporation</span>
                <span className="text-stone-500 font-sans">Must be incorporated between April 1, 2016 and March 31, 2025.</span>
              </div>
              <select
                value={incorporationYear}
                onChange={(e) => setIncorporationYear(e.target.value as any)}
                className="bg-white border border-stone-200 rounded-md p-1.5 text-xs text-stone-800"
              >
                <option value="after_2016">After April 1, 2016 (Valid)</option>
                <option value="before_2016">Before April 1, 2016</option>
              </select>
            </div>

            <div className="bg-[#fafaf8] p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-serif font-bold text-stone-900 block">2. Legal Entity Structure</span>
                <span className="text-stone-500 font-sans">Only Private Limited Companies and registered LLPs qualify (Proprietorships excluded).</span>
              </div>
              <select
                value={entityType}
                onChange={(e) => setEntityType(e.target.value as any)}
                className="bg-white border border-stone-200 rounded-md p-1.5 text-xs text-stone-800"
              >
                <option value="pvt_ltd_llp">Pvt Ltd / LLP (Valid)</option>
                <option value="proprietorship">Sole Proprietorship / Partnership</option>
              </select>
            </div>

            <div className="bg-[#fafaf8] p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-serif font-bold text-stone-900 block">3. Turnover Cap</span>
                <span className="text-stone-500 font-sans">Annual turnover must not have exceeded ₹100 Crores in any preceding fiscal year.</span>
              </div>
              <input
                type="checkbox"
                checked={turnoverUnder100Cr}
                onChange={(e) => setTurnoverUnder100Cr(e.target.checked)}
                className="w-4 h-4 rounded border-stone-300 text-[#274e37] accent-[#274e37]"
              />
            </div>

            <div className="bg-[#fafaf8] p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-serif font-bold text-stone-900 block">4. DPIIT Recognition</span>
                <span className="text-stone-500 font-sans">Entity holds an active DIPP Startup Certificate with valid login credentials.</span>
              </div>
              <input
                type="checkbox"
                checked={dpiitRecognized}
                onChange={(e) => setDpiitRecognized(e.target.checked)}
                className="w-4 h-4 rounded border-stone-300 text-[#274e37] accent-[#274e37]"
              />
            </div>

            <div className="bg-[#fafaf8] p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-serif font-bold text-stone-900 block">5. Technological Defensibility & Innovation</span>
                <span className="text-stone-500 font-sans">Product has proprietary algorithms, patents, or distinct technological differentiation.</span>
              </div>
              <input
                type="checkbox"
                checked={hasInnovationDefensibility}
                onChange={(e) => setHasInnovationDefensibility(e.target.checked)}
                className="w-4 h-4 rounded border-stone-300 text-[#274e37] accent-[#274e37]"
              />
            </div>
          </div>

          {/* Verdict Box */}
          <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
            is80IACEligible 
              ? 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]' 
              : 'bg-[#fffbeb] border-[#fde68a] text-amber-900'
          }`}>
            <div className="flex items-center space-x-2.5">
              {is80IACEligible ? (
                <CheckCircle2 className="w-5 h-5 text-[#274e37] shrink-0" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              )}
              <div>
                <div className="font-serif font-bold text-sm sm:text-base">
                  {is80IACEligible ? 'High Probability for IMB Sanction' : 'Prerequisites Missing'}
                </div>
                <div className="text-xs font-sans">
                  {is80IACEligible 
                    ? 'Your venture meets statutory requirements. File Form-1 on the Startup India portal with a 3-minute video pitch.'
                    : 'Resolve missing criteria above before applying to prevent administrative rejection by the Inter-Ministerial Board.'}
                </div>
              </div>
            </div>

            <a
              href="https://www.startupindia.gov.in/content/sih/en/tax-exemptions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#274e37] text-white rounded-lg inline-flex items-center justify-center shrink-0 shadow-xs"
              title="Official Portal"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* TOOL 4: GST EXPORT LUT & PURPOSE CODE LOOKUP */}
      {activeTab === 'lut' && (
        <div className="space-y-4 bg-white border border-stone-200 rounded-xl p-4 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200">
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                GST LUT & RBI Purpose Code Lookup for Tech Exporters
              </h2>
              <p className="text-xs text-stone-500 font-sans">
                Eliminate 18% IGST on international SaaS receipts, Stripe payouts, and overseas client contracts.
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs font-sans">
            <div className="p-3.5 bg-[#fafaf8] rounded-xl border border-stone-200 space-y-2">
              <span className="font-serif font-bold text-stone-900 text-sm block">
                Standard RBI Purpose Codes for Tech & Software Export
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700">
                <div className="p-2 bg-white rounded-lg border border-stone-200">
                  <span className="font-mono font-bold text-[#274e37] block">P0802</span>
                  <span>Software Implementation, SaaS Subscriptions & APIs</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-stone-200">
                  <span className="font-mono font-bold text-[#274e37] block">P0801</span>
                  <span>Custom Hardware & Embedded Software Consultancy</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-stone-200">
                  <span className="font-mono font-bold text-[#274e37] block">P0803</span>
                  <span>Data Processing, Cloud Hosting & Server Management</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-stone-200">
                  <span className="font-mono font-bold text-[#274e37] block">P0807</span>
                  <span>Digital Content & Off-the-Shelf Packaged Software</span>
                </div>
              </div>
            </div>

            {/* Step-by-Step Filing Checklist */}
            <ExpandableTile
              title="How to File Form GST RFD-11 (Takes 3 Minutes)"
              defaultOpen={true}
              icon={<FileCheck2 className="w-4 h-4 text-[#274e37]" />}
            >
              <ol className="space-y-2 text-stone-700 pt-1">
                <li className="flex items-start gap-2 bg-[#fafaf8] p-2.5 rounded-lg border border-stone-200">
                  <span className="w-4 h-4 rounded bg-stone-200 text-stone-800 font-mono text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>Log into gst.gov.in → Services → User Services → Furnish Letter of Undertaking (LUT).</span>
                </li>
                <li className="flex items-start gap-2 bg-[#fafaf8] p-2.5 rounded-lg border border-stone-200">
                  <span className="w-4 h-4 rounded bg-stone-200 text-stone-800 font-mono text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>Select the current Financial Year and enter names & addresses of two independent witnesses.</span>
                </li>
                <li className="flex items-start gap-2 bg-[#fafaf8] p-2.5 rounded-lg border border-stone-200">
                  <span className="w-4 h-4 rounded bg-stone-200 text-stone-800 font-mono text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span>Sign with Director/Partner DSC or Aadhaar OTP verification. An official LUT Application Reference Number (ARN) is generated instantly.</span>
                </li>
                <li className="flex items-start gap-2 bg-[#fafaf8] p-2.5 rounded-lg border border-stone-200">
                  <span className="w-4 h-4 rounded bg-stone-200 text-stone-800 font-mono text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <span>Quote "SUPPLY MEANT FOR EXPORT UNDER LETTER OF UNDERTAKING WITHOUT PAYMENT OF INTEGRATED TAX" on all invoices with your ARN.</span>
                </li>
              </ol>
            </ExpandableTile>
          </div>
        </div>
      )}
    </div>
  );
};
