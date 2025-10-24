/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // define slower spin variants
        'spin-slow': 'spin 3s linear infinite',   // 3-second rotation
        'spin-slower': 'spin 5s linear infinite', // 5-second rotation
      },
    },
  },
  plugins: [],
}