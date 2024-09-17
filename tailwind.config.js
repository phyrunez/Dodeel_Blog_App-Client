/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,jsx,ts,tsx}',
    './src/components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1565D8",
        dark: {
          light: "#5A7184",
          hard: "#0D2436",
          soft: "#183B56"
        },
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
        anton: ["'Anton'", "sans-serif"]
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],

  daisyui: {
    themes: [],
    base: false,
    styled: true,
    utils: true
  }
}

