import React from 'react'
import { ThemeContext } from './themeChange';
import { useContext } from 'react';

const Background = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme === "dark" ? "background dark-background" : "background light-background"}></div>
    )
}

export default Background;