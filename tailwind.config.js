/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          orange: '#FF6B00',
          black: '#1A1A1A',
          silver: '#C0C0C0',
        }
      },
    },
  },
  plugins: [],
}