import React from 'react'
import Title from '../Title/Title';
import Dropdown from '../Dropdown/Dropdown';

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
    <footer className='bg-black'>
      <div className='flex flex-col pt-4'>
        <Title position='relative' color="white" fontSize='1rem'/>
        <h6 className='text-white italic text-sm font-light'>Combinez style et confort au quotidien</h6>
      </div>
      <section className="p-2 min-h-40">
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
    </footer>
  )
}

export default Footer