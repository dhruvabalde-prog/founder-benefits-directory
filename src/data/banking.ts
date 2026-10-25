import { BenefitItem } from '../types';

export const BANKING_BENEFITS: BenefitItem[] = [
  {
    id: 'hdfc-smartup',
    title: 'HDFC SmartUp Founder Banking Suite',
    category: 'banking',
    subCategory: 'zero_balance_current',
    provider: 'HDFC Bank',
    shortDescription: 'Zero balance current account for 12 months, discounted foreign inward/outward remittance margins, corporate cards with high limits, and annual SmartUp grants.',
    fullDescription: 'HDFC Bank\'s specialized program tailored for DPIIT startups and venture-backed companies. Instead of demanding high Average Quarterly Balance (AQB) like standard business accounts (typically ₹50k - ₹1L), SmartUp waives non-maintenance fees for early startups and bundles dedicated Forex relationship managers.',
    valueAmount: 'Zero Balance for 1 Year + Preferential FX Margins',
    currencyOrType: 'Service',
    eligibility: [
      'DPIIT Recognized startup, or registered entity incorporated <5 years',
      'Entity can be Private Limited Company, LLP, or registered partnership',
      'Must maintain active operational transactions'
    ],
    documentsRequired: [
      'Certificate of Incorporation / Registration & MOA/AOA',
      'Company PAN and GST Certificate (if applicable)',
      'DPIIT Recognition Certificate (for SmartUp Alpha/Beta tiers)',
      'KYC documents (PAN, Aadhaar/Passport) of all Directors / Authorized Signatories',
      'Board Resolution authorizing opening of account and operating powers'
    ],
    keyPerks: [
      'Zero balance current account with waived Non-Maintenance Charges (NMC) for the first 12 months',
      'Preferential Forex Card & Trade Services: Significant discount on foreign inward remittance processing and outward vendor payments (e.g. AWS/SaaS bills)',
      'Corporate Credit Cards with unsecured limits based on bank balances or FD collateral',
      'HDFC SmartUp Grants: Annual CSR grant funding competition up to ₹50 Lakhs for social impact startups',
      'Exclusive partner discounts on AWS, Zoho, Vakilsearch, and Cleartax'
    ],
    hiddenNuances: [
      'The zero-balance waiver is strictly for the first 12 months (or up to 24 months depending on relationship manager discretion). After that, standard AQB (₹25,000 to ₹1,00,000) applies unless your monthly transactions or term deposits qualify for waiver.',
      'For inward remittances (FDI or export revenue), ensure you obtain the electronic Foreign Inward Remittance Statement (e-FIRS / FIRC). You must instruct the branch to auto-generate purpose codes (P0802 for software export, etc.).'
    ],
    officialLink: 'https://www.hdfcbank.com/sme/startup-banking',
    applicationStepByStep: [
      '1. Apply online via the HDFC SmartUp portal or visit an authorized SmartUp branch.',
      '2. Dedicated Startup Relationship Manager (RM) contacts the founders.',
      '3. In-person biometric verification of directors and physical verification of registered address.',
      '4. Account active with corporate netbanking and forex portal within 48-72 hours.'
    ],
    tags: ['Banking', 'Zero Balance', 'HDFC', 'Forex', 'Corporate Cards', 'SmartUp Grant'],
    statesApplicable: ['All India'],
    isFeatured: true
  },
  {
    id: 'icici-istartup-2',
    title: 'ICICI iStartup 2.0 & API Banking Platform',
    category: 'banking',
    subCategory: 'payroll_api_banking',
    provider: 'ICICI Bank',
    shortDescription: 'Free current account with custom account number, direct API banking integration for automated payouts, and pre-negotiated inward remittance pricing.',
    fullDescription: 'iStartup 2.0 integrates traditional business banking with digital operations. It provides automated ERP and payroll reconciliation, deep webhooks for software developers, discounted outward remittances for cloud infra, and corporate credit cards with dynamic sub-limits.',
    valueAmount: 'Zero Balance + Instant API Banking Integration',
    currencyOrType: 'Service',
    eligibility: [
      'Startup incorporated in India as Pvt Ltd, LLP, or OPC',
      'Startups with DPIIT certificate qualify for Platinum tier privileges instantly'
    ],
    documentsRequired: [
      'Certificate of Incorporation & PAN of entity',
      'Director identification & KYC proof',
      'DPIIT Recognition Certificate (recommended for tier elevation)',
      'Board Resolution for banking operations'
    ],
    keyPerks: [
      'Customized Account Number (e.g. your company name or founding year as account digits)',
      'Zero Minimum Balance commitment for initial 12 to 24 months based on turnover',
      'Developer API Suite: Direct REST APIs for automated supplier payouts, customer refunds, and virtual escrow accounts',
      'Trade Online Portal: 100% paperless outward remittance for software imports and overseas subscriptions',
      'Free salary account relationship for founders and first 50 employees with zero min balance'
    ],
    hiddenNuances: [
      'If you conduct automated bulk payouts via ICICI APIs, you will need a commercial IP whitelist and digital signature certificate (DSC) setup, which can take 1-2 weeks of coordination with their technical integration team.'
    ],
    officialLink: 'https://www.icicibank.com/business-banking/startups',
    applicationStepByStep: [
      '1. Request account opening on iStartup 2.0 webpage.',
      '2. Video KYC or doorstep document pickup by startup executive.',
      '3. Receive welcome kit and instant API developer sandbox credentials.',
      '4. Activate direct outward remittance channel for SaaS spend.'
    ],
    tags: ['Banking', 'ICICI', 'API Banking', 'Automated Payouts', 'Zero Balance', 'Forex'],
    statesApplicable: ['All India'],
    isFeatured: true
  },
  {
    id: 'razorpayx-banking-suite',
    title: 'RazorpayX Business Banking & Founder Corporate Cards',
    category: 'banking',
    subCategory: 'founder_credit_cards',
    provider: 'RazorpayX (in partnership with Scheduled Commercial Banks)',
    shortDescription: 'Automated 1-click payroll, TDS/PF tax auto-filing, collateral-free founder corporate credit cards with 45-day interest free cycles, and vendor invoices.',
    fullDescription: 'RazorpayX operates on top of scheduled bank accounts to automate the entire financial operations stack for founders. It handles auto-deduction and remittance of TDS, PF, ESIC, and PT, while providing high-limit corporate cards specifically designed to pay international SaaS bills without currency markup shocks.',
    valueAmount: 'Free Payroll for small teams + 45-day Interest-Free Cards',
    currencyOrType: 'Service',
    eligibility: [
      'Registered Indian Private Limited Company, LLP, or Partnership',
      'Must have active business operations and bank transaction flow'
    ],
    documentsRequired: [
      'Existing Current Account statement (or open direct RBL/Federal bank account via RazorpayX)',
      'Certificate of Incorporation and PAN',
      'KYC documents of Directors'
    ],
    keyPerks: [
      'RazorpayX Payroll: Automated 100% compliant salary disbursement with auto-payment of TDS challans, PF, and PT',
      'Founder Corporate Credit Cards: High limit cards with zero forex markups or subsidized conversion for AWS, Google Cloud, Meta Ads, and GitHub spend',
      'Vendor Payments Automation: OCR scan invoices and auto-schedule NEFT/IMPS payments with multi-level maker-checker approvals',
      'Real-time Slack / WhatsApp notification alerts on all cash outflows'
    ],
    hiddenNuances: [
      'Corporate credit card approvals are based on monthly transaction volume flowing through Razorpay payment gateway or minimum balance maintained in the linked current account.',
      'RBI card tokenization rules apply for all recurring international subscriptions; virtual cards issued via RazorpayX can be spawned per-vendor to avoid overcharging.'
    ],
    officialLink: 'https://razorpay.com/x/',
    applicationStepByStep: [
      '1. Sign up on RazorpayX using business email.',
      '2. Link your current bank account or open a digital Current Account.',
      '3. Complete online merchant KYC and upload board resolution.',
      '4. Generate virtual corporate cards immediately for marketing and cloud infra bills.'
    ],
    tags: ['NeoBanking', 'Corporate Cards', 'Payroll', 'TDS Automation', 'SaaS Spend', 'RazorpayX'],
    statesApplicable: ['All India'],
    isFeatured: true
  },
  {
    id: 'mercury-us-banking',
    title: 'Mercury Bank (For US Delaware C-Corps & Global Cross-Border)',
    category: 'banking',
    subCategory: 'forex_crossborder',
    provider: 'Mercury (Partnered with Choice Financial Group & Evolve Bank & Trust, Members FDIC)',
    shortDescription: 'Zero-fee US business checking & savings account with up to $5M FDIC insurance, high-yield treasury (up to ~5% APY), and virtual corporate cards.',
    fullDescription: 'The gold standard banking partner for startups with a US Delaware entity (e.g. Y Combinator companies, Stripe Atlas companies, or Indian founders flipping to a US parent). Opened 100% remotely from India without needing a US SSN or physical visit, offering zero wire fees and seamless investor wires.',
    valueAmount: 'Zero Wire Fees + FDIC $5M + 5% Yield Treasury',
    currencyOrType: 'USD',
    eligibility: [
      'Entity incorporated in the United States (Delaware C-Corp, LLC, or foreign qualifying company)',
      'Indian founders can apply remotely with valid Indian Passport and company EIN',
      'Must NOT operate in prohibited industries (crypto exchanges, gambling, adult, unauthorized remittance)'
    ],
    documentsRequired: [
      'US Certificate of Formation / Incorporation (e.g. from Delaware)',
      'Employer Identification Number (EIN) confirmation letter from the IRS (CP 575 or 147C)',
      'Passport of all founders with 25%+ equity ownership',
      'Proof of US address (registered agent address from Stripe Atlas, Clerky, or Firstbase)'
    ],
    keyPerks: [
      '100% remote opening in 24-48 hours from India with no US visa or social security number required',
      'FDIC insurance up to $5 Million through partner sweep networks',
      'Mercury Treasury: Automatically invest idle seed capital in US short-term government bonds and money market funds yielding ~4.5% - 5.0% APY',
      'Zero monthly maintenance fees, zero domestic wire fees, and zero international incoming wire fees',
      'Unlimited virtual and physical debit cards with custom spending limits per team member',
      'Direct integration with Quickbooks, Xero, Gusto, and Brex'
    ],
    hiddenNuances: [
      'You MUST have an official IRS EIN letter. A pending EIN application confirmation is not accepted.',
      'Make sure your Indian entity and US parent comply with RBI\'s Overseas Direct Investment (ODI) / Liberalised Remittance Scheme (LRS) regulations to avoid cross-border compliance penalties in India.'
    ],
    officialLink: 'https://mercury.com/',
    applicationStepByStep: [
      '1. Form your US company (via Stripe Atlas, Clerky, or Firstbase).',
      '2. Receive IRS EIN number.',
      '3. Go to mercury.com and start online application.',
      '4. Upload Certificate of Incorporation, EIN confirmation letter, and founder passports.',
      '5. Account typically approved and operational in 1 to 2 business days.'
    ],
    tags: ['US Banking', 'Cross-Border', 'Delaware C-Corp', 'Treasury', 'Zero Wire Fees', 'Mercury'],
    statesApplicable: ['Global / US Registered'],
    isFeatured: true
  },
  {
    id: 'axis-startup-banking',
    title: 'Axis Bank Startup Banking & Inward Remittance Suite',
    category: 'banking',
    subCategory: 'forex_crossborder',
    provider: 'Axis Bank',
    shortDescription: 'Dedicated foreign inward remittance desk, automated e-FIRC issuance within 24 hours, zero balance account, and venture debt partnerships.',
    fullDescription: 'Axis Bank provides customized treasury and cross-border trade solutions for tech startups receiving export revenue from international clients or raising foreign institutional rounds. Their automated inward remittance platform ensures swift regulatory reporting to RBI and automatic e-FIRC generation.',
    valueAmount: 'Automated e-FIRC + Zero Balance + FX Waivers',
    currencyOrType: 'Service',
    eligibility: [
      'DPIIT recognized startups or venture-funded companies',
      'Registered Private Limited Company or LLP in India'
    ],
    documentsRequired: [
      'Certificate of Incorporation & MOA/AOA',
      'PAN Card and GST Registration',
      'DPIIT recognition letter',
      'KYC documents of all authorized directors'
    ],
    keyPerks: [
      'Automated e-FIRC generation sent straight to email within 24 hours of funds credit',
      'Customized Forex exchange margins for export realization and overseas vendor outward payments',
      'Escrow account management services for M&A and funding rounds',
      'Access to Axis Bank\'s Thought Factory innovation lab and enterprise procurement trials'
    ],
    hiddenNuances: [
      'Always confirm that your export invoices have the correct Harmonized System of Nomenclature (HSN) or Service Accounting Code (SAC 998314 for IT software) so that the bank\'s automated FIRC engine stamps the proper RBI Purpose Code.'
    ],
    officialLink: 'https://www.axisbank.com/business-banking/start-up-banking',
    applicationStepByStep: [
      '1. Fill enquiry form on Axis Bank Startup Banking portal.',
      '2. Regional Startup Relationship Head reviews business profile.',
      '3. Doorstep documentation and biometric collection.',
      '4. Portal activation and onboarding call.'
    ],
    tags: ['Axis Bank', 'Inward Remittance', 'e-FIRC', 'Export Revenue', 'Zero Balance'],
    statesApplicable: ['All India']
  }
];
