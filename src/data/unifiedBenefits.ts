export interface QuickBenefit {
  id: string;
  name: string;
  provider: string;
  state: string;
  category: 'cash' | 'grant' | 'cloud' | 'banking' | 'hack';
  value: string;
  summary: string;
  theCatch: string;
  steps: string[];
  url: string;
  domain: string;
  founderTypes: ('all' | 'bootstrapped' | 'women' | 'deeptech' | 'biotech' | 'funded')[];
}

export const UNIFIED_BENEFITS: QuickBenefit[] = [
  // --- 1. SURVIVAL STIPENDS (MONTHLY CASH) ---
  {
    id: 'rajasthan-istart',
    name: 'iStart Sustenance Allowance',
    provider: 'Govt of Rajasthan',
    state: 'Rajasthan',
    category: 'cash',
    value: '₹20,000–₹25,000 / mo',
    summary: 'Direct monthly living stipend for 12 months deposited into founder accounts to cover living runway.',
    theCatch: 'Requires registered entity in Rajasthan (can operate remotely from Gurugram/BLR via registered office).',
    steps: [
      'Incorporate Pvt Ltd/LLP with Rajasthan registered address.',
      'Apply on istart.rajasthan.gov.in & present 7-minute deck online.',
      'Monthly cash is credited directly to founder bank accounts.'
    ],
    url: 'https://istart.rajasthan.gov.in/',
    domain: 'istart.rajasthan.gov.in',
    founderTypes: ['all', 'bootstrapped', 'women']
  },
  {
    id: 'gujarat-sustenance',
    name: 'Gujarat Founder Sustenance',
    provider: 'i-Hub & Industries Commissionerate',
    state: 'Gujarat',
    category: 'cash',
    value: '₹20,000–₹25,000 / mo',
    summary: 'Direct living stipend for 12 months for founders incubated via Gujarat nodal institutes (i-Hub, GTU).',
    theCatch: 'Endorsement from an approved Gujarat Nodal Institute is mandatory prior to state disbursement.',
    steps: [
      'Get affiliated with a recognized Gujarat Nodal Institute (i-Hub Ahmedabad).',
      'Submit nodal recommendation to State Implementation Committee.',
      'Funds credited monthly for 12 months.'
    ],
    url: 'https://ihubgujarat.in/',
    domain: 'ihubgujarat.in',
    founderTypes: ['all', 'bootstrapped', 'women']
  },
  {
    id: 'up-sustenance',
    name: 'StartInUP Living Allowance',
    provider: 'UP IT & Electronics Dept',
    state: 'Uttar Pradesh',
    category: 'cash',
    value: '₹17,500 / mo',
    summary: '12-month living stipend for tech startups registered in Noida, Greater Noida, Lucknow, or across UP.',
    theCatch: 'Apply early via an empanelled UP incubator as committee evaluation cycles can take 6–8 weeks.',
    steps: [
      'Register entity with UP address on startinup.up.gov.in.',
      'Submit deck to empanelled university incubator.',
      'Receive monthly allowance upon milestone review.'
    ],
    url: 'https://startinup.up.gov.in/',
    domain: 'startinup.up.gov.in',
    founderTypes: ['all', 'bootstrapped']
  },
  {
    id: 'odisha-sustenance',
    name: 'Startup Odisha Monthly Allowance',
    provider: 'MSME Dept, Odisha',
    state: 'Odisha',
    category: 'cash',
    value: '₹20,000–₹22,000 / mo',
    summary: 'Monthly founder allowance for 1 year with higher approval odds due to smaller applicant pools.',
    theCatch: 'Startup must be recognized by Startup Odisha with operational entity filings in the state.',
    steps: [
      'Register on startupodisha.gov.in with Odisha CIN/LLPIN.',
      'Submit monthly allowance claim and clear pitch evaluation.'
    ],
    url: 'https://startupodisha.gov.in/',
    domain: 'startupodisha.gov.in',
    founderTypes: ['all', 'bootstrapped', 'women']
  },

  // --- 2. NON-DILUTIVE GRANTS & CHECKS ---
  {
    id: 'sisfs-central',
    name: 'Startup India Seed Fund (SISFS)',
    provider: 'DPIIT, Central Govt',
    state: 'All States / Central',
    category: 'grant',
    value: '₹20L Grant + ₹50L Debt',
    summary: 'Central seed funding disbursed via 150+ incubators for prototype development and market entry.',
    theCatch: 'Company must be < 2 years old down to the exact calendar day. Pick incubators with undisbursed funds.',
    steps: [
      'Obtain free DPIIT recognition certificate on startupindia.gov.in.',
      'Login to seedfund.startupindia.gov.in and select up to 3 priority incubators.',
      'Present pitch deck to Incubator Seed Management Committee.'
    ],
    url: 'https://seedfund.startupindia.gov.in/',
    domain: 'seedfund.startupindia.gov.in',
    founderTypes: ['all', 'bootstrapped', 'women']
  },
  {
    id: 'karnataka-elevate',
    name: 'ELEVATE 100 / Idea2PoC',
    provider: 'KITS, Govt of Karnataka',
    state: 'Karnataka',
    category: 'grant',
    value: 'Up to ₹50 Lakhs Grant',
    summary: 'Flagship non-dilutive grant-in-aid deposited directly into project escrow for Karnataka tech startups.',
    theCatch: 'At least 50% of permanent workforce must be located in Karnataka during physical inspection.',
    steps: [
      'Apply during annual call on missionstartup.karnataka.gov.in.',
      'Clear online screening and jury pitch.',
      'Sign tripartite grant agreement.'
    ],
    url: 'https://missionstartup.karnataka.gov.in/elevate.html',
    domain: 'missionstartup.karnataka.gov.in',
    founderTypes: ['all', 'deeptech', 'biotech']
  },
  {
    id: 'bihar-zero-interest',
    name: 'Bihar 10-Year 0% Interest Seed',
    provider: 'Govt of Bihar',
    state: 'Bihar',
    category: 'grant',
    value: '₹10 Lakhs (10-Yr 0% Loan)',
    summary: 'Interest-free seed capital with zero collateral and a 10-year repayment window. Functions like equity.',
    theCatch: 'Entity must be registered in Bihar; comes with free physical incubation at IIT Patna or CIMP.',
    steps: [
      'Incorporate entity with registered address in Bihar.',
      'Submit application at startup.bihar.gov.in.'
    ],
    url: 'https://startup.bihar.gov.in/',
    domain: 'startup.bihar.gov.in',
    founderTypes: ['all', 'bootstrapped', 'women']
  },
  {
    id: 'tamilnadu-tanseed',
    name: 'StartupTN TANSEED Seed Grant',
    provider: 'StartupTN Mission',
    state: 'Tamil Nadu',
    category: 'grant',
    value: 'Up to ₹15 Lakhs Grant',
    summary: 'Non-dilutive seed grant released in 3 milestone tranches + StartupTN Smart Card enterprise perks.',
    theCatch: 'Requires working prototype (TRL 4+) and CA-certified utilization certificates between tranches.',
    steps: [
      'Register on startuptn.in and apply during cohort calls.',
      'Present 3-minute pitch before Sectoral Screening Committees.'
    ],
    url: 'https://startuptn.in/tanseed',
    domain: 'startuptn.in',
    founderTypes: ['all', 'women', 'bootstrapped']
  },
  {
    id: 'birac-big-grant',
    name: 'BIRAC Biotechnology Ignition Grant (BIG)',
    provider: 'BIRAC, Dept of Biotechnology',
    state: 'All States / Central',
    category: 'grant',
    value: 'Up to ₹50 Lakhs Grant',
    summary: '100% non-dilutive capital for 18 months of clinical or wet-lab validation in MedTech and BioTech.',
    theCatch: 'Calls open strictly twice a year (Jan 1–Feb 15 and July 1–Aug 15). Apply via C-CAMP or Venture Center.',
    steps: [
      'Apply during call window at birac.nic.in with partner bio-incubator.',
      'Defend hypothesis before Technical Expert Committee (TEC).'
    ],
    url: 'https://birac.nic.in/big.php',
    domain: 'birac.nic.in',
    founderTypes: ['biotech', 'deeptech']
  },
  {
    id: 'haryana-seed-rent',
    name: 'Haryana Seed Grant & Rent Subsidy',
    provider: 'Dept of IT, Haryana',
    state: 'Haryana',
    category: 'grant',
    value: '₹10L Seed + 50% Rent Subsidy',
    summary: 'Up to ₹10 Lakhs seed grant + 50% reimbursement of commercial office rent up to ₹50k/mo for 3 years.',
    theCatch: 'Commercial lease deed and registered entity must be compliant within Gurugram, Faridabad, or Haryana.',
    steps: [
      'Register on startupharyana.gov.in.',
      'Submit lease rent receipts and project proof for reimbursement.'
    ],
    url: 'https://startupharyana.gov.in/',
    domain: 'startupharyana.gov.in',
    founderTypes: ['all', 'bootstrapped']
  },

  // --- 3. FREE CLOUD, LLM & COMPUTE ---
  {
    id: 'microsoft-founders-hub',
    name: 'Microsoft for Startups Founders Hub',
    provider: 'Microsoft & OpenAI',
    state: 'All States / Central',
    category: 'cloud',
    value: '$150k Azure + $20k OpenAI',
    summary: 'Zero funding required. Level 1 gives $1k Azure + $2.5k OpenAI immediately with just a LinkedIn profile.',
    theCatch: 'Advancing to Level 2-4 requires active Azure resource consumption. OpenAI tokens deploy as private Azure endpoints.',
    steps: [
      'Sign in at foundershub.startups.microsoft.com with LinkedIn.',
      'Submit 5-minute product overview; approval in 24–48 hours.',
      'Claim 20 free GitHub Enterprise seats ($5k value) at Level 2.'
    ],
    url: 'https://foundershub.startups.microsoft.com/',
    domain: 'foundershub.startups.microsoft.com',
    founderTypes: ['all', 'bootstrapped', 'deeptech']
  },
  {
    id: 'google-cloud-startups',
    name: 'Google Cloud for Startups & Vertex AI',
    provider: 'Google Cloud',
    state: 'All States / Central',
    category: 'cloud',
    value: 'Up to $200k ($350k for AI)',
    summary: '$2,000 for bootstrapped teams; up to $350k for AI-native startups building on Vertex AI and Gemini.',
    theCatch: 'Year 2 Scale credits require 20% co-spend matching. Vertex AI API calls are 100% credit-eligible in Year 1.',
    steps: [
      'Set up GCP billing account with custom domain email.',
      'Apply at cloud.google.com/startup with accelerator reference.'
    ],
    url: 'https://cloud.google.com/startup',
    domain: 'cloud.google.com',
    founderTypes: ['all', 'bootstrapped', 'deeptech', 'funded']
  },
  {
    id: 'aws-activate',
    name: 'AWS Activate (Founders vs Portfolio)',
    provider: 'Amazon Web Services',
    state: 'All States / Central',
    category: 'cloud',
    value: '$1,000 to $100,000 Credits',
    summary: '$1,000 for bootstrapped founders; up to $100,000 for incubator / VC backed portfolio companies.',
    theCatch: 'Strict lifetime cap of $100,000 per company. Applying with a gmail.com address leads to automated rejection.',
    steps: [
      'Apply at aws.amazon.com/activate using company domain email.',
      'Input incubator Org ID if claiming Portfolio tier.'
    ],
    url: 'https://aws.amazon.com/activate/',
    domain: 'aws.amazon.com',
    founderTypes: ['all', 'bootstrapped', 'funded']
  },
  {
    id: 'notion-startups',
    name: 'Notion for Startups + Unlimited AI',
    provider: 'Notion Labs',
    state: 'All States / Central',
    category: 'cloud',
    value: '6 Mos Free ($6,000+ Value)',
    summary: 'Notion Plus with unlimited team members and Unlimited Notion AI add-on at 100% zero cost.',
    theCatch: 'Applies only to new workspaces; cannot discount existing active enterprise paid workspaces.',
    steps: [
      'Create free workspace with company email.',
      'Apply at notion.so/startups with partner code.'
    ],
    url: 'https://www.notion.so/startups',
    domain: 'notion.so',
    founderTypes: ['all', 'bootstrapped']
  },

  // --- 4. BANKING, FOREX & TAX ---
  {
    id: 'hdfc-smartup',
    name: 'HDFC SmartUp Founder Account',
    provider: 'HDFC Bank',
    state: 'All States / Central',
    category: 'banking',
    value: '12-Mo Zero Balance + FX Desks',
    summary: 'Waived Average Quarterly Balance (AQB) charges for 12 months + discounted forex inward remittance margins.',
    theCatch: 'AQB waivers end after 12 months. Request branch to lock Purpose Code P0802 for automated e-FIRS issuance.',
    steps: [
      'Apply online or visit an authorized SmartUp branch.',
      'Submit DPIIT certificate for instant tier elevation.'
    ],
    url: 'https://www.hdfcbank.com/sme/startup-banking',
    domain: 'hdfcbank.com',
    founderTypes: ['all', 'bootstrapped']
  },
  {
    id: 'razorpayx-finops',
    name: 'RazorpayX Automated Payroll & Cards',
    provider: 'RazorpayX',
    state: 'All States / Central',
    category: 'banking',
    value: 'Auto TDS/PF + Virtual Cards',
    summary: 'Automates 100% of salary tax challans (TDS, PF, PT) with 1 click. Virtual founder cards cap SaaS spend.',
    theCatch: 'Corporate card limits depend on monthly gateway transaction volumes or FD collateral.',
    steps: [
      'Sign up at razorpay.com/x and complete merchant KYC.',
      'Spawn per-vendor virtual cards with custom spend caps.'
    ],
    url: 'https://razorpay.com/x/',
    domain: 'razorpay.com',
    founderTypes: ['all', 'bootstrapped', 'funded']
  },
  {
    id: 'mercury-us',
    name: 'Mercury US Business Banking',
    provider: 'Mercury (FDIC Insured)',
    state: 'Global / US Entities',
    category: 'banking',
    value: '$5M FDIC + ~5% APY Yield',
    summary: 'Zero-fee US business checking/savings account opened 100% remotely from India with Indian passport & EIN.',
    theCatch: 'Requires official IRS EIN letter. Indian founders must adhere to RBI Overseas Direct Investment (ODI) rules.',
    steps: [
      'Form Delaware entity (Stripe Atlas / Clerky) & obtain EIN.',
      'Apply online at mercury.com with passport and EIN letter.'
    ],
    url: 'https://mercury.com/',
    domain: 'mercury.com',
    founderTypes: ['funded', 'deeptech']
  },

  // --- 5. FOUNDER HACKS & LEGAL ARBITRAGE ---
  {
    id: 'hack-ncr-rajasthan',
    name: 'Gurugram Living + Rajasthan Docs Arbitrage',
    provider: 'Founder Legal Arbitrage',
    state: 'Rajasthan',
    category: 'hack',
    value: '₹25k/Mo Cash + NCR Ecosystem',
    summary: 'Work out of Gurugram/Bengaluru while using family/hometown Rajasthan registered office to claim ₹25k/mo stipend.',
    theCatch: 'Entity MCA CIN and GST filings must stay in Rajasthan; review presentations are attended virtually.',
    steps: [
      'Register company with Rajasthan registered address.',
      'Apply on istart.rajasthan.gov.in to claim monthly cash into founder accounts.',
      'Operate product engineering out of Gurugram or Bengaluru.'
    ],
    url: 'https://istart.rajasthan.gov.in/',
    domain: 'istart.rajasthan.gov.in',
    founderTypes: ['all', 'bootstrapped']
  },
  {
    id: 'hack-patent-double-dip',
    name: 'DPIIT 80% + State MSME Patent Double-Dip',
    provider: 'IP & Legal Arbitrage',
    state: 'All States / Central',
    category: 'hack',
    value: 'Net 0% Patent Filing Cost',
    summary: 'Claim 80% statutory fee discount via DPIIT, then submit attorney bills to State Startup Cell for 100% reimbursement.',
    theCatch: 'State reimbursement must be submitted within 6 months of official filing receipt or grant issuance.',
    steps: [
      'Quote DPIIT recognition number to pay ₹1,600 statutory filing instead of ₹8,000.',
      'Submit attorney invoices to State Startup Cell (Karnataka, Haryana, Maharashtra).'
    ],
    url: 'https://www.startupindia.gov.in/',
    domain: 'startupindia.gov.in',
    founderTypes: ['all', 'deeptech', 'biotech']
  },
  {
    id: 'hack-forex-lut',
    name: 'GST LUT 0% Tax Export Shield',
    provider: 'Tax & Cross-Border Arbitrage',
    state: 'All States / Central',
    category: 'hack',
    value: '18% Tax Shield + ITC Refunds',
    summary: 'File Form GST RFD-11 (Letter of Undertaking) in 2 minutes to legally eliminate 18% GST on all overseas SaaS revenue.',
    theCatch: 'Funds must enter via convertible foreign currency within 9 months of invoice tagged with Purpose Code P0802.',
    steps: [
      'File Form GST RFD-11 on gst.gov.in under User Services.',
      'Quote LUT number on overseas client invoices or Stripe US payouts.'
    ],
    url: 'https://www.gst.gov.in/',
    domain: 'gst.gov.in',
    founderTypes: ['all', 'bootstrapped', 'funded']
  }
];
