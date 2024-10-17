/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        'kiwi-maru': ['KiwiMaru'],
        'kiwi-maru-medium': ['KiwiMaruMedium'],
      }
    },
  },
  plugins: [],
}

