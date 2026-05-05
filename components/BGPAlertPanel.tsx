"use client";
import { useState } from "react";
import { useTelecomView } from "@/lib/TelecomViewContext";
import type { BGPAlert } from "@/lib/TelecomViewContext";

const SEV_COLORS: Record<string, string> = { critical:"#ff0000", high:"#ff3b3b", medium:"#ffb800", low:"#00f5ff" };
const TYPE_LABELS: Record<string, string> = { hijack:"HIJACK", leak:"LEAK", withdrawal:"WITHDRAWN", anomaly:"ANOMALY" };
const TYPE_ICONS:  Record<string, string> = { hijack:"🔴",     leak:"🟡",  withdrawal:"🔵",         anomaly:"⚡" };

export default function BGPAlertPanel() {
  const { bgpAlerts, selectedAlert, setSelectedAlert } = useTelecomView();
  const [open, setOpen] = useState(true);
  const critical = bgpAlerts.filter(a => a.severity === "critical" || a.severity === "high").length;

  if (!open) return (
    <button onClick={() => setOpen(true)}
      className="fixed bottom-24 right-4 z-50 glass-panel rounded-xl px-4 py-2 flex items-center gap-2"
      style={{ border:"1px solid rgba(255,59,59,0.3)" }}>
      <span>⚡</span>
      <span className="text-[10px] font-mono text-red-400">{bgpAlerts.length} BGP ALERTS</span>
      {critical > 0 && (
        <span className="w-4 h-4 rounded-full bg-red-500 text-[8px] font-mono flex items-center justify-center text-white">{critical}</span>
      )}
    </button>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50 glass-panel rounded-xl w-72"
      style={{ animation:"slideUp 0.4s ease-out", border:"1px solid rgba(255,59,59,0.2)", maxHeight:"240px" }}>
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" style={{ animation:"blink 1s step-end infinite" }} />
          <span className="text-[9px] font-mono tracking-widest text-red-400">BGP INTELLIGENCE FEED</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono text-slate-500">{bgpAlerts.length}</span>
          <button onClick={() => setOpen(false)} className="text-slate-600 hover:text-white text-xs">✕</button>
        </div>
      </div>
      <div className="overflow-y-auto" style={{ maxHeight:"180px" }}>
        {bgpAlerts.map((a: BGPAlert) => {
          const sc   = SEV_COLORS[a.severity] || "#ffb800";
          const isSel = selectedAlert?.id === a.id;
          return (
            <button key={a.id} onClick={() => setSelectedAlert(isSel ? null : a)}
              className="w-full text-left" style={{ background:isSel ? sc+"11":"transparent" }}>
              <div className="flex items-start gap-2 px-4 py-2 hover:bg-white/5 border-b border-white/5 transition-all">
                <span className="text-xs flex-shrink-0 mt-0.5">{TYPE_ICONS[a.type] || "⚡"}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-mono" style={{ color:sc }}>{TYPE_LABELS[a.type] || a.type.toUpperCase()}</span>
                    <span className="text-[9px] font-mono text-slate-600">AS{a.asn}</span>
                    <span className="text-[9px] font-mono text-slate-600 ml-auto">
                      {new Date(a.timestamp).toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" })}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">{a.prefix}</div>
                  <div className="text-[9px] text-slate-600 truncate">{a.asnName}</div>
                </div>
              </div>
            </button>
          );
        })}
        {bgpAlerts.length === 0 && (
          <div className="px-4 py-6 text-center text-[9px] font-mono text-slate-600">NO ALERTS DETECTED</div>
        )}
      </div>
    </div>
  );
}
