import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeart2 } from "@fortawesome/free-solid-svg-icons";

const LikeIcon = () => {

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleClick =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    setIsLiked(!isLiked)
  }
  
  return (
    <>
      <div className="relative w-[30px] h-[30px] text-purple-900">
        {!isLiked ? <button onClick={(e)=> handleClick(e)}><FontAwesomeIcon icon={faHeart} className=" text-2xl"/></button> :(
          <>
                  <button onClick={(e)=> handleClick(e)}><FontAwesomeIcon icon={faHeart2} className="faHeart text-2xl"/></button>
                  <FontAwesomeIcon icon={faHeart2} className="faHeart absolute opacity-50 -left-2 top-2 -rotate-12 heart2"/>
                  <FontAwesomeIcon icon={faHeart2} className="faHeart absolute opacity-50 right-2 top-2 rotate-12 heart3"/>
                  <FontAwesomeIcon icon={faHeart2} className="faHeart absolute opacity-50 top-2 -rotate-180 heart1"/>
                  </>
        )}
        

      </div>
    </>
  )
}

export default LikeIcon