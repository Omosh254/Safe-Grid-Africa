# SafeGrid Africa 🗺️🔒
### Public Safety & Crime Mapping Platform — Nairobi, Kenya

A production-ready, mobile-first PWA for real-time crime incident mapping, community safety alerts, and sponsored safety-service discovery.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure your API keys (see Configuration below)

# 3. Start development server
npm start

# 4. Open http://localhost:3000
```

---

## Configuration

### 1. Google Maps API Key
Edit **`src/hooks/useGoogleMaps.js`** and replace the placeholder:

```js
const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY_HERE';
```

**Required APIs to enable in Google Cloud Console:**
- Maps JavaScript API
- Geocoding API
- Places API

Get a key at: https://console.cloud.google.com/

---

### 2. Backend API Endpoint
Edit **`src/utils/api.js`** and replace:

```js
const API_BASE_URL = 'https://api.safegridafrica.com/v1';
```

All API function stubs are in `src/utils/api.js` with clear comments.

---

### 3. Authentication
Find all `// INSERT AUTH LOGIC HERE` comments in:
- `src/utils/api.js` — token headers
- `src/components/Header.jsx` — user profile
- `src/components/ReportModal.jsx` — gate submissions

Recommended: Firebase Auth or Supabase Auth (phone OTP for Kenya)

---

### 4. PWA Icons
Replace placeholder icons in `public/icons/`:
```
public/icons/
├── icon-72x72.png
├── icon-96x96.png
├── icon-128x128.png
├── icon-192x192.png   ← Required for Add to Home Screen
└── icon-512x512.png   ← Required for splash screen
```
Use: https://www.pwabuilder.com/imageGenerator

---

## Project Structure

```
safegrid-africa/
├── public/
│   ├── index.html          # App shell HTML
│   ├── manifest.json       # PWA manifest
│   └── service-worker.js   # Offline caching + push notifications
│
├── src/
│   ├── App.jsx             # Root component — main layout + state
│   ├── index.js            # Entry point + SW registration
│   ├── index.css           # Global styles + CSS design tokens
│   │
│   ├── components/
│   │   ├── MapComponent.jsx    # Google Maps integration
│   │   ├── MapControls.jsx     # Zoom / locate / layers
│   │   ├── SidePanel.jsx       # Tabbed panel container
│   │   ├── AlertsPanel.jsx     # Safety alerts + area stats
│   │   ├── FiltersPanel.jsx    # Crime type / time / status filters
│   │   ├── SponsoredPanel.jsx  # Partner listings + monetisation
│   │   ├── SafetyScore.jsx     # Area safety score overlay
│   │   ├── ReportModal.jsx     # Incident report form
│   │   ├── Header.jsx          # App header + nav
│   │   ├── BottomNav.jsx       # Mobile bottom navigation
│   │   ├── Toast.jsx           # Toast notification system
│   │   └── LoadingScreen.jsx   # Initial splash loader
│   │
│   ├── data/
│   │   └── mockData.js         # All mock data (crimes, alerts, sponsors)
│   │
│   ├── hooks/
│   │   ├── useGoogleMaps.js    # Maps SDK loader
│   │   ├── useGeolocation.js   # Browser GPS hook
│   │   └── useFilters.js       # Filter state + derived crimes
│   │
│   └── utils/
│       ├── api.js              # All backend API calls (stubs)
│       └── helpers.js          # Formatting, safety scores, icons
│
├── tailwind.config.js
└── package.json
```

---

## Features

| Feature | Status | Notes |
|---|---|---|
| Google Maps dark theme | ✅ Ready | Add API key |
| Crime markers (colour-coded) | ✅ Ready | Mock data |
| Sponsored partner markers | ✅ Ready | Mock data |
| Report Incident modal | ✅ Ready | Add API endpoint |
| GPS geolocation | ✅ Ready | Browser API |
| Safety score overlay | ✅ Ready | Mock scores |
| Alerts panel | ✅ Ready | Mock alerts |
| Filters (type/time/status) | ✅ Ready | Client-side |
| Mobile bottom nav | ✅ Ready | |
| PWA / installable | ✅ Ready | Add icons |
| Service worker (offline) | ✅ Ready | |
| Push notifications | 🟡 Stub | Add backend |
| Auth / user accounts | 🟡 Stub | Add auth provider |
| Live backend data | 🟡 Stub | Add API URL |
| Image upload | 🟡 Stub | Add storage |
| Heat map layer | 🟡 Planned | |

---

## Environment Variables

Create `.env` in the project root:

```env
REACT_APP_API_URL=https://api.safegridafrica.com/v1
REACT_APP_MAPS_API_KEY=your_google_maps_key
REACT_APP_ENV=development
```

Then update `useGoogleMaps.js` and `api.js` to use `process.env.REACT_APP_*`.

---

## PWA Setup

The app is PWA-ready with:
- `public/manifest.json` — installability metadata
- `public/service-worker.js` — offline cache + background sync
- `src/index.js` — SW registration with update detection

Test PWA installation: open Chrome DevTools → Application → Service Workers.

---

## Backend API Contract

Your backend should implement:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/incidents` | Fetch incidents (query: lat, lng, radius, type, status) |
| POST | `/incidents` | Submit new incident report |
| POST | `/incidents/:id/media` | Upload evidence file |
| GET | `/alerts` | Fetch active safety alerts |
| GET | `/sponsors` | Fetch sponsored partners near location |
| POST | `/sponsors/:id/click` | Log CTA click (analytics) |
| POST | `/auth/otp/request` | Request OTP (phone number) |
| POST | `/auth/otp/verify` | Verify OTP, return JWT |

---

## Design System

| Token | Value |
|---|---|
| Primary | `#0A1F44` |
| Secondary | `#00AEEF` |
| Accent | `#00F5A0` |
| Danger | `#FF3B3B` |
| Warning | `#FF9A00` |
| Font Display | Syne (Google Fonts) |
| Font Body | DM Sans (Google Fonts) |

All CSS design tokens are defined in `src/index.css` as `:root` variables.

---

## Deployment

```bash
# Build for production
npm run build

# Deploy to Firebase Hosting (recommended for PWA)
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy

# Or deploy to Vercel
npx vercel
```

---

## Licence

MIT — SafeGrid Africa © 2025
