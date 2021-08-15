import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

};

const Button: React.FC<ButtonProps> = ({style, children, type, onClick}) => {

	return (
		<BTN
			style={style}
			type={type}
			onClick={onClick}
		>
			{children}
		</BTN>
	);
};

const BTN = styled.button`
	font-size: 16px;
	height: auto;
	background-color: #fff;
	border-radius: 5px;
	padding: 15px 20px;
	flex-direction: column;
	align-items: center;
`

export default Button;