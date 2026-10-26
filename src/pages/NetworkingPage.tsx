import React, { useState, useMemo } from 'react';
import { Search, X, ExternalLink } from 'lucide-react';
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
    <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-150 pb-16 sm:pb-12">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search conferences by city, topic, or summit (e.g. 'Delhi', 'TechSparks')..."
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
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-sans text-xs ${
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

      {/* Long Rectangular Tiles Arranged Vertically (No In-Place Expand, Direct External Summit Portal) */}
      <div className="space-y-2">
        {filteredConferences.map((conf) => {
          return (
            <div
              key={conf.id}
              className="bg-white border border-stone-200/90 hover:border-stone-400 rounded-xl transition-all shadow-xs overflow-hidden"
            >
              <a
                href={conf.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 flex items-center justify-between gap-3 group select-none block"
              >
                <div className="flex-1 min-w-0 pr-1">
                  {/* WhatsApp chat style tags */}
                  <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                    <span className="px-2 py-0.5 text-[11px] rounded-md bg-[#e7f8ec] text-[#12592b] font-sans leading-tight">
                      {conf.industryLabel}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] rounded-md bg-stone-100 text-stone-600 font-sans leading-tight">
                      📍 {conf.city}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] rounded-md bg-[#f2f7f4] text-[#274e37] font-sans leading-tight ml-auto sm:ml-0 font-mono">
                      {conf.typicalMonth}
                    </span>
                  </div>

                  <div className="text-sm sm:text-base font-serif font-bold text-stone-900 group-hover:text-[#274e37] transition-colors leading-snug">
                    {conf.name}
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-stone-100 group-hover:bg-[#274e37] group-hover:text-white text-stone-600 transition-colors shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
