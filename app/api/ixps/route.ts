import { NextResponse } from "next/server";
import { IXP_DATA } from "@/lib/ixpData";
export const runtime = "nodejs";
export async function GET() {
  return NextResponse.json({ ixps: IXP_DATA, total: IXP_DATA.length });
}