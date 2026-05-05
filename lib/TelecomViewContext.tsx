"use client";
import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from "react";
import type {
  SubmarineCable, CloudRegion, IXP, BGPAlert, AutonomousSystem,
  CellTower, NetworkOutage, LatencyProbe, FiberRoute, StarlinkSat,
  LayerConfig, HoverTooltip,
} from "./types";
import { fetchTelecomData } from "./telecomApi";

// Re-export types needed by components
export type { BGPAlert, NetworkOutage, IXP, CloudRegion, SubmarineCable, CellTower, LayerConfig };

interface CameraPosition { lat: number; lng: number; alt: number; }

export interface TelecomViewState {
  // Data
  cables: SubmarineCable[];             setCables: (d: SubmarineCable[]) => void;
  cloudRegions: CloudRegion[];          setCloudRegions: (d: CloudRegion[]) => void;
  ixps: IXP[];                          setIxps: (d: IXP[]) => void;
  bgpAlerts: BGPAlert[];                setBgpAlerts: (d: BGPAlert[]) => void;
  autonomousSystems: AutonomousSystem[]; setAutonomousSystems: (d: AutonomousSystem[]) => void;
  cellTowers: CellTower[];              setCellTowers: (d: CellTower[]) => void;
  outages: NetworkOutage[];             setOutages: (d: NetworkOutage[]) => void;
  latencyProbes: LatencyProbe[];        setLatencyProbes: (d: LatencyProbe[]) => void;
  fiberRoutes: FiberRoute[];            setFiberRoutes: (d: FiberRoute[]) => void;
  starlinkSats: StarlinkSat[];          setStarlinkSats: (d: StarlinkSat[]) => void;

  // Selection
  selectedCable: SubmarineCable | null;        setSelectedCable: (d: SubmarineCable | null) => void;
  selectedRegion: CloudRegion | null;          setSelectedRegion: (d: CloudRegion | null) => void;
  selectedIXP: IXP | null;                     setSelectedIXP: (d: IXP | null) => void;
  selectedAlert: BGPAlert | null;              setSelectedAlert: (d: BGPAlert | null) => void;
  selectedTower: CellTower | null;             setSelectedTower: (d: CellTower | null) => void;
  selectedOutage: NetworkOutage | null;        setSelectedOutage: (d: NetworkOutage | null) => void;

  // Counts
  totalCables: number;   setTotalCables: (n: number) => void;
  totalRegions: number;  setTotalRegions: (n: number) => void;
  totalIXPs: number;     setTotalIXPs: (n: number) => void;
  totalAlerts: number;   setTotalAlerts: (n: number) => void;
  totalTowers: number;   setTotalTowers: (n: number) => void;
  totalOutages: number;  setTotalOutages: (n: number) => void;

  // UI
  layers: LayerConfig;
  toggleLayer: (layer: keyof LayerConfig) => void;
  hoverTooltip: HoverTooltip | null;
  setHoverTooltip: (t: HoverTooltip | null) => void;
  cameraPosition: CameraPosition;
  setCameraPosition: (pos: CameraPosition) => void;
  isLoading: boolean;
  setIsLoading: (b: boolean) => void;
  lastUpdate: Date | null;
  setLastUpdate: (d: Date) => void;
  refreshData: () => Promise<void>;
  layerErrors: Partial<Record<keyof LayerConfig, string>>;
  setLayerError: (layer: keyof LayerConfig, err: string | null) => void;
}

const Ctx = createContext<TelecomViewState | null>(null);

export function TelecomViewProvider({ children }: { children: React.ReactNode }) {
  const [cables,           setCables]           = useState<SubmarineCable[]>([]);
  const [cloudRegions,     setCloudRegions]     = useState<CloudRegion[]>([]);
  const [ixps,             setIxps]             = useState<IXP[]>([]);
  const [bgpAlerts,        setBgpAlerts]        = useState<BGPAlert[]>([]);
  const [autonomousSystems,setAutonomousSystems]= useState<AutonomousSystem[]>([]);
  const [cellTowers,       setCellTowers]       = useState<CellTower[]>([]);
  const [outages,          setOutages]          = useState<NetworkOutage[]>([]);
  const [latencyProbes,    setLatencyProbes]    = useState<LatencyProbe[]>([]);
  const [fiberRoutes,      setFiberRoutes]      = useState<FiberRoute[]>([]);
  const [starlinkSats,     setStarlinkSats]     = useState<StarlinkSat[]>([]);

  const [selectedCable,  setSelectedCable]  = useState<SubmarineCable | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<CloudRegion | null>(null);
  const [selectedIXP,    setSelectedIXP]    = useState<IXP | null>(null);
  const [selectedAlert,  setSelectedAlert]  = useState<BGPAlert | null>(null);
  const [selectedTower,  setSelectedTower]  = useState<CellTower | null>(null);
  const [selectedOutage, setSelectedOutage] = useState<NetworkOutage | null>(null);

  const [totalCables,  setTotalCables]  = useState(0);
  const [totalRegions, setTotalRegions] = useState(0);
  const [totalIXPs,    setTotalIXPs]    = useState(0);
  const [totalAlerts,  setTotalAlerts]  = useState(0);
  const [totalTowers,  setTotalTowers]  = useState(0);
  const [totalOutages, setTotalOutages] = useState(0);

  const [layers, setLayers] = useState<LayerConfig>({
    submarineCables: true,
    cloudRegions:    true,
    ixps:            true,
    bgpAlerts:       true,
    cellTowers:      false,
    outages:         true,
    latencyHeatmap:  false,
    fiberRoutes:     true,
    starlink:        false,
    spectrum:        false,
    colos:           false,
    connectivityIndex: false,
  });

  const [hoverTooltip,    setHoverTooltip]    = useState<HoverTooltip | null>(null);
  const [cameraPosition,  setCameraPosition]  = useState<CameraPosition>({ lat: 20, lng: 0, alt: 22_000_000 });
  const [isLoading,       setIsLoading]       = useState(true);
  const [lastUpdate,      setLastUpdate]      = useState<Date | null>(null);
  const [layerErrors,     setLayerErrorsState]= useState<Partial<Record<keyof LayerConfig, string>>>({});

  const toggleLayer = useCallback((layer: keyof LayerConfig) =>
    setLayers(p => ({ ...p, [layer]: !p[layer] })), []);

  const setLayerError = useCallback((layer: keyof LayerConfig, err: string | null) =>
    setLayerErrorsState(p => {
      const n = { ...p };
      if (err === null) delete n[layer]; else n[layer] = err;
      return n;
    }), []);

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    const controller = new AbortController();

    try {
      const data = await fetchTelecomData(controller.signal);
      setCables(data.cables);
      setTotalCables(data.totalCables);
      setCloudRegions(data.regions);
      setTotalRegions(data.totalRegions);
      setIxps(data.ixps);
      setTotalIXPs(data.totalIXPs);
      setBgpAlerts(data.alerts);
      setTotalAlerts(data.totalAlerts);
      setOutages(data.outages);
      setTotalOutages(data.totalOutages);
      setLatencyProbes(data.probes);
      setCellTowers(data.towers);
      setTotalTowers(data.totalTowers);
    } catch (error) {
      console.error("Failed to load telecom data:", error);
      setLayerError("submarineCables", "Unable to load telecom data");
    } finally {
      setLastUpdate(new Date());
      setIsLoading(false);
    }
  }, [setLayerError]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  const value = useMemo(() => ({
    cables, setCables, cloudRegions, setCloudRegions, ixps, setIxps,
    bgpAlerts, setBgpAlerts, autonomousSystems, setAutonomousSystems,
    cellTowers, setCellTowers, outages, setOutages,
    latencyProbes, setLatencyProbes, fiberRoutes, setFiberRoutes,
    starlinkSats, setStarlinkSats,
    selectedCable, setSelectedCable, selectedRegion, setSelectedRegion,
    selectedIXP, setSelectedIXP, selectedAlert, setSelectedAlert,
    selectedTower, setSelectedTower, selectedOutage, setSelectedOutage,
    totalCables, setTotalCables, totalRegions, setTotalRegions,
    totalIXPs, setTotalIXPs, totalAlerts, setTotalAlerts,
    totalTowers, setTotalTowers, totalOutages, setTotalOutages,
    layers, toggleLayer, hoverTooltip, setHoverTooltip,
    cameraPosition, setCameraPosition, isLoading, setIsLoading,
    lastUpdate, setLastUpdate, refreshData, layerErrors, setLayerError,
  }), [
    cables, cloudRegions, ixps, bgpAlerts, autonomousSystems, cellTowers,
    outages, latencyProbes, fiberRoutes, starlinkSats,
    selectedCable, selectedRegion, selectedIXP, selectedAlert,
    selectedTower, selectedOutage,
    totalCables, totalRegions, totalIXPs, totalAlerts,
    totalTowers, totalOutages,
    layers, hoverTooltip, cameraPosition, isLoading,
    lastUpdate, refreshData, layerErrors,
    toggleLayer, setLayerError,
  ]);

  return (
    <Ctx.Provider value={value}>
      {children}
    </Ctx.Provider>
  );
}

export function useTelecomView() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTelecomView must be within TelecomViewProvider");
  return ctx;
}
