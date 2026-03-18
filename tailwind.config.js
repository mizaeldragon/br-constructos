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
          orange: '#FF8C00',     // Main primary color
          yellow: '#FFB703',     // Secondary Color / hover
          lightOrange: '#FFF3E0',// Very light for backgrounds
          navy: '#1F2937',     // Dark text/backgrounds
          slate: '#4B5563',    // Secondary text
          light: '#F9FAFB',    // Off-white background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px rgba(255, 140, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
