/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#861F2E',
          dark: '#6E1926',
          light: '#A83244',
          50: '#FBF4F5',
          100: '#F5E2E5',
          200: '#E5BEC4',
          300: '#D2949E',
          400: '#B85C6B',
          500: '#861F2E',
          600: '#6E1926',
          700: '#571420',
          800: '#3E0E16',
          900: '#26080D',
        },
        ink: {
          DEFAULT: '#000000',
          soft: '#111111',
          charcoal: '#2C2C2C',
          gray: '#4D4D4D',
        },
        warm: '#F5F3F0',
        camel: {
          DEFAULT: '#C8A15B',
          light: '#DCC08A',
          dark: '#A9813F',
        },
      },
      fontFamily: {
        serif: ['Raleway', 'system-ui', 'sans-serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
        hero: ['Raleway', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.8625rem', { lineHeight: '1.15rem' }],
        sm: ['1.00625rem', { lineHeight: '1.4375rem' }],
        base: ['1.15rem', { lineHeight: '1.725rem' }],
        lg: ['1.29375rem', { lineHeight: '2.0125rem' }],
        xl: ['1.4375rem', { lineHeight: '2.0125rem' }],
        '2xl': ['1.725rem', { lineHeight: '2.3rem' }],
        '3xl': ['2.15625rem', { lineHeight: '2.5875rem' }],
        '4xl': ['2.5875rem', { lineHeight: '2.875rem' }],
        '5xl': ['3.45rem', { lineHeight: '1' }],
        '6xl': ['4.3125rem', { lineHeight: '1' }],
        '7xl': ['5.175rem', { lineHeight: '1' }],
        '8xl': ['6.9rem', { lineHeight: '1' }],
        '9xl': ['9.2rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}