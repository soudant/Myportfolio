/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      lightMode : {
        "white":"#e0e5eb",
        "primary":"#2a303c",
        "greySelected":"#5f6d88",
        "blue":"#366bfb",
        "light-grey":"#d4d4d4",
        "dark_grey":"#020814",
        // "":"",
        // "":"",
        // "":"",
        // "":"",
        // "":"",
        



        // "light_blue":"#366bfb",
        // "dark_blue":"#376cfb",
        // "white":"#e0e5eb",
        // "text":"#2a303c",
        // "grey":"#d4d4d4",
        // "dark_grey":"#4d4d4d",
        // "greySelected" : "#5f6d88"

      },
    },
    extend: {

    },
  },
  plugins: [require("daisyui")],
}
