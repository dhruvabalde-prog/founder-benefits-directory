# Artha (Founder Benefits Directory) — Master Blueprint & Data Architecture

> **Document Type:** Product Vision, Philosophy, UI/UX Guidelines, Database Schema & Content Catalog  
> **Repository:** `dhruvabalde-prog/founder-benefits-directory`  
> **Live Deployment:** `https://founder-benefits-directory.vercel.app`  
> **Date:** October 2026  

---

## 1. Product Vision & Clarity ("What This App Is")

### 1.1 The Core Thesis
Most Indian founders burn personal savings and dilute early equity simply because government capital, non-dilutive grants, zero-balance current accounts, cloud compute credits, and legal tax shields are **scattered across hundreds of obscure government PDF circulars, incubator portals, and bank websites**.

**Artha** is the definitive, clutter-free tactical cheat sheet for founders. It is **not** a generic blog or news portal; it is an actionable operational directory designed to give every founder an **unfair financial and regulatory advantage** in under 60 seconds.

### 1.2 User Experience & Design Philosophy
1. **Zero Essay Clutter:** Headings, tags, and numbers only on the feed. No unrequested walls of text or introductory marketing fluff.
2. **Vertical Long Rectangular Tiles:** Items sit one below the other in consistent rectangular cards. 
3. **No In-Place Expansion (Direct Tap Navigation):** Clicking a tile navigates directly to its deep blueprint or official portal. No multi-level accordions on the main browsing screen.
4. **WhatsApp Chat Style Tags:** Soft, rounded, unobtrusive bubble tags (`#e7f8ec` gentle mint with `#12592b` dark green text) mimicking familiar WhatsApp messaging pills.
5. **Myntra-Style Dependent Filter Drawer:** All filters (Personas, Entity Types, States, Benefit Types, Sectors, Stages) live exclusively inside an off-canvas drawer with real-time dependent count updates.
6. **Benefits-First Footer:** The footer navigation belongs strictly to the Benefits sub-dimensions (`Schemes`, `Playbooks`, `Tools`). Learning and Networking remain distinct hubs accessible via header breadcrumbs.

---

## 2. Information Architecture: The 3 Core Pillars

```
ARTHA APP
├── 1. BENEFITS (Core Hub - Has 3 Footer Tabs)
│   ├── Schemes (State & Central Grants, Seed Funds, Sustenance Allowances)
│   ├── Playbooks (Tax Arbitrage, Family Structuring, Safe Harbors, Entity Hacks)
│   └── Tools (Zero-Burn Stacks: Databases, Hosting, Lead Engines, Current Accounts)
├── 2. LEARNING (Standalone Hub)
│   └── Free Curricula, Pitch Deck Repositories, Standard SAFE Legal Templates
└── 3. NETWORKING (Standalone Hub)
    └── Tech Summits, Maker Faires, Exhibitions + Free Entry & Student Pass Hacks
```

---

## 3. Database Schema Definitions (Data Contracts)

### 3.1 Schemes & Grants Schema (`MasterItem`)

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique slug/identifier (e.g., `sisfs-central`, `istart-rajasthan`) |
| `title` | `string` | Official scheme name |
| `category` | `'stipend' \| 'grant' \| 'banking' \| 'cloud' \| 'arbitrage'` | Primary benefit classification |
| `categoryLabel` | `string` | Human-readable badge (e.g., `Monthly Living Cash`, `Seed Grant`) |
| `provider` | `string` | Ministry, Department, or Tech Conglomerate offering the benefit |
| `stateOrRegion` | `string` | State name (`Karnataka`, `Rajasthan`, etc.) or `All States / Central` |
| `valueAmount` | `string` | Punchy financial quantum (e.g., `₹50,00,000 Grant`, `3 Years 0 MAB`) |
| `badge` | `string` | WhatsApp-style tag text (e.g., `Central Grant`, `State Stipend`) |
| `approvalTimeline` | `string` | Typical turnaround from submission to disbursal (e.g., `30 to 45 Days`) |
| `executiveSummary` | `string` | 1–2 sentences on what the capital/benefit is |
| `whyFoundersCare` | `string` | The unfair strategic advantage (non-dilutive, pays living expenses, etc.) |
| `eligibility` | `string[]` | Exact qualification checklist |
| `documentsRequired` | `string[]` | Specific files needed (CIN, GST, Pitch Deck, Udyam, Aadhaar) |
| `applicationSteps` | `string[]` | Step-by-step submission roadmap |
| `gotchasAndNuances` | `string[]` | Fine print traps (e.g., disqualification clauses, DPIIT prerequisite) |
| `stackingTips` | `string[]` | How to legally stack this scheme with other central/state perks |
| `officialLink` | `string` | Direct URL to the government application portal |
| `entityTypes` | `('sole_proprietorship' \| 'partnership' \| 'llp' \| 'pvt_ltd' \| 'delaware_c_corp')[]` | Applicable legal corporate structures |

---

### 3.2 Tax & Corporate Playbooks Schema (`FounderHack`)

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique identifier (e.g., `wife-cofounder-standup-india`) |
| `title` | `string` | Actionable playbook title |
| `category` | `string` | Strategy category (e.g., `Family Tax Arbitrage`, `Corporate Structuring`) |
| `oneLiner` | `string` | Core summary of the mechanism |
| `thePlaybook` | `string[]` | Numbered, step-by-step implementation guide |
| `realWorldExample` | `string` | Realistic case study / scenario |
| `legalComplianceRule`| `string` | Relevant Income Tax / Companies Act sections and safe harbor requirements |
| `estimatedFinancialGain` | `string` | Quantified annual financial upside (e.g., `₹10L–₹1Cr + 35% Capital Subsidy`) |
| `applicableStates` | `string[]` | Target jurisdictions or `['All India']` |

---

### 3.3 Zero-Burn Tools & Banking Schema (`ZeroBurnTool`)

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Tool identifier (e.g., `idfc-first-zero-mab`, `supabase-free`) |
| `name` | `string` | Product name |
| `department` | `'engineering' \| 'product_ai' \| 'finance_legal' \| 'sales_marketing' \| 'ops_hr'` | Functional business department |
| `tier` | `'free_forever' \| 'startup_credits' \| 'discount_90'` | Commercial tier |
| `valueAmount` | `string` | Cash equivalent value (e.g., `3 Years 0 MAB`, `$50,000 Credits`) |
| `tagline` | `string` | Punchy one-liner of utility |
| `freeOffering` | `string` | Specific free limits (MAU, GB storage, email quota, cheque leaves) |
| `eligibilityOrHack` | `string` | How to qualify or bypass credit card locks |
| `officialLink` | `string` | Direct signup or founder application URL |

---

### 3.4 Learning Resources Schema (`LearningResource`)

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Course/resource slug |
| `title` | `string` | Curriculum title |
| `provider` | `string` | Organization (e.g., `Y Combinator`, `OpenVC`, `Techstars`) |
| `category` | `'curriculum' \| 'fundraising' \| 'legal' \| 'gtm'` | Topic pillar |
| `cost` | `string` | Pricing (always `100% Free` or `Open Source`) |
| `format` | `string` | Delivery medium (`Video Modules`, `Deck Library`, `Legal Templates`) |
| `timeCommitment` | `string` | Estimated study time |
| `summary` | `string` | Brief overview |
| `keyTakeaways` | `string[]` | Bulleted learning outcomes |
| `directUrl` | `string` | Direct web access link |

---

### 3.5 Networking & Tech Summits Schema (`ConferenceEvent`)

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Summit slug |
| `name` | `string` | Official conference name |
| `industry` | `string` | Sector tag (`AI & SaaS`, `DeepTech`, `Bio & Health`, `Hardware`) |
| `city` | `string` | Host city (e.g., `New Delhi`, `Bengaluru`, `Hyderabad`) |
| `typicalMonth` | `string` | Annual calendar window (e.g., `March Annually`, `October`) |
| `frequency` | `string` | Event cadence (`Annual Flagship`, `Biannual`) |
| `freeEntryHack` | `string` | **Crucial:** Step-by-step hack to get free or subsidized passes |
| `targetAudience` | `string[]` | Best-matched founder personas |
| `websiteUrl` | `string` | Official registration link |

---

## 4. Complete Database Inventory (Currently Populated)

### 4.1 Schemes & Grants Catalog (35+ Comprehensive Programs)

#### Central Government Schemes
1. **Startup India Seed Fund Scheme (SISFS)** — Up to ₹20L Prototype Grant / ₹50L Debt (DPIIT)
2. **PMEGP Capital Subsidy** — 15% to 35% Government Subsidy on loans up to ₹50 Lakhs (KVIC/MSME)
3. **Stand-Up India Scheme** — ₹10 Lakhs to ₹1 Crore Collateral-Free Composite Loan (SIDBI)
4. **NIDHI-PRAYAS** — Up to ₹10 Lakhs Non-Dilutive Hardware Prototype Grant (DST)
5. **BIRAC Biotechnology Ignition Grant (BIG)** — Up to ₹50 Lakhs Equity-Free Grant (DBT)
6. **Section 80-IAC 100% Tax Holiday** — 3 Consecutive Years 100% Corporate Income Tax Exemption (CBDT)
7. **Section 56(2)(viib) Angel Tax Exemption** — Safe Harbor from tax on share premia (DPIIT)
8. **GeM 3% Public Procurement Quota** — Mandatory government procurement preference for startups (GeM)
9. **SIPP Patent & Trademark Fee Subsidy** — 80% Patent & 50% Trademark fee rebate (CGPDTM)
10. **TIDE 2.0 (MeitY)** — Up to ₹7L EIR stipend + ₹40L grant for ICT startups (MeitY)

#### State Government Schemes
11. **iStart Rajasthan** — ₹20k–₹25k/mo sustenance (12 mos) + Up to ₹25L seed grant (Rajasthan)
12. **Karnataka ELEVATE Idea2PoC** — Up to ₹50 Lakhs non-dilutive seed grant (Karnataka)
13. **Gujarat Student Startup & Innovation Policy (SSIP 2.0)** — ₹20k–₹25k/mo stipend + ₹30L seed (Gujarat)
14. **Tamil Nadu TANSEED** — ₹10L–₹15L equity-free grant in tranches (Tamil Nadu)
15. **Telangana WE-Hub & T-Fund** — ₹25,000/mo women allowance + ₹25L co-investment (Telangana)
16. **Kerala KSUM Idea & Scale-up Grants** — ₹12L idea grant + ₹15L interest-free loan (Kerala)
17. **Uttar Pradesh UP Startup Policy** — ₹17,500/mo living sustenance + ₹5L marketing grant (UP)
18. **Bihar Startup 10-Year 0% Loan** — Up to ₹10 Lakhs 100% interest-free loan for 10 years (Bihar)
19. **Haryana Entrepreneur Sustenance Allowance** — ₹20,000/mo stipend + 50% lease rental subsidy (Haryana)
20. **Maharashtra MSSS Seed Support** — Up to ₹15 Lakhs prototype & commercialization grant (Maharashtra)
21. **Delhi Government Startup Policy** — Collateral-free loans up to ₹50L with 50% interest subsidy (Delhi)
22. **Odisha Startup Assistance** — ₹20,000/mo sustenance (₹22,000/mo for women) + ₹16L grant (Odisha)
23. **Madhya Pradesh Seed Assistance** — ₹10 Lakhs grant (4 tranches) + ₹5,000/mo lease subsidy (MP)
24. **Andhra Pradesh Seed Capital Assistance** — Up to ₹10 Lakhs non-dilutive grant (AP)
25. **Punjab Startup Subsidy** — ₹3 Lakhs seed grant + 100% electricity duty exemption (Punjab)
26. **Assam Startup Nest (Venture Assam)** — ₹5 Lakhs idea grant + ₹50 Lakhs matching loan (Assam)
27. **West Bengal MSME Venture Capital Fund** — Equity & soft loans up to ₹25 Lakhs (West Bengal)
28. **Goa Startup Promotion Scheme** — Up to ₹25,000/mo founder salary + ₹10L seed (Goa)
29. **Uttarakhand Startup Policy** — ₹15,000/mo allowance + ₹7.5 Lakhs seed grant (Uttarakhand)
30. **Chhattisgarh Youth Startup Grant** — Up to ₹10 Lakhs seed loan + ₹15k/mo allowance (Chhattisgarh)
31. **Himachal Pradesh CM Startup Scheme** — ₹25,000/mo sustenance allowance for 12 mos (HP)
32. **Jammu & Kashmir Startup Seed Fund** — Up to ₹10 Lakhs seed grant via JKEDI (J&K)
33. **Jharkhand Startup Assistance** — ₹15,000/mo allowance + ₹10 Lakhs seed fund (Jharkhand)

---

### 4.2 Tax & Family Corporate Structuring Playbooks
1. **The 51% Woman Co-Founder / Wife Equity Multiplier**:
   - Qualifies for Stand-Up India (₹10L–₹1Cr), 35% PMEGP subsidy, state monthly bonus (+₹5k/mo in Karnataka/Odisha), GeM 3% procurement mandate.
   - *Safe Harbor:* Section 64(1)(ii) compliance — wife must possess independent educational qualification or technical expertise to prevent salary/profit clubbing with husband.
2. **The Senior Citizen Parent Rent & Advisory Arbitrage**:
   - Company pays registered commercial rent under Section 37(1) to parents (aged 60+/80+) for home office. Parents claim 30% statutory standard deduction under Section 24(a) plus nil-tax slabs, while company gets a 100% deductible business expense.
   - Advisory retainers up to basic exemption limit + Section 80D medical expenditure deductions.
3. **The 15% Vehicle Depreciation & Operational Expense Shield**:
   - Vehicle registered in company name: 15% Written Down Value (WDV) annual depreciation + 100% fuel, maintenance, insurance, Fastag toll write-offs.
   - *Compliance:* Board resolution authorizing vehicle use for business + trip logbook.
4. **The Gurugram Living + Rajasthan iStart Domicile Arbitrage**:
   - Operating out of Delhi NCR while incorporating in Rajasthan to legally claim ₹20k–₹25k/mo founder sustenance + ₹25L grant without giving up equity.
5. **The Bihar 10-Year 0% Interest Seed Hack**:
   - ₹10 Lakhs capital with zero interest and zero repayments for a full decade.
6. **The Tier-2/Tier-3 SISFS Incubator Selection Hack**:
   - Avoid oversaturated IIT Bombay/Madras incubators; target Tier-2 incubators with unspent DPIIT funds for 4x higher approval probability.
7. **The Zero-GST Export Billing Shield (LUT Filing)**:
   - File Form RFD-11 (Letter of Undertaking) to legally bill US/EU SaaS clients with 0% GST, preserving working capital without waiting for GST refunds.

---

### 4.3 Zero-Burn Tools & Banking Matrix
1. **IDFC FIRST Bank Startup Account**: 3 Years Zero Minimum Account Balance (MAB), free 100 cheques, free outward NEFT/RTGS/IMPS.
2. **ICICI iStartup 2.0 Platinum**: 12 months zero balance waiver + automated digital e-FIRC issuance for international Stripe/Paddle remittances.
3. **Supabase**: Free forever tier with 2 Postgres databases, 50,000 monthly active users for Auth, 1GB storage, edge functions.
4. **Cloudflare Pages & Workers**: Free global CDN, SSL, DDoS protection, 100,000 serverless Worker requests/day.
5. **Microsoft for Startups Founders Hub**: Up to $150,000 Azure compute + $2,500–$20,000 Azure OpenAI Service credits (GPT-4o) with zero funding required.
6. **AWS Activate**: $1,000 for bootstrapped founders; up to $100,000 for incubator/VC-affiliated startups + Bedrock credits (Claude 3.5 Sonnet).
7. **PostHog for Startups**: $50,000 free credits valid for 1 year covering 30M+ events and session recordings.
8. **Apollo.io**: Free B2B contact engine (60 mobile numbers, 120 export credits, unlimited cold email sequences).
9. **Brevo (Sendinblue)**: Send 300 free marketing and transactional emails per day forever (9,000 emails/month).
10. **Wave Invoicing**: 100% free professional client invoicing, receipt scanning, and ledger bookkeeping.

---

### 4.4 Learning Curricula
1. **YC Startup School (Y Combinator)**: 20-lesson flagship curriculum covering PMF, talking to users, pricing, and co-founder equity splits.
2. **Techstars Lean Toolkit**: MVP customer validation, build-measure-learn loops, and 9-block business model canvas.
3. **OpenVC Deck Database**: 1,000+ real, successful pitch decks categorized by seed, Series A, and sector.
4. **Standard YC SAFE Contracts**: Post-money and pre-money valuation cap SAFE notes and MFN agreements.
5. **First Round Capital GTM Engine**: 0 to 1 sales playbooks, founder-led outbound, and enterprise pilot closing tactics.
6. **Stripe Atlas Guide to US Entities**: Tax treaties, 83(b) elections, Form 5472/1120 compliance, and Delaware C-Corp setups.

---

### 4.5 Networking & Tech Summits
1. **Startup Mahakumbh (Bharat Mandapam, New Delhi)**: Central government mega-conclave with 1,000+ VCs and DPIIT delegations. *Hack: Free entry via state incubator delegation nomination or DPIIT recognized startup pass.*
2. **TechSparks (Bengaluru & Mumbai)**: Premier ecosystem gathering. *Hack: Volunteer as track coordinator or enter via university innovation cell delegations.*
3. **NASSCOM Product Conclave (Bengaluru)**: Deep enterprise tech and B2B SaaS summit. *Hack: Apply to NASSCOM 10,000 Startups showcase for free demo kiosks and exhibitor passes.*
4. **TiEcon (Delhi NCR & Silicon Valley)**: Global investor network. *Hack: Apply to TiE Young Entrepreneurs or pitch competitions for subsidized full-access delegate passes.*
5. **Global Bio-India (New Delhi)**: Mega biotech convention. *Hack: BIRAC grantees receive complimentary exhibition stalls and founder passes.*
6. **T-Works Maker Faire (Hyderabad)**: Largest hardware prototyping exhibition in India. *Hack: Bring an early physical prototype to receive a free exhibitor booth and fab lab pass.*

---

## 5. Future Data Backlog & Expansion Plan

| Area | Planned Additions |
| :--- | :--- |
| **State Coverage** | Adding deep micro-schemes for North-Eastern states (Meghalaya, Nagaland, Tripura, Sikkim) and UTs (Puducherry, Ladakh). |
| **Debt & CGTMSE** | Collateral-free bank loans up to ₹5 Crores under Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE). |
| **CSR Grants** | Corporate Social Responsibility funding databases (Tata Trusts, Infosys Foundation, HDFC Parivartan). |
| **ESOP Structuring** | Playbook on zero-tax ESOP pooling, exercise windows, and section 80-IAC deferred tax benefits. |
| **International Market Entry** | Singapore EntrePass, Dubai DED Green Visa, UK Global Talent Visa for Indian founders. |

---

*This document is the official single source of truth for the Artha codebase and database.*
