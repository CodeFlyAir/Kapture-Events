/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'pinky': '#ff00a2',
      'sm_pink':'#EDBBD6',
      'slaty':'#2b303a',
       'bg_pink':'#e50d9e'
    },
    fontFamily: {
      libre: ['"Poppins"', ...defaultTheme.fontFamily.sans]
    },
   
    },
  },
  plugins: [],
}

