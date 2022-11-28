import productImg7 from "../../assets/images/img7.webp";
import productImg8 from "../../assets/images/img8.webp";
import productImg9 from "../../assets/images/img9.webp";

const pictures = [
  {
    src: productImg7,
    alt: "Représentation du blous Umani",
  },
  {
    src: productImg8,
    alt: "Seconde représentation du blous Umani",
  },
  {
    src: productImg9,
    alt: "Quatrieme Représentation du blous Umani",
  },
];


const SuggestedProducts = () => {

  return (
    <div className='mt-4 relative overflow-x-hidden'>
      <h4 className='font-semibold text-xl uppercase'>Recommandation pour vous</h4>
      <div className='track flex my-4 animate-marquee'>
        {pictures.map((picture, index) => {
          return <img key={index} src={picture.src} alt={picture.alt} className="w-[300px] h-[400px] mx-2 rounded cursor-pointer lg:w-[375px] lg:h-auto xl:w-[450px]"/>
        })}
      </div>
    </div>
  )
}

export default SuggestedProducts