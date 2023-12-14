import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange-600': '#d9480f',
        'orange-500': '#E8590C',
        'orange-400': '#fd7e14',
        'orange-300': '#ff922b',
        'orange-200': '#ffd8a8',
        'orange-100': '#fff4e6',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
