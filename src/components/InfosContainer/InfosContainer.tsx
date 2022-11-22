import React from "react";
import LikeIcon from "../LikeIcon/LikeIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Form from "../Form/Form";
import Dropdown from "../Dropdown/Dropdown";

// paiement Options
const paiementOpt: string[] = ["x2", "x4", "x6", "x10"];

// Product details data
const ProductDetails: { title: string; content: string }[] = [
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
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nobis ea id ad numquam nostrum vel, qui omnis ab nihil ex dolore aspernatur? Enim, ipsam!",
	},
];

const InfosContainer = () => {
	return (
		<>
			<div className='mt-5 px-3 w-full'>
				{/* Index Page */}
				<span className='text-xs'>
					{" "}
					Acceuil / Blousons / Blouson Umani
				</span>
				<div className='flex items-center justify-between'>
					{/* Product title */}
					<h2 className='text-xl font-semibold mt-2'>
						Blouson Umani
					</h2>
					{/* Like Icon */}
					<LikeIcon />
				</div>
				{/* Small line breaker */}
				<div className='w-16 h-[1px] bg-black mt-2'></div>
				{/* Price */}
				<div className='flex items-center mt-2'>
					<p className='text-3xl py-6'>
						149<span>,00</span>€
					</p>
					{/* Paiement options */}
					<div className=' flex flex-col ml-3'>
						<div className='flex'>
							{paiementOpt.map((opt) => {
								return (
									<>
										<div className='flex flex-row'>
											<div
												className='
                    bg-black 
                    rounded-full 
                    w-8 
                    h-8
					mr-0.5 
                    flex 
                    items-center 
                    justify-center'
											>
												<span className='text-white text-sm'>
													{opt}
												</span>
											</div>
										</div>
									</>
								);
							})}
						</div>
						<span className='text-xs'>
							{" "}
							Payez en plusieurs fois (en savoir plus)
						</span>
					</div>
				</div>
				{/* Product ranking */}
				<div className='my-4'>
					<FontAwesomeIcon
						icon={faStar}
						className='text-yellow-400 border-solid text-lg mr-0.5'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='text-yellow-400 border-solid text-lg mr-0.5'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='text-yellow-400 border-solid text-lg mr-0.5'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='text-yellow-400 border-solid text-lg mr-0.5'
					/>
					<FontAwesomeIcon
						icon={faStar}
						className='text-stone-500 border-solid text-lg mr-0.5'
					/>
					<span className='italic'>18 avis</span>
				</div>
				{/* Large line breaker */}
				<div className='w-full h-[1px] bg-slate-200 mt-4'></div>
				{/* Colors options */}
				<div className='flex justify-between  items-center mt-4'>
					<span className='inline-block'>Coloris</span>
					<div className='flex flex-row w-1/4 justify-evenly'>
						<div className='w-[25px] h-[25px] border-solid bg-stone-400 border-2 rounded-full'></div>
						<div className='w-[25px] h-[25px] border-solid bg-amber-100 border-2 rounded-full'></div>
						<div className='w-[25px] h-[25px] border-solid bg-orange-900 border-2 rounded-full'></div>
					</div>
				</div>
			</div>
			{/* Form */}
			<Form />
			<section className="m-20 min-h-40">
				<>
					{ProductDetails.map((product, index) => {
						return (
							<Dropdown
								key={index}
								title={product.title}
								content={product.content}
							/>
						);
					})}
				</>
			</section>
		</>
	);
};

export default InfosContainer;
