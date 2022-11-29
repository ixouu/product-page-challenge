const MobileMenu = () => {
	const menuTitles : string[] = ["Acceuil", "Produits", "Contact"];
    const animationsDelays : string[] = ['650', '800', '950'];

	return (
		<nav className='animate-mobileNav absolute top-[75px] h-[40px] w-[40px] left-0 scale-0 bg-blue-900 origin-top-left before:absolute before:content-[""] before:left-0 before:w-[40px] before:h-[40px] before:top-0  before:bg-gradient-to-br from-zinc-900 to-blue-700 before:animate-mobileNavBefore before:origin-top-left before:scale-0'>
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
