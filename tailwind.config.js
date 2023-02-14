const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Julee', ...defaultTheme.fontFamily.sans],
        sans: ['Epilogue', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          '50': '#f8f6f4',
          '100': '#ece6e1',
          '200': '#ddd3cb',
          '300': '#c8b5a9',
          '400': '#b19486',
          '500': '#a17d6e',
          '600': '#946d62',
          '700': '#7b5953',
          '800': '#654a47',
          '900': '#533e3b',
      },
      
      }
    },
  },
  plugins: [],
}
