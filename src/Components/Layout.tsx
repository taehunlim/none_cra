import React from 'react';
import styled from '@emotion/styled';

import { useDarkMode } from './CustomHook/useDarkMode';
import DarkModeToggle from './DarkModeToggle';

const Layout: React.FC  = ({ children }) => {
    
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <>
            <DarkModeToggle
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            
            <Container>
                {children}
            </Container>
        </>
    );
};

const Container = styled.div`
    ${ props => props.theme.device.desktop } {
        background-color: blue;
    }
    ${ props => props.theme.device.laptop } {
        background-color: green;
    }
    ${ props => props.theme.device.tablet } {
        background-color: yellow;
    }
    ${ props => props.theme.device.mobile } {
        background-color: red;
    }
`;

export default Layout ;