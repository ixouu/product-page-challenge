import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import Modal from '../components/Modal/Modal'

import productImg1 from "../assets/images/img1.webp";
import productImg2 from "../assets/images/img2.webp";
import productImg3 from "../assets/images/img3.webp";
import productImg4 from "../assets/images/img4.webp";
import productImg5 from "../assets/images/img5.webp";
import productImg6 from "../assets/images/img6.webp";

const PicturesContainer = () => {


  // state to define if the modal has to be display
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  // state to define the picture to pass through modal's props
  const [picture, setPicture] = useState("");

	const pictures = [
		{
			src: productImg1,
			alt: "Représentation du blous Umani",
		},
		{
			src: productImg2,
			alt: "Seconde représentation du blous Umani",
		},
		{
			src: productImg3,
			alt: "Quatrieme Représentation du blous Umani",
		},
		{
			src: productImg4,
			alt: "Quatrieme Représentation du blous Umani",
		},
		{
			src: productImg5,
			alt: "Cinquieme Représentation du blous Umani",
		},
		{
			src: productImg6,
			alt: "Sixieme Représentation du blous Umani",
		},
	];

  // function who's firing modal to display the picture in full size on click event
  const expandPicture = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPicture(e.currentTarget.value);
    !modalIsOpen? setModalIsOpen(true) : setModalIsOpen(false);
  }

	return (
		<>
			<div
				className='slider
         flex 
         overflow-x-scroll
         min-h-content
         
         md:grid
         
         lg:grid
         lg:grid-cols-2 
         lg:gap-2
         lg:w-[55%]
         lg:auto-cols-max

         xl:grid
         xl:gap-x-2
         xl:w-[60%]
         '
			>
				{pictures.map((picture, index) => {
					return (
            <div key={index} className="relative">
						<img
							src={picture.src}
							alt={picture.alt}
							draggable='false'
							className='
                h-auto 
                max-h-[550px]
                max-w-[430px]

                lg:max-h-[425px]

                xl:h-fit
                xl:max-h-full
                xl:max-w-full
                '
						/>
              <button
              value={picture.src}
              onClick={(e)=> expandPicture(e)}
              className="
              w-3 
              h-3 
              flex 
              justify-center 
              items-center 
              absolute 
              top-2 
              right-4 
              bg-zinc-50 
              p-5 
              opacity-50
              cursor-pointer
              rounded-lg
              hover:opacity-100
              ">
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
              </button>
            </div>
					);
				})}
			</div>
			<div className='h-1 w-100 bg-slate-300'>
				<div className='h-1 w-100 bg-slate-900 w-2/6'></div>
			</div>
      {modalIsOpen && <Modal onClose={() => setModalIsOpen(false)} picture={picture}/>}
		</>
	);
};

export default PicturesContainer;
