import { NextResponse } from "next/server";
import type { BGPAlert } from "@/lib/types";

export const runtime = "nodejs";

const ALERTS: BGPAlert[] = [
  { id:"bgp-1", type:"hijack",     asn:7018,  asnName:"AT&T",              prefix:"8.8.8.0/24",     description:"Possible BGP prefix hijack detected — unauthorized origin AS announcing Google prefixes", severity:"critical", timestamp:Date.now()-120000,  lat:38.90, lng:-77.03,   affectedCountries:["United States"],          color:"#ff0000" },
  { id:"bgp-2", type:"leak",       asn:15169, asnName:"Google LLC",         prefix:"216.58.0.0/16",  description:"Route leak via upstream AS3356 propagating Google prefixes globally",                    severity:"high",     timestamp:Date.now()-300000,  lat:37.42, lng:-122.08,  affectedCountries:["United States","Europe"], color:"#ff3b3b" },
  { id:"bgp-3", type:"withdrawal", asn:3320,  asnName:"Deutsche Telekom",   prefix:"62.128.0.0/16",  description:"Mass prefix withdrawal detected from DE-CIX backbone",                                   severity:"high",     timestamp:Date.now()-600000,  lat:50.11, lng:8.68,    affectedCountries:["Germany","EU"],           color:"#ff3b3b" },
  { id:"bgp-4", type:"anomaly",    asn:13335, asnName:"Cloudflare",         prefix:"104.16.0.0/12",  description:"Unusual anycast route update propagating across multiple IXPs",                          severity:"low",      timestamp:Date.now()-900000,  lat:37.41, lng:-122.08,  affectedCountries:[],                         color:"#00f5ff" },
  { id:"bgp-5", type:"hijack",     asn:45899, asnName:"VNPT-I-U Vietnam",   prefix:"14.160.0.0/11",  description:"Unauthorized origin AS announcing VNPT prefixes — possible hijack",                     severity:"high",     timestamp:Date.now()-1200000, lat:21.03, lng:105.83,  affectedCountries:["Vietnam","Thailand"],      color:"#ff3b3b" },
];

export async function GET() {
  return NextResponse.json({ alerts: ALERTS, total: ALERTS.length });
}
