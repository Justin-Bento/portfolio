module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', 'system-ui', '-apple-system', 'sans-serif', '"Apple Color Emoji"'],
        serif: ['"Goudy Bookletter 1911"', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
