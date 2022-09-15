/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noirBody: '#000300',
        vertPrimary: '#00df9a',
      }
    },
  },
  plugins: [],
}
