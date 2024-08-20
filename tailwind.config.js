/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'media',
  content: ['*'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
    },
      },
  },
  plugins: [],
}
