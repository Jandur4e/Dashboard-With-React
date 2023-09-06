import axios from 'axios';
import React, { useState, setState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function RegistrationForm() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();
    const [userPassword, setUserPassword] = useState();
    const fname = useRef();
    const lname = useRef();
    const userPass = useRef();
    const userEmail = useRef();
    const userThisName = useRef();
    const navigate = useNavigate();
    // const [confirmPassword, setConfirmPassword] = useState(null);


    const handleInputChange = (e) => {
        const thisName = fname.current.value;
        const thislast = lname.current.value;
        const pass = userPass.current.value;
        const mail = userEmail.current.value;
        const uName = userThisName.current.value;
        const url = 'https://blogs.alexn.a2hosted.com/api/auth/register';
        const obj = {
            firstname: thisName,
            lastname: thislast,
            username: uName,
            email: mail,
            password: pass,
        }
        console.log(obj)
        const fetchData = async () => {
            try {
                const product = await axios.post(url, obj)
                console.log(product.data)
            }
            catch (error) { console.log(error) }
        }
        fetchData();


        // const thisName = fname.current.value;
        // const thislast = lname.current.value;
        // const pass = userPass.current.value;
        // const mail = userEmail.current.value;
        // const uName = userThisName.current.value;
        // const { id, value } = e.target;
        // if (id === "firstName") {
        //     setFirstName([thisName]);
        // }
        // if (id === "lastName") {
        //     setLastName([thislast]);
        // }
        // if (id === "email") {
        //     setEmail([mail]);
        // }
        // if (id === "userName") {
        //     setUserName([uName]);
        // }
        // if (id === "password") {
        //     setUserPassword([pass]);
        // }
    }

    const handleSubmit = () => {

        // navigate("/login")
        console.log("firstName:", firstName, "lastName:", lastName, "email:", email, "userName:", userName, "password:", userPassword);

    };

    return (
        <div className="display-output">
            <div className="form">
                <form className="form-form">
                    <label for="firstName">First Name </label>
                    <input type="text" name="firstName" id="firstName" ref={fname} onChange={(e) => handleInputChange(e)} placeholder="First Name" />
                    <label for="lastName">Last Name </label>
                    <input type="text" name="lastname" id="lastName" ref={lname} onChange={(e) => handleInputChange(e)} placeholder="LastName" />
                    <label for="email">Email </label>
                    <input type="email" name="email" id="email" ref={userEmail} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                    <label for="userName">User Name </label>
                    <input type="userName" name="userName" id="userName" ref={userThisName} onChange={(e) => handleInputChange(e)} placeholder="User Name" />
                    <label for="password">Password </label>
                    <input type="password" name="password" id="password" ref={userPass} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                    <div class="footer">
                        <button onClick={() => handleSubmit()} disabled={firstName === "" || lastName === "" || email === "" || userName === "" || userPassword === ""}>Register</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RegistrationForm
