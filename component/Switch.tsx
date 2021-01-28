import React, { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';
import Switch from '../styles/switch';

export default function ToggleSwitch() {
    const { toggleDarkMode } = useContext(DarkModeContext);

    return (
        <Switch>
            <label className={'switch round'}>
                <input type="checkbox" onClick={toggleDarkMode} />
                <span className={'slider round'} />
            </label>
        </Switch>
    );
};

