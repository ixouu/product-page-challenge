import React from "react";

const MobileMenu = () => {
	const menuTitles = ["Acceuil", "Produits", "Contact"];

	return (
		<nav className='animate-mobileNav absolute top-[90px] w-4/5 left-1/2 -translate-x-1/2 opacity-0'>
			<ul className='flex justify-between'>
				{menuTitles.map((title) => {
					return (
						<li> <button className='
                        mobileBtn
                        w-full 
                        text-center 
                        hover:bg-black 
                        hover:text-white ease-out duration-300 
                        rounded 
                        py-[3vw] 
                        px-[4vw] 
                        uppercase  
                        relative 
                        border-2
                        z-0
                        '>
                        {title}</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MobileMenu;
