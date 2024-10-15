/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        
        'primery': '#60e2c8',
        'secondery': "#a95506"
      },
      colors:{
        'primery': "#000",
        'secondery': '#fff',
      },
      screens:{
        'sm' : '350px',
        'md' : '750px',
        'lg': '1024px'

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}

