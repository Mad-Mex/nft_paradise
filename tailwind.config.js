/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#F88A0A",
        secondaryDark: "#FF7820",
        tertiary: "#1E1AEF",
        tertiaryLight : "#7E7CE9",
        tertiaryLight2: "#0EA5E9",
        tertiaryLight3: "#61CBFE",
        tertiaryLight4: "#E9F8FF",
        accent1: "#FACC15",
        background: "#292524", 
        grayish: "#F0F0F0",
        grayish1: "#D9D9D9",
        grayish2: "#B6B5B5",
        grayish3: "#9C9999",
        grayish4: "#6B7280",
        grayish5: "#1A1818",
        basic: "#3A2C2C",
        warning: "#EF4444",
        success: "#22C55E"
      },
      fontFamily: {
        sans1: ["Jockey One", "sans-serif"],
        sans2: ["Inter", "sans-serif"],
      }      
    },
  },
  plugins: [],
}
