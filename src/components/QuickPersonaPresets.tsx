import React from 'react';
import { 
  Sparkles, 
  UserCheck, 
  Cpu, 
  Wrench, 
  Flame, 
  X
} from 'lucide-react';
import { FilterState } from './MyntraFilterDrawer';

export type PersonaPresetId = 'woman_led' | 'ai_saas' | 'hardware_deeptech' | 'solo_bootstrap';

interface PersonaPreset {
  id: PersonaPresetId;
  label: string;
  sub: string;
  icon: React.ReactNode;
  activeFilterPatch: Partial<FilterState>;
  badgeText: string;
}

const PRESETS: PersonaPreset[] = [
  {
    id: 'woman_led',
    label: 'Woman-Led',
    sub: '51% + Grants',
    icon: <UserCheck className="w-4 h-4 text-emerald-700" />,
    badgeText: '₹10L–₹1Cr + 35% PMEGP',
    activeFilterPatch: {
      categories: ['grant', 'stipend'],
      sectors: ['All Sectors / Sector Agnostic']
    }
  },
  {
    id: 'ai_saas',
    label: 'AI & SaaS',
    sub: 'Cloud + APIs',
    icon: <Cpu className="w-4 h-4 text-blue-700" />,
    badgeText: '$150k Azure + Claude',
    activeFilterPatch: {
      categories: ['cloud', 'arbitrage'],
      sectors: ['Tech & DeepTech', 'Fintech & Digital Services']
    }
  },
  {
    id: 'hardware_deeptech',
    label: 'Hardware',
    sub: 'Fab Labs + R&D',
    icon: <Wrench className="w-4 h-4 text-amber-700" />,
    badgeText: '₹50L BIRAC + Prototyping',
    activeFilterPatch: {
      categories: ['grant'],
      sectors: ['Healthcare & Biotech', 'Manufacturing & Hardware']
    }
  },
  {
    id: 'solo_bootstrap',
    label: 'Solo Bootstrapper',
    sub: 'Zero Burn',
    icon: <Flame className="w-4 h-4 text-rose-700" />,
    badgeText: '0 MAB + ₹20k/mo Stipend',
    activeFilterPatch: {
      categories: ['banking', 'stipend'],
      stages: ['Idea Stage (< 1 Year)', 'Early Bootstrapped']
    }
  }
];

interface QuickPersonaPresetsProps {
  activePreset: PersonaPresetId | null;
  onSelectPreset: (preset: PersonaPreset) => void;
  onClearPreset: () => void;
}

export const QuickPersonaPresets: React.FC<QuickPersonaPresetsProps> = ({
  activePreset,
  onSelectPreset,
  onClearPreset
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-0.5">
        <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-stone-500">
          <Sparkles className="w-3.5 h-3.5 text-[#274e37]" />
          <span>Quick Personas (1-Tap Match)</span>
        </div>
        {activePreset && (
          <button
            type="button"
            onClick={onClearPreset}
            className="text-[11px] font-mono text-stone-500 hover:text-stone-900 inline-flex items-center gap-1"
          >
            <span>Reset preset</span>
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Horizontal Scrollable Preset Cards on Mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {PRESETS.map((preset) => {
          const isSelected = activePreset === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => {
                if (isSelected) {
                  onClearPreset();
                } else {
                  onSelectPreset(preset);
                }
              }}
              className={`p-2.5 rounded-xl border text-left transition-all relative overflow-hidden group ${
                isSelected
                  ? 'bg-[#f2f7f4] border-[#274e37] shadow-xs ring-1 ring-[#274e37]'
                  : 'bg-white border-stone-200/90 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="p-1 rounded-md bg-stone-100 group-hover:bg-white transition-colors">
                  {preset.icon}
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#274e37]" />
                )}
              </div>

              <div className="font-serif font-bold text-xs sm:text-sm text-stone-900 tracking-tight leading-tight">
                {preset.label}
              </div>
              <div className="text-[10px] text-stone-500 font-sans truncate mt-0.5">
                {preset.sub}
              </div>
              <div className="text-[9px] font-mono font-semibold text-[#274e37] mt-1.5 truncate">
                {preset.badgeText}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
