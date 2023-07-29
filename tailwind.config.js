/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    //...
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          40: "#f4f9f9",
          50: "#f1fafa",
          100: "#dbf1f2",
          200: "#aedfe2",
          300: "#8bcfd5",
          400: "#54b3bc",
          500: "#3997a1",
          600: "#327b88",
          700: "#2e6570",
          800: "#2d545d",
          900: "#294750",
          950: "#172e35",
        },
      },
      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fadeIn: "fadeIn 1s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
