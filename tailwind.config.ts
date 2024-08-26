import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#fbfefd",
          dark: "#171717",
        },
        text: {
          dark: "#f8fcfb",
          light: "#030706",
        },
        primary: {
          950: "#0a100a",
          900: "#141f15",
          800: "#283e29",
          700: "#3c5d3e",
          600: "#507c53",
          500: "#639c67",
          400: "#83af86",
          300: "#a2c3a4",
          200: "#c1d7c2",
          100: "#e0ebe1",
          50: "#eff5f0",
        },
        secondary: {
          950: "#0a0d10",
          900: "#141b1f",
          800: "#28363e",
          700: "#3c515d",
          600: "#506c7c",
          500: "#63879c",
          400: "#839faf",
          300: "#a2b7c3",
          200: "#c1cfd7",
          100: "#e0e7eb",
          50: "#eff3f5",
        },
        accent: {
          950: "#0a0b10",
          900: "#14161f",
          800: "#282d3e",
          700: "#3c435d",
          600: "#50597c",
          500: "#63709c",
          400: "#838caf",
          300: "#a2a9c3",
          200: "#c1c6d7",
          100: "#e0e2eb",
          50: "#eff1f5",
        },
      },
    },
  },
};
export default config;
