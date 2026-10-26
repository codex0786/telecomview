import { NextResponse } from "next/server";
import type { BGPAlert } from "@/lib/types";
import { BGP_POOL } from "@/lib/bgpData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Simulated live feed: a fresh random subset of the pool on every request
export async function GET() {
  const now = Date.now();
  const count = 3 + Math.floor(Math.random() * 5);
  const alerts: BGPAlert[] = [...BGP_POOL]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((t, i) => ({ ...t, id: `bgp-${now}-${i}`, timestamp: now - Math.floor(Math.random() * 3_600_000) }))
    .sort((a, b) => b.timestamp - a.timestamp);
  return NextResponse.json({ alerts, total: alerts.length });
}
