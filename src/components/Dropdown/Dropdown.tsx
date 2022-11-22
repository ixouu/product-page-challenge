import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown  } from "@fortawesome/free-solid-svg-icons";

interface DropdownProps {
    title: string, 
    content: string
}

const Dropdown = ({title, content}: DropdownProps) => {

    // State who's defining if the dropdown is down or not
    const [isDown, setIsDown] = useState<boolean>(false);

    // toggle isDown state
    const handleClick = () => {
        isDown ? setIsDown(false) : setIsDown(true)
    }

  return (
    
        <div className="px-5">
            <div className="drop-head flex h-10 border-b border-b-slate-400 justify-between items-center">
                <h4 className='pl-1 text-lg'>{title}</h4>
                <button 
                    type='button'
                    onClick={() => handleClick()}
                >{
                    isDown? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>
                }
                </button>
            </div>
            {isDown && 
                <div className={isDown? 'dropdown-active origin-top-center ' : ''}>
                    <p>{content}</p>
                </div>
            }
        </div>
  )
}

export default Dropdown