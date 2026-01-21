/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'speed-red': '#D63230',
        'speed-white': '#EFEFEF',
      },
    },
  },
  plugins: [],
}