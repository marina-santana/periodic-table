import { ReactChildren, ReactNode, useState } from "react";
import { createContext } from "react";

interface DarkModeProviderProps {
  children: ReactChildren | ReactNode;
}

export const DarkModeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {}
});

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);
 
  function toggleDarkMode() {
    setDarkMode(darkMode => !darkMode);
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

