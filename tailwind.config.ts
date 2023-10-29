import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [...fontFamily.sans],
      inter: ["Inter", ...fontFamily.sans],
      "sf-mono": ["Space Mono", ...fontFamily.sans],
      "space-groktesk": ["Space Grotesk", ...fontFamily.sans],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    colors: {
      transparent: "transparent",
      biscuit: "#feeddc",
      green: "#81912f",
      "green-dark": "#1f513f",
      magenta: "#d12b79",
      "magenta-dark": "#8b174e",
      "gray-light": "#f5f5f5",
      gray: "#bfbfbe",
      "gray-dark": "#4a4a4a",
      yellow: "#fcbf4c",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      textColor: {
        DEFAULT: "#4a4a4a",
        primary: "#4a4a4a",
        secondary: "#525252",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
