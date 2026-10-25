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
  }
];
