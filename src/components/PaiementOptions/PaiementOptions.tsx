import React, {useState} from 'react'

// Default price
const ProductPrice: number = 149;

// paiement Options
const paiementOpt: number[] = [2, 4, 6, 10];

const PaiementOptions = () => {

const [optionSelected, setOptionSelected] = useState(paiementOpt[1])

// toggle active option
const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    // transform data-option into number
     const buttonDataOption: number = Number(e.currentTarget.getAttribute('data-option'));
     setOptionSelected(buttonDataOption);
 }

 // return the total price divided by the paiement option
const dividePrice = () => {
    const priceToPayEachMonth = (ProductPrice /optionSelected).toFixed(2)
    return priceToPayEachMonth
}

  return (
    <div className='flex flex-col ml-3 md:ml-0'>
        <div className='flex '>
            {paiementOpt.map((opt, index) => {
                return (
                        <div className='flex flex-row' key={index}> 
                            <button 
                            className={opt === optionSelected ? 'bg-gradient-to-b from-zinc-500 to-zinc-400 rounded-full w-8 h-8 mr-0.5 flex items-center justify-center xl:w-9 xl:h-9': 'bg-gradient-to-b from-neutral-900 to-neutral-700 rounded-full w-8 h-8 mr-0.5 xl:w-9 xl:h-9  flex items-center justify-center'}
                            data-option={opt}
                            aria-label="Sélectionne une méthode de paiement"
                            onClick={(e) => handleClick(e)}
                            >
                                <span className='text-white text-sm'>x{opt}</span>
                            </button>
                        </div>
                )
            })}
            <span className='font-bold italic text-xs pl-3 leading-8 md:text-sm md:leading-9'>{optionSelected}x {dividePrice()} € sans frais.</span>
        </div>
        <span className='text-xs md:text-sm'>Payez en plusieurs fois !</span>
    </div>
  )
}

export default PaiementOptions
