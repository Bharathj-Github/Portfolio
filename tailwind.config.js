/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#5f22d9',
        'secondary':'#1a1525',
        'secondary_l':'#9285f4'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
