import { NextResponse } from "next/server";
import { getStarlinkPositions } from "@/lib/starlink";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getStarlinkPositions();
  // Positions move ~7.5 km/s; a short CDN cache keeps the function cold-path cheap
  return NextResponse.json(data, {
    headers: { "Cache-Control": "public, s-maxage=20, stale-while-revalidate=40" },
  });
}
