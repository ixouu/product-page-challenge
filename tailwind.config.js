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
      'fade' : 'fade .5s ease-in 1 forwards',
      'cartDown': 'cartDown 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards',
      'spinner' : 'spinner 1s ease-in-out infinite forwards',
      'modalTitle' : 'modalTitle .7s linear 1 forwards'

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
          '0%': {transform : 'translate3d(0, -100%, 0)', opacity : '0'},
          '100%': {transform : 'translate3d(0, 0, 0)', opacity : '1'}
        },
        cartDown : {
          '0%' : {opacity: '0', transform: 'translate3d(0, -9999px, 0)'},
          '60%':  {opacity: '1',transform: 'translate3d(0, 25px, 0)'},
          '75%':  {opacity: '1',transform: 'translate3d(0, -10px, 0)'},
          '90%':  {opacity: '1',transform: 'translate3d(0, 5px, 0)'},
          '100%':  {opacity: '1',transform: 'translate3d(0, à, 0)'},
        },
        spinner : {
          '0%' : {transform:'translate(-60%, -30%) rotateY(0)'},
          '100%' : {transform:'translate(-60%, -30%) rotateY(360deg)'}
        },
        modalTitle : {
          '0%' : {opacity: '0', transform:'scale3d(0.3, 0.3, 0.3)'},
          '50%' : {opacity: '1'}
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
