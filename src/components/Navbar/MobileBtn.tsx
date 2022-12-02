import React from "react";
import { useMobileMenuContext } from "../../context/MobileMenu";
import MobileMenu from "./MobileMenu";

const MobileBtn: React.FC = () => {
	const { isOpen, setIsOpen } = useMobileMenuContext();

	// toggle Mobile menu
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	return (
		<>
			<button
				aria-label='Ouvre le menu de navigation mobile'
				className='bg-transparent h-10'
				onClick={(e) => handleClick(e)}
			>
				<div className='w-5 bg-gray-900 h-0.5 mb-1'></div>
				<div className='w-3 bg-gray-900 h-0.5'></div>
			</button>
			{isOpen && (
				<>
					<MobileMenu />
					<button
			 			id='Mobile-CloseBtn'
						className='fixed bottom-10 left-1/2 -ml-[4%] rounded-full h-14 w-14 bg-gradient-to-b from-zinc-900 to-blue-700 border-2 border-neutral-900 text-white text-2xl z-100 animate-mobileCloseBtn'
						aria-label="Ferme le menu de navigation mobile"
						onClick={(e) => handleClick(e)}
					>
						X
					</button>
				</>
			)}
		</>
	);
};

export default MobileBtn;
