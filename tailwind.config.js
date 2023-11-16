/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'scale-in': 'scale-in .150s ease',
      },
      keyframes: {
        'scale-in': {
          '0%': {
            scale: '0.60',
          },
          '100%': {
            scale: '1.00',
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#089A61',
          50: '#63F7BD',
          100: '#4FF6B5',
          200: '#29F4A4',
          300: '#0CE892',
          400: '#0AC179',
          500: '#089A61',
          600: '#05653F',
          700: '#022F1E',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
      },
    },
  },
  plugins: [],
}
