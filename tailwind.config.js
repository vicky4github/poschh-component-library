/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'min': '200px', 'max': '600px'},
      // 'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px'},
      // 'lg': {'min': '1024px', 'max': '1279px'},
      // 'xl': {'min': '1280px', 'max': '1535px'},
      // '2xl': {'min': '1536px'},
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

