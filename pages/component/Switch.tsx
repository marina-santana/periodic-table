import React from 'react'
import { Switch } from "../styles/switch";

export const ToggleSwitch: React.FC = () =>(
  <Switch>
    <label className={"switch round"}>
        <input type="checkbox" />
        <span className={"slider round"}/>
    </label>
   </Switch>
);