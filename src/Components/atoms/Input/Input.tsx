import React from 'react';
import styled from '@emotion/styled';

interface InputProps {
	id?: string;
	placeholder?: string;
	type?: string;
	value?: any;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = props => {

	const { id, placeholder, type, value, onChange } = props;

	return (
		<INP
			id={id}
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

	&[type=search] {
		::-ms-clear,
		::-ms-reveal {
			display: none;
			width : 0; 
			height: 0;
		}

		::-webkit-search-decoration,
		::-webkit-search-cancel-button,
		::-webkit-search-results-button,
		::-webkit-search-results-decoration{
			display: none;
		}
		::after {
			content: "sdsd";
		}
	}

`

export default Input;