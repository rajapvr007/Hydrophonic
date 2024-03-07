const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {},
    theme: {
      fontFamily:{
        montserrat:'"Montserrat"', ...defaultTheme.fontFamily.sans,
      }
    },
  },
  plugins: [],
};
