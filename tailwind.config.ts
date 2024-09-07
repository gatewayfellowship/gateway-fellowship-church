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
          950: "#161004",
          900: "#2b2008",
          800: "#564010",
          700: "#816018",
          600: "#ac8020",
          500: "#d7a028",
          400: "#dfb353",
          300: "#e7c67e",
          200: "#efd9a9",
          100: "#f7ecd4",
          50: "#fbf5e9",
        },
        secondary: {
          950: "#130f06",
          900: "#271e0c",
          800: "#4e3d18",
          700: "#745b25",
          600: "#9b7931",
          500: "#c2983d",
          400: "#ceac64",
          300: "#dac18b",
          200: "#e7d6b1",
          100: "#f3ead8",
          50: "#f9f5ec",
        },
        accent: {
          950: "#151005",
          900: "#2a1f09",
          800: "#533f13",
          700: "#7d5e1c",
          600: "#a67e26",
          500: "#d09d2f",
          400: "#d9b159",
          300: "#e3c482",
          200: "#ecd8ac",
          100: "#f6ebd5",
          50: "#faf5ea",
        },
      },
    },
  },
};
export default config;
