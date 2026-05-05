"use client";
import { useState, useEffect } from "react";
import { useTelecomView } from "@/lib/TelecomViewContext";

const INSIGHTS = [
  { icon: "🔴", severity: "critical", msg: "AS45899 VNPT announcing unauthorized prefixes — BGP hijack suspected in Southeast Asia" },
  { icon: "🟡", severity: "medium",   msg: "Elevated latency across SEA-ME-WE 4 cable — possible partial fault near Suez segment" },
  { icon: "🟢", severity: "info",     msg: "DE-CIX Frankfurt processing peak 14.2 Tbps — 8% above 30-day average" },
  { icon: "🔴", severity: "critical", msg: "IX.br São Paulo congestion event — 23 ASNs experiencing packet loss >5%" },
  { icon: "🟡", severity: "medium",   msg: "AWS us-east-1 BGP route instability — 3 prefix withdrawals in last 15 minutes" },
  { icon: "🟢", severity: "info",     msg: "New submarine cable PEACE now fully operational — India-France latency reduced 12ms" },
  { icon: "🟡", severity: "medium",   msg: "Cloudflare AS13335 announcing new /22 prefixes from Frankfurt PoP" },
  { icon: "🔴", severity: "critical", msg: "RIPE Atlas detecting 40% packet loss from Middle East — possible cable fault" },
];

export default function IntelligencePanel() {
  const { bgpAlerts, outages } = useTelecomView();
  const [open, setOpen] = useState(true);
  const [insightIdx, setInsightIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setInsightIdx(i => (i + 1) % INSIGHTS.length), 7000);
    return () => clearInterval(t);
  }, []);

  const critical = bgpAlerts.filter(a => a.severity === "critical").length + outages.filter(o => o.severity === "critical").length;

  if (!open) {
    return (
      <button onClick={() => setOpen(true)}
        className="fixed top-20 left-4 z-50 glass-panel rounded-xl px-4 py-2 flex items-center gap-2"
        style={{ border: "1px solid rgba(0,245,255,0.15)" }}>
        <span className="text-sm">🧠</span>
        <span className="text-[9px] font-mono text-cyan-400">AI ANALYST</span>
        {critical > 0 && <span className="w-4 h-4 rounded-full bg-red-500 text-[8px] font-mono flex items-center justify-center text-white">{critical}</span>}
      </button>
    );
  }

  const current = INSIGHTS[insightIdx];

  return (
    <div className="fixed top-20 left-4 z-40 glass-panel rounded-xl w-64 overflow-hidden"
      style={{ border: "1px solid rgba(0,245,255,0.12)", animation: "slideIn 0.4s ease-out" }}>
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-sm">🧠</span>
          <span className="text-[9px] font-mono tracking-widest text-cyan-400">NETWORK ANALYST</span>
        </div>
        <button onClick={() => setOpen(false)} className="text-slate-600 hover:text-white text-xs">✕</button>
      </div>

      {/* Scrolling insight */}
      <div className="px-4 py-3 border-b border-white/5" style={{ minHeight: 72 }}>
        <div key={insightIdx} className="flex items-start gap-2" style={{ animation: "fadeIn 0.5s ease-out" }}>
          <span className="text-base mt-0.5">{current.icon}</span>
          <p className="text-[10px] font-mono text-slate-400 leading-relaxed">{current.msg}</p>
        </div>
      </div>

      {/* Summary counts */}
      <div className="grid grid-cols-3 divide-x divide-white/5">
        {[
          { label: "CRITICAL", value: critical, color: "#ff3b3b" },
          { label: "BGP", value: bgpAlerts.length, color: "#ffb800" },
          { label: "OUTAGES", value: outages.length, color: "#ff9900" },
        ].map(s => (
          <div key={s.label} className="px-3 py-2 text-center">
            <div className="text-base font-mono font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[8px] font-mono text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Pulse indicator */}
      <div className="px-4 py-2 border-t border-white/5 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: "blink 2s step-end infinite" }} />
        <span className="text-[8px] font-mono text-slate-600">ANALYZING NETWORK TOPOLOGY IN REAL-TIME</span>
      </div>
    </div>
  );
}
