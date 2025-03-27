/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mocha: {
          DEFAULT: '#6D4C41',
          light: '#8D6E63'
        },
        beige: '#F5EFE6',
        gold: '#C6A969',
        ivory: '#FAFAFA'
      }
    },
  },
  plugins: [],
};