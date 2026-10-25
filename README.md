# FounderPerks: The Founder Schemes, Banking & Perks SuperApp

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live_App-black?logo=vercel)](https://founder-benefits-directory.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/dhruvabalde-prog/founder-benefits-directory)

A progressive web app (PWA) and native app experience for Indian and global startup founders to discover, calculate, and apply for non-dilutive government schemes, zero-balance founder banking suites, and $350k+ in free cloud/AI infrastructure credits.

🌐 **Live Production App**: [https://founder-benefits-directory.vercel.app](https://founder-benefits-directory.vercel.app)  
📦 **GitHub Repository**: [https://github.com/dhruvabalde-prog/founder-benefits-directory](https://github.com/dhruvabalde-prog/founder-benefits-directory)

---

## 📱 App Experience Features

1. **Native App Shell & Bottom Dock Navigation**:
   - Floating glassmorphism tab bar with 5 primary views:
     - 🧭 **Explore**: Curated directory with live search, state filtering, and taxonomy tags.
     - ✨ **Free Stack Calculator**: Interactive engine matching your stage, registrations, and sector to eligible grants and free credits.
     - 📊 **Matrix**: Comparative breakdown across 5 core founder archetypes.
     - ⚠️ **Traps & Gotchas**: 5 critical regulatory field manuals (80-IAC, Angel tax, e-FIRS / Purpose codes, MSME Samadhaan).
     - 🔖 **My Perks**: Saved schemes with local offline persistence.

2. **Phone App Simulator vs Desktop Full-Screen Toggle**:
   - Switch in real-time between **Full Screen Desktop View** and **📱 Phone App Simulator** (complete with iPhone chassis, dynamic island, status indicators, and mobile viewport).

3. **Installable Progressive Web App (PWA)**:
   - Configured with web app manifest (`public/manifest.json`), icons, and service worker (`public/sw.js`).
   - One-click **"Install App"** prompt for Windows/macOS desktop and Android.
   - iOS Safari **"Add to Home Screen"** guided sheet.
   - Works offline with cached app assets and fast loading.

4. **⚡ Supabase Integration Ready**:
   - Pre-wired with `@supabase/supabase-js` client in `src/lib/supabase.ts`.
   - Ready for sync bookmarks, community perk submissions, and upvoting.
   - Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel Project Environment Variables.

---

## 🛠️ Local Development

```powershell
# 1. Clone repository
git clone https://github.com/dhruvabalde-prog/founder-benefits-directory.git
cd founder-benefits-directory

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
