import React from "react";

interface ButtonProps {
	title: string;
	type?: "button" | "submit" | "reset" | undefined;
	disabled: boolean;
	color: string;
	link: string | undefined;
	icon: string | undefined;
	width: string;
	height: string;
	fontColor: string;
	border: string | undefined;
	borderRadius: string | undefined;
	customClass: string | undefined;
	handleClick : (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

const Button = ({
		title,
		color,
		disabled,
		width,
		height,
		icon,
		fontColor,
		type,
		border,
		borderRadius,
		customClass,
		handleClick,
	}: ButtonProps) => {

	const addIcon = () => {
		if (icon !== undefined) {
			const iconElement = React.createElement("i", {
				className: `${icon}`,
			});
			return iconElement;
		}
	};


		return <button
				className={customClass && `${customClass} filterz`}
				disabled={disabled}
				type={type}
				onClick={(e) => handleClick(e)}
				style={{
					opacity:"1",
					margin:".5rem 0",
					position: "relative",
					background: `${color}`,
					width: `${width}`,
					height: `${height}`,
					color: `${fontColor}`,
					border: `${border}`,
					borderRadius: `${borderRadius}`,
					maxWidth : '400px',
					transition: "all .2s ease-in"
				}}>
				{title}
				{addIcon()}
			</button>
			
	};

export default Button;
