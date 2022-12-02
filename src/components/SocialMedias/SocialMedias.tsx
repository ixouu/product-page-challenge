import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const SocialMedias = () => {
  return (
    <section className='mt-4 md:ml-1 xl:mt-20'>
      <h4 className='font-semibold text-lg md:text-xl lg:text-2xl'> Suivez notre actualité</h4>
      <ul className='flex items-between text-4xl py-4'>
        <li className='socialMedia-li overflow-hidden relative h-14 w-14 mx-1 rounded-full bg-white border-4 border-white flex items-center justify-center before:content[""] before:w-full before:h-0 before:bg-blue-800 before:rounded-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 hover:before:h-full before:duration-500 before:ease-out'><a href="#" className="socialMedia-link text-zinc-900 duration-300" aria-label="Liens vers Facebook"><FontAwesomeIcon icon={faFacebookF} className=""/></a></li>
        <li className='socialMedia-li overflow-hidden relative h-14 w-14 mx-1 rounded-full bg-white border-4 border-white flex items-center justify-center before:content[""] before:w-full before:h-0 before:bg-pink-400 before:rounded-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 hover:before:h-full before:duration-500 before:ease-out'><a href="#" className="socialMedia-link text-zinc-900 duration-300" aria-label="Liens vers Instagram"><FontAwesomeIcon icon={faInstagram} className=""/></a></li>
        <li className='socialMedia-li overflow-hidden relative h-14 w-14 mx-1 rounded-full bg-white border-4 border-white flex items-center justify-center before:content[""] before:w-full before:h-0 before:bg-blue-500 before:rounded-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 hover:before:h-full before:duration-500 before:ease-out'><a href="#" className="socialMedia-link text-zinc-900 duration-300" aria-label="Liens vers Linkedin"><FontAwesomeIcon icon={faLinkedinIn} className=""/></a></li>
      </ul>
    </section>
  )
}

export default SocialMedias
