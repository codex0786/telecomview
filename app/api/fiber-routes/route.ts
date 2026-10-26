import { NextResponse } from "next/server";
import { FIBER_ROUTES } from "@/lib/cableData";
export const runtime = "nodejs";
export async function GET() {
  return NextResponse.json({ routes: FIBER_ROUTES, total: FIBER_ROUTES.length });
}
