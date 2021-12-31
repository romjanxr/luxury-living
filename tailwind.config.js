module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#1F1632"
      },
      backgroundColor: {
        primary: "#251D58"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
