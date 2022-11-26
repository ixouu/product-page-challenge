import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import Spinner  from "../Spinner/Spinner"
import { LazyLoadImage } from 'react-lazy-load-image-component';
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

	const [scrollBarWidth, setScrollBarWidth] = useState(0);

	// calculate the width% of the scrollbar based on client's scrolling action
	const handleScroll = () => {
		const position = containerRef.current!.scrollLeft;
		const maxWidth = containerRef.current!.scrollWidth;
		const calcWidth = Math.round((position * 100) / maxWidth + 18);
		setScrollBarWidth(calcWidth);
	};

	useEffect(() => {
		const elementToListen = containerRef.current!;
		elementToListen.addEventListener("scroll", handleScroll);
		return () => {
			elementToListen.removeEventListener("scroll", handleScroll);
		};
	}, [containerRef]);

	return (
		<>
			<div
				className='slider
					flex 
					overflow-x-scroll
					min-h-content
					
					md:grid
					md:auto-cols-max
					md:h-min
					
					lg:grid
					lg:grid-cols-2 
					lg:gap-2
					lg:w-[55%]
					lg:auto-cols-min

					xl:grid
					xl:gap-x-2
					xl:w-[60%]
					'
				ref={containerRef}
			>
				{pictures.map((picture, index) => {
					return (
						<div
							key={index}
							className='relative lg:max-w-[270px] xl:max-w-full'
						>
							<LazyLoadImage
								src={picture.src}
								alt={picture.alt}
								placeholder={<Spinner />}
								effect="opacity"
								draggable='false'
								className='
									h-[550px]
									w-[430px]
									max-h-[550px]
									max-w-[430px]

									lg:h-fit
									lg:max-w-[270px]
								
									xl:max-h-full
									xl:max-w-full
									xl:h-fit
									
									2xl:w-full
									'
							/>
							<button
								value={picture.src}
								onClick={(e) => expandPicture(e)}
								className='
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
              						'
							>
								<FontAwesomeIcon
									icon={faUpRightAndDownLeftFromCenter}
								/>
							</button>
						</div>
					);
				})}
			</div>
			<div className='h-1 w-100 bg-slate-300'>
				<div
					className='h-1 w-auto bg-slate-900'
					style={{ width: `${scrollBarWidth}%` }}
				></div>
			</div>
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
