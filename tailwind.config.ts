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
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      accent: "rgb(var(--color-accent) / <alpha-value>)",
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
