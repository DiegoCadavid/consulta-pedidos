/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        "durespo": {
          100: "#F17E00",
          200: "#963F00"
        },
        "background" : "#ECECEC"
      }
    },
  },
  plugins: [],
};
