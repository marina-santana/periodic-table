import React, { useContext } from 'react'
import { DarkModeContext } from '../context/darkModeContext';
import Switch from "../styles/switch";

const ToggleSwitch: React.FC = () => {
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

export default ToggleSwitch;