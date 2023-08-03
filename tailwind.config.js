/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '200': 'hsla(0, 0%, 98%, 0.6)',
        },
      },
    },
  },
  plugins: [],
}

