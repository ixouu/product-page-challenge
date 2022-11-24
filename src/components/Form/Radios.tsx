import React from "react";

interface RadioProps {
	colorTitle: string;
	colorCode: string;
  defaultValue: boolean
}

const Radios = ({ colorTitle, colorCode, defaultValue }: RadioProps) => {
	return (
		<div className='mx-3 w-full flex items-center md:mx-1 lg:mx-3'>
			<input
				type='radio'
				id={colorTitle}
				name='color-choice'
				value={colorTitle}
				className='hidden input-colorChoice'
        defaultChecked={defaultValue}
			/>
			<label
				htmlFor={colorTitle}
				// className='w-[25px] h-[25px] border-solid border-2 rounded-full'
        style={{ background: `${colorCode}` }}
			>
			</label>
		</div>
	);
};

export default Radios;
