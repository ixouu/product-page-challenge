import {useEffect, useState} from 'react';
import MobileBtn from './MobileBtn';

const menuTitles : string[] = ["Acceuil", "Produits", "Contact"];
const animationDelay : number[] = [75, 150, 225]

const Navbar = () => {
    const [ windowDimension, setWindowDimension ] = useState<number>(0);

    useEffect(() => {
        setWindowDimension(window.innerWidth)
    },[]) ;

    
  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // toggle navbar depending of screen size
  let isSmallScreen = () => {
    if (windowDimension <= 768){
        return true
    }else {
        return false
    }
  }

  return (
      <>
    { 
        isSmallScreen() 
        ? (<MobileBtn />)
        : (<nav className='w-1/3 uppercase font-semibold lg:w-1/4 xl:w-1/5'>
            <ul className='flex justify-between'>
            {menuTitles.map((title, index) => {
					return (
						<li key={index}> 
                        <button className="animate-fade text-center uppercase py-3 px-3 hover:text-yellow-500 hover:before:scale-100 duration-200 ease-out relative before:content-[''] before:rounded-lg before:bg-gray-900 before:w-10 before:absolute before:bottom-1 before:h-1 before:ease-out before:duration-200 before:origin-left before:scale-x-0 md:p-2"
                        style={{animationDelay : `${animationDelay[index-1]}ms`}}>
                        {title}</button>
					    </li>
					);
				})}
            </ul>
        </nav>)
    }
    </>
  )
}

export default Navbar