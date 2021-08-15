import React from 'react';

/** @jsx jsx */
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

        background-color: white;
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
        <Global styles={styles} />
    );
};

export default GlobalStyles;