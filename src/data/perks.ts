import { BenefitItem } from '../types';

export const SAAS_PERKS: BenefitItem[] = [
  {
    id: 'aws-activate',
    title: 'AWS Activate (Founders vs Portfolio Tiers)',
    category: 'saas_perks',
    subCategory: 'cloud_infra',
    provider: 'Amazon Web Services (AWS)',
    shortDescription: '$1,000 for self-funded/bootstrapped founders; Up to $100,000 credits + $10,000 business support for accelerator/incubator/VC funded startups.',
    fullDescription: 'The most popular cloud credits program in the world. AWS offers two clear tracks: AWS Activate Founders (designed for bootstrapped, idea-stage startups with no institutional funding) and AWS Activate Portfolio (for startups affiliated with an approved incubator, accelerator like YC, Techstars, or VC fund).',
    valueAmount: '$1,000 to $100,000 USD Cloud Credits',
    currencyOrType: 'USD',
    eligibility: [
      'Founders Tier: Bootstrapped or self-funded, company website active, valid AWS Account ID, incorporated <10 years, have not previously received AWS Activate Portfolio credits',
      'Portfolio Tier: Affiliated with an authorized AWS Activate Provider (Incubator, Accelerator, AngelList, or VC) with a valid Provider Org ID / Package Code',
      'Startups must not have exceeded the lifetime maximum cap of $100,000 across their company lifecycle'
    ],
    documentsRequired: [
      'AWS Account ID (12-digit number with credit card attached)',
      'Active company website with corporate domain email (e.g. founder@yourstartup.com; gmail.com addresses are frequently rejected)',
      'Company LinkedIn page and founder LinkedIn profile',
      'For Portfolio Tier: Organization ID / Package Code from your incubator/investor'
    ],
    keyPerks: [
      'Founders Tier: $1,000 AWS promotional credits valid for 2 years + $350 Developer Support credits + 1 year free architectural guidance',
      'Portfolio Tier: $5,000 to $100,000 AWS promotional credits valid for 1 to 2 years + up to $10,000 Business Support credits',
      'Access to AWS pre-built GenAI models on Amazon Bedrock (Claude 3.5 Sonnet, Llama 3, Titan)',
      'Exclusive partner discounts on MongoDB, Segment, Datadog, and Stripe'
    ],
    hiddenNuances: [
      'AWS has a lifetime cap of $100,000 in credits per company. If you claim $10,000 from one incubator, you can only claim up to $90,000 later from another partner.',
      'Credits do NOT cover third-party services purchased via AWS Marketplace (e.g. Databricks or Snowflake bought through AWS) or Route 53 domain registrations. Always monitor billing alerts!',
      'Using a generic email (like founder@gmail.com) is the #1 reason for Founders Tier rejection. Always use your custom domain email.'
    ],
    officialLink: 'https://aws.amazon.com/activate/',
    applicationStepByStep: [
      '1. Create a standard AWS account and add a billing credit card.',
      '2. Visit aws.amazon.com/activate and choose "Founders" or "Portfolio".',
      '3. Enter company website, corporate email, and your Incubator/VC Org ID (if Portfolio).',
      '4. Submit application; verification takes 3 to 7 business days.',
      '5. Credits automatically appear in your AWS Billing Console under "Credits".'
    ],
    tags: ['Cloud', 'AWS', 'Hosting', 'Bedrock', 'AI', 'Founders Tier', 'Portfolio Tier'],
    statesApplicable: ['All India', 'Global'],
    isFeatured: true
  },
  {
    id: 'google-cloud-startups',
    title: 'Google Cloud for Startups & Gemini AI Credits',
    category: 'saas_perks',
    subCategory: 'cloud_infra',
    provider: 'Google Cloud Platform (GCP)',
    shortDescription: '$2,000 for bootstrapped/early stage; Up to $200,000 credits for funded startups (up to $350k for AI-first startups) + Google Workspace & Gemini API.',
    fullDescription: 'Google Cloud for Startups gives founders credits to build on GCP, Google Kubernetes Engine (GKE), BigQuery, and Vertex AI. They offer specialized tracks for AI-first companies (providing direct access to Gemini models and Google Cloud TPUs).',
    valueAmount: 'Up to $200,000 ($350,000 for AI Startups)',
    currencyOrType: 'USD',
    eligibility: [
      'Start Tier: Bootstrapped startups, incorporated <5 years, active website and business email, has not previously received Google Cloud startup credits',
      'Scale Tier: Seed to Series A startups backed by an approved venture capital fund or accelerator, raised between $100k and $10M equity funding',
      'AI-First Track: Startups where generative AI or foundation model fine-tuning is the core product'
    ],
    documentsRequired: [
      'GCP Billing Account ID',
      'Active company website and corporate domain email',
      'Proof of institutional funding (Term sheet, press release, or VC confirmation letter for Scale Tier)',
      'Pitch deck and business description'
    ],
    keyPerks: [
      'Start Tier: $2,000 GCP credits valid for 2 years',
      'Scale Tier: 100% of Google Cloud usage covered up to $100,000 in Year 1, plus 20% of Year 2 usage covered up to an additional $100,000 (total $200,000)',
      'AI Startup Track: Up to $350,000 in credits for eligible AI-native startups building on Vertex AI and Gemini',
      'Google Workspace discount: 12 months free or subsidized Google Workspace Business Plus for up to 10 users',
      'Google Cloud Customer Care Enhanced Support and dedicated startup mentors'
    ],
    hiddenNuances: [
      'Year 2 Scale credits require a 20% co-spend model! Unlike Year 1 where 100% of spend is credited up to $100k, Year 2 covers 20% of your usage invoice.',
      'Vertex AI model API usage (Gemini 1.5 Pro/Flash, Imagen 3) is fully eligible under GCP credits, making it ideal for LLM wrappers and AI agents.'
    ],
    officialLink: 'https://cloud.google.com/startup',
    applicationStepByStep: [
      '1. Set up a Google Cloud Billing Account with your company Google Workspace identity.',
      '2. Apply through the Google for Startups portal.',
      '3. Select your Tier (Start vs Scale vs AI-first) and enter your partner accelerator code if applicable.',
      '4. Approval typically takes 5 to 10 business days.',
      '5. Credits are applied directly to the designated Cloud Billing Account.'
    ],
    tags: ['GCP', 'Google Cloud', 'Vertex AI', 'Gemini API', 'BigQuery', 'Cloud Credits'],
    statesApplicable: ['All India', 'Global'],
    isFeatured: true
  },
  {
    id: 'microsoft-founders-hub',
    title: 'Microsoft for Startups Founders Hub (Azure + OpenAI Credits)',
    category: 'saas_perks',
    subCategory: 'ai_llm_credits',
    provider: 'Microsoft & OpenAI',
    shortDescription: 'Zero funding required! Up to $150,000 Azure credits + up to $2,500 to $20,000 Azure OpenAI Service credits, free GitHub Enterprise & M365.',
    fullDescription: 'The most accessible major cloud program in the tech ecosystem. Unlike AWS or Google which require accelerator codes or funding for high tiers, Microsoft Founders Hub is open to ANY founder with an idea. It uses a progressive 4-tier milestone system (Ideate, Develop, Grow, Scale), awarding more credits as your app scales.',
    valueAmount: 'Up to $150,000 Azure + $2,500-$20k OpenAI Credits',
    currencyOrType: 'USD',
    eligibility: [
      'Open to all founders globally at any stage (even idea stage with no company incorporation or funding)',
      'Entity must not be an educational institution, government body, personal blog, dev shop, or crypto-mining operation',
      'Must not have previously received maximum Azure startup sponsorships'
    ],
    documentsRequired: [
      'Personal LinkedIn profile of founder (must be authentic and verifiable)',
      'Company description, website or concept walkthrough',
      'No credit card required upfront for Level 1!'
    ],
    keyPerks: [
      'Level 1 (Ideate): $1,000 Azure credits + $2,500 OpenAI credits + 3 months free Microsoft 365 Business Standard',
      'Level 2 (Develop): $5,000 Azure credits + GitHub Enterprise (20 seats free for 1 year, worth $4,500+)',
      'Level 3 (Grow): $25,000 Azure credits + $5,000 Azure OpenAI Service credits',
      'Level 4 (Scale): Up to $150,000 Azure credits + priority access to enterprise customer co-sell programs',
      '1:1 Architecture Review sessions with Microsoft Azure cloud specialists'
    ],
    hiddenNuances: [
      'OpenAI credits through Founders Hub are delivered as Azure OpenAI Service credits (allowing private, enterprise-grade deployment of GPT-4o, GPT-4o-mini, and embeddings in your own Azure tenant without public data sharing).',
      'Advancing to higher levels (Develop, Grow, Scale) requires demonstrating that your application is running and consuming cloud resources in Azure. You cannot jump straight to Level 4 without active usage.'
    ],
    officialLink: 'https://foundershub.startups.microsoft.com/',
    applicationStepByStep: [
      '1. Sign in to Founders Hub using your LinkedIn account.',
      '2. Fill out simple 5-minute form describing your problem, product, and target audience.',
      '3. Approval for Level 1 is almost instantaneous or within 2 business days.',
      '4. Activate Azure sponsorship and OpenAI tokens inside the dashboard.',
      '5. Request level-ups as your system architecture expands.'
    ],
    tags: ['Azure', 'Microsoft', 'OpenAI', 'GPT-4o', 'GitHub Enterprise', 'No Funding Required'],
    statesApplicable: ['All India', 'Global'],
    isFeatured: true
  },
  {
    id: 'github-for-startups',
    title: 'GitHub for Startups (Free GitHub Enterprise + Copilot)',
    category: 'saas_perks',
    subCategory: 'dev_tools',
    provider: 'GitHub (Microsoft)',
    shortDescription: 'Up to 20 seats of GitHub Enterprise free for 12 months (worth $5,000+), plus 50% discount in Year 2 and GitHub Actions CI/CD runner minutes.',
    fullDescription: 'GitHub Enterprise provides high-level security, SAML single sign-on, advanced branch protection, audit logging, and 50,000 monthly GitHub Actions minutes. The GitHub for Startups program makes this accessible to young ventures to build enterprise-grade software from day zero.',
    valueAmount: '20 Free Enterprise Seats ($5,000+ Value)',
    currencyOrType: 'USD',
    eligibility: [
      'Series A or earlier stage startup',
      'Has not previously received GitHub for Startups credits',
      'Affiliated with a partner accelerator, incubator, or venture fund (or apply via partner code)'
    ],
    documentsRequired: [
      'GitHub Organization account name',
      'Company domain email and website',
      'Partner organization name or verification link'
    ],
    keyPerks: [
      'Up to 20 seats of GitHub Enterprise Cloud or Server free for 12 months',
      '50% off GitHub Enterprise in Year 2',
      '50,000 GitHub Actions build minutes per month included',
      '50 GB GitHub Packages storage and advanced code security (Dependabot, CodeQL secret scanning)',
      'Discounts on GitHub Copilot licenses for enterprise developer productivity'
    ],
    hiddenNuances: [
      'Ensure you create an Organization account on GitHub (not just a personal user account) before applying, as credits attach to the org entity.',
      'Seats cannot be converted into cash refunds or transferred across unrelated GitHub organizations.'
    ],
    officialLink: 'https://github.com/enterprise/startups',
    applicationStepByStep: [
      '1. Create a GitHub Organization for your startup.',
      '2. Navigate to github.com/enterprise/startups.',
      '3. Enter company details and your accelerator/partner reference.',
      '4. Approval granted in 3-5 days; license keys applied to your Organization billing settings.'
    ],
    tags: ['GitHub', 'Enterprise', 'Dev Tools', 'CI/CD', 'CodeQL', 'Free Seats'],
    statesApplicable: ['All India', 'Global']
  },
  {
    id: 'notion-for-startups',
    title: 'Notion for Startups (Up to 6 Months Free Notion Plus & AI)',
    category: 'saas_perks',
    subCategory: 'productivity',
    provider: 'Notion Labs',
    shortDescription: 'Up to 6 months free of Notion Plus with unlimited team members and Unlimited Notion AI (worth up to $6,000+) for partner/accelerator companies.',
    fullDescription: 'Notion is the primary operating system for modern startups (wikis, sprint tracking, roadmaps, investor CRM, meeting notes). The startup program gives teams unlimited blocks, unlimited page history, and Notion AI writer & research assistant at zero cost.',
    valueAmount: '6 Months Free ($6,000+ Value with AI)',
    currencyOrType: 'USD',
    eligibility: [
      'New Notion Plus customers (must not be on a paid Notion plan currently)',
      'Startups with fewer than 100 employees',
      'Bootstrapped track: 3 months free; Partner/VC track: Up to 6 months free with unlimited AI'
    ],
    documentsRequired: [
      'Work email matching your company domain',
      'Company website link',
      'Partner code from an eligible incubator/accelerator/VC (or apply directly for bootstrapped tier)'
    ],
    keyPerks: [
      'Notion Plus Plan with unlimited team members and collaborative workspaces',
      'Unlimited Notion AI add-on: AI Q&A across your entire company workspace, automated meeting summaries, and draft generation',
      'Unlimited file uploads and 30-day page history versioning',
      'Pre-built founder templates: Pitch deck tracker, hiring funnel, sprint backlog, product requirement docs'
    ],
    hiddenNuances: [
      'The credit applies as a balance to your workspace. Be sure to add all team members during the promotional period so you don\'t pay per-seat charges until the promo balance exhausts.'
    ],
    officialLink: 'https://www.notion.so/startups',
    applicationStepByStep: [
      '1. Create a free Notion workspace with your business email.',
      '2. Visit notion.so/startups and submit application with your partner code (or select bootstrapped).',
      '3. Credits are applied immediately upon automated email verification.',
      '4. Upgrade workspace to Plus + Notion AI inside Settings & Members.'
    ],
    tags: ['Notion', 'Productivity', 'Notion AI', 'Wiki', 'Sprint Tracking', 'Free Tier'],
    statesApplicable: ['All India', 'Global'],
    isFeatured: true
  },
  {
    id: 'hubspot-for-startups',
    title: 'HubSpot for Startups (Up to 90% Discount on Growth Suite)',
    category: 'saas_perks',
    subCategory: 'crm_marketing',
    provider: 'HubSpot',
    shortDescription: 'Up to 90% discount in Year 1, 50% in Year 2 on HubSpot Marketing, Sales, Service, and Operations Hub Professional & Enterprise suites.',
    fullDescription: 'HubSpot is the industry standard inbound marketing and CRM powerhouse. Through its startup program, eligible early-stage startups can access enterprise automation, email marketing sequences, lead tracking, and pipeline management for a fraction of list price.',
    valueAmount: '75% - 90% Off ($15,000+ Savings)',
    currencyOrType: 'Discount',
    eligibility: [
      'Seed-stage: Raised <$2M and affiliated with an approved incubator/accelerator/VC partner (qualifies for 90% off Year 1, 50% off Year 2)',
      'Series A: Raised between $2M and $10M (qualifies for 50% off Year 1, 25% off Year 2)',
      'Bootstrapped/Entrepreneur: Up to 30% discount'
    ],
    documentsRequired: [
      'Proof of funding or accelerator affiliation',
      'Company domain email and website'
    ],
    keyPerks: [
      'Professional or Enterprise tier Marketing Hub, Sales Hub, and CMS Hub at 90% off',
      'Marketing automation: Drip email workflows, landing page builder, form tracking, and SEO tools',
      'Sales CRM: Deal pipelines, email tracking, meeting scheduling links, and call recording',
      '24/7 phone and live chat customer support'
    ],
    hiddenNuances: [
      'The discount is on HubSpot\'s annual list price. After Year 2, pricing transitions closer to standard commercial pricing, so ensure your marketing ROI covers the eventual upgrade.'
    ],
    officialLink: 'https://www.hubspot.com/startups',
    applicationStepByStep: [
      '1. Verify if your investor, incubator (or YC/Techstars/Startup India partner) is a HubSpot partner.',
      '2. Apply through hubspot.com/startups.',
      '3. Select your partner org from the dropdown list.',
      '4. Receive confirmation code and activate discounted checkout.'
    ],
    tags: ['CRM', 'Marketing', 'Sales Funnel', 'HubSpot', 'Email Marketing', 'Discount'],
    statesApplicable: ['All India', 'Global'],
    isFeatured: true
  },
  {
    id: 'stripe-atlas-perks',
    title: 'Stripe Atlas Incorporation & Perks Bundle',
    category: 'saas_perks',
    subCategory: 'legal_incorporation',
    provider: 'Stripe, Inc.',
    shortDescription: '$500 US Delaware C-Corp/LLC incorporation with $50k+ in bundled partner credits, free registered agent for 1 yr, and fast-track US bank account.',
    fullDescription: 'Stripe Atlas helps international and US founders form a Delaware C-Corp or LLC within days. Beyond filing legal incorporation papers and IRS EIN, Atlas bundles one of the highest-value perk packages in the world, including fast-track $50,000 AWS credits and Mercury bank account approvals.',
    valueAmount: 'Delaware C-Corp + $50,000+ Partner Credits',
    currencyOrType: 'USD',
    eligibility: [
      'Founders globally incorporating a new US Delaware C-Corporation or LLC',
      'Must have clean identity documentation and no sanctioned country residency'
    ],
    documentsRequired: [
      'Passport of primary founders',
      'Proposed company name and officer equity split details'
    ],
    keyPerks: [
      'Complete Delaware C-Corp / LLC legal incorporation with custom bylaws and stock purchase agreements',
      'Automated IRS Employer Identification Number (EIN) processing',
      'First year Delaware Registered Agent fees included for free',
      'Pre-approved onboarding with Mercury Bank and Brex',
      'Exclusive access to the Stripe Atlas Community with $100k+ in partner perks ($50k AWS, $2k Airtable, discounts on Carta & Pulley)'
    ],
    hiddenNuances: [
      'Partner promo codes (from YC, Product Hunt, or accelerators) regularly reduce the $500 fee down to $250 - $350.',
      'Remember the Delaware Annual Franchise Tax and Report ($450 minimum for standard startup authorized shares) must still be filed every year by March 1.'
    ],
    officialLink: 'https://stripe.com/atlas',
    applicationStepByStep: [
      '1. Create a Stripe account and navigate to Stripe Atlas.',
      '2. Choose company type (Delaware C-Corp recommended for VC funding).',
      '3. Input founder details, equity allocation, and IP assignment.',
      '4. Sign documents electronically and pay via card.',
      '5. State filing completed in 2-3 business days, followed by IRS EIN generation.'
    ],
    tags: ['Delaware', 'C-Corp', 'Legal', 'US Incorporation', 'Stripe Atlas', 'EIN'],
    statesApplicable: ['Global / US Entities'],
    isFeatured: true
  },
  {
    id: 'mongodb-for-startups',
    title: 'MongoDB for Startups ($500 to $3,000 Atlas Credits)',
    category: 'saas_perks',
    subCategory: 'dev_tools',
    provider: 'MongoDB, Inc.',
    shortDescription: 'Up to $3,000 in MongoDB Atlas multi-cloud database credits, 1:1 technical advisory with senior solution architects, and co-marketing.',
    fullDescription: 'MongoDB Atlas allows startups to deploy managed Document databases and Vector Search across AWS, GCP, and Azure. The startup program provides generous non-expiring/annual credits and direct access to database architects for schema design optimization.',
    valueAmount: '$500 to $3,000 Database Credits',
    currencyOrType: 'USD',
    eligibility: [
      'Series A or earlier stage tech startup',
      'Building a proprietary software product',
      'Has not previously received MongoDB startup credits'
    ],
    documentsRequired: [
      'MongoDB Cloud Account ID',
      'Company website and LinkedIn profile'
    ],
    keyPerks: [
      '$500 credits for bootstrapped startups; up to $3,000 for accelerator/VC funded startups',
      'Valid across all major cloud providers (AWS, Google Cloud, Azure)',
      'Atlas Vector Search included for building RAG and AI search applications',
      '1:1 45-minute architectural review with MongoDB Solution Engineers'
    ],
    hiddenNuances: [
      'Atlas Vector Search indexes share memory with your operational database cluster; utilizing the startup credits allows you to scale up dedicated nodes without paying high monthly minimums.'
    ],
    officialLink: 'https://www.mongodb.com/startups',
    applicationStepByStep: [
      '1. Sign up for a free MongoDB Cloud account.',
      '2. Submit application at mongodb.com/startups.',
      '3. Input your Organization ID from Atlas settings.',
      '4. Credit balance appears in billing within 3 business days.'
    ],
    tags: ['Database', 'MongoDB', 'Vector Search', 'NoSQL', 'Atlas Credits'],
    statesApplicable: ['All India', 'Global']
  },
  {
    id: 'intercom-early-stage',
    title: 'Intercom Early Stage Program (95% Discount for 12 Months)',
    category: 'saas_perks',
    subCategory: 'crm_marketing',
    provider: 'Intercom',
    shortDescription: 'Access Intercom\'s complete customer messaging and Fin AI Agent suite at 95% off for up to 12 months (starting at just $65/month).',
    fullDescription: 'Intercom is the premier in-app live chat, onboarding tour, and automated support platform. The early-stage startup program unlocks their advanced product suite including the Fin AI bot, automated outbound messaging, and conversational support at a 95% markdown.',
    valueAmount: '95% Off for 1 Year ($10,000+ Savings)',
    currencyOrType: 'Discount',
    eligibility: [
      'Founded less than 2 years ago',
      'Fewer than 5 employees',
      'Raised less than $1 Million in funding',
      'New Intercom customer'
    ],
    documentsRequired: [
      'Company website and active working product',
      'Pitch deck or verification of funding limit'
    ],
    keyPerks: [
      '95% discount on all core Intercom plans for 12 months',
      'Fin AI Copilot & automated customer resolution',
      'In-app product tours, tooltips, and user onboarding checklists',
      'Omnichannel inbox (Email, WhatsApp, live chat, Instagram)'
    ],
    hiddenNuances: [
      'Fin AI resolution volume fees can accumulate if your user queries are very high; however, the early stage tier includes free starting allocations.'
    ],
    officialLink: 'https://www.intercom.com/early-stage',
    applicationStepByStep: [
      '1. Check eligibility criteria on intercom.com/early-stage.',
      '2. Submit application form with product URL.',
      '3. Approval link received via email to activate 95% discounted billing.'
    ],
    tags: ['Intercom', 'Customer Support', 'Fin AI', 'Product Tours', 'Live Chat', 'Discount'],
    statesApplicable: ['All India', 'Global']
  }
];
