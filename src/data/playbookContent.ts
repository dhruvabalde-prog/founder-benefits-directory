export interface PlaybookItem {
  id: string;
  title: string;
  entity: string;
  amountOrValue: string;
  badge: string; // e.g. "Monthly Cash", "Equity-Free Grant", "Cloud Compute", "Tax Hack"
  stateOrRegion: string;
  targetAudience: string;
  whyFoundersCare: string; // Plain talk
  howToClaim: string[];
  theCatch: string; // Brutal truth / gotcha
  directUrl: string;
  domain: string;
  tags: string[];
}

export interface PlaybookChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  items: PlaybookItem[];
}

export const PLAYBOOK_CHAPTERS: PlaybookChapter[] = [
  {
    id: 'survival-stipends',
    number: '01',
    title: 'Monthly Living Stipends',
    subtitle: 'Getting paid ₹17.5k to ₹25k/month just to build your startup',
    intro: 'Before you raise money or have paying users, your biggest risk is personal burn rate. Several Indian states literally deposit a monthly living stipend into your bank account for 12 months with zero equity. If your hometown is in one of these states, you can claim this while working remotely.',
    items: [
      {
        id: 'istart-rajasthan-stipend',
        title: 'Rajasthan iStart Sustenance Allowance',
        entity: 'Govt of Rajasthan (DoIT&C)',
        amountOrValue: '₹20,000 to ₹25,000 / month (1 Year)',
        badge: 'Monthly Cash',
        stateOrRegion: 'Rajasthan',
        targetAudience: 'Early-stage founders with an MVP or validated prototype',
        whyFoundersCare: '₹2.4L to ₹3.0 Lakhs direct cash into your personal bank account across 12 months. Covers your groceries, rent, and cloud bills without diluting a single percent of equity.',
        howToClaim: [
          'Incorporate your entity (Pvt Ltd or registered LLP) with a registered office in Rajasthan.',
          'Register on istart.rajasthan.gov.in and fill out the startup questionnaire.',
          'Present a 7-minute deck to the district or state evaluation committee online.',
          'Disbursement begins directly into founder bank accounts upon committee sanction.'
        ],
        theCatch: 'You must maintain valid company filings with a Rajasthan address. If claiming the higher ₹25k slab, at least one co-founder must be a woman or SC/ST promoter.',
        directUrl: 'https://istart.rajasthan.gov.in/',
        domain: 'istart.rajasthan.gov.in',
        tags: ['Monthly Stipend', 'Rajasthan', 'Survival Cash', 'Early Stage']
      },
      {
        id: 'gujarat-sustenance',
        title: 'Gujarat Startup Sustenance Allowance',
        entity: 'Industries Commissionerate & i-Hub',
        amountOrValue: '₹20,000 to ₹25,000 / month (1 Year)',
        badge: 'Monthly Cash',
        stateOrRegion: 'Gujarat',
        targetAudience: 'Founders incubated at an approved Gujarat Nodal Institute',
        whyFoundersCare: 'Up to ₹3.0 Lakhs annual living support while building your product in Ahmedabad, Surat, or remotely through nodal partner institutions.',
        howToClaim: [
          'Get affiliated or incubated at a Gujarat Nodal Institute (like i-Hub Ahmedabad, GTU Innovation Council, or PDPU).',
          'Submit the Nodal recommendation to the State Level Implementation Committee (SLIC).',
          'Once approved, monthly allowance is credited directly for 12 consecutive months.'
        ],
        theCatch: 'You cannot draw another corporate salary while claiming the allowance. Nodal institute endorsement is mandatory before state approval.',
        directUrl: 'https://ihubgujarat.in/',
        domain: 'ihubgujarat.in',
        tags: ['Monthly Stipend', 'Gujarat', 'i-Hub', 'Early Stage']
      },
      {
        id: 'up-startinup-stipend',
        title: 'Uttar Pradesh StartInUP Sustenance',
        entity: 'Department of IT & Electronics, UP',
        amountOrValue: '₹17,500 / month (1 Year)',
        badge: 'Monthly Cash',
        stateOrRegion: 'Uttar Pradesh',
        targetAudience: 'Startups registered in Noida, Lucknow, Kanpur, or across UP',
        whyFoundersCare: '₹2.1 Lakhs total living allowance for young tech builders. Ideal for founders living in Noida or Greater Noida wanting to stay connected to NCR venture capital.',
        howToClaim: [
          'Register your entity on startinup.up.gov.in with a UP registered address.',
          'Complete DPIIT registration and submit pitch deck to an empanelled UP incubator.',
          'Clear incubator committee review for monthly disbursement sanction.'
        ],
        theCatch: 'Disbursement cycles can face bureaucratic delays; apply early and maintain regular contact with your host incubator manager.',
        directUrl: 'https://startinup.up.gov.in/',
        domain: 'startinup.up.gov.in',
        tags: ['Monthly Stipend', 'Uttar Pradesh', 'Noida', 'NCR Adjacent']
      },
      {
        id: 'odisha-sustenance',
        title: 'Startup Odisha Monthly Allowance',
        entity: 'MSME Dept, Govt of Odisha',
        amountOrValue: '₹20,000 to ₹22,000 / month (1 Year)',
        badge: 'Monthly Cash',
        stateOrRegion: 'Odisha',
        targetAudience: 'DPIIT startups registered with Startup Odisha (O-Hub)',
        whyFoundersCare: 'Generous monthly cash allocation with substantially higher acceptance rates than saturated states like Delhi or Karnataka.',
        howToClaim: [
          'Register on startupodisha.gov.in with entity CIN/LLPIN in Odisha.',
          'Apply for Monthly Allowance under the Startup Odisha policy.',
          'Attend virtual evaluation pitch with the state nodal agency.'
        ],
        theCatch: 'Entity must show measurable operational or tech milestones during quarterly reviews.',
        directUrl: 'https://startupodisha.gov.in/',
        domain: 'startupodisha.gov.in',
        tags: ['Monthly Stipend', 'Odisha', 'O-Hub', 'Bhubaneswar']
      }
    ]
  },
  {
    id: 'equity-free-grants',
    number: '02',
    title: 'The Non-Dilutive Grant Playbook',
    subtitle: 'From ₹15 Lakhs to ₹50 Lakhs non-dilutive capital',
    intro: 'Venture capitalists will ask for 15% to 25% of your company for ₹50 Lakhs. The government will give you that exact same ₹50 Lakhs for 0% equity if you know which schemes to target and how to structure your milestones.',
    items: [
      {
        id: 'sisfs-central',
        title: 'Startup India Seed Fund Scheme (SISFS)',
        entity: 'DPIIT, Central Government',
        amountOrValue: 'Up to ₹20L Grant + ₹50L Debt/CCPS',
        badge: 'Central Grant',
        stateOrRegion: 'All States / Central',
        targetAudience: 'DPIIT registered startups incorporated less than 2 years ago',
        whyFoundersCare: 'The biggest early-stage grant vehicle in the country. Up to ₹20 Lakhs as a pure 100% grant for prototype validation, trials, and pilot build.',
        howToClaim: [
          'Make sure your Pvt Ltd or LLP is DPIIT certified and incorporated < 2 years ago.',
          'Log in to seedfund.startupindia.gov.in and select up to 3 incubators.',
          'Pro-tip: Filter incubators by unspent funds on the public dashboard to pick centers actively seeking applicants.',
          'Present a 10-slide deck on market need, technical feasibility, and milestone budget.'
        ],
        theCatch: 'The 2-year incorporation limit is strictly enforced down to the calendar day. If your company is 2 years and 1 day old, the portal algorithmically locks you out.',
        directUrl: 'https://seedfund.startupindia.gov.in/',
        domain: 'seedfund.startupindia.gov.in',
        tags: ['Central Grant', 'SISFS', 'Seed Capital', 'Zero Equity']
      },
      {
        id: 'karnataka-elevate',
        title: 'Karnataka ELEVATE 100 / Idea2PoC',
        entity: 'Karnataka Innovation & Technology Society (KITS)',
        amountOrValue: 'Up to ₹50 Lakhs Non-Dilutive Grant',
        badge: 'State Grant',
        stateOrRegion: 'Karnataka',
        targetAudience: 'Karnataka-registered tech, biotech, agritech, and deeptech startups',
        whyFoundersCare: 'One of India\'s most prestigious state grants. ₹50 Lakhs credited directly to a project escrow account with zero equity taken.',
        howToClaim: [
          'Register on missionstartup.karnataka.gov.in when the annual call opens.',
          'Pass the Stage 1 online pitch screening and Stage 2 in-person/virtual jury presentation.',
          'Submit project milestone budget and sign tripartite agreement.'
        ],
        theCatch: 'At least 50% of your permanent payroll workforce must be located in Karnataka during physical compliance audit.',
        directUrl: 'https://missionstartup.karnataka.gov.in/elevate.html',
        domain: 'missionstartup.karnataka.gov.in',
        tags: ['Karnataka', 'Bengaluru', 'ELEVATE', '₹50L Grant']
      },
      {
        id: 'birac-big-grant',
        title: 'BIRAC Biotechnology Ignition Grant (BIG)',
        entity: 'Biotechnology Industry Research Assistance Council (BIRAC)',
        amountOrValue: 'Up to ₹50 Lakhs (100% Non-Dilutive)',
        badge: 'Bio/MedTech Grant',
        stateOrRegion: 'All States / Central',
        targetAudience: 'Innovators in MedTech, Diagnostics, Healthcare, Biosensors, Agri-Biotech',
        whyFoundersCare: 'Full funding for 18 months of clinical or wet-lab validation. Zero equity dilution, access to premier research labs, and CDSCO regulatory fast-tracking.',
        howToClaim: [
          'Apply during the semi-annual call window (opens strictly Jan 1 - Feb 15 and July 1 - Aug 15).',
          'Choose a partner incubator (C-CAMP Bengaluru, Venture Center Pune, or IKP Hyderabad).',
          'Present proposal before the Technical Expert Committee (TEC).'
        ],
        theCatch: 'Strict milestone deliverables. Funds are disbursed in 4 tranches against verifiable lab data and experiment protocols.',
        directUrl: 'https://birac.nic.in/big.php',
        domain: 'birac.nic.in',
        tags: ['Biotech', 'MedTech', 'BIRAC', 'C-CAMP', '₹50L Grant']
      },
      {
        id: 'bihar-zero-interest-seed',
        title: 'Bihar 10-Year 0% Interest Seed Capital',
        entity: 'Department of Industries, Govt of Bihar',
        amountOrValue: '₹10 Lakhs (0% Interest for 10 Years)',
        badge: 'Long-term Capital',
        stateOrRegion: 'Bihar',
        targetAudience: 'Startups registered in Bihar with an innovative tech or business model',
        whyFoundersCare: 'A 10-year interest-free loan with zero collateral effectively acts as non-dilutive equity. Repayment doesn\'t begin for a decade.',
        howToClaim: [
          'Register your entity with a registered address in Bihar.',
          'Apply via startup.bihar.gov.in and pitch to the state screening cell.',
          'Avail free incubation and office infrastructure at IIT Patna or CIMP alongside the funds.'
        ],
        theCatch: 'Requires active compliance with annual state filing milestones to keep loan status in good standing.',
        directUrl: 'https://startup.bihar.gov.in/',
        domain: 'startup.bihar.gov.in',
        tags: ['Bihar', '0% Interest', '10-Year Loan', 'Patna']
      },
      {
        id: 'tamilnadu-tanseed',
        title: 'Tamil Nadu StartupTN TANSEED',
        entity: 'StartupTN Mission',
        amountOrValue: 'Up to ₹15 Lakhs Non-Dilutive Grant',
        badge: 'State Grant',
        stateOrRegion: 'Tamil Nadu',
        targetAudience: 'Early-stage tech or social impact ventures in Tamil Nadu',
        whyFoundersCare: '₹15 Lakhs seed grant released in 3 milestone tranches. Includes the StartupTN Smart Card providing enterprise discounts on cloud and legal retainers.',
        howToClaim: [
          'Register on startuptn.in and apply during active TANSEED cohort editions.',
          'Complete the 3-minute pitch before Sectoral Screening Committees in Chennai or regional hubs.'
        ],
        theCatch: 'Startup must demonstrate actual economic activity or physical R&D team presence in Tamil Nadu.',
        directUrl: 'https://startuptn.in/tanseed',
        domain: 'startuptn.in',
        tags: ['Tamil Nadu', 'TANSEED', 'Seed Grant', 'Chennai']
      }
    ]
  },
  {
    id: 'free-cloud-ai-stack',
    number: '03',
    title: 'The $350,000 Free Tech & AI Stack',
    subtitle: 'How to never pay a dollar for servers, LLMs, or dev tools in Year 1',
    intro: 'Cloud providers and SaaS giants want your startup hooked on their ecosystem early. By stacking the right startup programs in the right sequence, you can host your entire production stack, run thousands of LLM inference queries, and give 20 developers GitHub Enterprise without paying a cent.',
    items: [
      {
        id: 'microsoft-founders-hub',
        title: 'Microsoft for Startups Founders Hub',
        entity: 'Microsoft & OpenAI',
        amountOrValue: 'Up to $150,000 Azure + $2,500–$20k OpenAI',
        badge: 'Zero Funding Needed',
        stateOrRegion: 'Global / All India',
        targetAudience: 'Any founder with an idea (No legal incorporation or VC funding required for Level 1)',
        whyFoundersCare: 'Open to literally anyone with a LinkedIn profile. Start with $1k Azure + $2.5k OpenAI credits immediately. As your app scales, level up to $150,000 Azure credits + 20 free GitHub Enterprise seats ($5,000 value).',
        howToClaim: [
          'Sign in with your LinkedIn account at foundershub.startups.microsoft.com.',
          'Fill out a 5-minute description of what you are building.',
          'Approval for Level 1 is automated or takes 24–48 hours.',
          'Deploy GPT-4o, embeddings, or Azure VMs straight from your sponsorship credits.'
        ],
        theCatch: 'Advancing beyond Level 1 requires showing that your application is actively consuming resources in your Azure tenant.',
        directUrl: 'https://foundershub.startups.microsoft.com/',
        domain: 'foundershub.startups.microsoft.com',
        tags: ['Azure', 'OpenAI', 'GPT-4o', 'GitHub Enterprise', 'No Funding Required']
      },
      {
        id: 'google-cloud-startups',
        title: 'Google Cloud for Startups & Vertex AI',
        entity: 'Google Cloud Platform',
        amountOrValue: 'Up to $200,000 ($350,000 for AI Startups)',
        badge: 'Cloud & LLM Compute',
        stateOrRegion: 'Global / All India',
        targetAudience: 'Bootstrapped ($2k) to VC-backed / Accelerator startups ($100k-$200k)',
        whyFoundersCare: 'Full coverage for Vertex AI and Gemini API tokens, BigQuery, and Google Kubernetes Engine. Dedicated track for AI-first startups offers up to $350,000 in total credits.',
        howToClaim: [
          'Set up a GCP billing account with your company domain email.',
          'Apply at cloud.google.com/startup and select your stage (Start vs Scale vs AI-first).',
          'Enter your incubator or accelerator reference code if applicable.'
        ],
        theCatch: 'Year 2 Scale credits follow a 20% co-spend model (Google matches 20% of your usage up to $100k). Year 1 is 100% free up to $100k.',
        directUrl: 'https://cloud.google.com/startup',
        domain: 'cloud.google.com',
        tags: ['Google Cloud', 'Vertex AI', 'Gemini API', 'BigQuery']
      },
      {
        id: 'aws-activate',
        title: 'AWS Activate (Founders vs Portfolio)',
        entity: 'Amazon Web Services',
        amountOrValue: '$1,000 to $100,000 USD Cloud Credits',
        badge: 'Cloud Infra',
        stateOrRegion: 'Global / All India',
        targetAudience: 'Bootstrapped founders ($1k) or incubator/VC portfolio companies ($5k–$100k)',
        whyFoundersCare: 'The industry benchmark for cloud compute. Covers EC2, RDS, S3, and Amazon Bedrock foundation models (Claude 3.5 Sonnet, Llama 3).',
        howToClaim: [
          'Apply at aws.amazon.com/activate with your AWS Account ID.',
          'Use your company domain email (applications from gmail.com addresses are frequently rejected).',
          'Enter your incubator Org ID if claiming Portfolio tier.'
        ],
        theCatch: 'AWS has a strict lifetime cap of $100,000 across the life of your company. Credits do not cover third-party AWS Marketplace software.',
        directUrl: 'https://aws.amazon.com/activate/',
        domain: 'aws.amazon.com',
        tags: ['AWS', 'Bedrock', 'Claude 3.5', 'EC2', 'Cloud Credits']
      },
      {
        id: 'notion-for-startups',
        title: 'Notion for Startups + Unlimited AI',
        entity: 'Notion Labs',
        amountOrValue: 'Up to 6 Months Free ($6,000+ Value)',
        badge: 'Productivity',
        stateOrRegion: 'Global / All India',
        targetAudience: 'Startups with fewer than 100 employees',
        whyFoundersCare: 'Six months of Notion Plus with unlimited team members and Unlimited Notion AI add-on at zero cost. Essential for team wikis, sprint tracking, and investor updates.',
        howToClaim: [
          'Create a free Notion workspace with your company domain email.',
          'Apply at notion.so/startups using your incubator/VC partner code (or select bootstrapped track for 3 months).',
          'Credit balance is applied directly to workspace billing.'
        ],
        theCatch: 'Only applies to new Notion Plus workspaces; cannot be used to discount an existing paid enterprise plan.',
        directUrl: 'https://www.notion.so/startups',
        domain: 'notion.so',
        tags: ['Notion', 'Notion AI', 'Workspace', 'Wiki']
      },
      {
        id: 'hubspot-startups',
        title: 'HubSpot for Startups',
        entity: 'HubSpot',
        amountOrValue: '75% to 90% Off Year 1 ($15,000+ Savings)',
        badge: 'CRM & Marketing',
        stateOrRegion: 'Global / All India',
        targetAudience: 'Seed stage (<$2M raised) or affiliated with partner accelerators',
        whyFoundersCare: 'Access enterprise CRM, automated drip marketing sequences, meeting booking links, and sales pipeline tools without paying thousands of dollars.',
        howToClaim: [
          'Verify your partner incubator or accelerator at hubspot.com/startups.',
          'Submit the verification form to unlock the 90% coupon code for checkout.'
        ],
        theCatch: 'Pricing jumps to standard commercial rates after Year 2; ensure your inbound marketing ROI covers the eventual upgrade.',
        directUrl: 'https://www.hubspot.com/startups',
        domain: 'hubspot.com',
        tags: ['CRM', 'HubSpot', 'Marketing', 'Sales Automation']
      }
    ]
  },
  {
    id: 'banking-forex',
    number: '04',
    title: 'Founder Banking & Cross-Border Money',
    subtitle: 'Zero-balance accounts, automated forex, and 0% GST on foreign revenue',
    intro: 'Traditional Indian branch banking can paralyze a tech startup. Between high quarterly balance penalties, arbitrary forex conversion spreads, and blocked foreign client wires, picking the right banking setup saves you hundreds of hours and thousands in hidden fees.',
    items: [
      {
        id: 'hdfc-smartup-banking',
        title: 'HDFC SmartUp Startup Account',
        entity: 'HDFC Bank',
        amountOrValue: '12-Month Zero Balance + Preferential FX Margins',
        badge: 'Indian Banking',
        stateOrRegion: 'All States / Central',
        targetAudience: 'DPIIT recognized startups and incorporated entities < 5 years',
        whyFoundersCare: 'Standard business accounts demand ₹50,000 to ₹1 Lakh average quarterly balance (AQB). SmartUp waives this for 12 months and assigns a dedicated Forex desk for export inward remittances.',
        howToClaim: [
          'Apply online at hdfcbank.com/sme/startup-banking or request a SmartUp Relationship Manager.',
          'Provide CIN/LLPIN, PAN, and DPIIT recognition certificate for tier upgrade.',
          'Account is operational within 48–72 hours.'
        ],
        theCatch: 'AQB waivers expire after 12–24 months. Instruct your relationship manager to lock Purpose Code P0802 for software export to receive automated e-FIRS statements.',
        directUrl: 'https://www.hdfcbank.com/sme/startup-banking',
        domain: 'hdfcbank.com',
        tags: ['HDFC', 'Zero Balance', 'Forex', 'Current Account']
      },
      {
        id: 'razorpayx-stack',
        title: 'RazorpayX Business Banking & Founder Cards',
        entity: 'RazorpayX',
        amountOrValue: 'Compliant Payroll + High-Limit Corporate Cards',
        badge: 'FinOps & Cards',
        stateOrRegion: 'All States / Central',
        targetAudience: 'Startups paying team salaries and overseas SaaS bills',
        whyFoundersCare: 'Automates 100% of TDS, PF, PT, and ESIC government challans on salary day with 1 click. Generates virtual founder cards with spend caps to pay for AWS and OpenAI without forex markup surprises.',
        howToClaim: [
          'Sign up on razorpay.com/x with your business email.',
          'Complete merchant KYC online and link your existing bank or open a digital current account.'
        ],
        theCatch: 'Corporate credit card limits are pegged to your monthly payment gateway volumes or fixed deposit collateral.',
        directUrl: 'https://razorpay.com/x/',
        domain: 'razorpay.com',
        tags: ['RazorpayX', 'Payroll', 'Corporate Cards', 'TDS Automation']
      },
      {
        id: 'mercury-us-bank',
        title: 'Mercury Bank (US Delaware Entities)',
        entity: 'Mercury (Choice Financial Group & Evolve, FDIC)',
        amountOrValue: '$5M FDIC Insurance + ~5% APY Treasury',
        badge: 'US / Cross-Border',
        stateOrRegion: 'Global / US Entities',
        targetAudience: 'Founders with a US Delaware C-Corp or LLC (Stripe Atlas / YC)',
        whyFoundersCare: 'Open a genuine US business bank account 100% remotely from India with an Indian passport and US EIN. Zero monthly fees, zero incoming wire fees, and automatic high-yield treasury investment on idle seed checks.',
        howToClaim: [
          'Form your US entity via Stripe Atlas, Clerky, or Firstbase.',
          'Obtain IRS EIN confirmation letter (CP 575 or 147C).',
          'Apply at mercury.com with founder passport and company formation documents; approved in 1–2 business days.'
        ],
        theCatch: 'Indian residents must adhere strictly to RBI Overseas Direct Investment (ODI) regulations to avoid cross-border compliance penalties in India.',
        directUrl: 'https://mercury.com/',
        domain: 'mercury.com',
        tags: ['US Banking', 'Mercury', 'Delaware', 'FDIC $5M', 'Treasury']
      }
    ]
  },
  {
    id: 'founder-arbitrage-hacks',
    number: '05',
    title: 'The Legal Arbitrage & Dual-State Playbook',
    subtitle: 'The insider playbooks second-time founders use to capture dual benefits',
    intro: 'India\'s federal startup structure creates massive geographic arbitrage. State policies compete fiercely for startups by offering living stipends, lease subsidies, and patent reimbursements. Here are the exact tactical playbooks founders use to capitalize on multiple programs simultaneously.',
    items: [
      {
        id: 'hack-ncr-rajasthan',
        title: 'The NCR Living + Rajasthan Domicile Arbitrage',
        entity: 'iStart Rajasthan + NCR Tech Hub',
        amountOrValue: '₹2.4L–₹3L/Yr Living Stipend + Up to ₹25L Grant',
        badge: 'Cross-State Arbitrage',
        stateOrRegion: 'Rajasthan & Haryana/Delhi',
        targetAudience: 'Founders based in Gurugram, Delhi NCR, or Bengaluru with Rajasthan roots',
        whyFoundersCare: 'You don\'t have to physically remain in your hometown to benefit from its startup policy. Register your company CIN/LLP in Rajasthan (using family property or virtual office), claim the monthly ₹20k–₹25k sustenance allowance directly, while operating in Gurugram or Bengaluru.',
        howToClaim: [
          'Maintain registered office or at least one promoter with Rajasthan Aadhaar/domicile.',
          'Register on istart.rajasthan.gov.in and complete online milestone evaluations.',
          'Deposit the monthly living stipend into founder bank accounts to cover personal runway.'
        ],
        theCatch: 'Ensure company statutory GST and MCA filings remain registered in Rajasthan.',
        directUrl: 'https://istart.rajasthan.gov.in/',
        domain: 'istart.rajasthan.gov.in',
        tags: ['Arbitrage', 'Rajasthan', 'Gurugram', 'Living Stipend']
      },
      {
        id: 'hack-patent-double-dip',
        title: 'The DPIIT + State MSME Patent Double-Dip (Net 0% Cost)',
        entity: 'Patent Office + State Startup Cell',
        amountOrValue: '100% Patent Cost Coverage (Save ₹1L–₹10L)',
        badge: 'Legal & IP Hack',
        stateOrRegion: 'All States / Central',
        targetAudience: 'Any founder filing provisional or complete patents in India or PCT abroad',
        whyFoundersCare: 'Step 1: Use your DPIIT Startup Certificate to reduce official filing fees from ₹8,000 to ₹1,600 (80% statutory discount). Step 2: Submit remaining attorney and filing invoices to your State Startup Cell (e.g. Karnataka reimburses up to ₹2L domestic / ₹10L international; Haryana & Maharashtra reimburse up to ₹2L). Total net out-of-pocket cost = ₹0.',
        howToClaim: [
          'Quote DPIIT recognition number during initial IP filing to get immediate 80% fee waiver and fast-track examination.',
          'Within 6 months of filing receipt, submit legal attorney bills to your State Startup Cell for 100% expense reimbursement.'
        ],
        theCatch: 'State reimbursement requires formal CA-certified invoices and proof of statutory filing numbers.',
        directUrl: 'https://www.startupindia.gov.in/',
        domain: 'startupindia.gov.in',
        tags: ['Patents', 'DPIIT', 'Double Dip', 'Zero Cost IP']
      },
      {
        id: 'hack-forex-lut',
        title: 'The GST Letter of Undertaking (LUT) Export Shield',
        entity: 'GST Portal & RBI',
        amountOrValue: '18% Tax Exemption + Full Input Tax Refunds',
        badge: 'Tax Arbitrage',
        stateOrRegion: 'All States / Central',
        targetAudience: 'Tech founders receiving US Dollar payments from international clients or Stripe',
        whyFoundersCare: 'Filing Form GST RFD-11 (Letter of Undertaking) takes 2 minutes at the start of the fiscal year. It legally exempts all export SaaS revenue from 18% IGST and allows you to claim cash refunds on the GST you paid for your developer laptops, servers, and office rent.',
        howToClaim: [
          'Login to the GST portal and file Form GST RFD-11 under User Services.',
          'Add your LUT reference number to foreign client invoices.',
          'Instruct your bank to tag incoming foreign funds with RBI Purpose Code P0802 to auto-issue e-FIRS certificates.'
        ],
        theCatch: 'Export revenue must be realized in convertible foreign currency within 9 months of invoice date.',
        directUrl: 'https://www.gst.gov.in/',
        domain: 'gst.gov.in',
        tags: ['GST LUT', '0% Tax', 'SaaS Export', 'Tax Shield']
      }
    ]
  }
];
