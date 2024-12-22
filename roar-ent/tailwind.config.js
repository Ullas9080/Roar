/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: "Inter",
         robo: "Roboto Slab"
      },
      backgroundColor:{
        db:"#1f2738",
      },
    },
  },
  plugins: [],
}