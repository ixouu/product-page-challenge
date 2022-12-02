import React, { useState, useRef} from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import productImg1 from "../../assets/images/img1.webp";
import productImg2 from "../../assets/images/img2.webp";
import productImg3 from "../../assets/images/img3.webp";
import productImg4 from "../../assets/images/img4.webp";
import productImg5 from "../../assets/images/img5.webp";
import productImg6 from "../../assets/images/img6.webp";


const PicturesContainer = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	// state to define if the modal has to be display
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	// state to define the picture to pass through modal's props
	const [picture, setPicture] = useState("");

	// current Big Picture State
	const  [currentBigPicture, setCurrentBigPicture] = useState(productImg1);

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
	const expandPicture = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setPicture(e.currentTarget.value);
		!modalIsOpen ? setModalIsOpen(true) : setModalIsOpen(false);
	};


	return (
		<>
			<section className="flex flex-col items-center mt-6 xl:max-w-[50%]">
				<div className="relative w-full flex items-center justify-center lg:w-[60%] xl:w-[90%]">
				<LazyLoadImage src={currentBigPicture} width={'90%'} className="self-center rounded-md shadow-lg shadow-gray-400 "/>
				<button value={currentBigPicture}
						onClick={(e) => expandPicture(e)}
						className='duration-300 w-3 h-3 flex justify-center items-center absolute top-6 right-10 bg-zinc-50 p-5 opacity-50 cursor-pointer rounded-lg hover:opacity-100 md:right-16 xl:top-8 xl:right-14 2xl:right-16'
						aria-label="Aggrandi l'image">
				<FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter}/>
				</button>
				</div>
				<div className="flex py-4 slider overflow-x-scroll min-h-content w-full max-w-[90%] xl:w-auto md:flex md:justify-center" ref={containerRef}>
					{pictures.map((picture, index) => {
						return <div key={index} className="mx-2">
								<LazyLoadImage
									src={picture.src}
									alt={picture.alt}
									width={"110px"}
									effect="opacity"
									draggable='false'
									onClick = { () => setCurrentBigPicture(picture.src)}
									className= "rounded-2xl shadow-lg shadow-gray-400 xl:w-[150px]"
								/>
								</div>
					})}				
				</div>
			</section>
			{modalIsOpen && (
				<Modal
					onClose={() => setModalIsOpen(false)}
					picture={picture}
				/>
			)}
		</>
	);
};

export default PicturesContainer;
