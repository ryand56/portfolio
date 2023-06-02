/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 1.5s infinite"
      }
    },
    screens: {
      md: {"min": "895px"}
    }
  },
  plugins: [],
}
