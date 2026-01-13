import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      primary: "#1f2937",
      secondary: "#374151",
      accent: "#3b82f6",
      gray: {
        400: "#9ca3af",
        600: "#4b5563",
        700: "#374151",
      },
    },
  },
  plugins: [],
};
export default config;
