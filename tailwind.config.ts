import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "var(--black)",
      black: "var(--white)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      gray: colors.gray,
      red: colors.red,
      transparent: colors.transparent,
      current: colors.current,
    },
    extend: {
      fontFamily: {
        sans: ["Switzer", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
