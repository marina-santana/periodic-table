import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {},
});

export default props => {
  const [darkMode, setDarkMode] = useState(false);
 
  function toggleDarkMode() {
    setDarkMode(darkMode => !darkMode);
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
    </DarkModeContext.Provider>
  );
};