import type { SubmarineCable, FiberRoute } from "./types";

export const CABLE_STATUS_COLORS: Record<string, string> = {
  active:   "#00f5ff",
  planned:  "#ffffff",
  retired:  "#555555",
  repair:   "#ffb800",
};

export const SUBMARINE_CABLES: SubmarineCable[] = [
  { id:"marea",      name:"MAREA",        color:"#a855f7", owners:["Microsoft","Facebook","Telxius"],
    capacityTbps:200, lengthKm:6600,  yearReady:2017, status:"active",
    landingPoints:[{id:"m1",name:"Virginia Beach",lat:36.85,lng:-75.98,country:"USA"},{id:"m2",name:"Bilbao",lat:43.36,lng:-3.01,country:"Spain"}],
    coordinates:[[-75.98,36.85],[-40,42],[-10,44],[-3.01,43.36]] },

  { id:"dunant",     name:"Dunant",       color:"#ff4dff", owners:["Google"],
    capacityTbps:250, lengthKm:6400,  yearReady:2021, status:"active",
    landingPoints:[{id:"d1",name:"Virginia Beach",lat:36.85,lng:-75.98,country:"USA"},{id:"d2",name:"Saint-Hilaire",lat:46.72,lng:-1.93,country:"France"}],
    coordinates:[[-75.98,36.85],[-40,42],[-10,45],[-1.93,46.72]] },

  { id:"2africa",    name:"2Africa",      color:"#ff6600", owners:["Meta","MTN","Orange"],
    capacityTbps:180, lengthKm:45000, yearReady:2023, status:"active",
    landingPoints:[{id:"2a1",name:"Lagos",lat:6.45,lng:3.40,country:"Nigeria"},{id:"2a2",name:"Mombasa",lat:-4.05,lng:39.67,country:"Kenya"},{id:"2a3",name:"Cape Town",lat:-33.92,lng:18.42,country:"S.Africa"},{id:"2a4",name:"Marseille",lat:43.29,lng:5.38,country:"France"}],
    coordinates:[[3.40,6.45],[18.42,-33.92],[39.67,-4.05],[32.54,29.97],[5.38,43.29]] },

  { id:"echo",       name:"Echo",         color:"#00eeff", owners:["Google","Meta"],
    capacityTbps:192, lengthKm:12000, yearReady:2023, status:"active",
    landingPoints:[{id:"e1",name:"Los Angeles",lat:33.74,lng:-118.41,country:"USA"},{id:"e2",name:"Guam",lat:13.44,lng:144.79,country:"USA"},{id:"e3",name:"Singapore",lat:1.28,lng:103.78,country:"Singapore"}],
    coordinates:[[-118.41,33.74],[-150,30],[144.79,13.44],[103.78,1.28]] },

  { id:"apricot",    name:"APRICOT",      color:"#aaff00", owners:["Google","Meta","SoftBank"],
    capacityTbps:190, lengthKm:12000, yearReady:2024, status:"active",
    landingPoints:[{id:"ap1",name:"Tokyo",lat:35.68,lng:139.69,country:"Japan"},{id:"ap2",name:"Singapore",lat:1.28,lng:103.78,country:"Singapore"}],
    coordinates:[[139.69,35.68],[144.79,13.44],[103.78,1.28]] },

  { id:"sea-me-we-3",name:"SEA-ME-WE 3",  color:"#00f5ff", owners:["Orange","SingTel","Telstra"],
    capacityTbps:0.96, lengthKm:39000, yearReady:1999, status:"active",
    landingPoints:[{id:"s1",name:"Marseille",lat:43.29,lng:5.38,country:"France"},{id:"s2",name:"Mumbai",lat:18.93,lng:72.83,country:"India"},{id:"s3",name:"Singapore",lat:1.28,lng:103.78,country:"Singapore"}],
    coordinates:[[5.38,43.29],[18,39],[29,31],[55,25],[72.83,18.93],[80,10],[103.78,1.28]] },

  { id:"tat-14",     name:"TAT-14",       color:"#ffb800", owners:["AT&T","Deutsche Telekom","BT"],
    capacityTbps:3.2,  lengthKm:15428, yearReady:2001, status:"active",
    landingPoints:[{id:"t1",name:"Tuckerton NJ",lat:39.60,lng:-74.34,country:"USA"},{id:"t2",name:"Bude",lat:50.82,lng:-4.54,country:"UK"}],
    coordinates:[[-74.34,39.60],[-40,40],[-10,47],[-4.54,50.82]] },

  { id:"apcn-2",     name:"APCN-2",       color:"#00ff88", owners:["NTT","SingTel","PCCW"],
    capacityTbps:0.64, lengthKm:19000, yearReady:2001, status:"active",
    landingPoints:[{id:"a1",name:"Chikura",lat:35.00,lng:140.07,country:"Japan"},{id:"a2",name:"Hong Kong",lat:22.27,lng:114.17,country:"HK"},{id:"a3",name:"Singapore",lat:1.32,lng:103.64,country:"Singapore"}],
    coordinates:[[140.07,35.00],[129.07,35.18],[114.17,22.27],[103.64,1.32]] },
];

export const FIBER_ROUTES: FiberRoute[] = [
  { id:"att",     name:"AT&T Backbone",        operator:"AT&T",              tier:1, capacityTbps:400, color:"#ff9900",
    coordinates:[[-74.01,40.71],[-80.19,25.77],[-87.63,41.88],[-96.80,32.78],[-118.24,34.05],[-122.33,47.61]] },
  { id:"lumen",   name:"Lumen Backbone",        operator:"Lumen",             tier:1, capacityTbps:200, color:"#ff4dff",
    coordinates:[[-77.03,38.90],[-83.04,42.33],[-87.63,41.88],[-104.98,39.74],[-122.33,47.61]] },
  { id:"verizon", name:"Verizon Backbone",       operator:"Verizon",           tier:1, capacityTbps:300, color:"#00f5ff",
    coordinates:[[-74.01,40.71],[-77.03,38.90],[-84.39,33.75],[-90.07,29.95],[-97.74,30.27],[-118.24,34.05]] },
  { id:"dt",      name:"Deutsche Telekom",       operator:"Deutsche Telekom",  tier:1, capacityTbps:300, color:"#f48120",
    coordinates:[[8.68,50.11],[9.99,53.55],[13.40,52.52],[16.37,48.21],[19.04,47.50],[23.72,37.98]] },
  { id:"telia",   name:"Telia Carrier",          operator:"Telia",             tier:1, capacityTbps:200, color:"#a855f7",
    coordinates:[[18.07,59.33],[24.94,60.17],[25.27,54.69],[23.32,42.70],[28.98,41.01],[37.62,55.76]] },
  { id:"ntt",     name:"NTT Communications",     operator:"NTT",               tier:1, capacityTbps:250, color:"#00ff88",
    coordinates:[[139.69,35.68],[135.50,34.69],[130.40,33.59],[126.98,37.57],[121.47,31.22]] },
  { id:"tata",    name:"Tata Communications",    operator:"Tata",              tier:2, capacityTbps:180, color:"#aaff00",
    coordinates:[[72.88,19.07],[77.59,12.97],[80.28,13.08],[88.36,22.57],[90.41,23.72]] },
  { id:"singtel", name:"SingTel Regional",       operator:"SingTel",           tier:2, capacityTbps:120, color:"#ffb800",
    coordinates:[[103.82,1.35],[106.83,10.82],[100.52,13.76],[114.17,22.32],[121.47,31.22]] },
];
