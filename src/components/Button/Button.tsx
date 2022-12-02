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
	borderRadius: string | undefined;
	customClass: string | undefined;
	ariaLabel: string;
	BtnRef?: React.LegacyRef<HTMLButtonElement> | undefined;
	handleClick : (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

const Button = ({
		title,
		color,
		disabled,
		width,
		height,
		type,
		borderRadius,
		customClass,
		handleClick,
		BtnRef,
		ariaLabel,
	}: ButtonProps) => {



		return <button
				className={customClass && `${customClass}`}
				disabled={disabled}
				type={type}
				onClick={(e) => handleClick(e)}
				ref={BtnRef}
				aria-label={ariaLabel}
				style={{
					opacity:"1",
					margin:".5rem 0",
					position: "relative",
					background: `${color}`,
					width: `${width}`,
					height: `${height}`,
					borderRadius: `${borderRadius}`,
					maxWidth : '400px',
					transition: "all .2s ease-in",
				}}>
				{title}
			</button>
			
	};

export default Button;
