import { useContext, useEffect, useState } from "react";
import "../../css/Dashboard.css";
import { Link } from "react-router-dom";
import User from "./user";
import ErrorPage from "../error/error";
import axios from "axios";
import CartUser from "./cartUser";
import Header from "../header/header";


function Users() {
    const [element, setElement] = useState([]);
    const [openPopUp, setOpenPopUp] = useState(false)
    const [openPopUpCart, setOpenPopUpCart] = useState(false)
    const [thisUser, setThisUser] = useState([]);
    const [cartUser, setCartUser] = useState([]);

    useEffect(() => {
        const fetchdata = 'https://dummyjson.com/users';
        const fetchData = async () => {
            try {
                const users = await axios.get(fetchdata)
                setElement(users.data.users);
            } catch (error) {
                <ErrorPage />
            }
        };
        fetchData();
    }, []);

    function openModal(user) {
        setOpenPopUp(true);
        setThisUser(user);
    };

    function openCartModal(user) {
        setOpenPopUpCart(true);
        setCartUser(user);
    };





    return (
        <div className="display-output">
            <Header />
            <h1>Users</h1>
            <div className="wrapper">
                {openPopUp && thisUser && <User setOpenPopUp={setOpenPopUp} user={thisUser} />}
                {openPopUpCart && cartUser && <CartUser setOpenPopUpCart={setOpenPopUpCart} cartUser={cartUser} />}
                {element.map((user) => (
                    <div className="user-box">
                        <img className="user-image" src={user.image} />
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <div>
                        </div>
                        <div>
                            <button onClick={() => openModal(user)} className="button-modal" >View About User</button>
                        </div>
                        <div>
                            <button onClick={() => openCartModal(user)} className="button-modal" >View Cart of User</button>
                        </div>
                        {/* <User /> */}
                        {/* <p>Age: {user.age}</p>
                        <p>Email: {user.email}</p>
                        <p>Birth: {user.birthDate}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Weight: {user.weight}</p>
                        <div className='address'>
                            <h4>Address:</h4>
                            <p>City: {user.address.city}</p>
                            <p>Zipcode: {user.address.zipcode}</p>
                            <p>Street: {user.address.street}</p>
                            <p>Suite: {user.address.suite}</p>
                            <p>Geo: x:{user.address.coordinates.lng}, y:{user.address.coordinates.lat}</p>
                        </div>
                        <div className='company'>
                            <h4>Company:</h4>
                            <p>Name: {user.company.name}</p>
                            <p>Departmen: {user.company.departmen}</p>
                            <p>Position: {user.company.title}</p>
                        </div> */}

                    </div>
                ))}
            </div>
        </div >
    )
}

export default Users;
