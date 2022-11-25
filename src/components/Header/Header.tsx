import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { MobileMenuContext } from "../../context/MobileMenu";
import Title from "../Title/Title";
import Cart from "../Cart/Cart";

const Header = () => {
	return (
		<>
			<MobileMenuContext>
				<header className='text-inter flex w-100 h-20 justify-between items-center px-[20px] shadow-lg relative'>
					<Navbar />
					<Title color={"black"} position={"absolute"} fontSize={'1.5rem'}/>
					<div className="relative">
					<Cart/>
					<FontAwesomeIcon
						icon={faCartShopping}
						className='text-lg cursor-pointer lg:text-xl xl:text-2xl 2xl:text-2xl'
					/>
					</div>
				</header>
			</MobileMenuContext>
		</>
	);
};

export default Header;
