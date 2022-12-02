import LineBreaker from '../InfosContainer/LineBreaker';
import Reviews from '../Review/Review';
import { ProductDetails } from '../../data/data';
import Dropdown from '../Dropdown/Dropdown';
import SuggestedProducts from '../SuggestedProducts/SuggestedProducts';
import Button from '../Button/Button';

const BottomContainer = () => {

  	// handleClick of category button
	const handleClick = () => {
		return
	}

  return (
    <>
    <LineBreaker/>
    <div className='w-full flex flex-col xl:flex-row  justify-center'>
				<section className='mt-10 min-h-40 px-2 w-full flex flex-col items-center justify-start'>
					<>
						{ProductDetails.map((product) => {
							return (
								<Dropdown
									title={product.title}
									content={product.content}
									icons={"chevrons"}
									color={"black"}
                  customClass={'px-10 w-full flex flex-col items-center'}
								/>
							);
						})}
					</>
				</section>
				{/* Reviews */}
				<Reviews />
      </div>
				{/* SuggestedProduct */}
				<SuggestedProducts />

				{/* Button to return at the previous category */}
				<div className="w-full flex justify-center my-4">
					<Button 
						BtnRef={undefined}
						title={"Voir tous les blousons"} 
						color={"#FFFFFFF"} 
						disabled={false} 
						width={"90%"} 
						height={"55px"} 
						icon={undefined} 
						type={"button"}
						link={undefined}
						borderRadius={"4px"}
						customClass={'uppercase ring-2 ring-gray-900 shadow-btnShadow hover:shadow-xl hover:bg-gray-900 hover:text-slate-50 hover:font-cinzel hover:-rotate-3'}
						handleClick={handleClick}
						ariaLabel={"Retour au menu precedent"}
					/>
				</div>
    </>
  )
}

export default BottomContainer