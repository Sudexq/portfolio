/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#080A0F",
          surface: "#0E1117",
          elevated: "#151B26",
        },
        accent: {
          blue: "#5B8DEF",
          violet: "#A78BFA",
          cyan: "#22D3EE",
        },
        text: {
          primary: "#F0F4FF",
          secondary: "#C5CEEA",
          muted: "#6B7A9F",
          dim: "#3D4A6B",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(91,141,239,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(91,141,239,0.03) 1px, transparent 1px)",
        "glow-blue":
          "radial-gradient(ellipse 600px 400px at 50% 0%, rgba(91,141,239,0.12) 0%, transparent 70%)",
        "glow-violet":
          "radial-gradient(ellipse 400px 300px at 80% 20%, rgba(167,139,250,0.08) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(91,141,239,0.15)",
        "glow-sm": "0 0 20px rgba(91,141,239,0.1)",
      },
    },
  },
  plugins: [],
};