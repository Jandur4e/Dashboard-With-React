import React, { useContext, useState } from 'react'
import HeaderPostCounter from '../posts/HeaderPostCounter';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLoginImage from '../login/HeaderLoginImage';
import { UserToLogIn } from '../login/LoginContext';
import Login from '../login/login';
import "../../css/Dashboard.css"
import { LikedPostContext } from '../posts/LikedContext';
import ThemeChangeHeader from './themeChangeHeader';


const Header = ({ length }) => {
    const { likedPosts, setLikedPosts } = useContext(LikedPostContext);
    const { loginThisUser, setLoginThisUser } = useContext(UserToLogIn);
    const navigate = useNavigate();
    const toggleButton = () => {
        setLoginThisUser([]);
        navigate(`/login`)
        localStorage.setItem("token", JSON.stringify(""));
        setLikedPosts([]);
    };


    return (
        <div className='header-icons'><ThemeChangeHeader /><HeaderPostCounter /><HeaderLoginImage />
            <button className={loginThisUser.token ? "showButton" : "hideButton"} onClick={() => toggleButton()}>LogOut</button>
        </div >
    )
}

export default Header;