import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ErrorPage from '../error/error';

function CartUser({ setOpenPopUpCart, cartUser }) {
    const { id } = cartUser;
    const [myCart, setMyCart] = useState([]);

    useEffect(() => {
        const fetchdata = `https://dummyjson.com/carts/user/${id}`;
        const fetchData = async () => {
            try {
                const user = await axios.get(fetchdata)
                setMyCart(user.data);
            } catch (error) {
                <ErrorPage />
            }
        };
        fetchData();
    }, []);

    console.log(myCart);
    return (
        <div className='my-modal'>
            {/* <button onClick={() => setOpenPopUp(true)} >
                Show User
            </button> */}
            <div className="modal-box">
                <div className='popup-text'>
                    <div>
                        {myCart.carts?.length ? myCart.carts.map((cart) => (
                            <div>
                                <div>
                                    <span>This user buy</span> <b>{cart.totalProducts}</b> <span>products!</span>
                                    <h4>Product in Cart:</h4>
                                    {cart.products.map((prod) => (
                                        <div className='product-in-cart'>
                                            <p><b>{prod.quantity}</b> {prod.quantity === 1 ? "pice " : "pices "}
                                                <b>{prod.title}</b> and the price is <b>{prod.price}$</b> per pice.</p>
                                        </div>
                                    ))}
                                    <p>And total price is <b>{cart.total}$</b></p>
                                </div>
                            </div>
                        ))
                            : "Ne kupil nisto"}
                    </div>
                    <button onClick={() => setOpenPopUpCart(false)}>
                        Close Modal
                    </button>
                </div>
            </div>
        </div>
    );
}


export default CartUser;