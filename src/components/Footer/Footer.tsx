import React from 'react'
import Title from '../Title/Title';
import Dropdown from '../Dropdown/Dropdown';
import SocialMedias from '../SocialMedias/SocialMedias';

// Reassurance Data
const reassuranceData : { title: string; content: string }[] = [
  {
    title: "Service Client",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto rem doloremque animi nulla itaque assumenda."
  },
  {
    title: "Nos promesses",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto rem doloremque animi nulla itaque assumenda."
  },
  {
    title: "Nous contacter",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto rem doloremque animi nulla itaque assumenda."
  },
]

const Footer = () => {
  return (
    <footer className='
    bg-gradient-to-tr
    from-zinc-900
    to-zinc-700
    text-white 
    p-3
    min-h-[450px]
    flex
    flex-col
    h-full
    justify-around
    
    md:grid
    md:grid-cols-3
    md:justify-items-center
    md:py-6
    md:min-h-[300px]

    lg:py-8
    '>
      <div className='flex flex-col pt-4'>
        <h6 className='
        font-cinzel 
        text-2xl
        bg-clip-text
        text-transparent
        bg-gradient-to-r
        from-sky-600
        to-sky-200

        xl:text-4xl
        '>YOUVERSACE</h6>
        <span className=' italic font-light'>Combinez style et confort au quotidien</span>
      </div>
      <section className="pt-2 min-h-40
       md:w-full xl:pt-4 xl:text-xl">
				<>
					{reassuranceData.map((service, index) => {
						return (
							<Dropdown
								key={index}
								title={service.title}
								content={service.content}
                color={"white"}
                icons={"operande"}
							/>
						);
					})}
				</>
			</section>
      <SocialMedias/>
    </footer>
  )
}

export default Footer