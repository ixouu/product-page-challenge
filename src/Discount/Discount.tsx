import { useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Discount = () => {


    const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
    const [isCLicked, setIsClicked] = useState<boolean>(false);
    const [isReduce, setIsReduce] = useState<boolean>(false);

    useEffect(() =>{
        const timer = setTimeout(() => {
            setIsDisplayed(!isDisplayed)
        
        }, 7000)
        return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <>
        {isReduce
        ?    <button
        id='discountBtn-small' 
        className='fixed w-12 h-12 bg-gray-900 rounded-full text-white -right-[20px] bottom-[220px]'
        onClick={(e) =>{e.preventDefault(); setIsReduce(!isReduce)}}
        aria-label="agrandit la taille du code de promotion"
        ><FontAwesomeIcon icon={faChevronUp} className="-rotate-90 pb-4"/></button>
        :    <div id="discountBtn" 
        className={isDisplayed? "fixed -right-[90px] bottom-[220px] h-16 w-[220px] bg-gray-900 text-white -rotate-90 uppercase after:content[''] after:w-1 after:h-1 after:absolute after:bg-yellow-300 after:top-2 after:right-3 after:rounded-full after:animate-pulse flex justify-center items-center": "fixed -right-[90px] bottom-[220px] h-16 w-0"}
        onClick={() => setIsClicked(!isCLicked)}
        >{isCLicked 
            ? <p>CODE : ENZO-10</p>
            : <p>PROFITEZ DE -10%</p>
        }
        <button 
        className='absolute bg-gray-900 rounded-full w-6 h-6 -top-[10px]' 
        onClick={(e) =>{e.preventDefault(); setIsReduce(!isReduce)}}
        aria-label="réduit la taille du code de promotion"
        ><FontAwesomeIcon icon={faChevronDown}/></button>
        </div>
    
}

 
    </>
  )
}

export default Discount