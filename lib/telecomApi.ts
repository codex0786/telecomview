import type { BGPAlert, CellTower, CloudRegion, IXP, LatencyProbe, NetworkOutage, SubmarineCable } from "./types";

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
}

interface CablesResponse { cables: SubmarineCable[]; total: number; }
interface RegionsResponse { regions: CloudRegion[]; total: number; }
interface IxpsResponse { ixps: IXP[]; total: number; }
interface AlertsResponse { alerts: BGPAlert[]; total: number; }
interface OutagesResponse { outages: NetworkOutage[]; total: number; }
interface LatencyResponse { probes: LatencyProbe[]; }
interface TowersResponse { towers: CellTower[]; total: number; }

async function fetchJson<T>(path: string, signal?: AbortSignal) {
  const res = await fetch(path, { cache: "no-store", signal });
  if (!res.ok) {
    throw new Error(`Failed to load ${path} (${res.status})`);
  }
  return (await res.json()) as T;
}

export async function fetchTelecomData(signal?: AbortSignal): Promise<TelecomFetchResult> {
  const [cables, regions, ixps, alerts, outages, latency, towers] = await Promise.all([
    fetchJson<CablesResponse>("/api/submarine-cables", signal),
    fetchJson<RegionsResponse>("/api/cloud-regions", signal),
    fetchJson<IxpsResponse>("/api/ixps", signal),
    fetchJson<AlertsResponse>("/api/bgp-alerts", signal),
    fetchJson<OutagesResponse>("/api/outages", signal),
    fetchJson<LatencyResponse>("/api/latency", signal),
    fetchJson<TowersResponse>("/api/cell-towers", signal),
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
  };
}
