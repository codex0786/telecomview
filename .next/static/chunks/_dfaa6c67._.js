(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_dfaa6c67._.js", {

"[project]/lib/TelecomViewContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TelecomViewProvider": (()=>TelecomViewProvider),
    "useTelecomView": (()=>useTelecomView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const Ctx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function TelecomViewProvider({ children }) {
    _s();
    const [cables, setCables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cloudRegions, setCloudRegions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ixps, setIxps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bgpAlerts, setBgpAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [autonomousSystems, setAutonomousSystems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cellTowers, setCellTowers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [outages, setOutages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [latencyProbes, setLatencyProbes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fiberRoutes, setFiberRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [starlinkSats, setStarlinkSats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCable, setSelectedCable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedIXP, setSelectedIXP] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAlert, setSelectedAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedTower, setSelectedTower] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOutage, setSelectedOutage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [totalCables, setTotalCables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalRegions, setTotalRegions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalIXPs, setTotalIXPs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalAlerts, setTotalAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalTowers, setTotalTowers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalOutages, setTotalOutages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [layers, setLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        submarineCables: true,
        cloudRegions: true,
        ixps: true,
        bgpAlerts: true,
        cellTowers: false,
        outages: true,
        latencyHeatmap: false,
        fiberRoutes: true,
        starlink: false,
        spectrum: false,
        colos: false,
        connectivityIndex: false
    });
    const [hoverTooltip, setHoverTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cameraPosition, setCameraPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        lat: 20,
        lng: 0,
        alt: 22_000_000
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastUpdate, setLastUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [layerErrors, setLayerErrorsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TelecomViewProvider.useCallback[toggleLayer]": (layer)=>setLayers({
                "TelecomViewProvider.useCallback[toggleLayer]": (p)=>({
                        ...p,
                        [layer]: !p[layer]
                    })
            }["TelecomViewProvider.useCallback[toggleLayer]"])
    }["TelecomViewProvider.useCallback[toggleLayer]"], []);
    const setLayerError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TelecomViewProvider.useCallback[setLayerError]": (layer, err)=>setLayerErrorsState({
                "TelecomViewProvider.useCallback[setLayerError]": (p)=>{
                    const n = {
                        ...p
                    };
                    if (err === null) delete n[layer];
                    else n[layer] = err;
                    return n;
                }
            }["TelecomViewProvider.useCallback[setLayerError]"])
    }["TelecomViewProvider.useCallback[setLayerError]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ctx.Provider, {
        value: {
            cables,
            setCables,
            cloudRegions,
            setCloudRegions,
            ixps,
            setIxps,
            bgpAlerts,
            setBgpAlerts,
            autonomousSystems,
            setAutonomousSystems,
            cellTowers,
            setCellTowers,
            outages,
            setOutages,
            latencyProbes,
            setLatencyProbes,
            fiberRoutes,
            setFiberRoutes,
            starlinkSats,
            setStarlinkSats,
            selectedCable,
            setSelectedCable,
            selectedRegion,
            setSelectedRegion,
            selectedIXP,
            setSelectedIXP,
            selectedAlert,
            setSelectedAlert,
            selectedTower,
            setSelectedTower,
            selectedOutage,
            setSelectedOutage,
            totalCables,
            setTotalCables,
            totalRegions,
            setTotalRegions,
            totalIXPs,
            setTotalIXPs,
            totalAlerts,
            setTotalAlerts,
            totalTowers,
            setTotalTowers,
            totalOutages,
            setTotalOutages,
            layers,
            toggleLayer,
            hoverTooltip,
            setHoverTooltip,
            cameraPosition,
            setCameraPosition,
            isLoading,
            setIsLoading,
            lastUpdate,
            setLastUpdate,
            layerErrors,
            setLayerError
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/TelecomViewContext.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(TelecomViewProvider, "PkveY1OFW8vOlEv2e4IPHjBsWO0=");
_c = TelecomViewProvider;
function useTelecomView() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Ctx);
    if (!ctx) throw new Error("useTelecomView must be within TelecomViewProvider");
    return ctx;
}
_s1(useTelecomView, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "TelecomViewProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/HUD.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HUD)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HUD() {
    _s();
    const { totalCables, totalRegions, totalIXPs, totalAlerts, totalOutages, cameraPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    const stats = [
        {
            icon: "🌊",
            label: "CABLES",
            value: totalCables,
            color: "#00f5ff"
        },
        {
            icon: "☁️",
            label: "CLOUD DCs",
            value: totalRegions,
            color: "#ff9900"
        },
        {
            icon: "🔄",
            label: "IXPs",
            value: totalIXPs,
            color: "#a855f7"
        },
        {
            icon: "⚡",
            label: "BGP EVENTS",
            value: totalAlerts,
            color: "#ff3b3b"
        },
        {
            icon: "🚨",
            label: "OUTAGES",
            value: totalOutages,
            color: "#ffb800"
        }
    ];
    const altStr = cameraPosition.alt > 1_000_000 ? `${(cameraPosition.alt / 1_000_000).toFixed(1)} Mm` : `${Math.round(cameraPosition.alt / 1000)} km`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "rgba(2,8,18,0.88)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(0,245,255,0.13)",
                    borderRadius: "14px",
                    padding: "10px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    boxShadow: "0 0 40px rgba(0,245,255,0.06), inset 0 1px 0 rgba(0,245,255,0.08)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            paddingRight: "20px",
                            borderRight: "1px solid rgba(0,245,255,0.1)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "#00f5ff",
                                    boxShadow: "0 0 8px #00f5ff, 0 0 16px #00f5ff44",
                                    animation: "pulseDot 2s ease-in-out infinite"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/HUD.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: "11px",
                                    letterSpacing: "0.3em",
                                    color: "#00f5ff",
                                    textShadow: "0 0 16px #00f5ff88"
                                },
                                children: "TELECOMVIEW"
                            }, void 0, false, {
                                fileName: "[project]/components/HUD.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HUD.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "7px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 14
                                    },
                                    children: s.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/HUD.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "8px",
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                color: "#475569",
                                                letterSpacing: "0.15em"
                                            },
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/HUD.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "13px",
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                fontWeight: 700,
                                                color: s.color,
                                                textShadow: `0 0 8px ${s.color}55`
                                            },
                                            children: s.value.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/components/HUD.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HUD.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, s.label, true, {
                            fileName: "[project]/components/HUD.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 1,
                            height: 28,
                            background: "rgba(0,245,255,0.1)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/HUD.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "8px",
                                    fontFamily: "'IBM Plex Mono',monospace",
                                    color: "#475569",
                                    letterSpacing: "0.15em"
                                },
                                children: "ALT"
                            }, void 0, false, {
                                fileName: "[project]/components/HUD.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "12px",
                                    fontFamily: "'IBM Plex Mono',monospace",
                                    color: "#94a3b8"
                                },
                                children: altStr
                            }, void 0, false, {
                                fileName: "[project]/components/HUD.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HUD.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "5px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "#00ff88",
                                    boxShadow: "0 0 6px #00ff88",
                                    animation: "blinkDot 1.4s step-end infinite"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/HUD.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "8px",
                                    fontFamily: "'IBM Plex Mono',monospace",
                                    color: "#475569",
                                    letterSpacing: "0.15em"
                                },
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/components/HUD.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HUD.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HUD.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulseDot { 0%,100%{box-shadow:0 0 8px #00f5ff,0 0 16px #00f5ff44} 50%{box-shadow:0 0 16px #00f5ff,0 0 32px #00f5ff66} }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `
            }, void 0, false, {
                fileName: "[project]/components/HUD.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HUD.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(HUD, "mKVgZGogdrft+PfrWVXHPozH8Og=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c = HUD;
var _c;
__turbopack_context__.k.register(_c, "HUD");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/LayerPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LayerPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const LAYERS = [
    {
        key: "submarineCables",
        icon: "🌊",
        label: "Submarine Cables",
        color: "#00f5ff",
        desc: "Global undersea fiber systems"
    },
    {
        key: "cloudRegions",
        icon: "☁️",
        label: "Cloud Data Centers",
        color: "#ff9900",
        desc: "AWS / Azure / GCP / CF regions"
    },
    {
        key: "ixps",
        icon: "🔄",
        label: "Internet Exchanges",
        color: "#a855f7",
        desc: "IXPs sized by traffic volume"
    },
    {
        key: "bgpAlerts",
        icon: "⚡",
        label: "BGP Alerts",
        color: "#ff3b3b",
        desc: "Route hijacks, leaks & anomalies"
    },
    {
        key: "outages",
        icon: "🚨",
        label: "Live Outages",
        color: "#ffb800",
        desc: "Active internet outage events"
    },
    {
        key: "fiberRoutes",
        icon: "🔦",
        label: "Fiber Backbone",
        color: "#aaff00",
        desc: "Tier-1 terrestrial fiber routes"
    },
    {
        key: "cellTowers",
        icon: "📡",
        label: "Cell Towers",
        color: "#00ff88",
        desc: "2G / 3G / 4G / 5G infrastructure"
    },
    {
        key: "latencyHeatmap",
        icon: "🌡️",
        label: "Latency Heatmap",
        color: "#ff9900",
        desc: "Global RTT overlay"
    },
    {
        key: "starlink",
        icon: "🛰️",
        label: "Satellite (LEO)",
        color: "#ffffff",
        desc: "Starlink constellation"
    }
];
function LayerPanel() {
    _s();
    const { layers, toggleLayer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed left-4 top-1/2 -translate-y-1/2 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-xl p-3 w-64",
            style: {
                animation: "slideIn 0.4s ease-out"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[9px] font-mono tracking-[0.25em] text-slate-500 mb-3 px-1",
                    children: "INTELLIGENCE LAYERS"
                }, void 0, false, {
                    fileName: "[project]/components/LayerPanel.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: LAYERS.map((l)=>{
                        const on = layers[l.key];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleLayer(l.key),
                            className: "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-left w-full",
                            style: {
                                background: on ? `${l.color}11` : "transparent",
                                border: `1px solid ${on ? l.color + "44" : "transparent"}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm flex-shrink-0",
                                    children: l.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/LayerPanel.tsx",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] font-mono font-medium",
                                            style: {
                                                color: on ? l.color : "#555"
                                            },
                                            children: l.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/LayerPanel.tsx",
                                            lineNumber: 32,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] text-slate-600 truncate",
                                            children: l.desc
                                        }, void 0, false, {
                                            fileName: "[project]/components/LayerPanel.tsx",
                                            lineNumber: 33,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LayerPanel.tsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 w-8 h-4 rounded-full relative transition-all duration-200",
                                    style: {
                                        background: on ? `${l.color}66` : "#1a1a2e",
                                        border: `1px solid ${on ? l.color : "#333"}`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0.5 w-3 h-3 rounded-full transition-all duration-200",
                                        style: {
                                            background: on ? l.color : "#333",
                                            left: on ? "calc(100% - 14px)" : "1px",
                                            boxShadow: on ? `0 0 6px ${l.color}` : "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/LayerPanel.tsx",
                                        lineNumber: 37,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/LayerPanel.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, l.key, true, {
                            fileName: "[project]/components/LayerPanel.tsx",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/LayerPanel.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/LayerPanel.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/LayerPanel.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(LayerPanel, "SbBLbhHObWroZBZzfAhh5Pl8Mj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c = LayerPanel;
var _c;
__turbopack_context__.k.register(_c, "LayerPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/BGPAlertPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BGPAlertPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SEV_COLORS = {
    critical: "#ff0000",
    high: "#ff3b3b",
    medium: "#ffb800",
    low: "#00f5ff"
};
const TYPE_LABELS = {
    hijack: "HIJACK",
    leak: "LEAK",
    withdrawal: "WITHDRAWN",
    anomaly: "ANOMALY"
};
const TYPE_ICONS = {
    hijack: "🔴",
    leak: "🟡",
    withdrawal: "🔵",
    anomaly: "⚡"
};
function BGPAlertPanel() {
    _s();
    const { bgpAlerts, selectedAlert, setSelectedAlert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const critical = bgpAlerts.filter((a)=>a.severity === "critical" || a.severity === "high").length;
    if (!open) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setOpen(true),
        className: "fixed bottom-24 right-4 z-50 glass-panel rounded-xl px-4 py-2 flex items-center gap-2",
        style: {
            border: "1px solid rgba(255,59,59,0.3)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "⚡"
            }, void 0, false, {
                fileName: "[project]/components/BGPAlertPanel.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-mono text-red-400",
                children: [
                    bgpAlerts.length,
                    " BGP ALERTS"
                ]
            }, void 0, true, {
                fileName: "[project]/components/BGPAlertPanel.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            critical > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-4 h-4 rounded-full bg-red-500 text-[8px] font-mono flex items-center justify-center text-white",
                children: critical
            }, void 0, false, {
                fileName: "[project]/components/BGPAlertPanel.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BGPAlertPanel.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 z-50 glass-panel rounded-xl w-72",
        style: {
            animation: "slideUp 0.4s ease-out",
            border: "1px solid rgba(255,59,59,0.2)",
            maxHeight: "240px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2.5 border-b border-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1.5 h-1.5 rounded-full bg-red-400",
                                style: {
                                    animation: "blink 1s step-end infinite"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/BGPAlertPanel.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono tracking-widest text-red-400",
                                children: "BGP INTELLIGENCE FEED"
                            }, void 0, false, {
                                fileName: "[project]/components/BGPAlertPanel.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BGPAlertPanel.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono text-slate-500",
                                children: bgpAlerts.length
                            }, void 0, false, {
                                fileName: "[project]/components/BGPAlertPanel.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen(false),
                                className: "text-slate-600 hover:text-white text-xs",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/components/BGPAlertPanel.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BGPAlertPanel.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BGPAlertPanel.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-y-auto",
                style: {
                    maxHeight: "180px"
                },
                children: [
                    bgpAlerts.map((a)=>{
                        const sc = SEV_COLORS[a.severity] || "#ffb800";
                        const isSel = selectedAlert?.id === a.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedAlert(isSel ? null : a),
                            className: "w-full text-left",
                            style: {
                                background: isSel ? sc + "11" : "transparent"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2 px-4 py-2 hover:bg-white/5 border-b border-white/5 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs flex-shrink-0 mt-0.5",
                                        children: TYPE_ICONS[a.type] || "⚡"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BGPAlertPanel.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono",
                                                        style: {
                                                            color: sc
                                                        },
                                                        children: TYPE_LABELS[a.type] || a.type.toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BGPAlertPanel.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono text-slate-600",
                                                        children: [
                                                            "AS",
                                                            a.asn
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BGPAlertPanel.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono text-slate-600 ml-auto",
                                                        children: new Date(a.timestamp).toLocaleTimeString([], {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BGPAlertPanel.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BGPAlertPanel.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-mono text-slate-400 truncate",
                                                children: a.prefix
                                            }, void 0, false, {
                                                fileName: "[project]/components/BGPAlertPanel.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[9px] text-slate-600 truncate",
                                                children: a.asnName
                                            }, void 0, false, {
                                                fileName: "[project]/components/BGPAlertPanel.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BGPAlertPanel.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BGPAlertPanel.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this)
                        }, a.id, false, {
                            fileName: "[project]/components/BGPAlertPanel.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this);
                    }),
                    bgpAlerts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-6 text-center text-[9px] font-mono text-slate-600",
                        children: "NO ALERTS DETECTED"
                    }, void 0, false, {
                        fileName: "[project]/components/BGPAlertPanel.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BGPAlertPanel.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BGPAlertPanel.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(BGPAlertPanel, "aGl9voto+cJdNAZzTW8YSbLo2YQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c = BGPAlertPanel;
var _c;
__turbopack_context__.k.register(_c, "BGPAlertPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/SearchBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SearchBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SearchBar({ globeRef }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { cables, cloudRegions, ixps, bgpAlerts, setSelectedCable, setSelectedRegion, setSelectedIXP, setSelectedAlert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchBar.useCallback[search]": (q)=>{
            const s = q.toLowerCase().trim();
            if (!s) {
                setResults([]);
                return;
            }
            const r = [];
            cables.filter({
                "SearchBar.useCallback[search]": (c)=>c.name.toLowerCase().includes(s)
            }["SearchBar.useCallback[search]"]).slice(0, 3).forEach({
                "SearchBar.useCallback[search]": (c)=>r.push({
                        type: "cable",
                        icon: "🌊",
                        label: c.name,
                        sub: `${c.capacityTbps ?? "?"} Tbps`,
                        entity: c,
                        lat: c.landingPoints[0]?.lat,
                        lng: c.landingPoints[0]?.lng
                    })
            }["SearchBar.useCallback[search]"]);
            cloudRegions.filter({
                "SearchBar.useCallback[search]": (r2)=>r2.name.toLowerCase().includes(s) || r2.code.toLowerCase().includes(s)
            }["SearchBar.useCallback[search]"]).slice(0, 4).forEach({
                "SearchBar.useCallback[search]": (r2)=>r.push({
                        type: "cloud",
                        icon: "☁️",
                        label: r2.name,
                        sub: `${r2.provider.toUpperCase()} · ${r2.code}`,
                        entity: r2,
                        lat: r2.lat,
                        lng: r2.lng
                    })
            }["SearchBar.useCallback[search]"]);
            ixps.filter({
                "SearchBar.useCallback[search]": (i)=>i.name.toLowerCase().includes(s) || i.city.toLowerCase().includes(s)
            }["SearchBar.useCallback[search]"]).slice(0, 3).forEach({
                "SearchBar.useCallback[search]": (i)=>r.push({
                        type: "ixp",
                        icon: "🔄",
                        label: i.name,
                        sub: `${i.trafficGbps} Gbps · ${i.memberCount} members`,
                        entity: i,
                        lat: i.lat,
                        lng: i.lng
                    })
            }["SearchBar.useCallback[search]"]);
            bgpAlerts.filter({
                "SearchBar.useCallback[search]": (a)=>a.asnName.toLowerCase().includes(s) || a.prefix.includes(s) || String(a.asn).includes(s)
            }["SearchBar.useCallback[search]"]).slice(0, 2).forEach({
                "SearchBar.useCallback[search]": (a)=>r.push({
                        type: "bgp",
                        icon: "⚡",
                        label: `AS${a.asn} — ${a.asnName}`,
                        sub: a.prefix,
                        entity: a,
                        lat: a.lat,
                        lng: a.lng
                    })
            }["SearchBar.useCallback[search]"]);
            setResults(r.slice(0, 8));
        }
    }["SearchBar.useCallback[search]"], [
        cables,
        cloudRegions,
        ixps,
        bgpAlerts
    ]);
    const selectResult = (r)=>{
        if (r.type === "cable") setSelectedCable(r.entity);
        if (r.type === "cloud") setSelectedRegion(r.entity);
        if (r.type === "ixp") setSelectedIXP(r.entity);
        if (r.type === "bgp") setSelectedAlert(r.entity);
        if (r.lat != null && r.lng != null) globeRef.current?.flyTo(r.lat, r.lng, 1_500_000);
        setQuery("");
        setResults([]);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-50 w-64",
        style: {
            animation: "fadeIn 0.5s ease-out"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-panel rounded-xl flex items-center gap-2 px-3 py-2",
                    style: {
                        border: `1px solid ${open ? "rgba(0,245,255,0.3)" : "rgba(0,245,255,0.1)"}`,
                        transition: "border-color 0.2s"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-slate-600",
                            children: "🔍"
                        }, void 0, false, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            value: query,
                            onChange: (e)=>{
                                setQuery(e.target.value);
                                search(e.target.value);
                                setOpen(true);
                            },
                            onFocus: ()=>setOpen(true),
                            onBlur: ()=>setTimeout(()=>setOpen(false), 150),
                            placeholder: "Search cables, DCs, IXPs, ASNs...",
                            className: "bg-transparent text-xs font-mono text-slate-300 placeholder-slate-600 outline-none w-full"
                        }, void 0, false, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setQuery("");
                                setResults([]);
                            },
                            className: "text-slate-600 hover:text-white text-xs",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SearchBar.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                open && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-full left-0 right-0 mt-1 glass-panel rounded-xl overflow-hidden z-50",
                    style: {
                        border: "1px solid rgba(0,245,255,0.15)",
                        animation: "slideUp 0.15s ease-out"
                    },
                    children: results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>selectResult(r),
                            className: "w-full flex items-center gap-3 px-3 py-2 hover:bg-white/5 transition-all text-left border-b border-white/5 last:border-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm flex-shrink-0",
                                    children: r.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] font-mono text-slate-300 truncate",
                                            children: r.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/SearchBar.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] font-mono text-slate-600",
                                            children: r.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/SearchBar.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] font-mono text-slate-700 uppercase",
                                    children: r.type
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/SearchBar.tsx",
                            lineNumber: 78,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/SearchBar.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/SearchBar.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SearchBar.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "y2EHsDZa8GGRn6ov9zjm5o2fgjw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ControlBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ControlBar": (()=>ControlBar),
    "StatusBar": (()=>StatusBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const HOTSPOTS = [
    {
        name: "Frankfurt IXP",
        lat: 50.11,
        lng: 8.68,
        alt: 1_000_000
    },
    {
        name: "APAC Cables",
        lat: 10.0,
        lng: 110.0,
        alt: 6_000_000
    },
    {
        name: "Trans-Atlantic",
        lat: 45.0,
        lng: -35.0,
        alt: 7_000_000
    },
    {
        name: "US East Coast",
        lat: 38.0,
        lng: -75.0,
        alt: 3_000_000
    },
    {
        name: "Southeast Asia",
        lat: 5.0,
        lng: 110.0,
        alt: 4_000_000
    },
    {
        name: "Global View",
        lat: 20.0,
        lng: 0.0,
        alt: 22_000_000
    }
];
function ControlBar({ globeRef }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2",
        style: {
            animation: "slideUp 0.5s ease-out"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel rounded-xl px-3 py-2 flex items-center gap-2",
            style: {
                border: "1px solid rgba(0,245,255,0.1)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[9px] font-mono text-slate-600 tracking-widest",
                    children: "JUMP TO"
                }, void 0, false, {
                    fileName: "[project]/components/ControlBar.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                HOTSPOTS.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>globeRef.current?.flyTo(h.lat, h.lng, h.alt),
                        className: "px-2.5 py-1 rounded-lg text-[9px] font-mono text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:bg-white/5",
                        style: {
                            border: "1px solid transparent"
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.border = "1px solid rgba(0,245,255,0.3)",
                        onMouseLeave: (e)=>e.currentTarget.style.border = "1px solid transparent",
                        children: h.name
                    }, h.name, false, {
                        fileName: "[project]/components/ControlBar.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-px h-4 bg-white/10 mx-1"
                }, void 0, false, {
                    fileName: "[project]/components/ControlBar.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>globeRef.current?.resetView(),
                    className: "px-2.5 py-1 rounded-lg text-[9px] font-mono text-slate-500 hover:text-white transition-all hover:bg-white/5",
                    children: "⟳ RESET"
                }, void 0, false, {
                    fileName: "[project]/components/ControlBar.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>globeRef.current?.toggleDayNight(),
                    className: "px-2.5 py-1 rounded-lg text-[9px] font-mono text-slate-500 hover:text-white transition-all hover:bg-white/5",
                    children: "🌙 NIGHT"
                }, void 0, false, {
                    fileName: "[project]/components/ControlBar.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ControlBar.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ControlBar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = ControlBar;
function StatusBar() {
    _s();
    // ── Fix: never render Date on the server — use useEffect so the clock
    //    is client-only, avoiding SSR/client hydration mismatch. ──────────
    const [utcTime, setUtcTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusBar.useEffect": ()=>{
            const fmt = {
                "StatusBar.useEffect.fmt": ()=>new Date().toISOString().slice(0, 19).replace("T", " ")
            }["StatusBar.useEffect.fmt"];
            setUtcTime(fmt());
            const id = setInterval({
                "StatusBar.useEffect.id": ()=>setUtcTime(fmt())
            }["StatusBar.useEffect.id"], 1000);
            return ({
                "StatusBar.useEffect": ()=>clearInterval(id)
            })["StatusBar.useEffect"];
        }
    }["StatusBar.useEffect"], []);
    const staticItems = [
        "RIPE RIS LIVE — CONNECTED",
        "IODA OUTAGE DETECTION — ACTIVE",
        "OPENCELLID — READY"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-1",
        style: {
            background: "rgba(2,4,8,0.9)",
            borderTop: "1px solid rgba(0,245,255,0.08)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6",
                children: [
                    staticItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[8px] font-mono text-slate-700 tracking-widest",
                            children: item
                        }, item, false, {
                            fileName: "[project]/components/ControlBar.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[8px] font-mono text-slate-700 tracking-widest",
                        children: utcTime ? `UTC ${utcTime}` : ""
                    }, void 0, false, {
                        fileName: "[project]/components/ControlBar.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ControlBar.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 h-1 rounded-full bg-green-500",
                        style: {
                            animation: "blink 2s step-end infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ControlBar.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[8px] font-mono text-slate-700",
                        children: "TELECOMVIEW v1.0 — GLOBAL NETWORK INTELLIGENCE"
                    }, void 0, false, {
                        fileName: "[project]/components/ControlBar.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ControlBar.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ControlBar.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(StatusBar, "eXyCyApAmvw7NgtmE2sqRiwMnH0=");
_c1 = StatusBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "ControlBar");
__turbopack_context__.k.register(_c1, "StatusBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/IntelligencePanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>IntelligencePanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const INSIGHTS = [
    {
        icon: "🔴",
        severity: "critical",
        msg: "AS45899 VNPT announcing unauthorized prefixes — BGP hijack suspected in Southeast Asia"
    },
    {
        icon: "🟡",
        severity: "medium",
        msg: "Elevated latency across SEA-ME-WE 4 cable — possible partial fault near Suez segment"
    },
    {
        icon: "🟢",
        severity: "info",
        msg: "DE-CIX Frankfurt processing peak 14.2 Tbps — 8% above 30-day average"
    },
    {
        icon: "🔴",
        severity: "critical",
        msg: "IX.br São Paulo congestion event — 23 ASNs experiencing packet loss >5%"
    },
    {
        icon: "🟡",
        severity: "medium",
        msg: "AWS us-east-1 BGP route instability — 3 prefix withdrawals in last 15 minutes"
    },
    {
        icon: "🟢",
        severity: "info",
        msg: "New submarine cable PEACE now fully operational — India-France latency reduced 12ms"
    },
    {
        icon: "🟡",
        severity: "medium",
        msg: "Cloudflare AS13335 announcing new /22 prefixes from Frankfurt PoP"
    },
    {
        icon: "🔴",
        severity: "critical",
        msg: "RIPE Atlas detecting 40% packet loss from Middle East — possible cable fault"
    }
];
function IntelligencePanel() {
    _s();
    const { bgpAlerts, outages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [insightIdx, setInsightIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntelligencePanel.useEffect": ()=>{
            const t = setInterval({
                "IntelligencePanel.useEffect.t": ()=>setInsightIdx({
                        "IntelligencePanel.useEffect.t": (i)=>(i + 1) % INSIGHTS.length
                    }["IntelligencePanel.useEffect.t"])
            }["IntelligencePanel.useEffect.t"], 7000);
            return ({
                "IntelligencePanel.useEffect": ()=>clearInterval(t)
            })["IntelligencePanel.useEffect"];
        }
    }["IntelligencePanel.useEffect"], []);
    const critical = bgpAlerts.filter((a)=>a.severity === "critical").length + outages.filter((o)=>o.severity === "critical").length;
    if (!open) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setOpen(true),
            className: "fixed top-20 left-4 z-50 glass-panel rounded-xl px-4 py-2 flex items-center gap-2",
            style: {
                border: "1px solid rgba(0,245,255,0.15)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: "🧠"
                }, void 0, false, {
                    fileName: "[project]/components/IntelligencePanel.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[9px] font-mono text-cyan-400",
                    children: "AI ANALYST"
                }, void 0, false, {
                    fileName: "[project]/components/IntelligencePanel.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                critical > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-4 h-4 rounded-full bg-red-500 text-[8px] font-mono flex items-center justify-center text-white",
                    children: critical
                }, void 0, false, {
                    fileName: "[project]/components/IntelligencePanel.tsx",
                    lineNumber: 35,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/IntelligencePanel.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    const current = INSIGHTS[insightIdx];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-20 left-4 z-40 glass-panel rounded-xl w-64 overflow-hidden",
        style: {
            border: "1px solid rgba(0,245,255,0.12)",
            animation: "slideIn 0.4s ease-out"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2.5 border-b border-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: "🧠"
                            }, void 0, false, {
                                fileName: "[project]/components/IntelligencePanel.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono tracking-widest text-cyan-400",
                                children: "NETWORK ANALYST"
                            }, void 0, false, {
                                fileName: "[project]/components/IntelligencePanel.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/IntelligencePanel.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen(false),
                        className: "text-slate-600 hover:text-white text-xs",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/components/IntelligencePanel.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/IntelligencePanel.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-white/5",
                style: {
                    minHeight: 72
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2",
                    style: {
                        animation: "fadeIn 0.5s ease-out"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base mt-0.5",
                            children: current.icon
                        }, void 0, false, {
                            fileName: "[project]/components/IntelligencePanel.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-mono text-slate-400 leading-relaxed",
                            children: current.msg
                        }, void 0, false, {
                            fileName: "[project]/components/IntelligencePanel.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, insightIdx, true, {
                    fileName: "[project]/components/IntelligencePanel.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/IntelligencePanel.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 divide-x divide-white/5",
                children: [
                    {
                        label: "CRITICAL",
                        value: critical,
                        color: "#ff3b3b"
                    },
                    {
                        label: "BGP",
                        value: bgpAlerts.length,
                        color: "#ffb800"
                    },
                    {
                        label: "OUTAGES",
                        value: outages.length,
                        color: "#ff9900"
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-base font-mono font-bold",
                                style: {
                                    color: s.color
                                },
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/components/IntelligencePanel.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[8px] font-mono text-slate-600",
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/components/IntelligencePanel.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/components/IntelligencePanel.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/IntelligencePanel.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 border-t border-white/5 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-cyan-400",
                        style: {
                            animation: "blink 2s step-end infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/IntelligencePanel.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[8px] font-mono text-slate-600",
                        children: "ANALYZING NETWORK TOPOLOGY IN REAL-TIME"
                    }, void 0, false, {
                        fileName: "[project]/components/IntelligencePanel.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/IntelligencePanel.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/IntelligencePanel.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(IntelligencePanel, "KOy7rnEQ0oNtHYMNdd6QoQ5llHM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c = IntelligencePanel;
var _c;
__turbopack_context__.k.register(_c, "IntelligencePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/cloudData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CLOUD_REGIONS": (()=>CLOUD_REGIONS),
    "PROVIDER_COLORS": (()=>PROVIDER_COLORS),
    "PROVIDER_NAMES": (()=>PROVIDER_NAMES)
});
const PROVIDER_COLORS = {
    aws: "#ff9900",
    azure: "#0078d4",
    gcp: "#34a853",
    cloudflare: "#f48120",
    oracle: "#f80000",
    alibaba: "#ff6a00",
    ibm: "#006699"
};
const PROVIDER_NAMES = {
    aws: "Amazon Web Services",
    azure: "Microsoft Azure",
    gcp: "Google Cloud Platform",
    cloudflare: "Cloudflare",
    oracle: "Oracle Cloud",
    alibaba: "Alibaba Cloud",
    ibm: "IBM Cloud"
};
const CLOUD_REGIONS = [
    // ── AWS ───────────────────────────────────────────────────────────────────
    {
        id: "aws-us-east-1",
        code: "us-east-1",
        name: "US East (N. Virginia)",
        provider: "aws",
        lat: 38.13,
        lng: -78.45,
        city: "Ashburn",
        country: "United States",
        azCount: 6,
        totalPowerMW: 2400,
        usedPowerMW: 1820,
        coolingType: "Air + Evaporative",
        tierLevel: "III",
        yearOpened: 2006,
        floorSpaceSqM: 185000,
        facilities: [
            {
                name: "Equinix DC-6",
                operator: "Equinix",
                powerMW: 400,
                pue: 1.20,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "PCI-DSS",
                    "FedRAMP"
                ]
            },
            {
                name: "QTS Ashburn",
                operator: "QTS",
                powerMW: 380,
                pue: 1.22,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "HIPAA"
                ]
            },
            {
                name: "CyrusOne IAD",
                operator: "CyrusOne",
                powerMW: 350,
                pue: 1.18,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            }
        ],
        services: [
            "EC2",
            "S3",
            "RDS",
            "Lambda",
            "EKS",
            "CloudFront",
            "Route53",
            "IAM"
        ],
        connectedIXPs: [
            "Equinix Ashburn (IAD)",
            "DE-CIX New York"
        ],
        upstreamProviders: [
            "Cogent",
            "Level3",
            "NTT",
            "Telia"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#ff9900",
        latencyMs: 12,
        pricingTier: "standard",
        complianceFrameworks: [
            "SOC2",
            "ISO27001",
            "PCI-DSS",
            "FedRAMP",
            "HIPAA"
        ],
        sustainabilityScore: 72,
        carbonFreeEnergy: 65
    },
    {
        id: "aws-us-west-2",
        code: "us-west-2",
        name: "US West (Oregon)",
        provider: "aws",
        lat: 45.52,
        lng: -122.67,
        city: "Portland",
        country: "United States",
        azCount: 4,
        totalPowerMW: 1200,
        usedPowerMW: 890,
        coolingType: "Evaporative",
        tierLevel: "III",
        yearOpened: 2011,
        floorSpaceSqM: 120000,
        facilities: [
            {
                name: "Hillsboro DC-1",
                operator: "Amazon",
                powerMW: 600,
                pue: 1.15,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "FedRAMP"
                ]
            },
            {
                name: "Hillsboro DC-2",
                operator: "Amazon",
                powerMW: 600,
                pue: 1.14,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            }
        ],
        services: [
            "EC2",
            "S3",
            "RDS",
            "Lambda",
            "EKS",
            "CloudFront"
        ],
        connectedIXPs: [
            "SIX Seattle",
            "NWAX"
        ],
        upstreamProviders: [
            "Cogent",
            "CenturyLink",
            "GTT"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#ff9900",
        latencyMs: 18,
        pricingTier: "standard",
        complianceFrameworks: [
            "SOC2",
            "ISO27001",
            "FedRAMP"
        ],
        sustainabilityScore: 95,
        carbonFreeEnergy: 100
    },
    {
        id: "aws-eu-west-1",
        code: "eu-west-1",
        name: "Europe (Ireland)",
        provider: "aws",
        lat: 53.33,
        lng: -6.25,
        city: "Dublin",
        country: "Ireland",
        azCount: 3,
        totalPowerMW: 720,
        usedPowerMW: 540,
        coolingType: "Air",
        tierLevel: "III",
        yearOpened: 2007,
        floorSpaceSqM: 75000,
        facilities: [
            {
                name: "Clonshaugh DC",
                operator: "Amazon",
                powerMW: 360,
                pue: 1.25,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "GDPR"
                ]
            },
            {
                name: "Tallaght DC",
                operator: "Amazon",
                powerMW: 360,
                pue: 1.23,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "GDPR"
                ]
            }
        ],
        services: [
            "EC2",
            "S3",
            "RDS",
            "Lambda",
            "EKS"
        ],
        connectedIXPs: [
            "INEX Dublin"
        ],
        upstreamProviders: [
            "Telia",
            "GTT",
            "PCCW"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#ff9900",
        latencyMs: 22,
        pricingTier: "standard",
        complianceFrameworks: [
            "GDPR",
            "ISO27001",
            "SOC2"
        ],
        sustainabilityScore: 88,
        carbonFreeEnergy: 96
    },
    {
        id: "aws-eu-central-1",
        code: "eu-central-1",
        name: "Europe (Frankfurt)",
        provider: "aws",
        lat: 50.11,
        lng: 8.68,
        city: "Frankfurt",
        country: "Germany",
        azCount: 3,
        totalPowerMW: 900,
        usedPowerMW: 720,
        coolingType: "Air + Liquid",
        tierLevel: "III",
        yearOpened: 2014,
        floorSpaceSqM: 95000,
        facilities: [
            {
                name: "Equinix FR4",
                operator: "Equinix",
                powerMW: 300,
                pue: 1.28,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "GDPR",
                    "BSI C5"
                ]
            },
            {
                name: "Interxion FRA",
                operator: "Interxion",
                powerMW: 300,
                pue: 1.30,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "GDPR"
                ]
            },
            {
                name: "e-shelter FRA",
                operator: "e-shelter",
                powerMW: 300,
                pue: 1.22,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "GDPR",
                    "BSI C5"
                ]
            }
        ],
        services: [
            "EC2",
            "S3",
            "RDS",
            "Lambda",
            "EKS",
            "CloudFront"
        ],
        connectedIXPs: [
            "DE-CIX Frankfurt"
        ],
        upstreamProviders: [
            "Deutsche Telekom",
            "Telia",
            "Cogent"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#ff9900",
        latencyMs: 8,
        pricingTier: "premium",
        complianceFrameworks: [
            "GDPR",
            "ISO27001",
            "SOC2",
            "BSI C5"
        ],
        sustainabilityScore: 78,
        carbonFreeEnergy: 71
    },
    {
        id: "aws-ap-northeast-1",
        code: "ap-northeast-1",
        name: "Asia Pacific (Tokyo)",
        provider: "aws",
        lat: 35.68,
        lng: 139.69,
        city: "Tokyo",
        country: "Japan",
        azCount: 4,
        totalPowerMW: 1100,
        usedPowerMW: 880,
        coolingType: "Air + Liquid",
        tierLevel: "III",
        yearOpened: 2011,
        floorSpaceSqM: 105000,
        facilities: [
            {
                name: "Equinix TY2",
                operator: "Equinix",
                powerMW: 280,
                pue: 1.35,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            },
            {
                name: "NTT Com Tokyo",
                operator: "NTT",
                powerMW: 280,
                pue: 1.30,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            },
            {
                name: "Colt Tokyo",
                operator: "Colt",
                powerMW: 280,
                pue: 1.32,
                tier: "III",
                certifications: [
                    "ISO 27001"
                ]
            }
        ],
        services: [
            "EC2",
            "S3",
            "RDS",
            "Lambda",
            "EKS"
        ],
        connectedIXPs: [
            "JPIX Tokyo",
            "JPNAP",
            "Equinix Tokyo"
        ],
        upstreamProviders: [
            "NTT",
            "KDDI",
            "Softbank"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#ff9900",
        latencyMs: 5,
        pricingTier: "premium",
        complianceFrameworks: [
            "ISO27001",
            "SOC2",
            "FISC"
        ],
        sustainabilityScore: 60,
        carbonFreeEnergy: 44
    },
    {
        id: "aws-ap-south-1",
        code: "ap-south-1",
        name: "Asia Pacific (Mumbai)",
        provider: "aws",
        lat: 19.07,
        lng: 72.88,
        city: "Mumbai",
        country: "India",
        azCount: 3,
        totalPowerMW: 600,
        usedPowerMW: 480,
        coolingType: "Air",
        tierLevel: "III",
        yearOpened: 2016,
        floorSpaceSqM: 55000,
        facilities: [
            {
                name: "CtrlS Mumbai",
                operator: "CtrlS",
                powerMW: 200,
                pue: 1.55,
                tier: "IV",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            },
            {
                name: "Yotta Mumbai",
                operator: "Yotta",
                powerMW: 200,
                pue: 1.48,
                tier: "III",
                certifications: [
                    "ISO 27001"
                ]
            },
            {
                name: "NxtGen Mumbai",
                operator: "NxtGen",
                powerMW: 200,
                pue: 1.50,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            }
        ],
        services: [
            "EC2",
            "S3",
            "RDS",
            "Lambda"
        ],
        connectedIXPs: [
            "DE-CIX Mumbai",
            "Mumbai-IX"
        ],
        upstreamProviders: [
            "Tata",
            "Reliance",
            "BSNL"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#ff9900",
        latencyMs: 15,
        pricingTier: "budget",
        complianceFrameworks: [
            "ISO27001",
            "SOC2",
            "MeitY"
        ],
        sustainabilityScore: 38,
        carbonFreeEnergy: 22
    },
    // ── Azure ─────────────────────────────────────────────────────────────────
    {
        id: "az-eastus",
        code: "eastus",
        name: "East US",
        provider: "azure",
        lat: 37.36,
        lng: -79.77,
        city: "Virginia",
        country: "United States",
        azCount: 3,
        totalPowerMW: 1800,
        usedPowerMW: 1350,
        coolingType: "Air + Evaporative",
        tierLevel: "III",
        yearOpened: 2008,
        floorSpaceSqM: 165000,
        facilities: [
            {
                name: "Boydton DC-1",
                operator: "Microsoft",
                powerMW: 600,
                pue: 1.18,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "FedRAMP",
                    "DoD IL4"
                ]
            },
            {
                name: "Boydton DC-2",
                operator: "Microsoft",
                powerMW: 600,
                pue: 1.17,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "FedRAMP"
                ]
            },
            {
                name: "Boydton DC-3",
                operator: "Microsoft",
                powerMW: 600,
                pue: 1.19,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            }
        ],
        services: [
            "VMs",
            "Storage",
            "SQL",
            "AKS",
            "Functions",
            "Cognitive Services"
        ],
        connectedIXPs: [
            "Equinix Ashburn (IAD)"
        ],
        upstreamProviders: [
            "Level3",
            "Cogent",
            "Telia"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#0078d4",
        latencyMs: 14,
        pricingTier: "standard",
        complianceFrameworks: [
            "SOC2",
            "ISO27001",
            "FedRAMP",
            "HIPAA",
            "GDPR"
        ],
        sustainabilityScore: 100,
        carbonFreeEnergy: 100
    },
    {
        id: "az-westeurope",
        code: "westeurope",
        name: "West Europe",
        provider: "azure",
        lat: 52.37,
        lng: 4.89,
        city: "Amsterdam",
        country: "Netherlands",
        azCount: 3,
        totalPowerMW: 900,
        usedPowerMW: 720,
        coolingType: "Air",
        tierLevel: "III",
        yearOpened: 2010,
        floorSpaceSqM: 88000,
        facilities: [
            {
                name: "AMS5",
                operator: "Equinix",
                powerMW: 300,
                pue: 1.24,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "GDPR"
                ]
            },
            {
                name: "Interxion AMS",
                operator: "Interxion",
                powerMW: 300,
                pue: 1.22,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "GDPR"
                ]
            },
            {
                name: "Microsoft AMS",
                operator: "Microsoft",
                powerMW: 300,
                pue: 1.20,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "GDPR"
                ]
            }
        ],
        services: [
            "VMs",
            "Storage",
            "SQL",
            "AKS",
            "Functions"
        ],
        connectedIXPs: [
            "AMS-IX Amsterdam",
            "NL-ix"
        ],
        upstreamProviders: [
            "KPN",
            "Telia",
            "BT"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#0078d4",
        latencyMs: 9,
        pricingTier: "standard",
        complianceFrameworks: [
            "GDPR",
            "ISO27001",
            "SOC2"
        ],
        sustainabilityScore: 95,
        carbonFreeEnergy: 100
    },
    {
        id: "az-japaneast",
        code: "japaneast",
        name: "Japan East",
        provider: "azure",
        lat: 35.68,
        lng: 139.76,
        city: "Tokyo",
        country: "Japan",
        azCount: 3,
        totalPowerMW: 650,
        usedPowerMW: 490,
        coolingType: "Air",
        tierLevel: "III",
        yearOpened: 2014,
        floorSpaceSqM: 62000,
        facilities: [
            {
                name: "Equinix TY4",
                operator: "Equinix",
                powerMW: 220,
                pue: 1.33,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            },
            {
                name: "KDDI Toyosu",
                operator: "KDDI",
                powerMW: 220,
                pue: 1.30,
                tier: "III",
                certifications: [
                    "ISO 27001"
                ]
            },
            {
                name: "AT Tokyo-1",
                operator: "AT Tokyo",
                powerMW: 210,
                pue: 1.35,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            }
        ],
        services: [
            "VMs",
            "Storage",
            "SQL",
            "AKS"
        ],
        connectedIXPs: [
            "JPIX Tokyo",
            "Equinix Tokyo"
        ],
        upstreamProviders: [
            "NTT",
            "KDDI",
            "IIJ"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#0078d4",
        latencyMs: 6,
        pricingTier: "premium",
        complianceFrameworks: [
            "ISO27001",
            "SOC2",
            "FISC",
            "My Number Act"
        ],
        sustainabilityScore: 62,
        carbonFreeEnergy: 46
    },
    // ── GCP ───────────────────────────────────────────────────────────────────
    {
        id: "gcp-us-central1",
        code: "us-central1",
        name: "us-central1 (Iowa)",
        provider: "gcp",
        lat: 41.26,
        lng: -95.86,
        city: "Council Bluffs",
        country: "United States",
        azCount: 4,
        totalPowerMW: 1400,
        usedPowerMW: 980,
        coolingType: "Evaporative",
        tierLevel: "III",
        yearOpened: 2009,
        floorSpaceSqM: 130000,
        facilities: [
            {
                name: "Council Bluffs DC-1",
                operator: "Google",
                powerMW: 700,
                pue: 1.12,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "FedRAMP"
                ]
            },
            {
                name: "Council Bluffs DC-2",
                operator: "Google",
                powerMW: 700,
                pue: 1.11,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            }
        ],
        services: [
            "GCE",
            "GCS",
            "BigQuery",
            "GKE",
            "Cloud Run",
            "Vertex AI"
        ],
        connectedIXPs: [
            "Any2 Chicago",
            "Equinix Chicago"
        ],
        upstreamProviders: [
            "Level3",
            "Telia",
            "Cogent"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#34a853",
        latencyMs: 20,
        pricingTier: "budget",
        complianceFrameworks: [
            "SOC2",
            "ISO27001",
            "FedRAMP"
        ],
        sustainabilityScore: 100,
        carbonFreeEnergy: 100
    },
    {
        id: "gcp-europe-west1",
        code: "europe-west1",
        name: "europe-west1 (Belgium)",
        provider: "gcp",
        lat: 50.44,
        lng: 3.82,
        city: "St. Ghislain",
        country: "Belgium",
        azCount: 3,
        totalPowerMW: 750,
        usedPowerMW: 540,
        coolingType: "Evaporative",
        tierLevel: "III",
        yearOpened: 2012,
        floorSpaceSqM: 72000,
        facilities: [
            {
                name: "St. Ghislain DC",
                operator: "Google",
                powerMW: 750,
                pue: 1.09,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2",
                    "GDPR"
                ]
            }
        ],
        services: [
            "GCE",
            "GCS",
            "BigQuery",
            "GKE",
            "Cloud Run"
        ],
        connectedIXPs: [
            "AMS-IX",
            "BNIX"
        ],
        upstreamProviders: [
            "Telia",
            "BT",
            "Level3"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#34a853",
        latencyMs: 11,
        pricingTier: "standard",
        complianceFrameworks: [
            "GDPR",
            "ISO27001",
            "SOC2"
        ],
        sustainabilityScore: 100,
        carbonFreeEnergy: 100
    },
    {
        id: "gcp-asia-northeast1",
        code: "asia-northeast1",
        name: "asia-northeast1 (Tokyo)",
        provider: "gcp",
        lat: 35.66,
        lng: 139.74,
        city: "Tokyo",
        country: "Japan",
        azCount: 3,
        totalPowerMW: 580,
        usedPowerMW: 420,
        coolingType: "Air",
        tierLevel: "III",
        yearOpened: 2016,
        floorSpaceSqM: 54000,
        facilities: [
            {
                name: "Equinix TY3",
                operator: "Equinix",
                powerMW: 200,
                pue: 1.34,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            },
            {
                name: "Telehouse TKY",
                operator: "Telehouse",
                powerMW: 190,
                pue: 1.31,
                tier: "III",
                certifications: [
                    "ISO 27001"
                ]
            },
            {
                name: "ITOCHU IaaS",
                operator: "ITOCHU",
                powerMW: 190,
                pue: 1.36,
                tier: "III",
                certifications: [
                    "ISO 27001",
                    "SOC 2"
                ]
            }
        ],
        services: [
            "GCE",
            "GCS",
            "BigQuery",
            "GKE",
            "Cloud Run"
        ],
        connectedIXPs: [
            "JPIX Tokyo",
            "JPNAP"
        ],
        upstreamProviders: [
            "NTT",
            "Softbank",
            "KDDI"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "region",
        color: "#34a853",
        latencyMs: 7,
        pricingTier: "premium",
        complianceFrameworks: [
            "ISO27001",
            "SOC2",
            "FISC"
        ],
        sustainabilityScore: 100,
        carbonFreeEnergy: 100
    },
    // ── Cloudflare PoPs ───────────────────────────────────────────────────────
    {
        id: "cf-ord",
        code: "ORD",
        name: "Cloudflare Chicago",
        provider: "cloudflare",
        lat: 41.97,
        lng: -87.91,
        city: "Chicago",
        country: "United States",
        azCount: 1,
        totalPowerMW: 18,
        usedPowerMW: 12,
        coolingType: "Air",
        tierLevel: "III",
        yearOpened: 2015,
        floorSpaceSqM: 800,
        facilities: [
            {
                name: "Equinix CH1",
                operator: "Equinix",
                powerMW: 18,
                pue: 1.28,
                tier: "III",
                certifications: [
                    "SOC 2"
                ]
            }
        ],
        services: [
            "CDN",
            "Workers",
            "R2",
            "DDoS",
            "Magic Transit"
        ],
        connectedIXPs: [
            "Any2 Chicago",
            "Equinix Chicago"
        ],
        upstreamProviders: [
            "Cogent",
            "Level3",
            "GTT"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "pop",
        color: "#f48120",
        latencyMs: 8,
        pricingTier: "budget",
        complianceFrameworks: [
            "SOC2"
        ],
        sustainabilityScore: 100,
        carbonFreeEnergy: 100
    },
    {
        id: "cf-lhr",
        code: "LHR",
        name: "Cloudflare London",
        provider: "cloudflare",
        lat: 51.47,
        lng: -0.46,
        city: "London",
        country: "United Kingdom",
        azCount: 1,
        totalPowerMW: 22,
        usedPowerMW: 15,
        coolingType: "Air",
        tierLevel: "III",
        yearOpened: 2014,
        floorSpaceSqM: 950,
        facilities: [
            {
                name: "Equinix LD4",
                operator: "Equinix",
                powerMW: 22,
                pue: 1.25,
                tier: "III",
                certifications: [
                    "SOC 2",
                    "ISO 27001"
                ]
            }
        ],
        services: [
            "CDN",
            "Workers",
            "R2",
            "DDoS",
            "Magic Transit"
        ],
        connectedIXPs: [
            "LINX London",
            "LONAP"
        ],
        upstreamProviders: [
            "Cogent",
            "BT",
            "Level3"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "pop",
        color: "#f48120",
        latencyMs: 5,
        pricingTier: "budget",
        complianceFrameworks: [
            "SOC2",
            "ISO27001",
            "GDPR"
        ],
        sustainabilityScore: 100,
        carbonFreeEnergy: 100
    },
    {
        id: "cf-fra",
        code: "FRA",
        name: "Cloudflare Frankfurt",
        provider: "cloudflare",
        lat: 50.03,
        lng: 8.57,
        city: "Frankfurt",
        country: "Germany",
        azCount: 1,
        totalPowerMW: 25,
        usedPowerMW: 18,
        coolingType: "Air",
        tierLevel: "III",
        yearOpened: 2013,
        floorSpaceSqM: 1100,
        facilities: [
            {
                name: "Equinix FR5",
                operator: "Equinix",
                powerMW: 25,
                pue: 1.22,
                tier: "III",
                certifications: [
                    "SOC 2",
                    "ISO 27001",
                    "GDPR"
                ]
            }
        ],
        services: [
            "CDN",
            "Workers",
            "R2",
            "DDoS",
            "Magic Transit"
        ],
        connectedIXPs: [
            "DE-CIX Frankfurt"
        ],
        upstreamProviders: [
            "Telia",
            "Cogent",
            "GTT"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "pop",
        color: "#f48120",
        latencyMs: 4,
        pricingTier: "budget",
        complianceFrameworks: [
            "SOC2",
            "ISO27001",
            "GDPR",
            "BSI C5"
        ],
        sustainabilityScore: 100,
        carbonFreeEnergy: 100
    },
    {
        id: "cf-sin",
        code: "SIN",
        name: "Cloudflare Singapore",
        provider: "cloudflare",
        lat: 1.35,
        lng: 103.99,
        city: "Singapore",
        country: "Singapore",
        azCount: 1,
        totalPowerMW: 20,
        usedPowerMW: 14,
        coolingType: "Air",
        tierLevel: "III",
        yearOpened: 2014,
        floorSpaceSqM: 900,
        facilities: [
            {
                name: "Equinix SG1",
                operator: "Equinix",
                powerMW: 20,
                pue: 1.40,
                tier: "III",
                certifications: [
                    "SOC 2",
                    "ISO 27001"
                ]
            }
        ],
        services: [
            "CDN",
            "Workers",
            "R2",
            "DDoS"
        ],
        connectedIXPs: [
            "BBIX Singapore",
            "Equinix Singapore"
        ],
        upstreamProviders: [
            "Singtel",
            "StarHub",
            "M1"
        ],
        ipv6: true,
        status: "operational",
        statusMessage: "All systems operational",
        tier: "pop",
        color: "#f48120",
        latencyMs: 6,
        pricingTier: "budget",
        complianceFrameworks: [
            "SOC2",
            "MTCS"
        ],
        sustainabilityScore: 82,
        carbonFreeEnergy: 74
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/InfoCards.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BGPAlertInfoCard": (()=>BGPAlertInfoCard),
    "CellTowerInfoCard": (()=>CellTowerInfoCard),
    "CloudRegionInfoCard": (()=>CloudRegionInfoCard),
    "IXPInfoCard": (()=>IXPInfoCard),
    "OutageInfoCard": (()=>OutageInfoCard),
    "SubmarineCableInfoCard": (()=>SubmarineCableInfoCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cloudData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
function CloseBtn({ onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "w-6 h-6 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all text-xs",
        children: "✕"
    }, void 0, false, {
        fileName: "[project]/components/InfoCards.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = CloseBtn;
function InfoRow({ label, value, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center py-1 border-b border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] font-mono text-slate-500 tracking-widest uppercase",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-mono font-medium",
                style: {
                    color: color || "#e2e8f0"
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoCards.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c1 = InfoRow;
function Badge({ text, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[9px] font-mono px-2 py-0.5 rounded-full",
        style: {
            background: color + "22",
            border: `1px solid ${color}44`,
            color
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/components/InfoCards.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c2 = Badge;
function SubmarineCableInfoCard() {
    _s();
    const { selectedCable, setSelectedCable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    if (!selectedCable) return null;
    const c = selectedCable;
    const sc = {
        active: "#00f5ff",
        planned: "#ffffff",
        retired: "#555",
        repair: "#ffb800"
    }[c.status] || "#00f5ff";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-72",
        style: {
            animation: "slideIn 0.3s ease-out",
            border: `1px solid ${sc}44`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "🌊"
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono font-bold",
                                        style: {
                                            color: sc
                                        },
                                        children: c.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] text-slate-500 font-mono",
                                        children: "SUBMARINE CABLE SYSTEM"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseBtn, {
                        onClick: ()=>setSelectedCable(null)
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0.5 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Status",
                        value: c.status.toUpperCase(),
                        color: sc
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Capacity",
                        value: c.capacityTbps ? `${c.capacityTbps} Tbps` : "—",
                        color: "#00ff88"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Length",
                        value: c.lengthKm ? `${c.lengthKm.toLocaleString()} km` : "—"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Year Ready",
                        value: c.yearReady ?? "—"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Landing Pts",
                        value: c.landingPoints.length
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-1.5",
                        children: "LANDING POINTS"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: c.landingPoints.map((lp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[10px] font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                        style: {
                                            background: sc
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-300",
                                        children: lp.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-600 ml-auto",
                                        children: lp.country
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-1.5",
                        children: "OWNERS"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: [
                            c.owners.slice(0, 4).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                    text: o.split(" ")[0],
                                    color: sc
                                }, o, false, {
                                    fileName: "[project]/components/InfoCards.tsx",
                                    lineNumber: 74,
                                    columnNumber: 42
                                }, this)),
                            c.owners.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                text: `+${c.owners.length - 4}`,
                                color: "#555"
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 75,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoCards.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(SubmarineCableInfoCard, "eAtSogXXem5w4xUqY9cxZP1gQM4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c3 = SubmarineCableInfoCard;
function CloudRegionInfoCard() {
    _s1();
    const { selectedRegion, setSelectedRegion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    if (!selectedRegion) return null;
    const r = selectedRegion;
    const col = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROVIDER_COLORS"][r.provider] || "#ffffff";
    const sc = {
        operational: "#00ff88",
        degraded: "#ffb800",
        outage: "#ff3b3b"
    }[r.status] || "#00ff88";
    const utilPct = r.totalPowerMW > 0 ? Math.round(r.usedPowerMW / r.totalPowerMW * 100) : 0;
    const utilCol = utilPct > 85 ? "#ff3b3b" : utilPct > 70 ? "#ffb800" : "#00ff88";
    const ecoCol = r.sustainabilityScore >= 80 ? "#00ff88" : r.sustainabilityScore >= 50 ? "#ffb800" : "#ff3b3b";
    const tabs = [
        "overview",
        "facilities",
        "network",
        "compliance"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-4 top-16 bottom-16 z-50 glass-panel rounded-xl overflow-hidden flex flex-col w-80",
        style: {
            animation: "slideIn 0.3s ease-out",
            border: `1px solid ${col}44`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex-shrink-0",
                style: {
                    borderBottom: `1px solid ${col}22`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0",
                                        style: {
                                            background: col + "22",
                                            border: `1px solid ${col}44`
                                        },
                                        children: r.provider === "aws" ? "☁" : r.provider === "azure" ? "⬡" : r.provider === "gcp" ? "◈" : "◎"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-mono font-bold leading-tight",
                                                style: {
                                                    color: col
                                                },
                                                children: r.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[9px] text-slate-500 font-mono",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROVIDER_NAMES"][r.provider],
                                                    " · ",
                                                    r.city,
                                                    ", ",
                                                    r.country
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseBtn, {
                                onClick: ()=>{
                                    setSelectedRegion(null);
                                    setTab("overview");
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-2 py-1 rounded-lg mb-2",
                        style: {
                            background: sc + "11",
                            border: `1px solid ${sc}22`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                style: {
                                    background: sc,
                                    boxShadow: `0 0 5px ${sc}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono",
                                style: {
                                    color: sc
                                },
                                children: r.status === "operational" ? "ALL SYSTEMS OPERATIONAL" : r.status === "degraded" ? "PERFORMANCE DEGRADATION" : "SERVICE OUTAGE"
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            r.latencyMs != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto text-[9px] font-mono",
                                style: {
                                    color: r.latencyMs < 20 ? "#00ff88" : r.latencyMs < 60 ? "#ffb800" : "#ff3b3b"
                                },
                                children: [
                                    r.latencyMs,
                                    "ms"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mb-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] font-mono text-slate-600",
                                        children: "POWER LOAD"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] font-mono",
                                        style: {
                                            color: utilCol
                                        },
                                        children: [
                                            utilPct,
                                            "% · ",
                                            r.usedPowerMW,
                                            "/",
                                            r.totalPowerMW,
                                            " MW"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 rounded-full bg-white/5 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full transition-all",
                                    style: {
                                        width: `${utilPct}%`,
                                        background: utilCol,
                                        boxShadow: `0 0 6px ${utilCol}88`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/InfoCards.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 mt-3",
                        children: tabs.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab(t),
                                className: "flex-1 py-1 rounded text-[8px] font-mono uppercase tracking-wider transition-all",
                                style: {
                                    background: tab === t ? col + "33" : "transparent",
                                    border: `1px solid ${tab === t ? col + "66" : "transparent"}`,
                                    color: tab === t ? col : "#64748b"
                                },
                                children: t === "overview" ? "INFO" : t === "facilities" ? "DCs" : t === "network" ? "NET" : "CERT"
                            }, t, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-3",
                style: {
                    scrollbarWidth: "none"
                },
                children: [
                    tab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Region Code",
                                        value: r.code,
                                        color: col
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Avail. Zones",
                                        value: r.azCount
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Tier",
                                        value: `Tier ${r.tierLevel}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Opened",
                                        value: r.yearOpened
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Floor Space",
                                        value: `${(r.floorSpaceSqM / 1000).toFixed(0)}k m²`
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Cooling",
                                        value: r.coolingType
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Total Capacity",
                                        value: `${r.totalPowerMW} MW`
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg p-2.5",
                                style: {
                                    background: "#ffffff08",
                                    border: "1px solid #ffffff11"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-mono text-slate-500",
                                                children: "SUSTAINABILITY"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono font-bold",
                                                style: {
                                                    color: ecoCol
                                                },
                                                children: [
                                                    r.sustainabilityScore,
                                                    "/100"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 rounded-full bg-white/5 overflow-hidden mb-1.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full rounded-full",
                                            style: {
                                                width: `${r.sustainabilityScore}%`,
                                                background: `linear-gradient(90deg, #00ff88, ${ecoCol})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoCards.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] font-mono text-slate-600",
                                                children: "RENEWABLE ENERGY"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] font-mono",
                                                style: {
                                                    color: ecoCol
                                                },
                                                children: [
                                                    r.carbonFreeEnergy,
                                                    "% CFE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-1.5",
                                        children: "SERVICES"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: r.services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                text: s,
                                                color: col
                                            }, s, false, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 190,
                                                columnNumber: 36
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-1.5",
                                        children: "PRICING TIER"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 rounded-full",
                                                style: {
                                                    background: r.pricingTier === "premium" ? "#ff9900" : r.pricingTier === "standard" ? "#00f5ff" : "#00ff88"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-mono text-slate-300 capitalize",
                                                children: r.pricingTier
                                            }, void 0, false, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true),
                    tab === "facilities" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] font-mono text-slate-500 tracking-widest",
                                children: [
                                    r.facilities.length,
                                    " PHYSICAL DATA CENTRES"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            r.facilities.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg p-2.5",
                                    style: {
                                        background: "#ffffff08",
                                        border: `1px solid ${col}22`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-mono font-bold",
                                                            style: {
                                                                color: col
                                                            },
                                                            children: f.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InfoCards.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[8px] font-mono text-slate-500",
                                                            children: f.operator
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InfoCards.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/InfoCards.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[8px] font-mono px-1.5 py-0.5 rounded",
                                                    style: {
                                                        background: col + "22",
                                                        color: col
                                                    },
                                                    children: [
                                                        "Tier ",
                                                        f.tier
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/InfoCards.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/InfoCards.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-0.5 mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono text-slate-600",
                                                            children: "CAPACITY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InfoCards.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono text-slate-300",
                                                            children: [
                                                                f.powerMW,
                                                                " MW"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/InfoCards.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/InfoCards.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono text-slate-600",
                                                            children: "PUE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InfoCards.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono",
                                                            style: {
                                                                color: f.pue < 1.2 ? "#00ff88" : f.pue < 1.4 ? "#ffb800" : "#ff3b3b"
                                                            },
                                                            children: f.pue.toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/InfoCards.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/InfoCards.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/InfoCards.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1",
                                            children: f.certifications.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[7px] font-mono px-1 py-0.5 rounded",
                                                    style: {
                                                        background: "#ffffff11",
                                                        color: "#94a3b8"
                                                    },
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/components/InfoCards.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 44
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoCards.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/InfoCards.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true),
                    tab === "network" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-2",
                                        children: "CONNECTED IXPs"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: r.connectedIXPs.map((ix)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[10px] font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full",
                                                        style: {
                                                            background: "#a855f7"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoCards.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300",
                                                        children: ix
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoCards.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, ix, true, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-2",
                                        children: "UPSTREAM TRANSIT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: r.upstreamProviders.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[10px] font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full",
                                                        style: {
                                                            background: "#00f5ff"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoCards.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300",
                                                        children: p
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoCards.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, p, true, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-1.5",
                                        children: "CAPABILITIES"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                                label: "IPv6",
                                                value: r.ipv6 ? "SUPPORTED" : "NOT SUPPORTED",
                                                color: r.ipv6 ? "#00ff88" : "#ff3b3b"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this),
                                            r.latencyMs != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                                label: "Latency to PoP",
                                                value: `${r.latencyMs}ms avg`,
                                                color: "#00f5ff"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 261,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true),
                    tab === "compliance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-2",
                                        children: "COMPLIANCE FRAMEWORKS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-1.5",
                                        children: r.complianceFrameworks.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 px-2 py-1.5 rounded-lg",
                                                style: {
                                                    background: "#00ff8811",
                                                    border: "1px solid #00ff8833"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-1 rounded-full bg-green-400 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoCards.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono text-slate-300",
                                                        children: f
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoCards.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, f, true, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg p-2.5",
                                style: {
                                    background: "#ffffff08",
                                    border: "1px solid #ffffff11"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] font-mono text-slate-500 mb-1.5",
                                        children: "PHYSICAL SECURITY"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            "24/7 Security Guards",
                                            "Biometric Access",
                                            "CCTV Surveillance",
                                            "Mantrap Entry",
                                            "Seismic Bracing"
                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px]",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoCards.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono text-slate-400",
                                                        children: s
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/InfoCards.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, s, true, {
                                                fileName: "[project]/components/InfoCards.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg p-2.5",
                                style: {
                                    background: r.tierLevel === "IV" ? "#00ff8811" : "#ffb80011",
                                    border: `1px solid ${r.tierLevel === "IV" ? "#00ff8833" : "#ffb80033"}`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-mono text-slate-500",
                                            children: "UPTIME SLA"
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoCards.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-mono font-bold",
                                            style: {
                                                color: r.tierLevel === "IV" ? "#00ff88" : "#ffb800"
                                            },
                                            children: r.tierLevel === "IV" ? "99.995%" : r.tierLevel === "III" ? "99.982%" : "99.749%"
                                        }, void 0, false, {
                                            fileName: "[project]/components/InfoCards.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/InfoCards.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoCards.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s1(CloudRegionInfoCard, "VDf0Akl2FkqPNKLBEMdvBy+5iGA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c4 = CloudRegionInfoCard;
function IXPInfoCard() {
    _s2();
    const { selectedIXP, setSelectedIXP } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    if (!selectedIXP) return null;
    const ix = selectedIXP;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-72",
        style: {
            animation: "slideIn 0.3s ease-out",
            border: "1px solid rgba(168,85,247,0.4)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "🔄"
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono font-bold text-purple-400",
                                        children: ix.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] text-slate-500 font-mono",
                                        children: "INTERNET EXCHANGE POINT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseBtn, {
                        onClick: ()=>setSelectedIXP(null)
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0.5 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Location",
                        value: `${ix.city}, ${ix.country}`
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Traffic",
                        value: `${ix.trafficGbps.toLocaleString()} Gbps`,
                        color: "#a855f7"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Members",
                        value: ix.memberCount.toLocaleString(),
                        color: "#00f5ff"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Peering",
                        value: ix.peeringPolicy.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Status",
                        value: ix.status.toUpperCase(),
                        color: ix.status === "active" ? "#00ff88" : "#ff3b3b"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-1.5",
                        children: "TRAFFIC VOLUME"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 rounded-full overflow-hidden",
                        style: {
                            background: "#1a1a2e"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full",
                            style: {
                                width: `${Math.min(100, ix.trafficGbps / 15000 * 100)}%`,
                                background: "linear-gradient(90deg, #a855f7, #00f5ff)",
                                boxShadow: "0 0 8px #a855f7"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/InfoCards.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-1.5",
                        children: "MEMBER NETWORKS"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: ix.networks.slice(0, 5).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                text: n.split(" ")[0],
                                color: "#a855f7"
                            }, n, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 340,
                                columnNumber: 45
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoCards.tsx",
        lineNumber: 312,
        columnNumber: 5
    }, this);
}
_s2(IXPInfoCard, "e/gc+1wEr5bYXuGzQfbKlUQTDH0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c5 = IXPInfoCard;
function BGPAlertInfoCard() {
    _s3();
    const { selectedAlert, setSelectedAlert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    if (!selectedAlert) return null;
    const a = selectedAlert;
    const sc = {
        critical: "#ff0000",
        high: "#ff3b3b",
        medium: "#ffb800",
        low: "#00f5ff"
    }[a.severity] || "#ffb800";
    const icons = {
        hijack: "🔴",
        leak: "🟡",
        withdrawal: "🔵",
        anomaly: "⚡"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-72",
        style: {
            animation: "slideIn 0.3s ease-out",
            border: `1px solid ${sc}44`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: icons[a.type] || "⚡"
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono font-bold",
                                        style: {
                                            color: sc
                                        },
                                        children: [
                                            "BGP ",
                                            a.type.replace("_", " ").toUpperCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] text-slate-500 font-mono",
                                        children: "ROUTING ALERT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseBtn, {
                        onClick: ()=>setSelectedAlert(null)
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0.5 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Severity",
                        value: a.severity.toUpperCase(),
                        color: sc
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "ASN",
                        value: `AS${a.asn}`,
                        color: "#00f5ff"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "AS Name",
                        value: a.asnName
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Prefix",
                        value: a.prefix,
                        color: "#aaff00"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Detected",
                        value: new Date(a.timestamp).toLocaleTimeString()
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 px-3 py-2 rounded-lg",
                style: {
                    background: sc + "11",
                    border: `1px solid ${sc}33`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-mono text-slate-400 leading-relaxed",
                    children: a.description
                }, void 0, false, {
                    fileName: "[project]/components/InfoCards.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            a.affectedCountries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[9px] font-mono text-slate-500 tracking-widest mb-1",
                        children: "AFFECTED"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 379,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: a.affectedCountries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                text: c,
                                color: sc
                            }, c, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 381,
                                columnNumber: 43
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 378,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoCards.tsx",
        lineNumber: 355,
        columnNumber: 5
    }, this);
}
_s3(BGPAlertInfoCard, "y8QaYu5xqcInK/LYAom/9JvGnQA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c6 = BGPAlertInfoCard;
function OutageInfoCard() {
    _s4();
    const { selectedOutage, setSelectedOutage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    if (!selectedOutage) return null;
    const o = selectedOutage;
    const sc = {
        critical: "#ff0000",
        major: "#ff3b3b",
        minor: "#ffb800"
    }[o.severity] || "#ffb800";
    const elapsed = Math.round((Date.now() - o.startTime) / 60000);
    const duration = elapsed > 60 ? `${Math.round(elapsed / 60)}h ${elapsed % 60}m` : `${elapsed}m`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-72",
        style: {
            animation: "slideIn 0.3s ease-out",
            border: `1px solid ${sc}44`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "🚨"
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono font-bold",
                                        style: {
                                            color: sc
                                        },
                                        children: o.region
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] text-slate-500 font-mono",
                                        children: "INTERNET OUTAGE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseBtn, {
                        onClick: ()=>setSelectedOutage(null)
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0.5 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Severity",
                        value: o.severity.toUpperCase(),
                        color: sc
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Country",
                        value: o.country
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Affected ASNs",
                        value: o.affectedAsns,
                        color: "#ff3b3b"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Duration",
                        value: duration,
                        color: "#ffb800"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Status",
                        value: o.active ? "ACTIVE" : "RESOLVED",
                        color: o.active ? sc : "#00ff88"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 rounded-lg",
                style: {
                    background: sc + "11",
                    border: `1px solid ${sc}33`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-mono text-slate-400 leading-relaxed",
                    children: o.description
                }, void 0, false, {
                    fileName: "[project]/components/InfoCards.tsx",
                    lineNumber: 418,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            o.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1.5 h-1.5 rounded-full",
                        style: {
                            background: sc,
                            animation: "blink 1s step-end infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] font-mono",
                        style: {
                            color: sc
                        },
                        children: "MONITORING ACTIVE"
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 423,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 421,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoCards.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, this);
}
_s4(OutageInfoCard, "XlGbpq59s+vk61ZpikXILONPujc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c7 = OutageInfoCard;
function CellTowerInfoCard() {
    _s5();
    const { selectedTower, setSelectedTower } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    if (!selectedTower) return null;
    const t = selectedTower;
    const tc = {
        "5G": "#00ff88",
        "5G-mmWave": "#00ffcc",
        "4G": "#00f5ff",
        "3G": "#ffb800",
        "2G": "#888888"
    }[t.technology] || "#00f5ff";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-4 top-1/2 -translate-y-1/2 z-50 glass-panel rounded-xl p-4 w-64",
        style: {
            animation: "slideIn 0.3s ease-out",
            border: `1px solid ${tc}44`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "📡"
                            }, void 0, false, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 441,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono font-bold",
                                        style: {
                                            color: tc
                                        },
                                        children: [
                                            t.technology,
                                            " TOWER"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] text-slate-500 font-mono",
                                        children: t.operator
                                    }, void 0, false, {
                                        fileName: "[project]/components/InfoCards.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InfoCards.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseBtn, {
                        onClick: ()=>setSelectedTower(null)
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Technology",
                        value: t.technology,
                        color: tc
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Operator",
                        value: t.operator
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "MCC / MNC",
                        value: `${t.mcc} / ${String(t.mnc).padStart(3, "0")}`
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Range",
                        value: `${Math.round(t.range)} m`
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Band",
                        value: t.frequencyBand
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: "Coordinates",
                        value: `${t.lat.toFixed(4)}, ${t.lng.toFixed(4)}`
                    }, void 0, false, {
                        fileName: "[project]/components/InfoCards.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InfoCards.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InfoCards.tsx",
        lineNumber: 437,
        columnNumber: 5
    }, this);
}
_s5(CellTowerInfoCard, "fvR+yEPqRg2VrWx+e/jq8Ycl9UA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c8 = CellTowerInfoCard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "CloseBtn");
__turbopack_context__.k.register(_c1, "InfoRow");
__turbopack_context__.k.register(_c2, "Badge");
__turbopack_context__.k.register(_c3, "SubmarineCableInfoCard");
__turbopack_context__.k.register(_c4, "CloudRegionInfoCard");
__turbopack_context__.k.register(_c5, "IXPInfoCard");
__turbopack_context__.k.register(_c6, "BGPAlertInfoCard");
__turbopack_context__.k.register(_c7, "OutageInfoCard");
__turbopack_context__.k.register(_c8, "CellTowerInfoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/LoadingScreen.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoadingScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LoadingScreen() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("INITIALIZING GLOBE ENGINE");
    const PHASES = [
        "INITIALIZING GLOBE ENGINE",
        "LOADING SATELLITE IMAGERY",
        "FETCHING SUBMARINE CABLE DATA",
        "LOADING CLOUD INFRASTRUCTURE",
        "INDEXING INTERNET EXCHANGES",
        "CONNECTING BGP FEEDS",
        "MAPPING FIBER ROUTES",
        "CALIBRATING SENSORS",
        "TELECOMVIEW READY"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            let p = 0;
            const t = setInterval({
                "LoadingScreen.useEffect.t": ()=>{
                    p += 2 + Math.random() * 4;
                    if (p >= 100) {
                        p = 100;
                        clearInterval(t);
                    }
                    setProgress(Math.min(p, 100));
                    setPhase(PHASES[Math.floor(p / 100 * (PHASES.length - 1))]);
                }
            }["LoadingScreen.useEffect.t"], 80);
            return ({
                "LoadingScreen.useEffect": ()=>clearInterval(t)
            })["LoadingScreen.useEffect"];
        }
    }["LoadingScreen.useEffect"], []); // eslint-disable-line
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "#020408",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(0,245,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,255,0.025) 1px,transparent 1px)",
                    backgroundSize: "48px 48px"
                }
            }, void 0, false, {
                fileName: "[project]/components/LoadingScreen.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(0,245,255,0.04) 0%,transparent 70%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/LoadingScreen.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    maxWidth: 400
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 64,
                            marginBottom: 24,
                            animation: "spinSlow 8s linear infinite",
                            display: "inline-block"
                        },
                        children: "🌐"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingScreen.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Orbitron',monospace",
                            fontSize: 28,
                            fontWeight: 900,
                            color: "#00f5ff",
                            letterSpacing: "0.2em",
                            textShadow: "0 0 30px #00f5ff66",
                            marginBottom: 4
                        },
                        children: "TELECOMVIEW"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingScreen.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'IBM Plex Mono',monospace",
                            fontSize: "10px",
                            color: "#334155",
                            letterSpacing: "0.3em",
                            marginBottom: 40
                        },
                        children: "GLOBAL NETWORK INTELLIGENCE"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingScreen.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "100%",
                            height: 2,
                            background: "rgba(0,245,255,0.1)",
                            borderRadius: 1,
                            marginBottom: 16,
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: "100%",
                                width: `${progress}%`,
                                background: "linear-gradient(90deg,#0066aa,#00f5ff)",
                                borderRadius: 1,
                                boxShadow: "0 0 12px #00f5ff",
                                transition: "width 0.12s ease"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/LoadingScreen.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingScreen.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'IBM Plex Mono',monospace",
                            fontSize: "10px",
                            color: "#334155",
                            letterSpacing: "0.15em",
                            height: 16
                        },
                        children: [
                            phase,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    animation: "blinkCursor 0.8s step-end infinite"
                                },
                                children: "_"
                            }, void 0, false, {
                                fileName: "[project]/components/LoadingScreen.tsx",
                                lineNumber: 73,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LoadingScreen.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Orbitron',monospace",
                            fontSize: 11,
                            color: "rgba(0,245,255,0.4)",
                            marginTop: 8
                        },
                        children: [
                            Math.round(progress),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LoadingScreen.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LoadingScreen.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes spinSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes blinkCursor{0%,100%{opacity:1}50%{opacity:0}}
      `
            }, void 0, false, {
                fileName: "[project]/components/LoadingScreen.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LoadingScreen.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(LoadingScreen, "c170NlSv7CVMIvwdtNhgT3Qivjo=");
_c = LoadingScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/HoverTooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HoverTooltip)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HoverTooltip() {
    _s();
    const { hoverTooltip } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    if (!hoverTooltip) return null;
    const { x, y, icon, label, sublabel } = hoverTooltip;
    const flipX = "object" !== "undefined" && x > window.innerWidth - 220;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed z-[100] pointer-events-none glass-panel rounded-lg px-3 py-2",
        style: {
            left: flipX ? x - 200 : x + 14,
            top: y - 10,
            border: "1px solid rgba(0,245,255,0.2)",
            animation: "fadeIn 0.1s ease-out"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/components/HoverTooltip.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[11px] font-mono text-white whitespace-nowrap",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/components/HoverTooltip.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        sublabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[9px] font-mono text-slate-500 whitespace-nowrap",
                            children: sublabel
                        }, void 0, false, {
                            fileName: "[project]/components/HoverTooltip.tsx",
                            lineNumber: 23,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HoverTooltip.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HoverTooltip.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HoverTooltip.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(HoverTooltip, "J3THvnT+C1v6Jc34Z4b0g1jSGys=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c = HoverTooltip;
var _c;
__turbopack_context__.k.register(_c, "HoverTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/TelecomViewContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HUD.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LayerPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LayerPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BGPAlertPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BGPAlertPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ControlBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ControlBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IntelligencePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/IntelligencePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/InfoCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HoverTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HoverTooltip.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
// Cesium must not SSR
const GlobeViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/components/GlobeViewer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/components/GlobeViewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = GlobeViewer;
function TelecomViewApp() {
    _s();
    const globeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 w-full h-full overflow-hidden",
        style: {
            background: "#020408"
        },
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 33,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeViewer, {
                ref: globeRef
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LayerPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                globeRef: globeRef
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IntelligencePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmarineCableInfoCard"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudRegionInfoCard"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IXPInfoCard"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BGPAlertInfoCard"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutageInfoCard"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellTowerInfoCard"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BGPAlertPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ControlBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControlBar"], {
                globeRef: globeRef
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ControlBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HoverTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(TelecomViewApp, "TG2p88UcZuSGD3GZFo+52nQWjeY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelecomView"]
    ];
});
_c1 = TelecomViewApp;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$TelecomViewContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelecomViewProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TelecomViewApp, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c2 = Page;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "GlobeViewer");
__turbopack_context__.k.register(_c1, "TelecomViewApp");
__turbopack_context__.k.register(_c2, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_dfaa6c67._.js.map