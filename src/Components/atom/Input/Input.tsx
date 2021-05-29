import React from 'react';
import styled from '@emotion/styled';

interface InputProps {
	placeholder?: string;
	type?: string;
	value: any;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = props => {

	const { placeholder, type, value, onChange } = props;

	return (
		<INP
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
};

const INP = styled.input`
	font-size: 15px;
	padding: 8px;
	width: 100%;
	border-radius: 5px;
`

export default Input;