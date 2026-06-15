import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: "#0f1e35", mid: "#1a2e4a" },
        gold:  { DEFAULT: "#c9a84c", light: "#e3c87a" },
        cream: { DEFAULT: "#faf7f2", dark: "#f0ebe1" },
        earth: { DEFAULT: "#8b7355" },
        muted: "#6b6256",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        serif:   ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
