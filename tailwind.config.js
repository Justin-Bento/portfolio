const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', ...defaultTheme.fontFamily.sans],
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

      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s linear forwards',
      },
    },
  },
  plugins: [],
}
