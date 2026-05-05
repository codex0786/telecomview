"use client";
import { useTelecomView } from "@/lib/TelecomViewContext";

export default function HoverTooltip() {
  const { hoverTooltip } = useTelecomView();
  if (!hoverTooltip) return null;
  const { x, y, icon, label, sublabel } = hoverTooltip;
  const flipX = typeof window !== "undefined" && x > window.innerWidth - 220;
  return (
    <div
      className="fixed z-[100] pointer-events-none glass-panel rounded-lg px-3 py-2"
      style={{
        left: flipX ? x - 200 : x + 14,
        top: y - 10,
        border: "1px solid rgba(0,245,255,0.2)",
        animation: "fadeIn 0.1s ease-out",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm">{icon}</span>
        <div>
          <div className="text-[11px] font-mono text-white whitespace-nowrap">{label}</div>
          {sublabel && <div className="text-[9px] font-mono text-slate-500 whitespace-nowrap">{sublabel}</div>}
        </div>
      </div>
    </div>
  );
}
