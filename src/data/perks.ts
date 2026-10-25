import { BenefitItem } from '../types';

export const SAAS_PERKS: BenefitItem[] = [
  {
    id: 'aws-activate',
    title: 'AWS Activate (Founders vs Portfolio Tiers)',
    category: 'saas_perks',
    provider: 'Amazon Web Services (AWS)',
    stateOrRegion: 'All States / Central',
    valueAmount: '$1,000 to $100,000 USD Cloud Credits',
    shortDescription: '$1,000 for self-funded/bootstrapped founders; Up to $100,000 credits + $10,000 business support for accelerator/incubator/VC funded startups.',
    fullDescription: 'The most popular cloud credits program in the world. AWS offers two tracks: AWS Activate Founders (bootstrapped with no institutional funding) and AWS Activate Portfolio (affiliated with an approved incubator, accelerator like YC, Techstars, or VC fund).',
    eligibility: [
      'Founders Tier: Bootstrapped, company website active, valid AWS Account ID, incorporated < 10 years',
      'Portfolio Tier: Affiliated with an authorized AWS Activate Provider (Incubator/VC) with a valid Provider Org ID / Package Code',
      'Lifetime maximum cap of $100,000 per company'
    ],
    keyPerks: [
      'Founders Tier: $1,000 AWS promotional credits valid for 2 years + $350 Developer Support credits',
      'Portfolio Tier: $5,000 to $100,000 AWS promotional credits valid for 1 to 2 years + $10,000 Business Support',
      'Access to AWS Bedrock models (Claude 3.5 Sonnet, Llama 3, Titan) covered under credits'
    ],
    hackOrNuance: 'Using a generic email (like founder@gmail.com) is the #1 reason for Founders Tier rejection. Always use your custom domain email (founder@yourdomain.com).',
    officialLink: 'https://aws.amazon.com/activate/',
    domainName: 'aws.amazon.com',
    tags: ['Cloud', 'AWS', 'Hosting', 'Bedrock', 'AI', 'Founders Tier', 'Portfolio Tier'],
    founderTypes: ['all', 'bootstrapped', 'vc_backed', 'deeptech_ai']
  },
  {
    id: 'microsoft-founders-hub',
    title: 'Microsoft for Startups Founders Hub (Azure + OpenAI Credits)',
    category: 'saas_perks',
    provider: 'Microsoft & OpenAI',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Up to $150,000 Azure + $2,500-$20k OpenAI Credits',
    shortDescription: 'Zero funding required! Up to $150,000 Azure credits + up to $2,500 to $20,000 Azure OpenAI Service credits, free GitHub Enterprise & M365.',
    fullDescription: 'The most accessible major cloud program in the tech ecosystem. Unlike AWS or Google which require accelerator codes for high tiers, Microsoft Founders Hub is open to ANY founder with an idea. It uses a progressive 4-tier milestone system (Ideate, Develop, Grow, Scale).',
    eligibility: [
      'Open to all founders globally at any stage (even idea stage with no company incorporation or funding)',
      'Entity must not be an educational body, personal blog, dev agency, or crypto-mining operation'
    ],
    keyPerks: [
      'Level 1 (Ideate): $1,000 Azure credits + $2,500 OpenAI credits + 3 months free Microsoft 365 Business Standard',
      'Level 2 (Develop): $5,000 Azure credits + GitHub Enterprise (20 seats free for 1 year, worth $4,500+)',
      'Level 3 (Grow): $25,000 Azure credits + $5,000 Azure OpenAI Service credits',
      'Level 4 (Scale): Up to $150,000 Azure credits + priority enterprise customer co-sell programs'
    ],
    hackOrNuance: 'OpenAI credits through Founders Hub are delivered as Azure OpenAI Service credits, allowing private enterprise-grade deployment of GPT-4o and embeddings in your own Azure tenant without public data sharing.',
    officialLink: 'https://foundershub.startups.microsoft.com/',
    domainName: 'foundershub.startups.microsoft.com',
    tags: ['Azure', 'Microsoft', 'OpenAI', 'GPT-4o', 'GitHub Enterprise', 'No Funding Required'],
    founderTypes: ['all', 'bootstrapped', 'student', 'deeptech_ai']
  },
  {
    id: 'google-cloud-startups',
    title: 'Google Cloud for Startups & Gemini AI Credits',
    category: 'saas_perks',
    provider: 'Google Cloud Platform (GCP)',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Up to $200,000 ($350,000 for AI Startups)',
    shortDescription: '$2,000 for bootstrapped/early stage; Up to $200,000 credits for funded startups (up to $350k for AI-first startups) + Google Workspace & Gemini API.',
    fullDescription: 'Google Cloud for Startups gives founders credits to build on GCP, Google Kubernetes Engine (GKE), BigQuery, and Vertex AI. They offer specialized tracks for AI-first companies providing direct access to Gemini models and Google Cloud TPUs.',
    eligibility: [
      'Start Tier: Bootstrapped startups, incorporated < 5 years, active website and corporate domain email',
      'Scale Tier: Seed to Series A backed by an approved VC fund or accelerator ($100k - $10M raised)'
    ],
    keyPerks: [
      'Start Tier: $2,000 GCP credits valid for 2 years',
      'Scale Tier: 100% of Google Cloud usage covered up to $100,000 in Year 1, plus 20% of Year 2 usage covered up to an additional $100,000',
      'AI Startup Track: Up to $350,000 in credits for eligible AI-native startups building on Vertex AI and Gemini',
      'Google Workspace: Subsidized Google Workspace Business Plus for up to 10 users'
    ],
    hackOrNuance: 'Vertex AI model API usage (Gemini 1.5 Pro/Flash, Imagen 3) is 100% covered under GCP credits, making it ideal for LLM wrappers, autonomous agents, and RAG pipelines.',
    officialLink: 'https://cloud.google.com/startup',
    domainName: 'cloud.google.com',
    tags: ['GCP', 'Google Cloud', 'Vertex AI', 'Gemini API', 'BigQuery', 'Cloud Credits'],
    founderTypes: ['all', 'bootstrapped', 'vc_backed', 'deeptech_ai']
  },
  {
    id: 'github-for-startups',
    title: 'GitHub for Startups (Free GitHub Enterprise + Copilot)',
    category: 'saas_perks',
    provider: 'GitHub (Microsoft)',
    stateOrRegion: 'All States / Central',
    valueAmount: '20 Free Enterprise Seats ($5,000+ Value)',
    shortDescription: 'Up to 20 seats of GitHub Enterprise free for 12 months (worth $5,000+), plus 50% discount in Year 2 and 50,000 monthly GitHub Actions CI/CD runner minutes.',
    fullDescription: 'GitHub Enterprise provides high-level security, SAML single sign-on, advanced branch protection, audit logging, and 50,000 monthly GitHub Actions minutes to build enterprise-grade software from day zero.',
    eligibility: [
      'Series A or earlier stage startup',
      'Affiliated with a partner accelerator, incubator, or venture fund (or apply via partner code)'
    ],
    keyPerks: [
      'Up to 20 seats of GitHub Enterprise Cloud or Server free for 12 months',
      '50,000 GitHub Actions build minutes per month included',
      'Advanced code security (Dependabot, CodeQL secret scanning) and GitHub Copilot discounts'
    ],
    hackOrNuance: 'Ensure you create an Organization account on GitHub (not just a personal user account) before applying, as credits attach to the org entity.',
    officialLink: 'https://github.com/enterprise/startups',
    domainName: 'github.com',
    tags: ['GitHub', 'Enterprise', 'Dev Tools', 'CI/CD', 'CodeQL', 'Free Seats'],
    founderTypes: ['all', 'bootstrapped', 'vc_backed']
  },
  {
    id: 'notion-for-startups',
    title: 'Notion for Startups (Up to 6 Months Free Notion Plus & AI)',
    category: 'saas_perks',
    provider: 'Notion Labs',
    stateOrRegion: 'All States / Central',
    valueAmount: '6 Months Free ($6,000+ Value with AI)',
    shortDescription: 'Up to 6 months free of Notion Plus with unlimited team members and Unlimited Notion AI (worth up to $6,000+) for partner/accelerator companies.',
    fullDescription: 'Notion is the primary operating system for modern startups (wikis, sprint tracking, roadmaps, investor CRM). The startup program gives teams unlimited blocks, unlimited page history, and Notion AI at zero cost.',
    eligibility: [
      'New Notion Plus customers with < 100 employees',
      'Bootstrapped track: 3 months free; Partner/VC track: Up to 6 months free with unlimited AI'
    ],
    keyPerks: [
      'Notion Plus Plan with unlimited team members and collaborative workspaces',
      'Unlimited Notion AI add-on: AI Q&A across your entire company workspace and automated meeting summaries',
      'Unlimited file uploads and 30-day page history versioning'
    ],
    hackOrNuance: 'The credit applies as a balance to your workspace. Add all initial team members during the promotional period so you don\'t pay per-seat charges until the promo balance exhausts.',
    officialLink: 'https://www.notion.so/startups',
    domainName: 'notion.so',
    tags: ['Notion', 'Productivity', 'Notion AI', 'Wiki', 'Sprint Tracking', 'Free Tier'],
    founderTypes: ['all', 'bootstrapped', 'student', 'vc_backed']
  },
  {
    id: 'hubspot-for-startups',
    title: 'HubSpot for Startups (Up to 90% Discount on Growth Suite)',
    category: 'saas_perks',
    provider: 'HubSpot',
    stateOrRegion: 'All States / Central',
    valueAmount: '75% - 90% Off ($15,000+ Savings)',
    shortDescription: 'Up to 90% discount in Year 1, 50% in Year 2 on HubSpot Marketing, Sales, Service, and Operations Hub Professional & Enterprise suites.',
    fullDescription: 'HubSpot is the industry standard inbound marketing and CRM powerhouse. Through its startup program, eligible early-stage startups can access enterprise automation, email sequences, and pipeline management for a fraction of list price.',
    eligibility: [
      'Seed-stage: Raised < $2M and affiliated with an approved incubator/accelerator/VC partner (90% off Year 1, 50% Year 2)',
      'Series A: Raised between $2M and $10M (50% off Year 1, 25% Year 2)'
    ],
    keyPerks: [
      'Professional or Enterprise tier Marketing Hub, Sales Hub, and CMS Hub at 90% off',
      'Marketing automation: Drip email workflows, landing page builder, form tracking, and SEO tools',
      'Sales CRM: Deal pipelines, email tracking, meeting scheduling links, and call recording'
    ],
    hackOrNuance: 'The discount is on HubSpot\'s annual list price. After Year 2, pricing transitions closer to commercial pricing, so ensure your marketing ROI covers the eventual upgrade.',
    officialLink: 'https://www.hubspot.com/startups',
    domainName: 'hubspot.com',
    tags: ['CRM', 'Marketing', 'Sales Funnel', 'HubSpot', 'Email Marketing', 'Discount'],
    founderTypes: ['all', 'vc_backed', 'bootstrapped']
  },
  {
    id: 'stripe-atlas-perks',
    title: 'Stripe Atlas Incorporation & Perks Bundle',
    category: 'saas_perks',
    provider: 'Stripe, Inc.',
    stateOrRegion: 'Global / US Entities',
    valueAmount: 'Delaware C-Corp + $50,000+ Partner Credits',
    shortDescription: '$500 US Delaware C-Corp/LLC incorporation with $50k+ in bundled partner credits, free registered agent for 1 yr, and fast-track US bank account.',
    fullDescription: 'Stripe Atlas helps international and US founders form a Delaware C-Corp or LLC within days. Beyond filing legal incorporation papers and IRS EIN, Atlas bundles fast-track $50,000 AWS credits and Mercury bank account approvals.',
    eligibility: [
      'Founders globally incorporating a new US Delaware C-Corporation or LLC',
      'Clean identity documentation and verifiable founders'
    ],
    keyPerks: [
      'Complete Delaware C-Corp / LLC legal incorporation with custom bylaws and stock purchase agreements',
      'Automated IRS Employer Identification Number (EIN) processing',
      'First year Delaware Registered Agent fees included for free',
      'Pre-approved onboarding with Mercury Bank and Brex',
      'Exclusive access to the Stripe Atlas Community with $100k+ in partner perks ($50k AWS, $2k Airtable)'
    ],
    hackOrNuance: 'Partner promo codes regularly reduce the $500 fee down to $250 - $350. Remember that the Delaware Annual Franchise Tax ($450 min for startups) must still be filed every year by March 1.',
    officialLink: 'https://stripe.com/atlas',
    domainName: 'stripe.com',
    tags: ['Delaware', 'C-Corp', 'Legal', 'US Incorporation', 'Stripe Atlas', 'EIN'],
    founderTypes: ['vc_backed', 'deeptech_ai']
  }
];
