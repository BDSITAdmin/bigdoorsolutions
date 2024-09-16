/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#2E8AE5', //Add your header colour.
        secondary:'#F5F9FE',// Add your colour.
        Vividyellow:'#FFCA1D',// Add your button bg colour.
        doggerblue:'#2E89E5',//Add second button bg
        DavyGrey: '#5A5A5A', //Add heading colour
        black:'#1D2026', //Add footer bg
        lightpurple:'#EBEBFF',
        lightgreen:'#E1F7E3',
        lightorange:'#FFF2E5',
        lightbrown:'#FFF0F0',
        lightgrey:'#F5F7FA',
        

      },
      fontFamily: {
        sora:['Sora','sans-serif'],
        inter:['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

