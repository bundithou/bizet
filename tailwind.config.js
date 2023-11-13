/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js'
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  content: ['node_modules/preline/dist/*.js'],
  theme: {
    extend: {},
  },
  plugins: [preline],
}
