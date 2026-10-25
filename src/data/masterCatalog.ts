export interface MasterItem {
  id: string;
  slug: string;
  title: string;
  category: 'stipend' | 'grant' | 'banking' | 'cloud' | 'arbitrage';
  categoryLabel: string;
  provider: string;
  stateOrRegion: string;
  valueAmount: string;
  badge: string;
  approvalTimeline: string;
  executiveSummary: string;
  whyFoundersCare: string;
  eligibility: string[];
  documentsRequired: string[];
  applicationSteps: string[];
  gotchasAndNuances: string[];
  stackingTips: string[];
  officialLink: string;
  domain: string;
  tags: string[];
  founderStage: ('idea' | 'bootstrapped' | 'pre_seed' | 'seed')[];
  entityTypes?: ('sole_proprietorship' | 'partnership' | 'llp' | 'pvt_ltd' | 'delaware_c_corp')[];
}

export const MASTER_CATALOG: MasterItem[] = [
  // 1. RAJASTHAN ISTART
  {
    id: 'istart-rajasthan',
    slug: 'istart-rajasthan-sustenance-and-seed',
    title: 'iStart Rajasthan Sustenance Allowance & Seed Fund',
    category: 'stipend',
    categoryLabel: 'Monthly Living Cash',
    provider: 'Department of IT&C, Government of Rajasthan',
    stateOrRegion: 'Rajasthan',
    valueAmount: '₹20k–₹25k/Mo (1 Yr) + Up to ₹25L Grant',
    badge: 'Monthly Cash & Grant',
    approvalTimeline: '3 to 6 weeks from application pitch',
    executiveSummary: 'Direct monthly living stipend of ₹20,000 to ₹25,000 deposited straight into founder bank accounts for 12 months, plus milestone-based prototype seed grants up to ₹25 Lakhs and viability funding up to ₹50 Lakhs.',
    whyFoundersCare: 'Solves personal founder burn rate. You get ₹2.4 Lakhs to ₹3.0 Lakhs annual living money to pay your rent and groceries while building code, without diluting a single percentage of equity to angels.',
    eligibility: [
      'Private Limited Company, Registered LLP, or Registered Partnership in Rajasthan',
      'Entity must be incorporated for less than 10 years',
      'At least one promoter with Rajasthan domicile/Aadhaar or entity with registered office in Rajasthan',
      'For ₹25,000/mo slab: Woman founder (>51% equity), SC/ST founder, or rural innovation'
    ],
    documentsRequired: [
      'Certificate of Incorporation / LLP Registration',
      'Entity PAN Card & GST Registration Certificate (if applicable)',
      'Promoter Aadhaar Card & proof of Rajasthan registered address or domicile',
      'Pitch deck (10 slides covering Problem, Solution, Prototype Demo, and 12-month budget)',
      'Bank statement of entity current account or founder savings account'
    ],
    applicationSteps: [
      '1. Register your profile on the iStart portal (istart.rajasthan.gov.in).',
      '2. Complete the online Startup Profile and select your current stage (Idea, Prototype, or Viable Product).',
      '3. Submit application for Monthly Sustenance Allowance & Seed Support.',
      '4. Attend the scheduled virtual Pitch Session before the District or State Evaluation Committee.',
      '5. Receive sanction letter and execute the milestone disbursement agreement.',
      '6. Monthly allowance is credited directly to the designated bank account.'
    ],
    gotchasAndNuances: [
      'You must maintain active MCA and GST compliance in Rajasthan even if you work remotely out of Gurugram or Bengaluru.',
      'The seed grant (up to ₹25L) is released in milestone tranches against verifiable product deployments and CA utilization certificates.',
      'If both co-founders apply, only one sustenance allowance is disbursed per registered startup entity.'
    ],
    stackingTips: [
      'Stack with Microsoft Founders Hub for $150k in Azure/OpenAI compute to reduce engineering expenses.',
      'Apply simultaneously for DPIIT recognition to claim 80% patent fee waivers on your core algorithms.'
    ],
    officialLink: 'https://istart.rajasthan.gov.in/',
    domain: 'istart.rajasthan.gov.in',
    tags: ['Rajasthan', 'Sustenance', 'Monthly Cash', 'Seed Grant', 'iStart'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed']
  },

  // 2. GUJARAT SUSTENANCE
  {
    id: 'gujarat-startup-policy',
    slug: 'gujarat-startup-sustenance-and-seed',
    title: 'Gujarat Startup Sustenance Allowance & Seed Support',
    category: 'stipend',
    categoryLabel: 'Monthly Living Cash',
    provider: 'Industries Commissionerate & i-Hub, Govt of Gujarat',
    stateOrRegion: 'Gujarat',
    valueAmount: '₹20k–₹25k/Mo (1 Yr) + Up to ₹30L Seed',
    badge: 'Monthly Cash & Grant',
    approvalTimeline: '4 to 8 weeks via Nodal Institute',
    executiveSummary: 'A state living stipend of ₹20,000/month (₹25,000/mo for women and disadvantaged founders) paid for 12 months, combined with up to ₹30 Lakhs seed funding for prototype fabrication and raw material testing.',
    whyFoundersCare: 'Eliminates personal financial anxiety during the critical zero-to-one phase. Backed by accredited nodal institutions with world-class prototyping facilities across Ahmedabad and Surat.',
    eligibility: [
      'DPIIT-recognized startup registered in Gujarat or incubated at an approved Gujarat Nodal Institution (e.g. i-Hub, GTU, PDPU, NID, CIIE IIM-A)',
      'Incorporated for not more than 10 years',
      'Applicant founder cannot draw another concurrent corporate salary'
    ],
    documentsRequired: [
      'Incorporation Certificate & DPIIT Recognition Certificate',
      'Recommendation Letter from an approved Gujarat Nodal Institute',
      'Founder KYC (Aadhaar, PAN) and bank account statements',
      'Detailed project proposal with technical testing milestones'
    ],
    applicationSteps: [
      '1. Pitch your venture to an accredited Gujarat Nodal Institute (like i-Hub Ahmedabad or GTU Innovation Council).',
      '2. Secure the Nodal Institute\'s official endorsement and screening clearance.',
      '3. The Nodal Institute forwards your dossier to the State Level Implementation Committee (SLIC).',
      '4. SLIC reviews and issues sanction approval.',
      '5. Monthly sustenance is deposited directly into founder accounts.'
    ],
    gotchasAndNuances: [
      'You cannot approach the government directly without first being formally endorsed by a designated Nodal Institute.',
      'Prototype grant disbursements are linked directly to approved supplier invoices and equipment procurement.'
    ],
    stackingTips: [
      'Combine with AWS Activate Founders tier ($1,000–$5,000 compute) while testing prototypes.',
      'Take advantage of i-Hub\'s subsidized patent drafting cells.'
    ],
    officialLink: 'https://ihubgujarat.in/',
    domain: 'ihubgujarat.in',
    tags: ['Gujarat', 'Sustenance', 'i-Hub', 'Monthly Stipend', 'Seed Support'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed']
  },

  // 3. SISFS CENTRAL
  {
    id: 'sisfs-central',
    slug: 'startup-india-seed-fund-scheme-sisfs',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    category: 'grant',
    categoryLabel: 'Non-Dilutive Grant & Debt',
    provider: 'DPIIT, Ministry of Commerce & Industry',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Up to ₹20L Grant + ₹50L Debt/CCPS',
    badge: 'Flagship Central Grant',
    approvalTimeline: '4 to 8 weeks depending on chosen incubator',
    executiveSummary: 'India\'s largest national early-stage seed vehicle. Up to ₹20 Lakhs as a pure non-dilutive grant for proof-of-concept, prototype development, and product trials, or up to ₹50 Lakhs convertible debt/debentures for commercialization.',
    whyFoundersCare: 'Zero equity taken by the government for the ₹20L grant. Disbursed directly through selected incubators across India without personal collateral or founder personal guarantees.',
    eligibility: [
      'DPIIT-recognized startup incorporated less than 2 years ago at the exact date of application',
      'Must use technology in core product, service, or distribution methodology',
      'Must NOT have received >₹10 Lakhs monetary grant under any other Central or State Govt scheme',
      'At least 51% shareholding held by Indian promoters at application time'
    ],
    documentsRequired: [
      'DPIIT Recognition Certificate (instant download on startupindia.gov.in)',
      'Certificate of Incorporation & Memorandum of Association (MOA)',
      'Pitch deck with clear Go-To-Market and 12-month milestone timeline',
      'Cap table showing 51%+ Indian promoter shareholding',
      'Prototype screenshots, video demonstration, or pilot customer letters'
    ],
    applicationSteps: [
      '1. Verify your company incorporation date is strictly under 2 years.',
      '2. Log in to seedfund.startupindia.gov.in using your Startup India credentials.',
      '3. Search and select up to 3 priority incubators.',
      '4. Fill out the common application questionnaire and upload your pitch deck.',
      '5. Pitch before the Incubator Seed Management Committee (ISMC).',
      '6. Sign grant agreement and receive advance milestone tranches.'
    ],
    gotchasAndNuances: [
      'The 2-year incorporation limit is strictly enforced down to the calendar day. If your company is 2 years and 1 day old, the portal algorithmically locks you out.',
      'Arbitrage Tip: Never pick over-applied incubators like IIT Bombay or IIT Madras where 2,000+ startups compete for 5 grants. Check the public SISFS dashboard and pick Tier-2/Tier-3 university incubators with high unspent funds for 4x higher approval odds.'
    ],
    stackingTips: [
      'Stack with DPIIT Section 80-IAC tax holiday and 80% patent rebate.',
      'Pair with HDFC SmartUp or ICICI iStartup zero-balance accounts to manage grant disbursements.'
    ],
    officialLink: 'https://seedfund.startupindia.gov.in/',
    domain: 'seedfund.startupindia.gov.in',
    tags: ['SISFS', 'Central Grant', 'DPIIT', 'Non-dilutive', 'Seed Fund'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed']
  },

  // 4. KARNATAKA ELEVATE
  {
    id: 'karnataka-elevate',
    slug: 'karnataka-elevate-100-idea2poc',
    title: 'Karnataka ELEVATE 100 / Idea2PoC Grant',
    category: 'grant',
    categoryLabel: 'Non-Dilutive State Grant',
    provider: 'Department of Electronics, IT, Bt and S&T, Govt of Karnataka',
    stateOrRegion: 'Karnataka',
    valueAmount: 'Up to ₹50 Lakhs (100% Non-Dilutive Grant)',
    badge: 'Premier State Grant',
    approvalTimeline: 'Annual cohort cycle (approx 8–12 weeks)',
    executiveSummary: 'One of India\'s most prestigious state startup grants. Disburses up to ₹50 Lakhs directly into an escrow account for Karnataka-registered startups, alongside 100% patent filing fee reimbursement and state procurement pilots.',
    whyFoundersCare: 'A ₹50 Lakhs check with zero equity dilution and zero repayment. Gives you up to 18 months of software or hardware engineering runway in Bengaluru without raising a pre-seed round.',
    eligibility: [
      'Registered with Karnataka Startup Cell with registered office in Karnataka',
      'At least 50% of the startup\'s permanent workforce must be located in Karnataka',
      'Incorporated for less than 10 years'
    ],
    documentsRequired: [
      'Karnataka Startup Cell registration certificate',
      'Certificate of Incorporation & GST registration in Karnataka',
      'Pitch deck, technical architecture, and revenue milestones',
      'Employee muster roll / PF / ESIC proving 50%+ workforce in Karnataka',
      'Audited balance sheet or provisional financial statements'
    ],
    applicationSteps: [
      '1. Register entity on missionstartup.karnataka.gov.in.',
      '2. Submit application when the annual ELEVATE call is announced.',
      '3. Pass Stage 1 desk evaluation of pitch decks.',
      '4. Present 10-minute pitch before the sectoral Grand Jury.',
      '5. Execute tripartite agreement and milestone schedule.'
    ],
    gotchasAndNuances: [
      'Workforce rule is strictly audited. If your core developers are 100% remote outside Karnataka, your application will fail physical verification.',
      'Hack: Place founders, directors, and core leads on the Karnataka muster roll and retain remote developers as independent contractors.'
    ],
    stackingTips: [
      'Reimburse 100% of your patent costs (₹2L domestic / ₹10L international) through the Karnataka IP facilitation cell.',
      'Apply for Tier-2 city bonus incentives if setting up offices in Mysuru, Hubballi, or Mangaluru.'
    ],
    officialLink: 'https://missionstartup.karnataka.gov.in/elevate.html',
    domain: 'missionstartup.karnataka.gov.in',
    tags: ['Karnataka', 'Bengaluru', 'ELEVATE', '₹50L Grant', 'Non-dilutive'],
    founderStage: ['bootstrapped', 'pre_seed', 'seed']
  },

  // 5. BIHAR 10-YEAR SEED
  {
    id: 'bihar-zero-interest',
    slug: 'bihar-startup-10-year-zero-interest-loan',
    title: 'Bihar 10-Year 0% Interest Seed Capital',
    category: 'grant',
    categoryLabel: 'Interest-Free Capital',
    provider: 'Department of Industries, Government of Bihar',
    stateOrRegion: 'Bihar',
    valueAmount: '₹10 Lakhs (0% Interest for 10 Years)',
    badge: '10-Year Zero Cost Debt',
    approvalTimeline: '4 to 8 weeks from portal pitch',
    executiveSummary: 'Bihar disburses up to ₹10 Lakhs (with an additional 5% bonus for women/SC/ST founders) as a 100% interest-free seed loan with a 10-year repayment window, alongside free incubation at IIT Patna or CIMP.',
    whyFoundersCare: 'A 10-year interest-free loan with zero collateral effectively acts as non-dilutive equity. You do not need to repay a single rupee for a decade, freeing up cash flow to reach profitability.',
    eligibility: [
      'Registered entity with registered address or establishment in Bihar',
      'DPIIT recognized or certified by Bihar Startup Cell',
      'Entity incorporated for less than 10 years'
    ],
    documentsRequired: [
      'Certificate of Incorporation / Registration with Bihar address proof',
      'DPIIT Recognition Certificate',
      'Promoter Aadhaar & PAN Cards',
      'Detailed project proposal with 2-year utilization roadmap'
    ],
    applicationSteps: [
      '1. Register your company on startup.bihar.gov.in.',
      '2. Complete the online questionnaire and upload project presentation.',
      '3. Attend screening pitch before the Bihar Startup Council.',
      '4. Receive formal sanction letter and bank disbursement.'
    ],
    gotchasAndNuances: [
      'Entity must remain in legal good standing with annual ROC/MCA filings in Bihar.',
      'Loan repayment triggers earlier only if the company completes a large institutional equity buyback.'
    ],
    stackingTips: [
      'Take advantage of free lab facilities, high-speed internet, and office space at IIT Patna incubation centers.',
      'Combine with Central SISFS seed grants for cumulative non-dilutive capital exceeding ₹30 Lakhs.'
    ],
    officialLink: 'https://startup.bihar.gov.in/',
    domain: 'startup.bihar.gov.in',
    tags: ['Bihar', 'Patna', '0% Interest', '10-Year Loan', 'Non-dilutive'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed']
  },

  // 6. MICROSOFT FOUNDERS HUB
  {
    id: 'microsoft-founders-hub',
    slug: 'microsoft-for-startups-founders-hub',
    title: 'Microsoft for Startups Founders Hub (Azure + OpenAI)',
    category: 'cloud',
    categoryLabel: 'Cloud & AI Compute',
    provider: 'Microsoft Corporation & OpenAI',
    stateOrRegion: 'Global / All India',
    valueAmount: 'Up to $150,000 Azure + $2,500–$20k OpenAI',
    badge: 'Zero Funding Needed',
    approvalTimeline: 'Instant to 48 hours for Level 1',
    executiveSummary: 'The most open cloud sponsorship program in tech. Requires zero investor backing, zero legal incorporation, and zero credit card upfront for Level 1. Gives up to $150,000 Azure credits, $2,500 to $20,000 Azure OpenAI credits, 20 free GitHub Enterprise seats ($5,000 value), and Microsoft 365.',
    whyFoundersCare: 'Deploy GPT-4o, GPT-4o-mini, and embeddings on private enterprise infrastructure without spending your own money. 20 seats of GitHub Enterprise gives you enterprise security, actions minutes, and CodeQL secret scanning for free.',
    eligibility: [
      'Open to all founders globally at any stage (even idea stage without an incorporated company)',
      'Founder must have a verifiable personal LinkedIn account',
      'Entity must not be an educational body, personal blog, IT services dev shop, or crypto-miner'
    ],
    documentsRequired: [
      'Personal LinkedIn profile of founder',
      'Basic product concept description and website (or concept walkthrough)',
      'No credit card required upfront for Level 1'
    ],
    applicationSteps: [
      '1. Sign in with your LinkedIn account at foundershub.startups.microsoft.com.',
      '2. Fill out a simple 5-minute form outlining what you are building.',
      '3. Approval for Level 1 ($1,000 Azure + $2,500 OpenAI) is typically approved within 24–48 hours.',
      '4. Connect your Azure subscription to deploy GPT-4o models instantly.',
      '5. Request level-ups to Level 2 ($5,000), Level 3 ($25,000), and Level 4 ($150,000) as server usage expands.'
    ],
    gotchasAndNuances: [
      'OpenAI tokens are provisioned as Azure OpenAI Service credits, which keeps all customer data strictly inside your private cloud tenant without public model training.',
      'Advancing to higher levels requires active cloud consumption in your Azure tenant; you cannot claim Level 4 without deployed architecture.'
    ],
    stackingTips: [
      'Activate 20 free GitHub Enterprise seats immediately to manage code repositories and automated CI/CD runners.',
      'Stack with Notion for Startups for free team wikis and product documentation.'
    ],
    officialLink: 'https://foundershub.startups.microsoft.com/',
    domain: 'foundershub.startups.microsoft.com',
    tags: ['Azure', 'OpenAI', 'GPT-4o', 'GitHub Enterprise', 'No Funding Required'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed']
  },

  // 7. GOOGLE CLOUD STARTUPS
  {
    id: 'google-cloud-startups',
    slug: 'google-cloud-for-startups-and-vertex-ai',
    title: 'Google Cloud for Startups & Vertex AI / Gemini',
    category: 'cloud',
    categoryLabel: 'Cloud & AI Compute',
    provider: 'Google Cloud Platform (GCP)',
    stateOrRegion: 'Global / All India',
    valueAmount: 'Up to $200,000 ($350,000 for AI Startups)',
    badge: 'Cloud & AI Tokens',
    approvalTimeline: '5 to 10 business days',
    executiveSummary: 'Full cloud compute coverage for Google Kubernetes Engine (GKE), BigQuery, Cloud Run, and Vertex AI. Startups focused on foundation models or generative AI applications qualify for up to $350,000 in credits over 2 years.',
    whyFoundersCare: 'Vertex AI API calls (Gemini 1.5 Pro, Flash, Imagen 3, Codey) are 100% eligible under the startup credit allocation, making it ideal for LLM wrappers, autonomous agents, and RAG pipelines.',
    eligibility: [
      'Start Tier: Bootstrapped startups, incorporated < 5 years, active website and corporate domain email',
      'Scale Tier: Seed to Series A startups backed by an approved VC fund or accelerator ($100k - $10M raised)'
    ],
    documentsRequired: [
      'GCP Billing Account ID linked to company domain',
      'Company website & corporate domain email',
      'Pitch deck and proof of institutional funding (for Scale Tier)'
    ],
    applicationSteps: [
      '1. Create a Google Cloud Billing account with your corporate Google Workspace identity.',
      '2. Navigate to cloud.google.com/startup and click Apply.',
      '3. Select tier (Start vs Scale vs AI-first) and provide partner accelerator code if applicable.',
      '4. Credit allocation is stamped directly to your billing console upon approval.'
    ],
    gotchasAndNuances: [
      'Year 2 Scale credits follow a 20% co-spend model (Google covers 20% of your usage up to $100k). Year 1 is 100% free up to $100,000.',
      'Always set up Cloud Budget Billing alerts to notify you before credits approach expiration.'
    ],
    stackingTips: [
      'Take advantage of 12 months free Google Workspace Business Plus for up to 10 team members.',
      'Stack with MongoDB for Startups ($500–$3,000 credits) deployed directly in GCP regions.'
    ],
    officialLink: 'https://cloud.google.com/startup',
    domain: 'cloud.google.com',
    tags: ['Google Cloud', 'Vertex AI', 'Gemini API', 'BigQuery', 'Compute Credits'],
    founderStage: ['bootstrapped', 'pre_seed', 'seed']
  },

  // 8. AWS ACTIVATE
  {
    id: 'aws-activate',
    slug: 'aws-activate-founders-and-portfolio',
    title: 'AWS Activate (Founders & Portfolio Tiers)',
    category: 'cloud',
    categoryLabel: 'Cloud Compute',
    provider: 'Amazon Web Services (AWS)',
    stateOrRegion: 'Global / All India',
    valueAmount: '$1,000 to $100,000 USD Cloud Credits',
    badge: 'Industry Benchmark',
    approvalTimeline: '3 to 7 business days',
    executiveSummary: 'The world\'s most popular startup credit program. Offers $1,000 credits for bootstrapped founders (no funding needed) and up to $100,000 credits + $10,000 business support for accelerator and VC portfolio companies.',
    whyFoundersCare: 'Covers EC2, S3, RDS databases, and Amazon Bedrock models (Claude 3.5 Sonnet, Llama 3, Titan). Frees you from server bills for 1 to 2 years.',
    eligibility: [
      'Founders Tier: Bootstrapped, company website active, valid AWS Account ID, incorporated < 10 years',
      'Portfolio Tier: Affiliated with an authorized AWS Activate Provider (Incubator/VC) with a valid Provider Org ID / Package Code',
      'Lifetime maximum cap of $100,000 per company'
    ],
    documentsRequired: [
      'AWS Account ID (12-digit number with credit card attached)',
      'Active company website with corporate domain email (applications with generic @gmail.com addresses are rejected)',
      'Company LinkedIn page and founder LinkedIn profile'
    ],
    applicationSteps: [
      '1. Create an AWS account and link a corporate credit/debit card.',
      '2. Visit aws.amazon.com/activate and choose Founders or Portfolio.',
      '3. Enter company website, corporate email, and your Incubator/VC Org ID (if Portfolio).',
      '4. Verification takes 3 to 7 business days; credits appear in Billing Console under Credits.'
    ],
    gotchasAndNuances: [
      'AWS has a strict lifetime cap of $100,000 across the life of your company. If you claim $10,000 from one partner, you can only claim up to $90,000 later.',
      'Credits do NOT cover third-party software purchased via AWS Marketplace or Route 53 domain registrations.'
    ],
    stackingTips: [
      'Claim your $350 Developer Support credits alongside infrastructure credits for 1:1 architectural reviews.',
      'Pair with RazorpayX corporate cards with spend caps to pay zero forex markup on any excess usage.'
    ],
    officialLink: 'https://aws.amazon.com/activate/',
    domain: 'aws.amazon.com',
    tags: ['AWS', 'Bedrock', 'Claude 3.5', 'EC2', 'Cloud Compute'],
    founderStage: ['bootstrapped', 'pre_seed', 'seed']
  },

  // 9. HDFC SMARTUP
  {
    id: 'hdfc-smartup',
    slug: 'hdfc-smartup-founder-current-account',
    title: 'HDFC SmartUp Founder Banking Suite',
    category: 'banking',
    categoryLabel: 'Founder Banking',
    provider: 'HDFC Bank',
    stateOrRegion: 'All States / Central',
    valueAmount: '12-Month Zero Balance + Preferential FX Margins',
    badge: 'Zero Balance Current Account',
    approvalTimeline: '48 to 72 hours for account activation',
    executiveSummary: 'Waives standard Average Quarterly Balance (AQB) requirements (typically ₹50,000–₹1 Lakh) for 12 months, provides discounted foreign remittance spreads for overseas customers, and gives access to annual SmartUp CSR grants up to ₹50 Lakhs.',
    whyFoundersCare: 'Keeps early-stage current accounts from burning money on non-maintenance penalties. Includes dedicated Forex relationship managers who understand software export purpose codes.',
    eligibility: [
      'DPIIT Recognized startup, or registered entity incorporated < 5 years',
      'Entity can be Private Limited Company, LLP, or registered partnership'
    ],
    documentsRequired: [
      'Certificate of Incorporation / Registration & MOA/AOA',
      'Company PAN and GST Certificate (if applicable)',
      'DPIIT Recognition Certificate (for SmartUp Alpha/Beta tiers)',
      'KYC documents of all Directors and authorized signatories'
    ],
    applicationSteps: [
      '1. Request account opening on hdfcbank.com/sme/startup-banking.',
      '2. Dedicated Startup Relationship Manager schedules doorstep document collection.',
      '3. Account activated with corporate net banking within 48–72 hours.'
    ],
    gotchasAndNuances: [
      'Zero-balance waiver is valid for 12 months. Request your relationship manager to lock Purpose Code P0802 for software export to automatically deliver electronic e-FIRS certificates.'
    ],
    stackingTips: [
      'File your annual GST Letter of Undertaking (LUT) to export SaaS services at 0% tax through your HDFC current account.',
      'Apply for annual HDFC SmartUp CSR grants if building social or climate impact technology.'
    ],
    officialLink: 'https://www.hdfcbank.com/sme/startup-banking',
    domain: 'hdfcbank.com',
    tags: ['HDFC', 'Zero Balance', 'Current Account', 'Forex', 'SmartUp'],
    founderStage: ['bootstrapped', 'pre_seed', 'seed']
  },

  // 10. MERCURY US BANKING
  {
    id: 'mercury-us-bank',
    slug: 'mercury-bank-us-delaware-banking',
    title: 'Mercury Bank (For US Delaware Entities)',
    category: 'banking',
    categoryLabel: 'Cross-Border Banking',
    provider: 'Mercury (Choice Financial Group & Evolve, FDIC)',
    stateOrRegion: 'Global / US Entities',
    valueAmount: '$5M FDIC Insurance + ~5% APY Treasury',
    badge: 'US Banking & Treasury',
    approvalTimeline: '24 to 48 hours 100% remote',
    executiveSummary: 'The gold standard business bank for startups with a US Delaware entity. Opened 100% remotely from India with an Indian passport and US EIN. Features zero monthly fees, zero incoming wire fees, and up to $5M FDIC insurance.',
    whyFoundersCare: 'Allows Indian founders to accept US investor wires, run Stripe US billing, and earn 4.5%–5% APY on idle capital through short-term US Treasury bonds without visiting the United States.',
    eligibility: [
      'Entity incorporated in the United States (Delaware C-Corp or LLC)',
      'Valid IRS Employer Identification Number (EIN)',
      'Indian founders can apply remotely with valid Indian Passport'
    ],
    documentsRequired: [
      'Delaware Certificate of Formation / Incorporation (e.g. from Stripe Atlas or Clerky)',
      'Official IRS EIN confirmation letter (CP 575 or 147C)',
      'Passport of all founders with 25%+ ownership'
    ],
    applicationSteps: [
      '1. Incorporate your US Delaware company via Stripe Atlas or Clerky.',
      '2. Receive your IRS EIN confirmation letter.',
      '3. Start online application at mercury.com and upload company PDF and passport.',
      '4. Account is reviewed and approved within 1 to 2 business days.'
    ],
    gotchasAndNuances: [
      'Indian residents must comply with RBI Overseas Direct Investment (ODI) guidelines and file annual transfer pricing returns (Form 3CEB) between the US parent and Indian subsidiary.',
      'Pending EIN application notices are not accepted; you must wait for the official IRS letter.'
    ],
    stackingTips: [
      'Automate idle cash sweeps into Mercury Treasury to earn ~5% APY on your venture check.',
      'Issue unlimited virtual debit cards with custom monthly spend limits for team tools.'
    ],
    officialLink: 'https://mercury.com/',
    domain: 'mercury.com',
    tags: ['US Banking', 'Mercury', 'Delaware', 'FDIC $5M', 'Treasury'],
    founderStage: ['pre_seed', 'seed']
  },

  // 11. NCR-RAJASTHAN ARBITRAGE
  {
    id: 'ncr-rajasthan-arbitrage',
    slug: 'gurugram-living-rajasthan-domicile-arbitrage',
    title: 'The Gurugram Living + Rajasthan Domicile Arbitrage',
    category: 'arbitrage',
    categoryLabel: 'Founder Legal Hack',
    provider: 'iStart Rajasthan + NCR Ecosystem',
    stateOrRegion: 'Rajasthan & Haryana/Delhi',
    valueAmount: '₹2.4L–₹3L/Yr Living Stipend + Up to ₹25L Grant',
    badge: 'Cross-State Playbook',
    approvalTimeline: '3 to 6 weeks from iStart pitch',
    executiveSummary: 'Operate your tech and investor network in Gurugram, Delhi NCR, or Bengaluru while maintaining a registered entity in Rajasthan to claim the monthly ₹20,000–₹25,000 founder sustenance allowance and up to ₹25 Lakhs in seed grants.',
    whyFoundersCare: 'Allows you to tap into high-density metro talent and venture capital while leveraging state government living stipends to pay your personal bills without equity dilution.',
    eligibility: [
      'Registered entity (Pvt Ltd / LLP) in Rajasthan with at least one founder holding Rajasthan domicile or address proof',
      'Entity incorporated for less than 10 years'
    ],
    documentsRequired: [
      'Certificate of Incorporation with Rajasthan registered office address',
      'Promoter Aadhaar / Domicile certificate',
      'Entity GST / Udyam registration in Rajasthan'
    ],
    applicationSteps: [
      '1. Register your company CIN/LLPIN using family property, hometown address, or a virtual office lease in Jaipur/Jodhpur/Udaipur.',
      '2. Register on istart.rajasthan.gov.in and pitch to the evaluation committee online.',
      '3. Direct monthly living allowance into founder bank accounts.',
      '4. Work out of Gurugram, Delhi, or Bengaluru while complying with Rajasthan state filing milestones.'
    ],
    gotchasAndNuances: [
      'Entity must maintain MCA and GST registrations in Rajasthan.',
      'Virtual milestone pitch reviews are conducted online, but physical state audit checks may require address verification.'
    ],
    stackingTips: [
      'Combine with Haryana lease subsidies if setting up an official branch in Gurugram.',
      'Stack with Microsoft Founders Hub for free cloud compute.'
    ],
    officialLink: 'https://istart.rajasthan.gov.in/',
    domain: 'istart.rajasthan.gov.in',
    tags: ['Arbitrage', 'Rajasthan', 'Gurugram', 'Living Stipend', 'Founder Hack'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed']
  },

  // 12. PATENT DOUBLE DIP
  {
    id: 'patent-double-dip',
    slug: 'dpiit-state-msme-patent-double-dip',
    title: 'The DPIIT + State MSME Patent Double-Dip (Net 0% Cost)',
    category: 'arbitrage',
    categoryLabel: 'IP & Legal Arbitrage',
    provider: 'Patent Office + State Startup Cells',
    stateOrRegion: 'All States / Central',
    valueAmount: '100% Patent Cost Coverage (Save ₹1L–₹10L)',
    badge: 'Zero-Cost IP Strategy',
    approvalTimeline: 'Reimbursement in 60 to 90 days after filing',
    executiveSummary: 'Step 1: Use your DPIIT Startup Certificate to reduce official filing fees from ₹8,000 to ₹1,600 (80% statutory discount). Step 2: Submit attorney bills to your State Startup Cell (e.g. Karnataka reimburses up to ₹2L domestic / ₹10L international; Haryana/Maharashtra reimburse up to ₹2L) to recover 100% of out-of-pocket costs.',
    whyFoundersCare: 'Filing patents is prohibitively expensive for early-stage software and hardware startups. Combining DPIIT fee cuts with state reimbursements brings your net patent cost to exactly ₹0.',
    eligibility: [
      'DPIIT-recognized startup',
      'Filing provisional or complete patent applications in India or international PCT applications'
    ],
    documentsRequired: [
      'DPIIT Startup Recognition Certificate',
      'Official Patent Filing Receipt (Form 1 / Form 2)',
      'CA-certified invoices from registered patent attorney',
      'State Startup Cell application form'
    ],
    applicationSteps: [
      '1. Quote your DPIIT recognition number on patent filing Form 1 to get an immediate 80% statutory discount.',
      '2. Request expedited fast-track patent examination under Rule 24C.',
      '3. Submit attorney invoices and official filing receipts to your State Startup Cell for 100% expense reimbursement.'
    ],
    gotchasAndNuances: [
      'State reimbursement claims must typically be submitted within 6 months of official filing receipt or grant issuance.',
      'Attorneys must provide itemized GST tax invoices.'
    ],
    stackingTips: [
      'Use fast-track examination to get patent grant clearance in 6–9 months instead of the typical 4–5 years.',
      'Use granted patents as proof of innovation to qualify for Section 80-IAC 3-year tax holidays.'
    ],
    officialLink: 'https://www.startupindia.gov.in/',
    domain: 'startupindia.gov.in',
    tags: ['Patents', 'DPIIT', 'Double Dip', 'Zero Cost IP', 'Arbitrage'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed']
  },

  // 13. UTTAR PRADESH STARTUP POLICY (STARTINUP)
  {
    id: 'startinup-uttar-pradesh',
    slug: 'startinup-uttar-pradesh-sustenance-and-seed',
    title: 'StartInUP Sustenance Allowance & Seed Capital',
    category: 'stipend',
    categoryLabel: 'Monthly Living Cash & Grant',
    provider: 'Department of IT & Electronics, Govt of Uttar Pradesh',
    stateOrRegion: 'Uttar Pradesh',
    valueAmount: '₹17.5k/Mo (1 Yr) + ₹5L Marketing + ₹50L Seed',
    badge: 'Monthly Cash & Grants',
    approvalTimeline: '4 to 8 weeks via registered UP Nodal Center',
    executiveSummary: 'Direct monthly sustenance allowance of ₹17,500/month for 12 months, plus ₹5 Lakhs marketing & prototyping grant, and up to ₹50 Lakhs in seed-stage capital support via certified incubators (IIT Kanpur, IIM Lucknow, AKTU).',
    whyFoundersCare: 'Enables founders in Noida, Greater Noida, Lucknow, and Kanpur to build their venture with guaranteed personal burn coverage and institutional incubator access without immediate dilution.',
    eligibility: [
      'Registered entity with registered office in Uttar Pradesh',
      'DPIIT Recognition Certificate and StartInUP registration',
      'Entity incorporated for less than 10 years with turnover under ₹100 Crore',
      'Startups must be physically or virtually incubated at an approved UP incubator'
    ],
    documentsRequired: [
      'Certificate of Incorporation / LLP Agreement',
      'StartInUP Registration Number & DPIIT Certificate',
      'Promoter Aadhaar Card & proof of registered office in UP',
      'Detailed pitch deck with 12-month milestone execution plan',
      'Recommendation letter from a recognized UP incubator'
    ],
    applicationSteps: [
      '1. Create an account on the StartInUP portal (startinup.up.gov.in).',
      '2. Link your DPIIT registration and choose a partner incubator (e.g. IIT Kanpur, IIM Lucknow).',
      '3. Submit application for Monthly Sustenance Allowance and Prototyping Grant.',
      '4. Present your pitch deck before the State Evaluation Committee.',
      '5. Execute agreement and receive direct monthly bank transfers.'
    ],
    gotchasAndNuances: [
      'Incubator recommendation is mandatory before the state committee reviews your grant application.',
      'Noida/Greater Noida startups must have active lease or registered office documents within Gautam Buddha Nagar district.'
    ],
    stackingTips: [
      'Noida SaaS founders can combine UP sustenance money with Microsoft Founders Hub $150k compute to eliminate infrastructure costs.',
      'Stack with Central SISFS seed fund via IIT Kanpur or BIMTECH incubators.'
    ],
    officialLink: 'https://startinup.up.gov.in/',
    domain: 'startinup.up.gov.in',
    tags: ['Uttar Pradesh', 'Noida', 'Lucknow', 'Sustenance', 'Seed Grant'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed']
  },

  // 14. TAMIL NADU STARTUPTN & TANSEED
  {
    id: 'startuptn-tanseed',
    slug: 'startuptn-tanseed-equity-free-seed-grant',
    title: 'StartupTN TANSEED Equity-Free Seed Fund',
    category: 'grant',
    categoryLabel: 'Non-Dilutive Grant',
    provider: 'Tamil Nadu Startup and Innovation Mission (TANSIM)',
    stateOrRegion: 'Tamil Nadu',
    valueAmount: '₹10 Lakhs – ₹15 Lakhs Equity-Free Grant',
    badge: '100% Equity-Free Cash',
    approvalTimeline: '6 to 10 weeks via TANSEED edition cohorts',
    executiveSummary: 'Direct non-dilutive grant of ₹10 Lakhs (₹15 Lakhs for women-led, rural, or green-tech startups) provided in milestone tranches to early-stage startups registered in Tamil Nadu.',
    whyFoundersCare: '100% non-dilutive grant without warrants, board seats, or equity conversion. Backed by the StartupTN Smart Card, which gives ₹5 Lakhs in free credits across AWS, Zoho, Freshworks, and PayU.',
    eligibility: [
      'Registered entity with registered office in Tamil Nadu',
      'DPIIT Recognition Certificate and StartupTN registration',
      'Entity must have working prototype / MVP with customer validation'
    ],
    documentsRequired: [
      'Certificate of Incorporation & GST Certificate in Tamil Nadu',
      'StartupTN Registration details & DPIIT Certificate',
      'Demo video or live product link',
      'CA-certified provisional financial statements',
      'Pitch deck and detailed fund utilization breakdown'
    ],
    applicationSteps: [
      '1. Register your entity on the StartupTN portal (startuptn.in).',
      '2. Apply during the open TANSEED cohort window (conducted multiple times a year).',
      '3. Complete initial document verification and preliminary screening.',
      '4. Pitch before the Grand Jury of venture capitalists and sector experts.',
      '5. Selected startups receive funds in 3 milestone tranches directly into their company bank account.'
    ],
    gotchasAndNuances: [
      'You cannot shift your corporate registered office outside Tamil Nadu for 3 years post-disbursement.',
      'Tranches are tied to milestones (Tranche 1: 30%, Tranche 2: 40%, Tranche 3: 30%).'
    ],
    stackingTips: [
      'Stack TANSEED with StartupTN Smart Card for zero-fee payment gateways and legal advisory.',
      'Pair with SISFS grants from IIT Madras Research Park or Anna Incubator.'
    ],
    officialLink: 'https://startuptn.in/',
    domain: 'startuptn.in',
    tags: ['Tamil Nadu', 'Chennai', 'TANSEED', 'Equity-Free Grant', 'Coimbatore'],
    founderStage: ['bootstrapped', 'pre_seed', 'seed']
  },

  // 15. KERALA STARTUP MISSION (KSUM)
  {
    id: 'kerala-startup-mission-ksum',
    slug: 'kerala-startup-mission-idea-and-scaleup-grants',
    title: 'Kerala Startup Mission (KSUM) Grants & Soft Loans',
    category: 'grant',
    categoryLabel: 'Non-Dilutive Grant & Soft Loan',
    provider: 'Kerala Startup Mission (KSUM), Govt of Kerala',
    stateOrRegion: 'Kerala',
    valueAmount: '₹12L Idea Grant + ₹15L Scale-up Loan + ₹10L Patent',
    badge: 'Grants & Soft Capital',
    approvalTimeline: '4 to 6 weeks through KSUM Pitch Days',
    executiveSummary: 'Non-dilutive Idea Grant of up to ₹12 Lakhs for prototype validation, plus soft seed loan of up to ₹15 Lakhs at low interest with zero personal collateral, and international patent reimbursement up to ₹10 Lakhs.',
    whyFoundersCare: 'Kerala offers India\'s most comprehensive soft-capital ecosystem. You get low-cost capital and access to the Integrated Startup Complex at Kalamassery, one of the largest prototyping hubs in South Asia.',
    eligibility: [
      'Startup registered in Kerala or willing to establish a registered office in Kerala',
      'DPIIT-recognized and registered on the KSUM portal',
      'Innovations in DeepTech, BioTech, AI, MarineTech, or Hardware prioritized'
    ],
    documentsRequired: [
      'Certificate of Incorporation & KSUM Unique ID',
      'Project proposal with prototype photos and BOM (Bill of Materials)',
      'Aadhaar of founders and Kerala address proof',
      'Utilization plan for grant capital'
    ],
    applicationSteps: [
      '1. Register on the KSUM portal (startupmission.kerala.gov.in) and obtain a Unique ID.',
      '2. Submit application for Idea Grant or Early Stage Scale-Up Soft Loan.',
      '3. Attend KSUM Monthly Pitch Day before the expert evaluation panel.',
      '4. Sanction letter issued within 14 days of pitch approval.',
      '5. Funds disbursed against stage milestones.'
    ],
    gotchasAndNuances: [
      'Soft loans require clean credit bureau records for all directors.',
      'Idea grants are strictly non-dilutive; scale-up loans have a 1-year moratorium before interest starts.'
    ],
    stackingTips: [
      'Use KSUM Maker Village for subsidized hardware testing, SMT fabrication, and 3D printing.',
      'Combine with BIRAC BIG if building health-tech or medical devices.'
    ],
    officialLink: 'https://startupmission.kerala.gov.in/',
    domain: 'startupmission.kerala.gov.in',
    tags: ['Kerala', 'Kochi', 'KSUM', 'Idea Grant', 'Soft Loan'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed']
  },

  // 16. TELANGANA T-HUB & WE-HUB
  {
    id: 'telangana-thub-wehub',
    slug: 'telangana-thub-wehub-seed-and-prototyping',
    title: 'Telangana T-Hub Seed Fund & T-Works Prototyping',
    category: 'grant',
    categoryLabel: 'Seed Grant & Hardware Lab',
    provider: 'IT, E&C Department, Govt of Telangana',
    stateOrRegion: 'Telangana',
    valueAmount: 'Up to ₹25L T-Fund + ₹25k/Mo Women Sustenance',
    badge: 'Prototyping & Capital',
    approvalTimeline: '4 to 8 weeks via T-Hub / WE-Hub cohort',
    executiveSummary: 'Access to T-Fund co-investment checks up to ₹25 Lakhs, ₹25,000/month living sustenance for women-led startups via WE-Hub, and 100% subsidized access to T-Works (India\'s largest hardware prototyping facility).',
    whyFoundersCare: 'Hyderabad is India\'s top hub for hardware, life sciences, and enterprise SaaS. T-Works gives you free access to industrial laser cutters, CNC machines, and PCB surface-mount equipment that normally costs crores.',
    eligibility: [
      'Entity registered in Telangana or operating out of Hyderabad',
      'For WE-Hub sustenance: Woman founder with 51%+ shareholding',
      'For T-Works hardware subsidies: Working prototype with physical Bill of Materials'
    ],
    documentsRequired: [
      'Certificate of Incorporation & Telangana GST registration',
      'DPIIT Certificate and T-Hub portal profile',
      'Founder KYC & Bank statements',
      'Hardware CAD files or software architecture document'
    ],
    applicationSteps: [
      '1. Apply via the T-Hub portal (t-hub.co) or WE-Hub (wehub.telangana.gov.in).',
      '2. Choose your focus track (T-Fund, WE-Hub Incubation, or T-Works Hardware Prototyping).',
      '3. Pitch to the selection committee during the open cohort call.',
      '4. Finalize incubation agreement and unlock facility passes and grant disbursements.'
    ],
    gotchasAndNuances: [
      'T-Fund operates as co-investment matching institutional or angel capital.',
      'WE-Hub sustenance requires active physical participation in designated masterclasses.'
    ],
    stackingTips: [
      'Combine T-Hub software incubation with Google for Startups $350k Vertex AI credits.',
      'Stack T-Works prototyping with MeitY TIDE 2.0 grants.'
    ],
    officialLink: 'https://t-hub.co/',
    domain: 't-hub.co',
    tags: ['Telangana', 'Hyderabad', 'T-Hub', 'WE-Hub', 'Hardware'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed']
  },

  // 17. STARTUP ODISHA
  {
    id: 'startup-odisha',
    slug: 'startup-odisha-monthly-sustenance-and-seed',
    title: 'Startup Odisha Monthly Sustenance & Seed Grant',
    category: 'stipend',
    categoryLabel: 'Monthly Living Cash & Grant',
    provider: 'MSME Department, Government of Odisha',
    stateOrRegion: 'Odisha',
    valueAmount: '₹20k–₹22k/Mo (1 Yr) + Up to ₹16L Seed Grant',
    badge: 'Monthly Cash & Grant',
    approvalTimeline: '3 to 5 weeks from online evaluation pitch',
    executiveSummary: 'Guaranteed monthly sustenance allowance of ₹20,000/month (₹22,000/mo for women, SC/ST, and persons with disabilities) for 12 months, plus product development and marketing assistance grant up to ₹16 Lakhs.',
    whyFoundersCare: 'Bhubaneswar offers very low cost of living. Combining ₹2.4 Lakhs in guaranteed annual founder sustenance with a ₹16 Lakhs grant allows a 3-person team to build with 18+ months of zero-dilution runway.',
    eligibility: [
      'Entity registered in Odisha with active state GST or Udyam',
      'DPIIT Recognition Certificate and Startup Odisha recognition',
      'Incorporated for not more than 10 years'
    ],
    documentsRequired: [
      'Certificate of Incorporation / Partnership Deed',
      'Promoter Aadhaar and proof of Odisha registered office',
      'Pitch deck with clear product roadmap and 12-month expenditure budget',
      'Bank statement of entity current account'
    ],
    applicationSteps: [
      '1. Register on the Startup Odisha portal (startupodisha.gov.in).',
      '2. Apply for Recognition as an Odisha Startup.',
      '3. Once recognized, apply for the Monthly Allowance & Product Development Grant.',
      '4. Attend the virtual pitch session before the Task Force.',
      '5. Monthly allowance credited automatically to founder bank account.'
    ],
    gotchasAndNuances: [
      'Grant funds are released in tranches against milestone verification by recognized state incubators.',
      'Founders cannot draw concurrent salary from any other institution while claiming the monthly allowance.'
    ],
    stackingTips: [
      'Use KIIT-TBI (one of India\'s top bio-incubators) for world-class laboratory access.',
      'Stack with SISFS via Odisha-approved university incubators.'
    ],
    officialLink: 'https://startupodisha.gov.in/',
    domain: 'startupodisha.gov.in',
    tags: ['Odisha', 'Bhubaneswar', 'Sustenance', 'Seed Grant', 'Living Cash'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed']
  },

  // 18. HARYANA STARTUP POLICY
  {
    id: 'haryana-startup-policy',
    slug: 'haryana-startup-sustenance-and-sgst-rebate',
    title: 'Haryana Startup Policy Sustenance & 50% SGST Rebate',
    category: 'stipend',
    categoryLabel: 'Living Cash & Tax Rebate',
    provider: 'Department of IT, Electronics & Communication, Govt of Haryana',
    stateOrRegion: 'Haryana',
    valueAmount: '₹20k/Mo (1 Yr) + ₹5L Seed + 50% SGST Rebate (7 Yrs)',
    badge: 'Monthly Cash & Tax Shield',
    approvalTimeline: '4 to 6 weeks via Haryana Enterprise Promotion Board',
    executiveSummary: 'Monthly sustenance allowance of ₹20,000/month for 1 year, seed capital support up to ₹5 Lakhs, 100% cloud credit reimbursement up to ₹1 Lakh, and 50% net SGST reimbursement for 7 consecutive years for startups in Gurugram, Faridabad, and Panchkula.',
    whyFoundersCare: 'Gurugram is the venture capital and tech capital of North India. Operating here with state sustenance cash and a 7-year 50% SGST rebate gives massive tax savings on domestic SaaS and e-commerce transactions.',
    eligibility: [
      'Entity incorporated in Haryana with registered office in Gurugram, Faridabad, etc.',
      'DPIIT Recognition Certificate and Haryana Startup registration',
      'Incorporated for not more than 10 years'
    ],
    documentsRequired: [
      'Certificate of Incorporation & Haryana GST registration',
      'Registered office lease agreement in Haryana',
      'DPIIT Recognition Certificate',
      'Pitch deck and promoter KYC'
    ],
    applicationSteps: [
      '1. Apply through the Haryana Enterprise Promotion Portal (investharyana.in).',
      '2. Submit application for State Startup Recognition & Sustenance Allowance.',
      '3. Attend evaluation meeting with the District/State Committee.',
      '4. Sanction letter issued with monthly disbursals directly to bank account.'
    ],
    gotchasAndNuances: [
      'Must have active GST registration within the state of Haryana.',
      'SGST rebate is claimed annually against audited tax returns.'
    ],
    stackingTips: [
      'Stack with Gurugram angel networks and Microsoft Founders Hub for full tech runway.',
      'Use Haryana patent reimbursement up to ₹2 Lakhs per domestic patent.'
    ],
    officialLink: 'https://investharyana.in/',
    domain: 'investharyana.in',
    tags: ['Haryana', 'Gurugram', 'Faridabad', 'Sustenance', 'SGST Rebate'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed']
  },

  // 19. SECTION 80-IAC 3-YEAR 100% TAX HOLIDAY
  {
    id: 'section-80iac-tax-holiday',
    slug: 'dpiit-section-80iac-3year-100percent-tax-holiday',
    title: 'Section 80-IAC: 3-Year 100% Corporate Tax Holiday',
    category: 'arbitrage',
    categoryLabel: 'Tax Elimination Shield',
    provider: 'DPIIT & Central Board of Direct Taxes (CBDT)',
    stateOrRegion: 'All States / Central',
    valueAmount: '100% Tax Exemption for 3 Consecutive Years',
    badge: 'Zero Corporate Tax',
    approvalTimeline: '2 to 4 months through Inter-Ministerial Board (IMB)',
    executiveSummary: 'DPIIT-recognized Private Limited companies and LLPs incorporated after April 1, 2016 can claim 100% tax exemption on profits for 3 consecutive financial years out of their first 10 years under Section 80-IAC of the Income Tax Act.',
    whyFoundersCare: 'Saves crores once you become cash-flow positive or profitable. You pay 0% corporate income tax, allowing you to reinvest 100% of your earnings back into R&D and hiring.',
    eligibility: [
      'Private Limited Company or LLP incorporated between April 1, 2016 and March 31, 2025',
      'Must be DPIIT recognized and approved by the Inter-Ministerial Board (IMB)',
      'Turnover must not exceed ₹100 Crore in any financial year',
      'Must be engaged in innovation, development, or commercialization of new products/services'
    ],
    documentsRequired: [
      'Certificate of Incorporation & Memorandum of Association (MoA)',
      'DPIIT Recognition Certificate',
      'Audited Financial Statements and CA-certified balance sheets for past 3 years (or since inception)',
      'Video pitch link (2-3 minutes demonstrating product innovation & defensibility)',
      'Form-1 application filled on Startup India portal'
    ],
    applicationSteps: [
      '1. Log into your Startup India account and navigate to Section 80-IAC Exemption.',
      '2. Fill Form-1 with detailed technical explanations of your proprietary innovation.',
      '3. Upload audited financials, patent certificates, and 3-minute video presentation.',
      '4. The Inter-Ministerial Board (IMB) convenes monthly to review applications.',
      '5. Once approved, quote the IMB certificate in your annual ITR-6 filings to claim 100% profit deduction.'
    ],
    gotchasAndNuances: [
      'IMB has a high rejection rate for conventional agencies or service businesses. The business model must show genuine technological innovation or patent defensibility.',
      'Choose your 3-year block wisely—pick the years where your profitability is highest!'
    ],
    stackingTips: [
      'Get a provisional patent or software copyright first—it dramatically improves your IMB approval chances.',
      'Stack with GST LUT to eliminate both domestic corporate income tax and export GST.'
    ],
    officialLink: 'https://www.startupindia.gov.in/content/sih/en/tax-exemptions.html',
    domain: 'startupindia.gov.in',
    tags: ['Tax Holiday', 'Section 80-IAC', 'DPIIT', 'Zero Tax', 'Profit Shield'],
    founderStage: ['bootstrapped', 'pre_seed', 'seed']
  },

  // 20. GEM GOVERNMENT PUBLIC PROCUREMENT ARBITRAGE
  {
    id: 'gem-public-procurement-preference',
    slug: 'gem-public-procurement-zero-experience-arbitrage',
    title: 'GeM Public Procurement: Zero Turnover & Experience Waiver',
    category: 'arbitrage',
    categoryLabel: 'Revenue Arbitrage',
    provider: 'Government e-Marketplace (GeM) & Ministry of Commerce',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Access to ₹2+ Lakh Crore Public Tender Market',
    badge: 'Tender Waiver Arbitrage',
    approvalTimeline: 'Immediate upon DPIIT linkage on GeM',
    executiveSummary: 'Central government ministries and PSUs are legally mandated to procure at least 25% of annual requirements from MSMEs and startups. Under Rule 173(i) of General Financial Rules, all "Prior Experience" and "Prior Turnover" requirements are waived for DPIIT-recognized startups.',
    whyFoundersCare: 'Solves the classic "need 3 years of audited turnover to win government contracts" catch-22. As a Day 1 startup, you can bid on and win multi-crore public sector contracts purely on technical capability and pricing.',
    eligibility: [
      'DPIIT-recognized startup',
      'Registered on Government e-Marketplace (GeM) as an OEM or Seller',
      'Entity must meet technical and quality specifications of the tender'
    ],
    documentsRequired: [
      'DPIIT Startup Recognition Certificate',
      'Company PAN, GST, and Udyam Registration',
      'Technical specification compliance sheet',
      'Bank mandate form for direct GeM treasury disbursements'
    ],
    applicationSteps: [
      '1. Register on the GeM portal (gem.gov.in) with your company PAN and GST.',
      '2. Navigate to "Startup Runway" on GeM and link your DPIIT DIPP number.',
      '3. Search for open government bids in your domain (software, hardware, services, security).',
      '4. Submit your technical and financial bid claiming exemption from prior turnover and experience under GFR Rule 173(i).',
      '5. Once awarded, payments are settled directly via GeM within 10 days of service sign-off.'
    ],
    gotchasAndNuances: [
      'Exemption applies to turnover and experience, NOT to technical compliance or security certifications.',
      'Earnest Money Deposit (EMD) is also 100% waived for DPIIT startups.'
    ],
    stackingTips: [
      'Winning even one PSU pilot tender instantly proves market traction for your next VC round.',
      'Use GeM Startup Runway to showcase unique tech solutions directly to departmental buyers.'
    ],
    officialLink: 'https://gem.gov.in/',
    domain: 'gem.gov.in',
    tags: ['GeM', 'Government Tenders', 'Procurement', 'EMD Waiver', 'Public Sector'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['pvt_ltd', 'llp', 'partnership']
  },

  // 21. IDFC FIRST BANK - FIRST WINGS (3 YEARS ZERO BALANCE)
  {
    id: 'idfc-first-wings-account',
    slug: 'idfc-first-bank-first-wings-3year-zero-balance-account',
    title: 'IDFC FIRST Wings: 3-Year Zero-Balance Startup Account',
    category: 'banking',
    categoryLabel: 'Founder Current Account',
    provider: 'IDFC FIRST Bank',
    stateOrRegion: 'All States / Central',
    valueAmount: '3 Years (36 Mo) Zero MAB + Auto-Sweep Yield',
    badge: '3-Year Zero Balance',
    approvalTimeline: '2 to 4 business days via digital doorstep KYC',
    executiveSummary: 'Full 3-year waiver (36 months) on Non-Maintenance Charges (NMC) with zero Minimum Average Balance commitments, plus automated BRAVO auto-sweep where idle runway cash automatically earns high liquid FD interest without locking withdrawal flexibility.',
    whyFoundersCare: 'Standard business accounts penalize early startups if balances drop below ₹50,000. IDFC gives a full 36-month cushion while turning idle venture capital into high-yield liquidity, plus free access to physical startup lounges (e.g. Koramangala Bengaluru).',
    eligibility: [
      'Private Limited Company, LLP, Registered Partnership, or Sole Proprietorship',
      'Entity incorporated for not more than 10 years',
      'Available for bootstrapped and VC-funded startups alike'
    ],
    documentsRequired: [
      'Certificate of Incorporation / Partnership Deed / Udyam Certificate',
      'Company PAN Card & Board Resolution / Authorization Letter',
      'Director / Partner KYC (Aadhaar & PAN)',
      'Registered office utility bill or lease agreement'
    ],
    applicationSteps: [
      '1. Apply via the IDFC FIRST Wings portal or partner incubators.',
      '2. Dedicated startup relationship manager coordinates digital doorstep verification.',
      '3. Instant account number and IFSC allocation within 48 hours.',
      '4. Activate auto-sweep feature on Internet Banking to earn yield on idle capital.'
    ],
    gotchasAndNuances: [
      'Account enjoys 36-month waiver; after 3 years, standard account balance tiers apply unless extended by portfolio terms.',
      'Auto-sweep interest is taxable as business income.'
    ],
    stackingTips: [
      'Use IDFC corporate expense credit cards to pay for AWS and Google Ads to automate expense tracking.',
      'Stack with Stripe/Razorpay for immediate inward merchant settlement.'
    ],
    officialLink: 'https://www.idfcfirstbank.com/business-banking/startup-banking',
    domain: 'idfcfirstbank.com',
    tags: ['Banking', 'Zero Balance', '3 Years MAB', 'IDFC FIRST Wings', 'Auto-Sweep'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['pvt_ltd', 'llp', 'partnership', 'sole_proprietorship']
  },

  // 22. INDUSIND BANK - INDUSSTARTUP (3-YEAR WAIVER)
  {
    id: 'indusind-startup-program',
    slug: 'indusind-bank-indusstartup-3year-charge-waiver',
    title: 'IndusInd IndusStartUp: 3-Year Charge Waiver & 250+ APIs',
    category: 'banking',
    categoryLabel: 'Founder Current Account',
    provider: 'IndusInd Bank',
    stateOrRegion: 'All States / Central',
    valueAmount: '3 Years Non-Maintenance Waiver + 250+ Free APIs',
    badge: '3-Year Zero Balance',
    approvalTimeline: '3 to 5 business days',
    executiveSummary: 'Full 3-year waiver on non-maintenance charges for early and growth startups, bundled with 250+ developer APIs for automated bulk payouts, pre-integrated payment gateway onboarding, and specialized corporate salary accounts.',
    whyFoundersCare: 'Built for tech companies needing API banking (instant user withdrawals, automated vendor disbursements, escrow services) without paying hefty enterprise setup fees.',
    eligibility: [
      'DPIIT-recognized startup or incubated company',
      'Pvt Ltd, LLP, or registered partnership up to 10 years vintage'
    ],
    documentsRequired: [
      'Incorporation Certificate & DPIIT Certificate',
      'Entity PAN Card & GST Registration',
      'Director KYC and Board Resolution'
    ],
    applicationSteps: [
      '1. Fill the IndusStartUp inquiry form online.',
      '2. Pitch your tech use cases to the fintech relationship manager.',
      '3. Complete biometric KYC and receive API sandbox keys.'
    ],
    gotchasAndNuances: [
      'API access requires basic IP whitelisting and security verification.',
      'Waives non-maintenance charges for 3 years from opening date.'
    ],
    stackingTips: [
      'Use their automated escrow API for marketplace models to remain RBI compliant.',
      'Stack with AWS Activate for seamless cloud infra payments.'
    ],
    officialLink: 'https://www.indusind.com/in/en/business/accounts/indus-startup.html',
    domain: 'indusind.com',
    tags: ['Banking', 'IndusInd', '3 Years Zero Balance', 'API Banking', 'Payouts'],
    founderStage: ['bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['pvt_ltd', 'llp', 'partnership']
  },

  // 23. YES BANK - YES HEADSTART-UP (3-YEAR NO BALANCE COMMITMENT)
  {
    id: 'yes-bank-headstartup',
    slug: 'yes-bank-headstartup-3year-zero-balance-escrow',
    title: 'YES HeadSTART-UP: 3-Year Zero Balance & Escrow Suite',
    category: 'banking',
    categoryLabel: 'Founder Current Account',
    provider: 'YES Bank',
    stateOrRegion: 'All States / Central',
    valueAmount: '3-Year Zero Balance Commitment + Discounted Remittance',
    badge: '3-Year Zero Balance',
    approvalTimeline: '2 to 4 business days',
    executiveSummary: 'Dedicated startup current account with zero balance commitment for the first 3 years, custom escrow management for fintech/marketplaces, and discounted foreign currency margins for inward wires.',
    whyFoundersCare: 'Marketplace founders get legal digital escrow accounts without spending lakhs on customized corporate banking legalities.',
    eligibility: [
      'Startups incorporated under 10 years',
      'Pvt Ltd, LLP, or Registered Partnership'
    ],
    documentsRequired: [
      'Certificate of Incorporation & MoA/AoA',
      'DPIIT Certificate or Incubator reference',
      'Directors KYC and Address Proof'
    ],
    applicationSteps: [
      '1. Apply through YES Bank Startup Desk.',
      '2. Relationship manager reviews business model and assigns virtual account rails.',
      '3. Inward remittance setup configured with preferential exchange rates.'
    ],
    gotchasAndNuances: [
      'Zero balance commitment holds for 36 months.',
      'Custom escrow requires standard bipartite legal agreement.'
    ],
    stackingTips: [
      'Lock Purpose Code P0802 for inward SaaS subscriptions to auto-generate e-FIRS.',
      'Combine with GST LUT for 0% tax exports.'
    ],
    officialLink: 'https://www.yesbank.in/business-banking/yes-headstartup',
    domain: 'yesbank.in',
    tags: ['Banking', 'YES Bank', '3 Years Zero Balance', 'Escrow', 'Forex'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['pvt_ltd', 'llp', 'partnership']
  },

  // 24. MERCURY US CURRENT ACCOUNT & 5M FDIC
  {
    id: 'mercury-bank-startup',
    slug: 'mercury-bank-us-fdic-startup-account',
    title: 'Mercury: $5M FDIC US Inward Account & 4.5%+ Treasury',
    category: 'banking',
    categoryLabel: 'Global Startup Banking',
    provider: 'Mercury (Choice Financial Group / Evolve Bank & Trust)',
    stateOrRegion: 'Global / US Entities',
    valueAmount: '$5 Million FDIC Insurance + 4.5%+ Treasury Yield',
    badge: 'Global US Banking',
    approvalTimeline: '24 to 72 hours 100% online',
    executiveSummary: 'Full-featured US checking and savings accounts for Delaware C-Corps and foreign entities with $5M FDIC insurance via sweep networks, zero monthly fees, zero minimums, and automated treasury yields on idle USD.',
    whyFoundersCare: 'Essential for founders accepting US investor checks (YC, Techstars, US angels), charging international customers on Stripe US, or paying US SaaS vendors without high cross-border wire penalties.',
    eligibility: [
      'Delaware C-Corp, US LLC, or international business with US EIN',
      'Valid passport for international founders (Indian citizens fully eligible)'
    ],
    documentsRequired: [
      'US Certificate of Incorporation (e.g. from Stripe Atlas / Clerky)',
      'IRS Form CP575 / 147C (EIN Confirmation Letter)',
      'Founder International Passport'
    ],
    applicationSteps: [
      '1. Open account online at mercury.com with your US company documents.',
      '2. Link US Stripe account and transfer investor capital.',
      '3. Deploy funds into Mercury Treasury for automated safe yields.'
    ],
    gotchasAndNuances: [
      'Requires registered US corporate entity (costs ~$500 on Stripe Atlas).',
      'Must file annual Delaware franchise tax and US federal Form 1120/5472.'
    ],
    stackingTips: [
      'Pair with Indian Wholly Owned Subsidiary (WOS) via Cost-Plus agreement.',
      'Unlock $150k in partner SaaS perks across AWS, Brex, and Carta.'
    ],
    officialLink: 'https://mercury.com/',
    domain: 'mercury.com',
    tags: ['Global', 'Mercury', 'Delaware', 'FDIC', 'US Banking', 'Treasury'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['delaware_c_corp']
  },

  // 25. ANTHROPIC CLAUDE FOR STARTUPS
  {
    id: 'anthropic-claude-startups',
    slug: 'anthropic-claude-for-startups-credits',
    title: 'Anthropic Claude for Startups ($25k–$100k API Credits)',
    category: 'cloud',
    categoryLabel: 'AI & Compute Grants',
    provider: 'Anthropic PBC',
    stateOrRegion: 'Global / All India',
    valueAmount: '$25,000 to $100,000 in Claude API Credits',
    badge: 'AI Model Credits',
    approvalTimeline: '1 to 3 weeks via partner accelerators or direct application',
    executiveSummary: 'Substantial API credits to build on Claude 3.5 Sonnet, Haiku, and Opus models, with extended context windows (200k tokens) and computer-use agent capabilities.',
    whyFoundersCare: 'Building AI agents or LLM apps consumes thousands of dollars monthly in inference costs. Anthropic credits give you 12–18 months of free AI infrastructure.',
    eligibility: [
      'Early-stage AI-first startup with working prototype',
      'Associated with recognized venture funds, incubators, or technical accelerators'
    ],
    documentsRequired: [
      'Company domain and working prototype demo link',
      'Architectural description of how Claude models are utilized'
    ],
    applicationSteps: [
      '1. Apply via the Anthropic startup program or partner portal.',
      '2. Submit API architecture and token consumption projections.',
      '3. Credits applied directly to your Anthropic Console organization.'
    ],
    gotchasAndNuances: [
      'Credits typically valid for 12 months from issuance.',
      'Applies to direct Anthropic API usage (not AWS Bedrock/GCP Vertex unless specified).'
    ],
    stackingTips: [
      'Stack with Microsoft Founders Hub OpenAI credits to compare multi-model evaluations for free.',
      'Use Claude 3.5 Sonnet for complex coding and Haiku for high-speed background tasks.'
    ],
    officialLink: 'https://www.anthropic.com/',
    domain: 'anthropic.com',
    tags: ['AI Credits', 'Claude 3.5', 'Anthropic', 'LLM', 'Zero Burn'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['pvt_ltd', 'llp', 'delaware_c_corp']
  },

  // 26. NOTION FOR STARTUPS (UNLIMITED AI)
  {
    id: 'notion-for-startups',
    slug: 'notion-for-startups-free-plus-plan-and-ai',
    title: 'Notion for Startups: Up to 6 Months Free Plus + Unlimited AI',
    category: 'cloud',
    categoryLabel: 'SaaS Tooling',
    provider: 'Notion Labs Inc.',
    stateOrRegion: 'Global / All India',
    valueAmount: 'Up to 6 Months Free Plus Plan + Unlimited AI (~$1,200)',
    badge: 'Productivity Suite',
    approvalTimeline: 'Instant to 48 hours online',
    executiveSummary: 'Full access to Notion Plus plan with unlimited file uploads, team collaboration workspaces, and unlimited Notion AI for team documentation, PRDs, sprint planning, and investor updates.',
    whyFoundersCare: 'Centralizes company documentation, engineering roadmaps, and customer CRMs in one tool for zero cost during early team building.',
    eligibility: [
      'New Notion team workspace with company email domain',
      'Bootstrapped or affiliated with any startup community'
    ],
    documentsRequired: [
      'Company website URL and work email'
    ],
    applicationSteps: [
      '1. Apply at notion.so/startups with promo code or partner name.',
      '2. Credit is credited immediately to workspace billing.'
    ],
    gotchasAndNuances: [
      'Cannot be applied to workspaces with prior enterprise billing.',
      'Valid for 3 to 6 months depending on partner status.'
    ],
    stackingTips: [
      'Use free Notion templates for fundraising deal rooms and cap table tracking.',
      'Integrate with GitHub and Slack for automated engineering standups.'
    ],
    officialLink: 'https://www.notion.so/startups',
    domain: 'notion.so',
    tags: ['Notion', 'Productivity', 'Notion AI', 'Free SaaS', 'Documentation'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed'],
    entityTypes: ['pvt_ltd', 'llp', 'partnership', 'sole_proprietorship', 'delaware_c_corp']
  },

  // 27. HUBSPOT FOR STARTUPS (75% TO 90% OFF)
  {
    id: 'hubspot-for-startups',
    slug: 'hubspot-for-startups-crm-marketing-discount',
    title: 'HubSpot for Startups: 75% to 90% First-Year Discount',
    category: 'cloud',
    categoryLabel: 'Go-to-Market Suite',
    provider: 'HubSpot Inc.',
    stateOrRegion: 'Global / All India',
    valueAmount: 'Up to 90% Off Year 1 (Saves ₹4L–₹8L)',
    badge: 'GTM & CRM Suite',
    approvalTimeline: '2 to 3 business days',
    executiveSummary: 'Massive 75% to 90% discount on HubSpot Enterprise and Professional software (Marketing Hub, Sales Hub, Service Hub, and CMS) for early-stage companies.',
    whyFoundersCare: 'Enterprise CRM and email sequencing software is usually unaffordable for seed startups. This allows high-velocity outbound sales and inbound lead funnels from Day 1.',
    eligibility: [
      'Bootstrapped or raised under $2M in seed capital',
      'Affiliated with approved incubator, accelerator, or VC'
    ],
    documentsRequired: [
      'Pitch deck or partner affiliation verification'
    ],
    applicationSteps: [
      '1. Apply via hubspot.com/startups.',
      '2. Select your funding tier (Under $2M = up to 90% off).',
      '3. Onboarding team applies discount directly to monthly or annual billing.'
    ],
    gotchasAndNuances: [
      'Discount scales down to 50% in Year 2 and 25% in Year 3.',
      'Must purchase annual plan to lock lowest pricing.'
    ],
    stackingTips: [
      'Integrate with Segment and SendGrid to automate product onboarding emails.',
      'Use HubSpot free meeting scheduler on your pitch deck landing page.'
    ],
    officialLink: 'https://www.hubspot.com/startups',
    domain: 'hubspot.com',
    tags: ['HubSpot', 'CRM', 'Sales', 'Marketing', 'Discounts'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['pvt_ltd', 'llp', 'delaware_c_corp']
  },

  // 28. TWILIO & SEGMENT STARTUP PACK ($25k CREDITS)
  {
    id: 'segment-twilio-startups',
    slug: 'segment-twilio-startups-25k-credits',
    title: 'Twilio & Segment: $25,000 CDP Credits + Free SendGrid',
    category: 'cloud',
    categoryLabel: 'Analytics & Email',
    provider: 'Twilio Segment',
    stateOrRegion: 'Global / All India',
    valueAmount: '$25,000 Segment Credits + 200k Free Emails/Mo',
    badge: 'Customer Data Platform',
    approvalTimeline: '3 to 5 business days',
    executiveSummary: 'Access to Segment Team plan ($25,000 value) for 12 to 24 months, allowing clean user tracking across mobile and web, plus SendGrid Pro credits for transactional OTP and marketing emails.',
    whyFoundersCare: 'Solves messy analytics tracking early. Instead of writing custom integrations for 10 tools, write one Segment tracking snippet and pipe data anywhere for free.',
    eligibility: [
      'Incorporated for less than 3 years',
      'Raised under $5 Million in equity funding'
    ],
    documentsRequired: [
      'Company URL and basic founder bio'
    ],
    applicationSteps: [
      '1. Submit application at segment.com/startups.',
      '2. Enter partner code or accelerator name.',
      '3. Set up tracking sources and unlock $25k in credit.'
    ],
    gotchasAndNuances: [
      'Credits expire after 1 year (can be renewed for select seed companies).',
      'Requires domain DNS verification for SendGrid email authentication (DKIM/SPF).'
    ],
    stackingTips: [
      'Pipe Segment event streams into BigQuery (covered under your Google Cloud $350k grant).',
      'Send custom event-triggered emails via SendGrid for user re-activation.'
    ],
    officialLink: 'https://segment.com/startups/',
    domain: 'segment.com',
    tags: ['Segment', 'Twilio', 'SendGrid', 'Analytics', 'Email Infrastructure'],
    founderStage: ['bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['pvt_ltd', 'llp', 'delaware_c_corp']
  },

  // 29. MIXPANEL FOR STARTUPS ($50,000 CREDITS)
  {
    id: 'mixpanel-for-startups',
    slug: 'mixpanel-for-startups-50k-credits',
    title: 'Mixpanel for Startups: $50,000 Product Analytics Credits',
    category: 'cloud',
    categoryLabel: 'Product Analytics',
    provider: 'Mixpanel Inc.',
    stateOrRegion: 'Global / All India',
    valueAmount: '$50,000 in Growth Plan Credits for 1 Year',
    badge: 'Product Analytics',
    approvalTimeline: '24 to 48 hours online',
    executiveSummary: 'Full access to Mixpanel Growth Plan with unlimited saved reports, cohort analysis, conversion funnel drop-offs, and behavioral retention tracking for up to 100 Million monthly events.',
    whyFoundersCare: 'Product-market fit requires measuring exact user drop-off points. Mixpanel gives enterprise-grade behavioral cohorts for free without bogging down your engineering team.',
    eligibility: [
      'Incorporated less than 5 years ago',
      'Raised under $8 Million in funding'
    ],
    documentsRequired: [
      'Company email domain and LinkedIn'
    ],
    applicationSteps: [
      '1. Register a free Mixpanel account.',
      '2. Apply via mixpanel.com/startups.',
      '3. Enter company details to receive $50,000 in credits immediately.'
    ],
    gotchasAndNuances: [
      'Valid for 12 months; plan your event tracking carefully to not exceed event quotas.'
    ],
    stackingTips: [
      'Pipe data from Segment to Mixpanel with zero code.',
      'Use Mixpanel funnel charts directly in your Series A investor deck.'
    ],
    officialLink: 'https://mixpanel.com/startups/',
    domain: 'mixpanel.com',
    tags: ['Mixpanel', 'Analytics', 'Funnels', 'Cohorts', 'Free SaaS'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['pvt_ltd', 'llp', 'delaware_c_corp']
  },

  // 30. PMEGP MANUFACTURING & D2C CAPITAL SUBSIDY (UP TO 35%)
  {
    id: 'pmegp-capital-subsidy',
    slug: 'pmegp-manufacturing-d2c-capital-subsidy',
    title: 'PMEGP: 15% to 35% Non-Repayable Capital Subsidy on ₹50L Loan',
    category: 'grant',
    categoryLabel: 'Government Capital Subsidy',
    provider: 'KVIC, Ministry of MSME, Govt of India',
    stateOrRegion: 'All States / Central',
    valueAmount: '15% to 35% Non-Repayable Subsidy on ₹50 Lakhs Loan',
    badge: '35% Govt Subsidy',
    approvalTimeline: '6 to 12 weeks via District Task Force & Nodal Bank',
    executiveSummary: 'Credit-linked government subsidy scheme providing bank term loans up to ₹50 Lakhs for manufacturing / processing units (and ₹20 Lakhs for service sector) with a direct, non-repayable government capital subsidy of 15% to 35% deposited into a lock-in subsidy reserve.',
    whyFoundersCare: 'For hardware, consumer goods, foodtech, and D2C startups needing machinery, the government pays up to ₹17.5 Lakhs of your project cost as a free capital grant, meaning you only repay 65% of the debt.',
    eligibility: [
      'Individual entrepreneurs, Sole Proprietors, Partnerships, LLPs, or Pvt Ltd companies',
      'For projects over ₹10L: Minimum 8th class educational pass',
      'General category urban: 15% subsidy; Special category (Women, SC/ST, Ex-servicemen) or rural: Up to 35% subsidy'
    ],
    documentsRequired: [
      'Detailed Project Report (DPR) with machine quotations and 3-year cash flows',
      'Promoter Aadhaar, PAN, and Caste/Category certificate (if claiming 35%)',
      'Rural area certificate from Gram Panchayat (if claiming rural 35%)',
      'Land/lease proof for manufacturing workshop or cloud kitchen'
    ],
    applicationSteps: [
      '1. Submit online application on KVIC portal (kviconline.gov.in/pmegpeportal).',
      '2. District Task Force Committee (DLTFC) evaluates project DPR.',
      '3. Approved file forwarded to selected public sector or commercial bank.',
      '4. Bank sanctions loan and claims subsidy from KVIC.',
      '5. Complete 10-day Entrepreneurship Development Programme (EDP) training online.'
    ],
    gotchasAndNuances: [
      'Government subsidy is kept in a Term Deposit Receipt (TDR) for 3 years interest-free and adjusted against the loan principal on physical inspection.',
      'Cannot be availed if already received central government capital subsidies on the same machinery.'
    ],
    stackingTips: [
      'Combine with Mudra Tarun loan for additional working capital.',
      'Use state electric power subsidy in your DPR to show higher net operating margins.'
    ],
    officialLink: 'https://www.kviconline.gov.in/pmegpeportal/',
    domain: 'kviconline.gov.in',
    tags: ['PMEGP', 'Subsidy', 'Manufacturing', 'D2C', 'Hardware', 'KVIC'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed'],
    entityTypes: ['sole_proprietorship', 'partnership', 'llp', 'pvt_ltd']
  },

  // 31. MADHYA PRADESH STARTUP POLICY (MP-STARTUP)
  {
    id: 'mp-startup-policy',
    slug: 'madhya-pradesh-startup-sustenance-and-seed',
    title: 'Madhya Pradesh Startup Policy: ₹10k/Mo Sustenance & ₹30L Seed',
    category: 'stipend',
    categoryLabel: 'Monthly Living Cash & Seed Grant',
    provider: 'Department of MSME, Govt of Madhya Pradesh',
    stateOrRegion: 'Madhya Pradesh',
    valueAmount: '₹10k/Mo (1 Yr) + Up to ₹30L Seed Grant + 15% Co-Investment',
    badge: 'Monthly Cash & Grants',
    approvalTimeline: '4 to 8 weeks via recognized MP incubators',
    executiveSummary: 'Guaranteed monthly sustenance allowance of ₹10,000/month for 1 year, seed funding up to ₹30 Lakhs for raw materials, manpower, and testing via partner incubators, plus a 15% matching co-investment grant (up to ₹15 Lakhs) for startups raising private angel rounds.',
    whyFoundersCare: 'Indore and Bhopal have developed strong product and SaaS ecosystems with very low living costs. MP offers direct living support, lease rental subsidies, and equity matching.',
    eligibility: [
      'Registered entity with registered office in Madhya Pradesh',
      'DPIIT Recognition Certificate and MP Startup Portal registration',
      'Incubated at a recognized incubator within Madhya Pradesh'
    ],
    documentsRequired: [
      'Certificate of Incorporation & MP GST registration',
      'DPIIT Certificate and MP Startup registration ID',
      'Promoter Aadhaar and MP registered office proof',
      'Detailed proposal with milestone budget'
    ],
    applicationSteps: [
      '1. Register on the MP Startup Portal (mpmsme.gov.in).',
      '2. Link with an empanelled MP incubator (e.g. SVIC, IIM Indore, MANIT Bhopal).',
      '3. Submit application for Sustenance Allowance and Seed Grant.',
      '4. Attend the State Evaluation Committee presentation.',
      '5. Disbursals made in stages directly to the startup bank account.'
    ],
    gotchasAndNuances: [
      'Must maintain corporate registration in Madhya Pradesh for at least 3 years.',
      'Special 20% bonus on all financial subsidies for women-led startups.'
    ],
    stackingTips: [
      'Stack with Central SISFS seed grants via IIM Indore or AIC-AARTECH.',
      'Claim 100% patent filing fee reimbursement under the MP policy.'
    ],
    officialLink: 'https://mpmsme.gov.in/',
    domain: 'mpmsme.gov.in',
    tags: ['Madhya Pradesh', 'Indore', 'Bhopal', 'Sustenance', 'Seed Grant'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed'],
    entityTypes: ['pvt_ltd', 'llp', 'partnership']
  },

  // 32. GOA STARTUP POLICY & SALARY REIMBURSEMENTS
  {
    id: 'goa-startup-policy',
    slug: 'goa-startup-policy-salary-and-sustenance',
    title: 'Goa Startup Policy: ₹20k/Mo Sustenance + Employee Salary Rebate',
    category: 'stipend',
    categoryLabel: 'Founder Sustenance & Hiring Rebate',
    provider: 'Goa Startup Promotion Cell (SPC), DITEC, Govt of Goa',
    stateOrRegion: 'Goa',
    valueAmount: '₹20k/Mo Sustenance + Up to ₹25k/Mo per Hire Salary Rebate',
    badge: 'Salary & Living Rebates',
    approvalTimeline: '4 to 8 weeks via SPC Goa',
    executiveSummary: 'Living sustenance of ₹20,000/month for founders for 1 year, prototype grant up to ₹10 Lakhs, and a massive salary reimbursement scheme where the Goa government reimburses 50% of the salary of local Goan hires (up to ₹25,000/month per engineer) for 2 years.',
    whyFoundersCare: 'Allows remote and tech teams to set up engineering beachheads in Goa. The state literally pays half your engineering payroll, reducing company burn drastically.',
    eligibility: [
      'Registered entity with registered office in Goa',
      'Certified as a Goa Startup by the Startup Promotion Cell (SPC)',
      'At least 50% of permanent workforce or key promoters residing in Goa'
    ],
    documentsRequired: [
      'Certificate of Incorporation & Goa address proof',
      'DPIIT Recognition Certificate and SPC certification',
      'Employee muster roll and salary bank statements (for salary reimbursement)'
    ],
    applicationSteps: [
      '1. Apply on the Goa Startup Portal (startup.goa.gov.in).',
      '2. Receive official SPC Goa accreditation certificate.',
      '3. Submit quarterly claims for Sustenance Allowance and Salary Reimbursement.',
      '4. Inspection and direct RTGS reimbursement.'
    ],
    gotchasAndNuances: [
      'Salary reimbursement claims must be supported by bank transfers and PF/ESIC or standard employment contracts.',
      'Entities cannot shift out of Goa for 3 years post-disbursement.'
    ],
    stackingTips: [
      'Enjoy high-quality lifestyle in Panaji/North Goa with zero-stress office rentals.',
      'Stack with Microsoft Founders Hub and Google Cloud for 100% remote software stack.'
    ],
    officialLink: 'https://startup.goa.gov.in/',
    domain: 'startup.goa.gov.in',
    tags: ['Goa', 'Salary Subsidy', 'Sustenance', 'Hiring Rebate', 'Zero Burn'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed', 'seed'],
    entityTypes: ['pvt_ltd', 'llp']
  },

  // 33. PUNJAB STARTUP POLICY
  {
    id: 'punjab-startup-hub',
    slug: 'punjab-startup-hub-sustenance-and-seed',
    title: 'Punjab Startup Hub: ₹15k/Mo Sustenance & Electricity Exemption',
    category: 'stipend',
    categoryLabel: 'Living Cash & Power Rebate',
    provider: 'Startup Punjab, Department of Industries & Commerce, Govt of Punjab',
    stateOrRegion: 'Punjab',
    valueAmount: '₹15,000/Mo Sustenance (1 Yr) + ₹3L Seed + 100% Power Duty Exemption',
    badge: 'Monthly Cash & Power Rebate',
    approvalTimeline: '4 to 6 weeks via Startup Punjab Nodal Cell',
    executiveSummary: 'Direct monthly living stipend of ₹15,000/month for 1 year, seed funding up to ₹3 Lakhs, 100% exemption on electricity duty for 7 years, and lease rental subsidies up to ₹10,000/month in Mohali and Ludhiana.',
    whyFoundersCare: 'Mohali is rapidly growing as the tech sister city to Chandigarh. Low operational costs and 100% electric power subsidies give hardware and IT companies substantial savings.',
    eligibility: [
      'Entity registered in Punjab with active state GST or Udyam',
      'DPIIT-recognized and certified by Startup Punjab',
      'Incubated at a state-approved incubator (e.g. AIC-ISB Mohali, IIT Ropar)'
    ],
    documentsRequired: [
      'Certificate of Incorporation / Partnership Deed',
      'DPIIT Certificate and Startup Punjab profile',
      'Promoter Aadhaar and registered office lease in Punjab',
      'Pitch deck and business plan'
    ],
    applicationSteps: [
      '1. Register on Startup Punjab portal (pbindustries.gov.in).',
      '2. Submit application for Sustenance Allowance and Seed Capital.',
      '3. Attend evaluation meeting with District/State Steering Committee.',
      '4. Sanction letter issued with monthly bank deposits.'
    ],
    gotchasAndNuances: [
      'Must maintain active state tax and MCA filings in Punjab.',
      'Electricity duty exemption must be linked to commercial meter account.'
    ],
    stackingTips: [
      'Incubate at AIC-ISB Mohali or IIT Ropar to access world-class labs and VC networks.',
      'Stack with SISFS seed funding via Punjab partner incubators.'
    ],
    officialLink: 'https://pbindustries.gov.in/',
    domain: 'pbindustries.gov.in',
    tags: ['Punjab', 'Mohali', 'Chandigarh', 'Sustenance', 'Electricity Exemption'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed'],
    entityTypes: ['pvt_ltd', 'llp', 'partnership']
  },

  // 34. ASSAM STARTUP NEST (MAS)
  {
    id: 'assam-startup-nest',
    slug: 'assam-startup-nest-sustenance-and-scaleup',
    title: 'Startup Assam (MAS): ₹20k/Mo Sustenance + ₹5L Idea Grant',
    category: 'stipend',
    categoryLabel: 'Monthly Living Cash & Grants',
    provider: 'Department of Industries & Commerce, Govt of Assam',
    stateOrRegion: 'Assam',
    valueAmount: '₹20,000/Mo Sustenance (1 Yr) + ₹5L Idea + Up to ₹50L Scaleup',
    badge: 'Monthly Cash & Grants',
    approvalTimeline: '4 to 6 weeks via Assam Startup Nest (Guwahati)',
    executiveSummary: 'Living sustenance of ₹20,000/month for 12 months, idea-stage grants up to ₹5 Lakhs, and matching scale-up capital up to ₹50 Lakhs for startups registered in Assam, operated out of the Assam Startup Nest at Guwahati.',
    whyFoundersCare: 'Gateway to Northeast India. Massive untapped regional markets in agritech, logistics, tea-tech, and healthtech with full government backing and zero founder equity dilution.',
    eligibility: [
      'Entity registered in Assam with registered office in the state',
      'DPIIT Recognition Certificate and Mukhyamantrir Atmanirbharshil Asom (MAS) registration'
    ],
    documentsRequired: [
      'Certificate of Incorporation & Assam address proof',
      'DPIIT Recognition Certificate',
      'Project proposal and milestone budget'
    ],
    applicationSteps: [
      '1. Apply via the Assam Startup Portal (startup.assam.gov.in).',
      '2. Pitch to the Assam Startup Nest evaluation committee at Ambari, Guwahati.',
      '3. Sanction letter issued with monthly sustenance disbursals.'
    ],
    gotchasAndNuances: [
      'Promoters must participate in scheduled incubation milestones.',
      'Grant tranches released against verified prototype demonstrations.'
    ],
    stackingTips: [
      'Access IIT Guwahati Technology Incubation Centre for advanced prototyping.',
      'Stack with North East Venture Fund (NEVF) for institutional venture debt.'
    ],
    officialLink: 'https://startup.assam.gov.in/',
    domain: 'startup.assam.gov.in',
    tags: ['Assam', 'Guwahati', 'Northeast', 'Sustenance', 'Idea Grant'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed'],
    entityTypes: ['pvt_ltd', 'llp', 'partnership']
  },

  // 35. ANDHRA PRADESH INNOVATION SOCIETY (APIS)
  {
    id: 'andhra-pradesh-innovation-society',
    slug: 'andhra-pradesh-apis-seed-and-incubation',
    title: 'AP Innovation Society (APIS): ₹10L Seed Grant & Vizag Hub',
    category: 'grant',
    categoryLabel: 'Non-Dilutive Seed Grant',
    provider: 'ITE&C Department, Govt of Andhra Pradesh',
    stateOrRegion: 'Andhra Pradesh',
    valueAmount: 'Up to ₹10 Lakhs Seed Grant + Subsidized Co-Working',
    badge: 'Seed Grant & Lab Space',
    approvalTimeline: '4 to 8 weeks via APIS Innovation Hubs',
    executiveSummary: 'Non-dilutive seed capital support up to ₹10 Lakhs, free or heavily subsidized plug-and-play co-working seats at the Millennium Tower / Vizag Tech Park, and patent filing reimbursements up to ₹2 Lakhs.',
    whyFoundersCare: 'Visakhapatnam (Vizag) is a major port and IT center. APIS provides immediate physical infrastructure and grant cash so founders do not burn private capital on office leases and basic servers.',
    eligibility: [
      'Entity registered in Andhra Pradesh',
      'DPIIT Recognition Certificate and APIS portal registration'
    ],
    documentsRequired: [
      'Incorporation Certificate & AP GST registration',
      'DPIIT Certificate and pitch deck',
      'Promoter Aadhaar and bank details'
    ],
    applicationSteps: [
      '1. Register on the AP Innovation Society portal (apis.ap.gov.in).',
      '2. Submit application for Incubation Space and Seed Grant.',
      '3. Pitch before the APIS Technical Screening Committee.',
      '4. Sanction letter and milestone-based disbursement.'
    ],
    gotchasAndNuances: [
      'Registered office must remain in Andhra Pradesh.',
      'Seed funds must be spent on product testing and prototype verification.'
    ],
    stackingTips: [
      'Stack with Andhra Pradesh MedTech Zone (AMTZ) for world-class medical device manufacturing.',
      'Pair with Google for Startups cloud credits.'
    ],
    officialLink: 'https://apis.ap.gov.in/',
    domain: 'apis.ap.gov.in',
    tags: ['Andhra Pradesh', 'Vizag', 'APIS', 'Seed Grant', 'Co-Working'],
    founderStage: ['idea', 'bootstrapped', 'pre_seed'],
    entityTypes: ['pvt_ltd', 'llp', 'partnership']
  }
];
