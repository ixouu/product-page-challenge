import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { MobileMenuContext } from "../../context/MobileMenu";
import Cart from "../Cart/Cart";

const Header = () => {
	return (
		<>
			<MobileMenuContext>
				<header className='bg-gray-100 text-inter flex w-100 h-20 justify-between items-center px-[20px] shadow-lg relative z-100'>
					<Navbar />
					<h1 className='font-cinzel absolute left-1/2 -translate-x-1/2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.35)] text-2xl xl:text-3xl 2xl:text-5xl'>
						<a href='#'>YOUVERSACE</a>
					</h1>
					<div className="relative">
					<Cart/>
					<FontAwesomeIcon
						icon={faCartShopping}
						className='text-lg cursor-pointer lg:text-xl xl:text-2xl'
					/>
					</div>
				</header>
			</MobileMenuContext>
		</>
	);
};

export default Header;
