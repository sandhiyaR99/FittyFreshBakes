/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        highlight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        highlight: 'highlight 4s forwards',
      }
    },
  },
  plugins: [],
}

