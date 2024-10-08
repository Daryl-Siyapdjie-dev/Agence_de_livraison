import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        'ping-custom': 'ping-custom 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
      },
      keyframes: {
        blob: {
          "0%":{
            transform: " translate(0px, 0px) scale(1)",
          },
          "33%":{
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%":{
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)",
          },

        },
        'ping-custom': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(1.8)', opacity: '0' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
        display: ['Outfit', 'sans-serif'],
        body: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'tracking-image': "url('./src/assets/images/Delivery2.gif')",
      }
      
    },
  },
  plugins: [],
}


