import productImg7 from "../../assets/images/img7.webp";
import productImg8 from "../../assets/images/img8.webp";
import productImg9 from "../../assets/images/img9.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const pictures: {src: string, alt: string, discount: string | undefined}[] = [
  {
    src: productImg7,
    alt: "Représentation du blous Umani",
    discount : '15%'
  },
  {
    src: productImg8,
    alt: "Seconde représentation du blous Umani",
    discount: undefined
  },
  {
    src: productImg9,
    alt: "Quatrieme Représentation du blous Umani",
    discount : '5%'
  },
];


const SuggestedProducts = () => {

  return (
    <div className='mt-4 relative overflow-x-hidden self-center lg:self-start lg:mt-8 w-[90%] '>
      <h4 className='font-semibold text-xl uppercase'>Recommandation pour vous</h4>
      <div className='track flex my-4 animate-marquee lg:animate-none lg:my-8'>
        {pictures.map((picture, index) => {
          return <div  key={index} className="relative">
                    {picture.discount !== undefined ?<div className="absolute top-2 right-2 bg-gray-900 text-white rounded px-1 text-[12px] xl:text-sm xl:px-2  "><span>-{picture.discount}</span></div> : null}
                    <LazyLoadImage src={picture.src} alt={picture.alt} width={"300px"} height={'400px'} effect="opacity" className="mx-2 rounded cursor-pointer lg:w-[375px] lg:h-auto xl:w-[450px]"/>
                </div>
        })}
      </div>
    </div>
  )
}

export default SuggestedProducts