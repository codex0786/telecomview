import { NextResponse } from "next/server";
export const runtime = "nodejs";
export async function GET() {
  try {
    const res = await fetch("https://celestrak.org/SOCRATES/query.php?CATALOG=starlink&FORMAT=json", {
      next: { revalidate: 300 }
    });
    if (!res.ok) throw new Error("TLE fetch failed");
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ satellites: [], error: "Starlink TLE unavailable" });
  }
}