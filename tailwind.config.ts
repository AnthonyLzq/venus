import { extendedTheme } from './utils/extended-theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      ...extendedTheme,
      fontFamily: {
        'kiwi-maru': ['KiwiMaru'],
        'kiwi-maru-medium': ['KiwiMaruMedium'],
        'quattrocento-sans-bold': ['QuattrocentoSansBold'],
      }
    },
  },
  plugins: [],
}
