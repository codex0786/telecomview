import type { BGPAlert, CellTower, CloudRegion, FiberRoute, IXP, LatencyProbe, NetworkOutage, StarlinkSat, SubmarineCable } from "./types";

export interface TelecomFetchResult {
  cables: SubmarineCable[];
  totalCables: number;
  regions: CloudRegion[];
  totalRegions: number;
  ixps: IXP[];
  totalIXPs: number;
  alerts: BGPAlert[];
  totalAlerts: number;
  outages: NetworkOutage[];
  totalOutages: number;
  probes: LatencyProbe[];
  towers: CellTower[];
  totalTowers: number;
  fiberRoutes: FiberRoute[];
}

interface CablesResponse { cables: SubmarineCable[]; total: number; }
interface RegionsResponse { regions: CloudRegion[]; total: number; }
interface IxpsResponse { ixps: IXP[]; total: number; }
interface AlertsResponse { alerts: BGPAlert[]; total: number; }
interface OutagesResponse { outages: NetworkOutage[]; total: number; }
interface LatencyResponse { probes: LatencyProbe[]; }
interface TowersResponse { towers: CellTower[]; total: number; }
interface FiberResponse { routes: FiberRoute[]; total: number; }
export interface StarlinkResponse { satellites: StarlinkSat[]; total: number; source?: string; error?: string; }

async function fetchJson<T>(path: string, signal?: AbortSignal) {
  const res = await fetch(path, { cache: "no-store", signal });
  if (!res.ok) {
    throw new Error(`Failed to load ${path} (${res.status})`);
  }
  return (await res.json()) as T;
}

export async function fetchTelecomData(signal?: AbortSignal): Promise<TelecomFetchResult> {
  const [cables, regions, ixps, alerts, outages, latency, towers, fiber] = await Promise.all([
    fetchJson<CablesResponse>("/api/submarine-cables", signal),
    fetchJson<RegionsResponse>("/api/cloud-regions", signal),
    fetchJson<IxpsResponse>("/api/ixps", signal),
    fetchJson<AlertsResponse>("/api/bgp-alerts", signal),
    fetchJson<OutagesResponse>("/api/outages", signal),
    fetchJson<LatencyResponse>("/api/latency", signal),
    fetchJson<TowersResponse>("/api/cell-towers", signal),
    fetchJson<FiberResponse>("/api/fiber-routes", signal),
  ]);

  return {
    cables: cables.cables || [],
    totalCables: cables.total,
    regions: regions.regions || [],
    totalRegions: regions.total,
    ixps: ixps.ixps || [],
    totalIXPs: ixps.total,
    alerts: alerts.alerts || [],
    totalAlerts: alerts.total,
    outages: outages.outages || [],
    totalOutages: outages.total,
    probes: latency.probes || [],
    towers: towers.towers || [],
    totalTowers: towers.total,
    fiberRoutes: fiber.routes || [],
  };
}

// ── Live layers (polled in the background by TelecomViewProvider) ────────────
export const fetchBGPAlerts = (signal?: AbortSignal) => fetchJson<AlertsResponse>("/api/bgp-alerts", signal);
export const fetchOutages   = (signal?: AbortSignal) => fetchJson<OutagesResponse>("/api/outages", signal);
export const fetchLatency   = (signal?: AbortSignal) => fetchJson<LatencyResponse>("/api/latency", signal);
export const fetchStarlink  = (signal?: AbortSignal) => fetchJson<StarlinkResponse>("/api/starlink", signal);
