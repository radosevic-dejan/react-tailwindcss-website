/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      theme: {
        // small screens
        sm: '640px',
        // medium screens
        md: '768px',
        // large screens
        lg: '1024px',
        // extra large screens
        xl: '1280px',
        // huge screens - giga size
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}
