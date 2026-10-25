# FounderPerks: The Founder Schemes, Banking & Perks SuperApp

A progressive web app (PWA) and native app experience for Indian and global startup founders to discover, calculate, and apply for non-dilutive government schemes, zero-balance founder banking suites, and $350k+ in free cloud/AI infrastructure credits.

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

---

## 🛠️ How to Run

```powershell
# 1. Navigate to the app folder
cd C:\Users\Lenovo\.gemini\antigravity\scratch\founder-benefits-directory

# 2. Start the local server
npm run dev

# 3. Open in your browser (typically http://localhost:5173)
```

Click **"📱 Phone App Simulator"** in the top bar to experience the mobile app chassis, or click **"Install App"** to install it directly onto your desktop or mobile home screen!
