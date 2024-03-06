/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        container : "80%"
      },
      fontFamily : {
        dmSans : ["DM Sans"]
      } ,
      colors : {
        primary : "#262626" ,
        secondary : "#767676"
      }
    },
  },
  plugins: [],
}