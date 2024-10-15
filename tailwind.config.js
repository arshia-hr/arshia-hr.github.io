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
<<<<<<< HEAD
        'sm' : '350px',
        'md' : '750px',
        'lg': '1024px'

=======
        'sm': '300px',
        'md': '650px'
>>>>>>> release/ve-3
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}

