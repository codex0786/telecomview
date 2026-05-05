"use client";
import { useState, useEffect } from "react";
import { useTelecomView } from "@/lib/TelecomViewContext";
import type { GlobeHandle } from "./GlobeViewer";

interface ControlBarProps { globeRef: React.RefObject<GlobeHandle | null> }

const HOTSPOTS = [
  { name:"Frankfurt IXP",   lat:50.11,  lng:8.68,    alt:1_000_000 },
  { name:"APAC Cables",     lat:10.0,   lng:110.0,   alt:6_000_000 },
  { name:"Trans-Atlantic",  lat:45.0,   lng:-35.0,   alt:7_000_000 },
  { name:"US East Coast",   lat:38.0,   lng:-75.0,   alt:3_000_000 },
  { name:"Southeast Asia",  lat:5.0,    lng:110.0,   alt:4_000_000 },
  { name:"Global View",     lat:20.0,   lng:0.0,     alt:22_000_000 },
];

export function ControlBar({ globeRef }: ControlBarProps) {
  const { refreshData, isLoading } = useTelecomView();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
      style={{ animation:"slideUp 0.5s ease-out" }}>
      <div className="glass-panel rounded-xl px-3 py-2 flex items-center gap-2"
        style={{ border:"1px solid rgba(0,245,255,0.1)" }}>
        <span className="text-[9px] font-mono text-slate-600 tracking-widest">JUMP TO</span>
        {HOTSPOTS.map(h => (
          <button key={h.name}
            onClick={() => globeRef.current?.flyTo(h.lat, h.lng, h.alt)}
            className="px-2.5 py-1 rounded-lg text-[9px] font-mono text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:bg-white/5"
            style={{ border:"1px solid transparent" }}
            onMouseEnter={e => (e.currentTarget.style.border = "1px solid rgba(0,245,255,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.border = "1px solid transparent")}
          >
            {h.name}
          </button>
        ))}
        <div className="w-px h-4 bg-white/10 mx-1" />
        <button onClick={() => globeRef.current?.resetView()}
          className="px-2.5 py-1 rounded-lg text-[9px] font-mono text-slate-500 hover:text-white transition-all hover:bg-white/5">
          ⟳ RESET
        </button>
        <button onClick={() => globeRef.current?.toggleDayNight()}
          className="px-2.5 py-1 rounded-lg text-[9px] font-mono text-slate-500 hover:text-white transition-all hover:bg-white/5">
          🌙 NIGHT
        </button>
        <button onClick={refreshData}
          className="px-2.5 py-1 rounded-lg text-[9px] font-mono font-semibold transition-all"
          style={{ color:isLoading ? "#94a3b8" : "#00f5ff", background:isLoading ? "rgba(255,255,255,0.06)" : "rgba(0,245,255,0.08)" }}
          disabled={isLoading}
        >
          {isLoading ? "REFRESHING..." : "REFRESH"}
        </button>
      </div>
    </div>
  );
}

export function StatusBar() {
  // ── Fix: never render Date on the server — use useEffect so the clock
  //    is client-only, avoiding SSR/client hydration mismatch. ──────────
  const [utcTime, setUtcTime] = useState<string | null>(null);
  const { lastUpdate, isLoading } = useTelecomView();

  useEffect(() => {
    const fmt = () =>
      new Date().toISOString().slice(0, 19).replace("T", " ");
    setUtcTime(fmt());
    const id = setInterval(() => setUtcTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  const staticItems = [
    "RIPE RIS LIVE — CONNECTED",
    "IODA OUTAGE DETECTION — ACTIVE",
    "OPENCELLID — READY",
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-1"
      style={{ background:"rgba(2,4,8,0.9)", borderTop:"1px solid rgba(0,245,255,0.08)" }}>
      <div className="flex items-center gap-6">
        {staticItems.map((item) => (
          <span key={item} className="text-[8px] font-mono text-slate-700 tracking-widest">
            {item}
          </span>
        ))}
        {/* Client-only clock — null on first server render → no mismatch */}
        <span className="text-[8px] font-mono text-slate-700 tracking-widest">
          {utcTime ? `UTC ${utcTime}` : ""}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 rounded-full" style={{ background:isLoading ? "#ffb800" : "#22c55e", animation:"blink 2s step-end infinite" }} />
        <span className="text-[8px] font-mono text-slate-700">
          {isLoading ? "UPDATING DATA..." : lastUpdate ? `UPDATED ${lastUpdate.toISOString().slice(0, 19).replace("T", " ")}` : "DATA LOADING"}
        </span>
        <span className="text-[8px] font-mono text-slate-700">TELECOMVIEW v1.0 — GLOBAL NETWORK INTELLIGENCE</span>
      </div>
    </div>
  );
}
