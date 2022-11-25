module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        'btnShadow' : '0px 3px 8px rgba(0, 0, 0, 0.24)'
      },
      animation : {
      'mobileNav' : 'slide .4s ease-out forwards',
      'dropDownActive': 'displayDropdown .3s linear 1 forwards',
      'fade' : 'fade 1s lienar forwards ease-in ',
      },
      keyframes :{
        slide: {
          '0%': {transform : 'translate3d(0, -100%, 0) translateX(-50%)'},
          '90%': {opacity : '0.4'},
          '100%': {transform : 'translate3d(0, 0, 0) translateX(-50%)', opacity : '1'}
        },
        displayDropdown: {
          '0%': {transform : 'scaleY(0)', opacity : '0'},
          '50%': {opacity : '1'},
          '80%': {transform : 'scaleY(0)'},
          '100%' : {transform : 'translate3d(0, 0, 0) translateX(-50%)', opacity : '1'}
        },
        fade: {
          '0%': {transform : 'translate3d(0, 100%, 0)', opacity : '0'},
          '100%': {transform : 'translate3d(0, 0, 0)', opacity : '1'}
        },
      }
    },
    fontFamily :{
      'inter' : ['"inter"', 'sans-serif'],
      'cinzel': [' "Cinzel Decorative"', 'cursive']
    },
  },
  plugins: [],
}