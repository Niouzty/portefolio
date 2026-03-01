import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx,json,ts}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0a4a",
        panel: "#18105c",
        line: "#5560b5",
        punctuation: "#6d6dd6",
        key: "#f07e96",
        string: "#2ad3c0"
      },
      boxShadow: {
        card: "0 24px 50px rgba(6, 4, 34, 0.4)"
      },
      borderRadius: {
        xl: "12px"
      }
    }
  },
  plugins: []
};

export default config;
