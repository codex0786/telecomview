import { readFile } from "node:fs/promises";
import path from "node:path";
import { twoline2satrec, propagate, gstime, eciToGeodetic, degreesLat, degreesLong } from "satellite.js";
import type { SatRec } from "satellite.js";
import type { StarlinkSat } from "./types";

// CelesTrak publishes new elements every ~2h and returns 403 to clients that
// re-download sooner, so TLEs are cached in memory and only positions are
// recomputed per request. The bundled snapshot covers cold starts where
// CelesTrak refuses us (e.g. a shared Vercel egress IP fetched recently).
const SOURCES = [
  { name: "celestrak-gp",           url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=tle" },
  { name: "celestrak-supplemental", url: "https://celestrak.org/NORAD/elements/supplemental/sup-gp.php?FILE=starlink&FORMAT=tle" },
];
const TLE_TTL_MS   = 2 * 60 * 60 * 1000;
const RETRY_MS     = 10 * 60 * 1000;
const SNAPSHOT     = path.join(process.cwd(), "data", "starlink.tle");

interface SatRecord { id: string; name: string; satrec: SatRec; }
interface TleCache { sats: SatRecord[]; source: string; fetchedAt: number; }

let cache: TleCache | null = null;
let lastAttempt = 0;

function parseTle(text: string): SatRecord[] {
  const lines = text.split(/\r?\n/).map(l => l.trimEnd()).filter(Boolean);
  const out: SatRecord[] = [];
  for (let i = 0; i + 2 < lines.length; i++) {
    const [name, l1, l2] = [lines[i], lines[i + 1], lines[i + 2]];
    if (!l1?.startsWith("1 ") || !l2?.startsWith("2 ")) continue;
    const satrec = twoline2satrec(l1, l2);
    if (!satrec.error) out.push({ id: satrec.satnum.trim(), name: name.trim(), satrec });
    i += 2;
  }
  return out;
}

async function fetchRemote(): Promise<TleCache | null> {
  for (const src of SOURCES) {
    try {
      const res = await fetch(src.url, { cache: "no-store", signal: AbortSignal.timeout(15_000) });
      if (!res.ok) continue;
      const sats = parseTle(await res.text());
      if (sats.length > 100) return { sats, source: src.name, fetchedAt: Date.now() };
    } catch {
      // try the next source
    }
  }
  return null;
}

async function loadSnapshot(): Promise<TleCache | null> {
  try {
    const sats = parseTle(await readFile(SNAPSHOT, "utf8"));
    return sats.length ? { sats, source: "snapshot", fetchedAt: 0 } : null;
  } catch {
    return null;
  }
}

async function getTles(): Promise<TleCache | null> {
  const now = Date.now();
  const stale = !cache || cache.source === "snapshot" || now - cache.fetchedAt > TLE_TTL_MS;
  if (stale && now - lastAttempt > RETRY_MS) {
    lastAttempt = now;
    cache = (await fetchRemote()) ?? cache;
  }
  if (!cache) cache = await loadSnapshot();
  return cache;
}

export async function getStarlinkPositions(date = new Date()) {
  const tles = await getTles();
  if (!tles) return { satellites: [] as StarlinkSat[], total: 0, source: "none", error: "Starlink TLE unavailable" };

  const gmst = gstime(date);
  const round = (n: number, d: number) => Math.round(n * 10 ** d) / 10 ** d;
  const satellites: StarlinkSat[] = [];
  for (const { id, name, satrec } of tles.sats) {
    const pv = propagate(satrec, date);
    if (!pv || typeof pv.position !== "object") continue;
    const geo = eciToGeodetic(pv.position, gmst);
    // Skip decayed or diverged propagations
    if (!Number.isFinite(geo.height) || geo.height < 150 || geo.height > 2000) continue;
    satellites.push({
      id, name,
      lat: round(degreesLat(geo.latitude), 3),
      lng: round(degreesLong(geo.longitude), 3),
      altKm: round(geo.height, 1),
    });
  }
  return { satellites, total: satellites.length, source: tles.source, timestamp: date.getTime() };
}
