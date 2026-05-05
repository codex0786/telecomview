import { NextResponse } from "next/server";
import type { NetworkOutage } from "@/lib/types";

const MOCK_OUTAGES: NetworkOutage[] = [
  { id:"out-1", region:"Ukraine",  country:"Ukraine",  countryCode:"UA", lat:50.45, lng:30.52,  severity:"critical", affectedAsns:3,  startTime:Date.now()-7200000,  description:"Multiple ISP outages detected",              source:"IODA", active:true,  color:"#ff3b3b" },
  { id:"out-2", region:"Myanmar",  country:"Myanmar",  countryCode:"MM", lat:16.87, lng:96.19,  severity:"major",    affectedAsns:2,  startTime:Date.now()-14400000, description:"Nationwide internet disruption detected",      source:"IODA", active:true,  color:"#ff6600" },
  { id:"out-3", region:"Iran",     country:"Iran",     countryCode:"IR", lat:35.69, lng:51.39,  severity:"major",    affectedAsns:3,  startTime:Date.now()-3600000,  description:"Significant traffic reduction — throttling",   source:"IODA", active:true,  color:"#ff6600" },
  { id:"out-4", region:"Pakistan", country:"Pakistan", countryCode:"PK", lat:33.72, lng:73.06,  severity:"minor",    affectedAsns:2,  startTime:Date.now()-1800000,  description:"Intermittent outages in major urban centers",  source:"IODA", active:true,  color:"#ffb800" },
];

export async function GET() {
  return NextResponse.json({ outages: MOCK_OUTAGES });
}
