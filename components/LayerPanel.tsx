"use client";
import { useTelecomView } from "@/lib/TelecomViewContext";
import type { LayerConfig } from "@/lib/TelecomViewContext";

const LAYERS: { key: keyof LayerConfig; icon: string; label: string; color: string; desc: string }[] = [
  { key:"submarineCables", icon:"🌊", label:"Submarine Cables",  color:"#00f5ff", desc:"Global undersea fiber systems" },
  { key:"cloudRegions",    icon:"☁️",  label:"Cloud Data Centers",color:"#ff9900", desc:"AWS / Azure / GCP / CF regions" },
  { key:"ixps",            icon:"🔄", label:"Internet Exchanges", color:"#a855f7", desc:"IXPs sized by traffic volume" },
  { key:"bgpAlerts",       icon:"⚡", label:"BGP Alerts",         color:"#ff3b3b", desc:"Route hijacks, leaks & anomalies" },
  { key:"outages",         icon:"🚨", label:"Live Outages",       color:"#ffb800", desc:"Active internet outage events" },
  { key:"fiberRoutes",     icon:"🔦", label:"Fiber Backbone",     color:"#aaff00", desc:"Tier-1 terrestrial fiber routes" },
  { key:"cellTowers",      icon:"📡", label:"Cell Towers",        color:"#00ff88", desc:"2G / 3G / 4G / 5G infrastructure" },
  { key:"latencyHeatmap",  icon:"🌡️", label:"Latency Heatmap",   color:"#ff9900", desc:"Global RTT overlay" },
  { key:"starlink",        icon:"🛰️", label:"Satellite (LEO)",   color:"#ffffff", desc:"Starlink constellation" },
];

export default function LayerPanel() {
  const { layers, toggleLayer } = useTelecomView();
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="glass-panel rounded-xl p-3 w-64" style={{ animation:"slideIn 0.4s ease-out" }}>
        <div className="text-[9px] font-mono tracking-[0.25em] text-slate-500 mb-3 px-1">INTELLIGENCE LAYERS</div>
        <div className="flex flex-col gap-1">
          {LAYERS.map(l => {
            const on = layers[l.key];
            return (
              <button key={l.key} onClick={() => toggleLayer(l.key)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-left w-full"
                style={{ background:on ? `${l.color}11`:"transparent", border:`1px solid ${on ? l.color+"44":"transparent"}` }}>
                <span className="text-sm flex-shrink-0">{l.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-mono font-medium" style={{ color:on ? l.color:"#555" }}>{l.label}</div>
                  <div className="text-[9px] text-slate-600 truncate">{l.desc}</div>
                </div>
                <div className="flex-shrink-0 w-8 h-4 rounded-full relative transition-all duration-200"
                  style={{ background:on ? `${l.color}66`:"#1a1a2e", border:`1px solid ${on ? l.color:"#333"}` }}>
                  <div className="absolute top-0.5 w-3 h-3 rounded-full transition-all duration-200"
                    style={{ background:on ? l.color:"#333", left:on ? "calc(100% - 14px)":"1px", boxShadow:on ? `0 0 6px ${l.color}`:"none" }} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
