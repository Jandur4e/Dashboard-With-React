import React, { useContext } from 'react'
import "../../css/Dashboard.css"
import profile from "../../images/profile.png";
import logo from "../../images/logo.jpg";
import { UserToLogIn } from './LoginContext'


const HeaderLoginImage = () => {
    const { loginThisUser, setLoginThisUser } = useContext(UserToLogIn)

    return (
        <div>
            <img className='login-image' src={loginThisUser == "" ? profile : logo} alt='jas' />
        </div >
    )
}



export default HeaderLoginImage;