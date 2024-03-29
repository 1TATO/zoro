/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        // 'kdam': ['Kdam Thmor Pro', 'sans-serif'],
        'acme': ['Acme', 'sans-serif'],
        'carter': ['Carter One', 'sans-serif'],
        'oleo': ['Oleo Script', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

