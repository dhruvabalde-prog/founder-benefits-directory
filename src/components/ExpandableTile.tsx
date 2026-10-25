import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableTileProps {
  title: string;
  badge?: string | number | null;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  variant?: 'default' | 'alert' | 'highlight';
}

export const ExpandableTile: React.FC<ExpandableTileProps> = ({
  title,
  badge,
  icon,
  defaultOpen = false,
  children,
  variant = 'default'
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const getVariantStyles = () => {
    switch (variant) {
      case 'alert':
        return 'bg-[#fffbeb] border-[#fde68a] text-amber-900';
      case 'highlight':
        return 'bg-[#f2f7f4] border-[#cce2d5] text-[#274e37]';
      default:
        return 'bg-white border-stone-200 text-stone-900';
    }
  };

  return (
    <div className={`border rounded-xl transition-all shadow-xs overflow-hidden ${getVariantStyles()}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-3 text-left hover:bg-black/[0.02] active:bg-black/[0.04] transition-colors"
      >
        <div className="flex items-center space-x-2.5 min-w-0">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="font-serif font-bold text-sm sm:text-base tracking-tight truncate">
            {title}
          </span>
          {badge !== undefined && badge !== null && (
            <span className="shrink-0 px-2 py-0.5 text-[11px] font-mono font-semibold rounded-full bg-stone-100 text-stone-700 border border-stone-200">
              {badge}
            </span>
          )}
        </div>

        <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 bg-stone-100/80 text-stone-600">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-inherit/40 animate-in fade-in duration-100">
          {children}
        </div>
      )}
    </div>
  );
};
