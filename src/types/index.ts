export type CategoryType = 
  | 'all' 
  | 'government' 
  | 'sustenance' 
  | 'banking' 
  | 'saas_perks' 
  | 'founder_hacks';

export type FounderType = 
  | 'all' 
  | 'bootstrapped' 
  | 'women' 
  | 'sc_st' 
  | 'student' 
  | 'deeptech_ai' 
  | 'hardware' 
  | 'biotech' 
  | 'agritech' 
  | 'vc_backed';

export interface BenefitItem {
  id: string;
  title: string;
  category: 'government' | 'sustenance' | 'banking' | 'saas_perks' | 'founder_hacks';
  provider: string;
  stateOrRegion: string; // e.g. "Rajasthan", "Gujarat", "Karnataka", "Central / All India", "Global"
  valueAmount: string;
  shortDescription: string;
  fullDescription: string;
  eligibility: string[];
  keyPerks: string[];
  hackOrNuance: string; // The insider arbitrage or fine print
  officialLink: string;
  domainName: string;
  tags: string[];
  founderTypes: FounderType[];
}

export interface FounderHack {
  id: string;
  title: string;
  category: string;
  oneLiner: string;
  thePlaybook: string[];
  realWorldExample: string;
  legalComplianceRule: string;
  estimatedFinancialGain: string;
  applicableStates: string[];
}
