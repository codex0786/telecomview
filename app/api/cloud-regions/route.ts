import { NextResponse } from "next/server";
import { CLOUD_REGIONS } from "@/lib/cloudData";
export const runtime = "nodejs";
export async function GET() {
  return NextResponse.json({ regions: CLOUD_REGIONS, total: CLOUD_REGIONS.length });
}