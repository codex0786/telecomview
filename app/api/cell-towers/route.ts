import { NextResponse } from "next/server";
import type { CellTower } from "@/lib/types";

export const runtime = "nodejs";

const TOWERS: CellTower[] = [
  { id:"t1", lat:40.71,  lng:-74.01, operator:"Verizon",     technology:"5G",    frequencyBand:"n77", heightM:30, country:"United States",  mcc:310, mnc:10,  range:500,  color:"#00ff88" },
  { id:"t2", lat:51.51,  lng:-0.13,  operator:"EE",          technology:"5G",    frequencyBand:"n78", heightM:25, country:"United Kingdom", mcc:234, mnc:30,  range:450,  color:"#00ff88" },
  { id:"t3", lat:50.11,  lng:8.68,   operator:"Telekom",     technology:"5G",    frequencyBand:"n78", heightM:28, country:"Germany",        mcc:262, mnc:1,   range:480,  color:"#00ff88" },
  { id:"t4", lat:35.68,  lng:139.69, operator:"NTT Docomo",  technology:"5G",    frequencyBand:"n77", heightM:30, country:"Japan",          mcc:440, mnc:10,  range:400,  color:"#00ff88" },
  { id:"t5", lat:1.35,   lng:103.82, operator:"Singtel",     technology:"5G",    frequencyBand:"n78", heightM:20, country:"Singapore",      mcc:525, mnc:5,   range:350,  color:"#00ff88" },
  { id:"t6", lat:19.07,  lng:72.88,  operator:"Jio",         technology:"4G",    frequencyBand:"B40", heightM:35, country:"India",          mcc:404, mnc:88,  range:800,  color:"#00f5ff" },
  { id:"t7", lat:-33.87, lng:151.21, operator:"Telstra",     technology:"5G",    frequencyBand:"n78", heightM:25, country:"Australia",      mcc:505, mnc:1,   range:500,  color:"#00ff88" },
  { id:"t8", lat:48.86,  lng:2.35,   operator:"Orange",      technology:"4G",    frequencyBand:"B7",  heightM:30, country:"France",         mcc:208, mnc:1,   range:700,  color:"#00f5ff" },
  { id:"t9", lat:37.57,  lng:126.98, operator:"SK Telecom",  technology:"5G",    frequencyBand:"n78", heightM:28, country:"South Korea",    mcc:450, mnc:5,   range:400,  color:"#00ff88" },
  { id:"t10",lat:55.75,  lng:37.62,  operator:"MTS",         technology:"4G",    frequencyBand:"B20", heightM:40, country:"Russia",         mcc:250, mnc:1,   range:900,  color:"#00f5ff" },
];

export async function GET() {
  return NextResponse.json({ towers: TOWERS, total: TOWERS.length });
}
