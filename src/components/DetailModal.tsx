import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  ListOrdered, 
  AlertTriangle, 
  Bookmark, 
  BookmarkCheck,
  Building,
  Landmark,
  Cloud,
  Layers
} from 'lucide-react';
import { BenefitItem } from '../types';

interface DetailModalProps {
  item: BenefitItem | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  item,
  onClose,
  isBookmarked,
  onToggleBookmark
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'documents' | 'steps' | 'nuances'>('overview');

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/80 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 flex items-center">
                {item.category === 'government' && <Landmark className="w-3.5 h-3.5 mr-1 text-amber-400" />}
                {item.category === 'banking' && <Building className="w-3.5 h-3.5 mr-1 text-emerald-400" />}
                {item.category === 'saas_perks' && <Cloud className="w-3.5 h-3.5 mr-1 text-cyan-400" />}
                {item.provider}
              </span>

              {item.statesApplicable && (
                <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                  📍 {item.statesApplicable.join(', ')}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {item.title}
            </h2>

            <div className="inline-block px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-lg text-emerald-300 font-bold text-sm">
              💰 Value: {item.valueAmount}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleBookmark(item.id)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Bookmark"
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-5 h-5 text-indigo-400" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-1 px-6 border-b border-slate-800 bg-slate-950/40 overflow-x-auto text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center space-x-1.5 py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Overview & Perks</span>
          </button>

          <button
            onClick={() => setActiveTab('eligibility')}
            className={`flex items-center space-x-1.5 py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'eligibility'
                ? 'border-indigo-500 text-indigo-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Eligibility ({item.eligibility.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`flex items-center space-x-1.5 py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'documents'
                ? 'border-indigo-500 text-indigo-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Documents ({item.documentsRequired.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('steps')}
            className={`flex items-center space-x-1.5 py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'steps'
                ? 'border-indigo-500 text-indigo-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ListOrdered className="w-4 h-4" />
            <span>Step-by-Step Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('nuances')}
            className={`flex items-center space-x-1.5 py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'nuances'
                ? 'border-amber-500 text-amber-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-amber-300'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Hidden Nuances & Traps</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm text-slate-200">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Detailed Description
                </h4>
                <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {item.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Benefits & Perks
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {item.keyPerks.map((perk, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start space-x-2 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Tags & Taxonomy
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-lg border border-slate-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs text-indigo-300">
                💡 Check off items below to see if your startup satisfies all statutory and operational requirements.
              </div>

              <div className="space-y-2">
                {item.eligibility.map((criterion, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start space-x-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-sm text-slate-200 leading-normal">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400">
                📄 Keep these documents ready in PDF format before opening the official portal.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.documentsRequired.map((doc, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start space-x-3 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800"
                  >
                    <FileText className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'steps' && (
            <div className="space-y-4">
              <div className="space-y-3">
                {item.applicationStepByStep.map((step, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start space-x-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800"
                  >
                    <div className="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-300 flex items-center justify-center shrink-0 text-xs font-bold border border-indigo-500/40">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-slate-200 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'nuances' && (
            <div className="space-y-4">
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300">
                ⚠️ Critical Nuances: These are the insider gotchas, common rejection causes, and hidden fine print that founders rarely discover until it is too late.
              </div>

              <div className="space-y-3">
                {item.hiddenNuances.map((nuance, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start space-x-3 bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl"
                  >
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-amber-200/90 leading-relaxed">{nuance}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Official Source: <span className="text-slate-300 font-medium">{item.provider}</span>
          </div>

          <a
            href={item.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 py-2 px-5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
          >
            <span>Proceed to Official Application</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
