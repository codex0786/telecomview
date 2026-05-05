"use client";
import { useState } from "react";
import { useTelecomView } from "@/lib/TelecomViewContext";
import { PROVIDER_COLORS, PROVIDER_NAMES } from "@/lib/cloudData";

function CloseBtn({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="w-6 h-6 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all text-xs">
      ✕
    </button>
  );
}

function InfoRow({ label, value, color }: { label: string; value: string | number; color?: string }) {
  return (
    <div className="flex justify-between items-center py-1 border-b border-white/5">
      <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">{label}</span>
      <span className="text-[11px] font-mono font-medium" style={{ color: color || "#e2e8f0" }}>{value}</span>
    </div>
  );
}

function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full"
      style={{ background: color + "22", border: `1px solid ${color}44`, color }}>
      {text}
    </span>
  );
}

// ── 🌊 Submarine Cable ────────────────────────────────────────────────────────
export function SubmarineCableInfoCard() {
  const { selectedCable, setSelectedCable } = useTelecomView();
  if (!selectedCable) return null;
  const c = selectedCable;
  const sc = ({ active:"#00f5ff", planned:"#ffffff", retired:"#555", repair:"#ffb800" })[c.status] || "#00f5ff";
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-72"
      style={{ animation:"slideIn 0.3s ease-out", border:`1px solid ${sc}44` }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🌊</span>
          <div>
            <div className="text-xs font-mono font-bold" style={{ color: sc }}>{c.name}</div>
            <div className="text-[9px] text-slate-500 font-mono">SUBMARINE CABLE SYSTEM</div>
          </div>
        </div>
        <CloseBtn onClick={() => setSelectedCable(null)} />
      </div>
      <div className="space-y-0.5 mb-3">
        <InfoRow label="Status"       value={c.status.toUpperCase()}                                     color={sc} />
        <InfoRow label="Capacity"     value={c.capacityTbps ? `${c.capacityTbps} Tbps` : "—"}           color="#00ff88" />
        <InfoRow label="Length"       value={c.lengthKm ? `${c.lengthKm.toLocaleString()} km` : "—"} />
        <InfoRow label="Year Ready"   value={c.yearReady ?? "—"} />
        <InfoRow label="Landing Pts"  value={c.landingPoints.length} />
      </div>
      <div className="mb-3">
        <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-1.5">LANDING POINTS</div>
        <div className="space-y-1">
          {c.landingPoints.map((lp, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] font-mono">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: sc }} />
              <span className="text-slate-300">{lp.name}</span>
              <span className="text-slate-600 ml-auto">{lp.country}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-1.5">OWNERS</div>
        <div className="flex flex-wrap gap-1">
          {c.owners.slice(0, 4).map(o => <Badge key={o} text={o.split(" ")[0]} color={sc} />)}
          {c.owners.length > 4 && <Badge text={`+${c.owners.length - 4}`} color="#555" />}
        </div>
      </div>
    </div>
  );
}

// ── ☁️ Cloud Region / Data Centre ─────────────────────────────────────────────
export function CloudRegionInfoCard() {
  const { selectedRegion, setSelectedRegion } = useTelecomView();
  const [tab, setTab] = useState<"overview"|"facilities"|"network"|"compliance">("overview");
  if (!selectedRegion) return null;
  const r = selectedRegion;
  const col  = PROVIDER_COLORS[r.provider] || "#ffffff";
  const sc   = ({ operational:"#00ff88", degraded:"#ffb800", outage:"#ff3b3b" })[r.status] || "#00ff88";
  const utilPct = r.totalPowerMW > 0 ? Math.round((r.usedPowerMW / r.totalPowerMW) * 100) : 0;
  const utilCol = utilPct > 85 ? "#ff3b3b" : utilPct > 70 ? "#ffb800" : "#00ff88";
  const ecoCol  = r.sustainabilityScore >= 80 ? "#00ff88" : r.sustainabilityScore >= 50 ? "#ffb800" : "#ff3b3b";
  const tabs = ["overview","facilities","network","compliance"] as const;

  return (
    <div className="fixed right-4 top-16 bottom-16 z-50 glass-panel rounded-xl overflow-hidden flex flex-col w-80"
      style={{ animation:"slideIn 0.3s ease-out", border:`1px solid ${col}44` }}>

      {/* ── Header ── */}
      <div className="p-4 flex-shrink-0" style={{ borderBottom:`1px solid ${col}22` }}>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
              style={{ background: col+"22", border:`1px solid ${col}44` }}>
              {r.provider === "aws" ? "☁" : r.provider === "azure" ? "⬡" : r.provider === "gcp" ? "◈" : "◎"}
            </div>
            <div>
              <div className="text-[11px] font-mono font-bold leading-tight" style={{ color: col }}>{r.name}</div>
              <div className="text-[9px] text-slate-500 font-mono">{PROVIDER_NAMES[r.provider]} · {r.city}, {r.country}</div>
            </div>
          </div>
          <CloseBtn onClick={() => { setSelectedRegion(null); setTab("overview"); }} />
        </div>

        {/* Status bar */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg mb-2"
          style={{ background:sc+"11", border:`1px solid ${sc}22` }}>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background:sc, boxShadow:`0 0 5px ${sc}` }} />
          <span className="text-[9px] font-mono" style={{ color:sc }}>
            {r.status === "operational" ? "ALL SYSTEMS OPERATIONAL" : r.status === "degraded" ? "PERFORMANCE DEGRADATION" : "SERVICE OUTAGE"}
          </span>
          {r.latencyMs != null && (
            <span className="ml-auto text-[9px] font-mono" style={{ color: r.latencyMs < 20 ? "#00ff88" : r.latencyMs < 60 ? "#ffb800" : "#ff3b3b" }}>
              {r.latencyMs}ms
            </span>
          )}
        </div>

        {/* Power utilisation bar */}
        <div className="mb-1">
          <div className="flex justify-between mb-0.5">
            <span className="text-[8px] font-mono text-slate-600">POWER LOAD</span>
            <span className="text-[8px] font-mono" style={{ color: utilCol }}>{utilPct}% · {r.usedPowerMW}/{r.totalPowerMW} MW</span>
          </div>
          <div className="h-1 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full rounded-full transition-all" style={{ width:`${utilPct}%`, background: utilCol, boxShadow:`0 0 6px ${utilCol}88` }} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-3">
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className="flex-1 py-1 rounded text-[8px] font-mono uppercase tracking-wider transition-all"
              style={{
                background: tab === t ? col+"33" : "transparent",
                border: `1px solid ${tab === t ? col+"66" : "transparent"}`,
                color: tab === t ? col : "#64748b",
              }}>
              {t === "overview" ? "INFO" : t === "facilities" ? "DCs" : t === "network" ? "NET" : "CERT"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth:"none" }}>

        {/* ── OVERVIEW TAB ── */}
        {tab === "overview" && <>
          <div className="space-y-0.5">
            <InfoRow label="Region Code"    value={r.code}               color={col} />
            <InfoRow label="Avail. Zones"   value={r.azCount} />
            <InfoRow label="Tier"           value={`Tier ${r.tierLevel}`} />
            <InfoRow label="Opened"         value={r.yearOpened} />
            <InfoRow label="Floor Space"    value={`${(r.floorSpaceSqM/1000).toFixed(0)}k m²`} />
            <InfoRow label="Cooling"        value={r.coolingType} />
            <InfoRow label="Total Capacity" value={`${r.totalPowerMW} MW`} />
          </div>

          {/* Eco score */}
          <div className="rounded-lg p-2.5" style={{ background:"#ffffff08", border:"1px solid #ffffff11" }}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[9px] font-mono text-slate-500">SUSTAINABILITY</span>
              <span className="text-[10px] font-mono font-bold" style={{ color: ecoCol }}>{r.sustainabilityScore}/100</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-1.5">
              <div className="h-full rounded-full" style={{ width:`${r.sustainabilityScore}%`, background:`linear-gradient(90deg, #00ff88, ${ecoCol})` }} />
            </div>
            <div className="flex justify-between">
              <span className="text-[8px] font-mono text-slate-600">RENEWABLE ENERGY</span>
              <span className="text-[8px] font-mono" style={{ color: ecoCol }}>{r.carbonFreeEnergy}% CFE</span>
            </div>
          </div>

          <div>
            <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-1.5">SERVICES</div>
            <div className="flex flex-wrap gap-1">
              {r.services.map(s => <Badge key={s} text={s} color={col} />)}
            </div>
          </div>

          <div>
            <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-1.5">PRICING TIER</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: r.pricingTier === "premium" ? "#ff9900" : r.pricingTier === "standard" ? "#00f5ff" : "#00ff88" }} />
              <span className="text-[11px] font-mono text-slate-300 capitalize">{r.pricingTier}</span>
            </div>
          </div>
        </>}

        {/* ── FACILITIES TAB ── */}
        {tab === "facilities" && <>
          <div className="text-[9px] font-mono text-slate-500 tracking-widest">{r.facilities.length} PHYSICAL DATA CENTRES</div>
          {r.facilities.map((f, i) => (
            <div key={i} className="rounded-lg p-2.5" style={{ background:"#ffffff08", border:`1px solid ${col}22` }}>
              <div className="flex justify-between items-start mb-1.5">
                <div>
                  <div className="text-[10px] font-mono font-bold" style={{ color: col }}>{f.name}</div>
                  <div className="text-[8px] font-mono text-slate-500">{f.operator}</div>
                </div>
                <span className="text-[8px] font-mono px-1.5 py-0.5 rounded"
                  style={{ background: col+"22", color: col }}>Tier {f.tier}</span>
              </div>
              <div className="space-y-0.5 mb-1.5">
                <div className="flex justify-between">
                  <span className="text-[8px] font-mono text-slate-600">CAPACITY</span>
                  <span className="text-[8px] font-mono text-slate-300">{f.powerMW} MW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[8px] font-mono text-slate-600">PUE</span>
                  <span className="text-[8px] font-mono" style={{ color: f.pue < 1.2 ? "#00ff88" : f.pue < 1.4 ? "#ffb800" : "#ff3b3b" }}>{f.pue.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {f.certifications.map(c => <span key={c} className="text-[7px] font-mono px-1 py-0.5 rounded" style={{ background:"#ffffff11", color:"#94a3b8" }}>{c}</span>)}
              </div>
            </div>
          ))}
        </>}

        {/* ── NETWORK TAB ── */}
        {tab === "network" && <>
          <div>
            <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-2">CONNECTED IXPs</div>
            <div className="space-y-1">
              {r.connectedIXPs.map(ix => (
                <div key={ix} className="flex items-center gap-2 text-[10px] font-mono">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background:"#a855f7" }} />
                  <span className="text-slate-300">{ix}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-2">UPSTREAM TRANSIT</div>
            <div className="space-y-1">
              {r.upstreamProviders.map(p => (
                <div key={p} className="flex items-center gap-2 text-[10px] font-mono">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background:"#00f5ff" }} />
                  <span className="text-slate-300">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-1.5">CAPABILITIES</div>
            <div className="space-y-0.5">
              <InfoRow label="IPv6" value={r.ipv6 ? "SUPPORTED" : "NOT SUPPORTED"} color={r.ipv6 ? "#00ff88" : "#ff3b3b"} />
              {r.latencyMs != null && <InfoRow label="Latency to PoP" value={`${r.latencyMs}ms avg`} color="#00f5ff" />}
            </div>
          </div>
        </>}

        {/* ── COMPLIANCE TAB ── */}
        {tab === "compliance" && <>
          <div>
            <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-2">COMPLIANCE FRAMEWORKS</div>
            <div className="grid grid-cols-2 gap-1.5">
              {r.complianceFrameworks.map(f => (
                <div key={f} className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg"
                  style={{ background:"#00ff8811", border:"1px solid #00ff8833" }}>
                  <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-[9px] font-mono text-slate-300">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg p-2.5" style={{ background:"#ffffff08", border:"1px solid #ffffff11" }}>
            <div className="text-[9px] font-mono text-slate-500 mb-1.5">PHYSICAL SECURITY</div>
            <div className="space-y-1">
              {["24/7 Security Guards","Biometric Access","CCTV Surveillance","Mantrap Entry","Seismic Bracing"].map(s => (
                <div key={s} className="flex items-center gap-2">
                  <span className="text-[9px]">✓</span>
                  <span className="text-[9px] font-mono text-slate-400">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg p-2.5" style={{ background: r.tierLevel === "IV" ? "#00ff8811" : "#ffb80011", border:`1px solid ${r.tierLevel === "IV" ? "#00ff8833" : "#ffb80033"}` }}>
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono text-slate-500">UPTIME SLA</span>
              <span className="text-[11px] font-mono font-bold" style={{ color: r.tierLevel === "IV" ? "#00ff88" : "#ffb800" }}>
                {r.tierLevel === "IV" ? "99.995%" : r.tierLevel === "III" ? "99.982%" : "99.749%"}
              </span>
            </div>
          </div>
        </>}

      </div>
    </div>
  );
}

// ── 🔄 IXP ────────────────────────────────────────────────────────────────────
export function IXPInfoCard() {
  const { selectedIXP, setSelectedIXP } = useTelecomView();
  if (!selectedIXP) return null;
  const ix = selectedIXP;
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-72"
      style={{ animation:"slideIn 0.3s ease-out", border:"1px solid rgba(168,85,247,0.4)" }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔄</span>
          <div>
            <div className="text-xs font-mono font-bold text-purple-400">{ix.name}</div>
            <div className="text-[9px] text-slate-500 font-mono">INTERNET EXCHANGE POINT</div>
          </div>
        </div>
        <CloseBtn onClick={() => setSelectedIXP(null)} />
      </div>
      <div className="space-y-0.5 mb-3">
        <InfoRow label="Location"   value={`${ix.city}, ${ix.country}`} />
        <InfoRow label="Traffic"    value={`${ix.trafficGbps.toLocaleString()} Gbps`} color="#a855f7" />
        <InfoRow label="Members"    value={ix.memberCount.toLocaleString()}            color="#00f5ff" />
        <InfoRow label="Peering"    value={ix.peeringPolicy.toUpperCase()} />
        <InfoRow label="Status"     value={ix.status.toUpperCase()} color={ix.status === "active" ? "#00ff88" : "#ff3b3b"} />
      </div>
      <div className="mb-3">
        <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-1.5">TRAFFIC VOLUME</div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background:"#1a1a2e" }}>
          <div className="h-full rounded-full" style={{ width:`${Math.min(100, (ix.trafficGbps / 15000) * 100)}%`, background:"linear-gradient(90deg, #a855f7, #00f5ff)", boxShadow:"0 0 8px #a855f7" }} />
        </div>
      </div>
      <div>
        <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-1.5">MEMBER NETWORKS</div>
        <div className="flex flex-wrap gap-1">
          {ix.networks.slice(0, 5).map(n => <Badge key={n} text={n.split(" ")[0]} color="#a855f7" />)}
        </div>
      </div>
    </div>
  );
}

// ── ⚡ BGP Alert ──────────────────────────────────────────────────────────────
export function BGPAlertInfoCard() {
  const { selectedAlert, setSelectedAlert } = useTelecomView();
  if (!selectedAlert) return null;
  const a = selectedAlert;
  const sc = ({ critical:"#ff0000", high:"#ff3b3b", medium:"#ffb800", low:"#00f5ff" })[a.severity] || "#ffb800";
  const icons: Record<string, string> = { hijack:"🔴", leak:"🟡", withdrawal:"🔵", anomaly:"⚡" };
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-72"
      style={{ animation:"slideIn 0.3s ease-out", border:`1px solid ${sc}44` }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icons[a.type] || "⚡"}</span>
          <div>
            <div className="text-xs font-mono font-bold" style={{ color:sc }}>BGP {a.type.replace("_"," ").toUpperCase()}</div>
            <div className="text-[9px] text-slate-500 font-mono">ROUTING ALERT</div>
          </div>
        </div>
        <CloseBtn onClick={() => setSelectedAlert(null)} />
      </div>
      <div className="space-y-0.5 mb-3">
        <InfoRow label="Severity" value={a.severity.toUpperCase()} color={sc} />
        <InfoRow label="ASN"      value={`AS${a.asn}`}             color="#00f5ff" />
        <InfoRow label="AS Name"  value={a.asnName} />
        <InfoRow label="Prefix"   value={a.prefix}                 color="#aaff00" />
        <InfoRow label="Detected" value={new Date(a.timestamp).toLocaleTimeString()} />
      </div>
      <div className="mb-3 px-3 py-2 rounded-lg" style={{ background:sc+"11", border:`1px solid ${sc}33` }}>
        <p className="text-[10px] font-mono text-slate-400 leading-relaxed">{a.description}</p>
      </div>
      {a.affectedCountries.length > 0 && (
        <div>
          <div className="text-[9px] font-mono text-slate-500 tracking-widest mb-1">AFFECTED</div>
          <div className="flex flex-wrap gap-1">
            {a.affectedCountries.map(c => <Badge key={c} text={c} color={sc} />)}
          </div>
        </div>
      )}
    </div>
  );
}

// ── 🚨 Outage ─────────────────────────────────────────────────────────────────
export function OutageInfoCard() {
  const { selectedOutage, setSelectedOutage } = useTelecomView();
  if (!selectedOutage) return null;
  const o = selectedOutage;
  const sc = ({ critical:"#ff0000", major:"#ff3b3b", minor:"#ffb800" })[o.severity] || "#ffb800";
  const elapsed = Math.round((Date.now() - o.startTime) / 60000);
  const duration = elapsed > 60 ? `${Math.round(elapsed / 60)}h ${elapsed % 60}m` : `${elapsed}m`;
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-72"
      style={{ animation:"slideIn 0.3s ease-out", border:`1px solid ${sc}44` }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🚨</span>
          <div>
            <div className="text-xs font-mono font-bold" style={{ color:sc }}>{o.region}</div>
            <div className="text-[9px] text-slate-500 font-mono">INTERNET OUTAGE</div>
          </div>
        </div>
        <CloseBtn onClick={() => setSelectedOutage(null)} />
      </div>
      <div className="space-y-0.5 mb-3">
        <InfoRow label="Severity"     value={o.severity.toUpperCase()} color={sc} />
        <InfoRow label="Country"      value={o.country} />
        <InfoRow label="Affected ASNs" value={o.affectedAsns}          color="#ff3b3b" />
        <InfoRow label="Duration"     value={duration}                  color="#ffb800" />
        <InfoRow label="Status"       value={o.active ? "ACTIVE" : "RESOLVED"} color={o.active ? sc : "#00ff88"} />
      </div>
      <div className="px-3 py-2 rounded-lg" style={{ background:sc+"11", border:`1px solid ${sc}33` }}>
        <p className="text-[10px] font-mono text-slate-400 leading-relaxed">{o.description}</p>
      </div>
      {o.active && (
        <div className="mt-3 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background:sc, animation:"blink 1s step-end infinite" }} />
          <span className="text-[9px] font-mono" style={{ color:sc }}>MONITORING ACTIVE</span>
        </div>
      )}
    </div>
  );
}

// ── 📡 Cell Tower ─────────────────────────────────────────────────────────────
export function CellTowerInfoCard() {
  const { selectedTower, setSelectedTower } = useTelecomView();
  if (!selectedTower) return null;
  const t = selectedTower;
  const tc = ({ "5G":"#00ff88", "5G-mmWave":"#00ffcc", "4G":"#00f5ff", "3G":"#ffb800", "2G":"#888888" })[t.technology] || "#00f5ff";
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-64"
      style={{ animation:"slideIn 0.3s ease-out", border:`1px solid ${tc}44` }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">📡</span>
          <div>
            <div className="text-xs font-mono font-bold" style={{ color:tc }}>{t.technology} TOWER</div>
            <div className="text-[9px] text-slate-500 font-mono">{t.operator}</div>
          </div>
        </div>
        <CloseBtn onClick={() => setSelectedTower(null)} />
      </div>
      <div className="space-y-0.5">
        <InfoRow label="Technology"  value={t.technology}                            color={tc} />
        <InfoRow label="Operator"    value={t.operator} />
        <InfoRow label="MCC / MNC"   value={`${t.mcc} / ${String(t.mnc).padStart(3,"0")}`} />
        <InfoRow label="Range"       value={`${Math.round(t.range)} m`} />
        <InfoRow label="Band"        value={t.frequencyBand} />
        <InfoRow label="Coordinates" value={`${t.lat.toFixed(4)}, ${t.lng.toFixed(4)}`} />
      </div>
    </div>
  );
}
