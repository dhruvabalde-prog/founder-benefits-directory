export interface CuratedItem {
  id: string;
  slug: string;
  title: string;
  category: 'stipend' | 'grant' | 'compute' | 'banking' | 'arbitrage';
  categoryLabel: string;
  value: string;
  stateOrRegion: string;
  oneLiner: string;
  whyItMatters: string;
  eligibility: string[];
  theCatch: string;
  howToClaim: string[];
  officialUrl: string;
  domain: string;
  tags: string[];
  bestFor: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'All', icon: '⚡' },
  { id: 'stipend', label: 'Monthly Cash', icon: '💸' },
  { id: 'grant', label: 'Grants (0% Equity)', icon: '🏛️' },
  { id: 'compute', label: 'Free Cloud & AI', icon: '☁️' },
  { id: 'banking', label: 'Banking & Forex', icon: '🏦' },
  { id: 'arbitrage', label: 'State Hacks', icon: '💡' }
] as const;

export const CURATED_ITEMS: CuratedItem[] = [
  // 1. STIPENDS (MONTHLY CASH)
  {
    id: 'istart-rajasthan',
    slug: 'istart-rajasthan',
    title: 'Rajasthan iStart Sustenance Allowance',
    category: 'stipend',
    categoryLabel: 'Monthly Cash',
    value: '₹20k–₹25k / month (1 Year)',
    stateOrRegion: 'Rajasthan',
    oneLiner: 'Direct monthly living stipend deposited into founder accounts for 12 months with zero equity.',
    whyItMatters: '₹2.4L to ₹3L in cash straight to founders to cover personal burn and focus 100% on code without taking a job or selling equity early.',
    eligibility: [
      'Pvt Ltd or registered LLP incorporated < 10 years',
      'Registered office or at least one promoter with Rajasthan address/domicile',
      'Working on an innovative product, technology, or scalable business'
    ],
    theCatch: 'Requires active Rajasthan registered office address on MCA and GST. Founder cannot draw another corporate salary during the stipend tenure.',
    howToClaim: [
      'Register on istart.rajasthan.gov.in with company details.',
      'Submit your pitch deck and prototype link.',
      'Present a 7-minute deck to the evaluation committee online.',
      'Monthly direct-benefit-transfer begins upon committee sanction.'
    ],
    officialUrl: 'https://istart.rajasthan.gov.in/',
    domain: 'istart.rajasthan.gov.in',
    tags: ['Sustenance', 'Rajasthan', 'Monthly Cash', 'Zero Equity'],
    bestFor: 'Early-stage founders needing runway to build full-time'
  },
  {
    id: 'gujarat-sustenance',
    slug: 'gujarat-sustenance',
    title: 'Gujarat Startup Sustenance Allowance',
    category: 'stipend',
    categoryLabel: 'Monthly Cash',
    value: '₹20k–₹25k / month (1 Year)',
    stateOrRegion: 'Gujarat',
    oneLiner: 'Monthly living allowance deposited into founder bank accounts plus up to ₹30L prototype grant.',
    whyItMatters: 'Extends founder runway by up to ₹3 Lakhs annually while testing product-market fit.',
    eligibility: [
      'DPIIT recognized entity registered in Gujarat',
      'Affiliated or incubated at an approved Gujarat Nodal Institution (i-Hub, GTU, PDPU, NID, CIIE)'
    ],
    theCatch: 'You must be officially recommended by a Gujarat Nodal Institute before the state committee approves disbursements.',
    howToClaim: [
      'Pitch to a Gujarat Nodal Institute like i-Hub Ahmedabad or GTU Innovation Council.',
      'Receive Nodal Institute endorsement to the State Implementation Committee.',
      'Funds are credited directly to the founder account monthly.'
    ],
    officialUrl: 'https://ihubgujarat.in/',
    domain: 'ihubgujarat.in',
    tags: ['Sustenance', 'Gujarat', 'i-Hub', 'Living Allowance'],
    bestFor: 'Founders building in Gujarat or affiliated with Gujarat university hubs'
  },
  {
    id: 'up-sustenance',
    slug: 'up-sustenance',
    title: 'Uttar Pradesh StartInUP Sustenance',
    category: 'stipend',
    categoryLabel: 'Monthly Cash',
    value: '₹17,500 / month (1 Year)',
    stateOrRegion: 'Uttar Pradesh',
    oneLiner: '₹2.1 Lakhs total living allowance for founders registered in UP, including Noida and Lucknow.',
    whyItMatters: 'Enables Noida and NCR tech founders to draw personal living support while building adjacent to the Delhi/NCR venture capital ecosystem.',
    eligibility: [
      'Entity registered in Uttar Pradesh with DPIIT recognition',
      'Incubated at an approved UP incubator'
    ],
    theCatch: 'Requires close coordination with the host incubator manager for timely monthly releases.',
    howToClaim: [
      'Register on startinup.up.gov.in with UP entity address.',
      'Pitch to an empanelled UP incubator for recommendation.',
      'Receive monthly allowance post-sanction.'
    ],
    officialUrl: 'https://startinup.up.gov.in/',
    domain: 'startinup.up.gov.in',
    tags: ['Sustenance', 'Uttar Pradesh', 'Noida', 'Living Allowance'],
    bestFor: 'Noida and UP tech builders'
  },
  {
    id: 'odisha-sustenance',
    slug: 'odisha-sustenance',
    title: 'Startup Odisha Monthly Allowance',
    category: 'stipend',
    categoryLabel: 'Monthly Cash',
    value: '₹20,000–₹22,000 / month (1 Year)',
    stateOrRegion: 'Odisha',
    oneLiner: 'Direct monthly living stipend for Odisha startups with higher approval rates than metro states.',
    whyItMatters: 'Much less crowded applicant pool compared to Karnataka or Delhi, translating into faster approvals and access to O-Hub facilities.',
    eligibility: [
      'DPIIT recognized entity registered in Odisha',
      'Working on innovative tech or scalable business model'
    ],
    theCatch: 'Quarterly review presentations on product milestones are mandatory to keep tranches active.',
    howToClaim: [
      'Apply on startupodisha.gov.in under Monthly Allowance.',
      'Present product demo to the state nodal screening committee.',
      'Receive monthly allowance upon sanction.'
    ],
    officialUrl: 'https://startupodisha.gov.in/',
    domain: 'startupodisha.gov.in',
    tags: ['Sustenance', 'Odisha', 'O-Hub', 'Living Allowance'],
    bestFor: 'Odisha and East India tech founders'
  },

  // 2. NON-DILUTIVE GRANTS
  {
    id: 'sisfs-seed-fund',
    slug: 'sisfs-seed-fund',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    category: 'grant',
    categoryLabel: 'Govt Grant',
    value: 'Up to ₹20L Grant + ₹50L Debt',
    stateOrRegion: 'All States / Central',
    oneLiner: 'Up to ₹20 Lakhs 100% non-dilutive grant for proof-of-concept validation disbursed via incubators.',
    whyItMatters: 'India\'s largest early-stage seed grant vehicle. Zero equity dilution, zero personal guarantee.',
    eligibility: [
      'DPIIT recognized entity incorporated < 2 years at application date',
      'Must use technology in product, service, or distribution',
      'Has not received >₹10L monetary support from other govt schemes',
      'Promoters hold at least 51% equity'
    ],
    theCatch: 'Strict 2-year incorporation cutoff. If you are 2 years and 1 day old, the portal locks you out. Apply early.',
    howToClaim: [
      'Ensure DPIIT certificate is active.',
      'Login to seedfund.startupindia.gov.in and select up to 3 incubators.',
      'Pro tip: Select Tier-2/Tier-3 incubators with unspent funds on the dashboard for higher approval odds.',
      'Sign milestone agreement upon committee pitch.'
    ],
    officialUrl: 'https://seedfund.startupindia.gov.in/',
    domain: 'seedfund.startupindia.gov.in',
    tags: ['Grant', 'Central', 'SISFS', 'Zero Equity', 'Prototype'],
    bestFor: 'Early-stage tech startups with prototype ready for validation'
  },
  {
    id: 'karnataka-elevate',
    slug: 'karnataka-elevate',
    title: 'Karnataka ELEVATE 100 / Idea2PoC',
    category: 'grant',
    categoryLabel: 'Govt Grant',
    value: 'Up to ₹50 Lakhs Non-Dilutive Grant',
    stateOrRegion: 'Karnataka',
    oneLiner: 'Up to ₹50 Lakhs non-dilutive grant-in-aid deposited directly to project escrow for Karnataka startups.',
    whyItMatters: 'Replaces an entire angel/pre-seed round without giving up 15-20% equity to investors.',
    eligibility: [
      'Registered with Karnataka Startup Cell with operational base in Karnataka',
      'At least 50% of permanent workforce must be located in Karnataka'
    ],
    theCatch: 'Workforce compliance is strictly audited. Remote team members outside Karnataka must be engaged on contract rather than on-roll payroll.',
    howToClaim: [
      'Apply during the annual ELEVATE call on missionstartup.karnataka.gov.in.',
      'Pass Stage 1 pitch screening and Stage 2 in-person jury round.',
      'Submit milestone budget and sign tripartite agreement.'
    ],
    officialUrl: 'https://missionstartup.karnataka.gov.in/elevate.html',
    domain: 'missionstartup.karnataka.gov.in',
    tags: ['Grant', 'Karnataka', 'Bengaluru', 'ELEVATE', '₹50L'],
    bestFor: 'Karnataka tech, biotech, agritech, and deeptech startups'
  },
  {
    id: 'birac-big',
    slug: 'birac-big',
    title: 'BIRAC Biotechnology Ignition Grant (BIG)',
    category: 'grant',
    categoryLabel: 'Govt Grant',
    value: 'Up to ₹50 Lakhs (100% Non-Dilutive)',
    stateOrRegion: 'All States / Central',
    oneLiner: 'Full funding for 18 months of clinical or wet-lab validation for health, diagnostics, and biotech.',
    whyItMatters: 'Zero equity, zero repayment. Includes wet-lab access, cleanrooms, and regulatory guidance.',
    eligibility: [
      'Biotech/MedTech innovators or DPIIT startups < 5 years old',
      'Promoter holds at least 51% ownership'
    ],
    theCatch: 'Calls open strictly twice a year (Jan 1 - Feb 15 and July 1 - Aug 15). Strict milestone reviews.',
    howToClaim: [
      'Partner with an approved bio-incubator (C-CAMP Bengaluru, Venture Center Pune, or IKP).',
      'Submit detailed technical scientific proposal on birac.nic.in.',
      'Present before the Technical Expert Committee (TEC).'
    ],
    officialUrl: 'https://birac.nic.in/big.php',
    domain: 'birac.nic.in',
    tags: ['Grant', 'Biotech', 'MedTech', 'BIRAC', 'Non-dilutive'],
    bestFor: 'Healthcare, diagnostics, medical devices, and bio innovators'
  },
  {
    id: 'bihar-zero-interest',
    slug: 'bihar-zero-interest',
    title: 'Bihar 10-Year 0% Interest Seed Capital',
    category: 'grant',
    categoryLabel: 'Govt Loan',
    value: '₹10 Lakhs (0% Interest for 10 Years)',
    stateOrRegion: 'Bihar',
    oneLiner: '₹10 Lakhs seed loan with zero collateral and 0% interest, repayable only after 10 years.',
    whyItMatters: 'A 10-year interest-free loan functions like non-dilutive equity. Free office space at IIT Patna included.',
    eligibility: [
      'Pvt Ltd or registered entity with registered office in Bihar',
      'Innovative product or business model'
    ],
    theCatch: 'Requires regular annual milestone filings with Bihar Startup Cell.',
    howToClaim: [
      'Register on startup.bihar.gov.in with Bihar entity address.',
      'Pitch to state screening cell for approval.',
      'Avail incubation at IIT Patna or CIMP.'
    ],
    officialUrl: 'https://startup.bihar.gov.in/',
    domain: 'startup.bihar.gov.in',
    tags: ['Seed Capital', 'Bihar', '0% Interest', '10-Year Term'],
    bestFor: 'Startups with entities or operations in Bihar'
  },
  {
    id: 'tamilnadu-tanseed',
    slug: 'tamilnadu-tanseed',
    title: 'Tamil Nadu StartupTN TANSEED',
    category: 'grant',
    categoryLabel: 'Govt Grant',
    value: 'Up to ₹15 Lakhs Non-Dilutive Grant',
    stateOrRegion: 'Tamil Nadu',
    oneLiner: 'Seed grant in 3 tranches plus StartupTN Smart Card enterprise discounts on cloud and legal.',
    whyItMatters: 'Milestone-based non-dilutive early capital with special funding tracks for women and SC/ST ventures.',
    eligibility: [
      'StartupTN registered entity with operational presence in Tamil Nadu',
      'Minimum working prototype (TRL 4+)'
    ],
    theCatch: 'Tranches 2 and 3 require CA-certified fund utilization certificates before release.',
    howToClaim: [
      'Apply at startuptn.in during active TANSEED editions.',
      'Present 3-minute pitch before Sectoral Screening Committees in Chennai or regional hubs.'
    ],
    officialUrl: 'https://startuptn.in/tanseed',
    domain: 'startuptn.in',
    tags: ['Grant', 'Tamil Nadu', 'TANSEED', 'Chennai'],
    bestFor: 'Tamil Nadu tech and social impact founders'
  },

  // 3. FREE CLOUD & COMPUTE
  {
    id: 'microsoft-founders-hub',
    slug: 'microsoft-founders-hub',
    title: 'Microsoft for Startups Founders Hub',
    category: 'compute',
    categoryLabel: 'Cloud & AI',
    value: 'Up to $150,000 Azure + $2,500–$20k OpenAI',
    stateOrRegion: 'Global / All India',
    oneLiner: 'Zero funding needed! Open to anyone with an idea to access Azure, OpenAI, and GitHub Enterprise.',
    whyItMatters: 'No legal incorporation or VC funding required for Level 1 ($1k Azure + $2.5k OpenAI). Scales up to $150k as your usage grows, plus 20 free GitHub Enterprise seats ($5,000 value).',
    eligibility: [
      'Open to any founder globally with a valid LinkedIn account',
      'Building proprietary software (not dev agency or crypto mining)'
    ],
    theCatch: 'To level up to $25k and $150k tiers, your app must actively consume compute inside your Azure tenant.',
    howToClaim: [
      'Sign in with LinkedIn at foundershub.startups.microsoft.com.',
      'Complete 5-minute product description.',
      'Approval takes 24–48 hours; activate Azure sponsorships and OpenAI tokens directly.'
    ],
    officialUrl: 'https://foundershub.startups.microsoft.com/',
    domain: 'foundershub.startups.microsoft.com',
    tags: ['Azure', 'OpenAI', 'GPT-4o', 'GitHub Enterprise', 'No Funding Required'],
    bestFor: 'All tech and AI founders from Day 0'
  },
  {
    id: 'google-cloud-startups',
    slug: 'google-cloud-startups',
    title: 'Google Cloud for Startups & Vertex AI',
    category: 'compute',
    categoryLabel: 'Cloud & AI',
    value: 'Up to $200,000 ($350,000 for AI Startups)',
    stateOrRegion: 'Global / All India',
    oneLiner: 'Full coverage for Gemini API tokens, Vertex AI models, BigQuery, and Google Kubernetes Engine.',
    whyItMatters: 'Dedicated AI track provides up to $350k for generative AI teams building with Gemini models and Google Cloud TPUs.',
    eligibility: [
      'Start Tier: Bootstrapped, company domain email, < 5 years old',
      'Scale Tier: Seed to Series A ($100k-$10M raised) backed by approved VC/accelerator'
    ],
    theCatch: 'Year 2 Scale credits follow a 20% co-spend model. Year 1 covers 100% of usage up to $100k.',
    howToClaim: [
      'Set up GCP billing with company domain email.',
      'Apply at cloud.google.com/startup and pick your tier.',
      'Credits appear in your GCP Billing Console upon review.'
    ],
    officialUrl: 'https://cloud.google.com/startup',
    domain: 'cloud.google.com',
    tags: ['GCP', 'Vertex AI', 'Gemini API', 'BigQuery'],
    bestFor: 'AI-first startups and high-scale data apps'
  },
  {
    id: 'aws-activate',
    slug: 'aws-activate',
    title: 'AWS Activate (Founders vs Portfolio)',
    category: 'compute',
    categoryLabel: 'Cloud & AI',
    value: '$1,000 to $100,000 USD Cloud Credits',
    stateOrRegion: 'Global / All India',
    oneLiner: '$1k for bootstrapped teams; up to $100k credits + $10k business support for accelerator/VC funded startups.',
    whyItMatters: 'Covers EC2, RDS, S3, and Amazon Bedrock foundation models (Claude 3.5 Sonnet, Llama 3).',
    eligibility: [
      'Founders Tier: Bootstrapped, company domain email, < 10 years old',
      'Portfolio Tier: Affiliated with an approved incubator/VC with Org ID'
    ],
    theCatch: 'Strict lifetime maximum cap of $100k per startup. Applications from @gmail.com addresses are frequently rejected.',
    howToClaim: [
      'Apply at aws.amazon.com/activate with your 12-digit AWS Account ID.',
      'Use company domain email and include website link.',
      'Credits appear under Billing > Credits in 3–5 business days.'
    ],
    officialUrl: 'https://aws.amazon.com/activate/',
    domain: 'aws.amazon.com',
    tags: ['AWS', 'Bedrock', 'Claude 3.5', 'EC2', 'Cloud Credits'],
    bestFor: 'SaaS, mobile apps, and cloud native services'
  },
  {
    id: 'notion-for-startups',
    slug: 'notion-for-startups',
    title: 'Notion for Startups + Unlimited AI',
    category: 'compute',
    categoryLabel: 'Productivity',
    value: 'Up to 6 Months Free ($6,000+ Value)',
    stateOrRegion: 'Global / All India',
    oneLiner: 'Six months of Notion Plus with unlimited team members and Unlimited Notion AI add-on at zero cost.',
    whyItMatters: 'Team wikis, sprint backlogs, product requirement docs, and meeting summaries all in one workspace with AI built in.',
    eligibility: [
      'Startups with fewer than 100 employees',
      'New Notion Plus workspaces'
    ],
    theCatch: 'Applies only as credit to your workspace; cannot be cashed out or applied to an existing paid enterprise invoice.',
    howToClaim: [
      'Create free Notion workspace with work email.',
      'Apply at notion.so/startups with incubator/VC code (or select bootstrapped track for 3 months).',
      'Upgrade workspace to Plus with AI in Settings.'
    ],
    officialUrl: 'https://www.notion.so/startups',
    domain: 'notion.so',
    tags: ['Notion', 'Notion AI', 'Workspace', 'Wiki'],
    bestFor: 'All startup teams organizing documentation and sprints'
  },

  // 4. BANKING & FOREX
  {
    id: 'hdfc-smartup',
    slug: 'hdfc-smartup',
    title: 'HDFC SmartUp Founder Banking Suite',
    category: 'banking',
    categoryLabel: 'Banking',
    value: '12-Month Zero Balance + Preferential FX',
    stateOrRegion: 'All States / Central',
    oneLiner: 'Zero balance current account for 12 months with discounted forex remittance margins and SmartUp CSR grants.',
    whyItMatters: 'Saves ₹50k-₹1L in locked average quarterly balances and provides dedicated trade desks for incoming dollar payments.',
    eligibility: [
      'DPIIT recognized startup or entity incorporated < 5 years'
    ],
    theCatch: 'Zero balance waiver is for the first 12 months. Request your relationship manager to lock Purpose Code P0802 for software exports.',
    howToClaim: [
      'Apply online at hdfcbank.com/sme/startup-banking.',
      'Submit CIN/LLPIN, PAN, and DPIIT recognition certificate for tier elevation.'
    ],
    officialUrl: 'https://www.hdfcbank.com/sme/startup-banking',
    domain: 'hdfcbank.com',
    tags: ['HDFC', 'Zero Balance', 'Forex', 'Current Account'],
    bestFor: 'Indian startups needing a reliable primary current account'
  },
  {
    id: 'razorpayx-stack',
    slug: 'razorpayx-stack',
    title: 'RazorpayX Business Banking & Founder Cards',
    category: 'banking',
    categoryLabel: 'Banking',
    value: 'Compliant Payroll + High-Limit Corporate Cards',
    stateOrRegion: 'All States / Central',
    oneLiner: 'Automated 1-click salary disbursement with TDS/PF auto-tax payment and virtual cards for SaaS spend.',
    whyItMatters: 'Zero compliance penalties: TDS, PF, PT, and ESIC challans are auto-filed with the government. Virtual cards protect from rogue SaaS rebills.',
    eligibility: [
      'Registered Private Limited Company or LLP in India'
    ],
    theCatch: 'Credit card limits depend on transaction volume flowing through Razorpay or fixed deposit collateral.',
    howToClaim: [
      'Sign up at razorpay.com/x with business email.',
      'Complete online merchant KYC and generate virtual cards immediately.'
    ],
    officialUrl: 'https://razorpay.com/x/',
    domain: 'razorpay.com',
    tags: ['RazorpayX', 'Payroll', 'Corporate Cards', 'TDS Automation'],
    bestFor: 'Startups paying team salaries and international cloud bills'
  },
  {
    id: 'mercury-us-bank',
    slug: 'mercury-us-bank',
    title: 'Mercury Bank (US Delaware Entities)',
    category: 'banking',
    categoryLabel: 'US Banking',
    value: '$5M FDIC Insurance + ~5% APY Treasury',
    stateOrRegion: 'Global / US Entities',
    oneLiner: 'Remote US checking and savings account with zero fees and automatic yield on idle venture capital.',
    whyItMatters: 'Open a genuine US business bank account 100% remotely from India with an Indian passport and US EIN. Zero monthly wire fees.',
    eligibility: [
      'US Delaware C-Corp or LLC (Stripe Atlas, Clerky, Firstbase)'
    ],
    theCatch: 'Indian founders must comply with RBI Overseas Direct Investment (ODI) regulations to avoid cross-border compliance penalties in India.',
    howToClaim: [
      'Form US company and receive IRS EIN letter.',
      'Apply at mercury.com with founder passport and company documents (takes 1–2 days).'
    ],
    officialUrl: 'https://mercury.com/',
    domain: 'mercury.com',
    tags: ['US Banking', 'Mercury', 'Delaware', 'FDIC $5M', 'Treasury'],
    bestFor: 'Founders raising from US investors or running Stripe US accounts'
  },

  // 5. ARBITRAGE & LEGAL HACKS
  {
    id: 'ncr-rajasthan-hack',
    slug: 'ncr-rajasthan-hack',
    title: 'NCR Living + Rajasthan Domicile Arbitrage',
    category: 'arbitrage',
    categoryLabel: 'Founder Hack',
    value: '₹2.4L–₹3L/Yr Living Stipend + Up to ₹25L Seed',
    stateOrRegion: 'Rajasthan & Haryana/Delhi',
    oneLiner: 'Live & work out of Gurugram or Bengaluru for the tech ecosystem while drawing ₹25k/mo sustenance from Rajasthan iStart.',
    whyItMatters: 'You do not have to remain physically in your hometown. Incorporate with a Rajasthan registered office (family home or virtual office) and claim the living stipend.',
    eligibility: [
      'Registered office or at least one promoter with Rajasthan Aadhaar/domicile',
      'Entity registered on iStart Rajasthan'
    ],
    theCatch: 'Company statutory GST and MCA filings must stay registered in Rajasthan.',
    howToClaim: [
      'Register company with Rajasthan MCA address.',
      'Apply on istart.rajasthan.gov.in and complete online milestone presentations.',
      'Deposit monthly sustenance directly into founder accounts.'
    ],
    officialUrl: 'https://istart.rajasthan.gov.in/',
    domain: 'istart.rajasthan.gov.in',
    tags: ['Arbitrage', 'Rajasthan', 'Gurugram', 'Living Stipend'],
    bestFor: 'Founders in Gurugram, Delhi, or Bengaluru with Rajasthan roots'
  },
  {
    id: 'patent-double-dip',
    slug: 'patent-double-dip',
    title: 'DPIIT 80% + State MSME Patent Double-Dip',
    category: 'arbitrage',
    categoryLabel: 'Legal Hack',
    value: '100% Patent Cost Coverage (Save ₹1L–₹10L)',
    stateOrRegion: 'All States / Central',
    oneLiner: 'Combine DPIIT 80% statutory fee waiver with State MSME patent reimbursement to get 100% free patents.',
    whyItMatters: 'Patent lawyers charge ₹1L to ₹3L per patent. DPIIT drops the government fee to ₹1,600. Your state startup cell reimburses the legal bills. Net cost = ₹0.',
    eligibility: [
      'DPIIT recognized entity filing patents in India or international PCT'
    ],
    theCatch: 'Submit state reimbursement invoices within 6 months of filing receipt or grant issuance.',
    howToClaim: [
      'Quote DPIIT recognition number during initial IP filing for instant 80% statutory fee waiver and fast-track examination.',
      'Submit attorney invoices to your State Startup Cell (e.g. Karnataka, Maharashtra, Haryana) for 100% legal fee reimbursement.'
    ],
    officialUrl: 'https://www.startupindia.gov.in/',
    domain: 'startupindia.gov.in',
    tags: ['Patents', 'DPIIT', 'Double Dip', 'Zero Cost IP'],
    bestFor: 'DeepTech, hardware, AI, and biotech innovators filing patents'
  },
  {
    id: 'gst-lut-export',
    slug: 'gst-lut-export',
    title: 'GST Letter of Undertaking (LUT) Export Shield',
    category: 'arbitrage',
    categoryLabel: 'Tax Shield',
    value: '18% Tax Exemption + Full Input Tax Refunds',
    stateOrRegion: 'All States / Central',
    oneLiner: 'Legally eliminate 18% GST on all international SaaS / client revenue and claim refunds on laptop and server taxes.',
    whyItMatters: 'Takes 2 minutes to file on the GST portal at the start of each fiscal year. Saves you 18% tax and unlocks cash refunds on your expenses.',
    eligibility: [
      'Indian entity providing software, SaaS, or tech services to overseas clients'
    ],
    theCatch: 'Revenue must be realized in convertible foreign currency within 9 months of invoice date.',
    howToClaim: [
      'Login to gst.gov.in and file Form GST RFD-11 under User Services.',
      'Quote your LUT reference number on foreign client invoices.',
      'Instruct your bank to lock Purpose Code P0802 for incoming SWIFT wires to auto-issue e-FIRS certificates.'
    ],
    officialUrl: 'https://www.gst.gov.in/',
    domain: 'gst.gov.in',
    tags: ['GST LUT', '0% Tax', 'SaaS Export', 'Tax Shield'],
    bestFor: 'SaaS and tech founders selling to US, Europe, or global customers'
  }
];
