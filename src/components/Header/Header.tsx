import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { MobileMenuContext} from "../../context/MobileMenu";

const Header = () => {

	return (
		<>
			<MobileMenuContext>
				<header className='text-inter flex w-100 h-20 justify-between items-center px-[20px] shadow-lg relative'>
					<Navbar />
					<h1 className='font-cinzel text-2xl absolute left-1/2 -translate-x-1/2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
						YOUVERSACE
					</h1>
					<FontAwesomeIcon
						icon={faCartShopping}
						className='text-lg cursor-pointer lg:text-xl xl:text-2xl 2xl:text-2xl'
					/>
				</header>
			</MobileMenuContext>
		</>
	);
};

export default Header;
