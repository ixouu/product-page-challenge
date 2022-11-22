module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation : {
      'mobileNav' : 'slide .4s ease-out forwards' 
      }
    },
    fontFamily :{
      'inter' : ['"inter"', 'sans-serif'],
      'cinzel': [' "Cinzel Decorative"', 'cursive']
    },
  },
  plugins: [],
}