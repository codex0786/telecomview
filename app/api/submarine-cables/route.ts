import { NextResponse } from "next/server";
import { SUBMARINE_CABLES } from "@/lib/cableData";
export const runtime = "nodejs";
export async function GET() {
  return NextResponse.json({ cables: SUBMARINE_CABLES, total: SUBMARINE_CABLES.length });
}