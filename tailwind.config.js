/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': '#d9480f',
        'primary-400': '#fd7e14',
        'primary-300': '#ff922b',
        'primary-100': '#fff4e6',
        'primary-200': '#ffd8a8',
      },
      fontFamily: {
        shadows: ['Shadows Into Light', 'cursive'],
      },
    },
  },
  plugins: [],
};
