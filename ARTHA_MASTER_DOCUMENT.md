# Artha (Founder Directory) — User Specification & Database Blueprint

> **Source of Truth:** Exactly compiled from all user directives, architectural decisions, and database research. No extraneous filler.

---

## 1. App Vision & Core Clarity (What The App Must Be)

### 1.1 The Identity & Structure
* **Three Independent Dimensions / Hubs:**
  1. **Benefits** (The main engine for financial and tactical founder survival)
  2. **Learning** (Free education, startup schools, AI practitioner learning, pitch decks, SAFE templates)
  3. **Networking** (Conventions, conferences, maker faires across the country with hacks for free entry)
* **One Dimension at a Time:** A founder only views one hub at any given time.
* **Footer Navigation Rule:**
  * Only the **Benefits** hub has footer tabs.
  * The footer tabs are the sub-pointers of Benefits:
    1. **Schemes** (State & Central grants, stipends, equity-free cash)
    2. **Playbooks** (Tax shields, family partner hacks, vehicle write-offs, legal arbitrage)
    3. **Tools** (Zero-burn stacks, current accounts, free credits, discounts across departments)
  * **Learning** and **Networking** do **NOT** have footer tabs.

### 1.2 Layout & UI Principles
* **Long Rectangular Tiles Arranged Vertically:** Every card sits one below the other in clean, vertical stack order.
* **No Walls of Text or Explanations:** Clean, clutter-free. Headings and numbers only. No essay blurbs on the feed.
* **No In-Place Expanding:** Tiles do not expand in place on the feed. Tapping a tile navigates directly to the full details/blueprint or official portal.
* **WhatsApp Chat Style Tags:** Simple, clean bubble pills styled like WhatsApp chat tags (`#e7f8ec` soft green with `#12592b` dark green text and subtle stone badges). No developer or personal branding in the tags.
* **Icon & Symbol CTAs:** Buttons and actions use icons/symbols, not long text.
* **Viewport & Mobile-First:** Designed specifically for mobile screens with zero horizontal overflow and proper touch targets.

---

## 2. Global Dependent Filtration System (Myntra Style)

All filters live exclusively inside the **Filter Drawer** (accessed via the filter button). No pill filters cluttering the main screen. Dependent counts update in real-time.

### Filter Dimensions
1. **Quick Capture Founder Personas (1-Tap):**
   * *Woman-Led Startup (51%+ Equity / Wife-Partner Hack)*
   * *AI, SaaS & Tech Founders*
   * *Hardware, IoT & DeepTech*
   * *Solo Bootstrapper / Zero-Burn*
2. **Startup Legal Entity Type:**
   * *Sole Proprietorship*
   * *Partnership Firm*
   * *Limited Liability Partnership (LLP)*
   * *Private Limited Company (Pvt Ltd)*
   * *US Delaware C-Corp / Cross-Border*
3. **State / Region (All Indian States & UTs):**
   * *All States / Central*
   * *Rajasthan, Gujarat, Karnataka, Maharashtra, Tamil Nadu, Uttar Pradesh, Telangana, Kerala, Delhi, Bihar, Odisha, Madhya Pradesh, Punjab, Haryana, Andhra Pradesh, West Bengal, Assam & North East, Goa, Uttarakhand, Himachal Pradesh, Chhattisgarh, Jharkhand, Jammu & Kashmir.*
4. **Benefit Type / Category:**
   * *Monthly Living Stipends & Allowances*
   * *Non-Dilutive Equity-Free Grants & Seed Capital*
   * *3-Year Zero-Balance Current Accounts & Banking*
   * *Cloud & AI Compute Credits ($1,000 to $150,000+)*
   * *Cross-State Arbitrage, Family Structuring & Tax Shields*
5. **Startup Stage:**
   * *Idea Stage (< 1 Year / Zero Code / Prototype)*
   * *Bootstrapped / MVP In Market*
   * *Seed-Backed / Institutional*
6. **Industry Sector:**
   * *AI, LLMs, Developer Tools & SaaS*
   * *Healthcare, BioTech & Diagnostics*
   * *Manufacturing, Hardware, Robotics & ESDM*
   * *Fintech & Digital Commerce*
   * *General Tech, Consumer & D2C*

---

## 3. Database Content Inventory

### 3.1 Benefits: Schemes & Grants (Central & State Level)

#### Central Government Capital
* **Startup India Seed Fund Scheme (SISFS):** Up to ₹20L prototype grant / ₹50L convertible debenture (DPIIT).
* **PMEGP (Prime Minister Employment Generation Programme):** 15% to 35% non-refundable government capital subsidy on bank loans up to ₹50 Lakhs (KVIC/MSME).
* **Stand-Up India Scheme:** ₹10 Lakhs to ₹1 Crore collateral-free composite bank loans for greenfield enterprises (51% Woman / SC / ST equity).
* **NIDHI-PRAYAS:** Up to ₹10 Lakhs non-dilutive hardware prototype grant for makers and engineers (DST).
* **BIRAC Biotechnology Ignition Grant (BIG):** Up to ₹50 Lakhs equity-free grant for biotech, medtech, and diagnostics (DBT).
* **Section 80-IAC Tax Holiday:** 100% corporate tax exemption for 3 consecutive years out of first 10 years (CBDT / DPIIT).
* **Section 56(2)(viib) Exemption:** Angel Tax relief on share issues above FMV (DPIIT).
* **GeM 3% Public Procurement Quota:** Mandatory government procurement preference with waiver of earnest money deposit (EMD) and prior turnover experience.
* **SIPP Scheme:** 80% rebate on patent filing fees and 50% rebate on trademark filings with free government-appointed facilitators.
* **MeitY TIDE 2.0:** ₹7 Lakhs EIR stipend for 12 months + ₹40 Lakhs prototype grant for ICT startups.

#### State Government Schemes
* **Rajasthan (iStart):** ₹20,000–₹25,000/month sustenance allowance for 12 months deposited into founder bank accounts + up to ₹25 Lakhs seed grant.
* **Karnataka (ELEVATE Idea2PoC):** Up to ₹50 Lakhs non-dilutive grant disbursed in milestone tranches.
* **Gujarat (SSIP 2.0):** ₹20,000–₹25,000/month living allowance + up to ₹30 Lakhs seed capital support.
* **Tamil Nadu (TANSEED):** ₹10L–₹15L equity-free grant tranches via StartupTN.
* **Telangana (WE-Hub & T-Fund):** ₹25,000/month living sustenance for women founders via WE-Hub + up to ₹25 Lakhs T-Fund seed support.
* **Kerala (KSUM Idea Grant):** Up to ₹12 Lakhs non-dilutive idea grant + ₹15 Lakhs zero-collateral soft scale-up loan.
* **Uttar Pradesh (UP Startup Policy):** ₹17,500/month living sustenance for 12 months + ₹5 Lakhs marketing grant.
* **Bihar (Bihar Startup Policy):** Up to ₹10 Lakhs 100% interest-free seed loan with a 10-year repayment tenure and zero collateral.
* **Haryana (Startup Policy):** ₹20,000/month founder sustenance allowance + 50% lease rental subsidy.
* **Maharashtra (MSSS Seed Support):** Up to ₹15 Lakhs seed capital and prototype support.
* **Delhi (Delhi Startup Policy):** Up to ₹50 Lakhs collateral-free bank loans with 50% interest subsidy.
* **Odisha (Startup Odisha):** ₹20,000/month sustenance (₹22,000/month for women/transgender) + ₹16 Lakhs grant.
* **Madhya Pradesh (MP Startup Policy):** ₹10 Lakhs seed grant in 4 tranches + ₹5,000/month lease subsidy.
* **Punjab (Startup Punjab):** ₹3 Lakhs seed grant + 100% electricity duty exemption for 5 years.
* **Andhra Pradesh:** Up to ₹10 Lakhs seed capital assistance.
* **Assam (Startup Nest):** ₹5 Lakhs idea grant + ₹50 Lakhs matching loan.
* **Goa (Startup Promotion Scheme):** Up to ₹25,000/month founder salary reimbursement + ₹10 Lakhs seed fund.
* **Himachal Pradesh:** ₹25,000/month living sustenance for 12 months.
* **Uttarakhand:** ₹15,000/month sustenance + ₹7.5 Lakhs seed support.
* **Chhattisgarh:** Up to ₹10 Lakhs seed loan + ₹15,000/month allowance.
* **Jammu & Kashmir:** Up to ₹10 Lakhs seed grant via JKEDI.
* **Jharkhand:** ₹15,000/month living allowance + ₹10 Lakhs seed fund.

---

### 3.2 Benefits: Playbooks (Hacks, Tax Arbitrage & Structuring)
* **The 51% Woman Co-Founder / Wife Equity Multiplier:**
  * Listing wife as 51% partner/director unlocks Stand-Up India (₹10L–₹1Cr), 35% PMEGP subsidy, state monthly sustenance bonuses (+₹5k/mo extra in Karnataka/Odisha), and GeM 3% government procurement quota.
  * *Section 64(1)(ii) Safe Harbor:* Wife must possess independent professional qualification, technical experience, or clear commercial role to prevent salary or profit clubbing into husband's income.
* **The Senior Citizen Parent Rent & Advisory Arbitrage:**
  * Paying commercial rent under Section 37(1) to parents (60+ / 80+) for home office. Parents get 30% standard deduction under Section 24(a) and utilize basic exemption limits (up to ₹3L–₹5L tax-free), while the startup deducts 100% of the rent as a business expense.
  * Structuring advisory retainers within basic exemption thresholds + Section 80D medical expenditure deductions.
* **The 15% Vehicle Depreciation & Operational Expense Shield:**
  * Registering car in business/company name unlocks 15% annual Written Down Value (WDV) depreciation + 100% fuel, insurance, repairs, maintenance, and Fastag toll write-offs against taxable profits.
  * *Compliance Requirement:* Board resolution authorizing vehicle use for business purposes + trip logbook.
* **The Gurugram Living + Rajasthan iStart Domicile Arbitrage:**
  * Living and working in NCR/Bengaluru while incorporating registered office in Rajasthan using family address or virtual office to draw ₹20k–₹25k/month living cash + ₹25L seed grant with zero equity dilution.
* **The Bihar 10-Year 0% Interest Seed Hack:**
  * Taking up to ₹10 Lakhs capital with zero interest and zero repayments for a full decade.
* **The Tier-2/Tier-3 SISFS Incubator Selection Arbitrage:**
  * Bypassing top-heavy IIT Bombay/Madras incubators where thousands compete; selecting incubators with sanctioned DPIIT funds that have high unspent capital reserves for 4x higher approval odds.
* **The Zero-GST Export Billing Shield (LUT Filing):**
  * Submitting Form RFD-11 (Letter of Undertaking) to legally bill international US/EU clients at 0% GST without locking up working capital in GST refund cycles.

---

### 3.3 Benefits: Tools (Zero-Burn Stacks & Banking Across Departments)
Organized across departments giving free credits, lifetime free tiers, or 90% founder discounts:

#### Finance, Legal & Banking
* **IDFC FIRST Bank Startup Account:** 3 Years Zero Minimum Account Balance (MAB), free 100 cheque leaves, free outward NEFT/RTGS/IMPS.
* **ICICI iStartup 2.0 Platinum:** 12 months zero balance commitment + automated digital e-FIRC issuance for international Stripe/Paddle inward remittances.
* **Stripe Atlas Discount:** $250 discount on standard $500 fee + $20,000 fee-free card payment processing for Delaware C-Corp formations.
* **Wave Invoicing:** 100% free professional client invoicing, receipt scanning, and GST-ready ledger accounting with zero subscription fees.

#### Engineering & Infrastructure
* **Supabase:** Free forever tier with 2 Postgres databases, 50,000 MAU Auth, 1GB storage, edge functions.
* **Cloudflare Pages & Workers:** Free global CDN, SSL, DDoS protection, 100,000 serverless Worker requests/day.
* **GitHub for Startups:** 20 seats of GitHub Enterprise Cloud free for 12 months ($5,000 value), 50,000 Actions CI/CD runner minutes/mo.
* **AWS Activate Founders:** $1,000 for self-funded/bootstrapped; up to $100,000 for incubator/VC startups + Bedrock credits (Claude 3.5 Sonnet, Llama 3).
* **MongoDB Atlas for Startups:** $500 to $5,000 Atlas database credits + technical architecture consulting.

#### Product, AI & Analytics
* **Microsoft Founders Hub (Azure + OpenAI):** $1,000 to $150,000 Azure credits + $2,500 to $20,000 direct Azure OpenAI Service credits (GPT-4o) with zero funding required.
* **PostHog for Startups:** $50,000 free credit valid for 1 year (30M+ events, session recordings, feature flags).
* **Mixpanel for Startups:** Full Growth plan with up to 100M events/month free for 12 months ($50,000 value).
* **Google Cloud for Startups:** $2,000 for bootstrapped; up to $200,000 credits for funded startups ($350,000 for AI-native startups on Gemini API & Vertex AI).

#### Sales, Marketing & Operations
* **Apollo.io:** Free B2B contact engine (60 mobile numbers, 120 export credits, unlimited cold email sequences).
* **Brevo (Sendinblue):** Send 300 free marketing and transactional emails per day forever (9,000 emails/month).
* **Notion for Startups:** Up to 6 months of free Notion Plus with unlimited AI features for team wikis and project roadmaps.
* **Loom for Startups:** 1 year free Loom Business with unlimited video recording time, AI transcripts, and custom branding.

---

### 3.4 Learning (Startup Schools, AI Practitioner Hubs & Legal Templates)
Comprehensive curricula and practical tools for startup founders and AI practitioners:

#### Startup Schools & Curricula
* **YC Startup School (Y Combinator):** 20-lesson flagship curriculum covering PMF, talking to users, pricing, co-founder equity splits, and fundraising mechanics.
* **Techstars Lean Toolkit:** Customer validation frameworks, build-measure-learn loops, and 9-block business model canvases.
* **First Round Capital GTM Engine:** 0-to-1 sales playbooks, founder-led outbound, enterprise pilot closing, and ICP definition.
* **Stripe Atlas Scaling Guide:** Delaware C-Corp maintenance, Form 5472/1120 filing compliance, 83(b) elections, and international tax treaties.

#### AI Practitioner & DeepTech Learning
* **DeepLearning.AI Short Courses (Andrew Ng):** Building agentic workflows, prompt engineering with Llama 3/Claude, LangChain, and RAG architectures (100% free access).
* **Fast.ai (Practical Deep Learning for Coders):** Production PyTorch model training, fine-tuning LLMs, embeddings, and computer vision from scratch.
* **Hugging Face Deep RL & NLP Course:** Transformers, tokenizers, quantization (GGUF/AWQ), fine-tuning with LoRA/QLoRA, and open-weights deployment.
* **OpenAI Cookbook & Anthropic Prompt Engineering Guides:** Production system prompts, structured outputs (JSON schema), function calling, and latency optimization.

#### Legal Documents & Pitch Decks
* **OpenVC Deck Database:** 1,000+ real, successful pitch decks categorized by stage (Seed, Series A) and sector.
* **Standard YC SAFE Contracts:** Post-money and pre-money valuation cap SAFE notes, discount-only SAFEs, and MFN side letters.
* **Venture Intelligence / IVCA Term Sheet Templates:** Standard Indian startup shareholders' agreements (SHA), founders' agreements, and non-disclosure contracts.

---

### 3.5 Networking (Conventions, Conferences & Free Entry Hacks)
Comprehensive calendar of major startup summits, developer conferences, and maker expos across India with actionable hacks for free or discounted entry:

#### National & Regional Tech Summits
1. **Startup Mahakumbh (Bharat Mandapam, New Delhi):**
   * *Profile:* Central government mega-conclave with 1,000+ VCs, DPIIT leadership, and 3,000+ exhibitors.
   * *Free Entry Hack:* Register via DPIIT recognized startup pass, or get nominated by an approved state incubator delegation for 100% complimentary exhibitor badges.
2. **TechSparks (Bengaluru & Mumbai):**
   * *Profile:* Premier startup festival hosted by YourStory covering consumer tech, fintech, and AI.
   * *Free Entry Hack:* Volunteer as track host/coordinator or apply through university entrepreneurship cells (E-Cells) for free delegation passes.
3. **NASSCOM Product Conclave (Bengaluru):**
   * *Profile:* Flagship convention for B2B SaaS, enterprise tech, and deeptech product leaders.
   * *Free Entry Hack:* Apply to NASSCOM 10,000 Startups showcase to receive a complimentary demo kiosk and 2 all-access founder passes.
4. **TiEcon (Delhi NCR, Bengaluru, Mumbai):**
   * *Profile:* Global investor-founder summit hosted by The Indus Entrepreneurs.
   * *Free Entry Hack:* Apply to TiE Young Entrepreneurs or pitch competitions to receive subsidized or free delegate credentials.
5. **Global Bio-India (New Delhi):**
   * *Profile:* National biotech, medtech, and pharma innovation conclave by DBT/BIRAC.
   * *Free Entry Hack:* BIRAC BIG grantees and shortlisted applicants get free exhibition kiosks and delegate entry.
6. **T-Works Maker Faire (Hyderabad):**
   * *Profile:* India's largest hardware prototyping, robotics, and maker exhibition.
   * *Free Entry Hack:* Submit an early physical hardware prototype for the Maker track to receive free exhibition space and full fab lab access.
7. **India Internet Day (iDay - Gurugram/Delhi):**
   * *Profile:* TiE Delhi-NCR's premier internet and digital commerce conference.
   * *Free Entry Hack:* Apply for founder speed-dating tracks or showcase awards for complimentary entry.
8. **India AI Summit / Global AI Conclave (Bengaluru):**
   * *Profile:* Flagship gathering of AI researchers, LLM founders, and compute providers.
   * *Free Entry Hack:* Submit open-source AI projects or research posters for free registration and access to compute credits.
9. **Devfolio / ETHIndia & Web3 Hackathons (Bengaluru/Delhi):**
   * *Profile:* Premier developer and builder hackathons.
   * *Free Entry Hack:* 100% free participation upon project application approval, including food, accommodations, and developer bounties.
10. **Slush (Helsinki / Regional Hubs):**
    * *Profile:* Global venture capital and founder summit.
    * *Free Entry Hack:* Volunteer as startup operations crew for complete access to all stage tracks, side events, and investor matchmaking tools.

---

## 4. Current App Implementation Status

* **Production URL:** `https://founder-benefits-directory.vercel.app`
* **Repository:** `dhruvabalde-prog/founder-benefits-directory` (branch: `main`)
* **Framework:** React 18, TypeScript, Tailwind CSS, Vite.
* **State Management:** URL routing via React Router + localized bookmark storage (`localStorage`).
* **Design Styling:** Paper light background (`#fdfdfc`), Fraunces serif headings, WhatsApp-style soft tags (`#e7f8ec` / `#12592b`), and deep moss green accents (`#274e37`).

---

*This document directly reflects all user instructions and specifications provided.*
