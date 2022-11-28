import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

interface DropdownProps {
	title: string;
	content: string | { contentTitle: string; description: string }[];
	color?: string;
	icons: string;
}

const Dropdown = ({ title, content, color, icons }: DropdownProps) => {
	// State who's defining if the dropdown is down or not
	const [isDown, setIsDown] = useState<boolean>(false);

	// toggle isDown state
	const handleClick = (): void => {
		isDown ? setIsDown(false) : setIsDown(true);
	};

	return (
		<div
			className='px-10 min-w-[300px] w-full flex flex-col items-center'
			style={{ color: color && `${color}` }}
		>
			<div className='drop-head flex h-10 border-b border-b-slate-400 justify-between items-center w-full xl:py-4 2xl:py-8'>
				<h4 className='pl-1 text-lg xl:text-xl'>{title}</h4>
				<button
					type='button'
					onClick={() => handleClick()}
					aria-label="Ouvre le menu"
				>
					{isDown ? (
						<FontAwesomeIcon
							icon={icons === "operande" ? faMinus : faChevronUp}
						/>
					) : (
						<FontAwesomeIcon
							icon={icons === "operande" ? faPlus : faChevronDown}
						/>
					)}
				</button>
			</div>
			{isDown && (<div className={isDown ? "animate-dropDownActive origin-top p-3 w-full" : ""}>
							{typeof content === "string" ? (
								<span className='max-w-md inline-block md:pt-2 xl:pt-4'>{content}</span>
							) : (
								content.map((opt, index) => {
									return (
										<ul
											key={index}
											className='flex flex-col max-w-md md:pt-2 xl:pt-4'
										>
											<li>
												<span className='font-bold'>
													{opt.contentTitle}: 
												</span>
												<span className='max-w-md pl-[4px]'>
													{opt.description}
												</span>
											</li>
										</ul>
									);
								})
							)}
						</div>)}
		</div>
	);
};

export default Dropdown;
