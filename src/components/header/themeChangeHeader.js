import React, { useContext } from 'react'
import { ThemeContext } from '../sidemenu/themeChange';
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ThemeChangeHeader = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <Link onClick={() => { theme === "dark" ? setTheme("light") : setTheme("dark") }}>{theme === "dark" ? <FaMoon className='theme-icon light-color' /> : <BsFillSunFill className='theme-icon yellow' />}</Link>
        </div>
    )
}

export default ThemeChangeHeader;