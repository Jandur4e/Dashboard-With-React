import React, { useCallback, useContext, useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ErrorPage from '../error/error';
import axios from 'axios';
import { UserToLogIn } from './LoginContext';
import Header from '../header/header';

function Login() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [error, setError] = useState({ userName: false, password: false });
    const { loginThisUser, setLoginThisUser } = useContext(UserToLogIn)
    const navigate = useNavigate();

    const fetchdata = 'https://dummyjson.com/users';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(fetchdata)
                data.data.users.map((user) => { user.login = false })
                setUsers(data.data.users);
            } catch (error) {
                <ErrorPage />
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(loginThisUser.token));

    }, [loginThisUser])


    function findUser(e) {
        e.preventDefault();
        const loginUser = users.find((thisUser) => {
            if (thisUser.username === e.userName && thisUser.password === e.password);
            return thisUser.username === e.userName && thisUser.password === e.password;
        });
        console.log("loginUser", loginUser)
        function checkUser() {
            users.map((someUser) => {
                if (e.userName === someUser.username || e.password === someUser.password) {
                    setLoginThisUser([someUser]);
                }
            })
        }
        checkUser()
        if (loginUser) {
            navigate(`/logget/user/${loginUser.id}`)
        } else {
            alert("Wrong username or password")
        }
        // if (login === true) {
        //     setLoginThisUser(user);
        // }
    };


    useEffect(() => {
        if (user.userName === "" || user.password === "") {
            setError({ ...error, userName: true, password: true });
        }
        else {
            setError({ ...error, userName: false, password: false });
        }
    }, [user]);

    console.log("jas", loginThisUser)


    return (
        <div className="display-output">
            <Header />
            {/* {users.login === true ? <img src={users.image} alt='image' /> : null} */}
            <h1>Login</h1>
            <div className="form">
                <button>
                    <Link to="/signup">Sign Up</Link>
                </button>
                <form className="form-form">
                    <label>User Name</label>
                    <input value={user.userName} placeholder={error.userName ? "This filed is requied" : null}
                        type='text' id='name' onChange={(e) => setUser({ ...user, userName: e.target.value })}></input>
                    <label>Password</label>
                    <input value={user.password} placeholder={error.password ? "This filed is requied" : null}
                        type='password' id='password' onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
                </form>
                <button onClick={(e) => findUser(e)}
                    disabled={user.userName == "" && user.password == ""}
                >login</button>
            </div>
        </div>
    )
}


export default Login;