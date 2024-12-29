/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require('nativewind/preset')],
  important: 'html',
  theme: {
    extend: {},
  },
  plugins: [],
}

