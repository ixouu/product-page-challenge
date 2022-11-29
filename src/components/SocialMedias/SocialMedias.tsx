import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";

const SocialMedias = () => {
  return (
    <section className='mt-4 xl:mt-20'>
      <h4 className='font-semibold text-lg md:text-xl lg:text-2xl'> Suivez notre actualité</h4>
      <ul className='flex w-[250px] items-between text-4xl py-4'>
        <li className='pr-3 md:pr-6'><button><FontAwesomeIcon icon={faFacebook} className="hover:text-sky-600 hover:scale-110 ease-out duration-200"/></button></li>
        <li className='pr-3 md:pr-6'><button><FontAwesomeIcon icon={faInstagram} className="hover:text-sky-600 hover:scale-110 ease-out duration-200"/></button></li>
        <li className='pr-3 md:pr-6'><button><FontAwesomeIcon icon={faLinkedin} className="hover:text-sky-600 hover:scale-110 ease-out duration-200"/></button></li>
      </ul>
    </section>
  )
}

export default SocialMedias