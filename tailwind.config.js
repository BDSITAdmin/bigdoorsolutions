import { FaBlackTie } from 'react-icons/fa';

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
        lightblack: '#6E7485',
        lightpurple:'#EBEBFF',
        lightgreen:'#E1F7E3',
        lightorange:'#FFF2E5',
        lightbrown:'#FFF0F0',
        lightgrey:'#F5F7FA',
        BleuDe:'#2E89E5',
        Cyanblue:'#f5f9fd',
        hexadecimal:'#B4835A',
        SeaGreen: ' #F5F9FE',
        CetaceanBlue:'#000033',
        AliceBlue: '#1F5E9E',
        Teal:'#444444',
        Crimson:'#666666',
        Olive:'#0C0C0CE5',
        Azure: '#333333',
        cackclour:'#FAE4D1',
        soldcolour:'#808080',
        BlackTie: '#000000',
      },
      fontFamily: {
        sora:['Sora','sans-serif'],
        inter:['Inter','sans-serif'], 
      },
      backgroundImage: {
        customgradient: 'linear-gradient(100.78deg, rgba(255, 255, 255, 0.5) 2.68%, rgba(255, 255, 255, 0) 89.42%)',
      },
      boxShadow: {
        'custom': '0px 8px 50px 0px rgba(64, 84, 174, 0.2)',
        'blue':' 0px 4px 50px 0px rgba(29, 32, 38, 0.05)',
      },
    },
  },
  plugins: [],
}

