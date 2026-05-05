"use client";
import { useRef } from "react";
import { TelecomViewProvider, useTelecomView } from "@/lib/TelecomViewContext";
import dynamic from "next/dynamic";
import type { GlobeHandle } from "@/components/GlobeViewer";
import HUD from "@/components/HUD";
import LayerPanel from "@/components/LayerPanel";
import BGPAlertPanel from "@/components/BGPAlertPanel";
import SearchBar from "@/components/SearchBar";
import { ControlBar, StatusBar } from "@/components/ControlBar";
import IntelligencePanel from "@/components/IntelligencePanel";
import {
  SubmarineCableInfoCard,
  CloudRegionInfoCard,
  IXPInfoCard,
  BGPAlertInfoCard,
  OutageInfoCard,
  CellTowerInfoCard,
} from "@/components/InfoCards";
import LoadingScreen from "@/components/LoadingScreen";
import HoverTooltip from "@/components/HoverTooltip";

// Cesium must not SSR
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobeViewer = dynamic<any>(() => import("@/components/GlobeViewer"), { ssr: false });

function TelecomViewApp() {
  const globeRef = useRef<GlobeHandle | null>(null);
  const { isLoading } = useTelecomView();

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden" style={{ background: "#020408" }}>
      {/* Loading screen */}
      {isLoading && <LoadingScreen />}

      {/* Globe */}
      <GlobeViewer ref={globeRef} />

      {/* UI Layer */}
      <HUD />
      <LayerPanel />
      <SearchBar globeRef={globeRef} />
      <IntelligencePanel />

      {/* Info Cards (right panel — only one shown at a time) */}
      <SubmarineCableInfoCard />
      <CloudRegionInfoCard />
      <IXPInfoCard />
      <BGPAlertInfoCard />
      <OutageInfoCard />
      <CellTowerInfoCard />

      {/* Bottom panels */}
      <BGPAlertPanel />
      <ControlBar globeRef={globeRef} />
      <StatusBar />
      <HoverTooltip />
    </div>
  );
}

export default function Page() {
  return (
    <TelecomViewProvider>
      <TelecomViewApp />
    </TelecomViewProvider>
  );
}
