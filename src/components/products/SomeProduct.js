import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import { AddedToCartContext } from './ProductContext';

const SomeProduct = ({ setOpenPopUp, someProduct }) => {
    const { id } = someProduct;
    const [product, setProduct] = useState([]);
    // const { addToCart, setAddToCart } = useContext(AddedToCartContext);


    useEffect(() => {
        const fetchdata = `https://dummyjson.com/products/${id}`;
        const fetchData = async () => {
            try {
                const product = await axios.get(fetchdata)
                setProduct(product.data);
            }
            catch (error) { console.log(error) }
        }
        fetchData();
    }, []);


    // const addProductToCart = (product) => {
    //     setAddToCart([...addToCart, product]);
    // }

    if (!product) return null;
    return (
        <div className='my-modal'>
            <div className="modal-box">
                <div className='popup-text'>
                    <div className="product" key={product.id}>
                        <img className='some-product-image' src={product.thumbnail} alt='' />
                        <p><b>Brand:</b> {product.brand}</p>
                        <p><b>Title:</b> {product.title}</p>
                        <p><b>Description:</b> {product.description}</p>
                        <p><b>Price:</b> {product.price} $</p>
                        <p><b>DiscountPercentage:</b> {product.discountPercentage}</p>
                        <p><b>Rating:</b> {product.rating}</p>
                        <p><b>Stock:</b> {product.stock} pices</p>
                        <p><b>Category:</b> {product.category}</p>
                        <button onClick={() => setOpenPopUp(false)}>Close Modal</button>
                        {/* <button onClick={() => addProductToCart(product)}>Add to cart</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomeProduct;