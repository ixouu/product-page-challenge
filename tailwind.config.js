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
      'mobileNav' : 'mobileNav .3s ease-out 1 forwards',
      'mobileNavBefore':'mobileNavBefore .6s ease-out forwards',
      'dropDownActive': 'displayDropdown .3s linear forwards',
      'fade' : 'fade .5s ease-in 1 forwards',
      'cartDown': 'cartDown 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards',
      'spinner' : 'spinner 1s ease-in-out infinite forwards',
      'modalTitle' : 'modalTitle .7s linear 1 forwards',
      'mobileNavLinkSlideLeft': 'mobileNavLinkSlideLeft 1s linear forwards',
      'mobileCloseBtn': 'mobileCloseBtn .7s linear forwards',
      'marquee': 'marquee 60s linear infinite',
      'heartLeaving1' : 'heartLeaving1 1s linear forwards',
      'heartLeaving2' : 'heartLeaving2  1s .1s linear forwards',
      'heartLeaving3' : 'heartLeaving3  1s .2s linear forwards',
      'validateCartBtn': 'validateCartBtn .7s cubic-bezier(0.215, 0.61, 0.355, 1) 1',
      'imgInModal': 'imgInModal .6s ease-out forwards'
      },
      keyframes :{
        mobileNav: {
          '0%': {transform : 'scale(0)', width:'40px', height:'40px', borderRadius:'50%'},
          '100%': {transform : 'scale(1)', width:'100%', height:'40vh', borderRadius:'0 0 200px 0'}
        },
        mobileNavBefore: {
          '0%': {transform : 'scale(0)', width:'40px', height:'40px', borderRadius:'50%'},
          '100%': {transform : 'scale(1)', width:'100%', height:'90%', borderRadius:'0 0 200px 0'},
        },
        displayDropdown: {
          '0%': {transform : 'scaleY(0)', opacity : '0'},
          '80%': {transform : 'scaleY(1.1)', opacity : '0.8'},
          '100%' : {transform : 'scaleY(1)', opacity : '1'}
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
        },
        mobileNavLinkSlideLeft : {
          '0%': { opacity: '0', transform:'translateX(-250px)'},
          '50%': { opacity: '0.3'},
          '70%' : {opacity: '0.6', transform:'translateX(20px)'},
          '100%': { opacity: '1', transform:'translateX(0)'},
        },
        mobileCloseBtn : {
          '0%' : {opacity: '0', transform:'scale(0)'},
          '50%': {opacity: '0.3'},
          '100%' : {opacity: '1', transform:'scale(1)'},
        },
        validateCartBtn : {
          '0%': {transform: 'scale3d(0.3, 0.3, 0.3)'},
          '20%': {transform: 'scale3d(1.1, 1.1, 1.1)'},
          '40%': {transform: 'scale3d(0.9, 0.9, 0.9)'},
          '60%': {transform: 'scale3d(1.03, 1.03, 1.03)'},
          '80%': {transform: 'scale3d(0.97, 0.97, 0.97)'},
          '100%': {transform: 'scale3d(1, 1, 1)'},
        },
        slide: {
          '0%': { transform :'translate3d(0, -100%, 0) translateX(-50%)', opacity: '0' },
          '90%': { opacity: '0.4' },
          '95%': { opacity: '0.9' },
          '100%': {transform :'translate3d(0, 0, 0) translateX(-50%)', opacity: '1' },
        },
        marquee: {
          '0%' : {  transform: 'translateX(0)' },
          '50%' : {  transform: 'translateX(-75%)' }
        },
        heartLeaving1 : {
          'to' : { transform : 'translateY(40px)', opacity: '0' }
        },
        heartLeaving2 : {
          'to' : { transform : 'translate(-25px, 25px)rotate(-45deg)', opacity: '0' }
        },
        heartLeaving3 : {
          'to' : { transform : 'translate(-25px, -50px)rotate(45deg)', opacity: '0' }
        },
        imgInModal : {
          '0%': { transform :'scaleX(-10%) scaleY(-20%) translate(-50%, -50%)', top: '50%', left:'50%'},
          '100%': { transform :'scaleX(1) scaleY(1)  translate(-50%, -50%)' , top: '50%', left:'50%'},
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
