import React from 'react';
import styled from '@emotion/styled';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {

    return (
        <BTN
            {...props}
        >
            {props.children}
        </BTN>
    );
};

export const BTN = styled.button`
  font-size: 16px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px 20px;
  flex-direction: column;
  align-items: center;
`

export default Button;