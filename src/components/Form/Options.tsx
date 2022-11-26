interface OptionsProp {
	options : number[]
}

const Options = ({ options }:OptionsProp) => {
	return (
		<>
			{options.map((option, index) => {
				return (
					<option
						key={index}
						value={option}
					>
						{option}
					</option>
				);
			})}
		</>
	);
};

export default Options;
