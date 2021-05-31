import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	children?: React.ReactNode;
	type?: "reset" | "submit";
	onClick?: () => void;
};

const Button: React.FC<ButtonProps> = props => {

	const {children, type, onClick} = props;

	return (
		<BTN
			type={type}
			onClick={onClick}
		>
			{children}
		</BTN>
	);
};

const BTN = styled.button`
	font-size: 16px;
	width: 100%;
	height: auto;
	background-color: #fff;
	border-radius: 5px;
	padding: 15px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default Button;