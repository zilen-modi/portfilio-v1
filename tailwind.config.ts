import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      keyframes: {
        "blob-drift": {
          "0%,100%": { transform: "translate(0px,0px) scale(1)" },
          "25%":      { transform: "translate(40px,60px) scale(1.08)" },
          "50%":      { transform: "translate(-30px,40px) scale(0.95)" },
          "75%":      { transform: "translate(60px,-30px) scale(1.04)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0px) scale(1)" },
        },
        "scroll-bounce": {
          "0%,100%": { transform: "translateY(0px)", opacity: "1" },
          "50%":     { transform: "translateY(8px)",  opacity: "0.4" },
        },
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "blob-drift":    "blob-drift 20s ease-in-out infinite",
        "blob-drift-2":  "blob-drift 26s ease-in-out infinite reverse",
        "blob-drift-3":  "blob-drift 32s ease-in-out infinite",
        "fade-up":       "fade-up 0.7s ease-out both",
        "scroll-bounce": "scroll-bounce 1.8s ease-in-out infinite",
        "spin-slow":     "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
