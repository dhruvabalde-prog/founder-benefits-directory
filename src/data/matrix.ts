import { EligibilityProfile } from '../types';

export interface PersonaScenario {
  id: string;
  name: string;
  role: string;
  profile: EligibilityProfile;
  headlinePerk: string;
  estimatedTotalValue: string;
  matchedBenefitIds: string[];
  keyAdvice: string;
}

export const PERSONA_SCENARIOS: PersonaScenario[] = [
  {
    id: 'bootstrapped-idea-founder',
    name: 'Early Stage / Bootstrapped Tech Founder',
    role: 'Zero Outside Funding • Just an Idea or Early MVP',
    profile: {
      stage: 'bootstrapped',
      hasDpiit: false,
      hasUdyam: false,
      founderDemographics: ['general'],
      sector: 'tech_saas',
      locationState: 'All India',
      hasIncubatorOrVc: false
    },
    headlinePerk: '$1,000 AWS + $1,000 Azure + $2,500 OpenAI + 3 Mos Free Notion',
    estimatedTotalValue: '$5,000+ USD in Cloud/AI Credits + 0% Fees',
    matchedBenefitIds: [
      'microsoft-founders-hub',
      'aws-activate',
      'google-cloud-startups',
      'notion-for-startups',
      'mongodb-for-startups',
      'hdfc-smartup'
    ],
    keyAdvice: 'You do not need outside funding to get $5k+ in infrastructure! Microsoft Founders Hub Level 1 requires zero funding or incorporation to get Azure and OpenAI credits. Apply for AWS Activate Founders tier with your company domain email.'
  },
  {
    id: 'woman-founder-innovator',
    name: 'Woman Tech / Impact Entrepreneur',
    role: 'Woman Founder / Majority Women-Led (>51% Shareholding)',
    profile: {
      stage: 'pre_seed',
      hasDpiit: true,
      hasUdyam: true,
      founderDemographics: ['woman'],
      sector: 'tech_saas',
      locationState: 'Karnataka',
      hasIncubatorOrVc: false
    },
    headlinePerk: '₹10L - ₹1 Crore Stand-Up India Loan + Karnataka ELEVATE Women Priority + 90% MSME Subsidy',
    estimatedTotalValue: '₹1.5+ Crore in Loans/Grants + $100k+ Cloud Credits',
    matchedBenefitIds: [
      'standup-india-women-scst',
      'karnataka-elevate-100',
      'sisfs-seed-fund-scheme',
      'dpiit-startup-recognition',
      'msme-zed-scheme',
      'hdfc-smartup',
      'microsoft-founders-hub'
    ],
    keyAdvice: 'Stand-Up India mandates scheduled bank branches to prioritize women entrepreneurs with composite loans up to ₹1 Crore at subsidized interest rates. In states like Karnataka (ELEVATE Women) and Tamil Nadu, dedicated grant allocations have substantially higher selection rates!'
  },
  {
    id: 'deeptech-ai-founder',
    name: 'DeepTech & Generative AI Builder',
    role: 'AI / LLM Native Product • Building Foundation or Agentic Stack',
    profile: {
      stage: 'seed',
      hasDpiit: true,
      hasUdyam: true,
      founderDemographics: ['general'],
      sector: 'ai_deeptech',
      locationState: 'All India',
      hasIncubatorOrVc: true
    },
    headlinePerk: '$350k Google Cloud AI Credits + $150k Azure OpenAI + ₹30L MeitY TIDE Grant',
    estimatedTotalValue: '$500,000+ USD in Cloud/LLM Compute + ₹50L Grants',
    matchedBenefitIds: [
      'google-cloud-startups',
      'microsoft-founders-hub',
      'meity-tide-samridh',
      'aws-activate',
      'dpiit-startup-recognition',
      'github-for-startups',
      'razorpayx-banking-suite'
    ],
    keyAdvice: 'AI-first startups get maximum cloud sponsorship. Google Cloud offers up to $350k for generative AI teams building with Vertex AI/Gemini, and Microsoft Founders Hub scales to $150k Azure with dedicated OpenAI cluster quotas.'
  },
  {
    id: 'biotech-medtech-founder',
    name: 'BioTech / HealthTech Innovator',
    role: 'Hardware / Diagnostic / Bio-Science • Wet Lab or Clinical Stage',
    profile: {
      stage: 'pre_seed',
      hasDpiit: true,
      hasUdyam: true,
      founderDemographics: ['general'],
      sector: 'biotech_health',
      locationState: 'Karnataka',
      hasIncubatorOrVc: false
    },
    headlinePerk: '₹50 Lakhs BIRAC BIG Grant (100% Non-Dilutive) + Wet Lab Access + Fast-Track Patents',
    estimatedTotalValue: '₹70+ Lakhs in Non-Dilutive Capital + ₹10L Patent Rebate',
    matchedBenefitIds: [
      'birac-big-grant',
      'dpiit-startup-recognition',
      'sisfs-seed-fund-scheme',
      'karnataka-elevate-100',
      'hdfc-smartup'
    ],
    keyAdvice: 'Apply for the BIRAC BIG call (Jan & July cycles) through premier centers like C-CAMP or Venture Center Pune. Combined with DPIIT 80% patent fee rebates, you can preserve equity while completing crucial clinical proof-of-concept.'
  },
  {
    id: 'vc-backed-growth-founder',
    name: 'Funded / Accelerator-Backed Scaleup',
    role: 'Raised Seed/Series A • Affiliated with YC, Techstars, Peak XV, Blume, etc.',
    profile: {
      stage: 'seed',
      hasDpiit: true,
      hasUdyam: true,
      founderDemographics: ['general'],
      sector: 'tech_saas',
      locationState: 'All India',
      hasIncubatorOrVc: true
    },
    headlinePerk: '$100k AWS + $200k GCP + 20 Free GitHub Seats + 90% Off HubSpot + Zero Forex Desk',
    estimatedTotalValue: '$350,000+ USD in Credits + ₹10 Crore CGSS Debt Facility',
    matchedBenefitIds: [
      'aws-activate',
      'google-cloud-startups',
      'github-for-startups',
      'hubspot-for-startups',
      'intercom-early-stage',
      'notion-for-startups',
      'cgss-credit-guarantee',
      'icici-istartup-2',
      'razorpayx-banking-suite',
      'mercury-us-banking'
    ],
    keyAdvice: 'Never pay full price for SaaS in Year 1! Claim portfolio-tier AWS ($100k) and GCP ($100k-$200k), activate HubSpot at 90% off, use GitHub Enterprise free for 20 seats, and leverage CGSS to raise collateral-free venture debt instead of diluting equity.'
  }
];

export const STATES_LIST = [
  'All India',
  'Karnataka',
  'Tamil Nadu',
  'Maharashtra',
  'Gujarat',
  'Telangana',
  'Kerala',
  'Delhi NCR',
  'Uttar Pradesh',
  'Rajasthan',
  'Andhra Pradesh',
  'West Bengal'
];
