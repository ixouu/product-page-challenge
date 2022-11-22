import {useEffect, useState} from 'react';
import MobileBtn from './MobileBtn';


const Navbar = () => {
    const menuTitles = ["Acceuil", "Produits", "Contact"];
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
    console.log(windowDimension)
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
            {menuTitles.map((title) => {
					return (
						<li> 
                        <button className='
                        text-center 
                        uppercase  
                        py-3 
                        px-3 
                        hover:text-yellow-500
                        duration-200
                        ease-out
                        '>
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