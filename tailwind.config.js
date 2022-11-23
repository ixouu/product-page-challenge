module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation : {
      'mobileNav' : 'slide .4s ease-out forwards',
      'dropDownActive': ' displayDropdown .3s linear 1 forwards'  
      },
      keyframes :{
        slide: {
          '0%': {transform : 'translate3d(0, -100%, 0) translateX(-50%)', opacity : '0'},
          '90%': {opacity : '0.4'},
          '100%'  : {transform : 'translate3d(0, 0, 0) translateX(-50%)', opacity : '1'}
        },
        displayDropdown : {
          '0%': {transform : 'scaleY(0)', opacity : '0'},
          '50%' : {opacity : '1'},
          '80%' : {transform : 'scaleY(1.1)'},
          '100%' : {transform : 'scaleY(1)', opacity : '1'}
        }
      }
    },
    fontFamily :{
      'inter' : ['"inter"', 'sans-serif'],
      'cinzel': [' "Cinzel Decorative"', 'cursive']
    },
  },
  plugins: [],
}