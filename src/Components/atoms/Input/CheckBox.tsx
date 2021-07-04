import React from 'react';
import styled from '@emotion/styled';

interface CheckBoxProps {
	id?: string;
	name?: string;
	value?: any;
	checked?: boolean;
	defaultChecked?: boolean;
	onClick?: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, name, value, checked, onClick }) => {
	
	return (
		<Box>
			<Check
				id={id}
				type="checkbox"
				name={name}
				value={value}
				checked={checked}
				onClick={onClick}
			/>
		</Box>
	);
};

const Box = styled.div`
	width: 16px;
	height: 16px;
	display: flex;
	border: 1px solid;
	border-radius: 3px;
	margin: 5px;
`;

const Check = styled.input`
	margin: 0px;
	appearance: none;

	width: 100%;
	height: 100%;

	text-align: center;

	&:checked {
		background-color: cadetblue;
		::after {
			font-family: "Font Awesome 5 Free";
			content: "\f00c";
			font-weight: 700;
			color: beige;
		}
	}
`;

export default CheckBox;