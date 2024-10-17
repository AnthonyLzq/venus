/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}',],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'kiwi-maru': ['KiwiMaru'],
        'kiwi-maru-medium': ['KiwiMaruMedium'],
        'quattrocento-sans-bold': ['QuattrocentoSansBold'],
      }
    },
  },
  plugins: [],
}

