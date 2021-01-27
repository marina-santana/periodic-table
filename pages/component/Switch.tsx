import React, { useContext, useState } from 'react'
import { DarkModeContext } from '../context/DarkModeContext';
import { Switch } from "../styles/switch";

export const ToggleSwitch: React.FC = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);

  return(
    <Switch>
      <label className={"switch round"}>
          <input type="checkbox" onClick={toggleDarkMode} />
          <span className={"slider round"}/>
      </label>
    </Switch>
  )
};