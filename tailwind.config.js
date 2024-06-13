/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        backgrouidcolor:"#fafbff",
        button:"#5932EA",
        iconcolor:"#9197B3",
        money:"#333333",
        text:"#00AC4F",
       }
    },
  },
  plugins: [],
}

