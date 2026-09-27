import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand accent: warm yellow-orange used across the design.
      colors: {
        brand: {
          50: "#FFFAEB",
          100: "#FFF0C6",
          400: "#FFB400",
          500: "#F5A300",
          600: "#D98E00",
        },
        page: "#F0F0F6",
        ink: "#2B2B2B",
        muted: "#767676",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },
      // Entrance animations. They live in the theme (not in globals.css) so
      // Tailwind generates the `@keyframes` and the `animate-fade-*`
      // utilities together and only when they are actually used — the CSS
      // file then only carries the reduced-motion opt-out and the
      // scroll-reveal state machine.
      //
      // `both` fill mode matters for the page-load stagger: it holds the
      // `from` state during `animation-delay`, so a delayed block never
      // flashes fully visible before it fades in. 0.5s + ease-out is short
      // and decelerating: present, not showy.
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
