import { BenefitItem } from '../types';
import { GOVERNMENT_SCHEMES } from './schemes';
import { BANKING_BENEFITS } from './banking';
import { SAAS_PERKS } from './perks';

export const ALL_BENEFITS: BenefitItem[] = [
  ...GOVERNMENT_SCHEMES,
  ...BANKING_BENEFITS,
  ...SAAS_PERKS
];
