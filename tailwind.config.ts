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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#7D6E2E", // Olive/Khaki from mockup
          foreground: "#FFFFFF",
        },
        accent: "#FDFCF8", // Cream background
        charcoal: "#1A1A1A", // Dark text
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        quintessential: ["var(--font-quintessential)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
