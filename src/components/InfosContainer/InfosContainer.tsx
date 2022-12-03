import LikeIcon from "../LikeIcon/LikeIcon";
import Form from "../Form/Form";
import Dropdown from "../Dropdown/Dropdown";
import PaiementOptions from "../PaiementOptions/PaiementOptions";
import Reviews from "../Review/Review";
import SuggestedProducts from "../SuggestedProducts/SuggestedProducts";
import LineBreaker from "./LineBreaker";
import { ProductDetails } from "../../data/data";
import { reviews } from "../../data/data";
import Star from "../Star/Star";
import Discount from "../../Discount/Discount";
import Button from "../Button/Button";
import PaiementFacilities from "../PaiementFacilities/PaiementFacilities";

const InfosContainer = () => {

	// return rating
	const renderStar = (i:number) => {
		const reduceRating : number = reviews.reduce((a,b) => a+b)/reviews.length;
		const roundRating :number = Number(reduceRating.toFixed());
		if (
			(i === 1 && roundRating < 1) ||
			(i === 2 && roundRating < 2) ||
			(i === 3 && roundRating < 3) ||
			(i === 4 && roundRating < 4) ||
			(i === 5 && roundRating < 5)
		) {
			return <Star color={"rgb(75 85 99)"} />;
		} else {
			return <Star color={"rgb(30 64 175)"} />;
		}
	};

	return (
		<>
			<Discount />
			<div className='mt-5 px-3 w-full md:flex md:self-center md:flex-col md:pt-4 md:px-6 lg:w-[40%] lg:pt-6 lg:px-10'>
				{/* Index Page */}
				<div
					className='text-xs md:text-sm'
				>
					<a href="#" className="hover:underline">Acceuil</a> / <a href="#" className="hover:underline">Blousons</a> / <span>Blouson Umani</span>
				</div>
				<div className='flex items-center justify-between'>
					{/* Product title */}
					<h2 className='text-xl font-semibold mt-2 md:text-2xl md:mt-4 lg:text-3xl lg:mt-6'>
						Blouson Umani
					</h2>
					{/* Like Icon */}
					<LikeIcon />
				</div>
				{/* Small line breaker */}
				<div className='w-16 h-[1px] bg-gray-900 mt-2 md:w-[200px] md:mt-4 lg:w-[300px] lg:mt-6'></div>
				{/* Price */}
				<div className='flex items-center mt-2 md:mt-4 md:flex-col md:items-start lg:mt-6'>
					<div className="flex justify-center items-start text-stone-700">
						<span className='text-3xl py-6 lg:text-4xl xl:text-5xl'>149</span>
						<span className="mt-1 text-sm self-start pr-2 py-6 lg:text-base">,00</span>
						<span className='text-3xl py-6 lg:text-4xl xl:text-5xl'>€</span>
					</div>
					{/* Paiement options */}
					<PaiementOptions />
				</div>
				{/* Product ranking */}
				<div className='my-4'>
					{renderStar(1)}
					{renderStar(2)}
					{renderStar(3)}
					{renderStar(4)}
					{renderStar(5)}
					<span className='italic'>{reviews.length} avis</span>
				</div>
				<LineBreaker/>
				{/* Form */}
				<Form />
				{/* Paiement Facilities */}
				<PaiementFacilities/>
				
			</div>
		</>
	);
};

export default InfosContainer;
