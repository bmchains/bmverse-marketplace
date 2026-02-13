import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Inter", "Arial"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 10px 30px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
} satisfies Config;
