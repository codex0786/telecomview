"use client";
import { useTelecomView } from "@/lib/TelecomViewContext";

export default function HUD() {
  const { totalCables, totalRegions, totalIXPs, totalAlerts, totalOutages, cameraPosition } = useTelecomView();

  const stats = [
    { icon: "🌊", label: "CABLES",     value: totalCables,  color: "#00f5ff" },
    { icon: "☁️", label: "CLOUD DCs",  value: totalRegions, color: "#ff9900" },
    { icon: "🔄", label: "IXPs",       value: totalIXPs,    color: "#a855f7" },
    { icon: "⚡", label: "BGP EVENTS", value: totalAlerts,  color: "#ff3b3b" },
    { icon: "🚨", label: "OUTAGES",    value: totalOutages, color: "#ffb800" },
  ];

  const altStr = cameraPosition.alt > 1_000_000
    ? `${(cameraPosition.alt / 1_000_000).toFixed(1)} Mm`
    : `${Math.round(cameraPosition.alt / 1000)} km`;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none select-none">
      <div style={{
        background: "rgba(2,8,18,0.88)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(0,245,255,0.13)",
        borderRadius: "14px",
        padding: "10px 24px",
        display: "flex", alignItems: "center", gap: "20px",
        boxShadow: "0 0 40px rgba(0,245,255,0.06), inset 0 1px 0 rgba(0,245,255,0.08)",
      }}>
        {/* Brand */}
        <div style={{ display:"flex", alignItems:"center", gap:"8px", paddingRight:"20px", borderRight:"1px solid rgba(0,245,255,0.1)" }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: "#00f5ff",
            boxShadow: "0 0 8px #00f5ff, 0 0 16px #00f5ff44",
            animation: "pulseDot 2s ease-in-out infinite",
          }} />
          <span style={{
            fontFamily: "'Orbitron', monospace", fontSize: "11px",
            letterSpacing: "0.3em", color: "#00f5ff",
            textShadow: "0 0 16px #00f5ff88",
          }}>TELECOMVIEW</span>
        </div>

        {/* Stats */}
        {stats.map(s => (
          <div key={s.label} style={{ display:"flex", alignItems:"center", gap:"7px" }}>
            <span style={{ fontSize: 14 }}>{s.icon}</span>
            <div>
              <div style={{ fontSize: "8px", fontFamily: "'IBM Plex Mono', monospace", color: "#475569", letterSpacing: "0.15em" }}>{s.label}</div>
              <div style={{ fontSize: "13px", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: s.color, textShadow: `0 0 8px ${s.color}55` }}>
                {s.value.toLocaleString()}
              </div>
            </div>
          </div>
        ))}

        {/* Separator */}
        <div style={{ width:1, height:28, background:"rgba(0,245,255,0.1)" }} />

        {/* Altitude */}
        <div>
          <div style={{ fontSize:"8px", fontFamily:"'IBM Plex Mono',monospace", color:"#475569", letterSpacing:"0.15em" }}>ALT</div>
          <div style={{ fontSize:"12px", fontFamily:"'IBM Plex Mono',monospace", color:"#94a3b8" }}>{altStr}</div>
        </div>

        {/* Live */}
        <div style={{ display:"flex", alignItems:"center", gap:"5px" }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:"#00ff88", boxShadow:"0 0 6px #00ff88", animation:"blinkDot 1.4s step-end infinite" }} />
          <span style={{ fontSize:"8px", fontFamily:"'IBM Plex Mono',monospace", color:"#475569", letterSpacing:"0.15em" }}>LIVE</span>
        </div>
      </div>

      <style>{`
        @keyframes pulseDot { 0%,100%{box-shadow:0 0 8px #00f5ff,0 0 16px #00f5ff44} 50%{box-shadow:0 0 16px #00f5ff,0 0 32px #00f5ff66} }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </div>
  );
}
