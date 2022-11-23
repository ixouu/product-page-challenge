import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";

const SocialMedias = () => {
  return (
    <section className='mt-4'>
      <h6 className='font-semibold text-lg'> Suivez notre actualité</h6>
      <ul className='flex w-1/2 items-between text-4xl py-4'>
        <li className='pr-3'><a href='#'><FontAwesomeIcon icon={faFacebook}/></a></li>
        <li className='pr-3'><a href='#'><FontAwesomeIcon icon={faInstagram}/></a></li>
        <li className='pr-3'><a href='#'><FontAwesomeIcon icon={faLinkedin}/></a></li>
      </ul>
    </section>
  )
}

export default SocialMedias