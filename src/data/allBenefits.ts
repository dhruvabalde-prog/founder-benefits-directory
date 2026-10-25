import { BenefitItem } from '../types';
import { GOVERNMENT_SCHEMES } from './schemes';
import { BANKING_BENEFITS } from './banking';
import { SAAS_PERKS } from './perks';

export const ALL_BENEFITS: BenefitItem[] = [
  ...GOVERNMENT_SCHEMES,
  ...BANKING_BENEFITS,
  ...SAAS_PERKS
];

export const CATEGORY_LABELS = {
  all: 'All Benefits & Perks',
  government: 'Government Schemes & Grants',
  banking: 'Founder Banking & Forex Suites',
  saas_perks: 'Cloud Credits & Free SaaS Perks'
};

export const SUB_CATEGORY_LABELS: Record<string, string> = {
  central_gov: 'Central Govt (Startup India)',
  state_gov: 'State Startup Policies',
  women_founders: 'Women-Led Ventures',
  biotech_medtech: 'BioTech / MedTech',
  deeptech_hardware: 'DeepTech / Hardware / AI',
  zero_balance_current: 'Zero Balance Current Accounts',
  forex_crossborder: 'Forex & Cross-Border (US/FDI)',
  founder_credit_cards: 'Founder Corporate Cards',
  payroll_api_banking: 'Payroll & API Banking',
  cloud_infra: 'Cloud Infrastructure Credits',
  ai_llm_credits: 'Generative AI & LLM Credits',
  dev_tools: 'Developer Tools & CI/CD',
  productivity: 'Productivity & Workspaces',
  crm_marketing: 'CRM & Marketing Suites',
  legal_incorporation: 'Legal & Incorporation'
};
