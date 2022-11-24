import React from "react";
import LikeIcon from "../LikeIcon/LikeIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Form from "../Form/Form";
import Dropdown from "../Dropdown/Dropdown";
import PaiementOptions from "../PaiementOptions/PaiementOptions";
import Reviews from "../Review/Review";


// Product details data
const ProductDetails: { title: string; content: string | {contentTitle: string, description: string }[] }[] = [
	{
		title: "Description",
		content:
			" Lorem ipsum dolor, sit amet consectetur adipisicing elit. At molestiae ea obcaecati fuga nihil, nulla voluptates. Fuga nam magnam dolor! Nisi itaque voluptates maxime id.",
	},
	{
		title: "Livraison",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nobis ea id ad numquam nostrum vel, qui omnis ab nihil ex dolore aspernatur? Enim, ipsam!",
	},
	{
		title: "Matériaux",
		content: [{contentTitle : "Composition", description:"100% coton"}, {contentTitle: "Doublure", description: "100% polyester"}, {contentTitle:'Épaisseur de la doublure', description: " Non doublé"}, {contentTitle: "Conseils d'entretien", description: "Ne pas mettre au sèche-linge, nettoyage chimique possible, ne pas laver"}]
	},
];

const InfosContainer = () => {
	return (
		<>
			<div className='mt-5 
			px-3 
			w-full 
			
			md:flex 
			md:flex-col
			md:w-[45%]
			md:pt-4
			md:px-6

			lg:w-[40%]
			lg:pt-6
			lg:px-10
			'>
				{/* Index Page */}
				<span className='
				text-xs 
				
				md:text-sm'>
					Acceuil / Blousons / Blouson Umani
				</span>
				<div className='flex items-center justify-between'>
					{/* Product title */}
					<h2 className='
					text-xl 
					font-semibold 
					mt-2
					
					md:text-2xl
					md:mt-4
					
					lg:text-3xl
					lg:mt-6
					'>
						Blouson Umani
					</h2>
					{/* Like Icon */}
					<LikeIcon />
				</div>
				{/* Small line breaker */}
				<div className='
				w-16 
				h-[1px] 
				bg-black 
				mt-2
				
				md:w-[200px]
				md:mt-4

				lg:w-[300px]
				lg:mt-6
				'></div>
				{/* Price */}
				<div className='
				flex 
				items-center 
				mt-2
				 
				md:mt-4
				md:flex-col
				md:items-start 
				
				lg:mt-6
				'>
					<p className='text-3xl py-6'>
						149<span>,00</span>€
					</p>
					{/* Paiement options */}
					<PaiementOptions/>
				</div>
				{/* Product ranking */}
				<div className='my-4'>
					<FontAwesomeIcon
						icon={faStar}
						className='text-yellow-400 border-solid text-lg mr-0.5 md:text-xl lg:text-2xl'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='text-yellow-400 border-solid text-lg mr-0.5 md:text-xl lg:text-2xl'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='text-yellow-400 border-solid text-lg mr-0.5 md:text-xl lg:text-2xl'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='text-yellow-400 border-solid text-lg mr-0.5 md:text-xl lg:text-2xl'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='text-stone-500 border-solid text-lg mr-0.5 md:text-xl lg:text-2xl'
					/>
					<span className='italic'>18 avis</span>
				</div>
				{/* Large line breaker */}
				<div className='
				w-full 
				h-[1px] 
				bg-slate-200 
				mt-4
				
				md:mt-8

				lg:mt-12
				'>
				</div>
				{/* Form */}
				<Form />
				<section className="mt-10 min-h-40 px-2 self-auto flex flex-col items-center justify-center">
					<>
						{ProductDetails.map((product) => {
							return (
								<Dropdown
									title={product.title}
									content={product.content}
									icons={"chevrons"}
									color={"black"}
								/>
							);
						})}
					</>
				</section>
				{/* Reviews */}
				<Reviews/>
			</div>
		</>
	);
};

export default InfosContainer;
