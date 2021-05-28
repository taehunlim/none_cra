import React, { Children } from 'react';
import styled from '@emotion/styled';

//atom;
import Label from '../atom/Label/Label';
import Input from '../atom/Input/Input';

interface FormItemProps {
	children?: React.ReactNode;
	placeholder: string;
	type: string
	value: any
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Formitem: React.FC<FormItemProps> = (props) => {

	const {children, placeholder, type, value, onChange} = props;

	return (
		<LabelInput>
			<Label>
				{children}
			</Label>
			<Input
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
			/>
		</LabelInput>
	);
};

const LabelInput = styled.div`
	width:100%;
	margin: 15px 0;
`;

export default Formitem;