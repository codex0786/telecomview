module.exports = {

"[project]/lib/cableData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CABLE_STATUS_COLORS": (()=>CABLE_STATUS_COLORS),
    "FIBER_ROUTES": (()=>FIBER_ROUTES),
    "SUBMARINE_CABLES": (()=>SUBMARINE_CABLES)
});
const CABLE_STATUS_COLORS = {
    active: "#00f5ff",
    planned: "#ffffff",
    retired: "#555555",
    repair: "#ffb800"
};
const SUBMARINE_CABLES = [
    {
        id: "marea",
        name: "MAREA",
        color: "#a855f7",
        owners: [
            "Microsoft",
            "Facebook",
            "Telxius"
        ],
        capacityTbps: 200,
        lengthKm: 6600,
        yearReady: 2017,
        status: "active",
        landingPoints: [
            {
                id: "m1",
                name: "Virginia Beach",
                lat: 36.85,
                lng: -75.98,
                country: "USA"
            },
            {
                id: "m2",
                name: "Bilbao",
                lat: 43.36,
                lng: -3.01,
                country: "Spain"
            }
        ],
        coordinates: [
            [
                -75.98,
                36.85
            ],
            [
                -40,
                42
            ],
            [
                -10,
                44
            ],
            [
                -3.01,
                43.36
            ]
        ]
    },
    {
        id: "dunant",
        name: "Dunant",
        color: "#ff4dff",
        owners: [
            "Google"
        ],
        capacityTbps: 250,
        lengthKm: 6400,
        yearReady: 2021,
        status: "active",
        landingPoints: [
            {
                id: "d1",
                name: "Virginia Beach",
                lat: 36.85,
                lng: -75.98,
                country: "USA"
            },
            {
                id: "d2",
                name: "Saint-Hilaire",
                lat: 46.72,
                lng: -1.93,
                country: "France"
            }
        ],
        coordinates: [
            [
                -75.98,
                36.85
            ],
            [
                -40,
                42
            ],
            [
                -10,
                45
            ],
            [
                -1.93,
                46.72
            ]
        ]
    },
    {
        id: "2africa",
        name: "2Africa",
        color: "#ff6600",
        owners: [
            "Meta",
            "MTN",
            "Orange"
        ],
        capacityTbps: 180,
        lengthKm: 45000,
        yearReady: 2023,
        status: "active",
        landingPoints: [
            {
                id: "2a1",
                name: "Lagos",
                lat: 6.45,
                lng: 3.40,
                country: "Nigeria"
            },
            {
                id: "2a2",
                name: "Mombasa",
                lat: -4.05,
                lng: 39.67,
                country: "Kenya"
            },
            {
                id: "2a3",
                name: "Cape Town",
                lat: -33.92,
                lng: 18.42,
                country: "S.Africa"
            },
            {
                id: "2a4",
                name: "Marseille",
                lat: 43.29,
                lng: 5.38,
                country: "France"
            }
        ],
        coordinates: [
            [
                3.40,
                6.45
            ],
            [
                18.42,
                -33.92
            ],
            [
                39.67,
                -4.05
            ],
            [
                32.54,
                29.97
            ],
            [
                5.38,
                43.29
            ]
        ]
    },
    {
        id: "echo",
        name: "Echo",
        color: "#00eeff",
        owners: [
            "Google",
            "Meta"
        ],
        capacityTbps: 192,
        lengthKm: 12000,
        yearReady: 2023,
        status: "active",
        landingPoints: [
            {
                id: "e1",
                name: "Los Angeles",
                lat: 33.74,
                lng: -118.41,
                country: "USA"
            },
            {
                id: "e2",
                name: "Guam",
                lat: 13.44,
                lng: 144.79,
                country: "USA"
            },
            {
                id: "e3",
                name: "Singapore",
                lat: 1.28,
                lng: 103.78,
                country: "Singapore"
            }
        ],
        coordinates: [
            [
                -118.41,
                33.74
            ],
            [
                -150,
                30
            ],
            [
                144.79,
                13.44
            ],
            [
                103.78,
                1.28
            ]
        ]
    },
    {
        id: "apricot",
        name: "APRICOT",
        color: "#aaff00",
        owners: [
            "Google",
            "Meta",
            "SoftBank"
        ],
        capacityTbps: 190,
        lengthKm: 12000,
        yearReady: 2024,
        status: "active",
        landingPoints: [
            {
                id: "ap1",
                name: "Tokyo",
                lat: 35.68,
                lng: 139.69,
                country: "Japan"
            },
            {
                id: "ap2",
                name: "Singapore",
                lat: 1.28,
                lng: 103.78,
                country: "Singapore"
            }
        ],
        coordinates: [
            [
                139.69,
                35.68
            ],
            [
                144.79,
                13.44
            ],
            [
                103.78,
                1.28
            ]
        ]
    },
    {
        id: "sea-me-we-3",
        name: "SEA-ME-WE 3",
        color: "#00f5ff",
        owners: [
            "Orange",
            "SingTel",
            "Telstra"
        ],
        capacityTbps: 0.96,
        lengthKm: 39000,
        yearReady: 1999,
        status: "active",
        landingPoints: [
            {
                id: "s1",
                name: "Marseille",
                lat: 43.29,
                lng: 5.38,
                country: "France"
            },
            {
                id: "s2",
                name: "Mumbai",
                lat: 18.93,
                lng: 72.83,
                country: "India"
            },
            {
                id: "s3",
                name: "Singapore",
                lat: 1.28,
                lng: 103.78,
                country: "Singapore"
            }
        ],
        coordinates: [
            [
                5.38,
                43.29
            ],
            [
                18,
                39
            ],
            [
                29,
                31
            ],
            [
                55,
                25
            ],
            [
                72.83,
                18.93
            ],
            [
                80,
                10
            ],
            [
                103.78,
                1.28
            ]
        ]
    },
    {
        id: "tat-14",
        name: "TAT-14",
        color: "#ffb800",
        owners: [
            "AT&T",
            "Deutsche Telekom",
            "BT"
        ],
        capacityTbps: 3.2,
        lengthKm: 15428,
        yearReady: 2001,
        status: "active",
        landingPoints: [
            {
                id: "t1",
                name: "Tuckerton NJ",
                lat: 39.60,
                lng: -74.34,
                country: "USA"
            },
            {
                id: "t2",
                name: "Bude",
                lat: 50.82,
                lng: -4.54,
                country: "UK"
            }
        ],
        coordinates: [
            [
                -74.34,
                39.60
            ],
            [
                -40,
                40
            ],
            [
                -10,
                47
            ],
            [
                -4.54,
                50.82
            ]
        ]
    },
    {
        id: "apcn-2",
        name: "APCN-2",
        color: "#00ff88",
        owners: [
            "NTT",
            "SingTel",
            "PCCW"
        ],
        capacityTbps: 0.64,
        lengthKm: 19000,
        yearReady: 2001,
        status: "active",
        landingPoints: [
            {
                id: "a1",
                name: "Chikura",
                lat: 35.00,
                lng: 140.07,
                country: "Japan"
            },
            {
                id: "a2",
                name: "Hong Kong",
                lat: 22.27,
                lng: 114.17,
                country: "HK"
            },
            {
                id: "a3",
                name: "Singapore",
                lat: 1.32,
                lng: 103.64,
                country: "Singapore"
            }
        ],
        coordinates: [
            [
                140.07,
                35.00
            ],
            [
                129.07,
                35.18
            ],
            [
                114.17,
                22.27
            ],
            [
                103.64,
                1.32
            ]
        ]
    }
];
const FIBER_ROUTES = [
    {
        id: "att",
        name: "AT&T Backbone",
        operator: "AT&T",
        tier: 1,
        capacityTbps: 400,
        color: "#ff9900",
        coordinates: [
            [
                -74.01,
                40.71
            ],
            [
                -80.19,
                25.77
            ],
            [
                -87.63,
                41.88
            ],
            [
                -96.80,
                32.78
            ],
            [
                -118.24,
                34.05
            ],
            [
                -122.33,
                47.61
            ]
        ]
    },
    {
        id: "lumen",
        name: "Lumen Backbone",
        operator: "Lumen",
        tier: 1,
        capacityTbps: 200,
        color: "#ff4dff",
        coordinates: [
            [
                -77.03,
                38.90
            ],
            [
                -83.04,
                42.33
            ],
            [
                -87.63,
                41.88
            ],
            [
                -104.98,
                39.74
            ],
            [
                -122.33,
                47.61
            ]
        ]
    },
    {
        id: "verizon",
        name: "Verizon Backbone",
        operator: "Verizon",
        tier: 1,
        capacityTbps: 300,
        color: "#00f5ff",
        coordinates: [
            [
                -74.01,
                40.71
            ],
            [
                -77.03,
                38.90
            ],
            [
                -84.39,
                33.75
            ],
            [
                -90.07,
                29.95
            ],
            [
                -97.74,
                30.27
            ],
            [
                -118.24,
                34.05
            ]
        ]
    },
    {
        id: "dt",
        name: "Deutsche Telekom",
        operator: "Deutsche Telekom",
        tier: 1,
        capacityTbps: 300,
        color: "#f48120",
        coordinates: [
            [
                8.68,
                50.11
            ],
            [
                9.99,
                53.55
            ],
            [
                13.40,
                52.52
            ],
            [
                16.37,
                48.21
            ],
            [
                19.04,
                47.50
            ],
            [
                23.72,
                37.98
            ]
        ]
    },
    {
        id: "telia",
        name: "Telia Carrier",
        operator: "Telia",
        tier: 1,
        capacityTbps: 200,
        color: "#a855f7",
        coordinates: [
            [
                18.07,
                59.33
            ],
            [
                24.94,
                60.17
            ],
            [
                25.27,
                54.69
            ],
            [
                23.32,
                42.70
            ],
            [
                28.98,
                41.01
            ],
            [
                37.62,
                55.76
            ]
        ]
    },
    {
        id: "ntt",
        name: "NTT Communications",
        operator: "NTT",
        tier: 1,
        capacityTbps: 250,
        color: "#00ff88",
        coordinates: [
            [
                139.69,
                35.68
            ],
            [
                135.50,
                34.69
            ],
            [
                130.40,
                33.59
            ],
            [
                126.98,
                37.57
            ],
            [
                121.47,
                31.22
            ]
        ]
    },
    {
        id: "tata",
        name: "Tata Communications",
        operator: "Tata",
        tier: 2,
        capacityTbps: 180,
        color: "#aaff00",
        coordinates: [
            [
                72.88,
                19.07
            ],
            [
                77.59,
                12.97
            ],
            [
                80.28,
                13.08
            ],
            [
                88.36,
                22.57
            ],
            [
                90.41,
                23.72
            ]
        ]
    },
    {
        id: "singtel",
        name: "SingTel Regional",
        operator: "SingTel",
        tier: 2,
        capacityTbps: 120,
        color: "#ffb800",
        coordinates: [
            [
                103.82,
                1.35
            ],
            [
                106.83,
                10.82
            ],
            [
                100.52,
                13.76
            ],
            [
                114.17,
                22.32
            ],
            [
                121.47,
                31.22
            ]
        ]
    }
];
}}),
"[project]/lib/networkData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IXP_DATA": (()=>IXP_DATA)
});
const IXP_DATA = [
    {
        id: 1,
        name: "DE-CIX Frankfurt",
        shortName: "DE-CIX",
        city: "Frankfurt",
        country: "Germany",
        lat: 50.11,
        lng: 8.68,
        trafficGbps: 14200,
        memberCount: 1000,
        networks: [
            "Deutsche Telekom",
            "Cogent",
            "Lumen",
            "Telia"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://de-cix.net"
    },
    {
        id: 2,
        name: "AMS-IX",
        shortName: "AMS-IX",
        city: "Amsterdam",
        country: "Netherlands",
        lat: 52.37,
        lng: 4.90,
        trafficGbps: 11000,
        memberCount: 950,
        networks: [
            "NTT",
            "GTT",
            "Zayo",
            "Cogent",
            "KPN"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://ams-ix.net"
    },
    {
        id: 3,
        name: "LINX",
        shortName: "LINX",
        city: "London",
        country: "UK",
        lat: 51.51,
        lng: -0.13,
        trafficGbps: 7800,
        memberCount: 880,
        networks: [
            "BT",
            "Virgin",
            "Sky",
            "TalkTalk",
            "Vodafone"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://linx.net"
    },
    {
        id: 4,
        name: "NYIIX",
        shortName: "NYIIX",
        city: "New York",
        country: "USA",
        lat: 40.71,
        lng: -74.01,
        trafficGbps: 4200,
        memberCount: 310,
        networks: [
            "Verizon",
            "Comcast",
            "AT&T",
            "Sprint"
        ],
        peeringPolicy: "selective",
        status: "active",
        website: "https://nyiix.net"
    },
    {
        id: 5,
        name: "SIX",
        shortName: "SIX",
        city: "Seattle",
        country: "USA",
        lat: 47.61,
        lng: -122.33,
        trafficGbps: 1800,
        memberCount: 270,
        networks: [
            "Comcast",
            "CenturyLink",
            "Zayo"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://seattleix.net"
    },
    {
        id: 6,
        name: "Equinix San Jose",
        shortName: "SJC-IX",
        city: "San Jose",
        country: "USA",
        lat: 37.34,
        lng: -121.89,
        trafficGbps: 3500,
        memberCount: 420,
        networks: [
            "Comcast",
            "AT&T",
            "NTT",
            "Level3"
        ],
        peeringPolicy: "selective",
        status: "active",
        website: "https://equinix.com"
    },
    {
        id: 7,
        name: "JPIX",
        shortName: "JPIX",
        city: "Tokyo",
        country: "Japan",
        lat: 35.68,
        lng: 139.65,
        trafficGbps: 6200,
        memberCount: 220,
        networks: [
            "NTT",
            "KDDI",
            "SoftBank",
            "IIJ"
        ],
        peeringPolicy: "selective",
        status: "active",
        website: "https://jpix.ad.jp"
    },
    {
        id: 8,
        name: "SGIX",
        shortName: "SGIX",
        city: "Singapore",
        country: "Singapore",
        lat: 1.35,
        lng: 103.82,
        trafficGbps: 2800,
        memberCount: 320,
        networks: [
            "SingTel",
            "StarHub",
            "M1",
            "Starhub"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://sgix.sg"
    },
    {
        id: 9,
        name: "Equinix Paris",
        shortName: "PAR-IX",
        city: "Paris",
        country: "France",
        lat: 48.86,
        lng: 2.35,
        trafficGbps: 4100,
        memberCount: 380,
        networks: [
            "Orange",
            "Free",
            "Bouygues",
            "SFR"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://equinix.com"
    },
    {
        id: 10,
        name: "MSK-IX",
        shortName: "MSK-IX",
        city: "Moscow",
        country: "Russia",
        lat: 55.76,
        lng: 37.62,
        trafficGbps: 5900,
        memberCount: 590,
        networks: [
            "Rostelecom",
            "MTS",
            "Beeline",
            "MegaFon"
        ],
        peeringPolicy: "selective",
        status: "active",
        website: "https://msk-ix.ru"
    },
    {
        id: 11,
        name: "HKIX",
        shortName: "HKIX",
        city: "Hong Kong",
        country: "Hong Kong",
        lat: 22.32,
        lng: 114.17,
        trafficGbps: 3200,
        memberCount: 280,
        networks: [
            "PCCW",
            "HGC",
            "i-cable",
            "Hutchison"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://hkix.net"
    },
    {
        id: 12,
        name: "TORIX",
        shortName: "TORIX",
        city: "Toronto",
        country: "Canada",
        lat: 43.65,
        lng: -79.38,
        trafficGbps: 1200,
        memberCount: 195,
        networks: [
            "Bell",
            "Rogers",
            "Telus",
            "Shaw"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://torix.ca"
    },
    {
        id: 13,
        name: "NAP Africa JB",
        shortName: "NAPJB",
        city: "Johannesburg",
        country: "South Africa",
        lat: -26.20,
        lng: 28.05,
        trafficGbps: 890,
        memberCount: 140,
        networks: [
            "Telkom",
            "MTN",
            "Vodacom",
            "Cell C"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://napafrica.net"
    },
    {
        id: 14,
        name: "IX.br São Paulo",
        shortName: "IX.br",
        city: "São Paulo",
        country: "Brazil",
        lat: -23.55,
        lng: -46.63,
        trafficGbps: 8400,
        memberCount: 2800,
        networks: [
            "Claro",
            "Vivo",
            "TIM",
            "NET"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://ix.br"
    },
    {
        id: 15,
        name: "KINX",
        shortName: "KINX",
        city: "Seoul",
        country: "South Korea",
        lat: 37.57,
        lng: 126.98,
        trafficGbps: 2100,
        memberCount: 185,
        networks: [
            "SK Telecom",
            "KT",
            "LG U+",
            "Sejong"
        ],
        peeringPolicy: "selective",
        status: "active",
        website: "https://kinx.net"
    },
    {
        id: 16,
        name: "DE-CIX Mumbai",
        shortName: "DE-CIX",
        city: "Mumbai",
        country: "India",
        lat: 19.08,
        lng: 72.88,
        trafficGbps: 1800,
        memberCount: 230,
        networks: [
            "Tata",
            "Airtel",
            "BSNL",
            "Reliance"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://de-cix.net/in/mumbai"
    },
    {
        id: 17,
        name: "SwissIX",
        shortName: "SwissIX",
        city: "Zurich",
        country: "Switzerland",
        lat: 47.38,
        lng: 8.54,
        trafficGbps: 980,
        memberCount: 160,
        networks: [
            "Swisscom",
            "Sunrise",
            "Init7",
            "Colt"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://swissix.ch"
    },
    {
        id: 18,
        name: "ESPANIX",
        shortName: "ESPANIX",
        city: "Madrid",
        country: "Spain",
        lat: 40.42,
        lng: -3.70,
        trafficGbps: 1200,
        memberCount: 145,
        networks: [
            "Telefonica",
            "Vodafone ES",
            "Orange ES",
            "MásMóvil"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://espanix.net"
    },
    {
        id: 19,
        name: "MIX-IT",
        shortName: "MIX-IT",
        city: "Milan",
        country: "Italy",
        lat: 45.47,
        lng: 9.19,
        trafficGbps: 1400,
        memberCount: 175,
        networks: [
            "Telecom Italia",
            "Vodafone IT",
            "Wind",
            "Fastweb"
        ],
        peeringPolicy: "open",
        status: "active",
        website: "https://mix-it.net"
    },
    {
        id: 20,
        name: "DE-CIX Dubai",
        shortName: "DE-CIX",
        city: "Dubai",
        country: "UAE",
        lat: 25.20,
        lng: 55.27,
        trafficGbps: 800,
        memberCount: 110,
        networks: [
            "Etisalat",
            "du",
            "Ooredoo"
        ],
        peeringPolicy: "selective",
        status: "active",
        website: "https://de-cix.net/ae/dubai"
    }
];
}}),
"[project]/lib/dataHooks.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useBGPAlertData": (()=>useBGPAlertData),
    "useCellTowerData": (()=>useCellTowerData),
    "useCloudRegionData": (()=>useCloudRegionData),
    "useFiberData": (()=>useFiberData),
    "useIXPData": (()=>useIXPData),
    "useLatencyData": (()=>useLatencyData),
    "useOutageData": (()=>useOutageData),
    "useSubmarineCableData": (()=>useSubmarineCableData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cableData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cableData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cloudData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$networkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/networkData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function useSubmarineCableData() {
    const { setCables, setTotalCables } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTelecomView"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCables(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cableData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUBMARINE_CABLES"]);
        setTotalCables(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cableData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUBMARINE_CABLES"].length);
    }, []); // eslint-disable-line
}
function useCloudRegionData() {
    const { setCloudRegions, setTotalRegions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTelecomView"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCloudRegions(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLOUD_REGIONS"]);
        setTotalRegions(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLOUD_REGIONS"].length);
    }, []); // eslint-disable-line
}
function useIXPData() {
    const { setIxps, setTotalIXPs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTelecomView"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIxps(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$networkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IXP_DATA"]);
        setTotalIXPs(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$networkData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IXP_DATA"].length);
    }, []); // eslint-disable-line
}
function useFiberData() {
    const { setFiberRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTelecomView"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setFiberRoutes(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cableData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIBER_ROUTES"]);
    }, []); // eslint-disable-line
}
// ── BGP Alerts (live simulation) ──────────────────────────────────────────────
const BGP_POOL = [
    {
        type: "hijack",
        asn: 45899,
        asnName: "VNPT-I-U Vietnam",
        prefix: "14.160.0.0/11",
        severity: "high",
        description: "Prefix hijack detected — unauthorized origin AS",
        lat: 21.03,
        lng: 105.83,
        affectedCountries: [
            "Vietnam",
            "Thailand"
        ],
        color: "#ff3b3b"
    },
    {
        type: "leak",
        asn: 7922,
        asnName: "Comcast",
        prefix: "8.8.8.0/24",
        severity: "medium",
        description: "Route leak from AS7922 propagating Google prefixes",
        lat: 39.95,
        lng: -75.17,
        affectedCountries: [
            "United States"
        ],
        color: "#ffb800"
    },
    {
        type: "withdrawal",
        asn: 3356,
        asnName: "Lumen Technologies",
        prefix: "4.0.0.0/9",
        severity: "low",
        description: "Mass BGP withdrawal from Lumen backbone",
        lat: 39.74,
        lng: -104.98,
        affectedCountries: [
            "United States",
            "Canada"
        ],
        color: "#00f5ff"
    },
    {
        type: "hijack",
        asn: 24940,
        asnName: "Hetzner Online",
        prefix: "85.10.0.0/16",
        severity: "critical",
        description: "CRITICAL: Hetzner prefix announced by unregistered AS",
        lat: 50.11,
        lng: 8.68,
        affectedCountries: [
            "Germany",
            "EU"
        ],
        color: "#ff0000"
    },
    {
        type: "anomaly",
        asn: 13335,
        asnName: "Cloudflare",
        prefix: "104.16.0.0/12",
        severity: "low",
        description: "Unusual route propagation from Cloudflare edge",
        lat: 37.41,
        lng: -122.08,
        affectedCountries: [],
        color: "#00ff88"
    },
    {
        type: "hijack",
        asn: 16509,
        asnName: "Amazon.com",
        prefix: "52.0.0.0/8",
        severity: "critical",
        description: "AWS prefix instability — possible route injection",
        lat: 38.91,
        lng: -77.04,
        affectedCountries: [
            "United States",
            "United Kingdom"
        ],
        color: "#ff0000"
    },
    {
        type: "leak",
        asn: 9498,
        asnName: "Bharti Airtel",
        prefix: "103.0.0.0/16",
        severity: "high",
        description: "Route leak from Airtel causing misdirection in South Asia",
        lat: 28.70,
        lng: 77.10,
        affectedCountries: [
            "India",
            "Pakistan",
            "Bangladesh"
        ],
        color: "#ff3b3b"
    },
    {
        type: "withdrawal",
        asn: 2914,
        asnName: "NTT America",
        prefix: "129.250.0.0/16",
        severity: "medium",
        description: "NTT backbone prefix withdrawn unexpectedly",
        lat: 40.71,
        lng: -74.01,
        affectedCountries: [
            "United States",
            "Japan"
        ],
        color: "#ffb800"
    },
    {
        type: "anomaly",
        asn: 20940,
        asnName: "Akamai Technologies",
        prefix: "23.0.0.0/8",
        severity: "low",
        description: "Akamai anycast route update detected globally",
        lat: 42.36,
        lng: -71.06,
        affectedCountries: [],
        color: "#00f5ff"
    },
    {
        type: "hijack",
        asn: 58453,
        asnName: "China Mobile International",
        prefix: "223.0.0.0/11",
        severity: "high",
        description: "Possible BGP hijack affecting Asia-Pacific routes",
        lat: 22.32,
        lng: 114.17,
        affectedCountries: [
            "Hong Kong",
            "Taiwan",
            "Singapore"
        ],
        color: "#ff3b3b"
    }
];
function useBGPAlertData() {
    const { setBgpAlerts, setTotalAlerts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTelecomView"])();
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const generate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const count = 3 + Math.floor(Math.random() * 5);
        const shuffled = [
            ...BGP_POOL
        ].sort(()=>Math.random() - 0.5).slice(0, count);
        const alerts = shuffled.map((t, i)=>({
                ...t,
                id: `bgp-${Date.now()}-${i}`,
                timestamp: Date.now() - Math.floor(Math.random() * 3_600_000)
            }));
        setBgpAlerts(alerts);
        setTotalAlerts(alerts.length);
    }, [
        setBgpAlerts,
        setTotalAlerts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        generate();
        intervalRef.current = setInterval(generate, 30_000);
        return ()=>{
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [
        generate
    ]);
}
// ── Outage Data (live simulation) ─────────────────────────────────────────────
const OUTAGE_POOL = [
    {
        region: "US East Coast",
        country: "United States",
        countryCode: "US",
        lat: 38.91,
        lng: -77.04,
        severity: "major",
        affectedAsns: 3,
        description: "Elevated packet loss across US East Coast ISPs",
        source: "IODA",
        active: true,
        color: "#ff3b3b"
    },
    {
        region: "Singapore",
        country: "Singapore",
        countryCode: "SG",
        lat: 1.35,
        lng: 103.82,
        severity: "minor",
        affectedAsns: 2,
        description: "Minor degradation at Singapore IXP",
        source: "RIPE",
        active: true,
        color: "#ffb800"
    },
    {
        region: "Germany",
        country: "Germany",
        countryCode: "DE",
        lat: 50.11,
        lng: 8.68,
        severity: "critical",
        affectedAsns: 5,
        description: "DE-CIX route instability detected",
        source: "IODA",
        active: true,
        color: "#ff0000"
    },
    {
        region: "São Paulo",
        country: "Brazil",
        countryCode: "BR",
        lat: -23.55,
        lng: -46.63,
        severity: "minor",
        affectedAsns: 2,
        description: "Intermittent outages São Paulo metro area",
        source: "IODA",
        active: true,
        color: "#ffb800"
    },
    {
        region: "UAE",
        country: "United Arab Emirates",
        countryCode: "AE",
        lat: 25.20,
        lng: 55.27,
        severity: "major",
        affectedAsns: 4,
        description: "Submarine cable fault affecting Middle East connectivity",
        source: "RIPE",
        active: true,
        color: "#ff3b3b"
    }
];
function useOutageData() {
    const { setOutages, setTotalOutages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTelecomView"])();
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const generate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const count = 2 + Math.floor(Math.random() * 3);
        const shuffled = [
            ...OUTAGE_POOL
        ].sort(()=>Math.random() - 0.5).slice(0, count);
        const outages = shuffled.map((t, i)=>({
                ...t,
                id: `outage-${Date.now()}-${i}`,
                startTime: Date.now() - Math.floor(Math.random() * 7_200_000)
            }));
        setOutages(outages);
        setTotalOutages(outages.length);
    }, [
        setOutages,
        setTotalOutages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        generate();
        intervalRef.current = setInterval(generate, 45_000);
        return ()=>{
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [
        generate
    ]);
}
// ── Cell Tower Data ───────────────────────────────────────────────────────────
const TOWER_COLORS = {
    "5G": "#00ff88",
    "5G-mmWave": "#00ffcc",
    "4G": "#00f5ff",
    "3G": "#ffb800",
    "2G": "#888888"
};
const OPERATORS = [
    "Verizon",
    "AT&T",
    "T-Mobile",
    "Vodafone",
    "Orange",
    "Deutsche Telekom",
    "SingTel",
    "Airtel",
    "Jio",
    "China Mobile"
];
const TECHS = [
    "5G",
    "5G-mmWave",
    "4G",
    "4G",
    "3G",
    "2G"
];
const BANDS = [
    "n78",
    "n258",
    "B7",
    "B20",
    "B3",
    "B8"
];
function useCellTowerData() {
    const { setCellTowers, setTotalTowers, cameraPosition, layers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTelecomView"])();
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mountedRef.current = true;
        return ()=>{
            mountedRef.current = false;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!layers.cellTowers) {
            setCellTowers([]);
            return;
        }
        const { lat, lng, alt } = cameraPosition;
        if (alt > 5_000_000) {
            setCellTowers([]);
            return;
        }
        const spread = Math.min(alt / 50_000, 30);
        const count = alt > 1_000_000 ? 80 : alt > 200_000 ? 200 : 400;
        const towers = Array.from({
            length: count
        }, (_, i)=>{
            const tech = TECHS[Math.floor(Math.random() * TECHS.length)];
            return {
                id: `t-${Math.round(lat * 10)}-${Math.round(lng * 10)}-${i}`,
                lat: lat + (Math.random() - 0.5) * spread,
                lng: lng + (Math.random() - 0.5) * spread,
                operator: OPERATORS[Math.floor(Math.random() * OPERATORS.length)],
                technology: tech,
                frequencyBand: BANDS[Math.floor(Math.random() * BANDS.length)],
                heightM: 20 + Math.floor(Math.random() * 80),
                country: "US",
                mcc: 310,
                mnc: Math.floor(Math.random() * 999),
                range: 200 + Math.random() * 2000,
                color: TOWER_COLORS[tech] || "#888888"
            };
        });
        if (mountedRef.current) {
            setCellTowers(towers);
            setTotalTowers(towers.length);
        }
    }, [
        cameraPosition.alt,
        cameraPosition.lat,
        cameraPosition.lng,
        layers.cellTowers
    ]); // eslint-disable-line
}
// ── Latency Probe Data ────────────────────────────────────────────────────────
const PROBE_LOCATIONS = [
    {
        lat: 40.71,
        lng: -74.01,
        country: "US"
    },
    {
        lat: 51.51,
        lng: -0.13,
        country: "GB"
    },
    {
        lat: 48.86,
        lng: 2.35,
        country: "FR"
    },
    {
        lat: 50.11,
        lng: 8.68,
        country: "DE"
    },
    {
        lat: 35.68,
        lng: 139.69,
        country: "JP"
    },
    {
        lat: 1.35,
        lng: 103.82,
        country: "SG"
    },
    {
        lat: 19.08,
        lng: 72.88,
        country: "IN"
    },
    {
        lat: -33.87,
        lng: 151.21,
        country: "AU"
    },
    {
        lat: -23.55,
        lng: -46.63,
        country: "BR"
    },
    {
        lat: 52.37,
        lng: 4.90,
        country: "NL"
    },
    {
        lat: 55.76,
        lng: 37.62,
        country: "RU"
    },
    {
        lat: 37.57,
        lng: 126.98,
        country: "KR"
    },
    {
        lat: 22.32,
        lng: 114.17,
        country: "HK"
    },
    {
        lat: 25.20,
        lng: 55.27,
        country: "AE"
    },
    {
        lat: -26.20,
        lng: 28.05,
        country: "ZA"
    },
    {
        lat: 43.65,
        lng: -79.38,
        country: "CA"
    },
    {
        lat: 41.01,
        lng: 28.98,
        country: "TR"
    },
    {
        lat: 59.33,
        lng: 18.07,
        country: "SE"
    }
];
function latencyColor(ms) {
    const t = Math.min(ms / 200, 1);
    const r = Math.round(t * 255), g = Math.round((1 - t) * 200 + 55);
    return `rgba(${r},${g},80,0.75)`;
}
function useLatencyData() {
    const { setLatencyProbes, layers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTelecomView"])();
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!layers.latencyHeatmap) {
            setLatencyProbes([]);
            return;
        }
        const generate = ()=>{
            const probes = PROBE_LOCATIONS.map((loc, i)=>{
                const ms = 5 + Math.random() * 180;
                return {
                    id: `probe-${i}`,
                    ...loc,
                    latencyMs: Math.round(ms),
                    color: latencyColor(ms)
                };
            });
            setLatencyProbes(probes);
        };
        generate();
        intervalRef.current = setInterval(generate, 15_000);
        return ()=>{
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [
        layers.latencyHeatmap
    ]); // eslint-disable-line
}
}}),
"[project]/components/GlobeViewer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dataHooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cloudData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cableData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cableData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Ion token — set via env or use the default provided
const TOKEN = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiN2IxOTNmZC1hNGJjLTQzZTYtODllOC1hMTgyMmJhMjA3MzgiLCJpZCI6NDAwMTk4LCJpYXQiOjE3NzI5NjU2NzV9.yJKZCIqA6hJtXo1KK5YRnlLXAhlRuAtoi5lDaJwfdJI") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNmQ1OGY5ZC05MzAzLTQ5MDYtYjE5OS04NTgwZTcxNzNlMGIiLCJpZCI6MjU5LCJpYXQiOjE1MjgwNTYzNjl9.LtjKVDMxaLFd2VQs4cYKFZ97EVTPF-JyMKKx1FkP1Z4";
// Ion base imagery asset provided by user
const ION_BASE_ASSET_ID = 3830186;
// Module-level entity registries (cleared on unmount)
const cableEntities = new Map();
const regionEntities = new Map();
const ixpEntities = new Map();
const bgpEntities = new Map();
const outageEntities = new Map();
const towerEntities = new Map();
const fiberEntities = new Map();
const latencyEntities = [];
// ── Icon generators ───────────────────────────────────────────────────────────
function createDCIcon(color, tier) {
    const size = tier === "pop" ? 28 : 40;
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const ctx = c.getContext("2d");
    const cx = size / 2, cy = size / 2, r = size / 2 - 3;
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = color + "44";
    ctx.beginPath();
    ctx.arc(cx, cy, r - 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(cx, cy, tier === "pop" ? 3 : 5, 0, Math.PI * 2);
    ctx.fill();
    if (tier === "region") {
        ctx.strokeStyle = color + "88";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx - r, cy);
        ctx.lineTo(cx + r, cy);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx, cy - r);
        ctx.lineTo(cx, cy + r);
        ctx.stroke();
    }
    return c;
}
function createIXPIcon(trafficGbps) {
    const size = Math.min(48, Math.max(20, Math.round(Math.sqrt(trafficGbps / 100) * 8)));
    const c = document.createElement("canvas");
    c.width = size * 2;
    c.height = size * 2;
    const ctx = c.getContext("2d");
    const cx = size, cy = size;
    ctx.shadowColor = "#a855f7";
    ctx.shadowBlur = 16;
    ctx.fillStyle = "#a855f744";
    ctx.strokeStyle = "#a855f7";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for(let i = 0; i < 6; i++){
        const angle = Math.PI / 3 * i - Math.PI / 6;
        const x = cx + (size - 3) * Math.cos(angle), y = cy + (size - 3) * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#a855f7";
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fill();
    return c;
}
function createBGPIcon(severity) {
    const colors = {
        critical: "#ff0000",
        high: "#ff3b3b",
        medium: "#ffb800",
        low: "#00f5ff"
    };
    const col = colors[severity] || "#ffb800";
    const c = document.createElement("canvas");
    c.width = 36;
    c.height = 36;
    const ctx = c.getContext("2d");
    ctx.shadowColor = col;
    ctx.shadowBlur = 14;
    ctx.fillStyle = col + "33";
    ctx.strokeStyle = col;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(18, 4);
    ctx.lineTo(33, 30);
    ctx.lineTo(3, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = col;
    ctx.font = "bold 14px monospace";
    ctx.textAlign = "center";
    ctx.fillText("!", 18, 24);
    return c;
}
function createOutageIcon(severity) {
    const colors = {
        critical: "#ff0000",
        major: "#ff3b3b",
        minor: "#ffb800"
    };
    const col = colors[severity] || "#ffb800";
    const c = document.createElement("canvas");
    c.width = 48;
    c.height = 48;
    const ctx = c.getContext("2d");
    [
        20,
        14,
        8
    ].forEach((r, i)=>{
        ctx.strokeStyle = col + (i === 0 ? "33" : i === 1 ? "66" : "aa");
        ctx.lineWidth = 2;
        ctx.shadowColor = col;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(24, 24, r, 0, Math.PI * 2);
        ctx.stroke();
    });
    ctx.fillStyle = col;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(24, 24, 4, 0, Math.PI * 2);
    ctx.fill();
    return c;
}
function createTowerIcon(technology) {
    const colors = {
        "5G": "#00ff88",
        "5G-mmWave": "#00ffcc",
        "4G": "#00f5ff",
        "3G": "#ffb800",
        "2G": "#888888"
    };
    const col = colors[technology] || "#888888";
    const c = document.createElement("canvas");
    c.width = 20;
    c.height = 20;
    const ctx = c.getContext("2d");
    ctx.shadowColor = col;
    ctx.shadowBlur = 6;
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(10, 10, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = col + "44";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(10, 10, 8, 0, Math.PI * 2);
    ctx.stroke();
    return c;
}
// ── Main Component ────────────────────────────────────────────────────────────
const GlobeViewer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((_props, ref)=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const clockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dayNightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        sat: null,
        night: null,
        contLabels: null,
        cityLabels: null
    });
    const { cables, layers, selectedCable, setSelectedCable, cloudRegions, selectedRegion, setSelectedRegion, ixps, selectedIXP, setSelectedIXP, bgpAlerts, setSelectedAlert, outages, setSelectedOutage, cellTowers, setSelectedTower, fiberRoutes, latencyProbes, setCameraPosition, setIsLoading, setHoverTooltip } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTelecomView"])();
    // Mount all data hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubmarineCableData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCloudRegionData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIXPData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFiberData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBGPAlertData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOutageData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCellTowerData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLatencyData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            flyTo: (lat, lng, alt = 2_000_000)=>{
                const v = viewerRef.current;
                if (!v || !window.Cesium) return;
                v.camera.flyTo({
                    destination: window.Cesium.Cartesian3.fromDegrees(lng, lat, alt),
                    orientation: {
                        heading: 0,
                        pitch: window.Cesium.Math.toRadians(-45),
                        roll: 0
                    },
                    duration: 2.0
                });
            },
            screenshot: async ()=>{
                const v = viewerRef.current;
                if (!v) return null;
                return new Promise((resolve)=>{
                    v.scene.postRender.addEventListener(function cap() {
                        v.scene.postRender.removeEventListener(cap);
                        try {
                            resolve(v.scene.canvas.toDataURL("image/png"));
                        } catch  {
                            resolve(null);
                        }
                    });
                    v.scene.requestRender();
                });
            },
            resetView: ()=>{
                const v = viewerRef.current;
                if (!v || !window.Cesium) return;
                v.camera.flyTo({
                    destination: window.Cesium.Cartesian3.fromDegrees(0, 20, 22_000_000),
                    orientation: {
                        heading: 0,
                        pitch: window.Cesium.Math.toRadians(-90),
                        roll: 0
                    },
                    duration: 2.5
                });
            },
            toggleDayNight: ()=>{
                const v = viewerRef.current;
                if (!v) return;
                dayNightRef.current = !dayNightRef.current;
                v.scene.globe.enableLighting = dayNightRef.current;
            }
        }));
    // ── Globe Initialisation ──────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInit.current || !containerRef.current) return;
        const boot = async ()=>{
            if (!window.Cesium) {
                setTimeout(boot, 200);
                return;
            }
            isInit.current = true;
            const C = window.Cesium;
            window.CESIUM_BASE_URL = "https://cesium.com/downloads/cesiumjs/releases/1.116/Build/Cesium/";
            C.Ion.defaultAccessToken = TOKEN;
            try {
                // ── Step 1: Ion base imagery provider (asset 3830186) ─────────────
                // Load this BEFORE creating the Viewer so we can pass it in directly.
                // This is the only reliable way to set a base layer in CesiumJS 1.116.
                let baseImageryProvider = null;
                try {
                    baseImageryProvider = await C.IonImageryProvider.fromAssetId(ION_BASE_ASSET_ID);
                } catch (e) {
                    console.warn("Ion base imagery (asset 3830186) failed, will use OSM fallback:", e);
                }
                // ── Step 2: Create Viewer with the Ion imagery as the base layer ──
                const viewer = new C.Viewer(containerRef.current, {
                    baseLayerPicker: false,
                    geocoder: false,
                    homeButton: false,
                    sceneModePicker: false,
                    navigationHelpButton: false,
                    animation: false,
                    timeline: false,
                    fullscreenButton: false,
                    infoBox: false,
                    selectionIndicator: false,
                    // Pass Ion imagery directly — CesiumJS 1.116 still accepts this in the constructor
                    ...baseImageryProvider ? {
                        imageryProvider: baseImageryProvider
                    } : {},
                    // EllipsoidTerrain first; swap in world terrain async below
                    terrainProvider: new C.EllipsoidTerrainProvider()
                });
                viewerRef.current = viewer;
                window.__cesiumViewer = viewer;
                // ── Step 3: OSM fallback if Ion imagery failed ────────────────────
                if (!baseImageryProvider) {
                    viewer.imageryLayers.removeAll();
                    viewer.imageryLayers.add(new C.ImageryLayer(new C.OpenStreetMapImageryProvider({
                        url: "https://tile.openstreetmap.org/",
                        credit: "© OpenStreetMap contributors",
                        maximumLevel: 19
                    }), {
                        brightness: 0.85,
                        contrast: 1.1,
                        saturation: 0.75
                    }));
                    console.info("Using OSM base layer — add Ion token to .env.local for satellite imagery");
                }
                imgRef.current.sat = viewer.imageryLayers.get(0);
                // ── Step 4: World terrain (async swap) ────────────────────────────
                if (C.createWorldTerrainAsync) {
                    C.createWorldTerrainAsync({
                        requestWaterMask: false,
                        requestVertexNormals: false
                    }).then((tp)=>{
                        if (!viewer.isDestroyed()) viewer.terrainProvider = tp;
                    }).catch(()=>{});
                }
                // ── Step 5: Night lights overlay (Ion asset 3) ────────────────────
                C.IonImageryProvider.fromAssetId(3).then((np)=>{
                    if (viewer.isDestroyed()) return;
                    const nightLayer = viewer.imageryLayers.add(new C.ImageryLayer(np, {
                        alpha: 0.0,
                        brightness: 2.5
                    }));
                    imgRef.current.night = nightLayer;
                }).catch(()=>{});
                // ── Step 6: Continent labels (high altitude, no token) ────────────
                const contLabels = viewer.imageryLayers.add(new C.ImageryLayer(new C.UrlTemplateImageryProvider({
                    url: "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",
                    credit: "© Esri",
                    minimumLevel: 0,
                    maximumLevel: 8
                }), {
                    alpha: 0.8
                }));
                imgRef.current.contLabels = contLabels;
                // ── Step 7: Dark city labels (zoomed in, no token) ────────────────
                const cityLabels = viewer.imageryLayers.add(new C.ImageryLayer(new C.UrlTemplateImageryProvider({
                    url: "https://basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png",
                    credit: "© CartoDB © OpenStreetMap",
                    minimumLevel: 3,
                    maximumLevel: 18
                }), {
                    alpha: 0.0
                }));
                imgRef.current.cityLabels = cityLabels;
                // ── Step 8: Globe visual settings ────────────────────────────────
                viewer.scene.globe.enableLighting = true;
                viewer.scene.globe.dynamicAtmosphereLighting = true;
                viewer.scene.globe.showGroundAtmosphere = true;
                viewer.scene.globe.depthTestAgainstTerrain = false;
                try {
                    viewer.scene.globe.atmosphereLightIntensity = 10;
                } catch (_e) {}
                viewer.scene.skyAtmosphere.hueShift = -0.97;
                viewer.scene.skyAtmosphere.saturationShift = 0.25;
                viewer.scene.skyAtmosphere.brightnessShift = -0.5;
                viewer.scene.fog.enabled = true;
                viewer.scene.fog.density = 0.00002;
                if (viewer.scene.msaaSamples !== undefined) viewer.scene.msaaSamples = 4;
                // Live clock sync
                viewer.clock.currentTime = C.JulianDate.fromDate(new Date());
                viewer.clock.shouldAnimate = true;
                clockRef.current = setInterval(()=>{
                    if (viewer && !viewer.isDestroyed()) viewer.clock.currentTime = C.JulianDate.fromDate(new Date());
                }, 1000);
                // Camera change → labels + position
                viewer.camera.changed.addEventListener(()=>{
                    const pos = viewer.camera.positionCartographic;
                    const altM = Math.round(pos.height);
                    setCameraPosition({
                        lat: C.Math.toDegrees(pos.latitude),
                        lng: C.Math.toDegrees(pos.longitude),
                        alt: altM
                    });
                    const cl = imgRef.current.contLabels;
                    const cy2 = imgRef.current.cityLabels;
                    if (cl) cl.alpha = altM > 22_000_000 ? 0 : altM > 3_000_000 ? 0.85 : 0;
                    if (cy2) cy2.alpha = altM > 3_000_000 ? 0 : altM > 1_000_000 ? (3_000_000 - altM) / 2_000_000 * 0.9 : 0.95;
                });
                viewer.camera.setView({
                    destination: C.Cartesian3.fromDegrees(0, 20, 22_000_000),
                    orientation: {
                        heading: 0,
                        pitch: C.Math.toRadians(-90),
                        roll: 0
                    }
                });
                // Click handler
                const handler = new C.ScreenSpaceEventHandler(viewer.scene.canvas);
                handler.setInputAction((click)=>{
                    const picked = viewer.scene.pick(click.position);
                    [
                        setSelectedCable,
                        setSelectedRegion,
                        setSelectedIXP,
                        setSelectedAlert,
                        setSelectedOutage,
                        setSelectedTower
                    ].forEach((fn)=>fn(null));
                    if (!picked?.id?.properties) return;
                    const p = picked.id.properties;
                    const type = p.entityType?.getValue();
                    if (type === "cable") {
                        const id = p.cableId?.getValue();
                        const cable = cables.find((c)=>c.id === id);
                        if (cable) setSelectedCable(cable);
                    } else if (type === "cloud") {
                        const id = p.regionId?.getValue();
                        const region = cloudRegions.find((r)=>r.id === id);
                        if (region) setSelectedRegion(region);
                    } else if (type === "ixp") {
                        const id = p.ixpId?.getValue();
                        const ixp = ixps.find((i)=>i.id === id);
                        if (ixp) setSelectedIXP(ixp);
                    } else if (type === "bgp") {
                        const id = p.alertId?.getValue();
                        const alert = bgpAlerts.find((a)=>a.id === id);
                        if (alert) setSelectedAlert(alert);
                    } else if (type === "outage") {
                        const id = p.outageId?.getValue();
                        const outage = outages.find((o)=>o.id === id);
                        if (outage) setSelectedOutage(outage);
                    } else if (type === "tower") {
                        const id = p.towerId?.getValue();
                        const tower = cellTowers.find((t)=>t.id === id);
                        if (tower) setSelectedTower(tower);
                    }
                }, C.ScreenSpaceEventType.LEFT_CLICK);
                // Hover handler
                handler.setInputAction((move)=>{
                    const picked = viewer.scene.pick(move.endPosition);
                    if (!picked?.id?.properties) {
                        setHoverTooltip(null);
                        viewer.scene.canvas.style.cursor = "default";
                        return;
                    }
                    const p = picked.id.properties;
                    const type = p.entityType?.getValue();
                    if (!type) {
                        setHoverTooltip(null);
                        return;
                    }
                    viewer.scene.canvas.style.cursor = "pointer";
                    const icons = {
                        cable: "🌊",
                        cloud: "☁️",
                        ixp: "🔄",
                        bgp: "⚡",
                        outage: "🚨",
                        tower: "📡",
                        fiber: "🔦"
                    };
                    let label = "", sublabel = "";
                    if (type === "cable") {
                        label = p.cableName?.getValue() || "Cable";
                        sublabel = `${p.capacityTbps?.getValue() || 0} Tbps`;
                    } else if (type === "cloud") {
                        label = p.regionName?.getValue() || "Region";
                        sublabel = `${(p.provider?.getValue() || "").toUpperCase()} · ${p.azCount?.getValue() || 0} AZs`;
                    } else if (type === "ixp") {
                        label = p.ixpName?.getValue() || "IXP";
                        sublabel = `${p.trafficGbps?.getValue() || 0} Gbps · ${p.memberCount?.getValue() || 0} members`;
                    } else if (type === "bgp") {
                        label = `BGP ${p.alertType?.getValue() || "Alert"}`;
                        sublabel = p.prefix?.getValue() || "";
                    } else if (type === "outage") {
                        label = p.region?.getValue() || "Outage";
                        sublabel = `${p.severity?.getValue() || ""}`;
                    } else if (type === "tower") {
                        label = `${p.technology?.getValue() || ""} Tower`;
                        sublabel = p.operator?.getValue() || "";
                    } else {
                        setHoverTooltip(null);
                        return;
                    }
                    setHoverTooltip({
                        x: move.endPosition.x,
                        y: move.endPosition.y,
                        label,
                        sublabel,
                        icon: icons[type] || "•",
                        type,
                        color: "#00f5ff"
                    });
                }, C.ScreenSpaceEventType.MOUSE_MOVE);
                setTimeout(()=>setIsLoading(false), 2400);
                console.log("✅ TelecomView — Global Network Intelligence Platform loaded");
            } catch (err) {
                console.error("Globe init error:", err);
                setIsLoading(false);
            }
        };
        boot();
        return ()=>{
            if (clockRef.current) clearInterval(clockRef.current);
            cableEntities.clear();
            regionEntities.clear();
            ixpEntities.clear();
            bgpEntities.clear();
            outageEntities.clear();
            towerEntities.clear();
            fiberEntities.clear();
            latencyEntities.length = 0;
            if (viewerRef.current && !viewerRef.current.isDestroyed()) {
                viewerRef.current.destroy();
                viewerRef.current = null;
                window.__cesiumViewer = null;
            }
        };
    }, []); // eslint-disable-line
    // ── 🌊 SUBMARINE CABLES ──────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = viewerRef.current;
        if (!v || !window.Cesium) return;
        const C = window.Cesium;
        cableEntities.forEach((segs)=>segs.forEach((e)=>v.entities.remove(e)));
        cableEntities.clear();
        if (!layers.submarineCables) return;
        cables.forEach((cable)=>{
            const isSel = selectedCable?.id === cable.id;
            const color = C.Color.fromCssColorString(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cableData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CABLE_STATUS_COLORS"][cable.status] || "#00f5ff");
            const segs = [];
            if (cable.coordinates.length >= 2) {
                const positions = cable.coordinates.map(([lng, lat])=>C.Cartesian3.fromDegrees(lng, lat, -2000));
                segs.push(v.entities.add({
                    id: `cable-line-${cable.id}`,
                    properties: {
                        entityType: "cable",
                        cableId: cable.id,
                        cableName: cable.name,
                        capacityTbps: cable.capacityTbps,
                        status: cable.status
                    },
                    polyline: {
                        positions,
                        width: isSel ? 5 : 2.5,
                        material: new C.PolylineGlowMaterialProperty({
                            glowPower: isSel ? 0.4 : 0.15,
                            color: color.withAlpha(isSel ? 1.0 : 0.75)
                        }),
                        arcType: C.ArcType.GEODESIC,
                        clampToGround: false
                    }
                }));
            }
            cable.landingPoints.forEach((lp, i)=>{
                segs.push(v.entities.add({
                    id: `cable-lp-${cable.id}-${i}`,
                    position: C.Cartesian3.fromDegrees(lp.lng, lp.lat, 0),
                    properties: {
                        entityType: "cable",
                        cableId: cable.id,
                        cableName: cable.name,
                        capacityTbps: cable.capacityTbps,
                        status: cable.status
                    },
                    point: {
                        pixelSize: isSel ? 10 : 6,
                        color,
                        outlineColor: C.Color.BLACK,
                        outlineWidth: 1,
                        disableDepthTestDistance: Number.POSITIVE_INFINITY
                    }
                }));
            });
            cableEntities.set(cable.id, segs);
        });
    }, [
        cables,
        layers.submarineCables,
        selectedCable
    ]); // eslint-disable-line
    // ── ☁️ CLOUD REGIONS ─────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = viewerRef.current;
        if (!v || !window.Cesium) return;
        const C = window.Cesium;
        regionEntities.forEach((e)=>v.entities.remove(e));
        regionEntities.clear();
        if (!layers.cloudRegions) return;
        cloudRegions.forEach((region)=>{
            const color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROVIDER_COLORS"][region.provider] || "#ffffff";
            const cc = C.Color.fromCssColorString(color);
            const isSel = selectedRegion?.id === region.id;
            regionEntities.set(region.id, v.entities.add({
                id: `cloud-${region.id}`,
                position: C.Cartesian3.fromDegrees(region.lng, region.lat, 50000),
                properties: {
                    entityType: "cloud",
                    regionId: region.id,
                    regionName: region.name,
                    provider: region.provider,
                    azCount: region.azCount
                },
                billboard: {
                    image: createDCIcon(color, region.tier),
                    scale: isSel ? 1.5 : 1.0,
                    color: region.status === "outage" ? C.Color.RED : cc,
                    verticalOrigin: C.VerticalOrigin.CENTER,
                    horizontalOrigin: C.HorizontalOrigin.CENTER,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY,
                    distanceDisplayCondition: region.tier === "pop" ? new C.DistanceDisplayCondition(0, 8_000_000) : new C.DistanceDisplayCondition(0, 20_000_000)
                },
                label: {
                    text: region.code,
                    font: "9px 'IBM Plex Mono'",
                    fillColor: cc,
                    outlineColor: C.Color.BLACK,
                    outlineWidth: 2,
                    style: C.LabelStyle.FILL_AND_OUTLINE,
                    pixelOffset: new C.Cartesian2(0, -28),
                    distanceDisplayCondition: new C.DistanceDisplayCondition(0, 5_000_000),
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                }
            }));
        });
    }, [
        cloudRegions,
        layers.cloudRegions,
        selectedRegion
    ]); // eslint-disable-line
    // ── 🔄 IXPs ───────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = viewerRef.current;
        if (!v || !window.Cesium) return;
        const C = window.Cesium;
        ixpEntities.forEach((e)=>v.entities.remove(e));
        ixpEntities.clear();
        if (!layers.ixps) return;
        ixps.forEach((ixp)=>{
            const isSel = selectedIXP?.id === ixp.id;
            ixpEntities.set(String(ixp.id), v.entities.add({
                id: `ixp-${ixp.id}`,
                position: C.Cartesian3.fromDegrees(ixp.lng, ixp.lat, 100000),
                properties: {
                    entityType: "ixp",
                    ixpId: ixp.id,
                    ixpName: ixp.name,
                    trafficGbps: ixp.trafficGbps,
                    memberCount: ixp.memberCount
                },
                billboard: {
                    image: createIXPIcon(ixp.trafficGbps),
                    scale: isSel ? 1.6 : 1.0,
                    verticalOrigin: C.VerticalOrigin.CENTER,
                    horizontalOrigin: C.HorizontalOrigin.CENTER,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY,
                    distanceDisplayCondition: new C.DistanceDisplayCondition(0, 15_000_000)
                },
                label: {
                    text: ixp.shortName,
                    font: "9px 'IBM Plex Mono'",
                    fillColor: C.Color.fromCssColorString("#a855f7"),
                    outlineColor: C.Color.BLACK,
                    outlineWidth: 2,
                    style: C.LabelStyle.FILL_AND_OUTLINE,
                    pixelOffset: new C.Cartesian2(0, -24),
                    distanceDisplayCondition: new C.DistanceDisplayCondition(0, 4_000_000),
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                }
            }));
        });
    }, [
        ixps,
        layers.ixps,
        selectedIXP
    ]); // eslint-disable-line
    // ── ⚡ BGP ALERTS ─────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = viewerRef.current;
        if (!v || !window.Cesium) return;
        const C = window.Cesium;
        bgpEntities.forEach((e)=>v.entities.remove(e));
        bgpEntities.clear();
        if (!layers.bgpAlerts) return;
        bgpAlerts.filter((a)=>a.lat && a.lng).forEach((alert)=>{
            bgpEntities.set(alert.id, v.entities.add({
                id: `bgp-${alert.id}`,
                position: C.Cartesian3.fromDegrees(alert.lng, alert.lat, 200000),
                properties: {
                    entityType: "bgp",
                    alertId: alert.id,
                    alertType: alert.type,
                    prefix: alert.prefix,
                    severity: alert.severity
                },
                billboard: {
                    image: createBGPIcon(alert.severity),
                    scale: 1.0,
                    verticalOrigin: C.VerticalOrigin.CENTER,
                    horizontalOrigin: C.HorizontalOrigin.CENTER,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY,
                    distanceDisplayCondition: new C.DistanceDisplayCondition(0, 18_000_000)
                }
            }));
        });
    }, [
        bgpAlerts,
        layers.bgpAlerts
    ]); // eslint-disable-line
    // ── 🚨 OUTAGES ────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = viewerRef.current;
        if (!v || !window.Cesium) return;
        const C = window.Cesium;
        outageEntities.forEach((e)=>v.entities.remove(e));
        outageEntities.clear();
        if (!layers.outages) return;
        outages.forEach((outage)=>{
            outageEntities.set(outage.id, v.entities.add({
                id: `outage-${outage.id}`,
                position: C.Cartesian3.fromDegrees(outage.lng, outage.lat, 300000),
                properties: {
                    entityType: "outage",
                    outageId: outage.id,
                    region: outage.region,
                    severity: outage.severity,
                    affectedAsns: outage.affectedAsns
                },
                billboard: {
                    image: createOutageIcon(outage.severity),
                    scale: 1.0,
                    verticalOrigin: C.VerticalOrigin.CENTER,
                    horizontalOrigin: C.HorizontalOrigin.CENTER,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                }
            }));
        });
    }, [
        outages,
        layers.outages
    ]); // eslint-disable-line
    // ── 🔦 FIBER ROUTES ───────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = viewerRef.current;
        if (!v || !window.Cesium) return;
        const C = window.Cesium;
        fiberEntities.forEach((segs)=>segs.forEach((e)=>v.entities.remove(e)));
        fiberEntities.clear();
        if (!layers.fiberRoutes) return;
        fiberRoutes.forEach((route)=>{
            if (route.coordinates.length < 2) return;
            const positions = route.coordinates.map(([lng, lat])=>C.Cartesian3.fromDegrees(lng, lat, 5000));
            const color = C.Color.fromCssColorString(route.color).withAlpha(0.7);
            fiberEntities.set(route.id, [
                v.entities.add({
                    id: `fiber-${route.id}`,
                    properties: {
                        entityType: "fiber",
                        routeId: route.id,
                        routeName: route.name
                    },
                    polyline: {
                        positions,
                        width: route.tier === 1 ? 3 : 2,
                        material: new C.PolylineDashMaterialProperty({
                            color,
                            dashLength: 20
                        }),
                        arcType: C.ArcType.GEODESIC
                    }
                })
            ]);
        });
    }, [
        fiberRoutes,
        layers.fiberRoutes
    ]); // eslint-disable-line
    // ── 📡 CELL TOWERS ────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = viewerRef.current;
        if (!v || !window.Cesium) return;
        const C = window.Cesium;
        towerEntities.forEach((e)=>v.entities.remove(e));
        towerEntities.clear();
        if (!layers.cellTowers || cellTowers.length === 0) return;
        cellTowers.forEach((tower)=>{
            towerEntities.set(tower.id, v.entities.add({
                id: `tower-${tower.id}`,
                position: C.Cartesian3.fromDegrees(tower.lng, tower.lat, 0),
                properties: {
                    entityType: "tower",
                    towerId: tower.id,
                    technology: tower.technology,
                    operator: tower.operator
                },
                billboard: {
                    image: createTowerIcon(tower.technology),
                    scale: 1.0,
                    verticalOrigin: C.VerticalOrigin.CENTER,
                    horizontalOrigin: C.HorizontalOrigin.CENTER,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY,
                    distanceDisplayCondition: new C.DistanceDisplayCondition(0, 1_500_000)
                }
            }));
        });
    }, [
        cellTowers,
        layers.cellTowers
    ]); // eslint-disable-line
    // ── ⚡ LATENCY HEATMAP ────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = viewerRef.current;
        if (!v || !window.Cesium) return;
        const C = window.Cesium;
        latencyEntities.forEach((e)=>v.entities.remove(e));
        latencyEntities.length = 0;
        if (!layers.latencyHeatmap || latencyProbes.length === 0) return;
        latencyProbes.forEach((probe)=>{
            const pct = Math.min(probe.latencyMs / 200, 1);
            const r = Math.round(pct * 255), g = Math.round((1 - pct) * 255);
            const col = C.Color.fromBytes(r, g, 50, 180);
            latencyEntities.push(v.entities.add({
                id: `latency-${probe.id}`,
                position: C.Cartesian3.fromDegrees(probe.lng, probe.lat, 0),
                ellipse: {
                    semiMajorAxis: 400000,
                    semiMinorAxis: 400000,
                    material: new C.ColorMaterialProperty(col),
                    heightReference: C.HeightReference.CLAMP_TO_GROUND
                }
            }));
        });
    }, [
        latencyProbes,
        layers.latencyHeatmap
    ]); // eslint-disable-line
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed inset-0 w-full h-full",
        style: {
            background: "#020408"
        }
    }, void 0, false, {
        fileName: "[project]/components/GlobeViewer.tsx",
        lineNumber: 620,
        columnNumber: 10
    }, this);
});
GlobeViewer.displayName = "GlobeViewer";
const __TURBOPACK__default__export__ = GlobeViewer;
}}),
"[project]/components/GlobeViewer.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/GlobeViewer.tsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=_b5f017a4._.js.map