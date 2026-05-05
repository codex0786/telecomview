import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "TelecomView — Global Network Intelligence",
  description:
    "Real-time visualization of submarine cables, cloud infrastructure, IXPs, BGP routing and global network topology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=IBM+Plex+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Cesium widget CSS must load before the JS */}
        <link
          rel="stylesheet"
          href="https://cesium.com/downloads/cesiumjs/releases/1.116/Build/Cesium/Widgets/widgets.css"
        />
        {/* CESIUM_BASE_URL must be set before Cesium.js parses — inline script in <head> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.CESIUM_BASE_URL = "https://cesium.com/downloads/cesiumjs/releases/1.116/Build/Cesium/";`,
          }}
        />
      </head>
      <body>
        {children}
        {/* afterInteractive: loads after page is interactive; GlobeViewer polls window.Cesium */}
        <Script
          src="https://cesium.com/downloads/cesiumjs/releases/1.116/Build/Cesium/Cesium.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
