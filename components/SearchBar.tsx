"use client";
import { useState, useRef, useCallback } from "react";
import { useTelecomView } from "@/lib/TelecomViewContext";
import type { GlobeHandle } from "./GlobeViewer";

interface SearchBarProps { globeRef: React.RefObject<GlobeHandle | null> }

interface SearchResult {
  type: "cable" | "cloud" | "ixp" | "bgp";
  icon: string;
  label: string;
  sub: string;
  entity: any;
  lat?: number;
  lng?: number;
}

export default function SearchBar({ globeRef }: SearchBarProps) {
  const [query,   setQuery]   = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open,    setOpen]    = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { cables, cloudRegions, ixps, bgpAlerts,
    setSelectedCable, setSelectedRegion, setSelectedIXP, setSelectedAlert } = useTelecomView();

  const search = useCallback((q: string) => {
    const s = q.toLowerCase().trim();
    if (!s) { setResults([]); return; }
    const r: SearchResult[] = [];
    cables
      .filter(c => c.name.toLowerCase().includes(s))
      .slice(0, 3)
      .forEach(c => r.push({ type:"cable", icon:"🌊", label:c.name, sub:`${c.capacityTbps ?? "?"} Tbps`, entity:c, lat:c.landingPoints[0]?.lat, lng:c.landingPoints[0]?.lng }));
    cloudRegions
      .filter(r2 => r2.name.toLowerCase().includes(s) || r2.code.toLowerCase().includes(s))
      .slice(0, 4)
      .forEach(r2 => r.push({ type:"cloud", icon:"☁️", label:r2.name, sub:`${r2.provider.toUpperCase()} · ${r2.code}`, entity:r2, lat:r2.lat, lng:r2.lng }));
    ixps
      .filter(i => i.name.toLowerCase().includes(s) || i.city.toLowerCase().includes(s))
      .slice(0, 3)
      .forEach(i => r.push({ type:"ixp", icon:"🔄", label:i.name, sub:`${i.trafficGbps} Gbps · ${i.memberCount} members`, entity:i, lat:i.lat, lng:i.lng }));
    bgpAlerts
      .filter(a => a.asnName.toLowerCase().includes(s) || a.prefix.includes(s) || String(a.asn).includes(s))
      .slice(0, 2)
      .forEach(a => r.push({ type:"bgp", icon:"⚡", label:`AS${a.asn} — ${a.asnName}`, sub:a.prefix, entity:a, lat:a.lat, lng:a.lng }));
    setResults(r.slice(0, 8));
  }, [cables, cloudRegions, ixps, bgpAlerts]);

  const selectResult = (r: SearchResult) => {
    if (r.type === "cable")  setSelectedCable(r.entity);
    if (r.type === "cloud")  setSelectedRegion(r.entity);
    if (r.type === "ixp")    setSelectedIXP(r.entity);
    if (r.type === "bgp")    setSelectedAlert(r.entity);
    if (r.lat != null && r.lng != null) globeRef.current?.flyTo(r.lat, r.lng, 1_500_000);
    setQuery(""); setResults([]); setOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50 w-64" style={{ animation:"fadeIn 0.5s ease-out" }}>
      <div className="relative">
        <div className="glass-panel rounded-xl flex items-center gap-2 px-3 py-2"
          style={{ border:`1px solid ${open ? "rgba(0,245,255,0.3)":"rgba(0,245,255,0.1)"}`, transition:"border-color 0.2s" }}>
          <span className="text-xs text-slate-600">🔍</span>
          <input ref={inputRef} value={query}
            onChange={e => { setQuery(e.target.value); search(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            placeholder="Search cables, DCs, IXPs, ASNs..."
            className="bg-transparent text-xs font-mono text-slate-300 placeholder-slate-600 outline-none w-full"
          />
          {query && <button onClick={() => { setQuery(""); setResults([]); }} className="text-slate-600 hover:text-white text-xs">✕</button>}
        </div>
        {open && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 glass-panel rounded-xl overflow-hidden z-50"
            style={{ border:"1px solid rgba(0,245,255,0.15)", animation:"slideUp 0.15s ease-out" }}>
            {results.map((r, i) => (
              <button key={i} onClick={() => selectResult(r)}
                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/5 transition-all text-left border-b border-white/5 last:border-0">
                <span className="text-sm flex-shrink-0">{r.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-mono text-slate-300 truncate">{r.label}</div>
                  <div className="text-[9px] font-mono text-slate-600">{r.sub}</div>
                </div>
                <span className="text-[8px] font-mono text-slate-700 uppercase">{r.type}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
