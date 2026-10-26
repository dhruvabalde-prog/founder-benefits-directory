export interface ConferenceEvent {
  id: string;
  slug: string;
  name: string;
  location: string;
  city: string;
  frequency: string;
  typicalMonth: string;
  industry: 'all' | 'ai_saas' | 'deeptech' | 'healthtech' | 'hardware' | 'fintech' | 'consumer';
  industryLabel: string;
  summary: string;
  freeEntryHack: string;
  targetAudience: string[];
  websiteUrl: string;
  officialDomain: string;
  tags: string[];
}

export const CONFERENCES_DATA: ConferenceEvent[] = [
  {
    id: 'startup-mahakumbh',
    slug: 'startup-mahakumbh-delhi',
    name: 'Startup Mahakumbh',
    location: 'Bharat Mandapam, New Delhi',
    city: 'New Delhi',
    frequency: 'Annual',
    typicalMonth: 'March',
    industry: 'all',
    industryLabel: 'All Sectors & Mega Expo',
    summary: 'India\'s largest official startup gathering backed by DPIIT, ASSOCHAM, and FICCI. Features 10+ thematic pavilions (AI, DeepTech, B2B SaaS, AgriTech, FinTech, Biotech, D2C), dedicated pitching arenas, and 1,000+ investors.',
    freeEntryHack: 'DPIIT-recognized startups and student innovators receive 100% free visitor passes through early online registration. Subsidized state stalls are provided through state startup cells.',
    targetAudience: ['Early-Stage Founders', 'Angel Investors', 'State Nodal Officers', 'Corporate CXOs'],
    websiteUrl: 'https://startupmahakumbh.org/',
    officialDomain: 'startupmahakumbh.org',
    tags: ['Delhi', 'National Summit', 'Govt Backed', 'Free Pass', 'Mega Expo']
  },
  {
    id: 'techsparks-yourstory',
    slug: 'techsparks-bengaluru-mumbai',
    name: 'TechSparks (YourStory)',
    location: 'Bengaluru & Mumbai',
    city: 'Bengaluru',
    frequency: 'Annual (Multiple Editions)',
    typicalMonth: 'September (BLR) / March (MUM)',
    industry: 'ai_saas',
    industryLabel: 'Tech, AI & Venture Capital',
    summary: 'India\'s most influential private technology and startup conference. Home of the prestigious Tech30 awards which spotlighted early-stage companies like Freshworks, Little Black Book, and LogiNext.',
    freeEntryHack: 'Apply to the Tech30 showcase to get free founder passes, complimentary exhibition stalls, and 1:1 speed meetings with top-tier VCs (Peak XV, Lightspeed, Accel).',
    targetAudience: ['Tech Founders', 'Product Leaders', 'VCs', 'Institutional Angels'],
    websiteUrl: 'https://yourstory.com/techsparks',
    officialDomain: 'yourstory.com',
    tags: ['Bengaluru', 'TechSparks', 'Tech30', 'Venture Capital', 'Networking']
  },
  {
    id: 'nasscom-product-conclave',
    slug: 'nasscom-product-conclave-npc',
    name: 'NASSCOM Product Conclave (NPC)',
    location: 'Bengaluru',
    city: 'Bengaluru',
    frequency: 'Annual',
    typicalMonth: 'October / November',
    industry: 'ai_saas',
    industryLabel: 'B2B SaaS & Product Engineering',
    summary: 'The premier summit for Indian software and B2B product founders scaling globally. High concentration of enterprise buyers, global CIOs, and SaaS founders doing $1M–$50M ARR.',
    freeEntryHack: 'Startups enrolled in NASSCOM 10,000 Startups or incubated at partner university incubators receive free delegate passes and access to closed-door enterprise buyer roundtables.',
    targetAudience: ['SaaS Founders', 'Chief Technology Officers', 'Global Enterprise Buyers'],
    websiteUrl: 'https://nasscom.in/',
    officialDomain: 'nasscom.in',
    tags: ['NASSCOM', 'B2B SaaS', 'Enterprise Buyers', 'Bengaluru', 'Product Conclave']
  },
  {
    id: 'tiecon-delhi-bengaluru',
    slug: 'tiecon-entrepreneurship-summit',
    name: 'TiEcon (The Indus Entrepreneurs)',
    location: 'Delhi-NCR, Mumbai, Bengaluru',
    city: 'Delhi-NCR',
    frequency: 'Annual (Regional Chapters)',
    typicalMonth: 'April / October',
    industry: 'all',
    industryLabel: 'Angel Investment & Mentorship',
    summary: 'One of the world\'s oldest and largest entrepreneurship conferences. World-class networking with senior industry titans, high-net-worth angel investors, and unicorn founders.',
    freeEntryHack: 'Connect with a TiE Charter Member or win a regional chapter pitch challenge to secure complimentary delegate tickets and dedicated 1:1 mentorship slots.',
    targetAudience: ['Early Founders', 'Charter Members', 'Family Offices', 'Angel Syndicates'],
    websiteUrl: 'https://tiecon.org/',
    officialDomain: 'tiecon.org',
    tags: ['TiEcon', 'Angels', 'Family Offices', 'Mentorship', 'Pitch Competitions']
  },
  {
    id: 'global-bio-india',
    slug: 'global-bio-india-birac',
    name: 'Global Bio-India (BIRAC)',
    location: 'Pragati Maidan, New Delhi',
    city: 'New Delhi',
    frequency: 'Annual',
    typicalMonth: 'September / November',
    industry: 'healthtech',
    industryLabel: 'BioTech, MedTech & Diagnostics',
    summary: 'Organized by the Department of Biotechnology and BIRAC. Gathers India\'s top bio-entrepreneurs, diagnostic innovators, clinical trial partners, and global pharmaceutical leaders.',
    freeEntryHack: 'All BIRAC BIG, SPARSH, and BIPP grantees receive free exhibition booths and delegate accreditation. Academic researchers enter for free upon pre-registration.',
    targetAudience: ['BioTech Founders', 'HealthTech Researchers', 'Hospital Networks', 'Pharma VCs'],
    websiteUrl: 'https://birac.nic.in/',
    officialDomain: 'birac.nic.in',
    tags: ['BioTech', 'HealthTech', 'BIRAC', 'Medical Devices', 'Delhi']
  },
  {
    id: 't-works-maker-faire',
    slug: 't-works-hardware-maker-showcase',
    name: 'T-Works Hardware & Prototyping Showcase',
    location: 'T-Works, Hyderabad',
    city: 'Hyderabad',
    frequency: 'Biannual',
    typicalMonth: 'August / December',
    industry: 'hardware',
    industryLabel: 'Hardware, IoT, Robotics & Drones',
    summary: 'India\'s flagship hardware and industrial prototyping gathering held at the 78,000 sq ft T-Works campus in Hyderabad. Direct access to PCB, laser, SMT, and CNC machinery.',
    freeEntryHack: 'Free public entry for hardware builders, IoT makers, and registered hardware startups upon RSVP. Prototype demo tables provided free on selection.',
    targetAudience: ['Hardware Engineers', 'Robotics Startups', 'Industrial Designers', 'Component Vendors'],
    websiteUrl: 'https://t-works.in/',
    officialDomain: 't-works.in',
    tags: ['Hardware', 'T-Works', 'Hyderabad', 'Prototyping', 'Robotics', 'Maker Faire']
  },
  {
    id: 'slush-helsinki',
    slug: 'slush-helsinki-global-founder-summit',
    name: 'Slush Helsinki',
    location: 'Helsinki, Finland',
    city: 'Helsinki (Global)',
    frequency: 'Annual',
    typicalMonth: 'November',
    industry: 'all',
    industryLabel: 'Global Venture Capital',
    summary: 'The most founder-focused and VC-dense conference on earth. Features a 1:1 matchmaking matchmaking app connecting early founders directly with Tier-1 Silicon Valley and European funds.',
    freeEntryHack: 'Apply to the Slush Founder Scholarship or the Startup India Global Immersion Program to receive 100% sponsored passes and flight subsidies.',
    targetAudience: ['International Founders', 'Global VCs', 'Tech Media'],
    websiteUrl: 'https://www.slush.org/',
    officialDomain: 'slush.org',
    tags: ['Global', 'Slush', 'Europe', 'Global VCs', 'Investor Matchmaking']
  }
];
