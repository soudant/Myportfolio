/** @type {import('tailwindcss').Config} */
module.exports = { 
   publicPath: process.env.NODE_ENV === 'production'
  ? 'portfolio/src/'
  : '/'
  ,
  
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  
  theme: {
    colors: {
      lightMode: {
        "white": "#e0e5eb",
        "primary": "#2a303c",
        "greySelected": "#5f6d88",
        "blue": "#366bfb",
        "light-grey": "#d4d4d4",
        "dark_grey": "#020814",
      },
    },
    extend: {
      "rewrites": [ { "source": "/**", "destination": "/index.html" } ],
    },
  },
  plugins: [require("daisyui")],
  

}
