import React, { useState, useMemo } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { CURATED_ITEMS, CuratedItem } from '../data/curatedDirectory';

interface SmartFinderProps {
  onClose: () => void;
  onSelectItem: (item: CuratedItem) => void;
}

const REGIONS = [
  'All India / Central',
  'Rajasthan',
  'Gujarat',
  'Haryana',
  'Karnataka',
  'Bihar',
  'Uttar Pradesh',
  'Tamil Nadu',
  'Delhi',
  'Odisha'
];

const BOTTLENECKS = [
  { id: 'stipend', label: '💸 Personal Runway (Need cash to survive)', desc: '₹20k–₹25k/mo monthly founder allowances' },
  { id: 'grant', label: '🏛️ Non-Dilutive Capital (Need ₹20L–₹50L)', desc: 'Zero equity grants for prototype validation' },
  { id: 'compute', label: '☁️ Free Compute (Need servers & OpenAI)', desc: 'Up to $350k in Azure, AWS, and GCP credits' },
  { id: 'banking', label: '🏦 Banking & Forex (Need seamless accounts)', desc: 'Zero balance current accounts + 0% GST export' },
  { id: 'arbitrage', label: '⚡ State Arbitrage & Tax Hacks', desc: 'Cross-state incorporation & patent double-dips' }
];

export const SmartFinder: React.FC<SmartFinderProps> = ({
  onClose,
  onSelectItem
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Rajasthan');
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>('stipend');

  const matches = useMemo(() => {
    return CURATED_ITEMS.filter(item => {
      // Category match
      const categoryMatch = 
        selectedBottleneck === 'all' || 
        item.category === selectedBottleneck;

      // Region match
      const regionMatch = 
        selectedRegion === 'All India / Central' || 
        item.stateOrRegion === selectedRegion || 
        item.stateOrRegion.includes(selectedRegion) || 
        item.stateOrRegion === 'All States / Central' || 
        item.stateOrRegion === 'Global / All India';

      return categoryMatch && regionMatch;
    });
  }, [selectedRegion, selectedBottleneck]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="bg-[#0b0f19] border border-slate-800 w-full max-w-lg rounded-2xl p-5 sm:p-6 space-y-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <h3 className="text-base font-bold text-white">Smart Matcher</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step 1: Region */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            1. Where is your entity / roots based?
          </label>
          <div className="flex flex-wrap gap-1.5">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                  selectedRegion === r
                    ? 'bg-white text-slate-950 font-bold'
                    : 'bg-[#111726] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Main Bottleneck */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            2. What do you need right now?
          </label>
          <div className="space-y-1.5">
            {BOTTLENECKS.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBottleneck(b.id)}
                className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all ${
                  selectedBottleneck === b.id
                    ? 'bg-indigo-600/20 border-indigo-500 text-white font-semibold'
                    : 'bg-[#111726] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-slate-200">{b.label}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">{b.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Recommendations Result */}
        <div className="pt-2 border-t border-slate-800 space-y-2">
          <div className="text-[11px] font-mono text-slate-400">
            Matched {matches.length} target programs:
          </div>
          <div className="space-y-1.5 max-h-48 overflow-y-auto">
            {matches.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectItem(item);
                  onClose();
                }}
                className="cursor-pointer bg-[#111726] hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between gap-2 text-xs transition-colors"
              >
                <div className="truncate">
                  <div className="font-bold text-white truncate">{item.title}</div>
                  <div className="text-[10px] text-emerald-400 font-mono">{item.value}</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
