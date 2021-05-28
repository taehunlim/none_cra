import React from 'react';
import styled from '@emotion/styled';

interface LabelProps {
	children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = props => {
	
	const {children} = props

	return (
		<LABEL>
			{children}
		</LABEL>
	);
};

const LABEL = styled.div`
	font-size: 15px;
	color: black;
	margin: 0 0 5px 5px;
`;

export default Label;