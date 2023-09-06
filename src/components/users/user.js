import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ErrorPage from '../error/error';

function User({ setOpenPopUp, user }) {
    const { id } = user;
    const [element, setElement] = useState([]);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const fetchdata = `https://dummyjson.com/users/${id}`;
        const fetchData = async () => {
            try {
                const user = await axios.get(fetchdata)
                setElement(user.data);
                setAddress(user.data.address);
            } catch (error) {
                <ErrorPage />
            }
        };
        fetchData();
    }, []);

    console.log(element);
    return (
        <div className='my-modal'>
            {/* <button onClick={() => setOpenPopUp(true)} >
                Show User
            </button> */}
            <div className="modal-box">
                <div className='popup-text'>
                    <div key={element.id}>
                        <h4>About {element.firstName} {element.lastName}</h4>
                        <p>Age: {element.age}</p>
                        <p>Email: {element.email}</p>
                        <p>Birth: {element.birthDate}</p>
                        <p>Phone: {element.phone}</p>
                        <p>Weight: {element.weight}</p>
                        <div className='address'>
                            <h4>Address:</h4>
                            <p>City: {address.city}</p>
                            <p>Zipcode: {address.postalCode}</p>
                            <p>Street: {address.address}</p>
                            <p>Suite: {address.state}</p>
                        </div>
                    </div>
                    <button onClick={() => setOpenPopUp(false)}>
                        Close Modal
                    </button>
                </div>
            </div>
        </div>
    );
}


export default User;