"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("INITIALIZING GLOBE ENGINE");

  const PHASES = [
    "INITIALIZING GLOBE ENGINE",
    "LOADING SATELLITE IMAGERY",
    "FETCHING SUBMARINE CABLE DATA",
    "LOADING CLOUD INFRASTRUCTURE",
    "INDEXING INTERNET EXCHANGES",
    "CONNECTING BGP FEEDS",
    "MAPPING FIBER ROUTES",
    "CALIBRATING SENSORS",
    "TELECOMVIEW READY",
  ];

  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += 2 + Math.random() * 4;
      if (p >= 100) { p = 100; clearInterval(t); }
      setProgress(Math.min(p, 100));
      setPhase(PHASES[Math.floor((p / 100) * (PHASES.length - 1))]);
    }, 80);
    return () => clearInterval(t);
  }, []); // eslint-disable-line

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:1000,
      background:"#020408",
      display:"flex", alignItems:"center", justifyContent:"center",
      flexDirection:"column",
    }}>
      {/* Grid bg */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:"linear-gradient(rgba(0,245,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,255,0.025) 1px,transparent 1px)",
        backgroundSize:"48px 48px",
      }} />

      {/* Glow */}
      <div style={{ position:"absolute", top:"40%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,245,255,0.04) 0%,transparent 70%)", pointerEvents:"none" }} />

      <div style={{ position:"relative", zIndex:1, textAlign:"center", maxWidth:400 }}>
        {/* Globe icon */}
        <div style={{ fontSize:64, marginBottom:24, animation:"spinSlow 8s linear infinite", display:"inline-block" }}>🌐</div>

        {/* Title */}
        <div style={{ fontFamily:"'Orbitron',monospace", fontSize:28, fontWeight:900, color:"#00f5ff", letterSpacing:"0.2em", textShadow:"0 0 30px #00f5ff66", marginBottom:4 }}>
          TELECOMVIEW
        </div>
        <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"10px", color:"#334155", letterSpacing:"0.3em", marginBottom:40 }}>
          GLOBAL NETWORK INTELLIGENCE
        </div>

        {/* Progress bar */}
        <div style={{ width:"100%", height:2, background:"rgba(0,245,255,0.1)", borderRadius:1, marginBottom:16, overflow:"hidden" }}>
          <div style={{
            height:"100%", width:`${progress}%`,
            background:"linear-gradient(90deg,#0066aa,#00f5ff)",
            borderRadius:1,
            boxShadow:"0 0 12px #00f5ff",
            transition:"width 0.12s ease",
          }} />
        </div>

        {/* Phase label */}
        <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"10px", color:"#334155", letterSpacing:"0.15em", height:16 }}>
          {phase} <span style={{ animation:"blinkCursor 0.8s step-end infinite" }}>_</span>
        </div>

        {/* Percentage */}
        <div style={{ fontFamily:"'Orbitron',monospace", fontSize:11, color:"rgba(0,245,255,0.4)", marginTop:8 }}>
          {Math.round(progress)}%
        </div>
      </div>

      <style>{`
        @keyframes spinSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes blinkCursor{0%,100%{opacity:1}50%{opacity:0}}
      `}</style>
    </div>
  );
}
