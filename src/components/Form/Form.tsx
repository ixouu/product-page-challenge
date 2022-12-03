import { useRef, createRef, useEffect, useState } from "react";
import Button from "../Button/Button";
import Options from './Options'
import { colors } from "../../data/data";
import Radios from "./Radios";
import { ProductQty, ProductSizes } from "../../data/data";
import { useCartContext }  from '../../context/CartContext';
import { CartContextType } from "../../@types/cart";
import Sizes from "./Sizes";
import CartModal from "../Modal/CartModal";

const Form = () => {

	const selectRef = useRef<HTMLSelectElement>(null);
	const BtnRef = createRef<HTMLButtonElement>();

	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);


	// remove bounce class when the button has been clicked
	useEffect(() => {
		const timeout = setTimeout(() => {
			BtnRef.current?.classList.remove("animate-validateCartBtn", "ring-green-700")
			BtnRef.current?.classList.add("ring-zinc-900")
		}, 2000);
	  
		return () => clearTimeout(timeout);
	  }, [BtnRef]);
	  

	const {UpdateCart} = useCartContext() as CartContextType;

	// handle Click Button
	// Update product in cart state with the selected quantity
	// add bounce class to the button
	const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		switch (e.currentTarget.type) {
			case 'submit':
					setModalIsOpen(true);
				return
			case 'button':
				UpdateCart(Number(selectRef.current!.value));
				BtnRef.current?.classList.remove("ring-zinc-900")
				BtnRef.current?.classList.add("animate-validateCartBtn", "ring-green-700")
				break;
			default:
				break;
		}
	}

  return (
	<>
    <form className="mt-4 px-10 flex w-full flex-col items-center lg:px-6 h-[40%] lg:items-start">
		{/* Colors */}
		<div className="flex justify-between items-center my-4 w-full md:flex-col md:max-w-[300px] lg:flex-row lg:max-w-[400px]">
		<p className="text-ml xl:text-xl">Choisissez la couleur :</p>
			<div className="flex items-center ">
				{colors.map((color, index) => {
					return <Radios key={index}  colorTitle={color.colorTitle} colorCode={color.colorCode} defaultValue={color.defaultValue}/>
				})}
			</div>
		</div>
		{/* Qty select */}
		<div className="flex justify-between items-center my-4 w-full md:flex-col md:max-w-[300px] lg:flex-row lg:max-w-[400px]">
			<label className="text-ml lg:text-sm xl:text-xl" htmlFor="ProductQty">Sélectionnez une quantité:</label>
			<select ref={selectRef}  id="ProductQty" className="border-2 border-gray-900 rounded w-[120px] min-h-14 text-lg p-3 shadow-btnShadow hover:shadow-xl ease-in duration-200 text-center">
				<Options options={ProductQty} />
			</select>
		</div>
			<div className="flex justify-between items-center my-4 w-full md:flex-col md:max-w-[300px] lg:flex-row  lg:max-w-[400px]">
			<label className="text-ml lg:text-sm xl:text-xl" htmlFor="ProductSize">Sélectionnez une taille:</label>
			<select id="ProductSize" className="border-2 border-gray-900 rounded w-[120px] min-h-14 text-lg p-3 shadow-btnShadow hover:shadow-xl ease-in duration-200 text-center">
				<Sizes options={ProductSizes} />
			</select>
		</div>
		{/* Buttons */}
		<Button 
		BtnRef={BtnRef}
		title={"AJOUTER AU PANIER"} 
		color={"rgb(243 244 246)"} 
		disabled={false} 
		width={"100%"} 
		height={"55px"} 
		icon={undefined} 
		type={"button"}
		link={undefined}
		borderRadius={"4px"}
		customClass={"ring-2 ring-zinc-900 shadow-btnShadow hover:shadow-xl"}
		handleClick={handleClick}
		ariaLabel={"Ajouter ce produit à votre panier"}
		/>
		<Button
		BtnRef={undefined}
		title={"ACHETER MAINTENANT"} 
		color={"linear-gradient(to bottom, #000428, #004e92)"} 
		disabled={false} 
		width={"100%"}
		height={"55px"} 
		icon={undefined} 
		type={"submit"}
		link={undefined}
		borderRadius={"4px"}
		customClass={"ring-2 ring-zinc-900 shadow-btnShadow text-white hover:shadow-xl"}
		handleClick={handleClick}
		ariaLabel={"Ajouter ce produit à votre panier et commander"}
		/>
	  </form>
	  {modalIsOpen && <CartModal onClose={() => setModalIsOpen(false)} />}
	</>
  )
  
}

export default Form