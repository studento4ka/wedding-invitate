/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          rose: '#C58284',
          blush: '#E5AFA9',
          mauve: '#9A6B78',
          sage: '#8A9A86',
          eucalyptus: '#6A876B',
          olive: '#4D5333',
          champagne: '#E8D2BD',
          taupe: '#BFA89B',
          bg: '#FAF7F2',
          dark: '#1C1917',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}