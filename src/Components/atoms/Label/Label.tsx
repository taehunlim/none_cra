import React from 'react';
import styled from '@emotion/styled';

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (props) => {

    return (
        <LABEL
            {...props}
        >
            {props.children}
        </LABEL>
    );
};

const LABEL = styled.label`
  font-size: 15px;
  color: black;
  margin: 0 0 5px 5px;
`;

export default Label;