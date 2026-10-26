import React, { useState, useMemo } from 'react';
import { Search, X, MapPin, ExternalLink, Calendar, Users, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { CONFERENCES_DATA } from '../data/conferencesContent';

const INDUSTRY_CHIPS = [
  { id: 'all', label: 'All Summits' },
  { id: 'ai_saas', label: 'AI & SaaS' },
  { id: 'deeptech', label: 'DeepTech' },
  { id: 'healthtech', label: 'Bio & Health' },
  { id: 'hardware', label: 'Hardware & IoT' }
];

export const NetworkingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredConferences = useMemo(() => {
    return CONFERENCES_DATA.filter((conf) => {
      if (selectedIndustry !== 'all' && conf.industry !== selectedIndustry && conf.industry !== 'all') {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = conf.name.toLowerCase().includes(q);
        const matchesCity = conf.city.toLowerCase().includes(q);
        const matchesSummary = conf.summary.toLowerCase().includes(q);
        const matchesTags = conf.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesCity && !matchesSummary && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [selectedIndustry, searchQuery]);

  return (
    <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-150 pb-24 sm:pb-12">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search conferences by city, topic, or summit (e.g. 'Delhi', 'TechSparks', 'Hardware')..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-xs sm:text-sm focus:outline-none focus:border-stone-400 shadow-xs transition-colors font-sans"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700"
            aria-label="Clear Search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Industry Filter Tabs */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        {INDUSTRY_CHIPS.map((chip) => (
          <button
            key={chip.id}
            type="button"
            onClick={() => setSelectedIndustry(chip.id)}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-mono text-[11px] ${
              selectedIndustry === chip.id
                ? 'bg-[#274e37] text-white font-semibold shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between text-xs font-mono text-stone-500 px-1">
        <span>{filteredConferences.length} tech summits</span>
      </div>

      {/* Long Rectangular Tiles Arranged Vertically */}
      <div className="space-y-2">
        {filteredConferences.map((conf) => {
          const isExpanded = expandedId === conf.id;

          return (
            <div
              key={conf.id}
              className="bg-white border border-stone-200 hover:border-stone-400 rounded-xl transition-all shadow-xs overflow-hidden"
            >
              {/* Header Tile (Always Visible) */}
              <button
                type="button"
                onClick={() => toggleExpand(conf.id)}
                className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 hover:bg-stone-50/60 active:bg-stone-100/50 transition-colors"
              >
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-semibold rounded bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5] shrink-0">
                      {conf.industryLabel}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-500 flex items-center space-x-1 shrink-0">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{conf.city}</span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono font-semibold text-stone-700 shrink-0 ml-auto sm:ml-0 flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      <span>{conf.typicalMonth}</span>
                    </span>
                  </div>

                  <div className="text-sm sm:text-base font-serif font-bold text-stone-900 leading-snug">
                    {conf.name}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 transition-transform">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Expanded View */}
              {isExpanded && (
                <div className="bg-[#fafaf8] border-t border-stone-200 p-4 sm:p-5 space-y-3.5 animate-in fade-in duration-150 text-xs">
                  {/* Summary */}
                  <div className="space-y-1">
                    <div className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                      Summit Overview
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                      {conf.summary}
                    </p>
                  </div>

                  {/* Free Entry & Registration Hack */}
                  <div className="p-3 bg-white rounded-lg border border-[#cce2d5] space-y-1.5 shadow-2xs">
                    <div className="flex items-center space-x-1.5 text-[#274e37]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider">
                        How Founders Enter For Free
                      </span>
                    </div>
                    <p className="text-xs text-stone-800 font-sans leading-relaxed">
                      {conf.freeEntryHack}
                    </p>
                  </div>

                  {/* Audience */}
                  <div className="flex items-center space-x-2 text-stone-600 text-xs bg-stone-100/70 p-2.5 rounded-lg border border-stone-200">
                    <Users className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Target Cohort: {conf.targetAudience.join(' • ')}</span>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-2 flex items-center justify-between border-t border-stone-200">
                    <span className="text-[11px] font-mono text-stone-400">
                      {conf.officialDomain}
                    </span>

                    <a
                      href={conf.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#274e37] hover:bg-[#1c3827] text-white rounded-lg transition-colors shadow-xs inline-flex items-center space-x-1.5 font-serif text-xs font-semibold"
                    >
                      <span>Registration</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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
