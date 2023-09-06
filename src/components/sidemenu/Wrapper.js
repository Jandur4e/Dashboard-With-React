import React, { useContext } from 'react'
import { ThemeContext } from './themeChange';

const Wrapper = ({ children }) => {
    const theme = useContext(ThemeContext);
    const IDToBe = theme.theme;


    return (
        <div id={IDToBe}>{children}</div>
    )
}

export default Wrapper