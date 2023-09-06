import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserToLogIn } from '../login/LoginContext';
import axios from 'axios';
import Header from '../header/header';


const LoggedUser = () => {
    const { id } = useParams();
    const { loginThisUser, setLoginThisUser } = useContext(UserToLogIn);
    const [posts, setPosts] = useState();
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const fetchdata = `https://dummyjson.com/posts/user/${id}`;
        const fetchData = async () => {
            try {
                const post = await axios.get(fetchdata)
                setPosts(post.data.posts);
            }
            catch (error) { console.log(error) }
        }
        console.log(posts);
        fetchData();
    }, []);

    useEffect(() => {
        const fetchdata = `https://dummyjson.com/carts/user/${id}`;
        const fetchData = async () => {
            try {
                const cart = await axios.get(fetchdata)
                setCarts(cart.data.carts.map((products) => products.products));
            }
            catch (error) { console.log(error) }
        }
        console.log(carts);
        fetchData();
    }, []);

    if (!posts) return null;


    return (
        <div className="display-output">
            <Header />
            <div className='mainBox'>
                <div>
                    <h1>Posts</h1>
                    {posts.map((item) => (
                        <div className='boxs'>
                            <div className="item" key={item.id}>
                                <p><b>item No:{item.id}</b></p>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h1>Carts</h1>
                    {carts.map((cart) =>
                        <div>
                            <div className="carts">
                                {cart.map((item) =>
                                    <div className='boxs' >
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
            </div>
        </div >
    )
}

export default LoggedUser;