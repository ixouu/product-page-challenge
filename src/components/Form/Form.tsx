import Button from "../Button/Button";
import Options from './Options'
import { colors } from "../../data/data";
import Radios from "./Radios";


const Form = () => {

	// Qty options 
	const qty:number[] = [1,2,3,4,5,6,7,8,9,10]

  return (
    <form className="
	mt-4 
	px-10 
	flex 
	w-full 
	flex-col

	items-center
	">
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
		<p className="text-ml">Choisissez la couleur :</p>
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
		<p className="text-ml">Sélectionnez une quantité:</p>
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
		">
        <Options options={qty} />
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
		type={"submit"}
		link={undefined}
		border={undefined}
		borderRadius={"4px"}
		customClass={"border-black border-2 shadow-btnShadow hover:shadow-xl"}
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
		/>
	  </form>
  )
}

export default Form