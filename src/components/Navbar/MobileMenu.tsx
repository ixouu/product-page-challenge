const MobileMenu = () => {
	const menuTitles = ["Acceuil", "Produits", "Contact"];
    const animationsDelays = ['150', '300', '450'];

	return (
		<nav className='animate-mobileNavAfter absolute top-[75px] h-[40vh] w-full left-0 scale-0 bg-blue-900 rounded-br-[200px] origin-top-left before:absolute before:content-[""] before:left-0 before:w-full before:h-[90%] before:top-0 before:rounded-br-[200px] before:bg-gradient-to-b from-zinc-900 to-blue-700 before:animate-mobileNavAfter before:origin-top-left before:scale-0'>
			<ul className='flex flex-col justify-between mt-20'>
				{menuTitles.map((title, index) => {
					return (
						<li key={index}> 
                            <button 
                                className='animate-mobileNavLinkSlideLeft py-[3vw] px-[4vw] uppercase relative text-white text-xl font-bold opacity-0'
                                aria-label={`Redirige vers la page ${title}`}
                                style={{ animationDelay: `${animationsDelays[index]}ms`}}
                            >{title}
                            </button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MobileMenu;
