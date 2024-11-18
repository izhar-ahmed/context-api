import { useContext, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)
export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light")

    // Toggle function to change the theme
    const toggleTheme = () => {
        setTheme(preVal => (preVal === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
