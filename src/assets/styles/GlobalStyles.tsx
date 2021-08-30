import React from 'react';
import { Global, css } from '@emotion/react';

const styles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    position: relative;
    background-color: white;
    transition: background-color 0.3s ease;

    &.dark-mode {
      background-color: #232323;
      color: #dfdfdf;
    }
  }

  p:last-child {
    margin-bottom: 0;
  }

  a,
  button {
    display: inline-block;

    cursor: pointer;
  }

  *:focus {
    outline: none;
  }

  a:focus {
    outline: none;
  }

  ul {
    margin: 0;
    padding: 0;

    list-style: outside none none;
  }
`;

const GlobalStyles: React.FC = () => {

    return (
        <Global styles={styles}/>
    );
};

export default GlobalStyles;