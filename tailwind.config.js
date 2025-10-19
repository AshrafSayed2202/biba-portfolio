/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xxs: "576px",
      xs: "728px",
      sm: "992px",
      md: "1200px",
      lg: "1400px",
      xl: "1600px",
      "2xl": "1850px",
    },
  },
  plugins: [],
}

