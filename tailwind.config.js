/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['"Raleway"', "sans-serif"],
      }
    },
  },
  plugins: [],
}

