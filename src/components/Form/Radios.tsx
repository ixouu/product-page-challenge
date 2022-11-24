import React from "react";

interface RadioProps {
	colorTitle: string;
	colorCode: string;
}

const Radios = ({ colorTitle, colorCode }: RadioProps) => {
	return (
		<div className='mx-3 w-full'>
			<input
				type='radio'
				id={colorTitle}
				name='color-choice'
				value={colorTitle}
				className='hidden input-colorChoice'
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
