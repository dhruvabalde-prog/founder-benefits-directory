import { BenefitItem } from '../types';

export const GOVERNMENT_SCHEMES: BenefitItem[] = [
  // CENTRAL SCHEMES
  {
    id: 'dpiit-startup-recognition',
    title: 'DPIIT Startup India Recognition & Section 80-IAC Tax Exemption',
    category: 'government',
    provider: 'DPIIT, Ministry of Commerce & Industry',
    stateOrRegion: 'All States / Central',
    valueAmount: '100% Tax Holiday (3 Yrs) + 80% Patent Rebate',
    shortDescription: 'Core certification providing 100% tax exemption on profits for 3 consecutive years (Sec 80-IAC), 80% rebate in patent filing fees, fast-track examination, and GeM procurement relaxation.',
    fullDescription: 'The foundational gateway for all Indian startups. DPIIT recognition certifies private limited companies or LLPs (incorporated <10 years ago, turnover <₹100 Cr) as innovative startups. Eligible entities can apply for Section 80-IAC 3-year income tax holiday and self-certification under 9 labor and environmental laws.',
    eligibility: [
      'Pvt Ltd or registered LLP in India < 10 years from incorporation',
      'Turnover has never exceeded ₹100 Crore in any financial year',
      'Entity is working towards innovation, development, or improvement of products, processes, or scalable business model',
      'Must NOT be formed by splitting up or reconstruction of an existing business'
    ],
    keyPerks: [
      'Section 80-IAC: 100% deduction of profits for 3 consecutive assessment years',
      '80% statutory rebate on patent filing fees + 50% on trademark fees',
      'Fast-track patent examination (months instead of 4-5 years)',
      'Exemption from prior turnover and experience criteria on GeM public procurement tenders',
      'Self-certification under 6 Labor and 3 Environmental laws for 5 years without inspection'
    ],
    hackOrNuance: 'DPIIT Certificate is NOT the same as 80-IAC Tax Exemption! DPIIT takes 48 hours, but 80-IAC requires Inter-Ministerial Board (IMB) approval (>90% rejection rate). Demonstrate genuine proprietary tech or filed patents.',
    officialLink: 'https://www.startupindia.gov.in/content/sih/en/startupgov/startup-recognition-page.html',
    domainName: 'startupindia.gov.in',
    tags: ['Central', 'Tax Holiday', 'Patents', 'GeM', 'Labor Law', 'DPIIT'],
    founderTypes: ['all', 'bootstrapped', 'women', 'sc_st', 'deeptech_ai']
  },
  {
    id: 'sisfs-seed-fund-scheme',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    category: 'government',
    provider: 'DPIIT & Expert Advisory Committee',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Up to ₹20L Grant + ₹50L Debt/CCPS',
    shortDescription: 'Up to ₹20 Lakhs 100% non-dilutive grant for proof-of-concept / prototype validation, or up to ₹50 Lakhs convertible debentures/debt for market entry through approved incubators.',
    fullDescription: 'Flagship non-dilutive grant scheme disbursed through certified incubators across India. Founders choose up to 3 incubators who evaluate the pitch and release milestone-based capital.',
    eligibility: [
      'DPIIT-recognized startup incorporated not more than 2 years ago at application date',
      'Must use technology in its core product, service, or business distribution model',
      'Must NOT have received >₹10 Lakhs monetary support under any other Central or State Govt scheme',
      'Indian promoters must hold at least 51% equity'
    ],
    keyPerks: [
      'Up to ₹20 Lakhs non-dilutive grant for PoC, prototype, and pilot trials',
      'Up to ₹50 Lakhs for market scaling via convertible debt or CCPS',
      'Zero personal collateral or founder personal guarantee required'
    ],
    hackOrNuance: 'Target incubators in Tier-2/Tier-3 states with undisbursed allocations on the public SISFS dashboard rather than over-applied IIT/IIM incubators.',
    officialLink: 'https://seedfund.startupindia.gov.in/',
    domainName: 'seedfund.startupindia.gov.in',
    tags: ['Central', 'Non-dilutive', 'Seed Grant', 'Prototype', 'Incubator'],
    founderTypes: ['all', 'bootstrapped', 'women', 'sc_st', 'student']
  },
  {
    id: 'standup-india-women-scst',
    title: 'Stand-Up India Scheme (For Women & SC/ST Founders)',
    category: 'government',
    provider: 'Department of Financial Services & SIDBI',
    stateOrRegion: 'All States / Central',
    valueAmount: '₹10 Lakhs to ₹1 Crore Bank Loan',
    shortDescription: 'Composite bank loans between ₹10 Lakhs and ₹1 Crore at subsidized interest rates for greenfield enterprises led by women or SC/ST entrepreneurs.',
    fullDescription: 'Mandates every scheduled commercial bank branch to finance at least one woman entrepreneur and one SC/ST entrepreneur with collateral-concessional term loans and working capital.',
    eligibility: [
      'Enterprise must be a Greenfield project in manufacturing, services, agri-allied, or trading',
      '>51% equity and controlling stake held by a Woman or SC/ST entrepreneur',
      'Borrower should not be in default to any financial institution'
    ],
    keyPerks: [
      'Composite loan covering machinery, civil works, and working capital up to ₹1 Crore',
      'Margin money requirement reduced to 15%',
      'Lower interest rate: Base Rate (MCLR) + 3% + lowest tenor premium',
      'Repayable in 7 years with up to 18 months moratorium'
    ],
    hackOrNuance: 'Apply directly via the standupmitra.in portal to log your lead into the bank\'s regional compliance quota dashboard, bypassing branch manager hesitation.',
    officialLink: 'https://www.standupmitra.in/',
    domainName: 'standupmitra.in',
    tags: ['Central', 'Women Founders', 'SC/ST', 'Bank Loan', 'Greenfield'],
    founderTypes: ['women', 'sc_st']
  },
  {
    id: 'birac-big-grant',
    title: 'BIRAC Biotechnology Ignition Grant (BIG)',
    category: 'government',
    provider: 'Biotechnology Industry Research Assistance Council (BIRAC)',
    stateOrRegion: 'All States / Central',
    valueAmount: 'Up to ₹50 Lakhs (100% Non-Dilutive Grant)',
    shortDescription: 'Up to ₹50 Lakhs non-dilutive grant-in-aid for 18 months to establish proof-of-concept in BioTech, MedTech, Diagnostics, Biosensors, and Agritech.',
    fullDescription: 'India\'s premier non-dilutive biotech grant with zero equity dilution. Administered through top bio-incubators including C-CAMP Bengaluru, Venture Center Pune, and IKP Knowledge Park Hyderabad.',
    eligibility: [
      'Individual biotech innovators or DPIIT startups incorporated < 5 years',
      'Promoter must hold at least 51% ownership',
      'Innovative proposal in MedTech, Diagnostics, Biopharma, or Agritech with patentable novelty'
    ],
    keyPerks: [
      '₹50 Lakhs grant disbursed in milestone-based tranches over 18 months',
      'Zero equity dilution, zero repayment',
      'Access to state-of-the-art wet labs, cleanrooms, and clinical testing facilities'
    ],
    hackOrNuance: 'Calls open strictly twice a year (Jan 1 - Feb 15 and July 1 - Aug 15). Lock your partner bio-incubator (C-CAMP or Venture Center) 30 days prior to submission.',
    officialLink: 'https://birac.nic.in/big.php',
    domainName: 'birac.nic.in',
    tags: ['Biotech', 'MedTech', 'HealthTech', 'Grant', 'Non-dilutive', 'BIRAC'],
    founderTypes: ['biotech', 'deeptech_ai']
  },
  {
    id: 'meity-tide-samridh',
    title: 'MeitY TIDE 2.0 & SAMRIDH Accelerator Schemes',
    category: 'government',
    provider: 'Ministry of Electronics & IT (MeitY)',
    stateOrRegion: 'All States / Central',
    valueAmount: '₹7L EiR to ₹30L Grant / Up to ₹40L Matching',
    shortDescription: '₹7 Lakhs Entrepreneur-in-Residence (EiR) stipend, up to ₹30 Lakhs grant for tech/IoT/AI prototypes, and up to ₹40 Lakhs accelerator matching capital.',
    fullDescription: 'Supports ICT and emerging deeptech startups utilizing IoT, AI, Robotics, and Blockchain. TIDE 2.0 operates via 51 premier incubation centers across India.',
    eligibility: [
      'Tech startups developing software, AI, electronics, or IoT solutions',
      'DPIIT recognized entity',
      'For SAMRIDH: Startups accepted by MeitY-empanelled accelerators'
    ],
    keyPerks: [
      'EiR Fellowship: ₹30,000/month stipend up to ₹7 Lakhs to build full-time',
      'Grant: Up to ₹30 Lakhs for product development and field pilots',
      'SAMRIDH: Up to ₹40 Lakhs matching capital for accelerated scaleups'
    ],
    hackOrNuance: 'Apply through Tier-2/Tier-3 university TIDE 2.0 incubation centers (IIITs/NITs) where competition is far lower than IIT centers.',
    officialLink: 'https://meitystartuphub.in/',
    domainName: 'meitystartuphub.in',
    tags: ['DeepTech', 'AI', 'IoT', 'Hardware', 'MeitY', 'Grant'],
    founderTypes: ['deeptech_ai', 'hardware', 'bootstrapped']
  },

  // RAJASTHAN
  {
    id: 'rajasthan-istart',
    title: 'iStart Rajasthan (Monthly Sustenance + Seed Grants)',
    category: 'sustenance',
    provider: 'Department of IT&C, Government of Rajasthan',
    stateOrRegion: 'Rajasthan',
    valueAmount: '₹20k–₹25k/Mo Sustenance + Up to ₹25L Seed Grant',
    shortDescription: 'Direct monthly living stipend of ₹20,000 to ₹25,000/month for 1 year deposited directly to founders, plus up to ₹25 Lakhs non-dilutive seed grants.',
    fullDescription: 'One of India\'s most aggressive state startup initiatives. Covers monthly founder sustenance, seed funding up to ₹25 Lakhs, viability grants up to ₹50 Lakhs, and subsidized plug-and-play spaces at Bhamashah Techno Hub Jaipur.',
    eligibility: [
      'Registered with iStart Rajasthan portal and incorporated < 10 years',
      'Registered office or operational presence in Rajasthan',
      'Entity must be working on an innovative tech or business model'
    ],
    keyPerks: [
      'Sustenance Allowance: ₹20,000/mo (General) or ₹25,000/mo (Women/SC/ST/Rural founders) for 12 months',
      'Seed Grant: Up to ₹5 Lakhs (Idea stage), up to ₹15 Lakhs (Prototype), up to ₹25 Lakhs (Viable product)',
      '100% free co-working seats at Bhamashah Techno Hub (Jaipur, Jodhpur, Udaipur, Kota)',
      'Marketing & Exhibition Assistance: Up to ₹3 Lakhs for national/international expos'
    ],
    hackOrNuance: 'Live in Gurugram or Bengaluru while maintaining registered office / promoter domicile in Rajasthan to draw ₹25k/mo living stipend while building tech out of metropolitan hubs.',
    officialLink: 'https://istart.rajasthan.gov.in/',
    domainName: 'istart.rajasthan.gov.in',
    tags: ['Rajasthan', 'Sustenance', 'Monthly Allowance', 'Seed Grant', 'State Policy'],
    founderTypes: ['all', 'bootstrapped', 'women', 'sc_st', 'student']
  },

  // GUJARAT
  {
    id: 'gujarat-startup-policy',
    title: 'Gujarat Startup Policy (Sustenance Allowance & Seed Support)',
    category: 'sustenance',
    provider: 'Industries Commissionerate & i-Hub Gujarat',
    stateOrRegion: 'Gujarat',
    valueAmount: '₹20k–₹25k/Mo Sustenance + Up to ₹30L Seed Grant',
    shortDescription: '₹20,000–₹25,000 monthly living stipend for 12 months + up to ₹30 Lakhs seed support for prototype validation and raw materials.',
    fullDescription: 'Gujarat pays a direct monthly living stipend into founder bank accounts alongside prototype development grants and exhibition subsidies, administered via accredited Nodal Institutes like i-Hub Ahmedabad.',
    eligibility: [
      'DPIIT startup registered in Gujarat or incubated at an approved Gujarat Nodal Institution (i-Hub, GTU, PDPU, NID, CIIE IIM-A)',
      'Incorporated < 10 years'
    ],
    keyPerks: [
      'Sustenance: ₹20,000/mo (General) or ₹25,000/mo (Women/SC/ST/Differently-abled) for 12 months',
      'Seed Support: Up to ₹30 Lakhs for prototype development and testing',
      'Marketing and expo assistance up to ₹5 Lakhs'
    ],
    hackOrNuance: 'You must be endorsed by a recognized Gujarat Nodal Institute (like i-Hub or GTU Innovation Council) before the state implementation committee will release funds.',
    officialLink: 'https://ihubgujarat.in/',
    domainName: 'ihubgujarat.in',
    tags: ['Gujarat', 'Sustenance', 'Monthly Stipend', 'Seed Support', 'State Policy'],
    founderTypes: ['all', 'bootstrapped', 'women', 'sc_st']
  },

  // HARYANA
  {
    id: 'haryana-startup-policy',
    title: 'Haryana Startup Policy (Seed Capital, Rent & SGST Reimbursement)',
    category: 'government',
    provider: 'Department of Information Technology, Electronics & Communication, Haryana',
    stateOrRegion: 'Haryana',
    valueAmount: 'Up to ₹10L Seed Grant + 50% Rent Subsidy + 100% SGST Waiver',
    shortDescription: 'Seed grant up to ₹10 Lakhs, 50% lease rental subsidy up to ₹50,000/month, 100% net SGST reimbursement for 7 years, and patent assistance up to ₹25 Lakhs.',
    fullDescription: 'Designed for startups registered in Gurugram, Faridabad, Panchkula, and across Haryana. Provides working capital seed grants, extensive commercial lease rental reimbursements, and complete SGST tax refunds.',
    eligibility: [
      'Registered entity with registered office or operational establishment in Haryana',
      'DPIIT recognized and incorporated < 10 years'
    ],
    keyPerks: [
      'Seed Capital: Up to ₹10 Lakhs non-dilutive grant for proof-of-concept validation',
      'Lease Rental Subsidy: 50% reimbursement of office/co-working lease rent up to ₹50,000/month for up to 3 years',
      '100% Net SGST reimbursement for 7 years on commercial turnover',
      'Patent Reimbursement: 100% of patent fee reimbursement up to ₹2.5 Lakhs (Domestic) and ₹25 Lakhs (International)'
    ],
    hackOrNuance: 'Gurugram founders paying high commercial office rent can claim up to ₹50,000/month lease subsidy back from the Haryana IT department if lease deeds and GST are compliant.',
    officialLink: 'https://startupharyana.gov.in/',
    domainName: 'startupharyana.gov.in',
    tags: ['Haryana', 'Gurugram', 'Rent Subsidy', 'SGST Waiver', 'Seed Grant', 'State Policy'],
    founderTypes: ['all', 'bootstrapped', 'deeptech_ai']
  },

  // KARNATAKA
  {
    id: 'karnataka-elevate-100',
    title: 'Karnataka ELEVATE 100 / Idea2PoC Grant',
    category: 'government',
    provider: 'Dept of Electronics, IT, Bt and S&T, Government of Karnataka',
    stateOrRegion: 'Karnataka',
    valueAmount: 'Up to ₹50 Lakhs (100% Non-Dilutive Grant)',
    shortDescription: 'Up to ₹50 Lakhs comprehensive non-dilutive grant-in-aid for Karnataka-registered startups, 100% patent reimbursement, and state procurement pilots.',
    fullDescription: 'One of the most competitive and generous state programs in India. ELEVATE awards non-dilutive milestone-based capital to the top 100 startups annually across IT, DeepTech, BioTech, AgriTech, and CleanTech.',
    eligibility: [
      'Registered with Karnataka Startup Cell and operational base in Karnataka',
      'At least 50% of the startup\'s permanent workforce must be located in Karnataka',
      'Incorporated < 10 years'
    ],
    keyPerks: [
      'Up to ₹50 Lakhs non-dilutive grant deposited directly to project escrow',
      'Patent reimbursement: ₹2 Lakhs domestic, ₹10 Lakhs international',
      'Incentives and additional bonus grants for Tier-2/Tier-3 city operations (outside Bengaluru)'
    ],
    hackOrNuance: 'Use contractor/consultant agreements for remote developers to ensure your formal payroll muster roll retains 50%+ address proof in Karnataka during inspection audits.',
    officialLink: 'https://missionstartup.karnataka.gov.in/elevate.html',
    domainName: 'missionstartup.karnataka.gov.in',
    tags: ['Karnataka', 'Bengaluru', 'ELEVATE', 'Grant', 'Non-dilutive', 'State Policy'],
    founderTypes: ['all', 'deeptech_ai', 'biotech', 'women']
  },

  // BIHAR
  {
    id: 'bihar-startup-policy',
    title: 'Bihar Startup Policy (₹10 Lakhs 10-Year 0% Interest Seed Fund)',
    category: 'government',
    provider: 'Department of Industries, Government of Bihar',
    stateOrRegion: 'Bihar',
    valueAmount: '₹10 Lakhs (10-Year 0% Interest Seed Capital)',
    shortDescription: '₹10 Lakhs 100% interest-free seed loan for a 10-year repayment tenure, plus free incubation at premier institutions like IIT Patna and CIMP.',
    fullDescription: 'Bihar offers one of the most generous non-dilutive loan policies in the country. Startups receive ₹10 Lakhs at zero percent interest, repayable only after 10 years, with an additional 5% bonus for women/SC/ST entrepreneurs.',
    eligibility: [
      'Startup entity registered in Bihar',
      'DPIIT recognized or certified by Bihar Startup Cell',
      'Working on innovative tech, manufacturing, or service business models'
    ],
    keyPerks: [
      '₹10 Lakhs seed capital with zero collateral and 0% interest for 10 years',
      'Additional 5% grant (₹10.5 Lakhs) for Women-led and SC/ST ventures',
      'Free physical incubation space, power, and internet at IIT Patna, NIT Patna, or CIMP',
      'Reimbursement of 100% patent filing charges'
    ],
    hackOrNuance: 'An interest-free 10-year term effectively functions like long-term non-dilutive equity. Set up registered entity or R&D processing center in Patna to claim the check.',
    officialLink: 'https://startup.bihar.gov.in/',
    domainName: 'startup.bihar.gov.in',
    tags: ['Bihar', 'Patna', '0% Interest', 'Seed Fund', '10 Year Loan', 'State Policy'],
    founderTypes: ['all', 'bootstrapped', 'women', 'sc_st']
  },

  // UTTAR PRADESH
  {
    id: 'up-startup-policy',
    title: 'Uttar Pradesh Startup Policy (Sustenance & Seed Capital)',
    category: 'sustenance',
    provider: 'StartInUP, Department of IT & Electronics, Uttar Pradesh',
    stateOrRegion: 'Uttar Pradesh',
    valueAmount: '₹17,500/Mo Sustenance + Up to ₹7.5L Seed Capital',
    shortDescription: '₹17,500 monthly sustenance allowance for 1 year, up to ₹5 Lakhs prototype grant, and up to ₹7.5 Lakhs commercialization seed support.',
    fullDescription: 'StartInUP provides monthly founder allowances, prototype grants, and infrastructure support across Noida, Lucknow, Kanpur, and Varanasi innovation corridors.',
    eligibility: [
      'Entity registered in Uttar Pradesh with DPIIT recognition',
      'Valid Udyam and GST with UP address'
    ],
    keyPerks: [
      'Sustenance Allowance: ₹17,500/month for 12 months deposited directly',
      'Prototype Grant: Up to ₹5 Lakhs for proof-of-concept development',
      'Seed Capital: Up to ₹7.5 Lakhs in 2 tranches for marketing and commercialization'
    ],
    hackOrNuance: 'Noida tech founders can claim the ₹17,500/mo sustenance allowance while remaining directly adjacent to the Delhi/NCR venture ecosystem.',
    officialLink: 'https://startinup.up.gov.in/',
    domainName: 'startinup.up.gov.in',
    tags: ['Uttar Pradesh', 'Noida', 'Lucknow', 'Sustenance', 'Seed Capital', 'State Policy'],
    founderTypes: ['all', 'bootstrapped', 'women', 'student']
  },

  // TAMIL NADU
  {
    id: 'tamilnadu-tanseed',
    title: 'Tamil Nadu StartupTN TANSEED (Seed Grant Fund)',
    category: 'government',
    provider: 'StartupTN (Tamil Nadu Startup and Innovation Mission)',
    stateOrRegion: 'Tamil Nadu',
    valueAmount: 'Up to ₹15 Lakhs Non-Dilutive Grant',
    shortDescription: 'Up to ₹15 Lakhs non-dilutive seed grant in 3 tranches, StartupTN Smart Card enterprise discounts, and dedicated equity co-investment funds.',
    fullDescription: 'Administered by StartupTN, TANSEED provides critical early-stage bridge capital with dedicated quotas for women-led ventures, green tech, and SC/ST founders.',
    eligibility: [
      'StartupTN registered and DPIIT recognized entity with registered/corporate office in Tamil Nadu',
      'Minimum working prototype (TRL 4 or above)'
    ],
    keyPerks: [
      '₹15 Lakhs non-dilutive seed grant released in 3 milestone tranches',
      'StartupTN Smart Card: Pre-negotiated heavy discounts on AWS, GCP, Zoho, and legal retainers',
      'Access to StartupTN regional hubs in Chennai, Coimbatore, Madurai, and Trichy'
    ],
    hackOrNuance: 'Tranche 2 and 3 require submission of CA-certified Fund Utilization Certificates (UC); ensure proper bookkeeping from day 1.',
    officialLink: 'https://startuptn.in/tanseed',
    domainName: 'startuptn.in',
    tags: ['Tamil Nadu', 'Chennai', 'Coimbatore', 'TANSEED', 'Grant', 'State Policy'],
    founderTypes: ['all', 'women', 'sc_st', 'hardware']
  },

  // MAHARASHTRA
  {
    id: 'maharashtra-mssic',
    title: 'Maharashtra State Startup Policy (Seed Support & Quality Subsidies)',
    category: 'government',
    provider: 'Maharashtra State Innovation Society (MSInS)',
    stateOrRegion: 'Maharashtra',
    valueAmount: 'Up to ₹15L Seed Support + ₹3L Expo Subsidy',
    shortDescription: 'Seed fund assistance, 100% quality certification reimbursement, exhibition stall subsidies up to ₹3 Lakhs, and intellectual property reimbursement.',
    fullDescription: 'Supports startups registered across Mumbai, Pune, Nagpur, and Maharashtra with seed capital, patent reimbursements, and free international expo stalls.',
    eligibility: [
      'Registered with Maharashtra State Innovation Society (msins.in)',
      'Incorporated in Maharashtra with operational team'
    ],
    keyPerks: [
      'Patent Support: 100% reimbursement of patent filing fees (₹2L domestic / ₹10L international)',
      'Exhibition Reimbursement: Up to ₹3 Lakhs for participating in national and global tech expos',
      'Quality testing and BIS certification cost reimbursement'
    ],
    hackOrNuance: 'Apply for the Maharashtra Grand Challenge to gain direct state departmental pilot contracts with municipal corporations.',
    officialLink: 'https://msins.in/',
    domainName: 'msins.in',
    tags: ['Maharashtra', 'Mumbai', 'Pune', 'MSInS', 'Patents', 'State Policy'],
    founderTypes: ['all', 'deeptech_ai', 'hardware']
  },

  // TELANGANA
  {
    id: 'telangana-thub-tfund',
    title: 'Telangana T-Fund & T-Works Prototyping Subsidies',
    category: 'government',
    provider: 'IT, E&C Department, Government of Telangana & T-Hub',
    stateOrRegion: 'Telangana',
    valueAmount: '₹25L to ₹1 Crore Co-Investment / Prototyping Grant',
    shortDescription: 'T-Fund equity co-investment between ₹25 Lakhs and ₹1 Crore, WE-Hub funding for women founders, and subsidized prototyping at T-Works.',
    fullDescription: 'Backed by Hyderabad\'s renowned T-Hub and T-Works (India\'s largest hardware prototyping facility). Provides equity funding, testbeds, and power/lease subsidies.',
    eligibility: [
      'Entity registered in Telangana with DPIIT recognition',
      'Innovating in AI, SaaS, Hardware, Life Sciences, or ESDM'
    ],
    keyPerks: [
      'T-Fund: Early stage co-investment between ₹25 Lakhs and ₹1 Crore alongside angel networks',
      'T-Works Prototyping: World-class CNC, 3D printing, laser cutting, and PCB assembly at heavily subsidized rates',
      'WE-Hub dedicated incubation and grants for 100% women-led enterprises'
    ],
    hackOrNuance: 'Hardware startups can save over ₹20 Lakhs in initial tooling and casing costs by building and testing their prototypes directly at T-Works Hyderabad.',
    officialLink: 'https://t-hub.co/',
    domainName: 't-hub.co',
    tags: ['Telangana', 'Hyderabad', 'T-Hub', 'T-Works', 'Hardware', 'State Policy'],
    founderTypes: ['all', 'hardware', 'deeptech_ai', 'women']
  },

  // KERALA
  {
    id: 'kerala-ksum',
    title: 'Kerala Startup Mission (KSUM) Innovation Grants',
    category: 'government',
    provider: 'Kerala Startup Mission (KSUM)',
    stateOrRegion: 'Kerala',
    valueAmount: '₹2L Idea, ₹7L Productization, ₹12L Scaleup',
    shortDescription: 'Structured stage-by-stage non-dilutive grants: ₹2 Lakhs (Idea), ₹7 Lakhs (Productization), and ₹12 Lakhs (Scaleup), plus international delegation subsidies.',
    fullDescription: 'KSUM offers systematic non-dilutive grants across every startup stage, alongside subsidized Super FabLabs and travel sponsorships for Gitex, Slush, and Web Summit.',
    eligibility: [
      'Registered with KSUM portal with registered office or operational R&D team in Kerala'
    ],
    keyPerks: [
      'Idea Grant: ₹2 Lakhs for converting concept into proof-of-concept',
      'Productization Grant: ₹7 Lakhs for turning PoC into commercially viable MVP',
      'Scale-Up Grant: ₹12 Lakhs for customer acquisition trials',
      'Subsidized international exposure trips (Gitex Dubai, Slush Helsinki)'
    ],
    hackOrNuance: 'Kerala offers unmatched hardware FabLab infrastructure; build prototypes in Kochi/Trivandrum while maintaining sales channels anywhere.',
    officialLink: 'https://startupmission.kerala.gov.in/',
    domainName: 'startupmission.kerala.gov.in',
    tags: ['Kerala', 'Kochi', 'KSUM', 'Idea Grant', 'FabLab', 'State Policy'],
    founderTypes: ['all', 'bootstrapped', 'hardware', 'student']
  },

  // ODISHA
  {
    id: 'odisha-startup-policy',
    title: 'Startup Odisha (Monthly Sustenance & Product Grants)',
    category: 'sustenance',
    provider: 'MSME Department, Government of Odisha',
    stateOrRegion: 'Odisha',
    valueAmount: '₹20k–₹22k/Mo Sustenance + Up to ₹16L Grant',
    shortDescription: '₹20,000 to ₹22,000 monthly living stipend for 1 year + up to ₹16 Lakhs product development & marketing grant assistance.',
    fullDescription: 'Administered by Startup Odisha (O-Hub Bhubaneswar). Offers monthly founder living allowances, subsidized co-working, and product launch grants.',
    eligibility: [
      'Entity registered in Odisha with DPIIT certificate and incorporated < 10 years'
    ],
    keyPerks: [
      'Monthly Sustenance: ₹20,000/mo (General) or ₹22,000/mo (Women/SC/ST/Differently-abled) for 12 months',
      'Product Development Grant: Up to ₹16 Lakhs disbursed in milestone installments',
      'Free co-working space at O-Hub Bhubaneswar'
    ],
    hackOrNuance: 'Odisha has high fund allocation with a smaller pool of applicants than NCR/BLR, resulting in high grant approval percentages.',
    officialLink: 'https://startupodisha.gov.in/',
    domainName: 'startupodisha.gov.in',
    tags: ['Odisha', 'Bhubaneswar', 'Sustenance', 'Product Grant', 'State Policy'],
    founderTypes: ['all', 'bootstrapped', 'women', 'sc_st']
  },

  // DELHI
  {
    id: 'delhi-startup-policy',
    title: 'Delhi Startup Policy (Collateral-Free Capital & Rent Waivers)',
    category: 'government',
    provider: 'Department of Industries, Government of NCT of Delhi',
    stateOrRegion: 'Delhi',
    valueAmount: 'Collateral-Free Capital + 50% Rent Subsidy + ₹10L Patent Aid',
    shortDescription: 'Collateral-free collateral loans through empanelled financial institutions, 50% incubation and lease rent reimbursement, and trademark/patent subsidies.',
    fullDescription: 'Formulated to assist startups registered within Delhi NCT. Provides lease rent waivers, procurement exemptions, and collateral-free loan facilities.',
    eligibility: [
      'Entity incorporated in Delhi with active GST/CIN registration'
    ],
    keyPerks: [
      'Collateral-free loans with interest subvention through partner lending institutions',
      '50% reimbursement of lease rental charges up to ₹30,000/month',
      '100% patent filing reimbursement up to ₹3 Lakhs domestic and ₹10 Lakhs international'
    ],
    hackOrNuance: 'Delhi entities can supply directly to Delhi Government departments without prior turnover or bid security (EMD) requirements.',
    officialLink: 'https://startup.delhi.gov.in/',
    domainName: 'startup.delhi.gov.in',
    tags: ['Delhi', 'Rent Subsidy', 'Collateral-Free', 'Patents', 'State Policy'],
    founderTypes: ['all', 'bootstrapped', 'women']
  }
];
