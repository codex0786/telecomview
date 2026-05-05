"use client";
import { useEffect, useRef, useCallback } from "react";
import { useTelecomView } from "./TelecomViewContext";
import { SUBMARINE_CABLES, FIBER_ROUTES } from "./cableData";
import { CLOUD_REGIONS } from "./cloudData";
import { IXP_DATA } from "./networkData";
import type { BGPAlert, NetworkOutage, CellTower, LatencyProbe } from "./types";

// ── Submarine Cable Data ──────────────────────────────────────────────────────
export function useSubmarineCableData() {
  const { setCables, setTotalCables } = useTelecomView();
  useEffect(() => {
    setCables(SUBMARINE_CABLES);
    setTotalCables(SUBMARINE_CABLES.length);
  }, []); // eslint-disable-line
}

// ── Cloud Region Data ─────────────────────────────────────────────────────────
export function useCloudRegionData() {
  const { setCloudRegions, setTotalRegions } = useTelecomView();
  useEffect(() => {
    setCloudRegions(CLOUD_REGIONS);
    setTotalRegions(CLOUD_REGIONS.length);
  }, []); // eslint-disable-line
}

// ── IXP Data ──────────────────────────────────────────────────────────────────
export function useIXPData() {
  const { setIxps, setTotalIXPs } = useTelecomView();
  useEffect(() => {
    setIxps(IXP_DATA);
    setTotalIXPs(IXP_DATA.length);
  }, []); // eslint-disable-line
}

// ── Fiber Route Data ──────────────────────────────────────────────────────────
export function useFiberData() {
  const { setFiberRoutes } = useTelecomView();
  useEffect(() => {
    setFiberRoutes(FIBER_ROUTES);
  }, []); // eslint-disable-line
}

// ── BGP Alerts (live simulation) ──────────────────────────────────────────────
const BGP_POOL: Omit<BGPAlert, "id" | "timestamp">[] = [
  { type:"hijack",     asn:45899,  asnName:"VNPT-I-U Vietnam",          prefix:"14.160.0.0/11",   severity:"high",     description:"Prefix hijack detected — unauthorized origin AS",             lat:21.03,  lng:105.83, affectedCountries:["Vietnam","Thailand"],         color:"#ff3b3b" },
  { type:"leak",       asn:7922,   asnName:"Comcast",                   prefix:"8.8.8.0/24",     severity:"medium",   description:"Route leak from AS7922 propagating Google prefixes",          lat:39.95,  lng:-75.17, affectedCountries:["United States"],              color:"#ffb800" },
  { type:"withdrawal", asn:3356,   asnName:"Lumen Technologies",        prefix:"4.0.0.0/9",      severity:"low",      description:"Mass BGP withdrawal from Lumen backbone",                    lat:39.74,  lng:-104.98,affectedCountries:["United States","Canada"],      color:"#00f5ff" },
  { type:"hijack",     asn:24940,  asnName:"Hetzner Online",            prefix:"85.10.0.0/16",   severity:"critical", description:"CRITICAL: Hetzner prefix announced by unregistered AS",      lat:50.11,  lng:8.68,   affectedCountries:["Germany","EU"],               color:"#ff0000" },
  { type:"anomaly",    asn:13335,  asnName:"Cloudflare",                prefix:"104.16.0.0/12",  severity:"low",      description:"Unusual route propagation from Cloudflare edge",             lat:37.41,  lng:-122.08,affectedCountries:[],                             color:"#00ff88" },
  { type:"hijack",     asn:16509,  asnName:"Amazon.com",                prefix:"52.0.0.0/8",     severity:"critical", description:"AWS prefix instability — possible route injection",           lat:38.91,  lng:-77.04, affectedCountries:["United States","United Kingdom"],color:"#ff0000" },
  { type:"leak",       asn:9498,   asnName:"Bharti Airtel",             prefix:"103.0.0.0/16",   severity:"high",     description:"Route leak from Airtel causing misdirection in South Asia",  lat:28.70,  lng:77.10,  affectedCountries:["India","Pakistan","Bangladesh"],color:"#ff3b3b" },
  { type:"withdrawal", asn:2914,   asnName:"NTT America",               prefix:"129.250.0.0/16", severity:"medium",   description:"NTT backbone prefix withdrawn unexpectedly",                 lat:40.71,  lng:-74.01, affectedCountries:["United States","Japan"],       color:"#ffb800" },
  { type:"anomaly",    asn:20940,  asnName:"Akamai Technologies",       prefix:"23.0.0.0/8",     severity:"low",      description:"Akamai anycast route update detected globally",               lat:42.36,  lng:-71.06, affectedCountries:[],                             color:"#00f5ff" },
  { type:"hijack",     asn:58453,  asnName:"China Mobile International",prefix:"223.0.0.0/11",   severity:"high",     description:"Possible BGP hijack affecting Asia-Pacific routes",           lat:22.32,  lng:114.17, affectedCountries:["Hong Kong","Taiwan","Singapore"],color:"#ff3b3b" },
];

export function useBGPAlertData() {
  const { setBgpAlerts, setTotalAlerts } = useTelecomView();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const generate = useCallback(() => {
    const count = 3 + Math.floor(Math.random() * 5);
    const shuffled = [...BGP_POOL].sort(() => Math.random() - 0.5).slice(0, count);
    const alerts: BGPAlert[] = shuffled.map((t, i) => ({
      ...t,
      id: `bgp-${Date.now()}-${i}`,
      timestamp: Date.now() - Math.floor(Math.random() * 3_600_000),
    }));
    setBgpAlerts(alerts);
    setTotalAlerts(alerts.length);
  }, [setBgpAlerts, setTotalAlerts]);

  useEffect(() => {
    generate();
    intervalRef.current = setInterval(generate, 30_000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [generate]);
}

// ── Outage Data (live simulation) ─────────────────────────────────────────────
const OUTAGE_POOL: Omit<NetworkOutage, "id" | "startTime">[] = [
  { region:"US East Coast", country:"United States", countryCode:"US", lat:38.91,  lng:-77.04,  severity:"major",    affectedAsns:3,   description:"Elevated packet loss across US East Coast ISPs",             source:"IODA", active:true,  color:"#ff3b3b" },
  { region:"Singapore",     country:"Singapore",     countryCode:"SG", lat:1.35,   lng:103.82,  severity:"minor",    affectedAsns:2,   description:"Minor degradation at Singapore IXP",                         source:"RIPE", active:true,  color:"#ffb800" },
  { region:"Germany",       country:"Germany",       countryCode:"DE", lat:50.11,  lng:8.68,    severity:"critical", affectedAsns:5,   description:"DE-CIX route instability detected",                          source:"IODA", active:true,  color:"#ff0000" },
  { region:"São Paulo",     country:"Brazil",        countryCode:"BR", lat:-23.55, lng:-46.63,  severity:"minor",    affectedAsns:2,   description:"Intermittent outages São Paulo metro area",                  source:"IODA", active:true,  color:"#ffb800" },
  { region:"UAE",           country:"United Arab Emirates", countryCode:"AE", lat:25.20, lng:55.27, severity:"major", affectedAsns:4,  description:"Submarine cable fault affecting Middle East connectivity",   source:"RIPE", active:true,  color:"#ff3b3b" },
];

export function useOutageData() {
  const { setOutages, setTotalOutages } = useTelecomView();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const generate = useCallback(() => {
    const count = 2 + Math.floor(Math.random() * 3);
    const shuffled = [...OUTAGE_POOL].sort(() => Math.random() - 0.5).slice(0, count);
    const outages: NetworkOutage[] = shuffled.map((t, i) => ({
      ...t,
      id: `outage-${Date.now()}-${i}`,
      startTime: Date.now() - Math.floor(Math.random() * 7_200_000),
    }));
    setOutages(outages);
    setTotalOutages(outages.length);
  }, [setOutages, setTotalOutages]);

  useEffect(() => {
    generate();
    intervalRef.current = setInterval(generate, 45_000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [generate]);
}

// ── Cell Tower Data ───────────────────────────────────────────────────────────
const TOWER_COLORS: Record<string, string> = {
  "5G": "#00ff88", "5G-mmWave": "#00ffcc", "4G": "#00f5ff", "3G": "#ffb800", "2G": "#888888",
};
const OPERATORS = ["Verizon","AT&T","T-Mobile","Vodafone","Orange","Deutsche Telekom","SingTel","Airtel","Jio","China Mobile"];
const TECHS: CellTower["technology"][] = ["5G","5G-mmWave","4G","4G","3G","2G"];
const BANDS = ["n78","n258","B7","B20","B3","B8"];

export function useCellTowerData() {
  const { setCellTowers, setTotalTowers, cameraPosition, layers } = useTelecomView();
  const mountedRef = useRef(true);
  useEffect(() => { mountedRef.current = true; return () => { mountedRef.current = false; }; }, []);

  useEffect(() => {
    if (!layers.cellTowers) { setCellTowers([]); return; }
    const { lat, lng, alt } = cameraPosition;
    if (alt > 5_000_000) { setCellTowers([]); return; }
    const spread = Math.min(alt / 50_000, 30);
    const count  = alt > 1_000_000 ? 80 : alt > 200_000 ? 200 : 400;
    const towers: CellTower[] = Array.from({ length: count }, (_, i) => {
      const tech = TECHS[Math.floor(Math.random() * TECHS.length)];
      return {
        id: `t-${Math.round(lat * 10)}-${Math.round(lng * 10)}-${i}`,
        lat: lat + (Math.random() - 0.5) * spread,
        lng: lng + (Math.random() - 0.5) * spread,
        operator: OPERATORS[Math.floor(Math.random() * OPERATORS.length)],
        technology: tech,
        frequencyBand: BANDS[Math.floor(Math.random() * BANDS.length)],
        heightM: 20 + Math.floor(Math.random() * 80),
        country: "US",
        mcc: 310,
        mnc: Math.floor(Math.random() * 999),
        range: 200 + Math.random() * 2000,
        color: TOWER_COLORS[tech] || "#888888",
      };
    });
    if (mountedRef.current) { setCellTowers(towers); setTotalTowers(towers.length); }
  }, [cameraPosition.alt, cameraPosition.lat, cameraPosition.lng, layers.cellTowers]); // eslint-disable-line
}

// ── Latency Probe Data ────────────────────────────────────────────────────────
const PROBE_LOCATIONS = [
  { lat:40.71, lng:-74.01, country:"US" }, { lat:51.51, lng:-0.13,  country:"GB" },
  { lat:48.86, lng:2.35,   country:"FR" }, { lat:50.11, lng:8.68,   country:"DE" },
  { lat:35.68, lng:139.69, country:"JP" }, { lat:1.35,  lng:103.82, country:"SG" },
  { lat:19.08, lng:72.88,  country:"IN" }, { lat:-33.87,lng:151.21, country:"AU" },
  { lat:-23.55,lng:-46.63, country:"BR" }, { lat:52.37, lng:4.90,   country:"NL" },
  { lat:55.76, lng:37.62,  country:"RU" }, { lat:37.57, lng:126.98, country:"KR" },
  { lat:22.32, lng:114.17, country:"HK" }, { lat:25.20, lng:55.27,  country:"AE" },
  { lat:-26.20,lng:28.05,  country:"ZA" }, { lat:43.65, lng:-79.38, country:"CA" },
  { lat:41.01, lng:28.98,  country:"TR" }, { lat:59.33, lng:18.07,  country:"SE" },
];

function latencyColor(ms: number): string {
  const t = Math.min(ms / 200, 1);
  const r = Math.round(t * 255), g = Math.round((1 - t) * 200 + 55);
  return `rgba(${r},${g},80,0.75)`;
}

export function useLatencyData() {
  const { setLatencyProbes, layers } = useTelecomView();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!layers.latencyHeatmap) { setLatencyProbes([]); return; }
    const generate = () => {
      const probes: LatencyProbe[] = PROBE_LOCATIONS.map((loc, i) => {
        const ms = 5 + Math.random() * 180;
        return { id: `probe-${i}`, ...loc, latencyMs: Math.round(ms), color: latencyColor(ms) };
      });
      setLatencyProbes(probes);
    };
    generate();
    intervalRef.current = setInterval(generate, 15_000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [layers.latencyHeatmap]); // eslint-disable-line
}
