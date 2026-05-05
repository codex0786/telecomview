// ── Submarine Cables ─────────────────────────────────────────────────────────
export interface CableLandingPoint {
  id: string; name: string; lat: number; lng: number; country: string;
}
export interface SubmarineCable {
  id: string; name: string; color: string; owners: string[];
  capacityTbps: number | null; lengthKm: number | null; yearReady: number | null;
  status: "active" | "planned" | "retired" | "repair";
  landingPoints: CableLandingPoint[]; coordinates: [number, number][];
}

// ── Data Centre / Cloud Region ────────────────────────────────────────────────
export type CloudProvider = "aws" | "azure" | "gcp" | "cloudflare" | "oracle" | "alibaba" | "ibm";

export interface DataCentreFacility {
  name: string;          // Physical DC name e.g. "Equinix VA1"
  operator: string;      // Colocation operator
  powerMW: number;       // IT load capacity in MW
  pue: number;           // Power Usage Effectiveness
  tier: "I" | "II" | "III" | "IV";
  certifications: string[]; // ["ISO 27001", "SOC 2", "PCI-DSS"]
}

export interface CloudRegion {
  id: string; name: string; code: string; provider: CloudProvider;
  lat: number; lng: number; city: string; country: string;
  // Infrastructure detail
  azCount: number;
  totalPowerMW: number;        // Total region power capacity
  usedPowerMW: number;         // Estimated current load
  coolingType: string;         // "Air", "Liquid", "Evaporative", "Immersion"
  tierLevel: "I" | "II" | "III" | "IV";
  yearOpened: number;
  floorSpaceSqM: number;       // Total floor space
  facilities: DataCentreFacility[];
  // Network
  services: string[];
  connectedIXPs: string[];     // IXP names this region peers at
  upstreamProviders: string[]; // Transit providers
  ipv6: boolean;
  // Status
  status: "operational" | "degraded" | "outage";
  statusMessage: string;
  tier: "region" | "edge" | "pop";
  color: string;
  latencyMs?: number;
  // Business
  pricingTier: "budget" | "standard" | "premium";
  complianceFrameworks: string[]; // GDPR, HIPAA, FedRAMP, etc.
  sustainabilityScore: number;   // 0–100, RE % + PUE composite
  carbonFreeEnergy: number;      // % renewable energy
}

// ── IXP ──────────────────────────────────────────────────────────────────────
export interface IXP {
  id: number; name: string; shortName: string;
  lat: number; lng: number; city: string; country: string;
  trafficGbps: number; memberCount: number; networks: string[];
  peeringPolicy: "open" | "selective" | "restrictive";
  status: "active" | "inactive"; website: string;
}

// ── BGP ──────────────────────────────────────────────────────────────────────
export type ASType = "tier1" | "tier2" | "cdn" | "enterprise" | "mobile" | "hosting" | "government";
export interface AutonomousSystem {
  asn: number; name: string; country: string; type: ASType;
  prefixCount: number; lat: number; lng: number; color: string;
}
export interface BGPAlert {
  id: string; type: "hijack" | "leak" | "withdrawal" | "anomaly";
  asn: number; asnName: string; prefix: string; description: string;
  severity: "low" | "medium" | "high" | "critical";
  timestamp: number; lat: number; lng: number;
  affectedCountries: string[]; color: string;
}

// ── Cell Towers ───────────────────────────────────────────────────────────────
export type CellTech = "2G" | "3G" | "4G" | "5G" | "5G-mmWave";
export interface CellTower {
  id: string; lat: number; lng: number; operator: string;
  technology: CellTech; frequencyBand: string; heightM: number | null;
  country: string; mcc: number; mnc: number; range: number; color: string;
}

// ── Network Outages ───────────────────────────────────────────────────────────
export interface NetworkOutage {
  id: string; region: string; country: string; countryCode: string;
  lat: number; lng: number; severity: "minor" | "major" | "critical";
  affectedAsns: number; startTime: number; description: string;
  source: string; active: boolean; color: string;
}

// ── Latency Probes ────────────────────────────────────────────────────────────
export interface LatencyProbe {
  id: string; lat: number; lng: number; country: string;
  latencyMs: number; color: string;
}

// ── Fiber Routes ──────────────────────────────────────────────────────────────
export interface FiberRoute {
  id: string; name: string; operator: string;
  coordinates: [number, number][]; capacityTbps: number;
  tier: 1 | 2; color: string;
}

// ── Starlink ──────────────────────────────────────────────────────────────────
export interface StarlinkSat {
  id: string; name: string; lat: number; lng: number; altKm: number; tle1: string; tle2: string;
}

// ── Layer Config ──────────────────────────────────────────────────────────────
export interface LayerConfig {
  submarineCables: boolean; cloudRegions: boolean; ixps: boolean;
  bgpAlerts: boolean; cellTowers: boolean; outages: boolean;
  latencyHeatmap: boolean; fiberRoutes: boolean; starlink: boolean;
  spectrum: boolean; colos: boolean; connectivityIndex: boolean;
}

// ── HoverTooltip ──────────────────────────────────────────────────────────────
export interface HoverTooltip {
  x: number; y: number; label: string; sublabel: string;
  icon: string; type: string; color: string;
}
