/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hks-red': '#9B1C20',
        'hks-red-dark': '#7A1519',
        'hks-gold': '#C9A962',
        'hks-gold-light': '#E8D8A8',
        'hks-gray': '#6B7280',
        'hks-gray-light': '#F3F4F6',
        'hks-gray-dark': '#374151',
        'hks-beige': '#F5F0E8',
        'hks-brown': '#5C4033',
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
