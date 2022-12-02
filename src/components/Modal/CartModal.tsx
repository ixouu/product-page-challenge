import ReactDOM from "react-dom";
import Spinner from "../Spinner/Spinner";

// onClose props unable to close the modal 
interface ModalProps {
    onClose : () => void;
  }

const CartModal = ({ onClose}:ModalProps) => {
	return ReactDOM.createPortal(
		<>
            <div onClick={onClose} className='backdrop-brightness-50 w-full h-full fixed bg-cover bg-no-repeat z-200 top-0 '></div>
            <div className='bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-zinc-200 rounded-lg h-1/2 absolute flex flex-col items-center justify-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-screen md:w-3/4 xl:w-1/2 max-w-[90vw] md:max-h-[95vh]'>
                <Spinner/>
                <span className=" animate-modalTitle title inline-block p-3 rounded-md text-center text-xl text-white bg-gradient-to-r from-sky-600 to-indigo-500 lg:text-2xl"> Cette feature n'est pas encore disponible =)</span>
            </div>
		</>,document.getElementById("modal-root") as HTMLElement
	);
};

export default CartModal;
