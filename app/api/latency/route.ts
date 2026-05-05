import { NextResponse } from "next/server";
import type { LatencyProbe } from "@/lib/types";

const PROBES: LatencyProbe[] = [
  { id:"p1",  lat:40.71,  lng:-74.01, country:"United States",  latencyMs:12,  color:"#00ff88" },
  { id:"p2",  lat:51.51,  lng:-0.13,  country:"United Kingdom", latencyMs:18,  color:"#00ff88" },
  { id:"p3",  lat:50.11,  lng:8.68,   country:"Germany",        latencyMs:15,  color:"#00ff88" },
  { id:"p4",  lat:35.68,  lng:139.69, country:"Japan",          latencyMs:22,  color:"#00ff88" },
  { id:"p5",  lat:1.35,   lng:103.82, country:"Singapore",      latencyMs:25,  color:"#00ff88" },
  { id:"p6",  lat:19.07,  lng:72.88,  country:"India",          latencyMs:68,  color:"#ffb800" },
  { id:"p7",  lat:-23.55, lng:-46.63, country:"Brazil",         latencyMs:95,  color:"#ffb800" },
  { id:"p8",  lat:-33.87, lng:151.21, country:"Australia",      latencyMs:42,  color:"#00ff88" },
  { id:"p9",  lat:-26.20, lng:28.04,  country:"South Africa",   latencyMs:145, color:"#ff6600" },
];

export async function GET() {
  // Add ±5ms jitter to simulate live data
  const live = PROBES.map(p => ({
    ...p,
    latencyMs: Math.max(1, p.latencyMs + Math.round(Math.random() * 10 - 5)),
  }));
  return NextResponse.json({ probes: live });
}
