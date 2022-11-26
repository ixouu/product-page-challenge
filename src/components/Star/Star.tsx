import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface StarProps{
    color:string
}

const Star = ({color}: StarProps) => {
  return (
    <FontAwesomeIcon
    icon={faStar}
    className=' border-solid text-lg mr-0.5 md:text-xl lg:text-2xl'
    style={{color : `${color}`}}
    />
  )
}

export default Star