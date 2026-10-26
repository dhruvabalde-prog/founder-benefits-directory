import { FounderHack } from '../types';

export const FOUNDER_HACKS: FounderHack[] = [
  {
    id: 'gurugram-rajasthan-dual-benefit',
    title: 'The NCR Living + Rajasthan Domicile Arbitrage',
    category: 'Cross-State Incorporation',
    oneLiner: 'Live & work in Gurugram / Bengaluru for the tech ecosystem, while claiming ₹20k–₹25k/month sustenance allowance & up to ₹25L seed grants from Rajasthan iStart.',
    thePlaybook: [
      'Register your company CIN or LLP with a registered office in Rajasthan (using family property, hometown address, or a virtual office lease in Jaipur/Jodhpur/Udaipur).',
      'Keep at least one promoter with Rajasthan Aadhaar/domicile or registered office proof.',
      'Apply to iStart Rajasthan (istart.rajasthan.gov.in) under the "Idea" or "Viable Product" stage.',
      'Claim the monthly Sustenance Allowance (₹20,000/mo for general, ₹25,000/mo for women/SC/ST) directly deposited into founder bank accounts for 12 months.',
      'Operate your core engineering team or customer meetings out of Gurugram, Delhi NCR, or Bengaluru without violating the policy as long as Rajasthan filing compliances are met.'
    ],
    realWorldExample: 'A SaaS founder working out of Cyber City, Gurugram with hometown roots in Jaipur incorporated their Pvt Ltd in Jaipur. They secured ₹2.4 Lakhs annual living stipend + ₹5 Lakhs iStart seed grant to pay for initial AWS and designer costs while hiring in NCR.',
    legalComplianceRule: 'Entity must be registered with MCA within Rajasthan and maintain GST/Udyam registered in the state. Periodic virtual review presentations with iStart committees are conducted online.',
    estimatedFinancialGain: '₹2.4L – ₹3L/year living stipend + up to ₹25 Lakhs non-dilutive seed grant',
    applicableStates: ['Rajasthan', 'Haryana', 'Delhi']
  },
  {
    id: 'bihar-10year-zero-interest-loan',
    title: 'The Bihar 10-Year 0% Interest Seed Hack',
    category: 'State Grant Arbitrage',
    oneLiner: 'Bihar offers up to ₹10 Lakhs 100% interest-free seed loan with a 10-year repayment tenure for early-stage startups registered in Bihar.',
    thePlaybook: [
      'Incorporate a Private Limited company or LLP with a registered address in Patna or any district of Bihar.',
      'Apply through the Bihar Startup Portal (startup.bihar.gov.in).',
      'The government disburses an interest-free loan of up to ₹10 Lakhs with zero collateral.',
      'Repayment begins only after 10 years or upon raising institutional equity.',
      'Use this capital for initial product engineering, testing, or working capital while preserving 100% equity.'
    ],
    realWorldExample: 'Agritech and D2C founders register their processing or corporate back-office in Patna, receive the ₹10L seed check at zero equity and zero interest, and scale nationwide operations.',
    legalComplianceRule: 'Startup must be recognized by the Bihar Startup Cell and comply with basic annual filing milestones.',
    estimatedFinancialGain: '₹10 Lakhs zero-interest non-dilutive capital for 10 years',
    applicableStates: ['Bihar']
  },
  {
    id: 'sisfs-tier2-incubator-arbitrage',
    title: 'The SISFS Incubator Selection Arbitrage',
    category: 'Grant Approval Tactics',
    oneLiner: 'Never pick top-heavy IIT Bombay or IIM Ahmedabad incubators for SISFS where 2,000+ startups fight for 5 grants. Target high-fund Tier-2/Tier-3 incubators for 4x higher approval odds.',
    thePlaybook: [
      'Founders can select up to 3 incubators simultaneously on the Startup India Seed Fund portal (seedfund.startupindia.gov.in).',
      'Open the public SISFS dashboard and filter by "Funds Disbursed vs Funds Sanctioned".',
      'Find incubators that have received ₹3–₹5 Crore from DPIIT but have disbursed less than 30% of their capital.',
      'Pick specialized university or state incubators (e.g. in Jaipur, Bhubaneswar, Trichy, Coimbatore, Bhopal) aligned with your sector.',
      'Reach out to the incubator CEO on LinkedIn before clicking submit to verify active application review.'
    ],
    realWorldExample: 'A logistics software startup was rejected by IIT Delhi and IIT Madras incubators. They submitted to an approved university incubator in Rajasthan with unspent funds and received a ₹20 Lakhs grant within 60 days.',
    legalComplianceRule: 'Must be a DPIIT-recognized startup incorporated for less than 2 years at application time.',
    estimatedFinancialGain: 'Up to ₹20 Lakhs non-dilutive grant + ₹50 Lakhs convertible debt',
    applicableStates: ['All States / Central']
  },
  {
    id: 'patent-rebate-double-dip',
    title: 'The DPIIT + State MSME Patent Double-Dip (Net 0% Patent Cost)',
    category: 'IP & Legal Arbitrage',
    oneLiner: 'Combine DPIIT 80% statutory fee waiver with State MSME patent reimbursement to recover 100% of filing and legal costs.',
    thePlaybook: [
      'Step 1: File for patent using DPIIT Startup Certificate to instantly reduce official filing statutory fees from ₹8,000 to ₹1,600 (80% statutory discount).',
      'Step 2: Request expedited fast-track examination (granted to DPIIT startups in 6–9 months instead of 4–5 years).',
      'Step 3: After filing, submit attorney invoices and filing receipts to your State Startup Cell (e.g., Karnataka reimburses up to ₹2L domestic / ₹10L international; Haryana & Maharashtra reimburse up to ₹2L).',
      'Result: Government covers 100% of the attorney and statutory filing expenses.'
    ],
    realWorldExample: 'A hardware/IoT startup in Bengaluru filed 2 provisional patents. Total out-of-pocket cost was ₹1.2 Lakhs. They claimed full reimbursement from Karnataka Startup Cell, reducing effective patent filing cost to ₹0.',
    legalComplianceRule: 'Submit state reimbursement application within 6 months of filing receipt or grant issuance.',
    estimatedFinancialGain: '₹2 Lakhs (Domestic) to ₹10 Lakhs (International Patent PCT)',
    applicableStates: ['All States / Central', 'Karnataka', 'Maharashtra', 'Haryana', 'Gujarat']
  },
  {
    id: 'forex-lut-export-arbitrage',
    title: 'The GST LUT + Purpose Code P0802 Export Arbitrage',
    category: 'Tax & Cross-Border',
    oneLiner: 'Legally eliminate 18% GST on international SaaS revenue and automate zero-fee e-FIRS tracking for cross-border funding.',
    thePlaybook: [
      'File Form GST RFD-11 (Letter of Undertaking / LUT) on the GST portal at the start of every fiscal year (takes 2 minutes, 0 cost).',
      'Quote your LUT number on all international invoices to foreign clients or Stripe US payouts to legally charge 0% GST.',
      'Instruct your AD Category-1 bank (HDFC, Axis, ICICI, or RazorpayX) to lock Purpose Code P0802 (Software Implementation/SaaS) on incoming SWIFT wires.',
      'Require the bank to deliver electronic e-FIRS / FIRC within 24 hours to prove genuine export of service.',
      'Claim refunds on input tax credit (ITC) paid for domestic office laptops, cloud servers, and rent against your 0% export turnover.'
    ],
    realWorldExample: 'A bootstrapped developer selling AI APIs to US clients received $50k in Stripe payouts. With LUT in place, they legally avoided an ₹7.5 Lakhs (18%) IGST liability and claimed an ₹80,000 refund on server equipment taxes.',
    legalComplianceRule: 'Funds must be received in convertible foreign currency within the RBI-prescribed timeframe (currently 9 months from invoice).',
    estimatedFinancialGain: '18% tax exemption on gross international revenue + full input tax credit refund',
    applicableStates: ['All States / Central']
  },
  {
    id: 'karnataka-remote-workforce-rule',
    title: 'The Karnataka ELEVATE 50% Workforce Compliance Hack',
    category: 'State Compliance',
    oneLiner: 'How distributed/remote tech teams qualify for Karnataka\'s ₹50 Lakhs ELEVATE grant without violating the 50% local workforce rule.',
    thePlaybook: [
      'Karnataka ELEVATE mandates that 50% of the startup\'s workforce must be located in Karnataka.',
      'If your engineering team is distributed across India, register the founders, technical architects, and core directors at the Bengaluru office on PF/ESIC or formal contract muster rolls.',
      'Engage non-Karnataka remote developers as independent contractors or project-based consultants rather than permanent on-roll employees during the audit window.',
      'Ensure the registered office address in Bengaluru has an active co-working or commercial agreement with utility/rent bills.'
    ],
    realWorldExample: 'A 6-person tech startup had 3 engineers in UP and Delhi. They placed the 3 co-founders and product lead on the Karnataka payroll muster roll and retained the other 2 as external consultants, cleanly clearing the state audit for a ₹40 Lakhs ELEVATE grant.',
    legalComplianceRule: 'The permanent employee muster roll must show 50%+ address proof within Karnataka during physical inspection.',
    estimatedFinancialGain: 'Up to ₹50 Lakhs 100% non-dilutive grant-in-aid',
    applicableStates: ['Karnataka']
  },
  {
    id: 'delaware-us-india-cost-plus-flip',
    title: 'The Delaware C-Corp + Indian Wholly Owned Sub (WOS) Double Dip',
    category: 'Global Structuring',
    oneLiner: 'Access US VC funding, Mercury $5M FDIC banking, and $150k Azure/OpenAI perks, while maintaining Indian DPIIT status and lower R&D operating costs.',
    thePlaybook: [
      'Form a Delaware C-Corp (via Stripe Atlas or Clerky) for international investors, global customer billing, and US accelerator acceptance.',
      'Set up a Wholly Owned Subsidiary (WOS) Private Limited in India.',
      'Execute a cross-border "Cost-Plus" Transfer Pricing Service Agreement between US Parent and Indian Sub (typically cost + 10% to 15% markup for engineering services).',
      'The Indian subsidiary qualifies for DPIIT recognition, Indian patent rebates, and state hiring incentives.',
      'The US parent qualifies for Mercury 5% treasury, Brex cards, AWS Activate $100k, and US venture capital checks.'
    ],
    realWorldExample: 'YC-backed Indian SaaS companies maintain a Delaware entity for investor checks and a Bengaluru entity employing 20 engineers. They claim global cloud perks in the US and Indian DPIIT patent discounts simultaneously.',
    legalComplianceRule: 'Ensure RBI Overseas Direct Investment (ODI) regulations and transfer pricing documentation (Form 3CEB) are filed annually.',
    estimatedFinancialGain: '$150k+ in US Cloud Credits + access to US VC checks + Indian R&D cost savings',
    applicableStates: ['Global / US Entities', 'All States / Central']
  },
  {
    id: 'section-80iac-imb-approval-playbook',
    title: 'The Section 80-IAC 3-Year 100% Tax Shield Playbook',
    category: 'Tax Elimination',
    oneLiner: 'How to structure your DPIIT Form-1 and video pitch before the Inter-Ministerial Board (IMB) to secure 3 consecutive years of 0% corporate tax.',
    thePlaybook: [
      'Step 1: File for at least one provisional patent, design registration, or software copyright before submitting Form-1.',
      'Step 2: On the Startup India portal, navigate to Tax Exemption under Section 80-IAC.',
      'Step 3: In the application essay, explicitly prove 3 pillars: High Innovation, High Employment Potential, and Scalable Wealth Creation (use official DPIIT buzzwords).',
      'Step 4: Record a crisp 3-minute video showing your working product, client deployment dashboard, and algorithm architecture.',
      'Step 5: The Inter-Ministerial Board (IMB) reviews monthly. Once sanctioned, you choose any 3 consecutive fiscal years within your first 10 years to pay 0% tax.'
    ],
    realWorldExample: 'A B2B SaaS startup in Pune scaled from ₹2Cr to ₹15Cr ARR. With their Section 80-IAC exemption active, they saved ₹1.8 Crores in corporate income tax over 3 years, reinvesting the entire cash pile into US sales expansion.',
    legalComplianceRule: 'Entity must be a Pvt Ltd or LLP incorporated between April 1, 2016 and March 31, 2025 with turnover under ₹100Cr.',
    estimatedFinancialGain: '100% corporate tax exemption for 3 consecutive financial years (saves ₹50L to ₹5Cr+)',
    applicableStates: ['All States / Central']
  },
  {
    id: 'startuptn-tanseed-angel-matching',
    title: 'The StartupTN TANSEED 1:1 Co-Matching Hack',
    category: 'State Grant Arbitrage',
    oneLiner: 'How to use Tamil Nadu\'s ₹10L–₹15L TANSEED grant to match private angel capital without giving away equity warrants.',
    thePlaybook: [
      'Tamil Nadu TANSIM conducts regular cohort calls for TANSEED (₹10 Lakhs equity-free grant, ₹15L for women/SC/ST/rural founders).',
      'When pitching to angel syndicates or incubators in Chennai/Coimbatore, propose a matching structure: "We raise ₹15L from angels and unlock ₹10L from TANSEED with zero dilution."',
      'Having committed angel terms dramatically accelerates TANSEED jury approval because it de-risks private market viability.',
      'Disbursal is 100% non-dilutive and comes with the StartupTN Smart Card, unlocking ₹5L+ in free enterprise tool credits.'
    ],
    realWorldExample: 'A deeptech robotics startup in Chennai closed ₹20L from angel investors and secured a ₹10L TANSEED grant, giving them ₹30L total runway while preserving an extra 6% founder equity.',
    legalComplianceRule: 'Company must maintain its registered office in Tamil Nadu for a minimum of 3 years post-sanction.',
    estimatedFinancialGain: '₹10 Lakhs to ₹15 Lakhs 100% equity-free cash + ₹5L software credits',
    applicableStates: ['Tamil Nadu']
  },
  {
    id: 'kerala-ksum-zero-collateral-scaleup',
    title: 'The Kerala KSUM Zero-Collateral Scale-Up Soft Capital Hack',
    category: 'Debt & Working Capital',
    oneLiner: 'How to secure ₹15 Lakhs in soft loans at minimal interest without pledging personal real-estate or pledging founder shares.',
    thePlaybook: [
      'Register on the Kerala Startup Mission (KSUM) portal and establish a registered office or branch in Kochi/Trivandrum.',
      'Apply under the KSUM Early Stage Scale-Up Scheme.',
      'The government advances up to ₹15 Lakhs as a soft working capital loan at subsidized interest rates.',
      'Zero personal immovable property collateral is demanded; sanction is backed by state credit guarantees and project milestone reviews.',
      'Repayment begins after a 12-month moratorium period, giving you a full year of breathing room to scale sales.'
    ],
    realWorldExample: 'A medical IoT startup in Ernakulam utilized a ₹15L KSUM soft loan to manufacture their first batch of 500 monitoring devices, paying off the loan purely from hospital pilot revenues.',
    legalComplianceRule: 'All promoter directors must have a credit score above 650 and no willful default history on commercial loans.',
    estimatedFinancialGain: '₹15 Lakhs soft capital with zero equity dilution and zero real-estate collateral',
    applicableStates: ['Kerala']
  },
  {
    id: 't-works-semiconductor-prototyping-arbitrage',
    title: 'The T-Works / STPI Free Hardware & SMT Prototyping Arbitrage',
    category: 'Hardware & Infrastructure',
    oneLiner: 'How IoT, hardware, and EV startups access ₹10Cr+ semiconductor, PCB assembly, and laser-cutting industrial machinery for ₹0.',
    thePlaybook: [
      'Never invest your early angel checks into buying costly 3D printers, CNC milling machines, or Pick-and-Place PCB assembly lines.',
      'Register on the Telangana T-Works portal (Hyderabad) or your local STPI FabLab.',
      'DPIIT and state-recognized startups receive 80% to 100% subsidized machine time and technician operator support.',
      'Fabricate your multi-layer PCB boards, CNC metal enclosures, and rapid 3D prototypes in hours instead of waiting weeks for China shipments.',
      'Present your physical working prototype to receive MeitY TIDE 2.0 or BIRAC grants.'
    ],
    realWorldExample: 'An EV battery management startup in Hyderabad fabricated 12 prototype PCB boards and battery enclosures at T-Works for under ₹15,000, saving over ₹8 Lakhs in vendor machining costs.',
    legalComplianceRule: 'Prototypes must be for genuine R&D and pilot validation, not commercial mass manufacturing.',
    estimatedFinancialGain: 'Save ₹5L to ₹20L in specialized CNC/PCB prototyping capital expenditure',
    applicableStates: ['Telangana', 'All States / Central']
  },
  {
    id: 'gem-tender-exemption-arbitrage',
    title: 'The GeM GFR-173 Prior Experience & EMD Waiver Arbitrage',
    category: 'Government Contracts & Revenue',
    oneLiner: 'How Day 1 DPIIT startups win multi-crore public sector and PSU tenders by invoking statutory exemptions from prior turnover rules.',
    thePlaybook: [
      'Central ministries and PSUs spend thousands of crores annually on software, cybersecurity, and office automation.',
      'Ordinarily, tenders demand "minimum 3 years in business and ₹5 Crore annual turnover" — disqualifying young companies.',
      'Under Rule 173(i) of General Financial Rules (GFR), all central government departments are mandated to waive "Prior Turnover" and "Prior Experience" for DPIIT startups.',
      'Link your DPIIT number on the Government e-Marketplace (GeM) Startup Runway.',
      'Submit bids without depositing Earnest Money Deposit (EMD is also 100% exempt). Compete purely on technical spec score and competitive price.'
    ],
    realWorldExample: 'A 9-month-old AI document processing startup won an ₹85 Lakhs contract with a national PSU bank, cleanly beating legacy IT giants by citing their DPIIT GFR 173(i) exemption.',
    legalComplianceRule: 'Startup must meet the exact technical compliance standards specified in the tender scope of work.',
    estimatedFinancialGain: 'Immediate access to ₹10L–₹2Cr government contracts without 3 years of prior audited history',
    applicableStates: ['All States / Central']
  },
  {
    id: 'women-founder-51-equity-multiplier',
    title: 'The 51% Woman Co-Founder / Wife Equity Multiplier',
    category: 'Gender & Equity Arbitrage',
    oneLiner: 'How structuring 51%+ controlling equity with a woman partner unlocks ₹1 Crore collateral-free debt, 35% cash subsidies, state monthly bonuses, and 3% public procurement quotas.',
    thePlaybook: [
      'Incorporate your entity (Pvt Ltd, LLP, or Partnership) with a qualified woman co-founder or spouse holding at least 51% of paid-up equity and active executive directorship.',
      'Apply to Stand-Up India to access between ₹10 Lakhs and ₹1 Crore in low-interest, collateral-free bank loans reserved for women-led greenfield ventures.',
      'Under PMEGP, women qualify for the highest "Special Category" non-repayable capital subsidy of up to 35% (compared to 15% for general males).',
      'Claim higher monthly sustenance allowances across state startup policies: +₹5,000/mo extra in Rajasthan & Gujarat, +₹2,000/mo extra in Odisha, and +20% bonus in Madhya Pradesh.',
      'Under the Public Procurement Policy, central ministries and PSUs have a mandatory 3% annual procurement quota reserved strictly for women-owned MSMEs on GeM.'
    ],
    realWorldExample: 'A logistics software company structured with 51% ownership held by a qualified woman director unlocked a ₹35L Stand-Up India facility, ₹25,000/mo iStart living stipend, and won an ongoing PSU supply chain digitization contract on GeM with zero bidding fee.',
    legalComplianceRule: 'To prevent Section 64(1)(ii) clubbing of salary into the husband\'s tax return, ensure the spouse possesses professional/technical qualifications (e.g. MBA, engineering, commerce) commensurate with her designated corporate duties.',
    estimatedFinancialGain: '₹10L–₹1Cr collateral-free capital + up to 35% non-repayable grant + ₹3L/yr living cash',
    applicableStates: ['All States / Central', 'Rajasthan', 'Gujarat', 'Odisha', 'Telangana']
  },
  {
    id: 'senior-citizen-parent-rent-advisory-arbitrage',
    title: 'The Senior Citizen Parent Rent & Advisory Arbitrage',
    category: 'Family Tax Planning',
    oneLiner: 'How paying legitimate rent and advisory retainer to senior citizen parents shifts profits into low/zero tax brackets while generating corporate tax deductions.',
    thePlaybook: [
      'If your senior citizen parents (aged 60+ or 80+) own the residential or commercial property from which your startup operates, execute a formal registered rental lease agreement.',
      'The company claims 100% of the rent paid as a tax-deductible business expense under Section 37(1), directly reducing corporate taxable profits.',
      'In the parents\' hands, rental income is taxed under "Income from House Property," which automatically enjoys a statutory 30% standard deduction under Section 24(a).',
      'Senior citizens benefit from higher basic exemption limits (₹3 Lakhs for 60+, ₹5 Lakhs for 80+), absorbing the income with minimal to zero tax liability.',
      'If parents have business/financial expertise, retain them on a formal advisory board for professional consultancy fees, fully deductible as business overheads.'
    ],
    realWorldExample: 'A profitable bootstrapped SaaS founder operating from a family property paid ₹6 Lakhs annual rent to their retired father. The startup saved ₹1.5 Lakhs in corporate tax (25%), while the father utilized the 30% Section 24 deduction and senior citizen rebate, paying under ₹15,000 in personal tax.',
    legalComplianceRule: 'Rent must be paid at fair market value (FMV) via direct bank transfers, with property municipal tax receipts and rent receipts maintained for audit trail.',
    estimatedFinancialGain: 'Saves 20% to 25% corporate tax on rental pool (saves ₹1L to ₹3L annually)',
    applicableStates: ['All States / Central']
  },
  {
    id: 'car-depreciation-operational-expense-shield',
    title: 'The 15% Vehicle Depreciation & Fuel Shield',
    category: 'Asset Tax Shields',
    oneLiner: 'How purchasing company transport in the entity name generates an immediate 15% annual written-down tax write-off plus 100% fuel, insurance, and toll deductions.',
    thePlaybook: [
      'Register business vehicles (including cars used by founders for client meetings, bank runs, and team travel) in the name of the Private Limited company or LLP.',
      'Claim standard 15% annual depreciation on the vehicle\'s Written Down Value (WDV) to reduce taxable corporate net profits (or 7.5% if used for under 180 days in Year 1).',
      'All vehicle operational expenses—petrol/diesel bills, Fastag highway tolls, comprehensive insurance, regular maintenance servicing, and driver salaries—are 100% tax-deductible business expenses.',
      'Maintain an official company vehicle logbook recording date, destination, odometer reading, and business purpose of trips.',
      'If EV (Electric Vehicle): Check state EV policies (e.g. Delhi, Maharashtra, Karnataka) for 100% road tax and registration fee waivers + fast charging subsidies.'
    ],
    realWorldExample: 'A bootstrapped tech firm purchased an ₹18 Lakhs vehicle in the company name. In Year 1, they claimed ₹2.7 Lakhs in depreciation write-offs plus ₹1.8 Lakhs in fuel, insurance, and maintenance expenses, reducing taxable income by ₹4.5 Lakhs and saving over ₹1.1 Lakhs in corporate tax.',
    legalComplianceRule: 'Keep a clean vehicle logbook and fuel credit card receipts to prevent assessing officers from disallowing a portion of costs under Section 38(2) for personal usage.',
    estimatedFinancialGain: '15% annual depreciation write-off + ₹1L to ₹2L/year in tax-shielded running expenses',
    applicableStates: ['All States / Central']
  }
];
