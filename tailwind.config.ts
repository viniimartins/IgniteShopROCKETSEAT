import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "var(--font-roboto)",
      },
      colors: {
        brands: {
          primary: {
            green500: "#00875f",
            green300: "#00b37e",
          },
        },
        neutrals: {
          white: "#fff",
          gray900: "#121214",
          gray800: "#202024",
          gray300: "#c4c4cc",
          gray100: "#e1e1e6",
        },
      },
      screens: {
        "low-desktop": { max: "1240px" },
        tablet: { max: "992px" },
        mobile: { max: "768px" },
        "low-mobile": { max: "425px" },
      },
    },
  },
  plugins: [],
};
export default config;
