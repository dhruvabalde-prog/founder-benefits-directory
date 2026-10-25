import { BenefitItem } from '../types';

export const BANKING_BENEFITS: BenefitItem[] = [
  {
    id: 'hdfc-smartup',
    title: 'HDFC SmartUp Founder Banking Suite',
    category: 'banking',
    provider: 'HDFC Bank',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Zero Balance for 1 Year + Preferential FX',
    shortDescription: 'Zero balance current account for 12 months, discounted foreign inward/outward remittance margins, corporate cards with high limits, and annual SmartUp grants.',
    fullDescription: 'HDFC Bank\'s specialized startup program. Waives non-maintenance fees for early startups and bundles dedicated Forex relationship managers.',
    eligibility: [
      'DPIIT Recognized startup, or registered entity incorporated < 5 years',
      'Entity can be Private Limited Company, LLP, or registered partnership'
    ],
    keyPerks: [
      'Zero balance current account with waived Non-Maintenance Charges (NMC) for 12 months',
      'Preferential Forex Card & Trade Services: Significant discount on foreign remittance margins',
      'Corporate Credit Cards with unsecured limits based on bank balances or FD collateral',
      'HDFC SmartUp Grants: Annual CSR grant funding competition up to ₹50 Lakhs for social impact startups'
    ],
    hackOrNuance: 'Zero balance applies for 12 months. Request your relationship manager to lock Purpose Code P0802 for software export to auto-issue e-FIRS statements with zero manual visit.',
    officialLink: 'https://www.hdfcbank.com/sme/startup-banking',
    domainName: 'hdfcbank.com',
    tags: ['Banking', 'Zero Balance', 'HDFC', 'Forex', 'Corporate Cards', 'SmartUp Grant'],
    founderTypes: ['all', 'bootstrapped', 'women', 'vc_backed']
  },
  {
    id: 'icici-istartup-2',
    title: 'ICICI iStartup 2.0 & API Banking Platform',
    category: 'banking',
    provider: 'ICICI Bank',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Zero Balance + Instant API Banking Integration',
    shortDescription: 'Free current account with custom account number, direct API banking integration for automated payouts, and pre-negotiated inward remittance pricing.',
    fullDescription: 'iStartup 2.0 integrates traditional business banking with digital operations. It provides automated ERP and payroll reconciliation, deep webhooks for software developers, discounted outward remittances for cloud infra, and corporate credit cards with dynamic sub-limits.',
    eligibility: [
      'Startup incorporated in India as Pvt Ltd, LLP, or OPC',
      'Startups with DPIIT certificate qualify for Platinum tier privileges instantly'
    ],
    keyPerks: [
      'Customized Account Number (e.g. company founding year as account digits)',
      'Zero Minimum Balance commitment for initial 12 to 24 months based on turnover',
      'Developer API Suite: Direct REST APIs for automated supplier payouts and customer refunds',
      'Trade Online Portal: 100% paperless outward remittance for software imports and overseas subscriptions'
    ],
    hackOrNuance: 'Use their automated developer sandbox to test automated contractor payouts before getting your digital signature certificate (DSC) approved.',
    officialLink: 'https://www.icicibank.com/business-banking/startups',
    domainName: 'icicibank.com',
    tags: ['Banking', 'ICICI', 'API Banking', 'Automated Payouts', 'Zero Balance', 'Forex'],
    founderTypes: ['all', 'deeptech_ai', 'bootstrapped']
  },
  {
    id: 'razorpayx-banking-suite',
    title: 'RazorpayX Business Banking & Founder Corporate Cards',
    category: 'banking',
    provider: 'RazorpayX',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Free Payroll + 45-day Interest-Free Corporate Cards',
    shortDescription: 'Automated 1-click payroll, TDS/PF tax auto-filing, collateral-free founder corporate credit cards with 45-day interest free cycles, and vendor invoices.',
    fullDescription: 'RazorpayX operates on top of scheduled bank accounts to automate the entire financial operations stack for founders. It handles auto-deduction and remittance of TDS, PF, ESIC, and PT, while providing high-limit corporate cards specifically designed to pay international SaaS bills without currency markup shocks.',
    eligibility: [
      'Registered Indian Private Limited Company, LLP, or Partnership',
      'Active business operations and transaction flow'
    ],
    keyPerks: [
      'RazorpayX Payroll: Automated 100% compliant salary disbursement with auto-payment of TDS challans, PF, and PT',
      'Founder Corporate Credit Cards: High limit cards with zero forex markups or subsidized conversion for AWS, GCP, Meta Ads, and GitHub spend',
      'Vendor Payments Automation: OCR scan invoices and auto-schedule NEFT/IMPS payments with multi-level maker-checker approvals'
    ],
    hackOrNuance: 'Create unique virtual corporate cards per SaaS vendor (e.g., one card for OpenAI, one for AWS) with monthly spend caps to prevent accidental runaway API bills.',
    officialLink: 'https://razorpay.com/x/',
    domainName: 'razorpay.com',
    tags: ['NeoBanking', 'Corporate Cards', 'Payroll', 'TDS Automation', 'SaaS Spend'],
    founderTypes: ['all', 'bootstrapped', 'vc_backed']
  },
  {
    id: 'mercury-us-banking',
    title: 'Mercury Bank (For US Delaware C-Corps & Global Cross-Border)',
    category: 'banking',
    provider: 'Mercury (Choice Financial Group & Evolve Bank, Members FDIC)',
    stateOrRegion: 'Global / US Entities',
    valueAmount: 'Zero Wire Fees + FDIC $5M + 5% Yield Treasury',
    shortDescription: 'Zero-fee US business checking & savings account with up to $5M FDIC insurance, high-yield treasury (~5% APY), and virtual corporate cards.',
    fullDescription: 'The gold standard banking partner for startups with a US Delaware entity (e.g. Y Combinator companies, Stripe Atlas companies, or Indian founders flipping to a US parent). Opened 100% remotely from India without needing a US SSN or physical visit, offering zero wire fees and seamless investor wires.',
    eligibility: [
      'Entity incorporated in the United States (Delaware C-Corp, LLC, or foreign qualifying company)',
      'Indian founders can apply remotely with valid Indian Passport and company EIN'
    ],
    keyPerks: [
      '100% remote opening in 24-48 hours from India with no US visa or social security number required',
      'FDIC insurance up to $5 Million through partner sweep networks',
      'Mercury Treasury: Automatically invest idle seed capital in US short-term government bonds yielding ~4.5% - 5.0% APY',
      'Zero monthly maintenance fees, zero domestic wire fees, zero international incoming wire fees'
    ],
    hackOrNuance: 'Always pair your US Delaware entity with a cost-plus transfer pricing agreement with your Indian subsidiary to avoid dual-tax residency liabilities under Indian Place of Effective Management (POEM) rules.',
    officialLink: 'https://mercury.com/',
    domainName: 'mercury.com',
    tags: ['US Banking', 'Cross-Border', 'Delaware C-Corp', 'Treasury', 'Zero Wire Fees'],
    founderTypes: ['vc_backed', 'deeptech_ai']
  },
  {
    id: 'axis-startup-banking',
    title: 'Axis Bank Startup Banking & Inward Remittance Suite',
    category: 'banking',
    provider: 'Axis Bank',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Automated e-FIRC + Zero Balance + FX Waivers',
    shortDescription: 'Dedicated foreign inward remittance desk, automated e-FIRC issuance within 24 hours, zero balance account, and venture debt partnerships.',
    fullDescription: 'Axis Bank provides customized treasury and cross-border trade solutions for tech startups receiving export revenue from international clients or raising foreign institutional rounds. Their automated inward remittance platform ensures swift regulatory reporting to RBI and automatic e-FIRC generation.',
    eligibility: [
      'DPIIT recognized startups or venture-funded companies',
      'Registered Private Limited Company or LLP in India'
    ],
    keyPerks: [
      'Automated e-FIRC generation sent straight to email within 24 hours of funds credit',
      'Customized Forex exchange margins for export realization and overseas vendor outward payments',
      'Escrow account management services for M&A and funding rounds'
    ],
    hackOrNuance: 'Always ensure your export invoices include your GST LUT number and SAC code 998314 so Axis Bank automatically tags RBI Purpose Code P0802 without manual visits.',
    officialLink: 'https://www.axisbank.com/business-banking/start-up-banking',
    domainName: 'axisbank.com',
    tags: ['Axis Bank', 'Inward Remittance', 'e-FIRC', 'Export Revenue', 'Zero Balance'],
    founderTypes: ['all', 'bootstrapped', 'vc_backed']
  }
];
