/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3e98c7',
        secondary: '#3e98c7',
        default: '#2B2B2B',
        card: '#3B3B3B',
        error: '#EF4444'
      }
    }
  },
  plugins: []
};
