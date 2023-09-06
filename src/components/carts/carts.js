import { useEffect, useState } from "react";
import "../../css/Dashboard.css";
import Header from "../header/header";

function Carts() {
    const [element, setElement] = useState([]);

    useEffect(() => {
        const fetchdata = 'https://dummyjson.com/carts';
        const fetchData = async () => {
            const fetch1 = await fetch(fetchdata);
            const fetch2 = await fetch1.json()
            const fetch3 = await fetch2.carts;
            const fetch4 = await fetch3.map((product) => product.products)

            console.log(fetch4)
            setElement(fetch4);
        }
        fetchData();
    }, []);

    return (
        <div className="display-output">
            <Header />
            <h1>Carts</h1>
            {element.map((cart) =>
                <div className="wrapper">
                    <div className="carts">
                        {cart.map((item) => <div>
                            <p>Title: {item.title}</p>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total: {item.total}</p>
                        </div>
                        )}
                        {/* <div className="carts">
                        <p>Title: {cart[1].title}</p>
                        <p>Price: {cart[1].price}</p>
                        <p>Quantity: {cart[1].quantity}</p>
                        <p>Total: {cart[1].total}</p>
                    </div>
                    <div className="carts">
                        <p>Title: {cart[2].title}</p>
                        <p>Price: {cart[2].price}</p>
                        <p>Quantity: {cart[2].quantity}</p>
                        <p>Total: {cart[2].total}</p>
                    </div>
                    <div className="carts">
                        <p>Title: {cart[3].title}</p>
                        <p>Price: {cart[3].price}</p>
                        <p>Quantity: {cart[3].quantity}</p>
                        <p>Total: {cart[3].total}</p>
                    </div>
                    <div className="carts">
                        <p>Title: {cart[4].title}</p>
                        <p>Price: {cart[4].price}</p>
                        <p>Quantity: {cart[4].quantity}</p>
                        <p>Total: {cart[4].total}</p>
                    </div> */}
                    </div>
                </div>
            )}
        </div>
    )

}

export default Carts;