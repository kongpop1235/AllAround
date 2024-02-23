/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'c1d72d': "#c1d72d",
      '191919': "#191919"
    },
    dropShadow: {
      '3xl': '0 0 5px rgba(193, 215, 45, 0.35)',
    }
  },
  plugins: [],
}

