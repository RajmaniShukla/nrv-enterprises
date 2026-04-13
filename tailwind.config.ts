import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary — deep blue (trust, reliability)
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",  // primary
          800: "#1e40af",
          900: "#1e3a8f",
          950: "#172554",
        },
        // Accent — amber (industrial, energy)
        accent: {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",  // accent
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        // Neutrals
        surface: "#F8FAFC",   // page background
        "surface-card": "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.75rem", { lineHeight: "1.1", fontWeight: "900" }],
        "display-lg": ["3rem",    { lineHeight: "1.1", fontWeight: "900" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", fontWeight: "800" }],
        "display-sm": ["1.875rem",{ lineHeight: "1.2", fontWeight: "800" }],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover": "0 4px 12px 0 rgb(0 0 0 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.08)",
        "brand": "0 4px 14px 0 rgb(29 78 216 / 0.35)",
      },
      borderRadius: {
        "xl":  "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1e3a8f 0%, #1d4ed8 50%, #2563eb 100%)",
        "brand-gradient-light": "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
