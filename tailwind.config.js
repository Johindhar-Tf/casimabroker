/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#C4856A',
        'terracotta-dark': '#A86A52',
        'terracotta-light': '#D9A08A',
        beige: '#F5EDE6',
        'soft-tan': '#E8D5C4',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
