/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'firedev-linear': 'linear-gradient(90deg, #FB6422 0%, #FF046D 100%)'
      },
      textColor: {
        'lightGray': '#333333',
        'mandatory': '#FF046D'
      }
    },
  },
  plugins: [],
}
