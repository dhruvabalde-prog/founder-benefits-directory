export type CategoryType = 'government' | 'banking' | 'saas_perks' | 'all';

export type SubCategory = 
  | 'central_gov' 
  | 'state_gov' 
  | 'women_founders' 
  | 'sc_st_founders'
  | 'agritech' 
  | 'deeptech_hardware'
  | 'biotech_medtech'
  | 'zero_balance_current'
  | 'forex_crossborder'
  | 'founder_credit_cards'
  | 'payroll_api_banking'
  | 'cloud_infra'
  | 'ai_llm_credits'
  | 'dev_tools'
  | 'productivity'
  | 'crm_marketing'
  | 'legal_incorporation';

export type FounderStage = 'idea' | 'bootstrapped' | 'pre_seed' | 'seed' | 'series_a_plus';

export interface BenefitItem {
  id: string;
  title: string;
  category: 'government' | 'banking' | 'saas_perks';
  subCategory: SubCategory;
  provider: string; // e.g. "DPIIT", "Startup India", "HDFC Bank", "AWS", "Google Cloud"
  shortDescription: string;
  fullDescription: string;
  valueAmount: string; // e.g. "₹20L - ₹50L Non-dilutive grant", "$100,000 USD Credits", "Zero Balance"
  currencyOrType: 'INR' | 'USD' | 'Service' | 'Discount';
  eligibility: string[];
  documentsRequired: string[];
  keyPerks: string[];
  hiddenNuances: string[]; // Crucial gotchas & nuances founders miss
  officialLink: string;
  applicationStepByStep: string[];
  tags: string[];
  statesApplicable?: string[]; // If state-specific, e.g. ["Karnataka", "Tamil Nadu", "All India"]
  isFeatured?: boolean;
}

export interface EligibilityProfile {
  stage: FounderStage;
  hasDpiit: boolean;
  hasUdyam: boolean;
  founderDemographics: ('general' | 'woman' | 'sc_st' | 'student')[];
  sector: 'tech_saas' | 'ai_deeptech' | 'hardware' | 'biotech_health' | 'agritech' | 'ecommerce_d2c' | 'other';
  locationState: string;
  hasIncubatorOrVc: boolean;
}

export interface NuanceTopic {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  commonMistakes: string[];
  insiderTips: string[];
  keyLegislationOrClause: string;
}
