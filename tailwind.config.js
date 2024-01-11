/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "primary":"#091a2f",
      "secondary":"#f47414",
      "tertiary":"#67c3c0",
      "Header":"#d1ad60",
      }
    },
    screens: {
   

      'lg': {'max': '2023px'},
      // => @media (max-width: 1023px) { ... }

      'sm': {'max': '1039px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}