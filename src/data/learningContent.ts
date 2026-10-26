export interface LearningResource {
  id: string;
  slug: string;
  title: string;
  provider: string;
  category: 'curriculum' | 'fundraising' | 'gtm' | 'legal' | 'product';
  categoryLabel: string;
  cost: string; // '100% Free'
  format: 'Video Masterclass' | 'Interactive Toolkit' | 'Deck Repository' | 'Legal Standard' | 'Deep-Dive Guide';
  timeCommitment: string;
  summary: string;
  keyTakeaways: string[];
  directUrl: string;
  tags: string[];
}

export const LEARNING_RESOURCES: LearningResource[] = [
  {
    id: 'yc-startup-school',
    slug: 'y-combinator-startup-school',
    title: 'Y Combinator Startup School',
    provider: 'Y Combinator',
    category: 'curriculum',
    categoryLabel: 'Foundations & PMF',
    cost: '100% Free Forever',
    format: 'Video Masterclass',
    timeCommitment: 'Self-paced (20 Hours)',
    summary: 'The world\'s most rigorous, free startup curriculum taught by YC partners. Covers how to talk to users, evaluate startup ideas, plan MVPs, and achieve initial product-market fit.',
    keyTakeaways: [
      'How to conduct Mom Test user interviews without leading questions',
      'The exact metrics YC tracks: retention cohorts, organic referral loops, and MoM growth',
      'Co-founder equity split frameworks and founder dispute prevention',
      'Access to the active global co-founder matching platform'
    ],
    directUrl: 'https://www.startupschool.org/',
    tags: ['YC', 'Product-Market Fit', 'Co-Founders', 'Curriculum', 'Free']
  },
  {
    id: 'techstars-entrepreneur-toolkit',
    slug: 'techstars-entrepreneur-toolkit',
    title: 'Techstars Entrepreneur\'s Toolkit',
    provider: 'Techstars Accelerator',
    category: 'curriculum',
    categoryLabel: 'Lean Execution',
    cost: '100% Free Forever',
    format: 'Interactive Toolkit',
    timeCommitment: 'Self-paced (10 Modules)',
    summary: 'Step-by-step masterclasses and exercise worksheets designed by Techstars to take founders from raw idea validation to repeatable customer acquisition.',
    keyTakeaways: [
      'Customer discovery interview script templates',
      'Lean Canvas and unit economics modeling exercises',
      'Building effective advisory boards and early hiring scorecards'
    ],
    directUrl: 'https://toolkit.techstars.com/',
    tags: ['Techstars', 'Lean Startup', 'Customer Discovery', 'Toolkit']
  },
  {
    id: 'openvc-deck-database',
    slug: 'openvc-pitch-deck-database',
    title: 'OpenVC & Seed Deck Library',
    provider: 'OpenVC',
    category: 'fundraising',
    categoryLabel: 'Fundraising & Decks',
    cost: '100% Free',
    format: 'Deck Repository',
    timeCommitment: 'Instant Access',
    summary: 'Over 1,000 real pitch decks from companies that raised seed and Series A rounds (including early Airbnb, Uber, PostHog, Brex, and Revolut).',
    keyTakeaways: [
      'Deconstruct real slide-by-slide structure of winning decks',
      'Observe how technical founders articulate deeptech TAM without hand-waving',
      'Direct directory of 5,000+ verified angel investors and venture funds'
    ],
    directUrl: 'https://www.openvc.app/',
    tags: ['Pitch Decks', 'Fundraising', 'Venture Capital', 'Angels', 'OpenVC']
  },
  {
    id: 'yc-safe-financing-docs',
    slug: 'yc-standard-safe-financing-documents',
    title: 'Y Combinator Post-Money SAFE Documents',
    provider: 'Y Combinator Legal',
    category: 'legal',
    categoryLabel: 'Financing Contracts',
    cost: '100% Free Open Standard',
    format: 'Legal Standard',
    timeCommitment: 'Instant Download',
    summary: 'The global tech industry standard for early-stage angel and seed fundraising. Eliminates tens of thousands of dollars in legal drafting fees.',
    keyTakeaways: [
      'Valuation Cap SAFE and MFN (Most Favored Nation) templates',
      'Standard Pro-Rata Side Letter rights for lead investors',
      'Pre-calculated mathematical models for dilution and option pool expansion'
    ],
    directUrl: 'https://www.ycombinator.com/documents/',
    tags: ['SAFE', 'Legal', 'Fundraising', 'Contracts', 'Zero Legal Fees']
  },
  {
    id: 'lenny-first-round-gtm-playbooks',
    slug: 'first-round-review-gtm-playbooks',
    title: 'First Round Review & Lenny\'s GTM Playbooks',
    provider: 'First Round Capital',
    category: 'gtm',
    categoryLabel: 'Go-to-Market & Sales',
    cost: '100% Free Publications',
    format: 'Deep-Dive Guide',
    timeCommitment: '30 Min Per Playbook',
    summary: 'Unvarnished, tactical playbooks written by operators who scaled Stripe, Figma, Superhuman, and Snowflake from zero to $100M ARR.',
    keyTakeaways: [
      'How to land your first 10 enterprise pilot contracts with cold outreach',
      'Pricing strategy frameworks: usage-based vs seat-based pricing',
      'Product-Led Growth (PLG) viral coefficient calculation'
    ],
    directUrl: 'https://review.firstround.com/',
    tags: ['GTM', 'Sales', 'B2B SaaS', 'Pricing', 'Outbound']
  },
  {
    id: 'stripe-atlas-guides',
    slug: 'stripe-atlas-cross-border-guides',
    title: 'Stripe Atlas Global Scaling & Tax Guides',
    provider: 'Stripe',
    category: 'legal',
    categoryLabel: 'Global Structuring',
    cost: '100% Free',
    format: 'Deep-Dive Guide',
    timeCommitment: '2 Hours Total',
    summary: 'Authoritative guides on international taxation, corporate structuring, Delaware vs India setups, and compliance for internet businesses selling globally.',
    keyTakeaways: [
      'US sales tax economic nexus rules for international SaaS founders',
      'How to set up transfer pricing between US parent and Indian development subs',
      'Stock vesting schedules and 83(b) tax election checklists'
    ],
    directUrl: 'https://stripe.com/atlas/guides',
    tags: ['Stripe', 'Taxes', 'Cross-Border', 'Delaware', 'Compliance']
  }
];
