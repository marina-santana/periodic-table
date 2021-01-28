import React, { useContext } from 'react';
import Container from '../styles/header';
import ToggleSwitch from '../component/Switch';
import { DarkModeContext } from '../context/darkModeContext';

function Header() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <Container darkMode={darkMode}>
            <h1>Periodic Table</h1>
            <div>
                <span>☀️</span>
                <ToggleSwitch />
                <span>🌙</span>
            </div>
        </Container>
    );
};

export default Header;