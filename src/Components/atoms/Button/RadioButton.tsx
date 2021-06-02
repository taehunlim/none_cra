import React from 'react';
import styled from '@emotion/styled';

interface RadioButtonProps {
	id?: string;
	name?: string;
	value?: any;
	checked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = props => {

	const {id, name, value, checked} = props;

	return (
		<Radio>
			<RadioCheck
				id={id}
				type="radio"
				name={name}
				value={value}
				checked={checked}
			/>
		</Radio>
	);
};



const Radio = styled.div`
	display: inline-flex;
	border: 1px solid;
	border-radius: 100%;
	margin: 5px;
`;

const RadioCheck = styled.input`
	margin: 3px;
	appearance: none;

	width: 0.5rem;
	height: 0.5rem;

	border-radius: 100%;
	// border: 1px solid black;

	&:checked {
		background-color: red;
		color: black;
	}
`;

export default RadioButton;