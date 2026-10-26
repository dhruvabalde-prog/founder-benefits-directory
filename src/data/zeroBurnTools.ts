export interface ZeroBurnTool {
  id: string;
  name: string;
  department: 'engineering' | 'product_ai' | 'finance_legal' | 'sales_marketing' | 'ops_hr';
  departmentLabel: string;
  tier: 'free_forever' | 'startup_credits' | 'discount_90';
  tierLabel: string;
  valueAmount: string;
  tagline: string;
  freeOffering: string;
  eligibilityOrHack: string;
  officialLink: string;
  tags: string[];
}

export const ZERO_BURN_TOOLS: ZeroBurnTool[] = [
  // Engineering & Infrastructure
  {
    id: 'supabase-free',
    name: 'Supabase',
    department: 'engineering',
    departmentLabel: 'Engineering',
    tier: 'free_forever',
    tierLabel: 'Free Forever',
    valueAmount: '$300/Yr Free Tier',
    tagline: 'PostgreSQL database, authentication, and edge functions with zero setup burn.',
    freeOffering: '2 free projects, 500MB database, 50,000 monthly active users (Auth), 1GB storage, 2GB bandwidth.',
    eligibilityOrHack: 'Available instantly without a credit card. Perfect for running production backends for your first 5,000 customers.',
    officialLink: 'https://supabase.com/pricing',
    tags: ['Database', 'Postgres', 'Auth', 'Backend', 'Engineering']
  },
  {
    id: 'cloudflare-pages-workers',
    name: 'Cloudflare Pages & Workers',
    department: 'engineering',
    departmentLabel: 'Engineering',
    tier: 'free_forever',
    tierLabel: 'Free Forever',
    valueAmount: '$1,200/Yr Free Value',
    tagline: 'Global CDN, DDoS shielding, serverless workers, and static site hosting.',
    freeOffering: 'Unlimited static requests, 100,000 free Worker requests per day, free SSL certificates, DDoS mitigation.',
    eligibilityOrHack: 'Zero credit card required. Stack with custom domains for zero-cost hosting of web apps and landing pages.',
    officialLink: 'https://www.cloudflare.com/plans/',
    tags: ['CDN', 'Hosting', 'DNS', 'Serverless', 'Engineering']
  },
  {
    id: 'github-for-startups-tool',
    name: 'GitHub for Startups',
    department: 'engineering',
    departmentLabel: 'Engineering',
    tier: 'startup_credits',
    tierLabel: 'Startup Credits',
    valueAmount: '$5,000 Value (20 Seats Free)',
    tagline: '20 seats of GitHub Enterprise Cloud free for 12 months + Copilot discounts.',
    freeOffering: 'Enterprise single-sign-on (SSO), 50,000 Actions CI/CD runner minutes/mo, advanced CodeQL vulnerability alerts.',
    eligibilityOrHack: 'Seed to Series A startups or any founder affiliated with an approved incubator/accelerator or YC Startup School.',
    officialLink: 'https://github.com/enterprise/startups',
    tags: ['DevOps', 'Git', 'CI/CD', 'Security', 'Engineering']
  },
  {
    id: 'aws-activate-tool',
    name: 'AWS Activate Founders',
    department: 'engineering',
    departmentLabel: 'Engineering',
    tier: 'startup_credits',
    tierLabel: 'Startup Credits',
    valueAmount: '$1,000 – $100,000 Credits',
    tagline: 'Bootstrapped founders get $1,000; Incubated/VC-backed get up to $100,000 AWS compute credits.',
    freeOffering: 'Full EC2, S3, RDS, and AWS Bedrock (Claude 3.5 Sonnet & Llama 3) usage covered.',
    eligibilityOrHack: 'Bootstrapped tier requires company website and corporate domain email (founder@company.com). Never use @gmail.com.',
    officialLink: 'https://aws.amazon.com/activate/',
    tags: ['Cloud', 'AWS', 'Bedrock', 'Hosting', 'Engineering']
  },
  {
    id: 'mongodb-atlas-startups',
    name: 'MongoDB for Startups',
    department: 'engineering',
    departmentLabel: 'Engineering',
    tier: 'startup_credits',
    tierLabel: 'Startup Credits',
    valueAmount: '$500 – $5,000 Credits',
    tagline: 'Free Atlas database credits + technical architectural consultation.',
    freeOffering: '$500 in Atlas credits for early stage, up to $5,000 for affiliated startups, plus 1:1 consulting.',
    eligibilityOrHack: 'Available to startups that have not previously received Atlas promotional credits.',
    officialLink: 'https://www.mongodb.com/startups',
    tags: ['NoSQL', 'Database', 'Atlas', 'Engineering']
  },

  // Product & AI
  {
    id: 'posthog-startups',
    name: 'PostHog for Startups',
    department: 'product_ai',
    departmentLabel: 'Product & AI',
    tier: 'startup_credits',
    tierLabel: 'Startup Credits',
    valueAmount: '$50,000 in Free Credits',
    tagline: 'Product analytics, session replays, feature flags, and A/B testing suite.',
    freeOffering: '$50,000 credit valid for 1 year (covers 30M+ events, 50,000 session replays) + free PostHog merch.',
    eligibilityOrHack: 'Company under 2 years old, raised less than $5M in institutional funding. Extremely fast 24-hr approval.',
    officialLink: 'https://posthog.com/startups',
    tags: ['Analytics', 'Session Replay', 'Feature Flags', 'Product']
  },
  {
    id: 'microsoft-azure-openai-tool',
    name: 'Microsoft Founders Hub (OpenAI)',
    department: 'product_ai',
    departmentLabel: 'Product & AI',
    tier: 'startup_credits',
    tierLabel: 'Startup Credits',
    valueAmount: '$150k Azure + $2.5k-$20k OpenAI',
    tagline: 'Private enterprise deployment of GPT-4o and Azure AI models with zero public training.',
    freeOffering: '$1,000 to $150,000 Azure credits with milestone unlocks, plus $2,500 to $20,000 direct OpenAI credits.',
    eligibilityOrHack: 'Zero funding required! Open to ANY founder at idea stage. No incorporation certificate needed to start.',
    officialLink: 'https://foundershub.startups.microsoft.com/',
    tags: ['OpenAI', 'GPT-4o', 'AI Credits', 'Product']
  },
  {
    id: 'mixpanel-startups',
    name: 'Mixpanel for Startups',
    department: 'product_ai',
    departmentLabel: 'Product & AI',
    tier: 'startup_credits',
    tierLabel: 'Startup Credits',
    valueAmount: '1 Year Free Growth Plan ($50k Value)',
    tagline: 'Advanced funnel conversions, cohort retention analysis, and user tracking.',
    freeOffering: 'Full Growth plan with up to 100M events/month free for 12 months.',
    eligibilityOrHack: 'Company under 5 years old with under $8M raised. Simple application form with company LinkedIn.',
    officialLink: 'https://mixpanel.com/startups/',
    tags: ['Analytics', 'Funnels', 'Retention', 'Product']
  },

  // Finance & Legal
  {
    id: 'idfc-first-zero-mab',
    name: 'IDFC FIRST Bank Startup Current Account',
    department: 'finance_legal',
    departmentLabel: 'Finance & Legal',
    tier: 'free_forever',
    tierLabel: 'Zero Burn',
    valueAmount: '3 Years 0 MAB (Saves ₹36,000+)',
    tagline: 'Zero minimum balance penalty for 3 years, free 100 cheque leaves, free outward NEFT/RTGS/IMPS.',
    freeOffering: 'Zero balance commitment for 36 months, dedicated startup relationship manager, zero forex markup on card spend.',
    eligibilityOrHack: 'Available to Sole Proprietorship, LLP, Partnership, and Private Limited startups registered within 3 years.',
    officialLink: 'https://www.idfcfirstbank.com/business-banking/startups',
    tags: ['Banking', 'Zero Balance', 'Current Account', 'Finance']
  },
  {
    id: 'icici-ibank-startup',
    name: 'ICICI iStartup 2.0 Platinum',
    department: 'finance_legal',
    departmentLabel: 'Finance & Legal',
    tier: 'free_forever',
    tierLabel: 'Zero Burn',
    valueAmount: '1 Year 0 MAB + Free Inward Remittance',
    tagline: '12-month zero balance waiver, automated e-FIRC issuance for international export receipts.',
    freeOffering: 'Dedicated trade portal, free e-FIRC generation for Stripe/Paddle inflows, zero-cost digital escrow facilities.',
    eligibilityOrHack: 'Incorporated < 5 years. Great for SaaS companies billing US/EU clients needing fast FIRC clearances.',
    officialLink: 'https://www.icicibank.com/business-banking/startup',
    tags: ['Banking', 'Forex', 'eFIRC', 'Current Account', 'Finance']
  },
  {
    id: 'stripe-atlas-perk',
    name: 'Stripe Atlas Discount',
    department: 'finance_legal',
    departmentLabel: 'Finance & Legal',
    tier: 'discount_90',
    tierLabel: 'Founder Discount',
    valueAmount: '$250 Off + $20k Fee-Free Processing',
    tagline: 'Incorporate a Delaware C-Corp, US bank account, and Stripe processing in 3 days.',
    freeOffering: '$250 discount on standard $500 fee + $20,000 in zero-fee credit card payment processing.',
    eligibilityOrHack: 'Apply via YC Startup School or AWS Activate partner links to auto-apply the 50% discount waiver.',
    officialLink: 'https://stripe.com/atlas',
    tags: ['Delaware', 'C-Corp', 'Payment Gateway', 'Legal']
  },
  {
    id: 'wave-invoicing-free',
    name: 'Wave Invoicing & Accounting',
    department: 'finance_legal',
    departmentLabel: 'Finance & Legal',
    tier: 'free_forever',
    tierLabel: 'Free Forever',
    valueAmount: '₹15,000/Yr Invoicing Value',
    tagline: '100% free professional invoicing, receipt scanning, and GST-ready ledger accounting.',
    freeOffering: 'Unlimited client invoicing, multi-currency billing, expense tracking, and financial report exports.',
    eligibilityOrHack: 'Free forever without any trial period or card lock. Ideal for solo consultants and early dev agencies.',
    officialLink: 'https://www.waveapps.com/invoicing',
    tags: ['Invoicing', 'Accounting', 'Bookkeeping', 'Finance']
  },

  // Sales & Marketing
  {
    id: 'apollo-io-free',
    name: 'Apollo.io B2B Lead Engine',
    department: 'sales_marketing',
    departmentLabel: 'Sales & Marketing',
    tier: 'free_forever',
    tierLabel: 'Free Forever',
    valueAmount: '$1,200/Yr Sales Value',
    tagline: 'Access 275M+ verified B2B emails, phone numbers, and automated cold email sequences.',
    freeOffering: '60 mobile credits/year, 120 export credits/year, unlimited email sequence sends, LinkedIn Chrome extension.',
    eligibilityOrHack: 'Sign up with work email. Generates verified founder, CTO, and VP emails for zero outbound ad spend.',
    officialLink: 'https://www.apollo.io/pricing',
    tags: ['B2B Sales', 'Outbound', 'Leads', 'Cold Email', 'Marketing']
  },
  {
    id: 'brevo-free-marketing',
    name: 'Brevo (formerly Sendinblue)',
    department: 'sales_marketing',
    departmentLabel: 'Sales & Marketing',
    tier: 'free_forever',
    tierLabel: 'Free Forever',
    valueAmount: '₹10,000/Yr Email Value',
    tagline: 'Send up to 300 automated newsletter and transactional emails every single day forever.',
    freeOffering: 'Unlimited contact storage, 300 emails/day (9,000 emails/month free), responsive drag-and-drop builder.',
    eligibilityOrHack: 'No credit card needed. Does not lock contacts behind paywalls unlike Mailchimp.',
    officialLink: 'https://www.brevo.com/pricing/',
    tags: ['Email Marketing', 'Newsletters', 'Transactional', 'Marketing']
  },
  {
    id: 'notion-for-startups',
    name: 'Notion for Startups',
    department: 'ops_hr',
    departmentLabel: 'Operations & HR',
    tier: 'startup_credits',
    tierLabel: 'Startup Credits',
    valueAmount: 'Up to 6 Months Free Plus ($6,000 Value)',
    tagline: 'Notion Plus plan with unlimited AI features for team wikis, project roadmaps, and CRM.',
    freeOffering: '3 to 6 months of free Notion Plus with unlimited AI generation for your entire team.',
    eligibilityOrHack: 'Open to seed-stage companies or apply using partner code from GitHub for Startups / Product Hunt.',
    officialLink: 'https://www.notion.so/startups',
    tags: ['Wikis', 'Docs', 'Notion AI', 'Operations']
  },
  {
    id: 'loom-for-startups',
    name: 'Loom for Startups',
    department: 'ops_hr',
    departmentLabel: 'Operations & HR',
    tier: 'startup_credits',
    tierLabel: 'Startup Credits',
    valueAmount: '1 Year Free Loom Business ($3,000 Value)',
    tagline: 'Asynchronous video messaging for product demos, team bug reports, and investor updates.',
    freeOffering: '1 year of free Loom Business with unlimited video recording time, AI transcripts, and custom branding.',
    eligibilityOrHack: 'Seed-funded companies or affiliated with incubators. Eliminates 50% of unnecessary Zoom meetings.',
    officialLink: 'https://www.loom.com/startups',
    tags: ['Async Video', 'Demos', 'Remote Work', 'Operations']
  }
];
