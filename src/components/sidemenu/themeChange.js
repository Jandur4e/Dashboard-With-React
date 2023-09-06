import { createContext, useState } from "react";
export const ThemeContext = createContext(null);


function ThemeChange({ children }) {
    const [theme, setTheme] = useState("dark");

    const valueSend = { theme, setTheme };


    return (
        <ThemeContext.Provider value={valueSend}>{children}</ThemeContext.Provider>
    )
}

export default ThemeChange;