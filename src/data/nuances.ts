import { NuanceTopic } from '../types';

export const NUANCE_TOPICS: NuanceTopic[] = [
  {
    id: 'dpiit-vs-80iac',
    title: 'The Great Misconception: DPIIT Certificate vs Section 80-IAC Tax Exemption',
    tagline: 'Why 90% of founders mistakenly believe DPIIT recognition automatically exempts them from income tax.',
    summary: 'Obtaining DPIIT recognition on startupindia.gov.in takes just 48 hours and is granted to almost all valid Pvt Ltd / LLP entities with an innovative pitch. However, Section 80-IAC (100% tax holiday on profits for 3 consecutive years) is governed by the Inter-Ministerial Board (IMB). Out of over 100,000+ DPIIT startups, only a tiny fraction (fewer than 2,000) have received 80-IAC certificates.',
    commonMistakes: [
      'Assuming the 3-page DPIIT certificate can be given to your CA to claim 0% corporate tax.',
      'Applying for 80-IAC when you have zero revenue or only generic agency/service operations.',
      'Failing to show a clear IP moat, proprietary algorithms, or registered patents during the IMB pitch.'
    ],
    insiderTips: [
      'First apply for DPIIT recognition to get your 80% patent rebate and self-certification for labor laws immediately.',
      'Apply for 80-IAC only once your startup has reached demonstrable commercial traction, filed for patents, or built a unique tech architecture.',
      'Ensure your company\'s incorporation was strictly within the eligibility window (post April 1, 2016) and that you are a Private Limited Company (LLPs are technically eligible under Section 80-IAC, but scrutiny is stricter).'
    ],
    keyLegislationOrClause: 'Income Tax Act 1961, Section 80-IAC & DPIIT Notification G.S.R. 127(E)'
  },
  {
    id: 'angel-tax-reform',
    title: 'Angel Tax (Section 56(2)(viib)) Abolition & Historical Nuances',
    tagline: 'Budget 2024 abolished Angel Tax for all investors, but legacy filings and past assessment years require care.',
    summary: 'Historically, "Angel Tax" penalized startups raising capital above Fair Market Value (FMV) from domestic resident investors as income from other sources. In the Union Budget 2024, the government abolished Section 56(2)(viib) for all classes of investors effective April 1, 2025. However, pending tax notices and historical scrutiny for prior assessment years still rely on DPIIT Angel Tax Exemption filings (Form 2).',
    commonMistakes: [
      'Ignoring past assessments: If your startup raised domestic angel rounds in FY 2021-22 or 2022-23 without filing DPIIT Form 2, you may still receive scrutiny queries for those legacy assessment years.',
      'Assuming foreign investment was covered: Angel tax historically applied primarily to domestic resident investors; foreign FDI was under RBI FEMA pricing guidelines.'
    ],
    insiderTips: [
      'If you have unaddressed notices for prior years, ensure your DPIIT Form 2 declaration is on record showing paid-up share capital + share premium did not exceed ₹25 Crore.',
      'For ongoing equity rounds, standard FEMA Fair Market Value (DCF method certified by a Merchant Banker) remains necessary for cross-border investments.'
    ],
    keyLegislationOrClause: 'Section 56(2)(viib) of the Income-tax Act, 1961 (Abolished w.e.f. Assessment Year 2025-26)'
  },
  {
    id: 'forex-firc-export',
    title: 'Foreign Inward Remittance, Purpose Codes & Automated e-FIRS / e-BRC',
    tagline: 'How Indian tech SaaS founders lose export incentives or trigger RBI notices due to wrong Purpose Codes.',
    summary: 'When international customers pay you via Stripe, PayPal, LemonSqueezy, or direct SWIFT wires in USD/EUR, the funds enter India through an Authorized Dealer (AD Category-I) Bank. If the correct RBI Purpose Code (e.g., P0802 for Software Implementation & Data Processing) is not specified, you will not receive an electronic Foreign Inward Remittance Certificate (e-FIRS), making you ineligible for 0% GST on export of services.',
    commonMistakes: [
      'Withdrawing international revenue to a personal savings account rather than a corporate current account with an Import Export Code (IEC).',
      'Forgetting to file a Letter of Undertaking (LUT) on the GST portal before exporting services, triggering an unwanted 18% IGST liability.',
      'Allowing payment aggregators to credit funds as generic domestic transfers without corresponding e-FIRS statements.'
    ],
    insiderTips: [
      'File your LUT (Form GST RFD-11) at the start of every financial year (takes 5 minutes on the GST portal) to export SaaS services at 0% GST.',
      'Choose a startup-friendly bank (like Axis, HDFC SmartUp, or ICICI) that automatically issues e-FIRS/FIRC within 24 hours of funds crediting without charging ₹250-₹500 per remittance certificate.',
      'Ensure your invoice includes the client\'s overseas address, invoice date, currency of transaction, and proper SAC code (998314).'
    ],
    keyLegislationOrClause: 'Foreign Exchange Management Act (FEMA) 1999 & RBI Master Direction on Inward Remittance'
  },
  {
    id: 'dpiit-vs-msme-udyam',
    title: 'DPIIT Recognition vs MSME Udyam: Which One Do You Actually Need?',
    tagline: 'The dual-registration roadmap: Why smart founders register for BOTH within the first month.',
    summary: 'Many founders ask whether they should register with Startup India (DPIIT) or the Ministry of MSME (Udyam). The answer is BOTH! DPIIT provides income tax holidays, angel tax relief, and startup seed grants (SISFS). Udyam provides statutory protection against delayed payments (Samadhaan portal: buyers must pay within 45 days or pay 3x RBI bank rate interest), 50% trademark rebates, and CGTMSE collateral-free loans.',
    commonMistakes: [
      'Thinking Udyam registration is only for traditional brick-and-mortar factories. Tech SaaS and software companies qualify fully under the Services MSME classification.',
      'Thinking DPIIT provides loan guarantees: DPIIT provides equity/seed grants, while MSME Udyam opens access to government bank loan schemes and delayed payment tribunals.'
    ],
    insiderTips: [
      'Udyam registration is 100% free, paperless, instant (instant certificate with Aadhaar & PAN on udyamregistration.gov.in). Do not pay intermediaries for it.',
      'If an enterprise client delays your SaaS/consulting invoice beyond 45 days, you can lodge a formal recovery claim on MSME Samadhaan, which carries statutory judicial power.',
      'Combine DPIIT + Udyam to get up to 80% statutory rebate on patent filings.'
    ],
    keyLegislationOrClause: 'Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 & DPIIT Startup Notification'
  },
  {
    id: 'sisfs-incubator-tactics',
    title: 'The SISFS Incubator Selection Matrix: Winning Up to ₹20L Non-Dilutive Grant',
    tagline: 'How to pick your 3 incubators wisely to maximize your odds of getting funded.',
    summary: 'Under the Startup India Seed Fund Scheme (SISFS), you can apply to up to 3 incubators simultaneously. Most founders randomly pick famous IIT incubators and get rejected because those incubators receive 2,000+ applications for 10 seats. Strategic incubator selection increases your selection probability by over 400%.',
    commonMistakes: [
      'Applying to an incubator located 2,000 km away that has a strict physical incubation requirement.',
      'Applying to a sector-agnostic mega-incubator when your startup is specialized in Agritech, Healthtech, or Defense where dedicated domain incubators have unspent allocations.',
      'Applying after your company is older than 2 years: The 2-year incorporation rule is an algorithmic hard cutoff on the portal.'
    ],
    insiderTips: [
      'Look up the unspent fund balance of incubators on the public SISFS dashboard before submitting. Incubators with high sanctioned funds and few disbursed tranches are actively scouting.',
      'Connect with the incubator manager or CEO on LinkedIn before submitting. Ask if they are accepting your specific technology domain.',
      'Prepare a clear milestone chart: SisFS grants are released in 3 tranches (e.g. 30% advance upon signing, 40% on alpha prototype completion, 30% on beta customer trials).'
    ],
    keyLegislationOrClause: 'Startup India Seed Fund Scheme Guidelines (DPIIT)'
  }
];
