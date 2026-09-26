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
    },
  },
  plugins: [],
};

export default config;
