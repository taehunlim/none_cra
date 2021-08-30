import React from 'react';
import styled from '@emotion/styled';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <INPUT
            {...props}
        />
    );
};

export const INPUT = styled.input`
  font-size: 15px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
`
export default Input;