/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 1.5s infinite"
      },
      screens: {
        md2: {"min": "562px"},
        md2max: {"max": "562px"},
        sm2: {"max": "430px"}
      },
      colors: {
        online: "#23a55a",
        idle: "#f0b232",
        dnd: "#f23f43",
        offline: "#80848e"
      }
    },
    screens: {
      md: {"min": "895px"}
    }
  },
  plugins: [],
}
