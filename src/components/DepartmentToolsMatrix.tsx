import React, { useState, useMemo } from 'react';
import { 
  Wrench, 
  Sparkles, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Filter,
  Layers,
  Code,
  LineChart,
  Landmark,
  Megaphone,
  Briefcase
} from 'lucide-react';
import { ZERO_BURN_TOOLS, ZeroBurnTool } from '../data/zeroBurnTools';

const DEPARTMENTS = [
  { id: 'all', label: 'All Stacks', icon: Layers },
  { id: 'engineering', label: 'Engineering', icon: Code },
  { id: 'product_ai', label: 'Product & AI', icon: LineChart },
  { id: 'finance_legal', label: 'Finance & Legal', icon: Landmark },
  { id: 'sales_marketing', label: 'Sales & Outbound', icon: Megaphone },
  { id: 'ops_hr', label: 'Operations & HR', icon: Briefcase }
];

const TIERS = [
  { id: 'all', label: 'All Deals' },
  { id: 'free_forever', label: 'Free Forever' },
  { id: 'startup_credits', label: 'Startup Credits' },
  { id: 'discount_90', label: 'Discounts' }
];

export const DepartmentToolsMatrix: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredTools = useMemo(() => {
    return ZERO_BURN_TOOLS.filter((tool) => {
      if (selectedDept !== 'all' && tool.department !== selectedDept) return false;
      if (selectedTier !== 'all' && tool.tier !== selectedTier) return false;
      return true;
    });
  }, [selectedDept, selectedTier]);

  return (
    <div className="space-y-4">
      {/* Header bar with departmental icon tabs */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-stone-500">
            <Wrench className="w-3.5 h-3.5 text-[#274e37]" />
            <span>Zero-Burn Tool Directory ({filteredTools.length})</span>
          </div>
          <span className="text-[10px] font-mono text-[#274e37] bg-[#f2f7f4] px-2 py-0.5 rounded border border-[#cce2d5]">
            Lifetime Free & Startup Credits
          </span>
        </div>

        {/* Department Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 -mx-1 px-1">
          {DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;
            const isActive = selectedDept === dept.id;
            return (
              <button
                key={dept.id}
                type="button"
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-serif font-medium whitespace-nowrap transition-all flex items-center space-x-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#274e37] text-white shadow-xs'
                    : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{dept.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tier Sub-Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-0.5">
          {TIERS.map((tier) => {
            const isActive = selectedTier === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedTier(tier.id)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors shrink-0 ${
                  isActive
                    ? 'bg-stone-900 text-white font-semibold'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                }`}
              >
                {tier.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredTools.map((tool) => {
          const isExpanded = expandedId === tool.id;

          const tierColor = 
            tool.tier === 'free_forever'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : tool.tier === 'startup_credits'
              ? 'bg-blue-50 text-blue-800 border-blue-200'
              : 'bg-amber-50 text-amber-800 border-amber-200';

          return (
            <div
              key={tool.id}
              className="bg-white border border-stone-200/90 rounded-xl p-3.5 space-y-2 hover:border-stone-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-1.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${tierColor}`}>
                    {tool.tierLabel}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#274e37]">
                    {tool.valueAmount}
                  </span>
                </div>

                <div className="font-serif font-bold text-sm text-stone-900">
                  {tool.name}
                </div>

                <p className="text-xs text-stone-600 font-sans line-clamp-2 leading-relaxed">
                  {tool.tagline}
                </p>
              </div>

              {/* Action and expand toggle */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleExpand(tool.id)}
                  className="text-stone-500 hover:text-stone-800 p-1 rounded font-mono text-[11px] inline-flex items-center gap-1"
                  aria-label="Toggle Details"
                >
                  <span>{isExpanded ? 'Less' : 'Details'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <a
                  href={tool.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-stone-100 hover:bg-[#274e37] hover:text-white text-stone-700 transition-colors"
                  aria-label="Claim Tool Perk"
                  title="Claim Tool Perk"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Expandable Tile Detail */}
              {isExpanded && (
                <div className="mt-2 pt-2 border-t border-stone-100 bg-[#fafaf8] -mx-3.5 -mb-3.5 p-3 rounded-b-xl space-y-2 text-xs">
                  <div>
                    <div className="font-mono text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                      Free Offering
                    </div>
                    <div className="text-stone-700 leading-relaxed font-sans">
                      {tool.freeOffering}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] font-bold text-[#274e37] uppercase tracking-wider mb-1">
                      Eligibility & Hack
                    </div>
                    <div className="text-stone-700 leading-relaxed font-sans">
                      {tool.eligibilityOrHack}
                    </div>
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
