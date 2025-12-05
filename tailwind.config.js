/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", "serif"],
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono: ["Consolas", "Monaco", "monospace"],
      },
      colors: {
        // This is the specific warm cream color from the reference
        background: "#f4f3d9ff", 
        // This is a softer "ink" black, not pitch black
        foreground: "#1D1D1F", 
      },
    },
  },
  plugins: [],
}