/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#020408",
        "neon-cyan": "#00f5ff",
        "neon-green": "#00ff88",
        "neon-lime": "#aaff00",
        "neon-amber": "#ffb800",
        "neon-magenta": "#ff4dff",
        "aws-orange": "#ff9900",
        "azure-blue": "#0078d4",
        "gcp-green": "#34a853",
        "cf-orange": "#f48120",
        "panel-border": "rgba(0,245,255,0.12)",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'DM Sans'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      animation: {
        "ping-neon": "ping-neon 1.8s ease-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "flow": "flow 2s linear infinite",
      },
      keyframes: {
        "ping-neon": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        "flow": {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
