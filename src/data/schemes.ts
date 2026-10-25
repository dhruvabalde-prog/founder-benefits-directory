import { BenefitItem } from '../types';

export const GOVERNMENT_SCHEMES: BenefitItem[] = [
  {
    id: 'dpiit-startup-recognition',
    title: 'DPIIT Startup India Recognition & Tax Exemptions (80-IAC & Angel Tax)',
    category: 'government',
    subCategory: 'central_gov',
    provider: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    shortDescription: 'Core recognition granting 100% tax exemption for 3 consecutive years under Sec 80-IAC, patent fee rebates (80%), trademark fee rebates (50%), and Angel Tax exemption under Sec 56(2)(viib).',
    fullDescription: 'The foundational gateway for all Indian startups. DPIIT recognition certifies private limited companies or LLPs (incorporated <10 years ago, turnover <₹100 Cr) as innovative startups. Beyond certification, founders can apply to the Inter-Ministerial Board (IMB) for Section 80-IAC income tax exemptions for 3 consecutive financial years.',
    valueAmount: '100% Tax Holiday (3 Yrs) + ₹10L+ in IP/Patent Savings',
    currencyOrType: 'INR',
    eligibility: [
      'Incorporated as a Private Limited Company or Registered LLP in India',
      'Incorporated for less than 10 years from the date of application',
      'Annual turnover has not exceeded ₹100 Crore in any financial year since incorporation',
      'Entity must be working towards innovation, development, or improvement of products, processes, or services, or scalable business model with high employment/wealth generation potential',
      'Entity must not have been formed by splitting up or reconstruction of an existing business'
    ],
    documentsRequired: [
      'Certificate of Incorporation / Registration of LLP',
      'Brief pitch deck explaining innovation, scalability, and target market',
      'Links to website, video demonstration, or working mobile app/PoC',
      'PAN card of entity and list of Directors/Partners',
      'For 80-IAC: Audited financial statements, CA certification, and business deck'
    ],
    keyPerks: [
      'Section 80-IAC: 100% deduction of profits for 3 consecutive assessment years out of 10 years',
      'Section 56(2)(viib): Angel Tax exemption for shares issued above fair market value to domestic investors',
      '80% rebate in patent filing statutory fees and 50% rebate in trademark filing fees',
      'Fast-track patent examination (takes months instead of 4-5 years)',
      'Self-certification compliance under 6 Labor Laws and 3 Environmental Laws for 5 years without inspection',
      'Relaxed public procurement norms on GeM (Government e-Marketplace): Exemption from prior experience and turnover requirements, EMD waiver'
    ],
    hiddenNuances: [
      'DPIIT Certificate is NOT the same as 80-IAC Tax Exemption! DPIIT takes 24-48 hours, but 80-IAC requires separate approval by the Inter-Ministerial Board (IMB) which has a rejection rate >90%. Your deck must demonstrate genuine technological innovation, not just an aggregator or agency.',
      'Sole proprietorships and unregistered partnerships are INELIGIBLE. You must convert to Pvt Ltd or LLP first.',
      'Forming a company by spinning off an existing business line disqualifies you automatically.',
      'Angel tax was abolished in Budget 2024 for all investor classes going forward, but DPIIT exemption remains critical for past notices and statutory IP perks.'
    ],
    officialLink: 'https://www.startupindia.gov.in/content/sih/en/startupgov/startup-recognition-page.html',
    applicationStepByStep: [
      '1. Incorporate your business on MCA as a Private Limited Company or LLP.',
      '2. Register on the Startup India Portal (startupindia.gov.in).',
      '3. Complete the Recognition Form: Upload CIN, MOA/AOA, and a clear 10-slide deck explaining how your product improves efficiency, cost, or customer experience.',
      '4. Receive DPIIT Recognition Certificate within 2 to 3 working days.',
      '5. Apply separately for Section 80-IAC exemption via the portal if your revenue and operational milestones are ready.'
    ],
    tags: ['Central', 'Tax Exemption', 'Patents', 'GeM', 'Labor Law', 'DPIIT', 'IMB'],
    statesApplicable: ['All India'],
    isFeatured: true
  },
  {
    id: 'sisfs-seed-fund-scheme',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    category: 'government',
    subCategory: 'central_gov',
    provider: 'DPIIT & Expert Advisory Committee (EAC)',
    shortDescription: 'Up to ₹20 Lakhs non-dilutive grant for proof-of-concept/prototype validation, or up to ₹50 Lakhs convertible debentures/debt for market entry and scaling through approved incubators.',
    fullDescription: 'The flagship early-stage funding scheme designed to bridge the valley of death between prototype and angel investment. Funds are disbursed through selected incubators across India. Founders do not receive money directly from DPIIT; instead, they choose up to 3 DPIIT-approved incubators who evaluate the pitch and disburse milestone-based tranches.',
    valueAmount: 'Up to ₹20L Grant + ₹50L Debt/CCPS',
    currencyOrType: 'INR',
    eligibility: [
      'DPIIT-recognized startup incorporated not more than 2 years ago at the time of application',
      'Must have a business idea to develop a product or service with a market fit, viable commercialization, and scope of scaling',
      'Must use technology in its core product or service, or business model, or distribution model, or methodology to solve the problem being targeted',
      'Must NOT have received more than ₹10 Lakhs of monetary support under any other Central or State Government scheme (excluding prize money/competitions)',
      'Shareholding of Indian promoters in the startup must be at least 51% at the time of application to the incubator'
    ],
    documentsRequired: [
      'DPIIT Recognition Certificate',
      'Pitch Deck detailing PoC, market size, competitors, and milestone plan',
      'Cap table showing 51%+ Indian promoter shareholding',
      'Financial projections & milestone-based budget plan for the requested amount',
      'Proof of prototype, pilot metrics, or letters of intent (LOIs)'
    ],
    keyPerks: [
      'Up to ₹20 Lakhs as 100% non-dilutive grant for Proof of Concept, prototype development, and product trials',
      'Up to ₹50 Lakhs for market entry, commercialization, or scaling through convertible debentures or debt-linked instruments',
      'Mentorship, laboratory access, and investor demo days hosted by the incubator',
      'Does not require personal collateral or founder personal guarantee'
    ],
    hiddenNuances: [
      'The 2-year incorporation limit is strictly counted down to the exact day. If your company is 2 years and 1 day old, your application is automatically blocked.',
      'You can apply to up to 3 incubators simultaneously. Do NOT pick incubators far from your geography or outside your sector. Physical presence or active engagement with the incubator committee is often required during final pitch rounds.',
      'If you have already received >₹10 Lakhs from any other government grant (like BIRAC BIG or NIDHI PRAYAS), you are ineligible for SISFS.'
    ],
    officialLink: 'https://seedfund.startupindia.gov.in/',
    applicationStepByStep: [
      '1. Ensure DPIIT recognition is active and entity is under 2 years old.',
      '2. Login to seedfund.startupindia.gov.in with your Startup India credentials.',
      '3. Search incubators by sector (e.g. Agritech, Healthtech, FinTech) and geographical location.',
      '4. Fill out the common SISFS questionnaire and select up to 3 priority incubators.',
      '5. Present your pitch in front of the Incubator Seed Management Committee (ISMC).',
      '6. Sign the agreement and receive milestone-based disbursements.'
    ],
    tags: ['Central', 'Grant', 'Non-dilutive', 'Early Stage', 'Prototype', 'Incubator'],
    statesApplicable: ['All India'],
    isFeatured: true
  },
  {
    id: 'cgss-credit-guarantee',
    title: 'Credit Guarantee Scheme for Startups (CGSS)',
    category: 'government',
    subCategory: 'central_gov',
    provider: 'National Credit Guarantee Trustee Company (NCGTC) & DPIIT',
    shortDescription: 'Collateral-free debt and working capital loans up to ₹10 Crore guaranteed by the Government of India through scheduled banks and venture debt funds.',
    fullDescription: 'Provides credit guarantees for loans extended by Scheduled Commercial Banks, Non-Banking Financial Companies (NBFCs), and SEBI-registered Alternative Investment Funds (AIFs) to DPIIT-recognized startups. Solves the age-old problem where early-stage founders are denied bank loans due to lack of property collateral or multi-year profitability.',
    valueAmount: 'Up to ₹10 Crore Collateral-Free Loans',
    currencyOrType: 'INR',
    eligibility: [
      'DPIIT recognized startup with defined revenue milestones or funded by registered AIFs',
      'Borrower must not be in default to any lending institution or classified as NPA',
      'Startup must have achieved stable revenue generation as per audited accounts over preceding 12 months, or have secured venture debt from an eligible AIF',
      'Applicable for both term loans and working capital facilities'
    ],
    documentsRequired: [
      'DPIIT Recognition Certificate',
      'Audited Financial statements for preceding 1-2 years',
      'Bank statements of current accounts for last 12 months',
      'Detailed Project Report (DPR) explaining purpose of debt and repayment cash flow',
      'Board resolution approving the credit facility'
    ],
    keyPerks: [
      'Guarantee cover up to 80% for credit facilities up to ₹3 Crore',
      'Guarantee cover up to 75% for credit facilities between ₹3 Crore and ₹5 Crore',
      'Guarantee cover up to 65% for facilities between ₹5 Crore and ₹10 Crore',
      'Exemption from third-party collateral or mortgaging personal real estate',
      'Enables non-dilutive scaling capital without giving up founder equity'
    ],
    hiddenNuances: [
      'Banks still evaluate serviceability of debt! This is not free money. If your company burns cash with zero revenue, traditional banks will hesitate unless guaranteed by an accredited venture debt partner or backed by receivables.',
      'Interest rates are determined by the lending bank (typically Repo rate + 2% to 4%) plus annual guarantee fee payable to NCGTC.'
    ],
    officialLink: 'https://www.ncgtc.in/en/cgss',
    applicationStepByStep: [
      '1. Approach an empanelled member lending institution (SBI, HDFC, ICICI, Bank of Baroda, Axis, or Trifecta/Stride venture debt).',
      '2. Submit loan application along with DPIIT recognition and financial projections.',
      '3. The bank conducts underwriting and applies to NCGTC online for CGSS cover on behalf of the startup.',
      '4. Upon sanction, loan is disbursed without personal collateral.'
    ],
    tags: ['Central', 'Debt', 'Collateral-Free', 'Working Capital', 'Scaling'],
    statesApplicable: ['All India'],
    isFeatured: true
  },
  {
    id: 'birac-big-grant',
    title: 'BIRAC Biotechnology Ignition Grant (BIG)',
    category: 'government',
    subCategory: 'biotech_medtech',
    provider: 'Biotechnology Industry Research Assistance Council (BIRAC) - Dept of Biotechnology',
    shortDescription: 'Up to ₹50 Lakhs 100% non-dilutive grant-in-aid for 18 months for innovative ideas in Biotech, MedTech, Diagnostics, Agritech, and Industrial Biology.',
    fullDescription: 'One of India\'s most prestigious and generous non-dilutive funding programs. BIRAC BIG supports biotech entrepreneurs, medical device innovators, and researchers in establishing proof-of-concept for innovative biological or healthcare technologies. Managed by premier partners like C-CAMP, Venture Center, IKP Knowledge Park, and FITT.',
    valueAmount: 'Up to ₹50 Lakhs (100% Non-Dilutive Grant)',
    currencyOrType: 'INR',
    eligibility: [
      'Individual biotech innovators/researchers or DPIIT-registered startups incorporated <5 years',
      'Promoter must hold at least 51% ownership in the startup entity',
      'Project must propose an innovative solution in MedTech, Diagnostics, Biopharma, Industrial Biotech, Biosensors, or Agricultural Biotechnology',
      'The project must possess significant technological novelty with potential patentable IP'
    ],
    documentsRequired: [
      'Detailed scientific proposal with background, hypothesis, and preliminary data',
      '18-month milestone chart with clear Go/No-Go decision gates',
      'Itemized budget breakdown (Consumables, Equipment, Manpower, Travel, Contingency)',
      'Letter of association from an incubator/host institute for lab access',
      'Biodata of Project Leader and scientific advisors'
    ],
    keyPerks: [
      'Non-dilutive grant up to ₹50 Lakhs for 18 months',
      'Zero equity dilution and no repayment requirement',
      'Access to wet labs, characterization facilities, cleanrooms, and clinical testing networks',
      'Mentorship from senior scientists and regulatory fast-tracking for CDSCO / ISO clearances'
    ],
    hiddenNuances: [
      'Call for proposals opens only twice a year (typically January 1 - February 15 and July 1 - August 15). Late submissions are not accepted under any circumstances.',
      'Grant is disbursed in 4 milestone-based installments. If your milestone fails to meet the defined technical parameters, subsequent tranches are paused.',
      'Budget allocation rules are strict: capital equipment is capped, and institutional overhead is monitored.'
    ],
    officialLink: 'https://birac.nic.in/big.php',
    applicationStepByStep: [
      '1. Monitor BIRAC website for the semi-annual Call for Proposals.',
      '2. Choose a BIG Partner (e.g. C-CAMP Bengaluru, Venture Center Pune, IKP Hyderabad).',
      '3. Submit online scientific and business application on BIRAC portal before the deadline.',
      '4. Shortlisted candidates present before the Technical Expert Committee (TEC).',
      '5. Due diligence site visit to host laboratory.',
      '6. Grant agreement signing and release of first advance tranche.'
    ],
    tags: ['Biotech', 'Medtech', 'Healthcare', 'Grant', 'Non-dilutive', 'BIRAC', 'C-CAMP'],
    statesApplicable: ['All India'],
    isFeatured: true
  },
  {
    id: 'meity-tide-samridh',
    title: 'MeitY TIDE 2.0 & SAMRIDH Accelerator Schemes',
    category: 'government',
    subCategory: 'deeptech_hardware',
    provider: 'Ministry of Electronics & Information Technology (MeitY)',
    shortDescription: '₹7 Lakhs (EiR fellowship) to ₹30 Lakhs (Grant) under TIDE 2.0; Up to ₹40 Lakhs matching capital under SAMRIDH for tech and AI startups.',
    fullDescription: 'Technology Incubation and Development of Entrepreneurs (TIDE 2.0) supports ICT and tech startups utilizing IoT, AI, Blockchain, Robotics, and Cybersecurity. SAMRIDH matches funds from certified accelerators up to ₹40 Lakhs per startup with deep mentorship and customer pilot programs.',
    valueAmount: '₹7L - ₹30L Grant / Up to ₹40L Matching Capital',
    currencyOrType: 'INR',
    eligibility: [
      'Tech startups developing software, electronics, AI, deeptech, or IoT solutions',
      'DPIIT recognized startup',
      'For EiR (Entrepreneur-in-Residence): Innovators transitioning from employment or university with a validated concept',
      'For Grant: Startups with minimum viable product (MVP) ready for field trials',
      'For SAMRIDH: Startups selected by MeitY-empanelled accelerators'
    ],
    documentsRequired: [
      'Proof of tech architecture and IP roadmap',
      'Company incorporation certificate & DPIIT recognition',
      'Product demo link or repository walkthrough',
      'Commercialization roadmap with customer pipeline'
    ],
    keyPerks: [
      'EiR fellowship: ₹30,000/month stipend up to ₹7 Lakhs to focus full-time on building',
      'Grant: Up to ₹30 Lakhs non-dilutive grant for product trials and validation',
      'SAMRIDH: Up to ₹40 Lakhs equity/promissory note matching accelerator investment',
      'Government ministry pilot opportunities and state sandbox trials'
    ],
    hiddenNuances: [
      'TIDE 2.0 operates strictly through Tier-1, Tier-2, and Tier-3 incubation centers (e.g. IITs, NITs, IIITs). You must apply through the specific institute hosting the TIDE center.',
      'SAMRIDH is only available if you are accepted into one of the designated partner accelerators (like Axilor, T-Hub, NASSCOM 10,000 Startups, CIE IIIT-H).'
    ],
    officialLink: 'https://meitystartuphub.in/',
    applicationStepByStep: [
      '1. Create account on MeitY Startup Hub (MSH) portal.',
      '2. Explore currently active challenges, TIDE 2.0 centers, and SAMRIDH cohorts.',
      '3. Submit product pitch and technical architecture overview.',
      '4. Interview with incubator evaluation panel.',
      '5. Enrollment and milestone disbursement.'
    ],
    tags: ['Tech', 'DeepTech', 'AI', 'IoT', 'MeitY', 'Hardware', 'Grant'],
    statesApplicable: ['All India']
  },
  {
    id: 'standup-india-women-scst',
    title: 'Stand-Up India Scheme (For Women & SC/ST Founders)',
    category: 'government',
    subCategory: 'women_founders',
    provider: 'Department of Financial Services (DFS), Ministry of Finance & SIDBI',
    shortDescription: 'Composite bank loans between ₹10 Lakhs and ₹1 Crore for setting up greenfield manufacturing, services, agri-allied, or trading enterprises.',
    fullDescription: 'Specifically formulated to promote entrepreneurship among women and SC/ST individuals. Every branch of scheduled commercial banks is mandated to facilitate at least one SC/ST borrower and at least one woman borrower for a greenfield enterprise.',
    valueAmount: '₹10 Lakhs to ₹1 Crore Bank Loan',
    currencyOrType: 'INR',
    eligibility: [
      'Borrower must be a Woman or SC/ST individual aged above 18 years',
      'In case of non-individual enterprises (Pvt Ltd, LLP, Partnership), at least 51% of shareholding and controlling stake must be held by an SC/ST or Woman entrepreneur',
      'Loan is strictly for greenfield projects (first-time venture of the beneficiary in manufacturing, services, agri-allied activities, or trading)',
      'Borrower should not be in default to any bank or financial institution'
    ],
    documentsRequired: [
      'Identity proof, PAN, Caste Certificate (for SC/ST category) or Gender proof',
      'Proof of business address and Certificate of Incorporation',
      'Comprehensive Project Report / Detailed Business Plan detailing capex, working capital, and cash flow',
      'Rent agreement or lease deed for manufacturing/office location',
      'Margin money proof (minimum 15% borrower contribution, often subsidizable by state schemes)'
    ],
    keyPerks: [
      'Composite loan covering both term loan (machinery, building) and working capital up to ₹1 Crore',
      'Margin money requirement reduced to 15% (can converge with state subsidy schemes)',
      'Lower interest rate: Base Rate (MCLR) + 3% + tenor premium (lowest applicable bank slab)',
      'Repayable in up to 7 years with a moratorium period of up to 18 months',
      'Rupay debit card issued for working capital overdraft withdrawals'
    ],
    hiddenNuances: [
      'Strictly for "Greenfield" projects! If you already have an existing registered business entity in the same line of trade, bank managers may reject the application.',
      'Bank branch managers are evaluated on this quota. Applying directly via the standupmitra.in portal forces the lead to show up in the bank\'s regional compliance dashboard.'
    ],
    officialLink: 'https://www.standupmitra.in/',
    applicationStepByStep: [
      '1. Register on the Stand-Up Mitra portal (standupmitra.in).',
      '2. Select whether you need "Trainee" support (business plan help) or "Ready" borrower status.',
      '3. Submit business plan, capex quotations, and KYC documents online.',
      '4. Select the preferred bank branch in your local area.',
      '5. Bank branch contacts you for physical document verification and sanction letter.'
    ],
    tags: ['Women Founders', 'SC/ST', 'Bank Loan', 'Greenfield', 'SIDBI', 'Manufacturing', 'Services'],
    statesApplicable: ['All India'],
    isFeatured: true
  },
  {
    id: 'karnataka-elevate-100',
    title: 'Karnataka ELEVATE / Idea2PoC Grant',
    category: 'government',
    subCategory: 'state_gov',
    provider: 'Department of Electronics, IT, Bt and S&T, Government of Karnataka',
    shortDescription: 'Up to ₹50 Lakhs comprehensive non-dilutive grant-in-aid for Karnataka-registered startups with disruptive tech or social impact.',
    fullDescription: 'Recognized as one of India\'s most aggressive state startup funding initiatives. The ELEVATE scheme identifies top 100 innovative startups annually across IT, DeepTech, BioTech, AgriTech, CleanTech, and ESDM, awarding milestone-based non-dilutive funds, subsidised incubation, and government pilot projects.',
    valueAmount: 'Up to ₹50 Lakhs (100% Non-Dilutive Grant)',
    currencyOrType: 'INR',
    eligibility: [
      'Must be registered with Karnataka Startup Cell (startups.karnataka.gov.in)',
      'Entity must be incorporated for less than 10 years with operational base in Karnataka',
      'At least 50% of the startup\'s permanent workforce must be employed within Karnataka',
      'Founders must not have availed previous grant exceeding limit under the same scheme'
    ],
    documentsRequired: [
      'Karnataka Startup Cell registration certificate',
      'Certificate of Incorporation and GST registration in Karnataka',
      'Detailed pitch deck, revenue milestones, and technical architecture',
      'Employee PF / ESIC or muster roll confirming 50%+ workforce in Karnataka',
      'Audited balance sheet or provisional financial statements'
    ],
    keyPerks: [
      'Up to ₹50 Lakhs grant disbursed directly to the startup\'s escrow bank account',
      '100% reimbursement of patent filing fees (₹2L domestic, ₹10L international)',
      'Subsidized co-working space across K-tech innovation hubs',
      'Incentives for Tier-2/Tier-3 city operations outside Bengaluru (additional bonus grants)',
      'Priority consideration for Government of Karnataka departmental procurement pilots'
    ],
    hiddenNuances: [
      'Workforce rule is strictly enforced! If your developers or core staff are entirely remote outside Karnataka, your application will fail the background verification audit.',
      'Special sub-tracks exist: ELEVATE Women (for 100% women-led or majority women-founded teams) and ELEVATE Kalyana Karnataka with relaxed criteria and reserved budgets.'
    ],
    officialLink: 'https://missionstartup.karnataka.gov.in/elevate.html',
    applicationStepByStep: [
      '1. Register your entity on the Karnataka Startup Cell portal.',
      '2. Apply during the annual ELEVATE call for applications.',
      '3. Preliminary screening of pitch decks by industry jury.',
      '4. In-person or virtual 10-minute pitch presentation before technical panel.',
      '5. Announcement of ELEVATE winners followed by due-diligence and milestone agreements.'
    ],
    tags: ['Karnataka', 'Bengaluru', 'State Scheme', 'Grant', 'Non-dilutive', 'ELEVATE'],
    statesApplicable: ['Karnataka'],
    isFeatured: true
  },
  {
    id: 'tamilnadu-tanseed-grant',
    title: 'Tamil Nadu TANSEED (Tamil Nadu Startup Seed Grant Fund)',
    category: 'government',
    subCategory: 'state_gov',
    provider: 'StartupTN (Tamil Nadu Startup and Innovation Mission)',
    shortDescription: 'Up to ₹15 Lakhs non-dilutive seed grant in 3 tranches for early-stage startups registered in Tamil Nadu.',
    fullDescription: 'Administered by StartupTN, TANSEED provides critical early-stage bridge funding for startups working on innovative products and scalable business models. It features special focus quotas for women-led ventures, green tech, rural impact, and SC/ST entrepreneurs through dedicated equity funds.',
    valueAmount: 'Up to ₹15 Lakhs Non-Dilutive Grant',
    currencyOrType: 'INR',
    eligibility: [
      'Entity registered with StartupTN portal and DPIIT recognized',
      'Incorporated in Tamil Nadu or having registered/corporate office in Tamil Nadu',
      'Startup must be working on an innovative tech product or innovative business process',
      'Must have achieved minimum working prototype (TRL 4 or above)'
    ],
    documentsRequired: [
      'StartupTN registration ID & DPIIT certificate',
      'CIN / LLPIN and GST registration with Tamil Nadu address',
      'Pitch deck and video demonstration of functional prototype',
      'Utilization plan for the ₹15 Lakh grant over 12 months'
    ],
    keyPerks: [
      '₹15 Lakhs grant released in 3 tranches (₹5L upfront upon agreement, ₹5L mid-milestone, ₹5L final validation)',
      'StartupTN Smart Card: Pre-negotiated heavy discounts on AWS, Google Cloud, Zoho, legal compliance, and marketing agencies',
      'Access to StartupTN regional hubs (Chennai, Madurai, Coimbatore, Tirunelveli, Erode, Salem, Cuddalore, Thanjavur)',
      'Direct pipeline to Tamil Nadu Emerging Sector Seed Fund (TNESSF) for Series A funding'
    ],
    hiddenNuances: [
      'StartupTN requires physical presence or measurable economic activity in Tamil Nadu. Having only a virtual address with zero local operations will lead to disqualification upon physical inspection.',
      'Tranche 2 and 3 require submission of CA-certified Fund Utilization Certificates (UC) before release.'
    ],
    officialLink: 'https://startuptn.in/tanseed',
    applicationStepByStep: [
      '1. Register your company on startuptn.in.',
      '2. Apply during active TANSEED editions (Edition 6, 7, etc.).',
      '3. Stage 1: Desk evaluation of applications.',
      '4. Stage 2: 3-minute pitch before Sectoral Screening Committees.',
      '5. Grand Jury evaluation and award ceremony.'
    ],
    tags: ['Tamil Nadu', 'Chennai', 'Coimbatore', 'State Scheme', 'Seed Grant', 'StartupTN'],
    statesApplicable: ['Tamil Nadu'],
    isFeatured: true
  },
  {
    id: 'gujarat-startup-policy',
    title: 'Gujarat Startup Policy (Sustenance Allowance & Seed Support)',
    category: 'government',
    subCategory: 'state_gov',
    provider: 'Industries Commissionerate & i-Hub, Government of Gujarat',
    shortDescription: '₹20,000 to ₹25,000 monthly sustenance allowance for 1 year + up to ₹30 Lakhs seed support for prototype and commercialization.',
    fullDescription: 'Gujarat offers one of the most founder-friendly sustenance packages in the country. Acknowledging that early-stage founders sacrifice salaries, the state pays a direct monthly living stipend into the founder\'s bank account, alongside prototype development grants and raw material subsidies.',
    valueAmount: '₹3L/Yr Living Stipend + Up to ₹30L Seed Grant',
    currencyOrType: 'INR',
    eligibility: [
      'DPIIT recognized startup with registration in Gujarat or incubated at an approved Gujarat nodal institution (e.g. i-Hub, PDPU, GTU, NID, IIM-A CIIE)',
      'Incorporated for not more than 10 years'
    ],
    documentsRequired: [
      'Recommendation letter from an approved Nodal Institution',
      'Incorporation Certificate & DPIIT Certificate',
      'Founder bank statements and Aadhaar card',
      'Project proposal vetted by the Nodal Institute\'s screening committee'
    ],
    keyPerks: [
      'Sustenance Allowance: ₹20,000 per month for general founders, ₹25,000 per month for women/SC/ST/differently-abled founders for 12 months',
      'Seed Support: Up to ₹30 Lakhs for prototype development, testing, and raw material procurement',
      'Marketing & Exhibition Assistance: Up to ₹5 Lakhs for participating in national and international expos',
      'Soft-skill, legal, and intellectual property reimbursement up to ₹2 Lakhs'
    ],
    hiddenNuances: [
      'You CANNOT receive the sustenance allowance directly from the government without being officially incubated or endorsed by an accredited Nodal Institute in Gujarat. First step is always approaching an i-Hub partner center.',
      'Founder cannot draw another corporate salary while claiming the sustenance allowance.'
    ],
    officialLink: 'https://ihubgujarat.in/',
    applicationStepByStep: [
      '1. Pitch your startup to a designated Nodal Institute (like i-Hub Ahmedabad or GTU Innovation Council).',
      '2. The Nodal Institute endorses the application to the State Level Implementation Committee (SLIC).',
      '3. SLIC approves the grant sanction.',
      '4. Monthly sustenance is credited directly, and prototype grants are released per invoice approvals.'
    ],
    tags: ['Gujarat', 'Sustenance Allowance', 'Monthly Stipend', 'Seed Support', 'State Scheme'],
    statesApplicable: ['Gujarat'],
    isFeatured: true
  },
  {
    id: 'kerala-ksum-innovation-grant',
    title: 'Kerala Startup Mission (KSUM) Innovation Grants',
    category: 'government',
    subCategory: 'state_gov',
    provider: 'Kerala Startup Mission (KSUM)',
    shortDescription: 'Idea grant up to ₹2 Lakhs, Productization grant up to ₹7 Lakhs, and Scale-up grant up to ₹12 Lakhs for Kerala-based startups.',
    fullDescription: 'KSUM is renowned for structured stage-by-stage non-dilutive grants. Whether you are a student with an idea on paper, or an early-stage startup needing to productize a prototype or scale initial sales, KSUM provides non-dilutive grants, fab lab access, and international delegation travel subsidies.',
    valueAmount: '₹2L to ₹12L Non-Dilutive Grant',
    currencyOrType: 'INR',
    eligibility: [
      'Registered with Kerala Startup Mission (ksum.in)',
      'DPIIT recognized entity with registered office or operational R&D team in Kerala',
      'Founders should hold majority equity'
    ],
    documentsRequired: [
      'KSUM Unique ID registration',
      'Pitch deck and functional demo video',
      'Project milestone plan with cost estimates'
    ],
    keyPerks: [
      'Idea Grant: ₹2 Lakhs for converting research/concepts into proof-of-concept',
      'Productization Grant: ₹7 Lakhs for turning PoC into commercially viable MVP',
      'Scale-Up Grant: ₹12 Lakhs for pilot customer acquisition and certification',
      'FabLab & Super FabLab access (advanced laser cutters, CNC, 3D printers at subsidized rates)',
      'International exposure: Subsidies for attending Gitex Dubai, Slush Helsinki, or Web Summit Lisbon'
    ],
    hiddenNuances: [
      'KSUM requires regular physical presence at their incubation facilities or technoparks in Thiruvananthapuram, Kochi, or Kozhikode.',
      'Grants are disbursed strictly against audited expenditure receipts and milestone demos.'
    ],
    officialLink: 'https://startupmission.kerala.gov.in/schemes',
    applicationStepByStep: [
      '1. Create profile on Kerala Startup Mission portal and obtain KSUM ID.',
      '2. Submit Innovation Grant application during scheduled call windows.',
      '3. Present 5-minute deck before the Expert Committee.',
      '4. Complete agreement and receive fund tranches.'
    ],
    tags: ['Kerala', 'KSUM', 'Idea Grant', 'Scaleup', 'State Scheme', 'Hardware FabLab'],
    statesApplicable: ['Kerala']
  },
  {
    id: 'msme-zed-scheme',
    title: 'MSME Zero Defect Zero Effect (ZED) Certification & Subsidies',
    category: 'government',
    subCategory: 'central_gov',
    provider: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
    shortDescription: 'Up to 80% subsidy on international quality certification costs, concessions on bank interest rates, and loan processing fee waivers.',
    fullDescription: 'The ZED certification scheme incentivizes manufacturers and hardware startups to adopt world-class quality standards and sustainable environmental practices. Certified MSMEs receive preferential government procurement status, interest subvention on bank term loans, and massive certification cost subsidies.',
    valueAmount: 'Up to 80% Subsidy + 0.5% Bank Interest Subvention',
    currencyOrType: 'INR',
    eligibility: [
      'Must possess valid Udyam Registration (free online registration for MSMEs)',
      'Manufacturing or hardware production unit in micro, small, or medium category'
    ],
    documentsRequired: [
      'Udyam Registration Certificate',
      'Factory/workshop address proof',
      'Quality control process manual and equipment list'
    ],
    keyPerks: [
      '80% subsidy on certification cost for Micro enterprises, 60% for Small, 50% for Medium',
      'Additional 10% subsidy for Women / SC / ST owned MSMEs',
      'Concession of 0.25% to 0.50% on interest rates from public sector banks',
      'Waiver of loan processing fees across multiple scheduled commercial banks'
    ],
    hiddenNuances: [
      'Only applicable for manufacturing/hardware/physical product MSMEs; pure software/IT consultancies cannot obtain physical ZED certification unless they have an assembly or hardware prototyping facility.'
    ],
    officialLink: 'https://zed.msme.gov.in/',
    applicationStepByStep: [
      '1. Register free on zed.msme.gov.in using your Udyam number.',
      '2. Complete online self-assessment.',
      '3. Desktop assessment and on-site inspection by accredited assessment agency.',
      '4. Issuance of Bronze, Silver, or Gold ZED certificate with financial reimbursement.'
    ],
    tags: ['MSME', 'Udyam', 'Hardware', 'Manufacturing', 'Quality', 'Subsidy'],
    statesApplicable: ['All India']
  }
];
