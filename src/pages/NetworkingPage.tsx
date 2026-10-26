import React, { useState, useMemo } from 'react';
import { Search, X, MapPin, ExternalLink, Calendar, Users, Sparkles } from 'lucide-react';
import { CONFERENCES_DATA, ConferenceEvent } from '../data/conferencesContent';
import { ExpandableTile } from '../components/ExpandableTile';

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
    <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-150 pb-20 sm:pb-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-stone-200">
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
          Networking
        </h1>
        <span className="text-xs font-mono text-stone-500">
          {filteredConferences.length} Tech Summits
        </span>
      </div>

      {/* Search Bar */}
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
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-sans ${
              selectedIndustry === chip.id
                ? 'bg-[#274e37] text-white font-semibold shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Summits List */}
      <div className="space-y-3">
        {filteredConferences.map((conf) => (
          <div
            key={conf.id}
            className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 space-y-3 shadow-xs"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#f2f7f4] text-[#274e37] border border-[#cce2d5]">
                  {conf.industryLabel}
                </span>
                <span className="text-xs font-mono text-stone-500 flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>{conf.city}</span>
                </span>
              </div>
              <span className="text-xs font-mono font-semibold text-stone-700 flex items-center space-x-1">
                <Calendar className="w-3 h-3 text-stone-400" />
                <span>{conf.typicalMonth} ({conf.frequency})</span>
              </span>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900 tracking-tight">
                {conf.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans leading-relaxed">
                {conf.summary}
              </p>
            </div>

            {/* Free Entry & Discount Hack (Ghar Expand Tile) */}
            <ExpandableTile
              title="Free Entry & Registration Hack"
              variant="highlight"
              defaultOpen={true}
              icon={<Sparkles className="w-4 h-4 text-[#274e37]" />}
            >
              <div className="space-y-2 pt-2 text-xs font-sans text-stone-800">
                <div className="p-3 bg-white/90 rounded-lg border border-[#cce2d5] leading-relaxed">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#274e37] block mb-1">
                    How Founders Enter For Free
                  </span>
                  <p>{conf.freeEntryHack}</p>
                </div>

                <div className="flex items-center space-x-2 text-stone-600 pt-1">
                  <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>Target Audience: {conf.targetAudience.join(' • ')}</span>
                </div>
              </div>
            </ExpandableTile>

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center justify-between border-t border-stone-100">
              <span className="text-xs font-mono text-stone-400">
                {conf.officialDomain}
              </span>

              <a
                href={conf.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#274e37] hover:bg-[#1c3827] text-white rounded-lg transition-colors shadow-xs inline-flex items-center space-x-1"
                aria-label="Visit Official Website"
                title="Visit Official Summit Portal"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
