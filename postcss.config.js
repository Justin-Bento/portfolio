module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
      ],
    },
    autoprefixer: {},
  },
}
