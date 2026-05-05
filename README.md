# TelecomView — Global Network Intelligence Platform

Real-time 3D visualization of global telecom infrastructure on a CesiumJS globe.

---

## Quick Start

```bash
npm install
```

Create `.env.local` in the project root with your Cesium Ion token:
```env
NEXT_PUBLIC_CESIUM_ION_TOKEN=your_cesium_ion_token_here
```

Get your token at: https://ion.cesium.com — it's free. This enables the satellite base imagery (Ion asset 3830186) and the night lights overlay.

```bash
npm run dev
# → http://localhost:3000
```

**No token?** The globe falls back to OpenStreetMap automatically — you'll see a map but not satellite imagery.

---

## Node version

Use **Node 20 LTS** or **Node 22 LTS**. Node 23 works with a harmless engine warning (suppressed via `overrides` in `package.json`).

```bash
brew install node@22   # macOS
```

---

## Layers

| Layer | Toggle | Data |
|-------|--------|------|
| 🌊 Submarine Cables | LayerPanel | 8 global systems |
| ☁️ Cloud Regions | LayerPanel | 42 AWS/Azure/GCP/CF regions |
| 🔄 IXPs | LayerPanel | 20 exchanges |
| ⚡ BGP Alerts | LayerPanel | Simulated live, 30s refresh |
| 🚨 Outages | LayerPanel | IODA-style, 45s refresh |
| 🔦 Fiber Backbone | LayerPanel | 8 Tier-1 routes |
| 📡 Cell Towers | LayerPanel | Viewport-based 4G/5G |
| 🌡️ Latency Heatmap | LayerPanel | RIPE Atlas sim, 15s refresh |
| 🛰️ Starlink (LEO) | LayerPanel | CelesTrak TLE |

**Click any entity** on the globe for a detail panel. Use the bottom bar to jump to key locations.

---

## Tech Stack

- **Next.js 15.2.6** · **React 19.1.2** · **TypeScript 5.8**
- **CesiumJS 1.116** — 3D globe + satellite imagery
- **Tailwind CSS 3.4** · **ESLint 9**

---

## Production Roadmap

1. Centralize network data behind API routes. The app now fetches telecom datasets from `/api/*` instead of importing raw arrays in the client rendering layer.
2. Improve state loading and refresh support via the `TelecomViewProvider`.
3. Add a refresh button and live status metadata to the UI, so operators can see when data was last refreshed.
4. Replace static client-side injection with a more resilient API-driven model for real telecom telemetry.
5. Next steps: connect real BGP/IXP/outage feeds, add history playback, and introduce authentication for enterprise usage.
