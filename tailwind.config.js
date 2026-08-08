/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFAF5',
          100: '#F5EFE1',
          200: '#EAE0CA',
          300: '#D5C4A1',
          400: '#C2AE80',
        },
        gold: {
          light: '#F4D03F',
          DEFAULT: '#D4AF37',
          dark: '#B89B31',
        },
        leaf: {
          light: '#A3E4D7',
          DEFAULT: '#526A4C',
          dark: '#3A4F35',
        },
        charcoal: {
          DEFAULT: '#4A3B32',
          dark: '#32251D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -10px rgba(0,0,0,0.05)',
        'premium-hover': '0 30px 60px -15px rgba(0,0,0,0.1)',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
      }
    },
  },
  plugins: [],
}
