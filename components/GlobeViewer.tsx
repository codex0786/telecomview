"use client";
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { useTelecomView } from "@/lib/TelecomViewContext";
import { PROVIDER_COLORS } from "@/lib/cloudData";
import { CABLE_STATUS_COLORS } from "@/lib/cableData";

declare global {
  interface Window { Cesium: any; CESIUM_BASE_URL: string; __cesiumViewer: any; }
}

export interface GlobeHandle {
  flyTo: (lat: number, lng: number, alt?: number) => void;
  screenshot: () => Promise<string | null>;
  resetView: () => void;
  toggleDayNight: () => void;
}

// Ion token — set via env or use the default provided
const TOKEN = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNmQ1OGY5ZC05MzAzLTQ5MDYtYjE5OS04NTgwZTcxNzNlMGIiLCJpZCI6MjU5LCJpYXQiOjE1MjgwNTYzNjl9.LtjKVDMxaLFd2VQs4cYKFZ97EVTPF-JyMKKx1FkP1Z4";
// Ion base imagery asset provided by user
const ION_BASE_ASSET_ID = 3830186;

// Module-level entity registries (cleared on unmount)
const cableEntities   = new Map<string, any[]>();
const regionEntities  = new Map<string, any>();
const ixpEntities     = new Map<string, any>();
const bgpEntities     = new Map<string, any>();
const outageEntities  = new Map<string, any>();
const towerEntities   = new Map<string, any>();
const fiberEntities   = new Map<string, any[]>();
const latencyEntities: any[] = [];

// ── Icon generators ───────────────────────────────────────────────────────────
function createDCIcon(color: string, tier: string): HTMLCanvasElement {
  const size = tier === "pop" ? 28 : 40;
  const c = document.createElement("canvas"); c.width = size; c.height = size;
  const ctx = c.getContext("2d")!;
  const cx = size / 2, cy = size / 2, r = size / 2 - 3;
  ctx.shadowColor = color; ctx.shadowBlur = 12;
  ctx.strokeStyle = color; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = color + "44";
  ctx.beginPath(); ctx.arc(cx, cy, r - 3, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = color; ctx.shadowBlur = 8;
  ctx.beginPath(); ctx.arc(cx, cy, tier === "pop" ? 3 : 5, 0, Math.PI * 2); ctx.fill();
  if (tier === "region") {
    ctx.strokeStyle = color + "88"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r); ctx.stroke();
  }
  return c;
}

function createIXPIcon(trafficGbps: number): HTMLCanvasElement {
  const size = Math.min(48, Math.max(20, Math.round(Math.sqrt(trafficGbps / 100) * 8)));
  const c = document.createElement("canvas"); c.width = size * 2; c.height = size * 2;
  const ctx = c.getContext("2d")!;
  const cx = size, cy = size;
  ctx.shadowColor = "#a855f7"; ctx.shadowBlur = 16;
  ctx.fillStyle = "#a855f744"; ctx.strokeStyle = "#a855f7"; ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const x = cx + (size - 3) * Math.cos(angle), y = cy + (size - 3) * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = "#a855f7"; ctx.shadowBlur = 6;
  ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill();
  return c;
}

function createBGPIcon(severity: string): HTMLCanvasElement {
  const colors: Record<string, string> = { critical:"#ff0000", high:"#ff3b3b", medium:"#ffb800", low:"#00f5ff" };
  const col = colors[severity] || "#ffb800";
  const c = document.createElement("canvas"); c.width = 36; c.height = 36;
  const ctx = c.getContext("2d")!;
  ctx.shadowColor = col; ctx.shadowBlur = 14;
  ctx.fillStyle = col + "33"; ctx.strokeStyle = col; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(18, 4); ctx.lineTo(33, 30); ctx.lineTo(3, 30); ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = col; ctx.font = "bold 14px monospace"; ctx.textAlign = "center";
  ctx.fillText("!", 18, 24);
  return c;
}

function createOutageIcon(severity: string): HTMLCanvasElement {
  const colors: Record<string, string> = { critical:"#ff0000", major:"#ff3b3b", minor:"#ffb800" };
  const col = colors[severity] || "#ffb800";
  const c = document.createElement("canvas"); c.width = 48; c.height = 48;
  const ctx = c.getContext("2d")!;
  [20, 14, 8].forEach((r, i) => {
    ctx.strokeStyle = col + (i === 0 ? "33" : i === 1 ? "66" : "aa");
    ctx.lineWidth = 2; ctx.shadowColor = col; ctx.shadowBlur = 8;
    ctx.beginPath(); ctx.arc(24, 24, r, 0, Math.PI * 2); ctx.stroke();
  });
  ctx.fillStyle = col; ctx.shadowBlur = 12;
  ctx.beginPath(); ctx.arc(24, 24, 4, 0, Math.PI * 2); ctx.fill();
  return c;
}

function createTowerIcon(technology: string): HTMLCanvasElement {
  const colors: Record<string, string> = { "5G":"#00ff88", "5G-mmWave":"#00ffcc", "4G":"#00f5ff", "3G":"#ffb800", "2G":"#888888" };
  const col = colors[technology] || "#888888";
  const c = document.createElement("canvas"); c.width = 20; c.height = 20;
  const ctx = c.getContext("2d")!;
  ctx.shadowColor = col; ctx.shadowBlur = 6; ctx.fillStyle = col;
  ctx.beginPath(); ctx.arc(10, 10, 4, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = col + "44"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(10, 10, 8, 0, Math.PI * 2); ctx.stroke();
  return c;
}

// ── Main Component ────────────────────────────────────────────────────────────
const GlobeViewer = forwardRef<GlobeHandle, Record<string, never>>((_props, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef    = useRef<any>(null);
  const isInit       = useRef(false);
  const clockRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const dayNightRef  = useRef(true);
  const imgRef       = useRef<{ sat: any; night: any; contLabels: any; cityLabels: any }>({
    sat: null, night: null, contLabels: null, cityLabels: null,
  });

  const {
    cables, layers, selectedCable, setSelectedCable,
    cloudRegions, selectedRegion, setSelectedRegion,
    ixps, selectedIXP, setSelectedIXP,
    bgpAlerts, setSelectedAlert,
    outages, setSelectedOutage,
    cellTowers, setSelectedTower,
    fiberRoutes,
    latencyProbes,
    setCameraPosition, setIsLoading, setHoverTooltip,
  } = useTelecomView();

  useImperativeHandle(ref, () => ({
    flyTo: (lat, lng, alt = 2_000_000) => {
      const v = viewerRef.current; if (!v || !window.Cesium) return;
      v.camera.flyTo({
        destination: window.Cesium.Cartesian3.fromDegrees(lng, lat, alt),
        orientation: { heading: 0, pitch: window.Cesium.Math.toRadians(-45), roll: 0 },
        duration: 2.0,
      });
    },
    screenshot: async () => {
      const v = viewerRef.current; if (!v) return null;
      return new Promise(resolve => {
        v.scene.postRender.addEventListener(function cap() {
          v.scene.postRender.removeEventListener(cap);
          try { resolve(v.scene.canvas.toDataURL("image/png")); } catch { resolve(null); }
        }); v.scene.requestRender();
      });
    },
    resetView: () => {
      const v = viewerRef.current; if (!v || !window.Cesium) return;
      v.camera.flyTo({
        destination: window.Cesium.Cartesian3.fromDegrees(0, 20, 22_000_000),
        orientation: { heading: 0, pitch: window.Cesium.Math.toRadians(-90), roll: 0 },
        duration: 2.5,
      });
    },
    toggleDayNight: () => {
      const v = viewerRef.current; if (!v) return;
      dayNightRef.current = !dayNightRef.current;
      v.scene.globe.enableLighting = dayNightRef.current;
    },
  }));

  // ── Globe Initialisation ──────────────────────────────────────────────────
  useEffect(() => {
    if (isInit.current || !containerRef.current) return;
    const boot = async () => {
      if (!window.Cesium) { setTimeout(boot, 200); return; }
      isInit.current = true;
      const C = window.Cesium;
      window.CESIUM_BASE_URL = "https://cesium.com/downloads/cesiumjs/releases/1.116/Build/Cesium/";
      C.Ion.defaultAccessToken = TOKEN;
      try {
        // ── Step 1: Ion base imagery provider (asset 3830186) ─────────────
        // Load this BEFORE creating the Viewer so we can pass it in directly.
        // This is the only reliable way to set a base layer in CesiumJS 1.116.
        let baseImageryProvider: any = null;
        try {
          baseImageryProvider = await C.IonImageryProvider.fromAssetId(ION_BASE_ASSET_ID);
        } catch (e) {
          console.warn("Ion base imagery (asset 3830186) failed, will use OSM fallback:", e);
        }

        // ── Step 2: Create Viewer with the Ion imagery as the base layer ──
        const viewer = new C.Viewer(containerRef.current, {
          baseLayerPicker:       false,
          geocoder:              false,
          homeButton:            false,
          sceneModePicker:       false,
          navigationHelpButton:  false,
          animation:             false,
          timeline:              false,
          fullscreenButton:      false,
          infoBox:               false,
          selectionIndicator:    false,
          // Pass Ion imagery directly — CesiumJS 1.116 still accepts this in the constructor
          ...(baseImageryProvider ? { imageryProvider: baseImageryProvider } : {}),
          // EllipsoidTerrain first; swap in world terrain async below
          terrainProvider: new C.EllipsoidTerrainProvider(),
        });
        viewerRef.current = viewer; window.__cesiumViewer = viewer;

        // ── Step 3: OSM fallback if Ion imagery failed ────────────────────
        if (!baseImageryProvider) {
          viewer.imageryLayers.removeAll();
          viewer.imageryLayers.add(
            new C.ImageryLayer(
              new C.OpenStreetMapImageryProvider({
                url: "https://tile.openstreetmap.org/",
                credit: "© OpenStreetMap contributors",
                maximumLevel: 19,
              }),
              { brightness: 0.85, contrast: 1.1, saturation: 0.75 }
            )
          );
          console.info("Using OSM base layer — add Ion token to .env.local for satellite imagery");
        }
        imgRef.current.sat = viewer.imageryLayers.get(0);

        // ── Step 4: World terrain (async swap) ────────────────────────────
        if (C.createWorldTerrainAsync) {
          C.createWorldTerrainAsync({ requestWaterMask: false, requestVertexNormals: false })
            .then((tp: any) => { if (!viewer.isDestroyed()) viewer.terrainProvider = tp; })
            .catch(() => {/* stay on ellipsoid */});
        }

        // ── Step 5: Night lights overlay (Ion asset 3) ────────────────────
        C.IonImageryProvider.fromAssetId(3)
          .then((np: any) => {
            if (viewer.isDestroyed()) return;
            const nightLayer = viewer.imageryLayers.add(
              new C.ImageryLayer(np, { alpha: 0.0, brightness: 2.5 })
            );
            imgRef.current.night = nightLayer;
          })
          .catch(() => {/* night lights optional */});

        // ── Step 6: Continent labels (high altitude, no token) ────────────
        const contLabels = viewer.imageryLayers.add(
          new C.ImageryLayer(
            new C.UrlTemplateImageryProvider({
              url: "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",
              credit: "© Esri",
              minimumLevel: 0,
              maximumLevel: 8,
            }),
            { alpha: 0.8 }
          )
        );
        imgRef.current.contLabels = contLabels;

        // ── Step 7: Dark city labels (zoomed in, no token) ────────────────
        const cityLabels = viewer.imageryLayers.add(
          new C.ImageryLayer(
            new C.UrlTemplateImageryProvider({
              url: "https://basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png",
              credit: "© CartoDB © OpenStreetMap",
              minimumLevel: 3,
              maximumLevel: 18,
            }),
            { alpha: 0.0 }
          )
        );
        imgRef.current.cityLabels = cityLabels;

        // ── Step 8: Globe visual settings ────────────────────────────────
        viewer.scene.globe.enableLighting = true;
        viewer.scene.globe.dynamicAtmosphereLighting = true;
        viewer.scene.globe.showGroundAtmosphere = true;
        viewer.scene.globe.depthTestAgainstTerrain = false;
        try { viewer.scene.globe.atmosphereLightIntensity = 10; } catch(_e) {}
        viewer.scene.skyAtmosphere.hueShift       = -0.97;
        viewer.scene.skyAtmosphere.saturationShift = 0.25;
        viewer.scene.skyAtmosphere.brightnessShift = -0.5;
        viewer.scene.fog.enabled  = true;
        viewer.scene.fog.density  = 0.00002;
        if (viewer.scene.msaaSamples !== undefined) viewer.scene.msaaSamples = 4;

        // Live clock sync
        viewer.clock.currentTime = C.JulianDate.fromDate(new Date());
        viewer.clock.shouldAnimate = true;
        clockRef.current = setInterval(() => {
          if (viewer && !viewer.isDestroyed())
            viewer.clock.currentTime = C.JulianDate.fromDate(new Date());
        }, 1000);

        // Camera change → labels + position
        viewer.camera.changed.addEventListener(() => {
          const pos = viewer.camera.positionCartographic;
          const altM = Math.round(pos.height);
          setCameraPosition({ lat: C.Math.toDegrees(pos.latitude), lng: C.Math.toDegrees(pos.longitude), alt: altM });
          const cl  = imgRef.current.contLabels;
          const cy2 = imgRef.current.cityLabels;
          if (cl)  cl.alpha  = altM > 22_000_000 ? 0 : altM > 3_000_000 ? 0.85 : 0;
          if (cy2) cy2.alpha = altM > 3_000_000 ? 0 : altM > 1_000_000 ? (3_000_000 - altM) / 2_000_000 * 0.9 : 0.95;
        });

        viewer.camera.setView({
          destination: C.Cartesian3.fromDegrees(0, 20, 22_000_000),
          orientation: { heading: 0, pitch: C.Math.toRadians(-90), roll: 0 },
        });

        // Click handler
        const handler = new C.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction((click: any) => {
          const picked = viewer.scene.pick(click.position);
          [setSelectedCable, setSelectedRegion, setSelectedIXP, setSelectedAlert, setSelectedOutage, setSelectedTower]
            .forEach((fn: any) => fn(null));
          if (!picked?.id?.properties) return;
          const p = picked.id.properties;
          const type = p.entityType?.getValue();
          if (type === "cable") {
            const id = p.cableId?.getValue();
            const cable = cables.find(c => c.id === id);
            if (cable) setSelectedCable(cable);
          } else if (type === "cloud") {
            const id = p.regionId?.getValue();
            const region = cloudRegions.find(r => r.id === id);
            if (region) setSelectedRegion(region);
          } else if (type === "ixp") {
            const id = p.ixpId?.getValue();
            const ixp = ixps.find(i => i.id === id);
            if (ixp) setSelectedIXP(ixp);
          } else if (type === "bgp") {
            const id = p.alertId?.getValue();
            const alert = bgpAlerts.find(a => a.id === id);
            if (alert) setSelectedAlert(alert);
          } else if (type === "outage") {
            const id = p.outageId?.getValue();
            const outage = outages.find(o => o.id === id);
            if (outage) setSelectedOutage(outage);
          } else if (type === "tower") {
            const id = p.towerId?.getValue();
            const tower = cellTowers.find(t => t.id === id);
            if (tower) setSelectedTower(tower);
          }
        }, C.ScreenSpaceEventType.LEFT_CLICK);

        // Hover handler
        handler.setInputAction((move: any) => {
          const picked = viewer.scene.pick(move.endPosition);
          if (!picked?.id?.properties) {
            setHoverTooltip(null); viewer.scene.canvas.style.cursor = "default"; return;
          }
          const p = picked.id.properties;
          const type = p.entityType?.getValue();
          if (!type) { setHoverTooltip(null); return; }
          viewer.scene.canvas.style.cursor = "pointer";
          const icons: Record<string, string> = { cable:"🌊", cloud:"☁️", ixp:"🔄", bgp:"⚡", outage:"🚨", tower:"📡", fiber:"🔦" };
          let label = "", sublabel = "";
          if (type === "cable")  { label = p.cableName?.getValue() || "Cable";   sublabel = `${p.capacityTbps?.getValue() || 0} Tbps`; }
          else if (type === "cloud")  { label = p.regionName?.getValue() || "Region"; sublabel = `${(p.provider?.getValue() || "").toUpperCase()} · ${p.azCount?.getValue() || 0} AZs`; }
          else if (type === "ixp")    { label = p.ixpName?.getValue() || "IXP";   sublabel = `${p.trafficGbps?.getValue() || 0} Gbps · ${p.memberCount?.getValue() || 0} members`; }
          else if (type === "bgp")    { label = `BGP ${p.alertType?.getValue() || "Alert"}`; sublabel = p.prefix?.getValue() || ""; }
          else if (type === "outage") { label = p.region?.getValue() || "Outage";  sublabel = `${p.severity?.getValue() || ""}`; }
          else if (type === "tower")  { label = `${p.technology?.getValue() || ""} Tower`; sublabel = p.operator?.getValue() || ""; }
          else { setHoverTooltip(null); return; }
          setHoverTooltip({ x: move.endPosition.x, y: move.endPosition.y, label, sublabel, icon: icons[type] || "•", type, color: "#00f5ff" });
        }, C.ScreenSpaceEventType.MOUSE_MOVE);

        setTimeout(() => setIsLoading(false), 2400);
        console.log("✅ TelecomView — Global Network Intelligence Platform loaded");
      } catch (err) { console.error("Globe init error:", err); setIsLoading(false); }
    };
    boot();
    return () => {
      if (clockRef.current) clearInterval(clockRef.current);
      cableEntities.clear(); regionEntities.clear(); ixpEntities.clear();
      bgpEntities.clear(); outageEntities.clear(); towerEntities.clear();
      fiberEntities.clear(); latencyEntities.length = 0;
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy(); viewerRef.current = null; window.__cesiumViewer = null;
      }
    };
  }, []); // eslint-disable-line

  // ── 🌊 SUBMARINE CABLES ──────────────────────────────────────────────────
  useEffect(() => {
    const v = viewerRef.current; if (!v || !window.Cesium) return;
    const C = window.Cesium;
    cableEntities.forEach(segs => segs.forEach(e => v.entities.remove(e)));
    cableEntities.clear();
    if (!layers.submarineCables) return;
    cables.forEach(cable => {
      const isSel = selectedCable?.id === cable.id;
      const color = C.Color.fromCssColorString(CABLE_STATUS_COLORS[cable.status] || "#00f5ff");
      const segs: any[] = [];
      if (cable.coordinates.length >= 2) {
        const positions = cable.coordinates.map(([lng, lat]) => C.Cartesian3.fromDegrees(lng, lat, -2000));
        segs.push(v.entities.add({
          id: `cable-line-${cable.id}`,
          properties: { entityType:"cable", cableId:cable.id, cableName:cable.name, capacityTbps:cable.capacityTbps, status:cable.status },
          polyline: {
            positions,
            width: isSel ? 5 : 2.5,
            material: new C.PolylineGlowMaterialProperty({ glowPower: isSel ? 0.4 : 0.15, color: color.withAlpha(isSel ? 1.0 : 0.75) }),
            arcType: C.ArcType.GEODESIC,
            clampToGround: false,
          },
        }));
      }
      cable.landingPoints.forEach((lp, i) => {
        segs.push(v.entities.add({
          id: `cable-lp-${cable.id}-${i}`,
          position: C.Cartesian3.fromDegrees(lp.lng, lp.lat, 0),
          properties: { entityType:"cable", cableId:cable.id, cableName:cable.name, capacityTbps:cable.capacityTbps, status:cable.status },
          point: { pixelSize: isSel ? 10 : 6, color, outlineColor: C.Color.BLACK, outlineWidth: 1, disableDepthTestDistance: Number.POSITIVE_INFINITY },
        }));
      });
      cableEntities.set(cable.id, segs);
    });
  }, [cables, layers.submarineCables, selectedCable]); // eslint-disable-line

  // ── ☁️ CLOUD REGIONS ─────────────────────────────────────────────────────
  useEffect(() => {
    const v = viewerRef.current; if (!v || !window.Cesium) return;
    const C = window.Cesium;
    regionEntities.forEach(e => v.entities.remove(e)); regionEntities.clear();
    if (!layers.cloudRegions) return;
    cloudRegions.forEach(region => {
      const color = PROVIDER_COLORS[region.provider] || "#ffffff";
      const cc = C.Color.fromCssColorString(color);
      const isSel = selectedRegion?.id === region.id;
      regionEntities.set(region.id, v.entities.add({
        id: `cloud-${region.id}`,
        position: C.Cartesian3.fromDegrees(region.lng, region.lat, 50000),
        properties: { entityType:"cloud", regionId:region.id, regionName:region.name, provider:region.provider, azCount:region.azCount },
        billboard: {
          image: createDCIcon(color, region.tier),
          scale: isSel ? 1.5 : 1.0,
          color: region.status === "outage" ? C.Color.RED : cc,
          verticalOrigin: C.VerticalOrigin.CENTER,
          horizontalOrigin: C.HorizontalOrigin.CENTER,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
          distanceDisplayCondition: region.tier === "pop"
            ? new C.DistanceDisplayCondition(0, 8_000_000)
            : new C.DistanceDisplayCondition(0, 20_000_000),
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
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      }));
    });
  }, [cloudRegions, layers.cloudRegions, selectedRegion]); // eslint-disable-line

  // ── 🔄 IXPs ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const v = viewerRef.current; if (!v || !window.Cesium) return;
    const C = window.Cesium;
    ixpEntities.forEach(e => v.entities.remove(e)); ixpEntities.clear();
    if (!layers.ixps) return;
    ixps.forEach(ixp => {
      const isSel = selectedIXP?.id === ixp.id;
      ixpEntities.set(String(ixp.id), v.entities.add({
        id: `ixp-${ixp.id}`,
        position: C.Cartesian3.fromDegrees(ixp.lng, ixp.lat, 100000),
        properties: { entityType:"ixp", ixpId:ixp.id, ixpName:ixp.name, trafficGbps:ixp.trafficGbps, memberCount:ixp.memberCount },
        billboard: {
          image: createIXPIcon(ixp.trafficGbps),
          scale: isSel ? 1.6 : 1.0,
          verticalOrigin: C.VerticalOrigin.CENTER,
          horizontalOrigin: C.HorizontalOrigin.CENTER,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
          distanceDisplayCondition: new C.DistanceDisplayCondition(0, 15_000_000),
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
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      }));
    });
  }, [ixps, layers.ixps, selectedIXP]); // eslint-disable-line

  // ── ⚡ BGP ALERTS ─────────────────────────────────────────────────────────
  useEffect(() => {
    const v = viewerRef.current; if (!v || !window.Cesium) return;
    const C = window.Cesium;
    bgpEntities.forEach(e => v.entities.remove(e)); bgpEntities.clear();
    if (!layers.bgpAlerts) return;
    bgpAlerts.filter(a => a.lat && a.lng).forEach(alert => {
      bgpEntities.set(alert.id, v.entities.add({
        id: `bgp-${alert.id}`,
        position: C.Cartesian3.fromDegrees(alert.lng, alert.lat, 200000),
        properties: { entityType:"bgp", alertId:alert.id, alertType:alert.type, prefix:alert.prefix, severity:alert.severity },
        billboard: {
          image: createBGPIcon(alert.severity),
          scale: 1.0,
          verticalOrigin: C.VerticalOrigin.CENTER,
          horizontalOrigin: C.HorizontalOrigin.CENTER,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
          distanceDisplayCondition: new C.DistanceDisplayCondition(0, 18_000_000),
        },
      }));
    });
  }, [bgpAlerts, layers.bgpAlerts]); // eslint-disable-line

  // ── 🚨 OUTAGES ────────────────────────────────────────────────────────────
  useEffect(() => {
    const v = viewerRef.current; if (!v || !window.Cesium) return;
    const C = window.Cesium;
    outageEntities.forEach(e => v.entities.remove(e)); outageEntities.clear();
    if (!layers.outages) return;
    outages.forEach(outage => {
      outageEntities.set(outage.id, v.entities.add({
        id: `outage-${outage.id}`,
        position: C.Cartesian3.fromDegrees(outage.lng, outage.lat, 300000),
        properties: { entityType:"outage", outageId:outage.id, region:outage.region, severity:outage.severity, affectedAsns:outage.affectedAsns },
        billboard: {
          image: createOutageIcon(outage.severity),
          scale: 1.0,
          verticalOrigin: C.VerticalOrigin.CENTER,
          horizontalOrigin: C.HorizontalOrigin.CENTER,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      }));
    });
  }, [outages, layers.outages]); // eslint-disable-line

  // ── 🔦 FIBER ROUTES ───────────────────────────────────────────────────────
  useEffect(() => {
    const v = viewerRef.current; if (!v || !window.Cesium) return;
    const C = window.Cesium;
    fiberEntities.forEach(segs => segs.forEach(e => v.entities.remove(e))); fiberEntities.clear();
    if (!layers.fiberRoutes) return;
    fiberRoutes.forEach(route => {
      if (route.coordinates.length < 2) return;
      const positions = route.coordinates.map(([lng, lat]) => C.Cartesian3.fromDegrees(lng, lat, 5000));
      const color = C.Color.fromCssColorString(route.color).withAlpha(0.7);
      fiberEntities.set(route.id, [v.entities.add({
        id: `fiber-${route.id}`,
        properties: { entityType:"fiber", routeId:route.id, routeName:route.name },
        polyline: {
          positions,
          width: route.tier === 1 ? 3 : 2,
          material: new C.PolylineDashMaterialProperty({ color, dashLength: 20 }),
          arcType: C.ArcType.GEODESIC,
        },
      })]);
    });
  }, [fiberRoutes, layers.fiberRoutes]); // eslint-disable-line

  // ── 📡 CELL TOWERS ────────────────────────────────────────────────────────
  useEffect(() => {
    const v = viewerRef.current; if (!v || !window.Cesium) return;
    const C = window.Cesium;
    towerEntities.forEach(e => v.entities.remove(e)); towerEntities.clear();
    if (!layers.cellTowers || cellTowers.length === 0) return;
    cellTowers.forEach(tower => {
      towerEntities.set(tower.id, v.entities.add({
        id: `tower-${tower.id}`,
        position: C.Cartesian3.fromDegrees(tower.lng, tower.lat, 0),
        properties: { entityType:"tower", towerId:tower.id, technology:tower.technology, operator:tower.operator },
        billboard: {
          image: createTowerIcon(tower.technology),
          scale: 1.0,
          verticalOrigin: C.VerticalOrigin.CENTER,
          horizontalOrigin: C.HorizontalOrigin.CENTER,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
          distanceDisplayCondition: new C.DistanceDisplayCondition(0, 1_500_000),
        },
      }));
    });
  }, [cellTowers, layers.cellTowers]); // eslint-disable-line

  // ── ⚡ LATENCY HEATMAP ────────────────────────────────────────────────────
  useEffect(() => {
    const v = viewerRef.current; if (!v || !window.Cesium) return;
    const C = window.Cesium;
    latencyEntities.forEach(e => v.entities.remove(e)); latencyEntities.length = 0;
    if (!layers.latencyHeatmap || latencyProbes.length === 0) return;
    latencyProbes.forEach(probe => {
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
          heightReference: C.HeightReference.CLAMP_TO_GROUND,
        },
      }));
    });
  }, [latencyProbes, layers.latencyHeatmap]); // eslint-disable-line

  return <div ref={containerRef} className="fixed inset-0 w-full h-full" style={{ background: "#020408" }} />;
});

GlobeViewer.displayName = "GlobeViewer";
export default GlobeViewer;
