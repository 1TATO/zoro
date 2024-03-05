/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'acme': ['Acme', 'sans-serif'],
        'carter': ['Carter One', 'sans-serif'],
        'oleo': ['Oleo Script', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

