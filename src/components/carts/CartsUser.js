import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserToLogIn } from '../login/LoginContext';
import axios from 'axios';
import Header from '../header/header';

const CartsUser = () => {
    const { id } = useParams();
    const { loginThisUser, setLoginThisUser } = useContext(UserToLogIn);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const fetchdata = `https://dummyjson.com/carts/user/${id}`;
        const fetchData = async () => {
            try {
                const cart = await axios.get(fetchdata)
                setCarts(cart.data.carts.map((product) => product.products));
            }
            catch (error) { console.log(error) }
        }
        console.log(carts);
        fetchData();
    }, []);

    if (!carts) return null;


    return (
        <div className="display-output">
            <Header />
            <h1>Carts</h1>
            {carts.map((cart) =>
                <div className="wrapper">
                    <div className="carts">
                        {cart.map((item) => <div>
                            <p>Title: {item.title}</p>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total: {item.total}</p>
                        </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartsUser;