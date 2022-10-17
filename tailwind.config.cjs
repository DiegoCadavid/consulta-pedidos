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
      },
      "animation": {
        fade: "fade 0.3s 1"
      },
      "keyframes" : {
        fade : {
          "0%" :{
            opacity : 0
          },
          "100%" : {
            opacity : 1
          }
        }
      }
    },
  },
  plugins: [],
};
