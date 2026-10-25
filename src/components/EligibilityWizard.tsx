import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Unlock, 
  Lock, 
  RefreshCw,
  Landmark,
  Building,
  Cloud,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { EligibilityProfile, FounderStage, BenefitItem } from '../types';
import { ALL_BENEFITS } from '../data/allBenefits';
import { PERSONA_SCENARIOS, STATES_LIST } from '../data/matrix';

interface EligibilityWizardProps {
  onSelectBenefit: (item: BenefitItem) => void;
}

export const EligibilityWizard: React.FC<EligibilityWizardProps> = ({ onSelectBenefit }) => {
  const [profile, setProfile] = useState<EligibilityProfile>({
    stage: 'bootstrapped',
    hasDpiit: false,
    hasUdyam: false,
    founderDemographics: ['general'],
    sector: 'tech_saas',
    locationState: 'All India',
    hasIncubatorOrVc: false
  });

  const [activePersona, setActivePersona] = useState<string | null>('bootstrapped-idea-founder');

  // Load Persona preset
  const handleSelectPersona = (personaId: string) => {
    const found = PERSONA_SCENARIOS.find(p => p.id === personaId);
    if (found) {
      setProfile(found.profile);
      setActivePersona(personaId);
    }
  };

  // Live match engine
  const matchedResults = useMemo(() => {
    const unlocked: BenefitItem[] = [];
    const lockedWithAction: { item: BenefitItem; missingCondition: string; action: string }[] = [];

    ALL_BENEFITS.forEach(item => {
      let isUnlocked = true;
      let missingReason = '';
      let actionToTake = '';

      // Check DPIIT requirements
      if (item.id === 'dpiit-startup-recognition') {
        // Anyone incorporated < 10 yrs can get DPIIT
        isUnlocked = true;
      } else if (item.id === 'sisfs-seed-fund-scheme') {
        if (!profile.hasDpiit) {
          isUnlocked = false;
          missingReason = 'Requires active DPIIT Recognition';
          actionToTake = 'Apply for free DPIIT certificate on startupindia.gov.in (takes 48 hrs).';
        }
      }

      // Check State specific
      if (item.statesApplicable && !item.statesApplicable.includes('All India')) {
        if (!item.statesApplicable.includes(profile.locationState)) {
          isUnlocked = false;
          missingReason = `Requires registered entity in ${item.statesApplicable.join(', ')}`;
          actionToTake = `Register entity or establishment in ${item.statesApplicable[0]}.`;
        }
      }

      // Check Women & SC/ST specific schemes
      if (item.subCategory === 'women_founders' || item.id === 'standup-india-women-scst') {
        const hasDemographic = profile.founderDemographics.includes('woman') || profile.founderDemographics.includes('sc_st');
        if (!hasDemographic) {
          isUnlocked = false;
          missingReason = 'Requires >51% equity held by Woman or SC/ST founder';
          actionToTake = 'Applicable for diverse founding teams or women-led enterprises.';
        }
      }

      // Check Incubator/VC portfolio perks
      if (item.id === 'github-for-startups' || item.id === 'hubspot-for-startups') {
        if (!profile.hasIncubatorOrVc && profile.stage === 'bootstrapped') {
          isUnlocked = false;
          missingReason = 'Requires affiliation with an incubator/accelerator or VC';
          actionToTake = 'Apply via partner startup hub or join a partner network like Startup India / YC Startup School.';
        }
      }

      // Check Sector alignment
      if (item.subCategory === 'biotech_medtech' && profile.sector !== 'biotech_health') {
        isUnlocked = false;
        missingReason = 'Requires focus on BioTech, Diagnostics, or Healthcare';
        actionToTake = 'Applicable for biotech/medtech innovations.';
      }

      if (isUnlocked) {
        unlocked.push(item);
      } else if (missingReason && actionToTake) {
        lockedWithAction.push({ item, missingCondition: missingReason, action: actionToTake });
      }
    });

    return { unlocked, lockedWithAction };
  }, [profile]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-950 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Eligibility & Free Perks Calculator</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            What becomes <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">100% Free</span> if you are what?
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Select your founder persona or customize your stage, registration status, and demographics below to unlock your personalized stack of non-dilutive government grants, zero-balance banking suites, and $350k+ in cloud credits.
          </p>
        </div>

        {/* Quick Persona Buttons */}
        <div className="mt-6 pt-6 border-t border-slate-800/80">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Or Jump to a Curated Persona:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {PERSONA_SCENARIOS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelectPersona(p.id)}
                className={`text-left p-3 rounded-xl border text-xs transition-all ${
                  activePersona === p.id
                    ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-white mb-0.5">{p.name}</div>
                <div className="text-[11px] text-slate-400 line-clamp-1">{p.role}</div>
                <div className="mt-1 text-[11px] font-semibold text-emerald-400">
                  {p.estimatedTotalValue}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Configurator Form */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
              ⚙️
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Fine-tune Your Startup Parameters
            </h3>
          </div>

          <button
            onClick={() => {
              setActivePersona(null);
              setProfile({
                stage: 'bootstrapped',
                hasDpiit: false,
                hasUdyam: false,
                founderDemographics: ['general'],
                sector: 'tech_saas',
                locationState: 'All India',
                hasIncubatorOrVc: false
              });
            }}
            className="flex items-center space-x-1 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. Stage */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              1. Founder Stage
            </label>
            <select
              value={profile.stage}
              onChange={(e) => {
                setActivePersona(null);
                setProfile({ ...profile, stage: e.target.value as FounderStage });
              }}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="idea">Idea Stage (Pre-incorporation)</option>
              <option value="bootstrapped">Bootstrapped / Self-Funded</option>
              <option value="pre_seed">Pre-Seed (&lt;₹50L raised / MVP)</option>
              <option value="seed">Seed / Series A (Institutional)</option>
            </select>
          </div>

          {/* 2. State */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              2. Registered State
            </label>
            <select
              value={profile.locationState}
              onChange={(e) => {
                setActivePersona(null);
                setProfile({ ...profile, locationState: e.target.value });
              }}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {STATES_LIST.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Sector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              3. Industry Domain
            </label>
            <select
              value={profile.sector}
              onChange={(e) => {
                setActivePersona(null);
                setProfile({ ...profile, sector: e.target.value as any });
              }}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="tech_saas">Software & SaaS</option>
              <option value="ai_deeptech">AI / DeepTech / LLMs</option>
              <option value="hardware">Hardware / Electronics / IoT</option>
              <option value="biotech_health">BioTech / MedTech / Health</option>
              <option value="agritech">AgriTech / Rural Innovation</option>
              <option value="ecommerce_d2c">E-commerce / D2C</option>
            </select>
          </div>

          {/* 4. Demographics */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              4. Founder Demographics
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setActivePersona(null);
                  const isWoman = profile.founderDemographics.includes('woman');
                  setProfile({
                    ...profile,
                    founderDemographics: isWoman 
                      ? profile.founderDemographics.filter(d => d !== 'woman')
                      : [...profile.founderDemographics, 'woman']
                  });
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  profile.founderDemographics.includes('woman')
                    ? 'bg-pink-500/20 text-pink-300 border-pink-500/50'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                👩 Woman Founder (&gt;51%)
              </button>

              <button
                type="button"
                onClick={() => {
                  setActivePersona(null);
                  const isScSt = profile.founderDemographics.includes('sc_st');
                  setProfile({
                    ...profile,
                    founderDemographics: isScSt 
                      ? profile.founderDemographics.filter(d => d !== 'sc_st')
                      : [...profile.founderDemographics, 'sc_st']
                  });
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  profile.founderDemographics.includes('sc_st')
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                🤝 SC / ST Promoter
              </button>
            </div>
          </div>
        </div>

        {/* Toggle Badges: DPIIT, Udyam, VC/Incubator */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs">
          <label className="flex items-center space-x-2 cursor-pointer bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 hover:border-slate-700">
            <input
              type="checkbox"
              checked={profile.hasDpiit}
              onChange={(e) => {
                setActivePersona(null);
                setProfile({ ...profile, hasDpiit: e.target.checked });
              }}
              className="rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
            />
            <span className="text-slate-200 font-medium">Has DPIIT Recognition</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 hover:border-slate-700">
            <input
              type="checkbox"
              checked={profile.hasUdyam}
              onChange={(e) => {
                setActivePersona(null);
                setProfile({ ...profile, hasUdyam: e.target.checked });
              }}
              className="rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
            />
            <span className="text-slate-200 font-medium">Has MSME Udyam Certificate</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 hover:border-slate-700">
            <input
              type="checkbox"
              checked={profile.hasIncubatorOrVc}
              onChange={(e) => {
                setActivePersona(null);
                setProfile({ ...profile, hasIncubatorOrVc: e.target.checked });
              }}
              className="rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
            />
            <span className="text-slate-200 font-medium">Incubator / Accelerator / VC Backed</span>
          </label>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-emerald-400 font-bold text-lg flex items-center">
                <Unlock className="w-5 h-5 mr-1.5" />
                {matchedResults.unlocked.length} Benefits Unlocked Right Now
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Based on your exact profile, you qualify for the following grants, credits, and banking services.
            </p>
          </div>

          <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-right">
            <div className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
              Estimated Total Free Value
            </div>
            <div className="text-base sm:text-lg font-black text-white">
              {profile.hasIncubatorOrVc ? '$350k+ USD + ₹1.5 Cr' : '$15k+ USD + ₹50L Grants'}
            </div>
          </div>
        </div>

        {/* Unlocked Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {matchedResults.unlocked.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-500 rounded-2xl p-5 flex flex-col justify-between shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-emerald-400 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    100% Eligible
                  </span>
                  <span className="text-slate-400">{item.provider}</span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h4>

                <div className="inline-block px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-300 font-bold text-xs mb-3">
                  💰 {item.valueAmount}
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                  {item.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectBenefit(item)}
                  className="flex-1 py-1.5 px-3 bg-emerald-600/80 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center space-x-1"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={item.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors"
                  title="Direct Application"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Locked With 1-Step Actions */}
        {matchedResults.lockedWithAction.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-base">
              <Lock className="w-5 h-5 text-amber-400" />
              <span>{matchedResults.lockedWithAction.length} Additional Programs (Unlock With 1 Step)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matchedResults.lockedWithAction.map(({ item, missingCondition, action }) => (
                <div
                  key={item.id}
                  className="bg-slate-900/60 border border-amber-500/20 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-amber-400 flex items-center">
                        <Lock className="w-3.5 h-3.5 mr-1" />
                        Currently Locked
                      </span>
                      <span className="text-slate-400">{item.provider}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      {item.title}
                    </h4>

                    <div className="text-xs text-emerald-300 font-semibold mb-2">
                      Potential Value: {item.valueAmount}
                    </div>

                    <div className="bg-amber-950/20 border border-amber-500/30 p-2.5 rounded-xl text-xs text-amber-200/90 mb-3">
                      <div className="font-semibold text-amber-300 mb-0.5">Missing Requirement:</div>
                      <div>{missingCondition}</div>
                      <div className="mt-1.5 text-slate-300 text-[11px] flex items-center">
                        <ArrowRight className="w-3 h-3 mr-1 text-amber-400 inline shrink-0" />
                        <span>Action: {action}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectBenefit(item)}
                    className="w-full py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors"
                  >
                    View What is Needed
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
