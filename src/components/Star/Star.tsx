import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";

interface StarProps{
    color:string
}

const Star = ({color}: StarProps) => {
  return (
    <FontAwesomeIcon
    icon={faPagelines}
    className=' border-solid text-lg mr-0.5 md:text-2xl lg:text-3xl lg:mt-4 lg:ml-1'
    style={{color : `${color}`}}
    />
  )
}

export default Star