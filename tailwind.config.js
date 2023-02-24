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
          '50': '#f5f7fa',
          '100': '#e9edf5',
          '200': '#ced9e9',
          '300': '#a4b8d5',
          '400': '#7293be',
          '500': '#4b6d9b',
          '600': '#3e5d8b',
          '700': '#334b71',
          '800': '#2d405f',
          '900': '#2a3850',
        },

      }
    },
  },
  plugins: [],
}
