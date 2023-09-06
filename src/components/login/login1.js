import React, { useContext, useEffect, useRef } from 'react'
import someUsers from './someUsers'
import { useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import ErrorPage from '../error/error';
import axios from 'axios';
import Users from '../users/users';
import { UserToLogIn } from './LoginContext';
import Header from '../header/header';
import { axiosCall } from './axiosCall1.js';

function Login() {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState({ userName: false, password: false });
    const [login, setLogin] = useState(false);
    const { loginThisUser, setLoginThisUser } = useContext(UserToLogIn);
    const uName = useRef();
    const pass = useRef();
    const navigate = useNavigate();


    const loginUser = async (e) => {
        e.preventDefault();
        const username = uName.current.value;
        const password = pass.current.value;
        try {
            const fetchdata = 'https://blogs.alexn.a2hosted.com/api/auth/login';
            const userInfo = { username, password }
            const data = await axiosCall.post(fetchdata, userInfo)
            setLoginThisUser(data.data);
        } catch (error) {
            <ErrorPage />
        }
        console.log("this", loginThisUser)
    };


    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(""))
        if (loginThisUser) {
            setLogin(true)
            if (login === true) {
                localStorage.setItem("token", JSON.stringify(loginThisUser.token))
                navigate("/");
            } else {
                localStorage.setItem("token", JSON.stringify(""))
            }
        }
    }, [loginThisUser]);


    if (!loginThisUser) return null;

    return (
        <div className="display-output">
            <Header />
            <h1>Login</h1>
            <div className="form">
                <button>
                    <Link to="/signup">Sign Up</Link>
                </button>
                <form className="form-form">
                    <label>User Name</label>
                    <input ref={uName}
                        type='text' id='name'>
                    </input>
                    <label>Password</label>
                    <input ref={pass}
                        type='password' id='password'>
                    </input>
                </form>
                <button onClick={(e) => loginUser(e)}>login</button>
            </div>
        </div >
    )
}


export default Login;