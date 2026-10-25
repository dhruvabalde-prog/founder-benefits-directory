import React from 'react';
import { 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  Landmark,
  Building2,
  Cloud
} from 'lucide-react';
import { BenefitItem } from '../types';

interface ItemCardProps {
  item: BenefitItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenDetails: (item: BenefitItem) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  isBookmarked,
  onToggleBookmark,
  onOpenDetails
}) => {
  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'government':
        return {
          badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
          icon: <Landmark className="w-3.5 h-3.5 inline mr-1 text-amber-400" />,
          label: 'Government Scheme'
        };
      case 'banking':
        return {
          badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
          icon: <Building2 className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />,
          label: 'Banking & Forex'
        };
      case 'saas_perks':
      default:
        return {
          badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          icon: <Cloud className="w-3.5 h-3.5 inline mr-1 text-cyan-400" />,
          label: 'Cloud & SaaS Perk'
        };
    }
  };

  const theme = getCategoryTheme(item.category);

  return (
    <div className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10">
      <div>
        {/* Top Badges & Bookmark */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border flex items-center ${theme.badge}`}>
              {theme.icon}
              {theme.label}
            </span>

            {item.statesApplicable && item.statesApplicable[0] !== 'All India' && (
              <span className="px-2 py-0.5 text-[11px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-md">
                📍 {item.statesApplicable.join(', ')}
              </span>
            )}
          </div>

          <button
            onClick={() => onToggleBookmark(item.id)}
            className="text-slate-400 hover:text-indigo-400 transition-colors p-1.5 rounded-lg hover:bg-slate-800"
            title={isBookmarked ? 'Remove from saved' : 'Save benefit'}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-5 h-5 text-indigo-400" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Title & Provider */}
        <div className="mb-2">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            {item.provider}
          </span>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mt-0.5 leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Value Highlight Pill */}
        <div className="inline-block my-2 px-3 py-1.5 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-500/30 rounded-xl">
          <span className="text-xs font-bold text-emerald-300 flex items-center">
            💰 {item.valueAmount}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
          {item.shortDescription}
        </p>

        {/* Quick Eligibility snippet */}
        <div className="mb-4 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            Key Eligibility:
          </div>
          <p className="text-xs text-slate-300 line-clamp-2">
            {item.eligibility[0]}
          </p>
        </div>

        {/* Hidden Nuance Box */}
        {item.hiddenNuances && item.hiddenNuances.length > 0 && (
          <div className="mb-4 bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl">
            <div className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-1 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1 text-amber-400" />
              Critical Nuance:
            </div>
            <p className="text-xs text-slate-300 line-clamp-2">
              {item.hiddenNuances[0]}
            </p>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(item)}
          className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 bg-indigo-600/90 hover:bg-indigo-600 text-white rounded-xl text-xs font-semibold transition-all shadow-md hover:shadow-indigo-600/25"
        >
          <span>View Blueprint</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={item.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-medium transition-colors border border-slate-700"
          title="Open Official Portal"
        >
          <span>Official Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
