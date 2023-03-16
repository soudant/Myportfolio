/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primaries : {
        "light_blue":"#366bfb",
        "dark_blue":"#376cfb",
        "white":"#e6ecff",
        "text":"#2a303c"

      },
    },
    extend: {

    },
  },
  plugins: [require("daisyui")],
}
