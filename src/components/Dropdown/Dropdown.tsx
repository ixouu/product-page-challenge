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
			className='px-5 w-1/2 min-w-[300px]'
			style={{ color: color && `${color}` }}
		>
			<div className='drop-head flex h-10 border-b border-b-slate-400 justify-between items-center max-w-md'>
				<h4 className='pl-1 text-lg'>{title}</h4>
				<button
					type='button'
					onClick={() => handleClick()}
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
			{isDown && (
				<div
					className={
						isDown ? "animate-dropDownActive origin-top-center" : ""
					}
				>
					{typeof content === "string" ? (
						<span className='max-w-md'>{content}</span>
					) : (
						content.map((opt, index) => {
							return (
								<ul
									key={index}
									className='flex flex-col wmax-full'
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
				</div>
			)}
		</div>
	);
};

export default Dropdown;
