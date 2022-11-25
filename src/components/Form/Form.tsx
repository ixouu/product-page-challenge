import { useRef } from "react";
import Button from "../Button/Button";
import Options from './Options'
import { colors } from "../../data/data";
import Radios from "./Radios";
import { ProductQty } from "../../data/data";
import { useCartContext }  from '../../context/CartContext';
import { CartContextType } from "../../@types/cart";

const Form = () => {

	const selectRef = useRef<HTMLSelectElement>(null)

	const {UpdateCart} = useCartContext() as CartContextType;

	// handle Click Button
	// Update product in cart state with the selected quantity
	const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		switch (e.currentTarget.type) {
			case 'submit':
				console.log('ok')
				return
			case 'button':
				UpdateCart(Number(selectRef.current!.value))
				break;
			default:
				break;
		}
	}

  return (
    <form className="
	mt-4 
	px-10 
	flex 
	w-full 
	flex-col

	items-center
	"
	>
		{/* Colors */}
		<div className="
		flex 
		justify-between
		items-center
		my-4
		w-full
		
		md:flex-col
		md:max-w-[300px]

		lg:flex-row
		lg:max-w-none
		">
		<p className="text-ml xl:text-xl">Choisissez la couleur :</p>
			<div className="flex items-center ">
				{colors.map((color, index) => {
					return <Radios key={index}  colorTitle={color.colorTitle} colorCode={color.colorCode} defaultValue={color.defaultValue}/>
				})}
			</div>
		</div>
		{/* Qty select */}
		<div className="
		flex 
		justify-between 
		items-center
		my-4
		w-full
		
		md:flex-col
		md:max-w-[300px]

		lg:flex-row
		lg:max-w-none
		">
		<p className="text-ml xl:text-xl">Sélectionnez une quantité:</p>
		<select className="
		border-2
		border-black
		rounded 
		max-w-[80px] 
		min-h-14 
		text-lg 
		p-3
		bg-white 
		shadow-btnShadow
		hover:shadow-xl
		ease-in 
		duration-200
		
		md:w-full
		md:max-w-[300px]
		md:text-center

		lg:w-[400px]
		lg:ml-3
		"
		ref={selectRef}
		>
        <Options options={ProductQty} />
		</select>
		</div>
		{/* Buttons */}
		<Button 
		title={"AJOUTER AU PANIER"} 
		color={"#FFFFFF"} 
		disabled={false} 
		width={"100%"} 
		height={"55px"} 
		icon={undefined} 
		fontColor={"#000000"}
		type={"button"}
		link={undefined}
		border={undefined}
		borderRadius={"4px"}
		customClass={"border-black border-2 shadow-btnShadow hover:shadow-xl"}
		handleClick={handleClick}
		/>
		<Button 
		title={"ACHETER MAINTENANT"} 
		color={"linear-gradient(to bottom, #000428, #004e92)"} 
		disabled={false} 
		width={"100%"} 
		height={"55px"} 
		icon={undefined} 
		fontColor={"#FFFFFF"}
		type={"submit"}
		link={undefined}
		border={"2px solid black"}
		borderRadius={"4px"}
		customClass={"border-black border-2  shadow-btnShadow hover:shadow-xl"}
		handleClick={handleClick}
		/>
	  </form>
  )
}

export default Form