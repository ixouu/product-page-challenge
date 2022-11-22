import Button from "../Button/Button";
import Options from './Options'
const Form = () => {

	// Qty options 
	const qty:number[] = [1,2,3,4,5,6,7,8,9,10]

  return (
    <form className="mt-4 px-10">
		{/* Qty select */}
		<select className="border rounded max-w-[80px] min-h-14 text-lg px-3 py-3">
        <Options options={qty} />
		</select>
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
		customClass={"border-black border-2"}
		/>
		<Button 
		title={"ACHETER MAINTENANT"} 
		color={"#000000"} 
		disabled={false} 
		width={"100%"} 
		height={"55px"} 
		icon={undefined} 
		fontColor={"#FFFFFF"}
		type={"submit"}
		link={undefined}
		border={"2px solid black"}
		borderRadius={"4px"}
		customClass={"after:content-[''] after:absolute after:w-full after:h-full after:rounded after:left-[5px] after:top-1.5   after:border-2 after:border-black"}
		/>
	  </form>
  )
}

export default Form